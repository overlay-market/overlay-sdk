import { type GetContractReturnType, type Address, type WalletClient } from "viem";
import { OverlayV1StateABI } from "./abis/OverlayV1State.js";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module.js";
import { OverlaySDKCommonProps } from "../core/types.js";
export declare class OverlaySDKState extends OverlaySDKModule {
    static readonly PRECISION: bigint;
    constructor(props: OverlaySDKCommonProps);
    getContractV1State(state: Address): Promise<GetContractReturnType<typeof OverlayV1StateABI, WalletClient>>;
    getFactory(state: Address): Promise<Address>;
    getValue(state: Address, market: Address, address: Address, id: bigint): Promise<bigint>;
    getCurrentOi(state: Address, market: Address, address: Address, id: bigint): Promise<bigint>;
    getLiquidatePrice(state: Address, market: Address, address: Address, id: bigint): Promise<bigint>;
    getCost(state: Address, market: Address, address: Address, id: bigint): Promise<bigint>;
    getTradingFee(state: Address, market: Address, address: Address, id: bigint): Promise<bigint>;
    getInfo(state: Address, market: Address, address: Address, id: bigint): Promise<{
        notionalInitial: bigint;
        debtInitial: bigint;
        midTick: number;
        entryTick: number;
        isLong: boolean;
        liquidated: boolean;
        oiShares: bigint;
        fractionRemaining: number;
    }>;
    getMarketState(state: Address, market: Address): Promise<{
        bid: bigint;
        ask: bigint;
        mid: bigint;
        volumeBid: bigint;
        volumeAsk: bigint;
        oiLong: bigint;
        oiShort: bigint;
        capOi: bigint;
        circuitBreakerLevel: bigint;
        fundingRate: bigint;
    }>;
    getMidPrice(state: Address, market: Address): Promise<bigint>;
    getOiEstimate(state: Address, market: Address, collateral: bigint, leverage: bigint, isLong: boolean): Promise<bigint>;
    getFractionOfCapOi(state: Address, market: Address, oi: bigint): Promise<bigint>;
    getBid(state: Address, market: Address, fractionOfCapOi: bigint): Promise<bigint>;
    getAsk(state: Address, market: Address, fractionOfCapOi: bigint): Promise<bigint>;
    getLiquidationPriceEstimate(state: Address, market: Address, collateral: bigint, leverage: bigint, isLong: boolean): Promise<bigint>;
    getOIs(state: Address, market: Address): Promise<readonly [bigint, bigint]>;
    getCapOi(state: Address, market: Address): Promise<bigint>;
    getCircuitBreakerLevel(state: Address, market: Address): Promise<bigint>;
}
//# sourceMappingURL=state.d.ts.map