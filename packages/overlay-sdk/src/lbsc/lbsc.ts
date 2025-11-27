import {
  Address,
  getContract,
  GetContractReturnType,
  PublicClient,
  WalletClient,
} from 'viem'
import { OverlaySDKModule } from '../common/class-primitives/sdk-module'
import { OverlaySDKCommonProps, TransactionResult } from '../core/types'
import { LBSCABI } from './abis/LBSC'
import { CHAINS, invariant } from '../common'
import { SHIVA_ADDRESS } from '../constants'
import { ShivaABI } from '../shiva/abis/Shiva'
import { ApproveStableProps } from './types'

const ERC20ApproveABI = [
  {
    type: 'function',
    name: 'approve',
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

export class OverlaySDKLBSC extends OverlaySDKModule {
  private lbscAddressCache: Address | null = null
  private tokenOrderCache: { isReversed: boolean } | null = null

  constructor(props: OverlaySDKCommonProps) {
    super(props)
  }

  /**
   * Get LBSC address from Shiva contract
   */
  public async getLbscAddress(): Promise<Address> {
    if (this.lbscAddressCache) {
      return this.lbscAddressCache
    }

    const chainId = this.core.chainId
    invariant(chainId in CHAINS, 'Unsupported chainId')

    const shivaAddress = SHIVA_ADDRESS[chainId as CHAINS]
    const shivaContract = getContract({
      address: shivaAddress,
      abi: ShivaABI,
      client: this.core.rpcProvider,
    })

    this.lbscAddressCache = await shivaContract.read.lbsc()
    return this.lbscAddressCache
  }

  public async getLbscContract(): Promise<GetContractReturnType<typeof LBSCABI, PublicClient>> {
    const address = await this.getLbscAddress()
    return getContract({
      address,
      abi: LBSCABI,
      client: this.core.rpcProvider,
    })
  }

  /**
   * Detect token order in the oracle's pool to determine if price inversion is needed
   * @returns true if tokens are reversed (token0=USDT, token1=OVL), false if correct (token0=OVL, token1=USDT)
   */
  private async detectTokenOrder(): Promise<boolean> {
    if (this.tokenOrderCache !== null) {
      return this.tokenOrderCache.isReversed
    }

    const lbscContract = await this.getLbscContract()

    // Get oracle address from LBSC
    const oracleAddress = await lbscContract.read.twapOracle()

    // Get pool address from oracle
    const poolAddress = await this.core.rpcProvider.readContract({
      address: oracleAddress,
      abi: [{
        type: 'function',
        name: 'pool',
        inputs: [],
        outputs: [{ name: '', type: 'address' }],
        stateMutability: 'view',
      }],
      functionName: 'pool',
    })

    // Get token0 from pool
    const token0 = await this.core.rpcProvider.readContract({
      address: poolAddress as Address,
      abi: [{
        type: 'function',
        name: 'token0',
        inputs: [],
        outputs: [{ name: '', type: 'address' }],
        stateMutability: 'view',
      }],
      functionName: 'token0',
    })

    // Get OVL token address from LBSC
    const ovlAddress = await lbscContract.read.ovlToken()

    // If token0 is OVL, order is correct. If token0 is not OVL (it's USDT), order is reversed
    const isReversed = token0.toLowerCase() !== ovlAddress.toLowerCase()

    this.tokenOrderCache = { isReversed }
    return isReversed
  }

  /**
   * Preview how much OVL will be borrowed for a given stable amount
   * @param stableAmount Amount of stable tokens (e.g., USDT) in wei
   * @returns Amount of OVL tokens that will be borrowed
   */
  public async previewBorrow(stableAmount: bigint): Promise<bigint> {
    const contract = await this.getLbscContract()
    return contract.read.previewBorrow([stableAmount])
  }

  /**
   * Get OVL/USDT price from LBSC oracle (used for borrow calculations)
   * Automatically detects and corrects for reversed token order in the pool
   * @returns Price of OVL in stable tokens (USDT per OVL, scaled to 1e18)
   */
  public async getOraclePrice(): Promise<bigint> {
    const contract = await this.getLbscContract()
    const rawPrice = await contract.read.currentPrice()

    // Detect if tokens are in reversed order
    const isReversed = await this.detectTokenOrder()

    if (isReversed) {
      // Pool has token0=USDT, token1=OVL (reversed)
      // Oracle returns OVL per USDT, but we need USDT per OVL
      // Invert: (1e18 * 1e18) / rawPrice
      const WAD = BigInt(10 ** 18)
      return (WAD * WAD) / rawPrice
    }

    // Pool has correct order (token0=OVL, token1=USDT)
    // Oracle returns USDT per OVL as expected
    return rawPrice
  }

  /**
   * Get the stable token address used by LBSC
   * @returns Address of the stable token (e.g., USDT)
   */
  public async getStableTokenAddress(): Promise<Address> {
    const contract = await this.getLbscContract()
    return contract.read.stableToken()
  }

  /**
   * Get available OVL liquidity in LBSC
   * @returns Amount of OVL available for borrowing
   */
  public async getAvailableLiquidity(): Promise<bigint> {
    const contract = await this.getLbscContract()
    const ovlTokenAddress = await contract.read.ovlToken()
    const lbscAddress = await this.getLbscAddress()

    // Read OVL balance of LBSC contract
    const ovlBalance = await this.core.rpcProvider.readContract({
      address: ovlTokenAddress,
      abi: [
        {
          type: 'function',
          name: 'balanceOf',
          inputs: [{ name: 'account', type: 'address' }],
          outputs: [{ name: '', type: 'uint256' }],
          stateMutability: 'view',
        },
      ],
      functionName: 'balanceOf',
      args: [lbscAddress],
    })

    return ovlBalance
  }

  /**
   * Check if LBSC is available on current chain
   * @returns true if LBSC is set in Shiva (address is not zero)
   */
  public async isAvailable(): Promise<boolean> {
    try {
      const address = await this.getLbscAddress()
      return address !== '0x0000000000000000000000000000000000000000'
    } catch {
      return false
    }
  }

  /**
   * Preview borrow with validation checks
   * @param stableAmount Amount of stable tokens (e.g., USDT) in wei
   * @returns Preview data including OVL amount, available liquidity, oracle price, and validation status
   */
  public async getPreviewWithValidation(stableAmount: bigint): Promise<{
    ovlAmount: bigint;
    availableLiquidity: bigint;
    canBorrow: boolean;
    oraclePrice: bigint;
  }> {
    const [ovlAmount, availableLiquidity, oraclePrice] = await Promise.all([
      this.previewBorrow(stableAmount),
      this.getAvailableLiquidity(),
      this.getOraclePrice(),
    ])

    return {
      ovlAmount,
      availableLiquidity,
      canBorrow: ovlAmount <= availableLiquidity,
      oraclePrice,
    }
  }

  /**
   * Approve stable token (USDT) to LBSC for borrowing
   * @param props Account and amount to approve
   * @returns Transaction result
   */
  public async approveStable(props: ApproveStableProps): Promise<TransactionResult> {
    this.core.useWeb3Provider()
    const { account, amount, callback } = props

    const [lbscAddress, stableTokenAddress] = await Promise.all([
      this.getLbscAddress(),
      this.getStableTokenAddress(),
    ])

    const stableContract = getContract({
      address: stableTokenAddress,
      abi: ERC20ApproveABI,
      client: {
        public: this.core.rpcProvider,
        wallet: this.core.web3Provider as WalletClient,
      },
    })

    const txArguments = [lbscAddress, amount] as const

    return this.core.performTransaction({
      account,
      callback,
      getGasLimit: (options) =>
        stableContract.estimateGas.approve(txArguments, options),
      sendTransaction: (options) =>
        stableContract.write.approve(txArguments, options),
    })
  }
}
