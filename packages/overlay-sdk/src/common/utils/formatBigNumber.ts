import { formatUnits } from 'viem'

export function formatBigNumber(
  bignumber: bigint,
  decimals: number = 18,
  digits: number = 4,
  returnNumberType: boolean = false,
) {
  const formatted = formatUnits(bignumber, decimals)
  const formatWithDigits = Number.parseFloat(formatted).toFixed(digits)
  return returnNumberType ? Number(formatWithDigits) : formatWithDigits
}