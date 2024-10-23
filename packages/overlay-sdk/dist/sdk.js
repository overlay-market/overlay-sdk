import { OverlaySDKCore } from "./core/index.js";
import { OverlaySDKMarket, OverlaySDKState } from "./markets/index.js";
import { OverlaySDKMarkets } from "./marketsList/index.js";
import { OverlaySDKOpenPositions } from "./positionsTables/openPositionsTable/openPositionsTable.js";
import { OverlaySDKUnwindPositions } from "./positionsTables/unwindPositinosTable/unwindPositionsTable.js";
import { OverlaySDKOverlayToken } from "./ov/index.js";
import { OverlaySDKTrade } from "./trade/index.js";
import { OverlaySDKLiquidatedPositions } from "./positionsTables/liquidatePositionsTable/liquidatePositionsTable.js";
export class OverlaySDK {
    constructor(props) {
        // Core functionality
        this.core = new OverlaySDKCore(props);
        const core = this.core;
        this.market = new OverlaySDKMarket({ ...props, core });
        this.state = new OverlaySDKState({ ...props, core });
        this.ov = new OverlaySDKOverlayToken({ ...props, core });
        this.trade = new OverlaySDKTrade({ ...props, core }, this);
        this.markets = new OverlaySDKMarkets({ ...props, core }, this);
        this.openPositions = new OverlaySDKOpenPositions({ ...props, core }, this);
        this.unwindPositions = new OverlaySDKUnwindPositions({ ...props, core }, this);
        this.liquidatedPositions = new OverlaySDKLiquidatedPositions({ ...props, core }, this);
    }
}
//# sourceMappingURL=sdk.js.map