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

      return {
        rawNumber: midPrice,
        parsedNumber: parsedMid
      }
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

    return {
      rawNumber: estimatedPrice,
      parsedNumber: parsedEstimatedPrice
    }
  }

  public async getPriceInfo(marketId: string, collateral: bigint, leverage: bigint, slippage: number, isLong: boolean) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    const price = await this.getPrice(marketId, collateral, leverage, isLong)
    const { rawAsk, rawBid } = await this.getBidAndAsk(marketId)

    // calculate min or max price
    const increasePercentage = (slippage + 100) * 100
    const decreasePercentage = (100 - slippage) * 100
    const base = BigInt(10000)
    const minPrice = isLong ? price.rawNumber * BigInt(increasePercentage) / base : price.rawNumber * BigInt(decreasePercentage) / base

    // calculate price impact
    const priceImpactValue = isLong ? price.rawNumber - rawAsk : rawBid - price.rawNumber;
    const priceImpactPercentage = isLong ? Number(priceImpactValue * 100n) / Number(rawAsk) : Number(priceImpactValue * 100n) / Number(rawBid);

    return {
      price: price.rawNumber,
      minPrice,
      priceImpactPercentage
    }
  }

  public async getBidAndAsk(marketId: string) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    const marketDetails = await this.sdk.markets.getMarketDetails(marketId)

    const result = await this.sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], marketDetails.marketAddress)

    const isPercentage = marketDetails.currency === "PERCENTAGE" || marketDetails.currency === "%"

    return {
      parsedBid: isPercentage ? formatBigNumber(result.bid, 18, 2) : formatBigNumber(result.bid, 18, 5),
      parsedAsk: isPercentage ? formatBigNumber(result.ask, 18, 2) : formatBigNumber(result.ask, 18, 5),
      rawBid: result.bid,
      rawAsk: result.ask
    }
  }

  public async getMaxInputIncludingFees(marketId: string, address: Address, leverage: bigint) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    const {marketAddress} = await this.sdk.markets.getMarketDetails(marketId)

    const tradingFeeRate = formatBigNumber(await this.sdk.market.getTradingFeeRate(marketAddress), 18, 6, true) as number

    // const balance = formatBigNumber(await this.sdk.ov.balance((await this.core.useAccount()).address) as bigint, 18, 18, true) as number
    const balance = formatBigNumber(await this.sdk.ov.balance(address) as bigint, 18, 18, true) as number

    const buildFeeValueFromMaxInput = balance * tradingFeeRate * (formatBigNumber(leverage, 18, 18, true) as number)

    const returnValue = balance - buildFeeValueFromMaxInput
  
    return Math.trunc(returnValue * Math.pow(10, 18)) / Math.pow(10, 18)
  }

  public async getFee(marketId: string) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    const {marketAddress} = await this.sdk.markets.getMarketDetails(marketId)

    const tradingFeeRate = formatBigNumber(await this.sdk.market.getTradingFeeRate(marketAddress), 18, 6, true) as number

    return tradingFeeRate * 100
  }

  public async getLiquidationPriceEstimate(marketId: string, collateral: bigint, leverage: bigint, isLong: boolean) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    const {marketAddress} = await this.sdk.markets.getMarketDetails(marketId)

    const liquidationPrice = await this.sdk.state.getLiquidationPriceEstimate(V1_PERIPHERY_ADDRESS[chainId], marketAddress, collateral, leverage, isLong)

    return formatBigNumber(liquidationPrice, 18, 5)
  }

  public async getOiEstimate(marketId: string, collateral: bigint, leverage: bigint, isLong: boolean) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    const {marketAddress} = await this.sdk.markets.getMarketDetails(marketId)

    const oi = await this.sdk.state.getOiEstimate(V1_PERIPHERY_ADDRESS[chainId], marketAddress, collateral, leverage, isLong)

    return formatBigNumber(oi, 18, 5)
  }
}