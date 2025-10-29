import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import OverlaySDKCore from '@src/core/core.js';
import { CHAINS } from '@src/common/constants.js';
import { V1_FACTORY_PERIPHERY, type AddressFactoryPeriphery } from '@src/constants.js';
import { ERROR_CODE, SDKError } from '@src/common/utils/sdk-error.js';
import type { PublicClient, WalletClient } from 'viem';

vi.mock('@src/subgraph.js', () => ({
  getLastProcessedBlock: vi.fn().mockResolvedValue(123),
}));

const mockRpcProvider = (): PublicClient => {
  return {
    getBytecode: vi.fn().mockResolvedValue('0x1234'),
    getFeeHistory: vi.fn().mockResolvedValue({
      baseFeePerGas: ['0x1'],
      reward: [['0x2']],
    }),
    waitForTransactionReceipt: vi.fn().mockResolvedValue({
      transactionHash: '0xreceipt',
    }),
    getTransactionConfirmations: vi.fn().mockResolvedValue(2n),
  } as unknown as PublicClient;
};

const mockWeb3Provider = (account?: string): WalletClient => {
  const addresses = account ? [account] : ['0x1234000000000000000000000000000000000000'];
  return {
    account: account
      ? { address: account, type: 'json-rpc' }
      : undefined,
    requestAddresses: vi.fn().mockResolvedValue(addresses),
  } as unknown as WalletClient;
};

describe('OverlaySDKCore', () => {
  const chainId = CHAINS.BscMainnet;
  // Core now always uses addresses from V1_FACTORY_PERIPHERY constants
  // BSC Mainnet has multiple factory/periphery pairs
  const expectedPairs = V1_FACTORY_PERIPHERY[chainId];
  const expectedFactories = expectedPairs.map(pair => pair.factory);

  let rpcProvider: PublicClient;
  let web3Provider: WalletClient;

  beforeEach(() => {
    rpcProvider = mockRpcProvider();
    web3Provider = mockWeb3Provider();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const createCore = (overrides: Partial<ConstructorParameters<typeof OverlaySDKCore>[0]> = {}) =>
    new OverlaySDKCore({
      chainId,
      rpcProvider,
      web3Provider,
      ...overrides,
    });

  it('exposes configuration getters', () => {
    const core = createCore({ useShiva: true, brokerId: 5, logMode: 'debug' });
    expect(core.chainId).toBe(chainId);
    expect(core.brokerId).toBe(5);
    expect(core.logMode).toBe('debug');

    // Factories come from V1_FACTORY_PERIPHERY constants
    expect(core.getFactories()).toEqual(expectedFactories);

    // Each factory should have a corresponding periphery
    expectedPairs.forEach((pair: AddressFactoryPeriphery) => {
      expect(core.getPeripheryForFactory(pair.factory)).toBe(pair.periphery);
    });

    // Unknown factory throws error
    expect(() =>
      core.getPeripheryForFactory('0xdeadbeef00000000000000000000000000000000')
    ).toThrow(/Periphery not configured for factory/);
  });

  it('resolves periphery from default V1_FACTORY_PERIPHERY mapping', () => {
    // Core always uses addresses from constants.ts
    const core = createCore();
    const factories = core.getFactories();

    // BSC Mainnet should have factory addresses from V1_FACTORY_PERIPHERY
    expect(factories.length).toBeGreaterThan(0);
    expect(core.getPeripheryForFactory(factories[0])).toBeDefined();
  });

  it('respects usingShiva flag based on network support', () => {
    const coreWithShiva = createCore({ useShiva: true });
    expect(coreWithShiva.usingShiva()).toBe(true);

    const coreWithoutShiva = createCore({ useShiva: false });
    expect(coreWithoutShiva.usingShiva()).toBe(false);
  });

  it('wraps created SDKError using error helper', () => {
    const core = createCore();
    const error = core.error({ message: 'bad', code: ERROR_CODE.NOT_SUPPORTED });
    expect(error).toBeInstanceOf(SDKError);
    expect(error.code).toBe(ERROR_CODE.NOT_SUPPORTED);
  });

  it('provides web3 provider and falls back to request addresses when needed', async () => {
    const core = createCore();
    await expect(core.useAccount()).resolves.toMatchObject({
      address: expect.stringMatching(/^0x/),
    });
  });

  it('detects contract accounts through bytecode lookup', async () => {
    const core = createCore();
    expect(await core.isContract('0x1234' as any)).toBe(true);
    (rpcProvider.getBytecode as any).mockResolvedValue('0x');
    expect(await core.isContract('0x1234' as any)).toBe(false);
  });

  it('computes fee data from fee history', async () => {
    const core = createCore();
    const result = await core.getFeeData();
    expect(result.maxFeePerGas).toBeGreaterThan(0n);
    expect(result.maxPriorityFeePerGas).toBeGreaterThanOrEqual(0n);
  });

  it('fetches last processed block from subgraph', async () => {
    const core = createCore();
    await expect(core.getLastSubgraphProcessedBlock()).resolves.toBe(123);
  });

  it('performs transaction flow for externally-owned account', async () => {
    const core = createCore();
    (rpcProvider.getBytecode as any).mockResolvedValue('0x');

    const getGasLimit = vi.fn().mockResolvedValue(21_000n);
    const sendTransaction = vi.fn().mockResolvedValue('0xhash');
    const decodeResult = vi.fn().mockResolvedValue({ decoded: true });

    const callback = vi.fn();

    const result = await core.performTransaction({
      account: '0x1234000000000000000000000000000000000000',
      callback,
      getGasLimit,
      sendTransaction,
      decodeResult,
      waitForTransactionReceiptParameters: { confirmations: 1 },
    });

    expect(getGasLimit).toHaveBeenCalled();
    expect(sendTransaction).toHaveBeenCalled();
    expect(decodeResult).toHaveBeenCalled();
    expect(result).toMatchObject({
      hash: '0xhash',
      confirmations: 2n,
      result: { decoded: true },
    });
  });

  it('handles transaction flow for contract accounts with minimal gas', async () => {
    const core = createCore({
      web3Provider: mockWeb3Provider('0xabc0000000000000000000000000000000000000'),
    });
    (rpcProvider.getBytecode as any).mockResolvedValue('0x1234');

    const getGasLimit = vi.fn();
    const sendTransaction = vi.fn().mockResolvedValue('0xhash');
    const callback = vi.fn();

    const result = await core.performTransaction({
      callback,
      getGasLimit,
      sendTransaction,
    } as any);

    expect(getGasLimit).not.toHaveBeenCalled();
    expect(sendTransaction).toHaveBeenCalledWith(
      expect.objectContaining({
        gas: 21000n,
        maxFeePerGas: 1n,
      }),
    );
    expect(result).toEqual({ hash: '0xhash' });
  });

  it('throws when rpc configuration missing', () => {
    expect(
      () =>
        new OverlaySDKCore({
          chainId,
          rpcUrls: {} as any,
        }),
    ).toThrow(SDKError);
  });

  it('static helpers create clients', () => {
    const publicClient = OverlaySDKCore.createRpcProvider(chainId, 'http://127.0.0.1:8545');
    expect(publicClient).toBeDefined();

    const walletClient = OverlaySDKCore.createWeb3Provider(chainId, {
      request: vi.fn(),
    } as any);
    expect(walletClient).toBeDefined();
  });
});
