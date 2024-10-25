import { type Address } from "viem";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module.js";
import { OverlaySDKCommonProps } from "../../core/types.js";
import { OverlaySDK } from "../../sdk.js";
type TransformedLiquidated = {
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
    constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK);
    transformLiquidatedPositions: (page?: number, pageSize?: number, marketId?: string, account?: Address) => Promise<{
        data: TransformedLiquidated[];
        total: number;
    }>;
}
export {};
//# sourceMappingURL=liquidatePositionsTable.d.ts.map