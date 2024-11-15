import { formatUnits } from 'viem';
export function formatBigNumber(bignumber, decimals = 18, digits = 4, returnNumberType = false) {
    const formatted = formatUnits(bignumber, decimals);
    const formatWithDigits = Number.parseFloat(formatted).toFixed(digits);
    return returnNumberType ? Number(formatWithDigits) : formatWithDigits;
}
//# sourceMappingURL=formatBigNumber.js.map