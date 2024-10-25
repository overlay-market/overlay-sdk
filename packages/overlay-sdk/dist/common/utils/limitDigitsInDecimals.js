export const limitDigitsInDecimals = (input, sigFig = 4) => {
    if (Number(input) < 1) {
        return Number(input).toLocaleString('en-US', {
            maximumSignificantDigits: sigFig,
            minimumSignificantDigits: sigFig,
        });
    }
    else {
        return Number(input).toLocaleString('en-US', {
            maximumFractionDigits: sigFig,
            minimumFractionDigits: sigFig,
        });
    }
};
//# sourceMappingURL=limitDigitsInDecimals.js.map