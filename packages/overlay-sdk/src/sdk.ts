import { OverlaySDKCore, OverlaySDKCoreProps } from "./core/index.js";
import { OverlaySDKMarket, OverlaySDKState } from "./markets/index.js";
import { OverlaySDKMarkets } from "./marketsList/index.js";
import { OverlaySDKOpenPositions } from "./positionsTables/openPositionsTable/openPositionsTable.js";
import { OverlaySDKUnwindPositions } from "./positionsTables/unwindPositinosTable/unwindPositionsTable.js";
import { OverlaySDKOverlayToken } from "./ovl/index.js";
import { OverlaySDKTrade } from "./trade/index.js";
import { OverlaySDKLiquidatedPositions } from "./positionsTables/liquidatePositionsTable/liquidatePositionsTable.js";
import { OverlaySDKAccountDetails } from "./account/account.js";
import { OverlaySDKShiva } from "./shiva/shiva.js";

export class OverlaySDK {
  readonly core: OverlaySDKCore;
  readonly market: OverlaySDKMarket;
  readonly state: OverlaySDKState;
  readonly ovl: OverlaySDKOverlayToken;
  readonly trade: OverlaySDKTrade;
  readonly markets: OverlaySDKMarkets;
  readonly openPositions: OverlaySDKOpenPositions;
  readonly unwindPositions: OverlaySDKUnwindPositions;
  readonly liquidatedPositions: OverlaySDKLiquidatedPositions;
  readonly accountDetails: OverlaySDKAccountDetails;
  readonly shiva: OverlaySDKShiva;

  constructor(props: OverlaySDKCoreProps) {
    // Core functionality
    this.core = new OverlaySDKCore(props);
    const core = this.core;
    this.market = new OverlaySDKMarket({ ...props, core }, this);
    this.state = new OverlaySDKState({ ...props, core });
    this.ovl = new OverlaySDKOverlayToken({ ...props, core });
    this.trade = new OverlaySDKTrade({ ...props, core }, this);
    this.markets = new OverlaySDKMarkets({ ...props, core }, this);
    this.openPositions = new OverlaySDKOpenPositions({ ...props, core }, this);
    this.unwindPositions = new OverlaySDKUnwindPositions(
      { ...props, core },
      this
    );
    this.liquidatedPositions = new OverlaySDKLiquidatedPositions(
      { ...props, core },
      this
    );
    this.accountDetails = new OverlaySDKAccountDetails(
      { ...props, core },
      this
    );
    this.shiva = new OverlaySDKShiva({ ...props, core }, this);
  }
}