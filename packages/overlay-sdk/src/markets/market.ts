import {
  type GetContractReturnType,
  type Address,
  type WalletClient,
  getContract,
  TransactionReceipt,
} from "viem";
import { OverlayV1MarketABI } from "./abis/OverlayV1Market.js";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module.js";
import { OverlaySDKCommonProps, TransactionOptions, TransactionResult } from "../core/types.js";
import { BuildInnerProps, BuildProps, BuildResult } from "./types.js";
import { NOOP } from "../common/constants.js";

export class OverlaySDKMarket extends OverlaySDKModule {
  static readonly PRECISION = 10n ** 27n;

  constructor(props: OverlaySDKCommonProps) {
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

  public async getIsShutdown(market: Address): Promise<boolean> {
    const contract = await this.getContractV1Market(market);
    return contract.read.isShutdown();
  }

  // @Logger('Call:')
  // @ErrorHandler()
  public async build(
    props: BuildProps
  ): Promise<TransactionResult<BuildResult>> {
    this.core.useWeb3Provider();
    const { callback, account, marketAddress, ...rest } = await this.parseProps(props);

    const contract = await this.getContractV1Market(marketAddress);

    const txArguments = [rest.collateral, rest.leverage, rest.isLong, rest.priceLimit] as const;

    return this.core.performTransaction({
      ...rest,
      account,
      callback,
      getGasLimit: (options: TransactionOptions) =>
        contract.estimateGas.build(txArguments, options),
      sendTransaction: (options: TransactionOptions) =>
        contract.write.build(txArguments, options),
      decodeResult: (receipt) => this.submitParse(receipt),
    });
    
  }

  private async submitParse(receipt: TransactionReceipt): Promise<BuildResult> {
    return {
      positionId: 33n
    };
  }

  private async parseProps(props: BuildProps): Promise<BuildInnerProps> {
    return {
      ...props,
      account: await this.core.useAccount(props.account),
      callback: props.callback ?? NOOP,
    };
  }
}
