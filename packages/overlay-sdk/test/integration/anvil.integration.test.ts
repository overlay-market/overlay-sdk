import { afterAll, describe, expect, it } from 'vitest';
import { CHAINS } from '@src/common/constants.js';
import { V1_FACTORY_PERIPHERY } from '@src/constants.js';
import { startAnvilFork } from '../utils/anvil.js';
import OverlaySDKCore from '@src/core/core.js';
import { Address } from 'viem';

const rpcUrl = process.env.BSC_RPC_URL ?? process.env.BSC_MAINNET_RPC_URL;
const forkBlockNumberEnv = process.env.FORK_BLOCK_NUMBER ?? process.env.ANVIL_FORK_BLOCK_NUMBER;

const hasForkConfig = Boolean(rpcUrl);

describe.skipIf(!hasForkConfig)('anvil fork integration', () => {
  const controllers: Array<{ stop: () => Promise<void> }> = [];

  afterAll(async () => {
    await Promise.all(controllers.map((controller) => controller.stop()));
  });

  it(
    'spins up a forked node and returns viable clients',
    async () => {
      const controller = await startAnvilFork({
        chainId: CHAINS.BscMainnet,
        forkBlockNumber: forkBlockNumberEnv ? BigInt(forkBlockNumberEnv) : undefined,
      });
      controllers.push(controller);
      const { publicClient, walletClient } = controller.clients;

      await expect(publicClient.getChainId()).resolves.toBe(CHAINS.BscMainnet);
      await expect(walletClient.getAddresses()).resolves.toHaveLength(10);

      const core = new OverlaySDKCore({
        chainId: CHAINS.BscMainnet,
        rpcProvider: publicClient,
        web3Provider: walletClient,
      });

      const factories = core.getFactories();
      expect(factories.length).toBeGreaterThan(0);

      const expectedPairs = V1_FACTORY_PERIPHERY[CHAINS.BscMainnet] ?? [];
      for (const { factory, periphery } of expectedPairs) {
        const resolved = core.getPeripheryForFactory(factory as Address);
        expect(resolved?.toLowerCase()).toBe(periphery.toLowerCase());
      }
    },
    60_000,
  );
});
