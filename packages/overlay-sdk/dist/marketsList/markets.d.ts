import { OverlaySDKModule } from "../common/class-primitives/sdk-module.js";
import { OverlaySDKCommonProps } from "../core/types.js";
import { OverlaySDK } from "../sdk.js";
export declare class OverlaySDKMarkets extends OverlaySDKModule {
    private sdk;
    private marketDetailsCache;
    private activeMarketsCache?;
    constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK);
    getMarketDetails(marketId: string, noCaching?: boolean): Promise<any>;
    getActiveMarkets(noCaching?: boolean): Promise<any>;
}
//# sourceMappingURL=markets.d.ts.map