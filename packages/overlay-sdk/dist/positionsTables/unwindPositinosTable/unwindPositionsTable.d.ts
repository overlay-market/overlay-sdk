import { OverlaySDK } from "../../sdk";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module";
import { OverlaySDKCommonProps } from "../../core/types";
import { Address } from "viem";
export type UnwindPositionData = {
    marketName: string | undefined;
    positionSide: string | undefined;
    parsedCreatedTimestamp: string | undefined;
    parsedClosedTimestamp: string | undefined;
    entryPrice: string | undefined;
    size: string | undefined;
    exitPrice: string | undefined;
    pnl: string | number | undefined;
    unwindNumber: number;
    positionId: number;
};
export declare class OverlaySDKUnwindPositions extends OverlaySDKModule {
    private sdk;
    private unwindPositionsCache;
    constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK);
    transformUnwindPositions: (page?: number, pageSize?: number, marketId?: string, account?: Address, noCaching?: boolean) => Promise<{
        data: UnwindPositionData[];
        total: number;
    }>;
    private filterUnwindPositionsByMarketId;
}
//# sourceMappingURL=unwindPositionsTable.d.ts.map