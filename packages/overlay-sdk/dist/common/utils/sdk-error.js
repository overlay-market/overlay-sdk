export class SDKError extends Error {
    static from(error, code = "UNKNOWN_ERROR" /* ERROR_CODE.UNKNOWN_ERROR */) {
        if (error instanceof SDKError)
            return error;
        return new SDKError({
            code,
            error,
            message: typeof error === 'object' &&
                error &&
                'message' in error &&
                typeof error.message === 'string'
                ? error.message
                : 'something went wrong',
        });
    }
    constructor({ code, error = {}, message }) {
        super(message);
        if (error instanceof Error) {
            this.cause = error.cause;
            this.stack = error.stack;
            const cause = error.cause;
            if (cause && cause.reason) {
                this.errorDescription = getErrorDescription(cause.reason);
            }
        }
        this.code = code ?? "UNKNOWN_ERROR" /* ERROR_CODE.UNKNOWN_ERROR */;
        this.errorMessage = message;
    }
}
// invariant that throws SDK ERROR
export function invariant(condition, message, code) {
    if (condition)
        return;
    throw new SDKError({ message, code });
}
// shortcut for argument error
export function invariantArgument(condition, message) {
    if (condition)
        return;
    throw new SDKError({ code: "INVALID_ARGUMENT" /* ERROR_CODE.INVALID_ARGUMENT */, message });
}
export async function withSDKError(func, code) {
    try {
        return await func;
    }
    catch (error) {
        throw SDKError.from(error, code);
    }
}
function getErrorDescription(reason) {
    let errorMessage = '';
    switch (reason) {
        case 'OVLV1: shutdown':
            errorMessage = 'Market has been shutdown.';
            break;
        case 'OVLV1:lev<min':
            errorMessage = 'Leverage must be at least 1.';
            break;
        case 'OVLV1:lev>max':
            errorMessage = 'Leverage is greater than max.';
            break;
        case 'OVLV1:fraction>max':
            errorMessage = 'Fraction cannot equal greater than 1.';
            break;
        case 'OVLV1:fraction<min':
            errorMessage = 'Fraction cannot equal less than 0.';
            break;
        case 'OVLV1:!position':
            errorMessage = 'Position does not currently exist.';
            break;
        case 'OVLV1:collateral<min':
            errorMessage = 'Input collateral is less than minimum required collateral.';
            break;
        case 'OVLV1:oi>cap':
            errorMessage = 'Attempting to build position that will exceed market oi cap!';
            break;
        case 'OVLV1:slippage>max':
            errorMessage = 'User selected price limit is outside the range of the current market price.';
            break;
        case 'OVLV1:!data':
            errorMessage = 'Market price volatility has exceeded risk tolerance in the last hour.';
            break;
        case 'OVLV1:oi==0':
            errorMessage = 'Underlying price feed price points are too high. Unable to reliably estimate oi.';
            break;
        case 'OVLV1:liquidatable':
            errorMessage = 'Cannot build/unwind due to being liquidatable at execution time.';
            break;
        case 'OVLV1:!liquidatable':
            errorMessage = 'Position is currently not liquidatable.';
            break;
        case 'ERC20: transfer amount exceeds balance':
            errorMessage = 'Not enough balance.';
            break;
        default:
            errorMessage = 'Undefined error. Please look into console';
    }
    return errorMessage;
}
//# sourceMappingURL=sdk-error.js.map