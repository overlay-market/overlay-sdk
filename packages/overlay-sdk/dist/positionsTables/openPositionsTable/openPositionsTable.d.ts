import { OverlaySDK } from "../../sdk";
import { Address } from "viem";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module";
import { OverlaySDKCommonProps } from "../../core/types";
import { CHAINS } from "../../common";
export type OpenPositionData = {
    marketName: string | undefined;
    positionSide: string | undefined;
    parsedCreatedTimestamp: string | undefined;
    entryPrice: string | undefined;
    liquidatePrice: string | undefined;
    currentPrice: string | undefined;
    size: number | string | undefined;
    unrealizedPnL: string | number | undefined;
    parsedFunding: string | number | undefined;
    marketAddress: Address;
    positionId: number;
    priceCurrency: string;
};
export declare class OverlaySDKOpenPositions extends OverlaySDKModule {
    private sdk;
    private openPositionsCache;
    constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK);
    transformOpenPositions: (page?: number, pageSize?: number, marketId?: string, account?: Address, noCaching?: boolean) => Promise<{
        data: OpenPositionData[];
        total: number;
    }>;
    private formatOpenPosition;
    getOpenPositionData(chainId: CHAINS, walletClient: Address, marketId: Address, positionId: bigint): Promise<{
        positionValue: bigint;
        currentOi: bigint;
        liquidatePrice: bigint;
        info: {
            notionalInitial: bigint;
            debtInitial: bigint;
            midTick: number;
            entryTick: number;
            isLong: boolean;
            liquidated: boolean;
            oiShares: bigint;
            fractionRemaining: number;
        };
        cost: bigint;
        tradingFee: bigint;
        marketMid: bigint;
        debt: bigint;
        collateral: bigint;
        notional: bigint;
        maintenanceMargin: bigint;
        prices: {
            bid: bigint;
            ask: bigint;
            mid: bigint;
        };
    }>;
    private filterOpenPositionsByMarketId;
}
//# sourceMappingURL=openPositionsTable.d.ts.map