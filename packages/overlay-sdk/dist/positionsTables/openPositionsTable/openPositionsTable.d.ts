import { OverlaySDK } from "../../sdk";
import { Address } from "viem";
import { OverlaySDKModule } from "../../common/class-primitives/sdk-module";
import { OverlaySDKCommonProps } from "../../core/types";
type TransformedOpen = {
    marketName: string | Address | undefined;
    positionSide: string | undefined;
    parsedCreatedTimestamp: string | undefined;
    entryPrice: string | undefined;
    liquidatePrice: string | undefined;
    currentPrice: string | undefined;
    size: number | string | undefined;
    unrealizedPnL: string | number | undefined;
    parsedFunding: string | number | undefined;
};
export declare class OverlaySDKOpenPositions extends OverlaySDKModule {
    private sdk;
    constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK);
    transformOpenPositions: (page?: number, pageSize?: number, marketId?: string, account?: Address) => Promise<{
        data: TransformedOpen[];
        total: number;
    }>;
}
export {};
//# sourceMappingURL=openPositionsTable.d.ts.map