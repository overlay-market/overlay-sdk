import { OverlaySDKModule } from "../common/class-primitives/sdk-module";
import { invariant } from "../common";
import { getLiquidatedPositions, getNumberOfPositions, getUnwindPositions } from "../subgraph";
import { formatBigNumber } from "../common/utils";
import moment from "moment";
export class OverlaySDKAccountDetails extends OverlaySDKModule {
    constructor(props, sdk) {
        super(props);
        this.overviewCache = {};
        this.getOverview = async (interval = '1D', account, noCaching) => {
            let walletClient = account;
            if (!walletClient) {
                invariant(this.sdk.core.web3Provider, "Web3 provider is not set");
                walletClient = account ?? (await this.sdk.core.web3Provider?.requestAddresses())[0];
            }
            const chainId = this.core.chainId;
            // check if we have the data in cache and if it's not too old
            const cacheKey = `${walletClient}-${chainId}`;
            if (!noCaching && this.overviewCache[cacheKey]) {
                const cachedData = this.overviewCache[cacheKey];
                const isCacheValid = Date.now() - cachedData.lastUpdated < 300 * 1000; // 5 minutes
                if (isCacheValid) {
                    return cachedData.data;
                }
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
                this.sdk.openPositions.transformOpenPositions(1, 1000, undefined, walletClient).then(result => result.data),
                getNumberOfPositions(chainId, walletClient.toLowerCase())
            ]);
            const formattedUnwindRows = unwindPositions.map((row) => ({
                ...row,
                type: 'unwind',
            }));
            const formattedLiquidateRows = liquidatedPositions.map((row) => ({
                ...row,
                type: 'liquidate',
            }));
            const mergedRows = [...formattedUnwindRows, ...formattedLiquidateRows].sort((a, b) => parseInt(a.timestamp) - parseInt(b.timestamp));
            const dataByPeriod = this.getDataByPeriod(mergedRows, interval);
            let totalValueLocked = 0;
            let unrealizedPnL = 0;
            openPositions.forEach((position) => {
                totalValueLocked += position.size ? parseFloat(position.size) : 0;
                unrealizedPnL += position.unrealizedPnL ? parseFloat(position.unrealizedPnL) : 0;
            });
            const overviewData = {
                numberOfOpenPositions: Number(numberOfPositions?.account?.numberOfOpenPositions ?? 0),
                realizedPnl: numberOfPositions?.account?.realizedPnl ? formatBigNumber(numberOfPositions.account.realizedPnl, 18, 6) : '0',
                totalValueLocked: totalValueLocked.toFixed(2),
                unrealizedPnL: unrealizedPnL.toFixed(6),
                lockedPlusUnrealized: (totalValueLocked + unrealizedPnL).toFixed(2),
                dataByPeriod,
            };
            if (!noCaching) {
                this.overviewCache[cacheKey] = { data: overviewData, lastUpdated: Date.now() };
            }
            return overviewData;
        };
        this.getDataByPeriod = (mergedRows, selectedInterval) => {
            const dataByPeriod = {};
            if (mergedRows.length) {
                let cumulativeRealizedPnl = 0;
                let currentDate = moment.unix(parseInt(mergedRows[0].timestamp)); // minDate
                mergedRows.forEach((row) => {
                    const date = moment.unix(parseInt(row.timestamp));
                    // Add missing dates
                    while (currentDate.isBefore(date)) {
                        let periodKey = this.getPeriodKey(currentDate, selectedInterval);
                        if (!dataByPeriod[periodKey]) {
                            dataByPeriod[periodKey] = {
                                date: currentDate.toDate(),
                                realizedPnl: cumulativeRealizedPnl,
                            };
                        }
                        this.incrementDate(currentDate, selectedInterval);
                    }
                    let periodKey = this.getPeriodKey(date, selectedInterval);
                    if (!dataByPeriod[periodKey]) {
                        dataByPeriod[periodKey] = {
                            date: date.toDate(),
                            realizedPnl: cumulativeRealizedPnl,
                        };
                    }
                    if (row.type === 'unwind') {
                        cumulativeRealizedPnl += parseInt(row?.pnl ?? '0') / 10 ** 18;
                    }
                    else if (row.type === 'liquidate') {
                        cumulativeRealizedPnl -= parseInt(row?.size ?? '0') / 10 ** 18;
                    }
                    dataByPeriod[periodKey].realizedPnl = cumulativeRealizedPnl;
                });
                // Fill up to current date
                const now = moment();
                while (currentDate.isBefore(now)) {
                    let periodKey = this.getPeriodKey(currentDate, selectedInterval);
                    if (!dataByPeriod[periodKey]) {
                        dataByPeriod[periodKey] = {
                            date: currentDate.toDate(),
                            realizedPnl: cumulativeRealizedPnl,
                        };
                    }
                    this.incrementDate(currentDate, selectedInterval);
                }
            }
            let data = Object.values(dataByPeriod).sort((a, b) => a.date.getTime() - b.date.getTime());
            // Filter data for selected interval
            const startDate = this.getFilterStartDate(selectedInterval);
            data = data.filter(item => moment(item.date).isSameOrAfter(startDate));
            return data;
        };
        this.getPeriodKey = (date, selectedInterval) => {
            switch (selectedInterval) {
                case '1D':
                    let hour = Math.floor(date.hour());
                    return `${date.format('YYYY-MM-DD')}-${hour}`;
                case '1W':
                    // day
                    return `${date.format('YYYY-MM-DD')}`;
                case '6M':
                    // week
                    return `${date.year()}-${date.week()}`;
                case '1Y':
                    // month
                    return date.format('YYYY-MM');
                default:
                    // day
                    return date.format('YYYY-MM-DD');
            }
        };
        this.incrementDate = (date, selectedInterval) => {
            const intervalToAddMap = {
                '1D': 'hour',
                '1W': 'day',
                '1M': 'day',
                '6M': 'week',
                '1Y': 'month',
            };
            const intervalToAdd = intervalToAddMap[selectedInterval];
            date.add(1, intervalToAdd);
        };
        this.getFilterStartDate = (selectedInterval) => {
            const now = moment();
            const startDate = now.clone();
            switch (selectedInterval) {
                case '1D':
                    startDate.subtract(24, 'hours');
                    break;
                case '1W':
                    startDate.subtract(1, 'week');
                    break;
                case '6M':
                    startDate.subtract(6, 'months');
                    break;
                case '1Y':
                    startDate.subtract(1, 'year');
                    break;
                default:
                    startDate.subtract(1, 'month');
            }
            return startDate;
        };
        this.sdk = sdk;
    }
}
//# sourceMappingURL=account.js.map