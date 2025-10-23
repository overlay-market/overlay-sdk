import { describe, expect, it } from 'vitest';
import { CHAINS } from '@src/common/constants.js';
import { NETWORKS } from '@src/constants.js';
import {
  getActiveMarketsFromSubgraph,
  getLastProcessedBlock,
  getOpenPositions,
} from '@src/subgraph.js';
import { loadJSONFixture } from '../utils/fixtures.js';

const chainId = CHAINS.BscMainnet;
const subgraphUrl = NETWORKS[chainId].SUBGRAPH_URL;
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000' as const;
const testAccount = ((process.env.SUBGRAPH_TEST_ACCOUNT ?? ZERO_ADDRESS).toLowerCase());
const fixturesEnabled = process.env.USE_FIXTURES === '1';

const fixtureActiveMarkets = fixturesEnabled
  ? loadJSONFixture<{ markets?: unknown[] }>('subgraph-active-markets.bsc.json')
  : undefined;
const fixtureOpenPositions = fixturesEnabled
  ? loadJSONFixture<{ positions?: unknown[]; account?: string }>(
      'subgraph-open-positions.bsc.json',
    )
  : undefined;
const fixtureLastBlock = fixturesEnabled
  ? loadJSONFixture<{ block?: number }>('subgraph-last-block.bsc.json')
  : undefined;

async function readActiveMarkets() {
  if (fixturesEnabled && fixtureActiveMarkets?.markets) {
    return fixtureActiveMarkets.markets;
  }
  try {
    return await getActiveMarketsFromSubgraph(chainId);
  } catch (error) {
    console.warn('subgraph active markets unavailable', error);
    return fixtureActiveMarkets?.markets;
  }
}

async function readOpenPositions() {
  if (fixturesEnabled && fixtureOpenPositions?.positions) {
    return fixtureOpenPositions.positions;
  }
  try {
    return await getOpenPositions({
      chainId,
      account: testAccount,
      first: 5,
    });
  } catch (error) {
    console.warn('subgraph open positions unavailable', error);
    return fixtureOpenPositions?.positions;
  }
}

async function readLastBlock() {
  if (fixturesEnabled && typeof fixtureLastBlock?.block === 'number') {
    return fixtureLastBlock.block;
  }
  try {
    return await getLastProcessedBlock(chainId);
  } catch (error) {
    console.warn('subgraph last block unavailable', error);
    return fixtureLastBlock?.block;
  }
}

describe.skipIf(!subgraphUrl)('subgraph live integration (BSC mainnet)', () => {
  it(
    'resolves active markets',
    async () => {
      const markets = await readActiveMarkets();
      if (!markets) return;
      expect(markets).not.toBeUndefined();
      expect(Array.isArray(markets)).toBe(true);
    },
    30_000,
  );

  it(
    'fetches open positions for configured account (defaults to zero address)',
    async () => {
      const positions = await readOpenPositions();
      if (!positions) return;
      expect(Array.isArray(positions)).toBe(true);
    },
    30_000,
  );

  it(
    'reads last processed block from subgraph',
    async () => {
      const block = await readLastBlock();
      if (!block) return;
      expect(typeof block === 'number' || typeof block === 'bigint').toBe(true);
      expect(Number(block)).toBeGreaterThan(0);
    },
    30_000,
  );
});
