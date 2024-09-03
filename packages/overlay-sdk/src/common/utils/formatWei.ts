import {utils, BigNumberish} from 'ethers'

export function formatWeiToParsedNumber(wei: BigNumberish | string | undefined, decimals: number | undefined, round?: number) {
  let parsedWei

  if (wei) {
    parsedWei = utils.formatUnits(wei, 18)
    return Number(Number(Number(parsedWei).toFixed(decimals)).toFixed(round))
  } else {
    return undefined
  }
}

export function formatFundingRateToDaily(wei: BigNumberish | string | undefined, decimals: number, round: number) {
  let roundedDailyPercentage

  if (wei) {
    let rate = formatWeiToParsedNumber(wei, decimals, 10)
    let dailyRate = rate && rate * 86400
    let dailyPercentage = dailyRate && dailyRate * 100
    roundedDailyPercentage = dailyPercentage?.toFixed(round)
  }

  return roundedDailyPercentage
}

export function formatFundingRateToAnnual(wei: BigNumberish | string | undefined, decimals: number, round: number) {
  let roundedAnnualPercentage

  if (wei) {
    let rate = formatWeiToParsedNumber(wei, decimals, 10)
    let dailyRate = rate && rate * 86400
    let annualPercentage = dailyRate && dailyRate * 100 * 365
    roundedAnnualPercentage = annualPercentage?.toFixed(round)
  }

  return roundedAnnualPercentage
}