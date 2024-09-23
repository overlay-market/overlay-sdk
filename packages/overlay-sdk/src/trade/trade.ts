import { Address } from "viem";
import { CHAINS, invariant } from "../common";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module";
import { V1_PERIPHERY_ADDRESS } from "../constants";
import { OverlaySDKCommonProps } from "../core/types";
import { OverlaySDK } from "../sdk";
import { getMarketDetailsById } from "../services/marketsDetails";
import { formatBigNumber, formatFundingRateToAnnual, formatFundingRateToDaily } from "../common/utils";

export class OverlaySDKTrade extends OverlaySDKModule {
  private sdk: OverlaySDK;

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props);
    this.sdk = sdk;
  }

  public async getFunding(marketAddress: Address) { 
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    const result = await this.sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], marketAddress as Address)
    invariant(result, "Market state not found");

    let parsedDailyFundingRate: string | number | undefined = undefined
    const decimals = 18
    parsedDailyFundingRate = decimals && formatFundingRateToDaily(result.fundingRate, 18, 2)

    return parsedDailyFundingRate
  }

  public async getOIBalance(marketAddress: Address) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    const result = await this.sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], marketAddress as Address)
    invariant(result, "Market state not found");

    let parsedOiLong: string | number | undefined = undefined
    let parsedOiShort: string | number | undefined = undefined
    let parsedCapOi: string | number | undefined = undefined

    const decimals = 18

    parsedOiLong = decimals && formatBigNumber(result.oiLong, decimals, 18)
    parsedOiShort = decimals && formatBigNumber(result.oiShort, decimals, 18)
    parsedCapOi = decimals && formatBigNumber(result.capOi, decimals, 18)

    return {
      parsedOiLong,
      parsedOiShort,
      parsedCapOi,
    }
  }

  public async getPrice(marketAddress: Address, collateral?: bigint, leverage?: bigint, isLong?: boolean) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    if (!collateral || !leverage || !isLong) {
      const midPrice = await this.sdk.state.getMidPrice(V1_PERIPHERY_ADDRESS[chainId], marketAddress as Address)
      let parsedMid: string | number | undefined = undefined
      parsedMid = formatBigNumber(midPrice, 18, 5)

      return parsedMid
    }

    const oiEstimated = await this.sdk.state.getOiEstimate(V1_PERIPHERY_ADDRESS[chainId], marketAddress as Address, collateral, leverage, isLong)

    const fractionOfCapOi = await this.sdk.state.getFractionOfCapOi(V1_PERIPHERY_ADDRESS[chainId], marketAddress as Address, oiEstimated)

    let estimatedPrice: bigint

    if (isLong) {
      estimatedPrice = await this.sdk.state.getAsk(V1_PERIPHERY_ADDRESS[chainId], marketAddress as Address, fractionOfCapOi)
    } else {
      estimatedPrice = await this.sdk.state.getBid(V1_PERIPHERY_ADDRESS[chainId], marketAddress as Address, fractionOfCapOi)
    }

    let parsedEstimatedPrice: string | number | undefined = undefined
    parsedEstimatedPrice = formatBigNumber(estimatedPrice, 18, 5)

    return parsedEstimatedPrice
  }

  public async getBidAndAsk(marketId: Address, collateral?: bigint, leverage?: bigint, isLong?: boolean) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    if (!collateral || !leverage || !isLong) {
      const result = await this.sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], marketId)

      return {
        parsedBid: formatBigNumber(result.bid, 18, 5),
        parsedAsk: formatBigNumber(result.ask, 18, 5)
      }
    }

    const oiEstimated = await this.sdk.state.getOiEstimate(V1_PERIPHERY_ADDRESS[chainId], marketId, collateral, leverage, isLong)

    const fractionOfCapOi = await this.sdk.state.getFractionOfCapOi(V1_PERIPHERY_ADDRESS[chainId], marketId, oiEstimated)

    const bid = await this.sdk.state.getBid(V1_PERIPHERY_ADDRESS[chainId], marketId, fractionOfCapOi)
    const ask = await this.sdk.state.getAsk(V1_PERIPHERY_ADDRESS[chainId], marketId, fractionOfCapOi)

    return {
      parsedBid: formatBigNumber(bid, 18, 5),
      parsedAsk: formatBigNumber(ask, 18, 5)
    }
  }
}