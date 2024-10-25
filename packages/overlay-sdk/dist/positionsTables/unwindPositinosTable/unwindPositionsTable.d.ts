import { OverlaySDK } from "../../sdk";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module";
import { OverlaySDKCommonProps } from "../../core/types";
import { Address } from "viem";
type TransformedUnwind = {
    marketName: string | undefined;
    positionSide: string | undefined;
    parsedCreatedTimestamp: string | undefined;
    parsedClosedTimestamp: string | undefined;
    entryPrice: string | undefined;
    size: string | undefined;
    exitPrice: string | undefined;
    pnl: string | number | undefined;
};
export declare class OverlaySDKUnwindPositions extends OverlaySDKModule {
    private sdk;
    constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK);
    transformUnwindPositions: (page?: number, pageSize?: number, marketId?: string, account?: Address) => Promise<{
        data: TransformedUnwind[];
        total: number;
    }>;
}
export {};
//# sourceMappingURL=unwindPositionsTable.d.ts.map