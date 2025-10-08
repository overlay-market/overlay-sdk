import {
  Address,
  decodeEventLog,
  encodeFunctionData,
  getAbiItem,
  getContract,
  GetContractReturnType,
  toEventHash,
  TransactionReceipt,
  WalletClient,
  zeroAddress,
} from 'viem'
import { OverlaySDKModule } from '../common/class-primitives/sdk-module'
import { NoCallback, OverlaySDKCommonProps, TransactionOptions, TransactionResult, CommonTransactionProps } from '../core/types'
import { OverlaySDK } from '../sdk'
import { ShivaABI } from './abis/Shiva'
import { CHAINS, ERROR_CODE, invariant, NOOP, SDKError, toWei } from '../common'
import { SHIVA_ADDRESS } from '../constants'
import {
  BUILD_SINGLE_TYPES,
  BUILD_TYPES,
  BuildOnBehalfOfSignature,
  BuildSingleOnBehalfOfSignature,
  ShivaApproveProps,
  ShivaBuildOnBehalfOfInnerProps,
  ShivaBuildOnBehalfOfProps,
  ShivaBuildSingleInnerProps,
  ShivaBuildSingleOnBehalfOfInnerProps,
  ShivaBuildSingleOnBehalfOfProps,
  ShivaBuildSingleProps,
  ShivaCancelNonceInnerProps,
  ShivaCancelNonceProps,
  ShivaUnwindOnBehalfOfInnerProps,
  ShivaUnwindOnBehalfOfProps,
  SignBuildOnBehalfOfProps,
  SignBuildSingleOnBehalfOfProps,
  SignUnwindOnBehalfOfProps,
  UNWIND_TYPES,
  UnwindOnBehalfOfSignature,
} from './types'
import { BuildInnerProps, BuildProps, BuildResult, EmergencyWithdrawInnerProps, EmergencyWithdrawProps, UnwindInnerProps, UnwindMultipleInnerProps, UnwindMultipleProps, UnwindProps } from '../markets/types'
import { UnwindState, UnwindStateData, UnwindStateSuccess } from '../trade'
import { getPositionDetails } from '../subgraph'

export class OverlaySDKShiva extends OverlaySDKModule {
  private sdk: OverlaySDK

  private static SHIVA_BUILD_SIGNATURE = toEventHash(
    getAbiItem({ abi: ShivaABI, name: 'ShivaBuild' })
  )

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props)
    this.sdk = sdk
  }

  public getShivaAddress() {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, 'Unsupported chainId')
    return SHIVA_ADDRESS[chainId as CHAINS]
  }

  public getShivaContract(): GetContractReturnType<typeof ShivaABI, WalletClient> {
    const address = this.getShivaAddress()
    return getContract({
      address,
      abi: ShivaABI,
      client: {
        public: this.core.rpcProvider,
        wallet: this.core.web3Provider as WalletClient,
      },
    })
  }

  public async approveShiva(props: ShivaApproveProps): Promise<TransactionResult> {
    this.core.useWeb3Provider()
    const { account, ...rest } = props

    const address = this.getShivaAddress()

    return this.sdk.ovl.approve({
      account: account,
      amount: rest.amount,
      to: address,
    })
  }

  public async populateApproveShiva(props: NoCallback<ShivaApproveProps>) {
    const { account, amount } = props
    const address = this.getShivaAddress()
    
    return await this.sdk.ovl.populateApprove({
      account,
      amount,
      to: address,
    })
  }
  
  public async simulateApproveShiva(props: NoCallback<ShivaApproveProps>) {
    const { account, amount } = props
    const address = this.getShivaAddress()
    
    return await this.sdk.ovl.simulateApprove({
      account,
      amount,
      to: address,
    })
  }

  public async cancelNonce(props: ShivaCancelNonceProps): Promise<TransactionResult> {
    this.core.useWeb3Provider()
    const { account, ...rest } = props

    const contract = this.getShivaContract()

    const txArguments = [rest.nonce] as const

    return this.core.performTransaction({
      ...rest,
      account,
      getGasLimit: (options: TransactionOptions) =>
        contract.estimateGas.cancelNonce(txArguments, options),
      sendTransaction: (options: TransactionOptions) => contract.write.cancelNonce(txArguments, options),
    })
  }

  public async populateCancelNonce(props: NoCallback<ShivaCancelNonceProps>) {
    return {
      to: this.getShivaAddress(),
      from: props.account,
      data: encodeFunctionData({
        abi: ShivaABI,
        functionName: 'cancelNonce',
        args: [props.nonce],
      }),
    }
  }

  public async simulateCancelNonce(props: NoCallback<ShivaCancelNonceProps>) {
    const { account, nonce } = await this.parseCancelNonceProps(props)
    const contract = this.getShivaContract()

    return contract.simulate.cancelNonce([nonce], {
      account: account.address,
    })
  }

  // Build

  public async build(props: BuildProps): Promise<TransactionResult<BuildResult>> {
    this.core.useWeb3Provider()
    const { callback, account, ...rest } = await this.parseBuildProps(props)

    const contract = this.getShivaContract()

    const txArguments = [
      {
        ovlMarket: rest.marketAddress,
        brokerId: rest.brokerId ?? this.core.brokerId,
        isLong: rest.isLong,
        collateral: rest.collateral,
        leverage: rest.leverage,
        priceLimit: rest.priceLimit,
      },
    ] as const

    return this.core.performTransaction({
      ...rest,
      account,
      callback,
      getGasLimit: (options: TransactionOptions) =>
        contract.estimateGas.build(txArguments, options),
      sendTransaction: (options: TransactionOptions) => contract.write.build(txArguments, options),
      decodeResult: async (receipt) => this.submitParse(receipt),
    })
  }

  public async populateBuild(props: NoCallback<BuildProps>) {
    return {
      to: this.getShivaAddress(),
      from: props.account,
      data: encodeFunctionData({
        abi: ShivaABI,
        functionName: 'build',
        args: [
          {
            ovlMarket: props.marketAddress,
            brokerId: props.brokerId ?? this.core.brokerId,
            isLong: props.isLong,
            collateral: props.collateral,
            leverage: props.leverage,
            priceLimit: props.priceLimit,
          },
        ],
      }),
    }
  }

  public async simulateBuild(props: NoCallback<BuildProps>) {
    const { account, ...rest } = await this.parseBuildProps(props);
    const contract = this.getShivaContract()

    const txArguments = [
      {
        ovlMarket: rest.marketAddress,
        brokerId: rest.brokerId ?? this.core.brokerId,
        isLong: rest.isLong,
        collateral: rest.collateral,
        leverage: rest.leverage,
        priceLimit: rest.priceLimit,
      },
    ] as const

    return contract.simulate.build(txArguments, {
      account: account.address,
    })
  }

  // Unwind

  public async unwind(props: UnwindProps, verified: boolean = false): Promise<TransactionResult> {
    this.core.useWeb3Provider()

    if (!verified) {
      const { account, marketAddress, positionId } = await this.parseUnwindProps(props);
      const marketPositionId = `${marketAddress.toLowerCase()}-0x${Number(positionId).toString(16)}`
      const positionDetails = await getPositionDetails(this.core.chainId, account.address.toLowerCase(), marketPositionId) ?? null
      invariant(positionDetails, `Position not found for ${marketPositionId}; ${account.address.toLowerCase()}; ${positionId}; marketAddress: ${marketAddress}; chainId: ${this.core.chainId}`)
      invariant(positionDetails.router.id !== zeroAddress, 'This position is not on Shiva')
    }

    const { account, ...rest } = await this.parseUnwindProps(props)

    const contract = this.getShivaContract()

    const txArguments = [
      {
        ovlMarket: rest.marketAddress,
        brokerId: rest.brokerId ?? this.core.brokerId,
        positionId: rest.positionId,
        fraction: rest.fraction,
        priceLimit: rest.priceLimit,
      },
    ] as const

    return this.core.performTransaction({
      ...rest,
      account,
      getGasLimit: (options: TransactionOptions) =>
        contract.estimateGas.unwind(txArguments, options),
      sendTransaction: (options: TransactionOptions) => contract.write.unwind(txArguments, options),
    })
  }

  public async populateUnwind(props: NoCallback<UnwindProps>) {
    return {
      to: this.getShivaAddress(),
      from: props.account,
      data: encodeFunctionData({
        abi: ShivaABI,
        functionName: 'unwind',
        args: [
          {
            ovlMarket: props.marketAddress,
            brokerId: props.brokerId ?? this.core.brokerId,
            positionId: props.positionId,
            fraction: props.fraction,
            priceLimit: props.priceLimit,
          },
        ],
      }),
    }
  }

  public async simulateUnwind(props: NoCallback<UnwindProps>) {
    const { account, ...rest } = await this.parseUnwindProps(props);
    const contract = this.getShivaContract()
    
    const txArguments = [
      {
        ovlMarket: rest.marketAddress,
        brokerId: rest.brokerId ?? this.core.brokerId,
        positionId: rest.positionId,
        fraction: rest.fraction,
        priceLimit: rest.priceLimit,
      },
    ] as const

    return contract.simulate.unwind(txArguments, {
      account: account.address,
    })
  }

  public async unwindMultiple(props: UnwindMultipleProps) {
    this.core.useWeb3Provider()
    const { account, slippage, unwindPercentage } = await this.parseUnwindMultipleProps(props);
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
      const unwindState = result[i] as UnwindStateSuccess;
      const unwindCall = unwindState.useShiva ? this.buildUnwindCall(props, unwindState) : this.sdk.market.buildUnwindCall(props, unwindState);
      transactions.push(unwindCall);
    }
  
    const results = await Promise.allSettled(transactions);

    return results;
  }

  public async buildUnwindCall(
    props: UnwindMultipleProps,
    unwindState: UnwindStateSuccess,
  ) {
    const { callback, account, slippage, unwindPercentage, ...rest } = await this.parseUnwindMultipleProps(props);
    const { marketAddress, positionId, priceLimit } = unwindState;

    const contract = this.getShivaContract();

    const txArguments = [
      {
        ovlMarket: marketAddress as Address,
        brokerId: rest.brokerId ?? this.core.brokerId,
        positionId: BigInt(positionId),
        fraction: toWei(unwindPercentage),
        priceLimit: priceLimit,
      },
    ] as const

    return this.core.performTransaction({
      ...rest,
      account,
      callback,
      getGasLimit: (options: TransactionOptions) =>
          contract.estimateGas.unwind(txArguments, options),
        sendTransaction: (options: TransactionOptions) =>
          contract.write.unwind(txArguments, options),
      })
  }

  // Build Single

  public async buildSingle(
    props: ShivaBuildSingleProps
  ): Promise<TransactionResult<BuildResult>> {
    this.core.useWeb3Provider()
    const { callback, account, ...rest } = await this.parseBuildSingleProps(props)

    const contract = this.getShivaContract()

    const txArguments = [
      {
        ovlMarket: rest.params.ovlMarket,
        brokerId: rest.params.brokerId ?? this.core.brokerId,
        unwindPriceLimit: rest.params.unwindPriceLimit,
        buildPriceLimit: rest.params.buildPriceLimit,
        collateral: rest.params.collateral,
        leverage: rest.params.leverage,
        previousPositionId: rest.params.previousPositionId,
      },
    ] as const

    return this.core.performTransaction({
      ...rest,
      account,
      callback,
      getGasLimit: (options: TransactionOptions) =>
        contract.estimateGas.buildSingle(txArguments, options),
      sendTransaction: (options: TransactionOptions) =>
        contract.write.buildSingle(txArguments, options),
      decodeResult: async (receipt) => this.submitParse(receipt),
    })
  }

  public async populateBuildSingle(props: NoCallback<ShivaBuildSingleProps>) {
    return {
      to: this.getShivaAddress(),
      from: props.account,
      data: encodeFunctionData({
        abi: ShivaABI,
        functionName: 'buildSingle',
        args: [
          {
            ovlMarket: props.params.ovlMarket,
            brokerId: props.params.brokerId ?? this.core.brokerId,
            unwindPriceLimit: props.params.unwindPriceLimit,
            buildPriceLimit: props.params.buildPriceLimit,
            collateral: props.params.collateral,
            leverage: props.params.leverage,
            previousPositionId: props.params.previousPositionId,
          },
        ],
      }),
    }
  }

  public async simulateBuildSingle(props: NoCallback<ShivaBuildSingleProps>) {
    const { account, ...rest } = await this.parseBuildSingleProps(props);
    const contract = this.getShivaContract()

    const txArguments = [
      {
        ovlMarket: rest.params.ovlMarket,
        brokerId: rest.params.brokerId ?? this.core.brokerId,
        unwindPriceLimit: rest.params.unwindPriceLimit,
        buildPriceLimit: rest.params.buildPriceLimit,
        collateral: rest.params.collateral,
        leverage: rest.params.leverage,
        previousPositionId: rest.params.previousPositionId,
      },
    ] as const

    return contract.simulate.buildSingle(txArguments, {
      account: account.address,
    })
  }

  // Emergency Withdraw

  public async emergencyWithdraw(props: EmergencyWithdrawProps): Promise<TransactionResult> {
    this.core.useWeb3Provider()
    const { account, ...rest } = await this.parseEmergencyWithdrawProps(props)

    const contract = this.getShivaContract()

    const txArguments = [rest.marketAddress, rest.positionId, rest.owner] as const

    return this.core.performTransaction({
      ...rest,
      account,
      getGasLimit: (options: TransactionOptions) =>
        contract.estimateGas.emergencyWithdraw(txArguments, options),
      sendTransaction: (options: TransactionOptions) =>
        contract.write.emergencyWithdraw(txArguments, options),
    })
  }

  public async populateEmergencyWithdraw(props: NoCallback<EmergencyWithdrawProps>) {
    return {
      to: this.getShivaAddress(),
      from: props.account,
      data: encodeFunctionData({
        abi: ShivaABI,
        functionName: 'emergencyWithdraw',
        args: [props.marketAddress, props.positionId, props.owner],
      }),
    }
  } 

  public async simulateEmergencyWithdraw(props: NoCallback<EmergencyWithdrawProps>) {
    const { account, ...rest } = await this.parseEmergencyWithdrawProps(props);
    const contract = this.getShivaContract()

    const txArguments = [rest.marketAddress, rest.positionId, rest.owner] as const

    return contract.simulate.emergencyWithdraw(txArguments, {
      account: account.address,
    })
  }

  // Build On Behalf Of

  public async buildOnBehalfOf(
    props: ShivaBuildOnBehalfOfProps
  ): Promise<TransactionResult<BuildResult>> {
    this.core.useWeb3Provider()
    const { callback, account, ...rest } = await this.parseBuildOnBehalfOfProps(props)

    const contract = this.getShivaContract()

    const txArguments = [
      {
        ovlMarket: rest.params.marketAddress,
        brokerId: rest.params.brokerId ?? this.core.brokerId,
        isLong: rest.params.isLong,
        collateral: rest.params.collateral,
        leverage: rest.params.leverage,
        priceLimit: rest.params.priceLimit,
      },
      rest.onBehalfOf,
    ] as const

    return this.core.performTransaction({
      ...rest,
      account,
      callback,
      getGasLimit: (options: TransactionOptions) =>
        contract.estimateGas.build(txArguments, options),
      sendTransaction: (options: TransactionOptions) => contract.write.build(txArguments, options),
      decodeResult: async (receipt) => this.submitParse(receipt),
    })
  }

  public async populateBuildOnBehalfOf(props: NoCallback<ShivaBuildOnBehalfOfProps>) {
    return {
      to: this.getShivaAddress(),
      from: props.account,
      data: encodeFunctionData({
        abi: ShivaABI,
        functionName: 'build',
        args: [
          {
            ovlMarket: props.params.marketAddress,
            brokerId: props.params.brokerId ?? this.core.brokerId,
            isLong: props.params.isLong,
            collateral: props.params.collateral,
            leverage: props.params.leverage,
            priceLimit: props.params.priceLimit,
          },
          props.onBehalfOf,
        ],
      }),
    }
  }

  public async simulateBuildOnBehalfOf(props: NoCallback<ShivaBuildOnBehalfOfProps>) {
    const { account, ...rest } = await this.parseBuildOnBehalfOfProps(props);
    const contract = this.getShivaContract()

    const txArguments = [
      {
        ovlMarket: rest.params.marketAddress,
        brokerId: rest.params.brokerId ?? this.core.brokerId,
        isLong: rest.params.isLong,
        collateral: rest.params.collateral,
        leverage: rest.params.leverage,
        priceLimit: rest.params.priceLimit,
      },
      rest.onBehalfOf,
    ] as const

    return contract.simulate.build(txArguments, {
      account: account.address,
    })
  }
  
  // Unwind On Behalf Of

  public async unwindOnBehalfOf(props: ShivaUnwindOnBehalfOfProps): Promise<TransactionResult> {
    this.core.useWeb3Provider()
    const { account, callback, ...rest } = await this.parseUnwindOnBehalfOfProps(props)

    const contract = this.getShivaContract()

    const txArguments = [
      {
        ovlMarket: rest.params.marketAddress,
        brokerId: rest.params.brokerId ?? this.core.brokerId,
        positionId: rest.params.positionId,
        fraction: rest.params.fraction,
        priceLimit: rest.params.priceLimit,
      },
      rest.onBehalfOf,
    ] as const

    return this.core.performTransaction({
      ...rest,
      account,
      callback,
      getGasLimit: (options: TransactionOptions) =>
        contract.estimateGas.unwind(txArguments, options),
      sendTransaction: (options: TransactionOptions) => contract.write.unwind(txArguments, options),
    })
  }

  public async populateUnwindOnBehalfOf(props: NoCallback<ShivaUnwindOnBehalfOfProps>) {
    return {
      to: this.getShivaAddress(),
      from: props.account,
      data: encodeFunctionData({
        abi: ShivaABI,
        functionName: 'unwind',
        args: [
          {
            ovlMarket: props.params.marketAddress,
            brokerId: props.params.brokerId ?? this.core.brokerId,
            positionId: props.params.positionId,
            fraction: props.params.fraction,
            priceLimit: props.params.priceLimit,
          },
          props.onBehalfOf,
        ],
      }),
    }
  }

  public async simulateUnwindOnBehalfOf(props: NoCallback<ShivaUnwindOnBehalfOfProps>) {
    const { account, ...rest } = await this.parseUnwindOnBehalfOfProps(props);
    const contract = this.getShivaContract()

    const txArguments = [
      {
        ovlMarket: rest.params.marketAddress,
        brokerId: rest.params.brokerId ?? this.core.brokerId,
        positionId: rest.params.positionId,
        fraction: rest.params.fraction,
        priceLimit: rest.params.priceLimit,
      },
      rest.onBehalfOf,
    ] as const

    return contract.simulate.unwind(txArguments, {
      account: account.address,
    })
  }

  // Build Single On Behalf Of

  public async buildSingleOnBehalfOf(
    props: ShivaBuildSingleOnBehalfOfProps
  ): Promise<TransactionResult<BuildResult>> {
    this.core.useWeb3Provider()
    const { callback, account, ...rest } = await this.parseBuildSingleOnBehalfOfProps(props)

    const contract = this.getShivaContract()

    const txArguments = [
      {
        ovlMarket: rest.params.ovlMarket,
        brokerId: rest.params.brokerId ?? this.core.brokerId,
        unwindPriceLimit: rest.params.unwindPriceLimit,
        buildPriceLimit: rest.params.buildPriceLimit,
        collateral: rest.params.collateral,
        leverage: rest.params.leverage,
        previousPositionId: rest.params.previousPositionId,
      },
      rest.onBehalfOf,
    ] as const

    return this.core.performTransaction({
      ...rest,
      account,
      callback,
      getGasLimit: (options: TransactionOptions) =>
        contract.estimateGas.buildSingle(txArguments, options),
      sendTransaction: (options: TransactionOptions) =>
        contract.write.buildSingle(txArguments, options),
      decodeResult: async (receipt) => this.submitParse(receipt),
    })
  }

  public async populateBuildSingleOnBehalfOf(props: NoCallback<ShivaBuildSingleOnBehalfOfProps>) {
    return {
      to: this.getShivaAddress(),
      from: props.account,
      data: encodeFunctionData({
        abi: ShivaABI,
        functionName: 'buildSingle',
        args: [
          {
            ovlMarket: props.params.ovlMarket,
            brokerId: props.params.brokerId ?? this.core.brokerId,
            unwindPriceLimit: props.params.unwindPriceLimit,
            buildPriceLimit: props.params.buildPriceLimit,
            collateral: props.params.collateral,
            leverage: props.params.leverage,
            previousPositionId: props.params.previousPositionId,
          },
          props.onBehalfOf,
        ],
      }),
    }
  }

  public async simulateBuildSingleOnBehalfOf(props: NoCallback<ShivaBuildSingleOnBehalfOfProps>) {
    const { account, ...rest } = await this.parseBuildSingleOnBehalfOfProps(props);
    const contract = this.getShivaContract()

    const txArguments = [
      {
        ovlMarket: rest.params.ovlMarket,
        brokerId: rest.params.brokerId ?? this.core.brokerId,
        unwindPriceLimit: rest.params.unwindPriceLimit,
        buildPriceLimit: rest.params.buildPriceLimit,
        collateral: rest.params.collateral,
        leverage: rest.params.leverage,
        previousPositionId: rest.params.previousPositionId,
      },
      rest.onBehalfOf,
    ] as const

    return contract.simulate.buildSingle(txArguments, {
      account: account.address,
    })
  }

  public async parseCancelNonceProps(props: ShivaCancelNonceProps): Promise<ShivaCancelNonceInnerProps> {
    return {
      ...props,
      account: await this.core.useAccount(props.account),
      callback: props.callback ?? NOOP,
    }
  }

  private async parseBuildProps(props: BuildProps): Promise<BuildInnerProps> {
    return {
      ...props,
      account: await this.core.useAccount(props.account),
      callback: props.callback ?? NOOP,
    }
  }

  private async parseUnwindProps(props: UnwindProps): Promise<UnwindInnerProps> {
    return {
      ...props,
      account: await this.core.useAccount(props.account),
      callback: props.callback ?? NOOP,
    }
  }

  private async parseBuildSingleProps(
    props: ShivaBuildSingleProps
  ): Promise<ShivaBuildSingleInnerProps> {
    return {
      ...props,
      account: await this.core.useAccount(props.account),
      callback: props.callback ?? NOOP,
    }
  }

  private async parseEmergencyWithdrawProps(
    props: EmergencyWithdrawProps
  ): Promise<EmergencyWithdrawInnerProps> {
    return {
      ...props,
      account: await this.core.useAccount(props.account),
      callback: props.callback ?? NOOP,
    }
  }

  private async parseBuildOnBehalfOfProps(
    props: ShivaBuildOnBehalfOfProps
  ): Promise<ShivaBuildOnBehalfOfInnerProps> {
    return {
      ...props,
      account: await this.core.useAccount(props.account),
      callback: props.callback ?? NOOP,
    }
  }

  private async parseUnwindOnBehalfOfProps(
    props: ShivaUnwindOnBehalfOfProps
  ): Promise<ShivaUnwindOnBehalfOfInnerProps> {
    return {
      ...props,
      account: await this.core.useAccount(props.account),
      callback: props.callback ?? NOOP,
    }
  }

  private async parseBuildSingleOnBehalfOfProps(
    props: ShivaBuildSingleOnBehalfOfProps
  ): Promise<ShivaBuildSingleOnBehalfOfInnerProps> {
    return {
      ...props,
      account: await this.core.useAccount(props.account),
      callback: props.callback ?? NOOP,
    }
  }

  private async parseUnwindMultipleProps(props: UnwindMultipleProps): Promise<UnwindMultipleInnerProps> {
    return {
      ...props,
      account: await this.core.useAccount(props.account),
      callback: props.callback ?? NOOP,
    };
  }

  private submitParse(receipt: TransactionReceipt): BuildResult {
    let positionId: bigint | undefined
    for (const log of receipt.logs) {
      if (log.topics[0] !== OverlaySDKShiva.SHIVA_BUILD_SIGNATURE) {
        continue
      }
      let parsedLog
      if (log.topics[0] === OverlaySDKShiva.SHIVA_BUILD_SIGNATURE) {
        parsedLog = decodeEventLog({
          abi: ShivaABI,
          strict: true,
          ...log,
        })
      }
      if (parsedLog && 'positionId' in parsedLog.args) {
        positionId = BigInt(parsedLog.args.positionId)
        break
      }
    }
    invariant(
      positionId,
      'Position ID not found in the transaction receipt',
      ERROR_CODE.TRANSACTION_ERROR
    )
    return { positionId }
  }

  // Sign methods
  public async getDomain() {
    const chainId = this.core.chainId
    const address = this.getShivaAddress()

    return {
      name: 'Shiva',
      version: '0.1.0',
      chainId: BigInt(chainId),
      verifyingContract: address,
    }
  }

  // generate a random bigint nonce from 0 to 2^256
  private randomBigInt() {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);

    let result = BigInt(0);
    for (const num of array) {
        result = (result << BigInt(8)) + BigInt(num);
    }
    
    return result;
}

  public async signBuildOnBehalfOf(
    props: SignBuildOnBehalfOfProps
  ): Promise<BuildOnBehalfOfSignature> {
    const {
      ovlMarket,
      deadline,
      collateral,
      leverage,
      isLong,
      priceLimit,
      nonce,
      account: accountProp,
    } = props

    const web3Provider = this.core.useWeb3Provider()
    const account = await this.core.useAccount(accountProp)
    
    const domain = await this.getDomain()
    const brokerId = props.brokerId ?? this.core.brokerId

    const message = {
      ovlMarket,
      deadline,
      collateral,
      leverage,
      isLong,
      priceLimit,
      nonce: nonce ?? this.randomBigInt(),
      brokerId,
    }

    const signature = await web3Provider.signTypedData({
      account,
      domain,
      types: BUILD_TYPES,
      primaryType: 'BuildOnBehalfOfParams',
      message,
    })

    return { ...message, signature, owner: account.address as Address }
  }

  public async signUnwindOnBehalfOf(
    props: SignUnwindOnBehalfOfProps
  ): Promise<UnwindOnBehalfOfSignature> {
    const { ovlMarket, deadline, positionId, fraction, priceLimit, nonce, account: accountProp } = props

    const web3Provider = this.core.useWeb3Provider()
    const account = await this.core.useAccount(accountProp)

    const domain = await this.getDomain()
    const brokerId = props.brokerId ?? this.core.brokerId

    const message = {
      ovlMarket,
      deadline,
      positionId,
      fraction,
      priceLimit,
      nonce: nonce ?? this.randomBigInt(),
      brokerId,
    }

    const signature = await web3Provider.signTypedData({
      account,
      domain,
      types: UNWIND_TYPES,
      primaryType: 'UnwindOnBehalfOfParams',
      message,
    })

    return { ...message, signature, owner: account.address }
  }

  public async signBuildSingleOnBehalfOf(
    props: SignBuildSingleOnBehalfOfProps
  ): Promise<BuildSingleOnBehalfOfSignature> {
    const {
      ovlMarket,
      deadline,
      collateral,
      leverage,
      previousPositionId,
      unwindPriceLimit,
      buildPriceLimit,
      nonce,
      account: accountProp,
    } = props

    const web3Provider = this.core.useWeb3Provider()
    const account = await this.core.useAccount(accountProp)

    const domain = await this.getDomain()
    const brokerId = props.brokerId ?? this.core.brokerId

    const message = {
      ovlMarket,
      deadline,
      collateral,
      leverage,
      previousPositionId,
      unwindPriceLimit,
      buildPriceLimit,
      nonce: nonce ?? this.randomBigInt(),
      brokerId,
    }

    const signature = await web3Provider.signTypedData({
      account,
      domain,
      types: BUILD_SINGLE_TYPES,
      primaryType: 'BuildSingleOnBehalfOfParams',
      message,
    })

    return { ...message, signature, owner: account.address }
  }

  /**
   * Get all authorized factory addresses from Shiva contract
   * @returns Array of factory addresses that Shiva recognizes
   */
  public async getAuthorizedFactories(): Promise<Address[]> {
    const contract = this.getShivaContract()
    const factories: Address[] = []

    try {
      let index = 0
      while (true) {
        const factory = await contract.read.authorizedFactories([BigInt(index)])
        if (factory === zeroAddress) break
        factories.push(factory)
        index++
      }
    } catch (error) {
      // Array access out of bounds means we've reached the end
    }

    return factories
  }

  /**
   * Add a new factory to Shiva's authorized list (governance only)
   * @param props.account - Governor account
   * @param props.factoryAddress - Factory address to authorize
   * @returns Transaction result
   */
  public async addFactory(props: {
    account: Address
    factoryAddress: Address
    callback?: CommonTransactionProps['callback']
  }): Promise<TransactionResult> {
    this.core.useWeb3Provider()
    const { account, factoryAddress, callback } = props

    const contract = this.getShivaContract()
    const txArguments = [factoryAddress] as const

    return this.core.performTransaction({
      account,
      callback,
      getGasLimit: (options: TransactionOptions) =>
        contract.estimateGas.addFactory(txArguments, options),
      sendTransaction: (options: TransactionOptions) =>
        contract.write.addFactory(txArguments, options),
    })
  }

  /**
   * Remove a factory from Shiva's authorized list (governance only)
   * @param props.account - Governor account
   * @param props.factoryAddress - Factory address to remove
   * @returns Transaction result
   */
  public async removeFactory(props: {
    account: Address
    factoryAddress: Address
    callback?: CommonTransactionProps['callback']
  }): Promise<TransactionResult> {
    this.core.useWeb3Provider()
    const { account, factoryAddress, callback } = props

    const contract = this.getShivaContract()
    const txArguments = [factoryAddress] as const

    return this.core.performTransaction({
      account,
      callback,
      getGasLimit: (options: TransactionOptions) =>
        contract.estimateGas.removeFactory(txArguments, options),
      sendTransaction: (options: TransactionOptions) =>
        contract.write.removeFactory(txArguments, options),
    })
  }
}
