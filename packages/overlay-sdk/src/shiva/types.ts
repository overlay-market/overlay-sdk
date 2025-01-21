import { Address, JsonRpcAccount } from 'viem'
import { CommonTransactionProps } from '../core/types'

// Build

export type ShivaBuildProps = CommonTransactionProps & {
  params: {
    ovMarket: Address
    brokerId: number
    isLong: boolean
    collateral: bigint
    leverage: bigint
    priceLimit: bigint
  }
}

export type ShivaBuildInnerProps = ShivaBuildProps & {
  account: JsonRpcAccount
}

export type ShivaBuildResult = {
  positionId: bigint
}

// Unwind

export type ShivaUnwindProps = CommonTransactionProps & {
  params: {
    ovMarket: Address
    brokerId: number
    positionId: bigint
    fraction: bigint
    priceLimit: bigint
  }
}

export type ShivaUnwindInnerProps = ShivaUnwindProps & {
  account: JsonRpcAccount
}

// Build Single

export type ShivaBuildSingleProps = CommonTransactionProps & {
  params: {
    ovMarket: Address
    brokerId: number
    unwindPriceLimit: bigint
    buildPriceLimit: bigint
    collateral: bigint
    leverage: bigint
    previousPositionId: bigint
  }
}

export type ShivaBuildSingleInnerProps = ShivaBuildSingleProps & {
  account: JsonRpcAccount
}

// Emergency Withdraw

export type ShivaEmergencyWithdrawProps = CommonTransactionProps & {
  market: Address
  positionId: bigint
  owner: Address
}

export type ShivaEmergencyWithdrawInnerProps = ShivaEmergencyWithdrawProps & {
  account: JsonRpcAccount
}

// Build On Behalf Of

export type ShivaBuildOnBehalfOfProps = CommonTransactionProps & {
  params: ShivaBuildProps['params']
  onBehalfOf: {
    owner: Address
    deadline: number
    signature: `0x${string}`
  }
}

export type ShivaBuildOnBehalfOfInnerProps = ShivaBuildOnBehalfOfProps & {
  account: JsonRpcAccount
}

// Unwind On Behalf Of

export type ShivaUnwindOnBehalfOfProps = CommonTransactionProps & {
  params: ShivaUnwindProps['params']
  onBehalfOf: {
    owner: Address
    deadline: number
    signature: `0x${string}`
  }
}

export type ShivaUnwindOnBehalfOfInnerProps = ShivaUnwindOnBehalfOfProps & {
  account: JsonRpcAccount
}

// Build Single On Behalf Of

export type ShivaBuildSingleOnBehalfOfProps = CommonTransactionProps & {
  params: ShivaBuildSingleProps['params']
  onBehalfOf: {
    owner: Address
    deadline: number
    signature: `0x${string}`
  }
}

export type ShivaBuildSingleOnBehalfOfInnerProps = ShivaBuildSingleOnBehalfOfProps & {
  account: JsonRpcAccount
}
