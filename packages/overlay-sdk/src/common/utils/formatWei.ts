import { formatUnits, parseUnits } from 'viem'
import { invariant } from './sdk-error'

export function formatWeiToParsedNumber(wei: bigint | string | undefined, decimals = 18, round?: number) {
  let parsedWei

  if (wei) {
    parsedWei = formatUnits(BigInt(wei), 18)
    return Number(Number(Number(parsedWei).toFixed(decimals)).toFixed(round))
  } else {
    return undefined
  }
}

export function formatFundingRateToDaily(wei: bigint | string | undefined, decimals: number, round: number) {
  let roundedDailyPercentage

  if (wei) {
    let rate = formatWeiToParsedNumber(wei, decimals, 10)
    let dailyRate = rate && rate * 86400
    let dailyPercentage = dailyRate && dailyRate * 100
    roundedDailyPercentage = dailyPercentage?.toFixed(round)
  }

  return roundedDailyPercentage
}

export function formatFundingRateToAnnual(wei: bigint | string | undefined, decimals: number, round: number) {
  let roundedAnnualPercentage

  if (wei) {
    let rate = formatWeiToParsedNumber(wei, decimals, 10)
    let dailyRate = rate && rate * 86400
    let annualPercentage = dailyRate && dailyRate * 100 * 365
    roundedAnnualPercentage = annualPercentage?.toFixed(round)
  }

  return roundedAnnualPercentage
}

export function toWei(input: string | number, decimals: number = 18): bigint {
  invariant(typeof input === "string" || typeof input === "number", "Input type not supported");

  const value = input.toString();
  const numberValue = Number(value);

  invariant(!isNaN(numberValue), "Invalid number format");
  
  return parseUnits(value, decimals);
}