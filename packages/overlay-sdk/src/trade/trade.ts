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

  public async getFunding(marketId: string) { 
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");
    const {marketAddress} = await this.sdk.markets.getMarketDetails(marketId)

    const result = await this.sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], marketAddress)
    invariant(result, "Market state not found");

    return formatFundingRateToDaily(result.fundingRate, 18, 2)
  }

  public async getOIBalance(marketId: string) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");
    const {marketAddress} = await this.sdk.markets.getMarketDetails(marketId)

    const result = await this.sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], marketAddress)
    invariant(result, "Market state not found");

    return {
      parsedOiLong: formatBigNumber(result.oiLong, 18, 18),
      parsedOiShort: formatBigNumber(result.oiShort, 18, 18),
      parsedCapOi: formatBigNumber(result.capOi, 18, 18)
    }
  }

  public async getPrice(marketId: string, collateral?: bigint, leverage?: bigint, isLong?: boolean) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");
    const {marketAddress} = await this.sdk.markets.getMarketDetails(marketId)

    if (!collateral || !leverage || !isLong) {
      const midPrice = await this.sdk.state.getMidPrice(V1_PERIPHERY_ADDRESS[chainId], marketAddress)
      let parsedMid: string | number | undefined = undefined
      parsedMid = formatBigNumber(midPrice, 18, 5)

      return parsedMid
    }

    const oiEstimated = await this.sdk.state.getOiEstimate(V1_PERIPHERY_ADDRESS[chainId], marketAddress, collateral, leverage, isLong)

    const fractionOfCapOi = await this.sdk.state.getFractionOfCapOi(V1_PERIPHERY_ADDRESS[chainId], marketAddress, oiEstimated)

    let estimatedPrice: bigint

    if (isLong) {
      estimatedPrice = await this.sdk.state.getAsk(V1_PERIPHERY_ADDRESS[chainId], marketAddress, fractionOfCapOi)
    } else {
      estimatedPrice = await this.sdk.state.getBid(V1_PERIPHERY_ADDRESS[chainId], marketAddress, fractionOfCapOi)
    }

    let parsedEstimatedPrice: string | number | undefined = undefined
    parsedEstimatedPrice = formatBigNumber(estimatedPrice, 18, 5)

    return parsedEstimatedPrice
  }

  public async getBidAndAsk(marketId: string) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    const marketDetails = await this.sdk.markets.getMarketDetails(marketId)

    const result = await this.sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], marketDetails.marketAddress)

    const isPercentage = marketDetails.currency === "PERCENTAGE" || marketDetails.currency === "%"

    return {
      parsedBid: isPercentage ? `${formatBigNumber(result.bid, 18, 2)}%` : formatBigNumber(result.bid, 18, 5),
      parsedAsk: isPercentage ? `${formatBigNumber(result.ask, 18, 2)}%` : formatBigNumber(result.ask, 18, 5)
    }

  }
}