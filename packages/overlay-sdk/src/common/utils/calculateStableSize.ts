type LoanAmounts = {
  ovlAmount: string;
  stableAmount: string;
};

/**
 * Converts an OVL-denominated value to its stable equivalent using the loan ratio.
 * Returns undefined when inputs are missing or invalid.
 */
export function calculateStableSize(
  ovlValue: string | number | undefined,
  loan: LoanAmounts,
): string | undefined {
  if (
    ovlValue === undefined ||
    ovlValue === "-" ||
    !loan?.ovlAmount ||
    !loan?.stableAmount
  ) {
    return undefined;
  }

  const ovlNum = typeof ovlValue === "number" ? ovlValue : Number.parseFloat(ovlValue);
  if (!Number.isFinite(ovlNum)) return undefined;
  if (ovlNum === 0) return "0";

  const absOvlNum = ovlNum < 0 ? -ovlNum : ovlNum;
  const loanOvlAmount = BigInt(loan.ovlAmount);
  if (loanOvlAmount === 0n) {
    console.warn("loan.ovlAmount is 0, cannot calculate stable value");
    return undefined;
  }

  const stableAmount = BigInt(loan.stableAmount);
  const stableValueWei = (BigInt(Math.floor(absOvlNum * 1e18)) * stableAmount) / loanOvlAmount;
  const stableValueNum = Number(stableValueWei) / 1e18;

  return stableValueNum < 1 ? stableValueNum.toFixed(6) : stableValueNum.toFixed(2);
}
