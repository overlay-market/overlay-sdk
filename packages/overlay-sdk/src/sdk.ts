import { createPublicClient, http } from "viem";
import { OverlaySDKCore, OverlaySDKCoreProps } from "./core/index.js";
import { OverlaySDKMarket, OverlaySDKState } from "./markets/index.js";
import { OverlaySDKOverlayToken } from "./ov/index.js";

import { OverlaySDKMarkets } from './marketsList/index.js';
import { arbitrumSepolia } from "viem/chains";
export class OverlaySDK {
  readonly core: OverlaySDKCore;
  readonly market: OverlaySDKMarket;
  readonly state: OverlaySDKState;
  readonly midPrice: OverlaySDKState;
  readonly ov: OverlaySDKOverlayToken;
  readonly markets: OverlaySDKMarkets;

  constructor(props: OverlaySDKCoreProps) {
    // Core functionality
    this.core = new OverlaySDKCore(props);
    const core = this.core;
    
    this.market = new OverlaySDKMarket({ ...props, core });
    this.state = new OverlaySDKState({ ...props, core });
    this.midPrice = new OverlaySDKState({ ...props, core });
    this.ov = new OverlaySDKOverlayToken({ ...props, core });
    this.markets = new OverlaySDKMarkets({ ...props, core }, this);
  }
}

const rpcProvider = createPublicClient({
  chain: arbitrumSepolia,
  transport: http(),
});

const web3Provider = window.ethereum;

export const sdk = new OverlaySDK({
  chainId: 421614,
  rpcProvider,
  web3Provider,
});