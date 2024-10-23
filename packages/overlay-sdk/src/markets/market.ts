import {
  type GetContractReturnType,
  type Address,
  type WalletClient,
  getContract,
  TransactionReceipt,
  encodeFunctionData,
  toEventHash,
  getAbiItem,
  decodeEventLog,
  keccak256,
  encodePacked,
} from "viem";
import { OverlayV1MarketABI } from "./abis/OverlayV1Market.js";
import { OverlayV1Market2ABI } from "./abis/OverlayV1Market2.js";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module.js";
import { NoCallback, OverlaySDKCommonProps, TransactionOptions, TransactionResult } from "../core/types.js";
import { BuildInnerProps, BuildProps, BuildResult, EmergencyWithdrawInnerProps, EmergencyWithdrawProps, UnwindInnerProps, UnwindProps } from "./types.js";
import { NOOP } from "../common/constants.js";
import { ERROR_CODE, invariant } from "../common/index.js";

export class OverlaySDKMarket extends OverlaySDKModule {
  static readonly PRECISION = 10n ** 27n;

  private static BUILD_SIGNATURE_V1_1 = toEventHash(
    getAbiItem({abi: OverlayV1MarketABI, name: "Build"})
  )

  private static BUILD_SIGNATURE_V1_2 = toEventHash(
    getAbiItem({abi: OverlayV1Market2ABI, name: "Build"})
  )

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

  public async getTradingFeeRate(market: Address): Promise<bigint> {
    const contract = await this.getContractV1Market(market);
    // tradingFeeRate is at index 11
    return contract.read.params([11n]);
  }

  public async getMinCollateral(market: Address): Promise<bigint> {
    const contract = await this.getContractV1Market(market);
    // minCollateral is at index 12
    return contract.read.params([12n]);
  }

  public async getCapLeverage(market: Address) {
    const contract = await this.getContractV1Market(market);
    // capLeverage is at index 5
    return contract.read.params([5n]);
  }

  public async getOiShares(market: Address, positionId: bigint, owner: Address) {
    const contract = await this.getContractV1Market(market);
    const encodedParams = encodePacked(['address', 'uint256'], [owner, positionId]);
    const hash = keccak256(encodedParams);

    const position = await contract.read.positions([hash]);
    return {
      oiShares: position[6],
      isLong: position[4],
    }
  }

  // Build

  // @Logger('Call:')
  // @ErrorHandler()
  public async build(
    props: BuildProps
  ): Promise<TransactionResult<BuildResult>> {
    this.core.useWeb3Provider();
    const { callback, account, marketAddress, ...rest } = await this.parseBuildProps(props);

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
      decodeResult: async (receipt) => this.submitParse(receipt),
    });
  }

  // @Logger('Utils:')
  // @ErrorHandler()
  public async populateBuild(props: NoCallback<BuildProps>) {
    const { account, collateral, leverage, isLong, priceLimit, marketAddress } = await this.parseBuildProps(props);

    return {
      to: marketAddress,
      from: account.address,
      data: encodeFunctionData({
        abi: OverlayV1MarketABI,
        functionName: "build",
        args: [collateral, leverage, isLong, priceLimit],
      })
    };
  }

  // @Logger('Utils:')
  // @ErrorHandler()
  public async simulateBuild(props: NoCallback<BuildProps>) {
    const { account, collateral, leverage, isLong, priceLimit, marketAddress } = await this.parseBuildProps(props);
    
    const contract = await this.getContractV1Market(marketAddress);

    return contract.simulate.build([collateral, leverage, isLong, priceLimit], {
      account: account.address,
    });
  }

  // Unwind

  // @Logger('Call:')
  // @ErrorHandler()
  public async unwind(
    props: UnwindProps
  ): Promise<TransactionResult> {
    this.core.useWeb3Provider();
    const { callback, account, marketAddress, ...rest } = await this.parseUnwindProps(props);

    const contract = await this.getContractV1Market(marketAddress);

    const txArguments = [rest.positionId, rest.fraction, rest.priceLimit] as const;

    return this.core.performTransaction({
      ...rest,
      account,
      callback,
      getGasLimit: (options: TransactionOptions) =>
        contract.estimateGas.unwind(txArguments, options),
      sendTransaction: (options: TransactionOptions) =>
        contract.write.unwind(txArguments, options),
    });
  }

  // @Logger('Utils:')
  // @ErrorHandler()
  public async populateUnwind(props: NoCallback<UnwindProps>) {
    const { account, positionId, fraction, priceLimit, marketAddress } = await this.parseUnwindProps(props);

    return {
      to: marketAddress,
      from: account.address,
      data: encodeFunctionData({
        abi: OverlayV1MarketABI,
        functionName: "unwind",
        args: [positionId, fraction, priceLimit],
      })
    };
  }

  // @Logger('Utils:')
  // @ErrorHandler()
  public async simulateUnwind(props: NoCallback<UnwindProps>) {
    const { account, positionId, fraction, priceLimit, marketAddress } = await this.parseUnwindProps(props);

    const contract = await this.getContractV1Market(marketAddress);

    return contract.simulate.unwind([positionId, fraction, priceLimit], {
      account: account.address,
    });
  }

  // EmergencyWithdraw

  // @Logger('Call:')
  // @ErrorHandler()
  public async emergencyWithdraw(
    props: EmergencyWithdrawProps
  ): Promise<TransactionResult> {
    this.core.useWeb3Provider();
    const { callback, account, marketAddress, ...rest } = await this.parseEmergencyWithdrawProps(props);

    const contract = await this.getContractV1Market(marketAddress);

    const txArguments = [rest.positionId] as const;

    return this.core.performTransaction({
      ...rest,
      account,
      callback,
      getGasLimit: (options: TransactionOptions) =>
        contract.estimateGas.emergencyWithdraw(txArguments, options),
      sendTransaction: (options: TransactionOptions) =>
        contract.write.emergencyWithdraw(txArguments, options),
    });
  }

  // @Logger('Utils:')
  // @ErrorHandler()
  public async populateEmergencyWithdraw(props: NoCallback<EmergencyWithdrawProps>) {
    const { account, positionId, marketAddress } = await this.parseEmergencyWithdrawProps(props);

    return {
      to: marketAddress,
      from: account.address,
      data: encodeFunctionData({
        abi: OverlayV1MarketABI,
        functionName: "emergencyWithdraw",
        args: [positionId],
      })
    };
  }

  // @Logger('Utils:')
  // @ErrorHandler()
  public async simulateEmergencyWithdraw(props: NoCallback<EmergencyWithdrawProps>) {
    const { account, positionId, marketAddress } = await this.parseEmergencyWithdrawProps(props);

    const contract = await this.getContractV1Market(marketAddress);

    return contract.simulate.emergencyWithdraw([positionId], {
      account: account.address,
    });
  }

  private submitParse(receipt: TransactionReceipt): BuildResult {
    let positionId: bigint | undefined;
    for (const log of receipt.logs) {
      if (log.topics[0] !== OverlaySDKMarket.BUILD_SIGNATURE_V1_1 && log.topics[0] !== OverlaySDKMarket.BUILD_SIGNATURE_V1_2) {
        continue;
      }
      let parsedLog;
      if (log.topics[0] === OverlaySDKMarket.BUILD_SIGNATURE_V1_1) {
        parsedLog = decodeEventLog({
          abi: OverlayV1MarketABI,
          strict: true,
          ...log,
        });
      } else if (log.topics[0] === OverlaySDKMarket.BUILD_SIGNATURE_V1_2) {
        parsedLog = decodeEventLog({
          abi: OverlayV1Market2ABI,
          strict: true,
          ...log,
        });
      }
      if (parsedLog && 'positionId' in parsedLog.args) {
        positionId = BigInt(parsedLog.args.positionId);
        break;
      }
    }
    invariant(positionId, "Position ID not found in the transaction receipt", ERROR_CODE.TRANSACTION_ERROR);
    return { positionId };
  }

  private async parseBuildProps(props: BuildProps): Promise<BuildInnerProps> {
    return {
      ...props,
      account: await this.core.useAccount(props.account),
      callback: props.callback ?? NOOP,
    };
  }

  private async parseUnwindProps(props: UnwindProps): Promise<UnwindInnerProps> {
    return {
      ...props,
      account: await this.core.useAccount(props.account),
      callback: props.callback ?? NOOP,
    };
  }

  private async parseEmergencyWithdrawProps(props: EmergencyWithdrawProps): Promise<EmergencyWithdrawInnerProps> {
    return {
      ...props,
      account: await this.core.useAccount(props.account),
      callback: props.callback ?? NOOP,
    };
  }
}
