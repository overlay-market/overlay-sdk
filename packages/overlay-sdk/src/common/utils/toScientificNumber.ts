import BigNumber from 'bignumber.js'

const BIG_ZERO = new BigNumber(0)
const BIG_ONE = new BigNumber(1)

const TRILLION = BIG_ONE.shiftedBy(12)
const BILLION = BIG_ONE.shiftedBy(9)
const MILLION = BIG_ONE.shiftedBy(6)

const parseBigNumberOrZero = (input: string | BigNumber | bigint | number | null) => {
  if (!input) return BIG_ZERO

  // Remove any commas
  let inputStr = String(input).replace(/,/g, '')

  const result = BigNumber.isBigNumber(inputStr) ? new BigNumber(inputStr) : new BigNumber(inputStr)

  if (!result.isFinite() || result.isNaN()) return BIG_ZERO

  return result
}

const toPrecisionTrim = (value: BigNumber, significantFigures: number) => {
  const isNegative = value.isNegative()
  const absValue = value.abs()

  let formattedValue = absValue.toPrecision(significantFigures, 1).replace(/(\.[0-9]*?)0+$/, '$1')

  // Add back commas when necessary
  const parts = formattedValue.split('.')
  parts[0] = new BigNumber(parts[0]).toFormat()
  formattedValue = parts.join('.')

  formattedValue = formattedValue.endsWith('.') ? formattedValue.slice(0, -1) : formattedValue
  return isNegative ? `-${formattedValue}` : formattedValue
}

export const toScientificNumber = (input: string | BigNumber | bigint | number | null | undefined, significantFigures?: number) => {
  const value = parseBigNumberOrZero(input || 0)

  // Check if the value is zero
  if (value.isZero()) {
    return value.toFixed()
  }

  // Check if value less than 0.0001 for exponential
  if (value.abs().lt(0.0001)) {
    const sign = value.isNegative() ? '-' : ''
    let exponent = 0
    let absValue = value.abs()

    // Multiply till base is > 100
    while (absValue.lt(100)) {
      absValue = absValue.times(10)
      exponent--
    }

    return `${sign}${toPrecisionTrim(absValue, significantFigures ?? 3)}e-${-exponent}`
  }

  // Check if the value is less than 1 million
  if (value.abs().lt(MILLION)) {
    return toPrecisionTrim(value, significantFigures ?? 6)
  }

  // Check if the value is less than 1 billion
  if (value.abs().lt(BILLION)) {
    return `${toPrecisionTrim(value.div(MILLION), significantFigures ?? 6)} M`
  }

  // Check if the value is less than 1 trillion
  if (value.abs().lt(TRILLION)) {
    return `${toPrecisionTrim(value.div(BILLION), significantFigures ?? 6)} B`
  }

  // Value is greater than or equal to 1 trillion
  return `${toPrecisionTrim(value.div(TRILLION), significantFigures ?? 6)} T`
}

export const toPercentUnit = (input: string | number | null | undefined) => {
  const ONE_HUNDRED = 100

  if (Number.isNaN(Number(input))) return 0

  return (Number(input) * ONE_HUNDRED).toFixed(2)
}
