import { describe, expect, it } from 'vitest';
import { isBigint } from '@src/common/utils/is-bigint.js';
import { limitDigitsInDecimals } from '@src/common/utils/limitDigitsInDecimals.js';
import { paginate } from '@src/common/utils/paginate.js';
import { parseValue } from '@src/common/utils/parse-value.js';
import { toLowercaseKeys } from '@src/common/utils/toLowercaseKeys.js';

describe('isBigint', () => {
  it('detects bigint values', () => {
    expect(isBigint(1n)).toBe(true);
    expect(isBigint(1)).toBe(false);
    expect(isBigint('1')).toBe(false);
  });
});

describe('limitDigitsInDecimals', () => {
  it('formats numbers less than 1 using significant digits', () => {
    expect(limitDigitsInDecimals(0.123456)).toBe('0.1235');
  });

  it('formats numbers greater than or equal to 1 using fixed fraction digits', () => {
    expect(limitDigitsInDecimals(10)).toBe('10.0000');
  });
});

describe('paginate', () => {
  it('returns paginated data slices', () => {
    const data = Array.from({ length: 10 }, (_, i) => i + 1);
    const page = paginate(data, 2, 3);
    expect(page).toEqual({ data: [4, 5, 6], total: 10 });
  });
});

describe('parseValue', () => {
  it('returns bigint when provided bigint', () => {
    expect(parseValue(1n)).toBe(1n);
  });

  it('parses decimal strings into wei', () => {
    expect(parseValue('123')).toBe(123000000000000000000n);
  });
});

describe('toLowercaseKeys', () => {
  it('creates a new map with lowercase keys', () => {
    const input = new Map([
      ['Foo', 1],
      ['Bar', 2],
    ]);
    const output = toLowercaseKeys(input);

    expect(output).not.toBe(input);
    expect(output.get('foo')).toBe(1);
    expect(output.get('bar')).toBe(2);
  });
});
