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
    transformOpenPositions: (account?: Address) => Promise<TransformedOpen[]>;
}
export {};
//# sourceMappingURL=openPositionsTable.d.ts.map