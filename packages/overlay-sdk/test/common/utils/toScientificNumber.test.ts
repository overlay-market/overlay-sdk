import { describe, expect, it } from 'vitest';
import { toPercentUnit, toScientificNumber } from '@src/common/utils/toScientificNumber.js';

describe('toScientificNumber', () => {
  it('returns zero for zero input', () => {
    expect(toScientificNumber(0)).toBe('0');
  });

  it('formats very small numbers into scientific notation', () => {
    expect(toScientificNumber(0.0000000123)).toBe('123e-10');
  });

  it('formats medium numbers with precision', () => {
    expect(toScientificNumber(1234.5678)).toBe('1,234.56');
  });

  it('formats millions with suffix', () => {
    expect(toScientificNumber(12_345_678)).toBe('12.3456 M');
  });

  it('formats billions with suffix', () => {
    expect(toScientificNumber(12_345_678_000)).toBe('12.3456 B');
  });

  it('formats trillions with suffix', () => {
    expect(toScientificNumber(12_345_678_000_000)).toBe('12.3456 T');
  });

  it('respects custom significant figures', () => {
    expect(toScientificNumber(1234.5678, 4)).toBe('1,234');
  });
});

describe('toPercentUnit', () => {
  it('converts decimal to percent string', () => {
    expect(toPercentUnit('0.1234')).toBe('12.34');
  });

  it('handles invalid numbers', () => {
    expect(toPercentUnit('abc')).toBe(0);
  });
});
