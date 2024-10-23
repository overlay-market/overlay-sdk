export declare const enum ERROR_CODE {
    INVALID_ARGUMENT = "INVALID_ARGUMENT",
    NOT_SUPPORTED = "NOT_SUPPORTED",
    PROVIDER_ERROR = "PROVIDER_ERROR",
    READ_ERROR = "READ_ERROR",
    TRANSACTION_ERROR = "TRANSACTION_ERROR",
    UNKNOWN_ERROR = "UNKNOWN_ERROR"
}
export type SDKErrorProps = {
    code?: ERROR_CODE;
    error?: unknown;
    message?: string;
};
export declare class SDKError extends Error {
    static from(error: unknown, code?: ERROR_CODE): SDKError;
    code: ERROR_CODE;
    errorMessage: string | undefined;
    errorDescription: string | undefined;
    constructor({ code, error, message }: SDKErrorProps);
}
export declare function invariant(condition: any, message: string, code?: ERROR_CODE): asserts condition;
export declare function invariantArgument(condition: any, message: string): asserts condition;
export declare function withSDKError<TResult>(func: Promise<TResult>, code?: ERROR_CODE): Promise<TResult>;
//# sourceMappingURL=sdk-error.d.ts.map