import {
  type GetContractReturnType,
  type Address,
  type WalletClient,
  getContract,
  encodeFunctionData,
} from "viem";
import { OVERLAY_CONTRACT_NAMES } from "../common/constants.js";
import { OverlayV1MarketABI } from "./abis/OverlayV1Market.js";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module.js";
import { OverlaySDKCommonProps } from "../core/types.js";

export class OverlaySDKMarket extends OverlaySDKModule {
  static readonly PRECISION = 10n ** 27n;

  constructor(props: OverlaySDKCommonProps) {
    console.log("OverlaySDKMarket", props);
    super(props);
  }

  // @Logger("Contracts:")
  //   @Cache(30 * 60 * 1000, ["core.chain.id", "contractAddressStETH"])
  public async getContractV1Market(
    market: Address
  ): Promise<GetContractReturnType<typeof OverlayV1MarketABI, WalletClient>> {
    return getContract({
      address: market,
      abi: OverlayV1MarketABI,
      client: {
        public: this.core.rpcProvider,
        wallet: this.core.web3Provider as WalletClient,
      },
    });
  }

  // @Logger("Balances:")
  // @ErrorHandler()
  public async factory(market: Address): Promise<Address> {
    const contract = await this.getContractV1Market(market);
    return contract.read.factory();
  }
}
