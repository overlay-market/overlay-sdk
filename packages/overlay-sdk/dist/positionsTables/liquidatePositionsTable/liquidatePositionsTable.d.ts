import { type Address } from "viem";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module.js";
import { OverlaySDKCommonProps } from "../../core/types.js";
import { OverlaySDK } from "../../sdk.js";
export type LiquidatedPositionData = {
    marketName: string | undefined;
    size: string | number | undefined;
    position: string | undefined;
    entryPrice: string | undefined;
    exitPrice: string | undefined;
    created: string | undefined;
    liquidated: string | undefined;
};
export declare class OverlaySDKLiquidatedPositions extends OverlaySDKModule {
    private sdk;
    private liquidatedPositionsCache;
    constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK);
    transformLiquidatedPositions: (page?: number, pageSize?: number, marketId?: string, account?: Address, noCaching?: boolean) => Promise<{
        data: LiquidatedPositionData[];
        total: number;
    }>;
    private filterLiquidatedPositionsByMarketId;
}
//# sourceMappingURL=liquidatePositionsTable.d.ts.map