import { createAnvil } from '@viem/anvil';
import { Address, Chain, createPublicClient, createWalletClient, http } from 'viem';
import { CHAINS, VIEM_CHAINS } from '@src/common/constants.js';

/**
 * Configuration options for starting an Anvil fork
 */
export type AnvilForkConfig = {
  /** Chain ID to fork (BSC Mainnet: 56, BSC Testnet: 97) */
  chainId: CHAINS;
  /** RPC URL to fork from. Defaults to BSC_MAINNET_RPC_URL env var */
  forkUrl?: string;
  /** Specific block number to fork from. If not provided, forks from latest block */
  forkBlockNumber?: bigint;
  /** Port for Anvil to listen on. Defaults to 8545 */
  port?: number;
  /** Enable automatic account impersonation. Allows sending txs from any address without private keys */
  autoImpersonate?: boolean;
};

/**
 * Controller object for managing a running Anvil fork instance
 */
export type AnvilController = {
  /** HTTP URL to connect to Anvil (e.g., "http://127.0.0.1:8545") */
  url: string;
  /** Array of accounts available on the forked network */
  accounts: Address[];
  /** Function to stop the Anvil instance and clean up resources */
  stop: () => Promise<void>;
  /** Viem chain configuration for the forked network */
  chain: Chain;
  /** Pre-configured viem clients (public + wallet) for the fork */
  clients: ReturnType<typeof createForkClients>;
};

const DEFAULT_ANVIL_PORT = 8545;

/**
 * Starts an Anvil fork of BSC Mainnet or Testnet for integration testing
 *
 * Creates a local blockchain fork that mirrors the state of BSC at a specific block.
 * This enables testing real contract interactions without spending gas or affecting mainnet.
 *
 * @param config - Fork configuration options
 * @returns AnvilController with clients and management functions
 * @throws Error if BSC_MAINNET_RPC_URL environment variable is not set
 *
 * @example
 * ```typescript
 * // Start fork at specific block
 * const controller = await startAnvilFork({
 *   chainId: CHAINS.BscMainnet,
 *   forkBlockNumber: 63917062n,
 * });
 *
 * // Use the fork
 * const balance = await controller.clients.publicClient.getBalance({
 *   address: '0x...',
 * });
 *
 * // Clean up when done
 * await controller.stop();
 * ```
 */
export async function startAnvilFork({
  chainId,
  forkUrl = process.env.BSC_RPC_URL ?? process.env.BSC_MAINNET_RPC_URL,
  forkBlockNumber,
  port = Number(process.env.ANVIL_PORT ?? DEFAULT_ANVIL_PORT),
  autoImpersonate = true,
}: AnvilForkConfig): Promise<AnvilController> {
  if (!forkUrl) {
    throw new Error('BSC_RPC_URL (or BSC_MAINNET_RPC_URL) environment variable is required to run forked tests');
  }

  const resolvedForkBlockNumber =
    forkBlockNumber ??
    (process.env.FORK_BLOCK_NUMBER ? BigInt(process.env.FORK_BLOCK_NUMBER) : undefined);

  const createOptions: Parameters<typeof createAnvil>[0] = {
    port,
    forkUrl,
    autoImpersonate,
  };

  if (resolvedForkBlockNumber !== undefined) {
    createOptions.forkBlockNumber = resolvedForkBlockNumber;
    createOptions.forkChainId = chainId;
  }

  const anvil = createAnvil(createOptions);

  await anvil.start();

  const url = `http://127.0.0.1:${port}`;
  const chain = VIEM_CHAINS[chainId];

  const clients = createForkClients(url, chain);

  return {
    url,
    accounts: await clients.walletClient.getAddresses(),
    chain,
    clients,
    stop: async () => {
      await anvil.stop();
    },
  };
}

/**
 * Creates viem clients (public + wallet) configured for an Anvil fork
 *
 * Utility function to create pre-configured viem clients that work with a forked network.
 * The public client is set up with multicall batching for efficient RPC calls.
 *
 * @param url - HTTP URL of the Anvil instance (e.g., "http://127.0.0.1:8545")
 * @param chain - Viem chain configuration for proper transaction formatting
 * @returns Object containing publicClient (read operations) and walletClient (write operations)
 *
 * @example
 * ```typescript
 * const clients = createForkClients(
 *   'http://127.0.0.1:8545',
 *   VIEM_CHAINS[CHAINS.BscMainnet]
 * );
 *
 * // Read blockchain state
 * const block = await clients.publicClient.getBlockNumber();
 *
 * // Send transactions
 * const hash = await clients.walletClient.sendTransaction({ ... });
 * ```
 */
export function createForkClients(url: string, chain: Chain) {
  const transport = http(url);
  return {
    publicClient: createPublicClient({
      chain,
      transport,
      batch: {
        multicall: true,
      },
    }),
    walletClient: createWalletClient({
      chain,
      transport,
    }),
  };
}
