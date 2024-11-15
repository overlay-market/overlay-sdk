import { Address } from "viem";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module";
import { OverlaySDKCommonProps } from "../core/types";
import { OverlaySDK } from "../sdk";
import { IntervalType, OverviewData } from "./types";
export declare class OverlaySDKAccountDetails extends OverlaySDKModule {
    private sdk;
    private overviewCache;
    constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK);
    getOverview: (interval?: IntervalType, account?: Address, noCaching?: boolean) => Promise<OverviewData>;
    private getDataByPeriod;
    private getPeriodKey;
    private incrementDate;
    private getFilterStartDate;
}
//# sourceMappingURL=account.d.ts.map