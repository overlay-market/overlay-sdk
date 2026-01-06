import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import { zeroAddress } from 'viem';
import {
  getActiveMarketsFromSubgraph,
  getLastProcessedBlock,
  getLiquidatedPositions,
  getNumberOfPositions,
  getOpenPositions,
  getPositionDetails,
  getTotalSupplyDayHistory,
  getUnwindPositions,
} from '@src/subgraph.js';
import { CHAINS } from '@src/common/constants.js';
import { SDKError } from '@src/common/utils/sdk-error.js';

vi.mock('graphql-request', () => ({
  request: vi.fn(),
  gql: (strings: TemplateStringsArray, ...values: unknown[]) =>
    strings.reduce(
      (acc, chunk, index) => acc + chunk + (index < values.length ? String(values[index]) : ''),
      '',
    ),
}));

vi.mock('@src/constants.js', async () => {
  const actual = await vi.importActual('@src/constants.js');
  return {
    ...actual,
    NETWORKS: {
      ...((actual as any).NETWORKS),
      97: {
        ...((actual as any).NETWORKS[97]),
        hasShiva: false,
      },
    },
  };
});

const { request } = await import('graphql-request');
const mockedRequest = request as unknown as ReturnType<typeof vi.fn>;
let consoleErrorSpy: ReturnType<typeof vi.spyOn>;
let consoleLogSpy: ReturnType<typeof vi.spyOn>;

describe('subgraph helpers', () => {
  const chainWithRouter = CHAINS.BscMainnet;
  const chainWithoutRouter = CHAINS.BscTestnet;

  beforeEach(() => {
    mockedRequest.mockReset();
    consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
    consoleLogSpy.mockRestore();
  });

  it('paginates getOpenPositions and injects router when missing', async () => {
    mockedRequest
      .mockResolvedValueOnce({
        account: {
          positions: [
            { id: 'market-1-1', market: { id: '0x1' }, router: { id: '0xabc' } },
            { id: 'market-2-1', market: { id: '0x2' } },
          ],
        },
      })
      .mockResolvedValueOnce({
        account: { positions: [] },
      });

    const result = await getOpenPositions({
      chainId: chainWithRouter,
      account: '0xuser',
      first: 2,
    });

    expect(result).toHaveLength(2);
    expect(result[0].router.id).toBe('0xabc');
    expect(result[1].router.id).toBe(zeroAddress);
  });

  it('paginates getUnwindPositions and injects router when missing', async () => {
    mockedRequest
      .mockResolvedValueOnce({
        account: {
          unwinds: [
            {
              id: 'market-1-1',
              position: { market: { id: '0x1' }, router: { id: '0xaaa' } },
            },
            {
              id: 'market-2-1',
              position: { market: { id: '0x2' } },
            },
          ],
        },
      })
      .mockResolvedValueOnce({ account: { unwinds: [] } });

    const result = await getUnwindPositions({
      chainId: chainWithRouter,
      account: '0xuser',
      first: 2,
    });

    expect(result).toHaveLength(2);
    expect(result[0].position.router.id).toBe('0xaaa');
    expect(result[1].position.router.id).toBe(zeroAddress);
  });

  it('handles non router chains for liquidated positions', async () => {
    mockedRequest
      .mockResolvedValueOnce({
        account: {
          liquidates: [
            {
              id: 'market-1-1',
              position: { market: { id: '0x1' } },
            },
          ],
        },
      })
      .mockResolvedValueOnce({ account: { liquidates: [] } });

    const result = await getLiquidatedPositions({
      chainId: chainWithoutRouter,
      account: '0xuser',
      first: 1,
    });

    expect(result).toHaveLength(1);
    expect(result[0].position.router.id).toBe(zeroAddress);
  });

  it('retrieves active markets and handles errors gracefully', async () => {
    mockedRequest.mockResolvedValueOnce({ markets: [{ id: '0x1' }] });
    await expect(getActiveMarketsFromSubgraph(chainWithRouter)).resolves.toEqual([
      { id: '0x1' },
    ]);

    mockedRequest.mockRejectedValueOnce(new Error('boom'));
    await expect(getActiveMarketsFromSubgraph(chainWithRouter)).resolves.toBeUndefined();
  });

  it('fetches number of positions and returns undefined on failure', async () => {
    mockedRequest.mockResolvedValueOnce({ account: { numberOfOpenPositions: 2 } });
    await expect(getNumberOfPositions(chainWithRouter, '0xuser')).resolves.toEqual({
      account: { numberOfOpenPositions: 2 },
    });

    mockedRequest.mockRejectedValueOnce(new Error('boom'));
    await expect(getNumberOfPositions(chainWithRouter, '0xuser')).resolves.toBeUndefined();
  });

  it('fetches position details with and without router support', async () => {
    mockedRequest.mockResolvedValueOnce({
      account: {
        positions: [{ router: { id: '0xrouter' } }],
      },
    });
    await expect(
      getPositionDetails(chainWithRouter, '0xuser', 'market-1-1'),
    ).resolves.toMatchObject({
      router: { id: '0xrouter' },
    });

    mockedRequest.mockResolvedValueOnce({
      account: {
        positions: [{}],
      },
    });
    await expect(
      getPositionDetails(chainWithoutRouter, '0xuser', 'market-1-1'),
    ).resolves.toMatchObject({
      router: { id: zeroAddress },
    });
  });

  it('returns undefined position details when not found', async () => {
    mockedRequest.mockResolvedValueOnce({ account: { positions: [] } });
    await expect(
      getPositionDetails(chainWithRouter, '0xuser', 'market-1-1'),
    ).resolves.toBeUndefined();
  });

  it('fetches total supply history and handles empty response', async () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-01-01T00:00:00Z'));

    mockedRequest.mockResolvedValueOnce({
      totalSupplyHourDatas: [{ totalSupply: '1' }],
    });
    await expect(getTotalSupplyDayHistory(chainWithRouter)).resolves.toEqual([
      { totalSupply: '1' },
    ]);

    mockedRequest.mockResolvedValueOnce({
      totalSupplyHourDatas: [],
    });
    await expect(getTotalSupplyDayHistory(chainWithRouter)).resolves.toBeUndefined();

    mockedRequest.mockRejectedValueOnce(new Error('boom'));
    await expect(getTotalSupplyDayHistory(chainWithRouter)).resolves.toBeUndefined();
    vi.useRealTimers();
  });

  it('fetches last processed block and handles failures', async () => {
    mockedRequest.mockResolvedValueOnce({
      _meta: { block: { number: 123 } },
    });
    await expect(getLastProcessedBlock(chainWithRouter)).resolves.toBe(123);

    mockedRequest.mockResolvedValueOnce({
      _meta: null,
    });
    await expect(getLastProcessedBlock(chainWithRouter)).resolves.toBeUndefined();

    mockedRequest.mockRejectedValueOnce(new Error('boom'));
    await expect(getLastProcessedBlock(chainWithRouter)).resolves.toBeUndefined();
  });

  it('throws SDKError on unsupported chain', async () => {
    await expect(
      getOpenPositions({ chainId: 9999 as CHAINS, account: '0xuser' }),
    ).rejects.toBeInstanceOf(SDKError);
  });
});
