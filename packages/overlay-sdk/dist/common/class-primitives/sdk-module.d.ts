import OverlaySDKCore from "../../core/core.js";
import type { OverlaySDKCommonProps } from "../../core/types.js";
import { OverlaySDKCacheable } from "./cacheable.js";
export declare abstract class OverlaySDKModule extends OverlaySDKCacheable {
    readonly core: OverlaySDKCore;
    constructor(props: OverlaySDKCommonProps);
}
//# sourceMappingURL=sdk-module.d.ts.map