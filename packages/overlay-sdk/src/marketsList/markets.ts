import {
  type GetContractReturnType,
  type Address,
  type WalletClient,
  getContract,
  encodeFunctionData,
} from "viem";
import { OverlayV1MarketABI } from "../markets/abis/OverlayV1Market.js";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module.js";
import { OverlaySDKCommonProps } from "../core/types.js";
import { getActiveMarkets } from "../subgraph.js";
import { V1_PERIPHERY_ADDRESS } from "../constants.js";
import { sdk } from "../client.js";
import { OverlayV1StateABI } from "../markets/abis/OverlayV1State.js";

export class OverlaySDKMarkets extends OverlaySDKModule {
  constructor(props: OverlaySDKCommonProps) {
    super(props);
  }

  

  public async getActiveMarkets(): Promise<void> {
    const chainId = this.core.chainId
    const markets = await getActiveMarkets()
    const inputs = () => (markets ? markets.map(market => [market.id]) : [])
    const qq = await sdk.state.getMarketState(V1_PERIPHERY_ADDRESS[chainId], '0x3d47247220d89ad623767de2045dc5e0c5920610')
    
    console.log({qq})
   
    
    // console.log({inputs})
  }
}
