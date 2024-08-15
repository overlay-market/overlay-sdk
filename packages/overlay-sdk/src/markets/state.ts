import {
  type GetContractReturnType,
  type Address,
  type WalletClient,
  getContract,
} from "viem";
import { OverlayV1StateABI } from "./abis/OverlayV1State.js";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module.js";
import { OverlaySDKCommonProps } from "../core/types.js";

export class OverlaySDKState extends OverlaySDKModule {
  static readonly PRECISION = 10n ** 27n;

  constructor(props: OverlaySDKCommonProps) {
    console.log("OverlaySDKState", props);
    super(props);
  }

  // @Logger("Contracts:")
  //   @Cache(30 * 60 * 1000, ["core.chain.id", "contractAddressStETH"])
  public async getContractV1State(
    state: Address
  ): Promise<GetContractReturnType<typeof OverlayV1StateABI, WalletClient>> {
    const contract = await getContract({
      address: state,
      abi: OverlayV1StateABI,
      client: {
        public: this.core.rpcProvider,
        wallet: this.core.web3Provider as WalletClient,
      },
    });
    return contract;
  }
  public async getFactory(state: Address): Promise<Address> {
    const contract = await this.getContractV1State(state);
    const factoryAddress = contract.read.factory();
    return factoryAddress;
  }
}
