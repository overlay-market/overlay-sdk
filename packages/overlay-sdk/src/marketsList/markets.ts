import {type Address} from "viem";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module.js";
import { OverlaySDKCommonProps } from "../core/types.js";
import { getActiveMarketsFromSubgraph } from "../subgraph.js";
import { MarketDetails, V1_PERIPHERY_ADDRESS } from "../constants.js";
import { OverlaySDK } from "../sdk.js";
import { formatBigNumber } from "../common/utils/formatBigNumber.js";
import { formatFundingRateToAnnual, formatFundingRateToDaily } from "../common/utils/formatWei.js";
export class OverlaySDKMarkets extends OverlaySDKModule {
  private sdk: OverlaySDK;

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props);
    this.sdk = sdk;
  }  
 
  public async getActiveMarkets(): Promise<any> {
    const chainId = this.core.chainId
    const activeMarkets = await getActiveMarketsFromSubgraph()
   
    const promiseMarketsData = activeMarkets 
    ?  
      await Promise.allSettled(activeMarkets.map(async(market) => {
        const result = await this.sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], market.id as Address)
       
        if (result) {
          let marketName: string | undefined = undefined
          let parsedBid: string | number | undefined = undefined
          let parsedAsk: string | number | undefined = undefined
          let parsedMid: string | number | undefined = undefined
          let parsedOiLong: string | number | undefined = undefined
          let parsedOiShort: string | number | undefined = undefined
          let parsedCapOi: string | number | undefined = undefined
          let parsedDailyFundingRate: string | number | undefined = undefined
          let parsedAnnualFundingRate: string | number | undefined = undefined
          let marketLogo: string | undefined = undefined
          let priceCurrency: string | undefined = undefined
  
          const decimals = 18

          marketName = MarketDetails[market.id]?.marketName ?? ''
          parsedBid = decimals && formatBigNumber(result.bid, decimals, 5)
          parsedAsk = decimals && formatBigNumber(result.ask, decimals, 5)
          parsedMid = decimals && formatBigNumber(result.mid, decimals, 5)
          parsedOiLong = decimals && formatBigNumber(result.oiLong, decimals, 18)
          parsedOiShort = decimals && formatBigNumber(result.oiShort, decimals, 18)
          parsedCapOi = decimals && formatBigNumber(result.capOi, decimals, 18)
          parsedDailyFundingRate = decimals && formatFundingRateToDaily(result.fundingRate, 18, 2)
          parsedAnnualFundingRate = decimals && formatFundingRateToAnnual(result.fundingRate, 18, 2)
          // marketLogo = MarketDetails[marketId]?.logo
          priceCurrency = MarketDetails[market.id]?.currency ?? ''
  
        return {
          ...market,
          ...result,
            marketName,
            parsedBid,
            parsedAsk,
            parsedMid,
            parsedOiLong,
            parsedOiShort,
            parsedCapOi,
            parsedDailyFundingRate,
            parsedAnnualFundingRate,
            marketLogo,
            priceCurrency,
        }
        } else {
          return undefined
        }
        
      }))
    : undefined

    const marketsData = promiseMarketsData 
      ? promiseMarketsData
        .filter(item => item.status === 'fulfilled')
        .map(item => item.value)
        .filter(item => item !== undefined) 
      : undefined

    return marketsData
  }
}
