import {type Address} from "viem";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module.js";
import { OverlaySDKCommonProps } from "../core/types.js";
import { getActiveMarketsFromSubgraph } from "../subgraph.js";
import { MARKET_LOGO, PRICE_CURRENCY_FROM_QUOTE, V1_PERIPHERY_ADDRESS, ORACLE_LOGO } from "../constants.js";
import { OverlaySDK } from "../sdk.js";
import { formatBigNumber } from "../common/utils/formatBigNumber.js";
import { formatFundingRateToAnnual, formatFundingRateToDaily } from "../common/utils/formatWei.js";
import { getMarketDetailsById, getMarketsDetailsByChainId } from "../services/marketsDetails.js";
import { CHAINS, invariant } from "../common/index.js";
export class OverlaySDKMarkets extends OverlaySDKModule {
  private sdk: OverlaySDK;
  private marketDetailsCache: Record<string, { data: any; lastUpdated: number }> = {};
  private activeMarketsCache?: { data: any; lastUpdated: number };

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props);
    this.sdk = sdk;
  }

  public async getMarketDetails(marketId: string, noCaching: boolean = false) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    // check if we have the data in cache and if it's not too old
    if (!noCaching && this.marketDetailsCache[marketId]) {
      const cachedData = this.marketDetailsCache[marketId];
      const isCacheValid = Date.now() - cachedData.lastUpdated < 3600 * 1000; // 1 hour
      if (isCacheValid) {
        return cachedData.data;
      }
    }

    // if not in cache or cache is too old or noCaching is true, fetch the data
    const marketDetails = await getMarketDetailsById(marketId, chainId)
    invariant(marketDetails, "Market not found");

    const marketAddress = marketDetails.chain?.deploymentAddress as Address

    const capLeverage = await this.sdk.market.getCapLeverage(marketAddress)

    const marketData = {
      ...marketDetails,
      marketAddress,
      capLeverage: formatBigNumber(capLeverage, 18, 2),
    };

    if (!noCaching) {
      this.marketDetailsCache[marketId] = { data: marketData, lastUpdated: Date.now() };
    }

    return marketData;
  }

  public async getActiveMarkets(noCaching: boolean = false) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    // check if we have the data in cache and if it's not too old
    if (!noCaching && this.activeMarketsCache) {
      const isCacheValid = Date.now() - this.activeMarketsCache.lastUpdated < 3600 * 1000; // 1 hour
      if (isCacheValid) {
        return this.activeMarketsCache.data;
      }
    }

    // if not in cache or cache is too old or noCaching is true, fetch the data
    const marketDetails = await getMarketsDetailsByChainId(chainId)
    const marketDetailsValues = marketDetails && Array.from(marketDetails?.values())

    const transformedMarketsData = marketDetailsValues 
    ?  
      await Promise.allSettled(marketDetailsValues.map(async(market) => {
        if (market.disabled) return undefined
        const marketId = market.id as Address
        const result = await this.sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], marketId)
       
        if (result) {
          let parsedBid: string | number | undefined = undefined
          let parsedAsk: string | number | undefined = undefined
          let parsedMid: string | number | undefined = undefined
          let parsedOiLong: string | number | undefined = undefined
          let parsedOiShort: string | number | undefined = undefined
          let parsedCapOi: string | number | undefined = undefined
          let parsedDailyFundingRate: string | number | undefined = undefined
          let parsedAnnualFundingRate: string | number | undefined = undefined
           
          const decimals = 18

          parsedBid = decimals && formatBigNumber(result.bid, decimals, 8)
          parsedAsk = decimals && formatBigNumber(result.ask, decimals, 8)
          parsedMid = decimals && formatBigNumber(result.mid, decimals, 8)
          parsedOiLong = decimals && formatBigNumber(result.oiLong, decimals, 18)
          parsedOiShort = decimals && formatBigNumber(result.oiShort, decimals, 18)
          parsedCapOi = decimals && formatBigNumber(result.capOi, decimals, 18)
          parsedDailyFundingRate = decimals && formatFundingRateToDaily(result.fundingRate, 18, 2)
          parsedAnnualFundingRate = decimals && formatFundingRateToAnnual(result.fundingRate, 18, 2)
           
        return {
          ...market,
          ...result,
          parsedBid,
          parsedAsk,
          parsedMid,
          parsedOiLong,
          parsedOiShort,
          parsedCapOi,
          parsedDailyFundingRate,
          parsedAnnualFundingRate,
        }
        } else {
          return undefined
        }
        
      }))
    : undefined

    const marketDetailsIds = marketDetails ? Array.from(marketDetails.keys()) : []

    const expandedMarketsData = transformedMarketsData && marketDetails
      ? transformedMarketsData
        .filter(item => item.status === 'fulfilled')
        .map(item => item.value)
        .filter(item => item !== undefined)
        .map(market => {
          if (!marketDetails.get(market.id)?.disabled && marketDetailsIds.includes(market.id)
          ) {
            const marketName = marketDetails.get(market.id)?.marketName ?? '';
            const marketDetailsCurrency = marketDetails.get(market.id)?.currency.trim();
            const priceCurrency = marketDetailsCurrency ? PRICE_CURRENCY_FROM_QUOTE[marketDetailsCurrency as keyof typeof PRICE_CURRENCY_FROM_QUOTE] : '';
            const marketDetailsLogo = marketDetails.get(market.id)?.logo;
            const marketLogo = marketDetailsLogo ? MARKET_LOGO[marketDetailsLogo as keyof typeof MARKET_LOGO] : '';
            const marketDetailsOracleLogo = marketDetails.get(market.id)?.oracleLogo;
            const oracleLogo = marketDetailsOracleLogo ? ORACLE_LOGO[marketDetailsOracleLogo as keyof typeof ORACLE_LOGO] : '';

            return {
              ...market,
              marketName,
              priceCurrency,
              marketLogo,
              oracleLogo
            }
          }
           else {
            return undefined
          }
        })
        .filter(item => item !== undefined) 
      : undefined

    if (!noCaching) {
      this.activeMarketsCache = { data: expandedMarketsData, lastUpdated: Date.now() };
    }

    return expandedMarketsData
  }

  public async transformMarketsData() {
    const activeMarkets = await this.getActiveMarkets()
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    const transformedMarketsDataPromises = activeMarkets.map(async (market: any) => {
      const marketAddress = market.id as Address

      const {oiLong, oiShort} = await this.sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], marketAddress)

      const shortPercentageOfTotalOi = (Number(oiShort) / (Number(oiLong) + Number(oiShort)) * 100).toFixed(2)
      const longPercentageOfTotalOi = (Number(oiLong) / (Number(oiLong) + Number(oiShort)) * 100).toFixed(2)

      return {
        marketId: market.marketId,
        marketAddress,
        price: market.parsedMid,
        funding: market.parsedDailyFundingRate,
        longPercentageOfTotalOi: longPercentageOfTotalOi,
        shortPercentageOfTotalOi: shortPercentageOfTotalOi,
        oracleLogo: market.oracleLogo,
        marketLogo: market.marketLogo,
        priceCurrency: market.priceCurrency,
      };
    });

    const transformedMarketsData = await Promise.all(transformedMarketsDataPromises);

    return transformedMarketsData;
  }
}
