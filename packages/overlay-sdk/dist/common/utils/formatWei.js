import { formatUnits, parseUnits } from 'viem';
import { invariant } from './sdk-error';
export function formatWeiToParsedNumber(wei, decimals = 18, round) {
    let parsedWei;
    if (wei) {
        parsedWei = formatUnits(BigInt(wei), 18);
        return Number(Number(Number(parsedWei).toFixed(decimals)).toFixed(round));
    }
    else {
        return undefined;
    }
}
export function formatFundingRateToDaily(wei, decimals, round) {
    let roundedDailyPercentage;
    if (wei) {
        let rate = formatWeiToParsedNumber(wei, decimals, 10);
        let dailyRate = rate && rate * 86400;
        let dailyPercentage = dailyRate && dailyRate * 100;
        roundedDailyPercentage = dailyPercentage?.toFixed(round);
    }
    return roundedDailyPercentage;
}
export function formatFundingRateToAnnual(wei, decimals, round) {
    let roundedAnnualPercentage;
    if (wei) {
        let rate = formatWeiToParsedNumber(wei, decimals, 10);
        let dailyRate = rate && rate * 86400;
        let annualPercentage = dailyRate && dailyRate * 100 * 365;
        roundedAnnualPercentage = annualPercentage?.toFixed(round);
    }
    return roundedAnnualPercentage;
}
export function toWei(input, decimals = 18) {
    invariant(typeof input === "string" || typeof input === "number", "Input type not supported");
    const value = input.toString();
    const numberValue = Number(value);
    invariant(!isNaN(numberValue), "Invalid number format");
    return parseUnits(value, decimals);
}
//# sourceMappingURL=formatWei.js.map