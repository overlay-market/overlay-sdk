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
import { LoanInfo, LBSCStats, ApproveStableProps } from './types'

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
   * Preview how much OVL will be borrowed for a given stable amount
   * @param stableAmount Amount of stable tokens (e.g., USDT) in wei
   * @returns Amount of OVL tokens that will be borrowed
   */
  public async previewBorrow(stableAmount: bigint): Promise<bigint> {
    const contract = await this.getLbscContract()
    return contract.read.previewBorrow([stableAmount])
  }

  /**
   * Get current OVL price from LBSC oracle (in stable terms)
   * @returns Price of OVL in stable tokens (scaled to 1e18)
   */
  public async currentPrice(): Promise<bigint> {
    const contract = await this.getLbscContract()
    return contract.read.currentPrice()
  }

  /**
   * Get loan information by loan ID
   * @param loanId The loan identifier
   * @returns Loan details including borrower, collateral, debt, createdAt, and settled status
   */
  public async getLoanInfo(loanId: bigint): Promise<LoanInfo> {
    const contract = await this.getLbscContract()
    const [borrower, collateral, debt, createdAt, settled] = await contract.read.loans([loanId])

    return {
      borrower,
      collateral,
      debt,
      createdAt: BigInt(createdAt),
      settled,
    }
  }

  /**
   * Get LBSC statistics
   * @returns Total active collateral, outstanding debt, next loan ID, and current price
   */
  public async getStats(): Promise<LBSCStats> {
    const contract = await this.getLbscContract()

    const [totalActiveCollateral, totalOutstandingDebt, nextLoanId, currentPrice] = await Promise.all([
      contract.read.totalActiveCollateral(),
      contract.read.totalOutstandingDebt(),
      contract.read.nextLoanId(),
      contract.read.currentPrice(),
    ])

    return {
      totalActiveCollateral,
      totalOutstandingDebt,
      nextLoanId,
      currentPrice,
    }
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
