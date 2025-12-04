import axios from 'axios'
import {
  Address,
  JsonRpcAccount,
  decodeEventLog,
  decodeFunctionData,
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
import { AccountValue, NoCallback, OverlaySDKCommonProps, TransactionOptions, TransactionResult, CommonTransactionProps } from '../core/types'
import { OverlaySDK } from '../sdk'
import { ShivaABI } from './abis/Shiva'
import { CHAINS, ERROR_CODE, invariant, invariantArgument, NOOP, SDKError, toWei } from '../common'
import { OVL_ADDRESS, SHIVA_ADDRESS } from '../constants'
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
  ShivaBuildStableProps,
  ShivaBuildStableInnerProps,
  ShivaCancelNonceInnerProps,
  ShivaCancelNonceProps,
  ShivaUnwindOnBehalfOfInnerProps,
  ShivaUnwindOnBehalfOfProps,
  ShivaUnwindStableInnerProps,
  ShivaUnwindStableProps,
  SignBuildOnBehalfOfProps,
  SignBuildSingleOnBehalfOfProps,
  SignUnwindOnBehalfOfProps,
  UNWIND_TYPES,
  UnwindOnBehalfOfSignature,
} from './types'
import { BuildInnerProps, BuildProps, BuildResult, EmergencyWithdrawInnerProps, EmergencyWithdrawProps, UnwindInnerProps, UnwindMultipleInnerProps, UnwindMultipleProps, UnwindProps } from '../markets/types'
import { UnwindState, UnwindStateData, UnwindStateSuccess } from '../trade'
import { getPositionDetails } from '../subgraph'

const ERC20_TRANSFER_ABI = [
  {
    type: 'function',
    name: 'transfer',
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

const ONE_INCH_SWAP_ABI_VARIANTS = [
  [
    {
      type: 'function',
      name: 'swap',
      stateMutability: 'payable',
      inputs: [
        { name: 'executor', type: 'address' },
        {
          name: 'desc',
          type: 'tuple',
          components: [
            { name: 'srcToken', type: 'address' },
            { name: 'dstToken', type: 'address' },
            { name: 'srcReceiver', type: 'address' },
            { name: 'dstReceiver', type: 'address' },
            { name: 'amount', type: 'uint256' },
            { name: 'minReturnAmount', type: 'uint256' },
            { name: 'flags', type: 'uint256' },
          ],
        },
        { name: 'data', type: 'bytes' },
      ],
      outputs: [
        { name: 'returnAmount', type: 'uint256' },
        { name: 'spentAmount', type: 'uint256' },
      ],
    },
  ],
] as const

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

  // Build Stable (with LBSC)

  public async buildStable(props: ShivaBuildStableProps): Promise<TransactionResult<BuildResult>> {
    this.core.useWeb3Provider()
    const { callback, account, ...rest } = await this.parseBuildStableProps(props)

    const contract = this.getShivaContract()

    const txArguments = [
      {
        ovlMarket: rest.params.marketAddress,
        brokerId: rest.params.brokerId ?? this.core.brokerId,
        isLong: rest.params.isLong,
        stableCollateral: rest.params.stableCollateral,
        leverage: rest.params.leverage,
        priceLimit: rest.params.priceLimit,
        minOvl: rest.params.minOvl,
      },
    ] as const

    return this.core.performTransaction({
      ...rest,
      account,
      callback,
      getGasLimit: (options: TransactionOptions) =>
        contract.estimateGas.buildStable(txArguments, options),
      sendTransaction: (options: TransactionOptions) => contract.write.buildStable(txArguments, options),
      decodeResult: async (receipt) => this.submitParse(receipt),
    })
  }

  /**
   * Get loan ID for a position built with stable collateral
   * @param marketAddress The market address
   * @param positionId The position ID
   * @returns The loan ID (0 if not an LBSC position)
   */
  public async getLoanId(marketAddress: `0x${string}`, positionId: bigint): Promise<bigint> {
    const contract = this.getShivaContract()
    return contract.read.loanIds([marketAddress, positionId])
  }

  /**
   * Get the LBSC contract address from Shiva
   * @returns The LBSC contract address
   */
  public async getLbscAddress(): Promise<`0x${string}`> {
    const contract = this.getShivaContract()
    return contract.read.lbsc()
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

  // Unwind Stable (LBSC unwind + swap to stable)

  public async unwindStable(props: ShivaUnwindStableProps, verified: boolean = false): Promise<TransactionResult> {
    this.core.useWeb3Provider()

    if (!verified) {
      const { account, marketAddress, positionId } = await this.parseUnwindStableProps(props);
      const marketPositionId = `${marketAddress.toLowerCase()}-0x${Number(positionId).toString(16)}`
      const positionDetails = await getPositionDetails(this.core.chainId, account.address.toLowerCase(), marketPositionId) ?? null
      invariant(positionDetails, `Position not found for ${marketPositionId}; ${account.address.toLowerCase()}; ${positionId}; marketAddress: ${marketAddress}; chainId: ${this.core.chainId}`)
      invariant(positionDetails.router.id !== zeroAddress, 'This position is not on Shiva')
    }

    const { account, swapData, minOut, slippage, ...rest } = await this.parseUnwindStableProps(props)

    const { payload: swapPayload, minOutOverride } = await this.getUnwindStableSwapPayload({
      account,
      minOut,
      slippage,
      swapData,
      marketAddress: rest.marketAddress,
      positionId: rest.positionId,
      fraction: rest.fraction,
      priceLimit: rest.priceLimit,
      brokerId: rest.brokerId ?? this.core.brokerId,
    })

    const finalMinOut = minOutOverride ?? minOut

    const contract = this.getShivaContract()

    const txArguments = [
      {
        ovlMarket: rest.marketAddress,
        brokerId: rest.brokerId ?? this.core.brokerId,
        positionId: rest.positionId,
        fraction: rest.fraction,
        priceLimit: rest.priceLimit,
      },
      swapPayload,
      finalMinOut,
    ] as const

    return this.core.performTransaction({
      ...rest,
      account,
      getGasLimit: (options: TransactionOptions) =>
        contract.estimateGas.unwindStable(txArguments, options),
      sendTransaction: (options: TransactionOptions) =>
        contract.write.unwindStable(txArguments, options),
    })
  }

  public async populateUnwindStable(props: NoCallback<ShivaUnwindStableProps>) {
    const { account, minOut, slippage, swapData, ...rest } = await this.parseUnwindStableProps(props)

    const { payload: swapPayload, minOutOverride } = await this.getUnwindStableSwapPayload({
      account,
      minOut,
      slippage,
      swapData,
      marketAddress: rest.marketAddress,
      positionId: rest.positionId,
      fraction: rest.fraction,
      priceLimit: rest.priceLimit,
      brokerId: rest.brokerId ?? this.core.brokerId,
    })

    const finalMinOut = minOutOverride ?? minOut

    return {
      to: this.getShivaAddress(),
      from: account.address,
      data: encodeFunctionData({
        abi: ShivaABI,
        functionName: 'unwindStable',
        args: [
          {
            ovlMarket: rest.marketAddress,
            brokerId: rest.brokerId ?? this.core.brokerId,
            positionId: rest.positionId,
            fraction: rest.fraction,
            priceLimit: rest.priceLimit,
          },
          swapPayload,
          finalMinOut,
        ],
      }),
    }
  }

  public async simulateUnwindStable(props: NoCallback<ShivaUnwindStableProps>) {
    const { account, swapData, minOut, slippage, ...rest } = await this.parseUnwindStableProps(props);
    const { payload: swapPayload, minOutOverride } = await this.getUnwindStableSwapPayload({
      account,
      minOut,
      slippage,
      swapData,
      marketAddress: rest.marketAddress,
      positionId: rest.positionId,
      fraction: rest.fraction,
      priceLimit: rest.priceLimit,
      brokerId: rest.brokerId ?? this.core.brokerId,
    })

    const finalMinOut = minOutOverride ?? minOut

    const contract = this.getShivaContract()

    const txArguments = [
      {
        ovlMarket: rest.marketAddress,
        brokerId: rest.brokerId ?? this.core.brokerId,
        positionId: rest.positionId,
        fraction: rest.fraction,
        priceLimit: rest.priceLimit,
      },
      swapPayload,
      finalMinOut,
    ] as const

    return contract.simulate.unwindStable(txArguments, {
      account: account.address,
    })
  }

  private async getUnwindStableSwapPayload({
    minOut,
    slippage,
    swapData,
    account,
    marketAddress,
    positionId,
    fraction,
    priceLimit,
    brokerId,
  }: {
    minOut: bigint
    slippage?: number
    swapData?: `0x${string}`
    account: JsonRpcAccount
    marketAddress: Address
    positionId: bigint
    fraction: bigint
    priceLimit: bigint
    brokerId?: number
  }): Promise<{ payload: `0x${string}`; minOutOverride?: bigint }> {
    if (swapData && swapData !== '0x') {
      return { payload: swapData }
    }

    if (this.core.chainId === CHAINS.BscTestnet) {
      const minOutHex = minOut.toString(16).padStart(64, '0')
      const prefix = '0x07ed23790000000000000000000000009fB7D92526Fc13bB3c0603d39E55e5C371c26Ce60000000000000000000000001A0eF183D548405705bb9B00E8b4ef3524AE090E00000000000000000000000018b702fD1b63dccbc58D30379B9365679b32618d0000000000000000000000009fB7D92526Fc13bB3c0603d39E55e5C371c26Ce60000000000000000000000009fB7D92526Fc13bB3c0603d39E55e5C371c26Ce60000000000000000000000000000000000000000000000000de0b6b3a7640000'
      const suffix = '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000e90000000000000000000000000000000000000000000000cb00006800001a0020d6bdbf781A0eF183D548405705bb9B00E8b4ef3524AE090E00a0744c8c091A0eF183D548405705bb9B00E8b4ef3524AE090E90cbe4bdd538d6e9b379bff5fe72c3d67a521de5000000000000000000000000000000000000000000000000000aa87bee53800002a00000000000000000000000000000000000000000000000000000000000000001ee63c1e581c3b423339da62f48f75a1ac9a528c0c4a2e5783d1A0eF183D548405705bb9B00E8b4ef3524AE090E111111125421ca6dc452d289314280a0f8842a650000000000000000000000000000000000000000000000a13324ca'
      return { payload: `${prefix}${minOutHex}${suffix}` as `0x${string}` }
    }

    if (this.core.chainId === CHAINS.BscMainnet) {
      const apiKey = this.core.oneInchApiKey
      if (!apiKey) {
        throw new SDKError({
          code: ERROR_CODE.INVALID_ARGUMENT,
          message: 'oneInchApiKey is required to fetch swap data from 1inch',
        })
      }

      const shivaAddress = this.getShivaAddress()
      const ovlAmount = await this.getUnwindOvlAmount({
        account,
        marketAddress,
        positionId,
        fraction,
        priceLimit,
        brokerId,
      })

      // if there's no ovlAmount to swap, shiva will omit the swap - but the swap payload is still needed to construct the params
      const swapAmount = ovlAmount === 0n ? 10n ** 18n : ovlAmount

      const params: Record<string, string | number | boolean> = {
        src: OVL_ADDRESS[CHAINS.BscMainnet],
        dst: '0x55d398326f99059fF775485246999027B3197955',
        amount: swapAmount.toString(),
        from: shivaAddress,
        origin: shivaAddress,
        receiver: shivaAddress,
        disableEstimate: true,
        usePatching: true,
      }

      if (slippage !== undefined) {
        params.slippage = slippage
      } else {
        params.minReturn = minOut.toString()
      }

      try {
        const response = await axios.get('https://api.1inch.com/swap/v6.1/56/swap', {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
          params,
          paramsSerializer: {
            indexes: null,
          },
        })

        const txData = response.data?.tx?.data as `0x${string}` | undefined

        if (!txData) {
          throw new SDKError({
            code: ERROR_CODE.TRANSACTION_ERROR,
            message: 'Invalid response from 1Inch: missing transaction data',
          })
        }

        const apiMinOut = slippage !== undefined
          ? this.decodeMinOutFromSwapPayload(txData)
          : undefined

        return {
          payload: txData,
          minOutOverride: apiMinOut,
        }
      } catch (error) {
        if (error instanceof SDKError) {
          throw error
        }

        throw new SDKError({
          code: ERROR_CODE.TRANSACTION_ERROR,
          message: 'Failed to fetch swap data from 1Inch',
          error,
        })
      }
    }

    throw new SDKError({
      code: ERROR_CODE.INVALID_ARGUMENT,
      message: `swapData is required for unwindStable on unsupported chain ${this.core.chainId}`,
    })
  }

  private decodeMinOutFromSwapPayload(payload: `0x${string}`): bigint | undefined {
    for (const abi of ONE_INCH_SWAP_ABI_VARIANTS) {
      try {
        const decoded = decodeFunctionData({
          abi,
          data: payload,
        })

        if (decoded.functionName !== 'swap') continue

        const desc =
          (Array.isArray(decoded.args) && decoded.args[1]) ||
          (decoded as any).args?.desc

        const minReturn =
          desc?.minReturnAmount ??
          desc?.minReturn ??
          (Array.isArray(desc) ? desc[5] : undefined)

        if (minReturn !== undefined) {
          return typeof minReturn === 'bigint' ? minReturn : BigInt(minReturn)
        }
      } catch {
        // try next ABI variant
      }
    }

    return undefined
  }

  public async getUnwindOvlAmount({
    account,
    marketAddress,
    positionId,
    fraction,
    priceLimit,
    brokerId,
  }: {
    account: AccountValue | JsonRpcAccount
    marketAddress: Address
    positionId: bigint
    fraction: bigint
    priceLimit: bigint
    brokerId?: number
  }): Promise<bigint> {
    const normalizedAccount =
      typeof account === 'object' && 'address' in account
        ? (account as JsonRpcAccount)
        : await this.core.useAccount(account)

    const shivaAddress = this.getShivaAddress()

    const unwindData = encodeFunctionData({
      abi: ShivaABI,
      functionName: 'unwind',
      args: [
        {
          ovlMarket: marketAddress,
          brokerId: brokerId ?? this.core.brokerId,
          positionId,
          fraction,
          priceLimit,
        },
      ],
    })

    try {
      const rpcClient: any = this.core.rpcProvider
      const trace: any = await rpcClient.request?.({
        method: 'debug_traceCall' as any,
        params: [
          {
            from: normalizedAccount.address,
            to: shivaAddress,
            data: unwindData,
          },
          'latest',
          { tracer: 'callTracer' } as any,
        ],
      })

      const ovlToken = OVL_ADDRESS[this.core.chainId as CHAINS].toLowerCase()
      const receiver = normalizedAccount.address.toLowerCase()
      const amount = this.extractTransferAmountFromTrace(trace, ovlToken, receiver)

      if (amount !== null) {
        return amount
      }

      throw new Error('Transfer amount not found in unwind trace')
    } catch (error) {
      throw new SDKError({
        code: ERROR_CODE.TRANSACTION_ERROR,
        message: 'Failed to trace unwind for swap amount (ensure RPC supports debug_traceCall or provide swapData)',
        error,
      })
    }
  }

  private extractTransferAmountFromTrace(
    trace: any,
    tokenAddress: string,
    receiver: string
  ): bigint | null {
    if (!trace) return null

    const to = typeof trace.to === 'string' ? trace.to.toLowerCase() : ''
    const input = typeof trace.input === 'string' ? trace.input : ''

    if (to === tokenAddress && input.startsWith('0xa9059cbb')) {
      try {
        const { args } = decodeFunctionData({
          abi: ERC20_TRANSFER_ABI,
          data: input as `0x${string}`,
        })

        const [decodedReceiver, amount] = args as readonly [Address, bigint]
        if ((decodedReceiver as string).toLowerCase() === receiver) {
          return amount
        }
      } catch {
        // ignore decoding issues and continue searching
      }
    }

    if (Array.isArray((trace as any).calls)) {
      for (const call of trace.calls) {
        const amount = this.extractTransferAmountFromTrace(call, tokenAddress, receiver)
        if (amount !== null) return amount
      }
    }

    return null
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

  private async parseUnwindStableProps(
    props: ShivaUnwindStableProps | NoCallback<ShivaUnwindStableProps>
  ): Promise<ShivaUnwindStableInnerProps> {
    const hasMinOut = props.minOut !== undefined
    const hasSlippage = props.slippage !== undefined

    invariantArgument(!(hasMinOut && hasSlippage), 'Provide either minOut or slippage, not both')
    invariantArgument(hasMinOut || hasSlippage, 'Either minOut or slippage is required')

    const minOut =
      hasSlippage && this.core.chainId === CHAINS.BscTestnet
        ? 0n
        : hasMinOut
          ? props.minOut!
          : 0n
    const callback = 'callback' in props ? props.callback : undefined

    return {
      ...props,
      minOut,
      slippage: hasSlippage ? props.slippage : undefined,
      account: await this.core.useAccount(props.account),
      callback: callback ?? NOOP,
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

  private async parseBuildStableProps(
    props: ShivaBuildStableProps
  ): Promise<ShivaBuildStableInnerProps> {
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
