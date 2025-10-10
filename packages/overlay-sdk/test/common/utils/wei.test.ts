import { describe, it, expect } from 'vitest';
import {
  formatFundingRateToAnnual,
  formatFundingRateToDaily,
  formatWeiToParsedNumber,
  toWei,
} from '@src/common/utils/formatWei.js';

/**
 * Wei conversion and funding rate utilities
 *
 * These utilities handle conversions between wei (10^18 smallest units) and human-readable
 * decimal numbers, as well as funding rate calculations for leveraged positions.
 */
describe('formatWei utilities', () => {
  describe('formatWeiToParsedNumber', () => {
    it('converts 1 wei (10^18) to decimal 1.0', () => {
      // 1 OVL = 1 * 10^18 wei
      expect(formatWeiToParsedNumber(10n ** 18n)).toBeCloseTo(1);
    });

    it('converts 2 wei (2*10^18) to decimal 2.0 with 4 decimal places', () => {
      const twoOvlInWei = '2000000000000000000';
      expect(formatWeiToParsedNumber(twoOvlInWei, 18, 4)).toBeCloseTo(2);
    });

    it('returns undefined for undefined input (graceful handling)', () => {
      expect(formatWeiToParsedNumber(undefined)).toBeUndefined();
    });
  });

  describe('formatFundingRateToDaily', () => {
    it('converts per-second rate to daily percentage (0.001/sec → 8640%/day)', () => {
      // Funding rate is stored per-second in wei
      // 0.001 per second = 1_000_000_000_000_000 in wei (18 decimals)
      const perSecond = 1_000_000_000_000_000n;

      // Daily rate = per-second rate * seconds per day
      // 0.001 * 86400 = 8640% per day
      const result = formatFundingRateToDaily(perSecond, 18, 4);

      expect(result).toBe('8640.0000');
    });
  });

  describe('formatFundingRateToAnnual', () => {
    it('converts per-second rate to annual percentage (0.001/sec → 3,153,600%/year)', () => {
      // Annual rate = per-second rate * seconds per year
      // 0.001 * 31536000 = 3,153,600% per year
      const perSecond = 1_000_000_000_000_000n;
      const result = formatFundingRateToAnnual(perSecond, 18, 4);

      expect(result).toBe('3153600.0000');
    });
  });

  describe('toWei', () => {
    it('converts integer 1 to 10^18 wei', () => {
      expect(toWei(1)).toBe(10n ** 18n);
    });

    it('converts decimal string "0.5" to 5*10^17 wei', () => {
      // 0.5 OVL = 500000000000000000 wei (half of 10^18)
      expect(toWei('0.5')).toBe(500000000000000000n);
    });

    it('throws descriptive error for unsupported input types', () => {
      expect(() => toWei({} as any)).toThrow('Input type not supported');
    });

    it('throws descriptive error for invalid number strings', () => {
      expect(() => toWei('foo')).toThrow('Invalid number format');
    });
  });
});
