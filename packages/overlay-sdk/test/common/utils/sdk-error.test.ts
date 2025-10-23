import { describe, expect, it } from 'vitest';
import {
  ERROR_CODE,
  SDKError,
  invariant,
  invariantArgument,
  withSDKError,
} from '@src/common/utils/sdk-error.js';

describe('SDKError', () => {
  it('wraps generic errors and preserves message', () => {
    const error = SDKError.from(new Error('boom'), ERROR_CODE.PROVIDER_ERROR);
    expect(error).toBeInstanceOf(SDKError);
    expect(error.code).toBe(ERROR_CODE.PROVIDER_ERROR);
    expect(error.errorMessage).toBe('boom');
  });

  it('keeps existing SDKError instances untouched', () => {
    const existing = new SDKError({ message: 'test' });
    expect(SDKError.from(existing)).toBe(existing);
  });

  it('maps known error reason to description', () => {
    const base = new Error('boom', {
      cause: { reason: 'OVLV1:lev<min' },
    });
    const error = SDKError.from(base);
    expect(error.errorDescription).toBe('Leverage must be at least 1.');
  });
});

describe('invariant helpers', () => {
  it('does not throw when condition is true', () => {
    expect(() => invariant(true, 'ok')).not.toThrow();
  });

  it('throws SDKError when invariant fails', () => {
    try {
      invariant(false, 'fail', ERROR_CODE.NOT_SUPPORTED);
    } catch (error) {
      expect(error).toBeInstanceOf(SDKError);
      expect((error as SDKError).code).toBe(ERROR_CODE.NOT_SUPPORTED);
      expect((error as SDKError).errorMessage).toBe('fail');
      return;
    }
    throw new Error('Expected invariant to throw');
  });

  it('throws SDKError with invalid argument code', () => {
    try {
      invariantArgument(false, 'bad arg');
    } catch (error) {
      expect(error).toBeInstanceOf(SDKError);
      expect((error as SDKError).code).toBe(ERROR_CODE.INVALID_ARGUMENT);
      expect((error as SDKError).errorMessage).toBe('bad arg');
    }
  });
});

describe('withSDKError', () => {
  it('resolves promise as-is', async () => {
    await expect(withSDKError(Promise.resolve('value'))).resolves.toBe('value');
  });

  it('wraps rejected promise into SDKError', async () => {
    const promise = Promise.reject(new Error('boom'));
    await expect(withSDKError(promise, ERROR_CODE.READ_ERROR)).rejects.toMatchObject({
      code: ERROR_CODE.READ_ERROR,
      errorMessage: 'boom',
    });
  });
});
