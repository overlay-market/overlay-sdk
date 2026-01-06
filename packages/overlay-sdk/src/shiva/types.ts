import { Address, JsonRpcAccount } from 'viem'
import { AccountValue, CommonTransactionProps } from '../core/types'
import {
  BuildPropsBase,
  BuildSinglePropsBase,
  BuildStablePropsBase,
  EmergencyWithdrawPropsBase,
  UnwindPropsBase,
} from '../common/types'

export type ShivaApproveProps = CommonTransactionProps & {
  amount: bigint
}

export type ShivaApproveInnerProps = ShivaApproveProps & {
  account: JsonRpcAccount
}

export type ShivaCancelNonceProps = CommonTransactionProps & {
  nonce: bigint
}

export type ShivaCancelNonceInnerProps = ShivaCancelNonceProps & {
  account: JsonRpcAccount
}
// Build Single

export type ShivaBuildSingleProps = CommonTransactionProps & {
  params: BuildSinglePropsBase
}

export type ShivaBuildSingleInnerProps = ShivaBuildSingleProps & {
  account: JsonRpcAccount
}

// Build Stable (with LBSC)

export type ShivaBuildStableProps = CommonTransactionProps & {
  params: BuildStablePropsBase
}

export type ShivaBuildStableInnerProps = ShivaBuildStableProps & {
  account: JsonRpcAccount
}

// Build On Behalf Of

export type ShivaBuildOnBehalfOfProps = CommonTransactionProps & {
  params: BuildPropsBase
  onBehalfOf: {
    owner: Address
    deadline: number
    nonce: bigint
    signature: `0x${string}`
  }
}

export type ShivaBuildOnBehalfOfInnerProps = ShivaBuildOnBehalfOfProps & {
  account: JsonRpcAccount
}

// Unwind On Behalf Of

export type ShivaUnwindOnBehalfOfProps = CommonTransactionProps & {
  params: UnwindPropsBase
  onBehalfOf: {
    owner: Address
    deadline: number
    nonce: bigint
    signature: `0x${string}`
  }
}

export type ShivaUnwindOnBehalfOfInnerProps = ShivaUnwindOnBehalfOfProps & {
  account: JsonRpcAccount
}

// Unwind Stable

type ShivaUnwindStableWithMinOut = {
  minOut: bigint
  slippage?: never
}

type ShivaUnwindStableWithSlippage = {
  minOut?: never
  slippage: number
}

export type ShivaUnwindStableProps = CommonTransactionProps & UnwindPropsBase & {
  swapData?: `0x${string}`
} & (ShivaUnwindStableWithMinOut | ShivaUnwindStableWithSlippage)

export type ShivaUnwindStableInnerProps = CommonTransactionProps & UnwindPropsBase & {
  minOut: bigint
  slippage?: number
  swapData?: `0x${string}`
  account: JsonRpcAccount
}

// Build Single On Behalf Of

export type ShivaBuildSingleOnBehalfOfProps = CommonTransactionProps & {
  params: BuildSinglePropsBase
  onBehalfOf: {
    owner: Address
    deadline: number
    nonce: bigint
    signature: `0x${string}`
  }
}

export type ShivaBuildSingleOnBehalfOfInnerProps = ShivaBuildSingleOnBehalfOfProps & {
  account: JsonRpcAccount
}

export type SignBuildOnBehalfOfProps = {
  ovlMarket: Address
  deadline: number
  collateral: bigint
  leverage: bigint
  isLong: boolean
  priceLimit: bigint
  brokerId?: number
  nonce?: bigint
  account?: AccountValue
}

export type SignUnwindOnBehalfOfProps = {
  ovlMarket: Address
  deadline: number
  positionId: bigint
  fraction: bigint
  priceLimit: bigint
  brokerId?: number
  nonce?: bigint
  account?: AccountValue
}

export type SignBuildSingleOnBehalfOfProps = {
  ovlMarket: Address
  deadline: number
  collateral: bigint
  leverage: bigint
  previousPositionId: bigint
  unwindPriceLimit: bigint
  buildPriceLimit: bigint
  brokerId?: number
  nonce?: bigint
  account?: AccountValue
}

export type BuildOnBehalfOfSignature = SignBuildOnBehalfOfProps & {
  signature: `0x${string}`
  owner: Address
  nonce: bigint
}

export type UnwindOnBehalfOfSignature = SignUnwindOnBehalfOfProps & {
  signature: `0x${string}`
  owner: Address
  nonce: bigint
}

export type BuildSingleOnBehalfOfSignature = SignBuildSingleOnBehalfOfProps & {
  signature: `0x${string}`
  owner: Address
  nonce: bigint
}

export const BUILD_TYPES = {
  EIP712Domain: [
    { name: 'name', type: 'string' },
    { name: 'version', type: 'string' },
    {
      name: 'chainId',
      type: 'uint256',
    },
    {
      name: 'verifyingContract',
      type: 'address',
    },
  ],
  BuildOnBehalfOfParams: [
    { name: 'ovlMarket', type: 'address' },
    { name: 'deadline', type: 'uint48' },
    { name: 'collateral', type: 'uint256' },
    { name: 'leverage', type: 'uint256' },
    { name: 'isLong', type: 'bool' },
    { name: 'priceLimit', type: 'uint256' },
    { name: 'nonce', type: 'uint256' },
    { name: 'brokerId', type: 'uint32' },
  ],
} as const

export const UNWIND_TYPES = {
  EIP712Domain: [
    { name: 'name', type: 'string' },
    { name: 'version', type: 'string' },
    {
      name: 'chainId',
      type: 'uint256',
    },
    {
      name: 'verifyingContract',
      type: 'address',
    },
  ],
  UnwindOnBehalfOfParams: [
    { name: 'ovlMarket', type: 'address' },
    { name: 'deadline', type: 'uint48' },
    { name: 'positionId', type: 'uint256' },
    { name: 'fraction', type: 'uint256' },
    { name: 'priceLimit', type: 'uint256' },
    { name: 'nonce', type: 'uint256' },
    { name: 'brokerId', type: 'uint32' },
  ],
} as const

export const BUILD_SINGLE_TYPES = {
  EIP712Domain: [
    { name: 'name', type: 'string' },
    { name: 'version', type: 'string' },
    {
      name: 'chainId',
      type: 'uint256',
    },
    {
      name: 'verifyingContract',
      type: 'address',
    },
  ],
  BuildSingleOnBehalfOfParams: [
    { name: 'ovlMarket', type: 'address' },
    { name: 'deadline', type: 'uint48' },
    { name: 'collateral', type: 'uint256' },
    { name: 'leverage', type: 'uint256' },
    { name: 'previousPositionId', type: 'uint256' },
    { name: 'unwindPriceLimit', type: 'uint256' },
    { name: 'buildPriceLimit', type: 'uint256' },
    { name: 'nonce', type: 'uint256' },
    { name: 'brokerId', type: 'uint32' },
  ],
} as const
