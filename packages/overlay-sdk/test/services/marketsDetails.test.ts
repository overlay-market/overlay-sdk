import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import axios from 'axios';
import { CHAINS } from '@src/common/constants.js';
import {
  getMarketDetailsById,
  getMarketsDetailsByChainId,
} from '@src/services/marketsDetails.js';
import { SDKError } from '@src/common/utils/sdk-error.js';

vi.mock('axios', () => ({
  default: {
    get: vi.fn(),
  },
}));

const mockedAxios = axios as unknown as {
  get: ReturnType<typeof vi.fn>;
};

describe('marketsDetails service', () => {
  const chainId = CHAINS.BscMainnet;

  beforeEach(() => {
    mockedAxios.get.mockReset();
  });

  it('fetches markets details and maps response into map keyed by deployment address', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        {
          marketId: 'market-1',
          marketName: 'Market One',
          logo: 'logo.png',
          currency: 'USD',
          descriptionText: 'desc',
          fullLogo: 'full.png',
          oracleLogo: 'oracle.png',
          buttons: { long: 'L', short: 'S' },
          chains: [
            {
              chainId,
              chainName: 'BSC',
              deploymentAddress: '0x1234',
              explorerUrl: '',
              disabled: false,
            },
          ],
        },
      ],
    });

    const result = await getMarketsDetailsByChainId(chainId);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://api.overlay.market/data/api/markets/chain/56',
    );
    expect(result).toBeInstanceOf(Map);
    expect(result?.size).toBe(1);
    expect(result?.get('0x1234')).toMatchObject({
      marketId: 'market-1',
      marketName: 'Market One',
      disabled: false,
      logo: 'logo.png',
      currency: 'USD',
    });
  });

  it('returns undefined when getMarketsDetailsByChainId request fails', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('network down'));
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const result = await getMarketsDetailsByChainId(chainId);

    expect(result).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('throws when getMarketsDetailsByChainId receives unsupported chain id', async () => {
    await expect(getMarketsDetailsByChainId(9999 as CHAINS)).rejects.toBeInstanceOf(
      SDKError,
    );
  });

  it('fetches market details by id and maps chain specific data', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        marketName: 'Market One',
        logo: 'logo.png',
        currency: 'USD',
        descriptionText: 'desc',
        fullLogo: 'full.png',
        oracleLogo: 'oracle.png',
        sources: [{ name: 'Source A' }],
        indexesConstruction: ['rule'],
        chains: [
          {
            chainId,
            chainName: 'BSC',
            deploymentAddress: '0x1234',
            explorerUrl: '',
            disabled: false,
          },
          {
            chainId: CHAINS.BscTestnet,
            chainName: 'BSC Test',
            deploymentAddress: '0x5678',
            explorerUrl: '',
            disabled: true,
          },
        ],
      },
    });

    const result = await getMarketDetailsById('0x1234', chainId);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      'https://api.overlay.market/data/api/markets/0x1234',
    );
    expect(result).toMatchObject({
      marketName: 'Market One',
      disabled: false,
      chain: {
        chainId,
        deploymentAddress: '0x1234',
      },
      sources: ['Source A'],
    });
  });

  it('returns undefined when getMarketDetailsById request fails', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('network down'));
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const result = await getMarketDetailsById('0x1234', chainId);

    expect(result).toBeUndefined();
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it('throws when getMarketDetailsById receives unsupported chain id', async () => {
    await expect(getMarketDetailsById('0x1234', 9999 as CHAINS)).rejects.toBeInstanceOf(
      SDKError,
    );
  });
});
