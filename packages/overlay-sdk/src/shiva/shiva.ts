import {
  Address,
  decodeEventLog,
  getAbiItem,
  getContract,
  GetContractReturnType,
  toEventHash,
  TransactionReceipt,
  WalletClient,
} from 'viem'
import { OverlaySDKModule } from '../common/class-primitives/sdk-module'
import { OverlaySDKCommonProps, TransactionOptions, TransactionResult } from '../core/types'
import { OverlaySDK } from '../sdk'
import { ShivaABI } from './abis/Shiva'
import { CHAINS, ERROR_CODE, invariant, NOOP } from '../common'
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
  ShivaUnwindOnBehalfOfInnerProps,
  ShivaUnwindOnBehalfOfProps,
  SignBuildOnBehalfOfProps,
  SignBuildSingleOnBehalfOfProps,
  SignUnwindOnBehalfOfProps,
  UNWIND_TYPES,
  UnwindOnBehalfOfSignature,
} from './types'
import { BuildInnerProps, BuildProps, BuildResult, EmergencyWithdrawInnerProps, EmergencyWithdrawProps, UnwindInnerProps, UnwindProps } from '../markets/types'

export class OverlaySDKShiva extends OverlaySDKModule {
  private sdk: OverlaySDK

  private static SHIVA_BUILD_SIGNATURE = toEventHash(
    getAbiItem({ abi: ShivaABI, name: 'ShivaBuild' })
  )

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props)
    this.sdk = sdk
  }

  public async contractAddress() {
    const chainId = await this.core.rpcProvider.getChainId()
    invariant(chainId in CHAINS, 'Unsupported chainId')
    return SHIVA_ADDRESS[chainId as CHAINS]
  }

  public async getShivaContract(): Promise<GetContractReturnType<typeof ShivaABI, WalletClient>> {
    const address = await this.contractAddress()
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

    const address = await this.contractAddress()

    return this.sdk.ovl.approve({
      account: account,
      amount: rest.amount,
      to: address,
    })
  }

  // Build

  public async build(props: BuildProps): Promise<TransactionResult<BuildResult>> {
    this.core.useWeb3Provider()
    const { callback, account, ...rest } = await this.parseBuildProps(props)

    const contract = await this.getShivaContract()

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

  // Unwind

  public async unwind(props: UnwindProps): Promise<TransactionResult> {
    this.core.useWeb3Provider()
    const { account, ...rest } = await this.parseUnwindProps(props)

    const contract = await this.getShivaContract()

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

  // Build Single

  public async buildSingle(
    props: ShivaBuildSingleProps
  ): Promise<TransactionResult<BuildResult>> {
    this.core.useWeb3Provider()
    const { callback, account, ...rest } = await this.parseBuildSingleProps(props)

    const contract = await this.getShivaContract()

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

  // Emergency Withdraw

  public async emergencyWithdraw(props: EmergencyWithdrawProps): Promise<TransactionResult> {
    this.core.useWeb3Provider()
    const { account, ...rest } = await this.parseEmergencyWithdrawProps(props)

    const contract = await this.getShivaContract()

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

  // Build On Behalf Of

  public async buildOnBehalfOf(
    props: ShivaBuildOnBehalfOfProps
  ): Promise<TransactionResult<BuildResult>> {
    this.core.useWeb3Provider()
    const { callback, account, ...rest } = await this.parseBuildOnBehalfOfProps(props)

    const contract = await this.getShivaContract()

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

  // Unwind On Behalf Of

  public async unwindOnBehalfOf(props: ShivaUnwindOnBehalfOfProps): Promise<TransactionResult> {
    this.core.useWeb3Provider()
    const { account, ...rest } = await this.parseUnwindOnBehalfOfProps(props)

    const contract = await this.getShivaContract()

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
      getGasLimit: (options: TransactionOptions) =>
        contract.estimateGas.unwind(txArguments, options),
      sendTransaction: (options: TransactionOptions) => contract.write.unwind(txArguments, options),
    })
  }

  // Build Single On Behalf Of

  public async buildSingleOnBehalfOf(
    props: ShivaBuildSingleOnBehalfOfProps
  ): Promise<TransactionResult<BuildResult>> {
    this.core.useWeb3Provider()
    const { callback, account, ...rest } = await this.parseBuildSingleOnBehalfOfProps(props)

    const contract = await this.getShivaContract()

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
    const chainId = await this.core.rpcProvider.getChainId()
    const address = await this.contractAddress()

    return {
      name: 'Shiva',
      version: '0.1.0',
      chainId: BigInt(chainId),
      verifyingContract: address,
    }
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
      account: accountProp,
    } = props

    const web3Provider = this.core.useWeb3Provider()
    const account = await this.core.useAccount(accountProp)

    const contract = await this.getShivaContract()
    const domain = await this.getDomain()

    const nonce = await contract.read.nonces([account.address])
    const brokerId = props.brokerId ?? this.core.brokerId

    const message = {
      ovlMarket,
      deadline,
      collateral,
      leverage,
      isLong,
      priceLimit,
      nonce,
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
    const { ovlMarket, deadline, positionId, fraction, priceLimit, account: accountProp } = props

    const web3Provider = this.core.useWeb3Provider()
    const account = await this.core.useAccount(accountProp)

    const contract = await this.getShivaContract()
    const domain = await this.getDomain()

    const nonce = await contract.read.nonces([account.address])
    const brokerId = props.brokerId ?? this.core.brokerId

    const message = {
      ovlMarket,
      deadline,
      positionId,
      fraction,
      priceLimit,
      nonce,
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
      account: accountProp,
    } = props

    const web3Provider = this.core.useWeb3Provider()
    const account = await this.core.useAccount(accountProp)

    const contract = await this.getShivaContract()
    const domain = await this.getDomain()

    const nonce = await contract.read.nonces([account.address])
    const brokerId = props.brokerId ?? this.core.brokerId

    const message = {
      ovlMarket,
      deadline,
      collateral,
      leverage,
      previousPositionId,
      unwindPriceLimit,
      buildPriceLimit,
      nonce,
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
}
