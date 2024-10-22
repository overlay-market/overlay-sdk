/* eslint-disable func-style */
export const enum ERROR_CODE {
  INVALID_ARGUMENT = 'INVALID_ARGUMENT',
  NOT_SUPPORTED = 'NOT_SUPPORTED',
  PROVIDER_ERROR = 'PROVIDER_ERROR',
  READ_ERROR = 'READ_ERROR',
  TRANSACTION_ERROR = 'TRANSACTION_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
}

export type SDKErrorProps = {
  code?: ERROR_CODE;
  error?: unknown;
  message?: string;
};

interface ErrorCause {
  reason?: string;
}

export class SDKError extends Error {
  public static from(
    error: unknown,
    code: ERROR_CODE = ERROR_CODE.UNKNOWN_ERROR,
  ): SDKError {
    if (error instanceof SDKError) return error;
    return new SDKError({
      code,
      error,
      message:
        typeof error === 'object' &&
        error &&
        'message' in error &&
        typeof error.message === 'string'
          ? error.message
          : 'something went wrong',
    });
  }

  public code: ERROR_CODE;
  public errorMessage: string | undefined;
  public errorDescription: string | undefined;

  constructor({ code, error = {}, message }: SDKErrorProps) {
    super(message);
    if (error instanceof Error) {
      this.cause = error.cause;
      this.stack = error.stack;

      const cause = error.cause as ErrorCause;
      if (cause && cause.reason) {
        this.errorDescription = getErrorDescription(cause.reason);
      }
    }
    this.code = code ?? ERROR_CODE.UNKNOWN_ERROR;
    this.errorMessage = message;
  }
}
// invariant that throws SDK ERROR
export function invariant(
  condition: any,
  message: string,
  code?: ERROR_CODE,
): asserts condition {
  if (condition) return;

  throw new SDKError({ message, code });
}

// shortcut for argument error
export function invariantArgument(
  condition: any,
  message: string,
): asserts condition {
  if (condition) return;

  throw new SDKError({ code: ERROR_CODE.INVALID_ARGUMENT, message });
}

export async function withSDKError<TResult>(
  func: Promise<TResult>,
  code?: ERROR_CODE,
): Promise<TResult> {
  try {
    return await func;
  } catch (error) {
    throw SDKError.from(error, code);
  }
}

function getErrorDescription(reason: string): string {
  let errorMessage = ''
  switch (reason) {
    case 'OVLV1: shutdown':
      errorMessage = 'Market has been shutdown.'
      break
    case 'OVLV1:lev<min':
      errorMessage = 'Leverage must be at least 1.'
      break
    case 'OVLV1:lev>max':
      errorMessage = 'Leverage is greater than max.'
      break
    case 'OVLV1:fraction>max':
      errorMessage = 'Fraction cannot equal greater than 1.'
      break
    case 'OVLV1:fraction<min':
      errorMessage = 'Fraction cannot equal less than 0.'
      break
    case 'OVLV1:!position':
      errorMessage = 'Position does not currently exist.'
      break
    case 'OVLV1:collateral<min':
      errorMessage = 'Input collateral is less than minimum required collateral.'
      break
    case 'OVLV1:oi>cap':
      errorMessage = 'Attempting to build position that will exceed market oi cap!'
      break
    case 'OVLV1:slippage>max':
      errorMessage = 'User selected price limit is outside the range of the current market price.'
      break
    case 'OVLV1:!data':
      errorMessage = 'Market price volatility has exceeded risk tolerance in the last hour.'
      break
    case 'OVLV1:oi==0':
      errorMessage = 'Underlying price feed price points are too high. Unable to reliably estimate oi.'
      break
    case 'OVLV1:liquidatable':
      errorMessage = 'Cannot build/unwind due to being liquidatable at execution time.'
      break
    case 'OVLV1:!liquidatable':
      errorMessage = 'Position is currently not liquidatable.'
      break
    case 'ERC20: transfer amount exceeds balance':
      errorMessage = 'Not enough balance.'
      break
    default:
      errorMessage = 'Undefined error. Please look into console'
  }
  return errorMessage
}