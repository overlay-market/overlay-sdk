export const limitDigitsInDecimals = (input: string | number | null | undefined, sigFig: number = 4) => {
  if (Number(input) < 1) {
    return Number(input).toLocaleString('en-US', {
      maximumSignificantDigits: sigFig,
      minimumSignificantDigits: sigFig,
    })
  } else {
    return Number(input).toLocaleString('en-US', {
      maximumFractionDigits: sigFig,
      minimumFractionDigits: sigFig,
    })
  }
}
