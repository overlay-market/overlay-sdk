import { formatUnits } from 'viem'

export function formatBigNumber(
  bignumber: bigint,
  decimals: number = 18,
  digits: number = 4,
  returnNumberType: boolean = false,
): number | string | undefined {
  if (bignumber !== undefined) {
    const formatted: string = formatUnits(bignumber, decimals)
    const formatWithDigits: string = Number.parseFloat(formatted).toFixed(digits)
    return returnNumberType ? Number(formatWithDigits) : formatWithDigits
  } else {
    return undefined
  }
}