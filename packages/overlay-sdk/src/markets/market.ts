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
import { BuildInnerProps, BuildProps, BuildResult, EmergencyWithdrawInnerProps, EmergencyWithdrawProps, UnwindInnerProps, UnwindMultipleInnerProps, UnwindMultipleProps, UnwindProps } from "./types.js";
import { NOOP } from "../common/constants.js";
import { ERROR_CODE, invariant, SDKError, toWei } from "../common/index.js";
import { OverlaySDK } from "../sdk.js";
import { UnwindState, UnwindStateData, UnwindStateSuccess } from "../trade/types.js";

export class OverlaySDKMarket extends OverlaySDKModule {
  private sdk: OverlaySDK;
  static readonly PRECISION = 10n ** 27n;

  private static BUILD_SIGNATURE_V1_1 = toEventHash(
    getAbiItem({abi: OverlayV1MarketABI, name: "Build"})
  )

  private static BUILD_SIGNATURE_V1_2 = toEventHash(
    getAbiItem({abi: OverlayV1Market2ABI, name: "Build"})
  )

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props);
    this.sdk = sdk;
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
    if (this.core.useShiva) {
      return this.sdk.shiva.build(props);
    }
    return this._build(props);
  }

  private async _build(
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
    if (this.core.useShiva) {
      return this.sdk.shiva.populateBuild(props);
    }

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
    if (this.core.useShiva) {
      return this.sdk.shiva.simulateBuild(props);
    }

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
    if (this.core.useShiva) {
      return this.sdk.shiva.unwind(props);
    }
    return this._unwind(props);
  }

  private async _unwind(
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

  public async unwindMultiple(
    props: UnwindMultipleProps
  ) {
    if (this.core.useShiva) {
      return this.sdk.shiva.unwindMultiple(props);
    }
    return this._unwindMultiple(props);
  }

  public async _unwindMultiple(
    props: UnwindMultipleProps
  ) {
    this.core.useWeb3Provider();
    const { callback, account, slippage, unwindPercentage, ...rest } = await this.parseUnwindMultipleProps(props);
    const decimals = 2;
    const unwindCalls = [];

    for (const { marketAddress, positionId } of props.positions) {
      unwindCalls.push(this.sdk.trade.getUnwindState(
        marketAddress,
        account.address,
        positionId,
        unwindPercentage,
        slippage,
        decimals,
      ));
    }

    let result: UnwindStateData[] = [];

    try {
      result = await Promise.all(unwindCalls);

      if (result.length !== props.positions.length) {
        throw new Error("Length of result does not match length of positions");
      }
    } catch (error) {
      throw new SDKError({
        code: ERROR_CODE.TRANSACTION_ERROR,
        message: "Unwind multiple failed",
        error,
      });
    }

    for (const { unwindState, positionId } of result) {
      const positionsIdWithError: { [key: number]: UnwindState } = {}

      if (unwindState !== UnwindState.Unwind) {
        positionsIdWithError[positionId] = unwindState;
      }

      if (Object.keys(positionsIdWithError).length > 0) {
        throw new SDKError({
          code: ERROR_CODE.TRANSACTION_ERROR,
          message: "Unwind multiple failed",
          error: positionsIdWithError,
        });
      }
    }

    const transactions = [];

    for (let i = 0; i < result.length; i++) {
      const { marketAddress, positionId, priceLimit } = result[i] as UnwindStateSuccess;
      console.log('result[i]', result[i]);

      const contract = await this.getContractV1Market(marketAddress as Address);
      const txArguments = [BigInt(positionId), toWei(unwindPercentage), priceLimit] as const;

      transactions.push(
        this.core.performTransaction({
          ...rest,
          account,
          callback,
          getGasLimit: (options: TransactionOptions) =>
            contract.estimateGas.unwind(txArguments, options),
          sendTransaction: (options: TransactionOptions) =>
            contract.write.unwind(txArguments, options),
        })
      );
    }
  
    const results = await Promise.allSettled(transactions);

    return results;
  }

  // @Logger('Utils:')
  // @ErrorHandler()
  public async populateUnwind(props: NoCallback<UnwindProps>) {
    if (this.core.useShiva) {
      return this.sdk.shiva.populateUnwind(props);
    }

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
    if (this.core.useShiva) {
      return this.sdk.shiva.simulateUnwind(props);
    }

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
    if (this.core.useShiva) {
      return this.sdk.shiva.emergencyWithdraw(props);
    }
    return this._emergencyWithdraw(props);
  }

  private async _emergencyWithdraw(
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
    if (this.core.useShiva) {
      return this.sdk.shiva.populateEmergencyWithdraw(props);
    }

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
    if (this.core.useShiva) {
      return this.sdk.shiva.simulateEmergencyWithdraw(props);
    }

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

  private async parseUnwindMultipleProps(props: UnwindMultipleProps): Promise<UnwindMultipleInnerProps> {
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
