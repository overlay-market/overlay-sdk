import type { Address } from "viem"
import type { TransactionCallback } from "../core/types"

export type LoanInfo = {
  borrower: Address
  collateral: bigint
  debt: bigint
  createdAt: bigint
  settled: boolean
}

export type LBSCStats = {
  totalActiveCollateral: bigint
  totalOutstandingDebt: bigint
  nextLoanId: bigint
  currentPrice: bigint
}

export type ApproveStableProps = {
  account: Address
  amount: bigint
  callback?: TransactionCallback
}
