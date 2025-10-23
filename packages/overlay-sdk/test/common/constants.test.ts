import { describe, expect, it } from 'vitest';
import { CHAINS, NOOP, SUPPORTED_CHAINS, VIEM_CHAINS } from '@src/common/constants.js';

describe('constants', () => {
  it('includes BSC networks in supported chains', () => {
    expect(SUPPORTED_CHAINS).toContain(CHAINS.BscMainnet);
    expect(SUPPORTED_CHAINS).toContain(CHAINS.BscTestnet);
  });

  it('exposes viem chain configuration for BSC', () => {
    expect(VIEM_CHAINS[CHAINS.BscMainnet]).toBeDefined();
    expect(VIEM_CHAINS[CHAINS.BscTestnet]).toBeDefined();
  });

  it('NOOP does nothing and returns undefined', () => {
    expect(NOOP()).toBeUndefined();
  });
});
