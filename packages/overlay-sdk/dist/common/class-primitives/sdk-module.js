import OverlaySDKCore from "../../core/core.js";
import { OverlaySDKCacheable } from "./cacheable.js";
export class OverlaySDKModule extends OverlaySDKCacheable {
    constructor(props) {
        super();
        const { core } = props;
        if (core)
            this.core = core;
        else
            this.core = new OverlaySDKCore(props);
    }
}
//# sourceMappingURL=sdk-module.js.map