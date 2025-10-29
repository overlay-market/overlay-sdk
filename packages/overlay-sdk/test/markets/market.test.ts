import { beforeEach, describe, expect, it, vi } from 'vitest';
import { encodeAbiParameters, getAbiItem, toEventHash } from 'viem';
import { CHAINS } from '@src/common/constants.js';
import { OverlaySDKMarket } from '@src/markets/market.js';
import { OverlayV1FactoryABI } from '@src/markets/abis/OverlayV1Factory.js';
import { OverlayV1MarketABI } from '@src/markets/abis/OverlayV1Market.js';
import { getPositionDetails } from '@src/subgraph.js';
import { UnwindState } from '@src/trade/types.js';

const contractFactory = vi.fn();

vi.mock('viem', async (importOriginal) => {
  const actual = await importOriginal<typeof import('viem')>();
  return {
    ...actual,
    getContract: vi.fn((config) => contractFactory(config)),
  };
});

vi.mock('@src/subgraph.js', () => ({
  getPositionDetails: vi.fn(),
}));

const marketContractMock = {
  read: {
    factory: vi.fn().mockResolvedValue('0xfactory'),
    isShutdown: vi.fn().mockResolvedValue(false),
    params: vi.fn().mockResolvedValue(42n),
    positions: vi.fn().mockResolvedValue([0n, 0n, 0n, 0n, true, 0n, 123n]),
  },
  write: {
    build: vi.fn().mockResolvedValue('0xhash'),
    unwind: vi.fn().mockResolvedValue('0xhash'),
    emergencyWithdraw: vi.fn().mockResolvedValue('0xhash'),
  },
  estimateGas: {
    build: vi.fn().mockResolvedValue(1n),
    unwind: vi.fn().mockResolvedValue(1n),
    emergencyWithdraw: vi.fn().mockResolvedValue(1n),
  },
  simulate: {
    build: vi.fn().mockResolvedValue('sim-build'),
    unwind: vi.fn().mockResolvedValue('sim-unwind'),
    emergencyWithdraw: vi.fn().mockResolvedValue('sim-withdraw'),
  },
};

const factoryContractMock = {
  read: {
    isMarket: vi.fn().mockResolvedValue(true),
  },
};

const baseCore = () => ({
  chainId: CHAINS.BscMainnet,
  rpcProvider: {},
  web3Provider: { account: { address: '0xcore' } },
  usingShiva: vi.fn().mockReturnValue(false),
  getPeripheryForFactory: vi.fn().mockReturnValue('0xperiphery'),
  getFactories: vi.fn().mockReturnValue(['0xfactory']),
  performTransaction: vi.fn().mockResolvedValue({ hash: '0xhash' }),
  useAccount: vi.fn().mockResolvedValue({ address: '0xaccount', type: 'json-rpc' }),
  useWeb3Provider: vi.fn(),
});

const baseSdk = () => ({
  shiva: {
    build: vi.fn(),
    populateBuild: vi.fn(),
    simulateBuild: vi.fn(),
    unwind: vi.fn(),
    unwindMultiple: vi.fn(),
    populateUnwind: vi.fn(),
    simulateUnwind: vi.fn(),
    emergencyWithdraw: vi.fn(),
    populateEmergencyWithdraw: vi.fn(),
    simulateEmergencyWithdraw: vi.fn(),
    buildUnwindCall: vi.fn(),
  },
  trade: {
    getUnwindState: vi.fn(),
  },
});

const createMarket = (
  coreOverrides: Partial<ReturnType<typeof baseCore>> = {},
  sdkOverrides: Partial<ReturnType<typeof baseSdk>> = {},
) => {
  const core = { ...baseCore(), ...coreOverrides };
  const sdk = { ...baseSdk(), ...sdkOverrides };
  const market = new OverlaySDKMarket({ core } as any, sdk as any);
  return { market, core, sdk };
};

describe('OverlaySDKMarket', () => {
  beforeEach(() => {
    contractFactory.mockReset();
    marketContractMock.read.factory.mockClear();
    marketContractMock.read.isShutdown.mockClear();
    marketContractMock.read.params.mockClear();
    marketContractMock.read.positions.mockClear();
    Object.values(marketContractMock.write).forEach((fn) => fn.mockClear());
    Object.values(marketContractMock.estimateGas).forEach((fn) => fn.mockClear());
    Object.values(marketContractMock.simulate).forEach((fn) => fn.mockClear());
    factoryContractMock.read.isMarket.mockClear();
    (getPositionDetails as any).mockReset();
  });

  it('gets market contracts and caches factory result', async () => {
    contractFactory.mockResolvedValue(marketContractMock);
    const { market } = createMarket();

    await market.getContractV1Market('0xmarket');
    expect(contractFactory).toHaveBeenCalledWith(
      expect.objectContaining({ address: '0xmarket' }),
    );

    const factoryAddress = await market.factory('0xmarket');
    expect(factoryAddress).toBe('0xfactory');
    await market.factory('0xmarket');
    expect(marketContractMock.read.factory).toHaveBeenCalledTimes(1);
  });

  it('resolves periphery from core and caches it', async () => {
    contractFactory.mockResolvedValue(marketContractMock);
    const { market, core } = createMarket();
    await market.periphery('0xmarket');
    expect(core.getPeripheryForFactory).toHaveBeenCalledWith('0xfactory');
    await market.periphery('0xmarket');
    expect(core.getPeripheryForFactory).toHaveBeenCalledTimes(1);
  });

  it('validates markets using factory contracts', async () => {
    contractFactory.mockImplementation(({ abi }) =>
      abi === OverlayV1FactoryABI ? factoryContractMock : marketContractMock,
    );
    const { market } = createMarket();

    await expect(market.isValidMarket('0xmarket')).resolves.toBe(true);
    factoryContractMock.read.isMarket.mockResolvedValueOnce(false);
    await expect(market.isValidMarket('0xother')).resolves.toBe(false);
  });

  it('validates markets with multiple factories', async () => {
    contractFactory.mockImplementation(({ abi }) =>
      abi === OverlayV1FactoryABI ? factoryContractMock : marketContractMock,
    );
    // Simulate BSC mainnet with two factories
    const { market } = createMarket({
      getFactories: vi.fn().mockReturnValue(['0xfactory1', '0xfactory2']),
      getPeripheryForFactory: vi.fn().mockReturnValue('0xperiphery')
    });

    // Market is valid if ANY factory recognizes it
    factoryContractMock.read.isMarket
      .mockResolvedValueOnce(false)  // First factory doesn't recognize it
      .mockResolvedValueOnce(true);  // Second factory recognizes it

    await expect(market.isValidMarket('0xmarket')).resolves.toBe(true);
    expect(factoryContractMock.read.isMarket).toHaveBeenCalledTimes(2);
  });

  it('falls back to factory() when no factories configured', async () => {
    contractFactory.mockResolvedValue(marketContractMock);
    const { market, core } = createMarket({ getFactories: vi.fn().mockReturnValue([]) });

    await expect(market.isValidMarket('0xmarket')).resolves.toBe(true);
    expect(marketContractMock.read.factory).toHaveBeenCalled();
  });

  it('reads market state helpers', async () => {
    contractFactory.mockResolvedValue(marketContractMock);
    const { market } = createMarket();
    await expect(market.getIsShutdown('0xmarket')).resolves.toBe(false);
    await expect(market.getTradingFeeRate('0xmarket')).resolves.toBe(42n);
    await expect(market.getMinCollateral('0xmarket')).resolves.toBe(42n);
    await expect(market.getCapLeverage('0xmarket')).resolves.toBe(42n);

    marketContractMock.read.positions.mockResolvedValueOnce([0n, 0n, 0n, 0n, true, 0n, 555n]);
    await expect(
      market.getOiShares(
        '0xmarket',
        1n,
        '0x0000000000000000000000000000000000000001',
      ),
    ).resolves.toEqual({
      oiShares: 555n,
      isLong: true,
    });
  });

  it('delegates to shiva when enabled for build/unwind/withdraw', async () => {
    contractFactory.mockResolvedValue(marketContractMock);
    const { market, core, sdk } = createMarket({
      usingShiva: vi.fn().mockReturnValue(true),
    });
    (getPositionDetails as any).mockResolvedValue({
      router: { id: '0xrouter' },
    });

    await market.build({ marketAddress: '0xmarket', collateral: 1n, leverage: 1n, isLong: true, priceLimit: 1n } as any);
    expect(sdk.shiva.build).toHaveBeenCalled();

    await market.populateBuild({ marketAddress: '0xmarket', collateral: 1n, leverage: 1n, isLong: true, priceLimit: 1n } as any);
    expect(sdk.shiva.populateBuild).toHaveBeenCalled();

    await market.unwind({ marketAddress: '0xmarket', positionId: 1n, fraction: 1n, priceLimit: 1n } as any);
    expect(sdk.shiva.unwind).toHaveBeenCalled();

    await market.emergencyWithdraw({ marketAddress: '0xmarket', positionId: 1n } as any);
    expect(sdk.shiva.emergencyWithdraw).toHaveBeenCalled();

    // Reset to disable shiva for next tests
    core.usingShiva.mockReturnValue(false);
  });

  it('runs build transaction through core.performTransaction', async () => {
    contractFactory.mockResolvedValue(marketContractMock);
    const { market, core } = createMarket();

    await market.build({
      marketAddress: '0xmarket',
      collateral: 1n,
      leverage: 2n,
      isLong: true,
      priceLimit: 3n,
    } as any);

    expect(core.performTransaction).toHaveBeenCalledWith(
      expect.objectContaining({
        getGasLimit: expect.any(Function),
        sendTransaction: expect.any(Function),
      }),
    );
    await expect(market.populateBuild({
      marketAddress: '0xmarket',
      collateral: 1n,
      leverage: 2n,
      isLong: true,
      priceLimit: 3n,
    } as any)).resolves.toMatchObject({
      to: '0xmarket',
      from: '0xaccount',
    });
    await expect(
      market.simulateBuild({
        marketAddress: '0xmarket',
        collateral: 1n,
        leverage: 2n,
        isLong: true,
        priceLimit: 3n,
      } as any),
    ).resolves.toBe('sim-build');
  });

  it('unwinds via core when router is zero address', async () => {
    contractFactory.mockResolvedValue(marketContractMock);
    (getPositionDetails as any).mockResolvedValue({
      router: { id: '0x0000000000000000000000000000000000000000' },
    });
    const { market, core } = createMarket();

    await market.unwind({
      marketAddress: '0xmarket',
      positionId: 1n,
      fraction: 1n,
      priceLimit: 1n,
    } as any);
    expect(core.performTransaction).toHaveBeenCalled();

    await market.populateUnwind({
      marketAddress: '0xmarket',
      positionId: 1n,
      fraction: 1n,
      priceLimit: 1n,
    } as any);
    await market.simulateUnwind({
      marketAddress: '0xmarket',
      positionId: 1n,
      fraction: 1n,
      priceLimit: 1n,
    } as any);
    expect(marketContractMock.simulate.unwind).toHaveBeenCalled();
  });

  it('delegates unwind to shiva when router not zero', async () => {
    contractFactory.mockResolvedValue(marketContractMock);
    (getPositionDetails as any).mockResolvedValue({
      router: { id: '0xrouter' },
    });
    const { market, sdk } = createMarket();
    await market.unwind({
      marketAddress: '0xmarket',
      positionId: 1n,
      fraction: 1n,
      priceLimit: 1n,
    } as any);
    expect(sdk.shiva.unwind).toHaveBeenCalled();
  });

  it('handles unwindMultiple success path', async () => {
    contractFactory.mockResolvedValue(marketContractMock);
    const { market, sdk } = createMarket();
    const success: any = {
      unwindState: UnwindState.Unwind,
      positionId: 1,
      marketAddress: '0xmarket',
      priceLimit: 1n,
      useShiva: false,
    };
    sdk.trade.getUnwindState.mockResolvedValue(success);
    const buildCallSpy = vi
      .spyOn(market as any, 'buildUnwindCall')
      .mockResolvedValue('call');

    const result = await market.unwindMultiple({
      positions: [{ marketAddress: '0xmarket', positionId: 1 }],
      slippage: 1,
      unwindPercentage: '0.5',
    } as any);
    expect(buildCallSpy).toHaveBeenCalled();
    expect(result[0].status).toBe('fulfilled');
  });

  it('raises error when unwindMultiple encounters non-unwind state', async () => {
    contractFactory.mockResolvedValue(marketContractMock);
    const { market, sdk } = createMarket();
    sdk.trade.getUnwindState.mockResolvedValue({
      unwindState: UnwindState.PositionUnderwater,
      positionId: 1,
      marketAddress: '0xmarket',
      error: 'nope',
    });

    await expect(
      market.unwindMultiple({
        positions: [{ marketAddress: '0xmarket', positionId: 1 }],
        slippage: 1,
        unwindPercentage: '0.5',
      } as any),
    ).rejects.toThrow('Unwind multiple failed');
  });

  it('builds unwind call invoking performTransaction', async () => {
    contractFactory.mockResolvedValue(marketContractMock);
    const { market, core } = createMarket();

    await market.buildUnwindCall(
      {
        positions: [{ marketAddress: '0xmarket', positionId: 1 }],
        slippage: 1,
        unwindPercentage: '0.5',
      } as any,
      {
        marketAddress: '0xmarket',
        positionId: 1,
        priceLimit: 1n,
        unwindState: UnwindState.Unwind,
        useShiva: false,
      } as any,
    );

    expect(core.performTransaction).toHaveBeenCalled();
  });

  it('runs emergency withdraw helpers', async () => {
    contractFactory.mockResolvedValue(marketContractMock);
    const { market, core } = createMarket();
    await market.emergencyWithdraw({ marketAddress: '0xmarket', positionId: 1n } as any);
    expect(core.performTransaction).toHaveBeenCalled();
    await market.populateEmergencyWithdraw({
      marketAddress: '0xmarket',
      positionId: 1n,
    } as any);
    await market.simulateEmergencyWithdraw({
      marketAddress: '0xmarket',
      positionId: 1n,
    } as any);
    expect(marketContractMock.simulate.emergencyWithdraw).toHaveBeenCalled();
  });

  it('parses build transaction receipts extracting position id', async () => {
    const { market } = createMarket();
    const buildSignature = toEventHash(getAbiItem({ abi: OverlayV1MarketABI, name: 'Build' }));
    const data = encodeAbiParameters(
      [
        { type: 'uint256', name: 'positionId' },
        { type: 'uint256', name: 'oi' },
        { type: 'uint256', name: 'debt' },
        { type: 'bool', name: 'isLong' },
        { type: 'uint256', name: 'price' },
      ],
      [123n, 0n, 0n, true, 0n],
    );
    const senderTopic = encodeAbiParameters(
      [{ type: 'address', name: 'sender' }],
      ['0x0000000000000000000000000000000000000001'],
    );
    const receipt: any = {
      logs: [
        {
          topics: [buildSignature, senderTopic],
          data,
        },
      ],
    };
    expect((market as any).submitParse(receipt)).toEqual({ positionId: 123n });

    const failingReceipt: any = { logs: [] };
    expect(() => (market as any).submitParse(failingReceipt)).toThrowError();
  });

  it('parses props resolving accounts and default callbacks', async () => {
    const { market, core } = createMarket();
    const parse = (market as any).parseBuildProps({
      marketAddress: '0xmarket',
      collateral: 1n,
      leverage: 1n,
      isLong: true,
      priceLimit: 1n,
    });
    await expect(parse).resolves.toMatchObject({
      account: { address: '0xaccount' },
      callback: expect.any(Function),
    });
    expect(core.useAccount).toHaveBeenCalled();
  });
});
