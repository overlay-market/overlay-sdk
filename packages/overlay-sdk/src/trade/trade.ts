import { Address } from "viem";
import { CHAINS, invariant } from "../common";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module";
import { V1_PERIPHERY_ADDRESS } from "../constants";
import { OverlaySDKCommonProps } from "../core/types";
import { OverlaySDK } from "../sdk";
import { formatBigNumber, formatFundingRateToDaily } from "../common/utils";

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

  public async getOIBalance(marketId: string, decimals?: number) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");
    const {marketAddress} = await this.sdk.markets.getMarketDetails(marketId)

    const {oiLong, oiShort} = await this.sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], marketAddress)

    const shortPercentageOfTotalOi = (Number(oiShort) / (Number(oiLong) + Number(oiShort)) * 100).toFixed(2)
    const longPercentageOfTotalOi = (Number(oiLong) / (Number(oiLong) + Number(oiShort)) * 100).toFixed(2)

    return {
      long: decimals ? formatBigNumber(oiLong, 18, decimals) : oiLong,
      short: decimals ? formatBigNumber(oiShort, 18, decimals) : oiShort,
      shortPercentageOfTotalOi,
      longPercentageOfTotalOi
    }
  }

  public async getPrice(marketId: string, collateral?: bigint, leverage?: bigint, isLong?: boolean, decimals?: number) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");
    const {marketAddress} = await this.sdk.markets.getMarketDetails(marketId)

    if (!collateral || !leverage || !isLong) {
      const midPrice = await this.sdk.state.getMidPrice(V1_PERIPHERY_ADDRESS[chainId], marketAddress)

      return decimals ? formatBigNumber(midPrice, 18, decimals) : midPrice
    }

    const oiEstimated = await this.sdk.state.getOiEstimate(V1_PERIPHERY_ADDRESS[chainId], marketAddress, collateral, leverage, isLong)

    const fractionOfCapOi = await this.sdk.state.getFractionOfCapOi(V1_PERIPHERY_ADDRESS[chainId], marketAddress, oiEstimated)

    let estimatedPrice: bigint

    if (isLong) {
      estimatedPrice = await this.sdk.state.getAsk(V1_PERIPHERY_ADDRESS[chainId], marketAddress, fractionOfCapOi)
    } else {
      estimatedPrice = await this.sdk.state.getBid(V1_PERIPHERY_ADDRESS[chainId], marketAddress, fractionOfCapOi)
    }

    return decimals ? formatBigNumber(estimatedPrice, 18, decimals) : estimatedPrice
  }

  public async getPriceInfo(marketId: string, collateral: bigint, leverage: bigint, slippage: number, isLong: boolean) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    const price = await this.getPrice(marketId, collateral, leverage, isLong) as bigint
    const res = await this.getBidAndAsk(marketId)
    const bid = BigInt(res.bid)
    const ask = BigInt(res.ask)

    // calculate min or max price
    const increasePercentage = (slippage + 100) * 100
    const decreasePercentage = (100 - slippage) * 100
    const base = BigInt(10000)
    const minPrice = isLong ? price * BigInt(increasePercentage) / base : price * BigInt(decreasePercentage) / base

    // calculate price impact
    const priceImpactValue = isLong ? price - ask : bid - price;
    const priceImpactPercentage = isLong ? Number(priceImpactValue * 100n) / Number(ask) : Number(priceImpactValue * 100n) / Number(bid);

    return {
      price: price,
      minPrice,
      priceImpactPercentage
    }
  }

  public async getBidAndAsk(marketId: string, decimals?: number) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    const marketDetails = await this.sdk.markets.getMarketDetails(marketId)

    const result = await this.sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], marketDetails.marketAddress)

    const isPercentage = marketDetails.currency === "PERCENTAGE" || marketDetails.currency === "%"

    return {
      bid: decimals ? formatBigNumber(result.bid, 18, isPercentage ? 2 : 5) : result.bid,
      ask: decimals ? formatBigNumber(result.ask, 18, isPercentage ? 2 : 5) : result.ask
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