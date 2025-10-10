import { describe, expect, it } from 'vitest';
import { formatBigNumber } from '@src/common/utils/formatBigNumber.js';
import { formatPriceWithCurrency } from '@src/common/utils/formatPriceWithCurrency.js';
import formatUnixTimestampToDate from '@src/common/utils/formatUnixTimestampToDate.js';

describe('formatBigNumber', () => {
  it('formats bigint values with default precision', () => {
    expect(formatBigNumber(1234567890000000000n)).toBe('1.2346');
  });

  it('honours provided decimals and digits', () => {
    const value = 123456789n * 10n ** 6n;
    expect(formatBigNumber(value, 8, 2)).toBe('1234567.89');
  });

  it('can return a number when requested', () => {
    expect(formatBigNumber(2n * 10n ** 18n, 18, 0, true)).toBe(2);
  });
});

describe('formatPriceWithCurrency', () => {
  it('formats percentage values using percent unit', () => {
    expect(formatPriceWithCurrency('0.1234', '%')).toBe('12.34%');
  });

  it('formats BERA values with suffix', () => {
    expect(formatPriceWithCurrency('1234.567', 'BERA')).toBe('1,234.56 BERA');
  });

  it('prefixes fiat currencies', () => {
    expect(formatPriceWithCurrency(123.456, '$')).toBe('$123.456');
  });
});

describe('formatUnixTimestampToDate', () => {
  it('converts unix seconds to mm/dd/yyyy format', () => {
    expect(formatUnixTimestampToDate(0)).toBe('01/01/1970');
    expect(formatUnixTimestampToDate(1704067200)).toBe('01/01/2024');
  });

  it('accepts string input', () => {
    expect(formatUnixTimestampToDate('1704153600')).toBe('01/02/2024');
  });
});
