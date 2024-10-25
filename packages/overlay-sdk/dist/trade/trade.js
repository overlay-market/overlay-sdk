import { CHAINS, invariant } from "../common";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module";
import { V1_PERIPHERY_ADDRESS } from "../constants";
import { formatBigNumber, formatFundingRateToDaily } from "../common/utils";
import { TradeState } from "./types";
export class OverlaySDKTrade extends OverlaySDKModule {
    constructor(props, sdk) {
        super(props);
        this.sdk = sdk;
    }
    async getFunding(marketId) {
        const chainId = this.core.chainId;
        invariant(chainId in CHAINS, "Unsupported chainId");
        const { marketAddress } = await this.sdk.markets.getMarketDetails(marketId);
        const result = await this.sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], marketAddress);
        invariant(result, "Market state not found");
        return formatFundingRateToDaily(result.fundingRate, 18, 2);
    }
    async getOIBalance(marketId, decimals) {
        const chainId = this.core.chainId;
        invariant(chainId in CHAINS, "Unsupported chainId");
        const { marketAddress } = await this.sdk.markets.getMarketDetails(marketId);
        const { oiLong, oiShort } = await this.sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], marketAddress);
        const shortPercentageOfTotalOi = (Number(oiShort) / (Number(oiLong) + Number(oiShort)) * 100).toFixed(2);
        const longPercentageOfTotalOi = (Number(oiLong) / (Number(oiLong) + Number(oiShort)) * 100).toFixed(2);
        return {
            long: decimals ? formatBigNumber(oiLong, 18, decimals) : oiLong,
            short: decimals ? formatBigNumber(oiShort, 18, decimals) : oiShort,
            shortPercentageOfTotalOi,
            longPercentageOfTotalOi
        };
    }
    async getPrice(marketId, collateral, leverage, isLong, decimals) {
        const chainId = this.core.chainId;
        invariant(chainId in CHAINS, "Unsupported chainId");
        const { marketAddress } = await this.sdk.markets.getMarketDetails(marketId);
        if (!collateral || !leverage || isLong === undefined) {
            const midPrice = await this.sdk.state.getMidPrice(V1_PERIPHERY_ADDRESS[chainId], marketAddress);
            return decimals ? formatBigNumber(midPrice, 18, decimals) : midPrice;
        }
        const oiEstimated = await this.sdk.state.getOiEstimate(V1_PERIPHERY_ADDRESS[chainId], marketAddress, collateral, leverage, isLong);
        const fractionOfCapOi = await this.sdk.state.getFractionOfCapOi(V1_PERIPHERY_ADDRESS[chainId], marketAddress, oiEstimated);
        let estimatedPrice;
        if (isLong) {
            estimatedPrice = await this.sdk.state.getAsk(V1_PERIPHERY_ADDRESS[chainId], marketAddress, fractionOfCapOi);
        }
        else {
            estimatedPrice = await this.sdk.state.getBid(V1_PERIPHERY_ADDRESS[chainId], marketAddress, fractionOfCapOi);
        }
        return decimals ? formatBigNumber(estimatedPrice, 18, decimals) : estimatedPrice;
    }
    async getPriceInfo(marketId, collateral, leverage, slippage, isLong, decimals) {
        const chainId = this.core.chainId;
        invariant(chainId in CHAINS, "Unsupported chainId");
        const price = await this.getPrice(marketId, collateral, leverage, isLong);
        const res = await this.getBidAndAsk(marketId);
        const bid = BigInt(res.bid);
        const ask = BigInt(res.ask);
        // calculate min or max price
        const increasePercentage = (slippage + 100) * 100;
        const decreasePercentage = (100 - slippage) * 100;
        const base = BigInt(10000);
        const minPrice = isLong ? price * BigInt(increasePercentage) / base : price * BigInt(decreasePercentage) / base;
        // calculate price impact
        const priceImpactValue = isLong ? price - ask : bid - price;
        const priceImpactPercentage = (isLong ? Number(priceImpactValue) / Number(ask) : Number(priceImpactValue) / Number(bid)) * 100;
        return {
            price: decimals ? formatBigNumber(price, 18, decimals) : price,
            minPrice: decimals ? formatBigNumber(minPrice, 18, decimals) : minPrice,
            priceImpactPercentage: priceImpactPercentage.toFixed(2)
        };
    }
    async getUnwindPrice(marketId, owner, positionId, fraction, slippage, decimals) {
        const chainId = this.core.chainId;
        invariant(chainId in CHAINS, "Unsupported chainId");
        // validate fraction is between 0 and 1 ** 18
        invariant(fraction >= 0n && fraction <= 10n ** 18n, "Fraction must be between 0 and 1");
        const { marketAddress } = await this.sdk.markets.getMarketDetails(marketId);
        const { oiShares, isLong } = await this.sdk.market.getOiShares(marketAddress, positionId, owner);
        console.log(oiShares, isLong);
        const oiSharesFraction = oiShares * fraction / 10n ** 18n;
        console.log(oiSharesFraction);
        const priceInfo = await this.getPriceInfo(marketId, oiSharesFraction, 10n ** 18n, slippage, !isLong, decimals);
        return priceInfo.minPrice;
    }
    async getBidAndAsk(marketId, decimals) {
        const chainId = this.core.chainId;
        invariant(chainId in CHAINS, "Unsupported chainId");
        const marketDetails = await this.sdk.markets.getMarketDetails(marketId);
        const result = await this.sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], marketDetails.marketAddress);
        return {
            bid: decimals ? formatBigNumber(result.bid, 18, decimals) : result.bid,
            ask: decimals ? formatBigNumber(result.ask, 18, decimals) : result.ask
        };
    }
    async getMaxInputIncludingFees(marketId, address, leverage) {
        const chainId = this.core.chainId;
        invariant(chainId in CHAINS, "Unsupported chainId");
        const { marketAddress } = await this.sdk.markets.getMarketDetails(marketId);
        const tradingFeeRate = formatBigNumber(await this.sdk.market.getTradingFeeRate(marketAddress), 18, 6, true);
        // const balance = formatBigNumber(await this.sdk.ov.balance((await this.core.useAccount()).address) as bigint, 18, 18, true) as number
        const balance = formatBigNumber(await this.sdk.ov.balance(address), 18, 18, true);
        const buildFeeValueFromMaxInput = balance * tradingFeeRate * formatBigNumber(leverage, 18, 18, true);
        const returnValue = balance - buildFeeValueFromMaxInput;
        return Math.trunc(returnValue * Math.pow(10, 18)) / Math.pow(10, 18);
    }
    async getFee(marketId) {
        const chainId = this.core.chainId;
        invariant(chainId in CHAINS, "Unsupported chainId");
        const { marketAddress } = await this.sdk.markets.getMarketDetails(marketId);
        const tradingFeeRate = formatBigNumber(await this.sdk.market.getTradingFeeRate(marketAddress), 18, 6, true);
        return tradingFeeRate * 100;
    }
    async getLiquidationPriceEstimate(marketId, collateral, leverage, isLong, decimals) {
        const chainId = this.core.chainId;
        invariant(chainId in CHAINS, "Unsupported chainId");
        const { marketAddress } = await this.sdk.markets.getMarketDetails(marketId);
        const liquidationPrice = await this.sdk.state.getLiquidationPriceEstimate(V1_PERIPHERY_ADDRESS[chainId], marketAddress, collateral, leverage, isLong);
        return formatBigNumber(liquidationPrice, 18, decimals || 5);
    }
    async getOiEstimate(marketId, collateral, leverage, isLong, decimals) {
        const chainId = this.core.chainId;
        invariant(chainId in CHAINS, "Unsupported chainId");
        const { marketAddress } = await this.sdk.markets.getMarketDetails(marketId);
        const oi = await this.sdk.state.getOiEstimate(V1_PERIPHERY_ADDRESS[chainId], marketAddress, collateral, leverage, isLong);
        return decimals ? formatBigNumber(oi, 18, decimals) : oi;
    }
    // this function returns the status of a trade which is going to be built
    // since internally it uses other functions, this function will also return the values of: getLiquidationPriceEstimate, getOiEstimate, getMaxInputIncludingFees, and getPriceInfo
    async getTradeState(marketId, collateral, leverage, slippage, isLong, address) {
        const chainId = this.core.chainId;
        invariant(chainId in CHAINS, "Unsupported chainId");
        const { marketAddress } = await this.sdk.markets.getMarketDetails(marketId);
        const [midPrice, liquidationPriceEstimate, ois, capOi, circuitBreakerLevel, rawExpectedOi, minCollateral, maxInputIncludingFees, currentAllowance, priceInfo, tradingFeeRate] = await Promise.all([
            this.getPrice(marketId, undefined, undefined, undefined, 5),
            this.getLiquidationPriceEstimate(marketId, collateral, leverage, isLong),
            this.sdk.state.getOIs(V1_PERIPHERY_ADDRESS[chainId], marketAddress),
            this.sdk.state.getCapOi(V1_PERIPHERY_ADDRESS[chainId], marketAddress),
            this.sdk.state.getCircuitBreakerLevel(V1_PERIPHERY_ADDRESS[chainId], marketAddress),
            this.getOiEstimate(marketId, collateral, leverage, isLong),
            this.sdk.market.getMinCollateral(marketAddress),
            this.getMaxInputIncludingFees(marketId, address, leverage),
            this.sdk.ov.allowance({ account: address, to: marketAddress }),
            this.getPriceInfo(marketId, collateral, leverage, slippage, isLong, 18),
            this.getFee(marketId)
        ]);
        invariant(ois[0] && ois[1], "OIs not found");
        invariant(capOi, "Cap OI not found");
        const rawOiLong = ois[0];
        const rawOiShort = ois[1];
        const rawCapOi = capOi;
        const showUnderwaterFlow = isLong ? Number(liquidationPriceEstimate) > Number(midPrice) : Number(liquidationPriceEstimate) < Number(midPrice);
        const exceedOiCap = isLong ? BigInt(rawExpectedOi) + rawOiLong > rawCapOi : BigInt(rawExpectedOi) + rawOiShort > rawCapOi;
        const exceedCircuitBreakerOiCap = isLong
            ? (BigInt(rawExpectedOi) + rawOiLong) > (rawCapOi * circuitBreakerLevel / 10n ** 18n)
            : (BigInt(rawExpectedOi) + rawOiShort) > (rawCapOi * circuitBreakerLevel / 10n ** 18n);
        const formattedMinCollateral = formatBigNumber(minCollateral, 18, 18, true);
        const showBalanceNotEnoughWarning = maxInputIncludingFees && formattedMinCollateral && +maxInputIncludingFees < formattedMinCollateral ? true : false;
        const showApprovalFlow = currentAllowance < collateral;
        const isPriceImpactHigh = Number(priceInfo.priceImpactPercentage) - Number(slippage) > 0;
        const amountExceedsMaxInput = Number(formatBigNumber(collateral, 18, 18)) > maxInputIncludingFees ||
            Number(formatBigNumber(collateral, 18, 18)) < formattedMinCollateral;
        // determine estimated collateral
        const preAdjustedOi = Number(formatBigNumber(collateral, 18, 18)) * Number(formatBigNumber(leverage, 18, 18));
        const calculatedBuildFee = Number(preAdjustedOi) * tradingFeeRate / 100;
        const estimatedCollateral = Number(formatBigNumber(collateral, 18, 18)) + calculatedBuildFee;
        let tradeState = TradeState.Trade;
        if (showUnderwaterFlow)
            tradeState = TradeState.PositionUnderwater;
        if (exceedOiCap)
            tradeState = TradeState.ExceedsOICap;
        if (exceedCircuitBreakerOiCap)
            tradeState = TradeState.ExceedsCircuitBreakerOICap;
        if (showBalanceNotEnoughWarning)
            tradeState = TradeState.OVLBalanceBelowMinimum;
        if (showApprovalFlow)
            tradeState = TradeState.NeedsApproval;
        if (isPriceImpactHigh)
            tradeState = TradeState.TradeHighPriceImpact;
        if (amountExceedsMaxInput)
            tradeState = TradeState.AmountExceedsMaxInput;
        return {
            liquidationPriceEstimate,
            expectedOi: formatBigNumber(BigInt(rawExpectedOi), 18, 18),
            maxInputIncludingFees,
            priceInfo,
            tradeState,
            tradingFeeRate,
            estimatedCollateral
        };
    }
}
//# sourceMappingURL=trade.js.map