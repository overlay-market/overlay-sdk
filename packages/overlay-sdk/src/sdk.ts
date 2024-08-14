import { OverlaySDKCore, OverlaySDKCoreProps } from "./core/index.js";
import { OverlaySDKMarket } from "./markets/index.js";
import { TestModuleSDK } from "./test_module/index.js";

export class OverlaySDK {
  readonly core: OverlaySDKCore;
  readonly test_module: TestModuleSDK;
  readonly market: OverlaySDKMarket;

  constructor(props: OverlaySDKCoreProps) {
    // Core functionality
    this.core = new OverlaySDKCore(props);
    const core = this.core;
    // Test Module functionality
    this.test_module = new TestModuleSDK({ ...props, core });
    this.market = new OverlaySDKMarket({ ...props, core });
  }
}
