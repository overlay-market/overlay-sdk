import {type Address} from "viem";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module.js";
import { OverlaySDKCommonProps } from "../core/types.js";
import { getActiveMarketsFromSubgraph } from "../subgraph.js";
import { MARKET_LOGO, PRICE_CURRENCY_FROM_QUOTE, V1_PERIPHERY_ADDRESS, ORACLE_LOGO } from "../constants.js";
import { OverlaySDK } from "../sdk.js";
import { formatBigNumber } from "../common/utils/formatBigNumber.js";
import { formatFundingRateToAnnual, formatFundingRateToDaily } from "../common/utils/formatWei.js";
import { getMarketsDetailsByChainId } from "../services/marketsDetails.js";
export class OverlaySDKMarkets extends OverlaySDKModule {
  private sdk: OverlaySDK;

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props);
    this.sdk = sdk;
  }  
 
  public async getActiveMarkets(): Promise<any> {
    const chainId = this.core.chainId
    const activeMarkets = await getActiveMarketsFromSubgraph()

    const transformedMarketsData = activeMarkets 
    ?  
      await Promise.allSettled(activeMarkets.map(async(market) => {
        const result = await this.sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], market.id as Address)
       
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

          parsedBid = decimals && formatBigNumber(result.bid, decimals, 5)
          parsedAsk = decimals && formatBigNumber(result.ask, decimals, 5)
          parsedMid = decimals && formatBigNumber(result.mid, decimals, 5)
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

    const marketDetails = await getMarketsDetailsByChainId(chainId as unknown as Address)
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

    return expandedMarketsData
  }
}
