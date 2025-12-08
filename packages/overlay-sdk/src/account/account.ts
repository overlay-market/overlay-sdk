import { Address } from "viem";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module";
import { OverlaySDKCommonProps } from "../core/types";
import { OverlaySDK } from "../sdk";
import { invariant } from "../common";
import { getLiquidatedPositions, getNumberOfPositions, getUnwindPositions } from "../subgraph";
import { formatBigNumber } from "../common/utils";
import moment from "moment";
import { IntervalType, OverviewData } from "./types";

export class OverlaySDKAccountDetails extends OverlaySDKModule {
  private sdk: OverlaySDK;
  private overviewCache: Record<string, { data: any; lastUpdated: number }> = {};

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props);
    this.sdk = sdk;
  }

  getOverview = async (interval: IntervalType = '1D', account?: Address, refreshData?: boolean): Promise<OverviewData> => {
    let walletClient = account;
    if (!walletClient) {
      invariant(this.sdk.core.web3Provider, "Web3 provider is not set");
      walletClient = account ?? (await this.sdk.core.web3Provider?.requestAddresses())[0] as Address;
    }
    const chainId = this.core.chainId;

    const cacheKey = `${walletClient}-${chainId}`;

    if (!refreshData && this.overviewCache[cacheKey]) {
      const cachedData = this.overviewCache[cacheKey];
      if (Date.now() - cachedData.lastUpdated < 3 * 60 * 1000) { // 3 minutos
        return cachedData.data;
      }
      delete this.overviewCache[cacheKey];
    }

    const [unwindPositions, liquidatedPositions, openPositions, numberOfPositions] = await Promise.all([
      getUnwindPositions({
      chainId: chainId,
      account: walletClient.toLowerCase()
      }),
      getLiquidatedPositions({
      chainId: chainId,
      account: walletClient.toLowerCase()
      }),
      this.sdk.openPositions.transformOpenPositions(1, 1000, undefined, walletClient, refreshData).then(result => result.data),
      getNumberOfPositions(chainId, walletClient.toLowerCase())
    ]);
    
    const formattedUnwindRows = unwindPositions.map((row: {timestamp: string; pnl: string}) => ({
      ...row,
      type: 'unwind',
    }))

    const formattedLiquidateRows = liquidatedPositions.map((row: {timestamp: string; size: string}) => ({
      ...row,
      type: 'liquidate',
    }))

    const mergedRows = [...formattedUnwindRows, ...formattedLiquidateRows].sort((a, b) => parseInt(a.timestamp) - parseInt(b.timestamp))

    const dataByPeriod = this.getDataByPeriod(mergedRows, interval)

    // Fetch oracle price to convert OVL positions to USDT
    let oraclePrice: bigint | undefined;
    try {
      oraclePrice = await this.sdk.lbsc.getOraclePrice();
    } catch (error) {
      console.error('Failed to fetch oracle price for overview:', error);
    }

    let totalValueLocked = 0
    let unrealizedPnL = 0

    openPositions.forEach((position) => {
      if (position.stableValues) {
        // LBSC position - already in USDT
        totalValueLocked += position.stableValues.size ? parseFloat(position.stableValues.size) : 0;
        unrealizedPnL += position.stableValues.unrealizedPnL ? parseFloat(position.stableValues.unrealizedPnL) : 0;
      } else if (oraclePrice) {
        // Regular OVL position - convert to USDT using oracle price
        const sizeOvl = position.size ? parseFloat(position.size as string) : 0;
        const pnlOvl = position.unrealizedPnL ? parseFloat(position.unrealizedPnL as string) : 0;

        // Convert: (OVL value * oracle price) / 1e18
        const WAD = 1e18;
        const sizeUsdt = (sizeOvl * Number(oraclePrice)) / WAD;
        const pnlUsdt = (pnlOvl * Number(oraclePrice)) / WAD;

        totalValueLocked += sizeUsdt;
        unrealizedPnL += pnlUsdt;
      }
    })

    // Calculate realized PnL separately for USDT and OVL
    let realizedPnlUsdt = 0;
    let realizedPnlOvl = 0;

    unwindPositions.forEach((unwind: any) => {
      // If unwind has stableOut, it's LBSC position - use USDT value
      if (unwind.stableOut && unwind.stableOut !== '0') {
        realizedPnlUsdt += parseInt(unwind.stableOut) / 1e18;
      } else if (unwind.pnl) {
        // Regular position - use OVL value
        realizedPnlOvl += parseInt(unwind.pnl) / 1e18;
      }
    })

    const overviewData: OverviewData = {
      numberOfOpenPositions: Number(numberOfPositions?.account?.numberOfOpenPositions ?? 0),
      realizedPnl: numberOfPositions?.account?.realizedPnl ? formatBigNumber(numberOfPositions.account.realizedPnl, 18, 6) : '0',
      realizedPnlUsdt: realizedPnlUsdt.toFixed(2),
      realizedPnlOvl: realizedPnlOvl.toFixed(2),
      totalValueLocked: totalValueLocked.toFixed(2),
      unrealizedPnL: unrealizedPnL.toFixed(2),
      lockedPlusUnrealized: (totalValueLocked + unrealizedPnL).toFixed(2),
      dataByPeriod,
    };

    this.overviewCache[cacheKey] = {
      data: overviewData,
      lastUpdated: Date.now(),
    };

    return overviewData;
  }

  private getDataByPeriod = (
    mergedRows: {timestamp: string; pnl?: string; size?: string; type: string}[], 
    selectedInterval: IntervalType
  ) => {
    const dataByPeriod: {[key: string]: {realizedPnl: number; date: Date}} = {}

    if (mergedRows.length) {
      let cumulativeRealizedPnl = 0
      let currentDate = moment.unix(parseInt(mergedRows[0].timestamp)) // minDate

      mergedRows.forEach((row: {timestamp: string; pnl?: string; size?: string; type: string}) => {
        const date = moment.unix(parseInt(row.timestamp))

        // Add missing dates
        while (currentDate.isBefore(date)) {
          let periodKey: string = this.getPeriodKey(currentDate, selectedInterval)

          if (!dataByPeriod[periodKey]) {
            dataByPeriod[periodKey] = {
              date: currentDate.toDate(),
              realizedPnl: cumulativeRealizedPnl,
            }
          }

          this.incrementDate(currentDate, selectedInterval)
        }

        let periodKey: string = this.getPeriodKey(date, selectedInterval)

        if (!dataByPeriod[periodKey]) {
          dataByPeriod[periodKey] = {
            date: date.toDate(),
            realizedPnl: cumulativeRealizedPnl,
          }
        }

        if (row.type === 'unwind') {
          cumulativeRealizedPnl += parseInt(row?.pnl ?? '0') / 10 ** 18
        } else if (row.type === 'liquidate') {
          cumulativeRealizedPnl -= parseInt(row?.size ?? '0') / 10 ** 18
        }

        dataByPeriod[periodKey].realizedPnl = cumulativeRealizedPnl
      })

      // Fill up to current date
      const now = moment()
      while (currentDate.isBefore(now)) {
        let periodKey: string = this.getPeriodKey(currentDate, selectedInterval)

        if (!dataByPeriod[periodKey]) {
          dataByPeriod[periodKey] = {
            date: currentDate.toDate(),
            realizedPnl: cumulativeRealizedPnl,
          }
        }

        this.incrementDate(currentDate, selectedInterval)
      }
    }

    let data = Object.values(dataByPeriod).sort((a, b) => a.date.getTime() - b.date.getTime())

    // Filter data for selected interval
    const startDate = this.getFilterStartDate(selectedInterval)
    data = data.filter(item => moment(item.date).isSameOrAfter(startDate))

    return data
  }

  private getPeriodKey = (date: moment.Moment, selectedInterval: IntervalType): string => {
    switch (selectedInterval) {
      case '1D':
        let hour = Math.floor(date.hour())
        return `${date.format('YYYY-MM-DD')}-${hour}`
      case '1W':
        // day
        return `${date.format('YYYY-MM-DD')}`
      case '6M':
        // week
        return `${date.year()}-${date.week()}`
      case '1Y':
        // month
        return date.format('YYYY-MM')
      default:
        // day
        return date.format('YYYY-MM-DD')
    }
  }

  private incrementDate = (date: moment.Moment, selectedInterval: IntervalType): void => {
    const intervalToAddMap: Record<IntervalType, moment.unitOfTime.DurationConstructor> = {
      '1D': 'hour',
      '1W': 'day',
      '1M': 'day',
      '6M': 'week',
      '1Y': 'month',
    }
  
    const intervalToAdd = intervalToAddMap[selectedInterval]
    date.add(1, intervalToAdd)
  }

  private getFilterStartDate = (selectedInterval: IntervalType) => {
    const now = moment()
    const startDate = now.clone()
  
    switch (selectedInterval) {
      case '1D':
        startDate.subtract(24, 'hours')
        break
      case '1W':
        startDate.subtract(1, 'week')
        break
      case '6M':
        startDate.subtract(6, 'months')
        break
      case '1Y':
        startDate.subtract(1, 'year')
        break
      default:
        startDate.subtract(1, 'month')
    }
  
    return startDate
  }
}