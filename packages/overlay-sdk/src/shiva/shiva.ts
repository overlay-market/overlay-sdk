import {
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
  ShivaBuildInnerProps,
  ShivaBuildOnBehalfOfInnerProps,
  ShivaBuildOnBehalfOfProps,
  ShivaBuildProps,
  ShivaBuildResult,
  ShivaBuildSingleInnerProps,
  ShivaBuildSingleOnBehalfOfInnerProps,
  ShivaBuildSingleOnBehalfOfProps,
  ShivaBuildSingleProps,
  ShivaEmergencyWithdrawInnerProps,
  ShivaEmergencyWithdrawProps,
  ShivaUnwindInnerProps,
  ShivaUnwindOnBehalfOfInnerProps,
  ShivaUnwindOnBehalfOfProps,
  ShivaUnwindProps,
} from './types'

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

  // Build

  public async build(props: ShivaBuildProps): Promise<TransactionResult<ShivaBuildResult>> {
    this.core.useWeb3Provider()
    const { callback, account, ...rest } = await this.parseBuildProps(props)

    const contract = await this.getShivaContract()

    const txArguments = [rest.params] as const

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

  public async unwind(props: ShivaUnwindProps): Promise<TransactionResult> {
    this.core.useWeb3Provider()
    const { account, ...rest } = await this.parseUnwindProps(props)

    const contract = await this.getShivaContract()

    const txArguments = [rest.params] as const

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
  ): Promise<TransactionResult<ShivaBuildResult>> {
    this.core.useWeb3Provider()
    const { callback, account, ...rest } = await this.parseBuildSingleProps(props)

    const contract = await this.getShivaContract()

    const txArguments = [rest.params] as const

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

  public async emergencyWithdraw(props: ShivaEmergencyWithdrawProps): Promise<TransactionResult> {
    this.core.useWeb3Provider()
    const { account, ...rest } = await this.parseEmergencyWithdrawProps(props)

    const contract = await this.getShivaContract()

    const txArguments = [rest.market, rest.positionId, rest.owner] as const

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
  ): Promise<TransactionResult<ShivaBuildResult>> {
    this.core.useWeb3Provider()
    const { callback, account, ...rest } = await this.parseBuildOnBehalfOfProps(props)

    const contract = await this.getShivaContract()

    const txArguments = [rest.params, rest.onBehalfOf] as const

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

    const txArguments = [rest.params, rest.onBehalfOf] as const

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
  ): Promise<TransactionResult<ShivaBuildResult>> {
    this.core.useWeb3Provider()
    const { callback, account, ...rest } = await this.parseBuildSingleOnBehalfOfProps(props)

    const contract = await this.getShivaContract()

    const txArguments = [rest.params, rest.onBehalfOf] as const

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

  private async parseBuildProps(props: ShivaBuildProps): Promise<ShivaBuildInnerProps> {
    return {
      ...props,
      account: await this.core.useAccount(props.account),
      callback: props.callback ?? NOOP,
    }
  }

  private async parseUnwindProps(props: ShivaUnwindProps): Promise<ShivaUnwindInnerProps> {
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
    props: ShivaEmergencyWithdrawProps
  ): Promise<ShivaEmergencyWithdrawInnerProps> {
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

  private submitParse(receipt: TransactionReceipt): ShivaBuildResult {
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
}
