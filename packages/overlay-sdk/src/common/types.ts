import { Address } from 'viem'

export type BuildPropsBase = {
  marketAddress: Address
  brokerId?: number
  isLong: boolean
  collateral: bigint
  leverage: bigint
  priceLimit: bigint
}

export type UnwindPropsBase = {
  marketAddress: Address
  brokerId?: number
  positionId: bigint
  fraction: bigint
  priceLimit: bigint
}

export type UnwindMultiplePropsBase = {
  positions: {
    marketAddress: Address
    positionId: number
  }[]
  slippage: number
  unwindPercentage: number
  brokerId?: number
}

export type EmergencyWithdrawPropsBase = {
  marketAddress: Address
  positionId: bigint
  owner: Address
}

export type BuildSinglePropsBase = {
  ovlMarket: Address
  brokerId?: number
  unwindPriceLimit: bigint
  buildPriceLimit: bigint
  collateral: bigint
  leverage: bigint
  previousPositionId: bigint
}
