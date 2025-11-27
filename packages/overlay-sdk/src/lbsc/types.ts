import type { Address } from "viem"
import type { TransactionCallback } from "../core/types"

export type ApproveStableProps = {
  account: Address
  amount: bigint
  callback?: TransactionCallback
}
