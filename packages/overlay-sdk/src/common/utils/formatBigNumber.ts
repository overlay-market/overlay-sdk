import {utils, BigNumberish} from 'ethers'

export function formatBigNumber(
  bignumber: BigNumberish,
  decimals: number = 18,
  digits: number = 4,
  returnNumberType: boolean = false,
): number | string | undefined {
  if (bignumber !== undefined) {
    const formatted: string = utils.formatUnits(bignumber, decimals)
    const formatWithDigits: string = Number.parseFloat(formatted).toFixed(digits)
    return returnNumberType ? Number(formatWithDigits) : formatWithDigits
  } else {
    return undefined
  }
}