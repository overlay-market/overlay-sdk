import { Address } from "viem";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module";
import { OverlaySDKCommonProps } from "../core/types";
import { OverlaySDK } from "../sdk";
import { TradeState } from "./types";
export declare class OverlaySDKTrade extends OverlaySDKModule {
    private sdk;
    constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK);
    getFunding(marketId: string): Promise<string | undefined>;
    getOIBalance(marketId: string, decimals?: number): Promise<{
        long: string | number | bigint;
        short: string | number | bigint;
        shortPercentageOfTotalOi: string;
        longPercentageOfTotalOi: string;
    }>;
    getPrice(marketId: string, collateral?: bigint, leverage?: bigint, isLong?: boolean, decimals?: number): Promise<string | number | bigint>;
    getPriceInfo(marketId: string, collateral: bigint, leverage: bigint, slippage: number, isLong: boolean, decimals?: number): Promise<{
        price: string | number | bigint;
        minPrice: string | number | bigint;
        priceImpactPercentage: string;
    }>;
    getUnwindPrice(marketId: string, owner: Address, positionId: bigint, fraction: bigint, slippage: number, decimals?: number): Promise<string | number | bigint>;
    getBidAndAsk(marketId: string, decimals?: number): Promise<{
        bid: string | number | bigint;
        ask: string | number | bigint;
    }>;
    getMaxInputIncludingFees(marketId: string, address: Address, leverage: bigint): Promise<number>;
    getFee(marketId: string): Promise<number>;
    getLiquidationPriceEstimate(marketId: string, collateral: bigint, leverage: bigint, isLong: boolean, decimals?: number): Promise<string | number>;
    getOiEstimate(marketId: string, collateral: bigint, leverage: bigint, isLong: boolean, decimals?: number): Promise<string | number | bigint>;
    getTradeState(marketId: string, collateral: bigint, leverage: bigint, slippage: number, isLong: boolean, address: Address): Promise<{
        liquidationPriceEstimate: string | number;
        expectedOi: string | number;
        maxInputIncludingFees: number;
        priceInfo: {
            price: string | number | bigint;
            minPrice: string | number | bigint;
            priceImpactPercentage: string;
        };
        tradeState: TradeState;
        tradingFeeRate: number;
        estimatedCollateral: number;
    }>;
}
//# sourceMappingURL=trade.d.ts.map