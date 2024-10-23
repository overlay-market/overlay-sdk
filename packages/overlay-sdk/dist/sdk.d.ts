import { OverlaySDKCore, OverlaySDKCoreProps } from "./core/index.js";
import { OverlaySDKMarket, OverlaySDKState } from "./markets/index.js";
import { OverlaySDKMarkets } from "./marketsList/index.js";
import { OverlaySDKOpenPositions } from "./positionsTables/openPositionsTable/openPositionsTable.js";
import { OverlaySDKUnwindPositions } from "./positionsTables/unwindPositinosTable/unwindPositionsTable.js";
import { OverlaySDKOverlayToken } from "./ov/index.js";
import { OverlaySDKTrade } from "./trade/index.js";
import { OverlaySDKLiquidatedPositions } from "./positionsTables/liquidatePositionsTable/liquidatePositionsTable.js";
export declare class OverlaySDK {
    readonly core: OverlaySDKCore;
    readonly market: OverlaySDKMarket;
    readonly state: OverlaySDKState;
    readonly ov: OverlaySDKOverlayToken;
    readonly trade: OverlaySDKTrade;
    readonly markets: OverlaySDKMarkets;
    readonly openPositions: OverlaySDKOpenPositions;
    readonly unwindPositions: OverlaySDKUnwindPositions;
    readonly liquidatedPositions: OverlaySDKLiquidatedPositions;
    constructor(props: OverlaySDKCoreProps);
}
//# sourceMappingURL=sdk.d.ts.map