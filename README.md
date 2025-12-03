# overlay-sdk

## Installation

1. Build the package:

```
cd packages/overlay-sdk
pnpm run build
```

2. Link the package to react application

```
cd ../../apps/overlay
pnpm add overlay-sdk
```

## Usage

To get started with the Overlay SDK import the necessary module:

```
import { OverlaySDK } from 'overlay-sdk'

```

## Testing

Run the automated test suite from the package directory:

```
cd packages/overlay-sdk
pnpm test
```

The default run executes all unit suites. Integration tests that depend on a BSC mainnet RPC (including the Anvil fork harness) are skipped unless an RPC URL is provided. To enable them, export either `BSC_RPC_URL` or `BSC_MAINNET_RPC_URL` (e.g. your Alchemy endpoint) before running `pnpm test`.

### Live integration checks

- Copy `.env.test.example` to `.env.test` (or `.env`) and fill in the RPC URL. Set `SUBGRAPH_TEST_ACCOUNT` if you want the integrations to target a specific address with positions; otherwise the tests fall back to the zero address.
- **Anvil fork smoke test** – set `BSC_MAINNET_RPC_URL` (or `BSC_RPC_URL`) and optionally `FORK_BLOCK_NUMBER`, then run `pnpm vitest run test/integration/anvil.integration.test.ts --pool=threads`. This spins a local Anvil fork and verifies `OverlaySDKCore` resolves the expected factory → periphery mapping on-chain.
- **SDK live integration (read-only)** – set `BSC_MAINNET_RPC_URL` (or `BSC_RPC_URL`), then run `pnpm vitest run test/integration/sdk.integration.test.ts --pool=threads`. The suite exercises the major SDK modules (core, markets, market, trade, state, OVL, account, and position tables) directly against the upstream RPC. All write-path assertions are disabled; only read flows run by default.
- **Real subgraph tests** – run `pnpm vitest run test/integration/subgraph.integration.test.ts --pool=threads`. The suite uses the BSC mainnet subgraph URL defined in `NETWORKS` and performs live queries (requires network access).
- **Refresh fixtures** – run `pnpm fixtures` from `packages/overlay-sdk` to snapshot the current BSC market details and subgraph responses into `test/fixtures/`.

## Initialization

Before using the SDK create an instance of the OverlaySDK class:

```ts
// Pass your own viem PublicClient

import { createPublicClient, http } from "viem";
import { arbitrumSepolia } from "viem/chains";

const rpcProvider = createPublicClient({
  chain: arbitrumSepolia,
  transport: http(),
});
const web3Provider = window.ethereum;

const sdk = new OverlaySDK({
  chainId: 421614,
  rpcProvider,
  web3Provider,
});
```

Custom RPC

```ts
import { OverlaySDK, CHAINS } from "overlay-sdk";

const web3Provider = window.ethereum;

const sdk = new OverlaySDK({
  chainId: CHAINS.BscMainnet,
  rpcUrls: {
    [CHAINS.ArbitrumSepolia]: 'https://arb-sepolia.g.alchemy.com/v2/xxx',
    [CHAINS.Bartio]: 'https://bera-testnet.nodeinfra.com',
  },
  web3Provider,
});
```

### Multiple Factories Support

The SDK supports multiple OverlayV1Factory contracts per chain. Factory and periphery addresses are defined in the SDK's `V1_FACTORY_PERIPHERY` constants for BSC Mainnet and BSC Testnet.

**BSC Mainnet** (single factory):
- Factory `0xC35093f76fF3D31Af27A893CDcec585F1899eE54` → Periphery `0x10575a9C8F36F9F42D7DB71Ef179eD9BEf8Df238`

**BSC Testnet** (multiple factories):
- Factory `0xB49a63B267515FC1D8232604d05Db4D8Daf00648` → Periphery `0x81BdBf6C69882Fe7c958018D3fF7FcAcb59EF8b7`
- Factory `0x73ed124e6426e81cac4becae2720e19ce5836f45` → Periphery `0xb5A2FaCa54082758EE78eA7022EE178c4F909A80`

The SDK automatically loads all configured factories:

```ts
import { OverlaySDK, CHAINS } from "overlay-sdk";

const sdk = new OverlaySDK({
  chainId: CHAINS.BscTestnet,
  rpcProvider,
  web3Provider,
});

// Get all factories for the chain (automatically loaded from constants)
const factories = sdk.core.getFactories();
console.log("Configured factories:", factories);
// Output: ['0xB49a63B267515FC1D8232604d05Db4D8Daf00648', '0x73ed124e6426e81cac4becae2720e19ce5836f45']

// Get periphery for a specific factory
const periphery = sdk.core.getPeripheryForFactory(factories[0]);
console.log("Periphery:", periphery);
// Output: '0x81BdBf6C69882Fe7c958018D3fF7FcAcb59EF8b7'
```

When using Shiva on Bsc networks, you can query and manage authorized factories:

```ts
// Get all factories authorized by Shiva
const authorizedFactories = await sdk.shiva.getAuthorizedFactories();
console.log("Shiva authorized factories:", authorizedFactories);

// Add a new factory (requires governance permissions)
await sdk.shiva.addFactory({
  account: governorAccount,
  factoryAddress: "0xNewFactory...",
});

// Remove a factory (requires governance permissions)
await sdk.shiva.removeFactory({
  account: governorAccount,
  factoryAddress: "0xOldFactory...",
});
```

The protocol validates markets against all authorized factories, allowing flexible deployment across multiple factory instances.

Custom Broker ID. This will be used in Shiva events to filter out transactions from other brokers. You can set any number which is unique to your application. Default is 0.

```ts
// Pass your own viem PublicClient

BROKER_ID = 777

const sdk = new OverlaySDK({
  chainId: 421614,
  rpcProvider,
  web3Provider,
  brokerId: BROKER_ID,
});
```

Use Shiva. You can specify if you want to operate through Shiva or not. Default is false.

```ts
const sdk = new OverlaySDK({
  chainId: 421614,
  rpcProvider,
  web3Provider,
  useShiva: true,
});
```

## Shiva Module

Shiva is an intermediary contract that provides a streamlined way to build, unwind and manage positions in OverlayV1 markets. When using Shiva, the contract will hold your positions instead of your wallet directly.

For detailed technical documentation about Shiva contract visit: https://github.com/overlay-market/v1-shiva/blob/main/README.md

### Prerequisites

Before interacting with Shiva, you need to:

1. Enable Shiva when creating the SDK instance:

```ts
const sdk = new OverlaySDK({
  chainId: CHAINS.Bartio,
  rpcProvider,
  web3Provider,
  useShiva: true // Enable Shiva module
});
```

2. Approve Shiva to spend your OVL tokens:

```ts
await sdk.shiva.approveShiva({
  account,
  amount: toWei('1000') // Amount of OVL to approve
});
```

### Broker ID

The broker ID is used to filter transactions from different applications. You can set it when creating the SDK instance:

```ts
const BROKER_ID = 777;

const sdk = new OverlaySDK({
  chainId: CHAINS.Bartio,
  rpcProvider,
  web3Provider,
  useShiva: true,
  brokerId: BROKER_ID // Set your broker ID
});
```

If not specified, it defaults to 0. You can override it in individual transactions by passing it as a parameter:

```ts
await sdk.shiva.build({
  account,
  marketAddress,
  brokerId: 888, // Override default broker ID for this transaction
  // ... other params
});
```

### Building Positions

Basic position building:

```ts
await sdk.shiva.build({
  account,
  marketAddress,
  isLong: true,
  collateral: toWei('10'),
  leverage: toWei('2'),
  priceLimit: priceLimit
});
```

### Unwinding Positions

Unwind a single position:

```ts
await sdk.shiva.unwind({
  account,
  marketAddress,
  positionId: positionId,
  fraction: toWei('1'), // 1 = 100% of position
  priceLimit: priceLimit
});
```

Unwind multiple positions:

```ts
await sdk.shiva.unwindMultiple({
  positions: [
    {
      marketAddress: "0x...",
      positionId: 123
    },
    {
      marketAddress: "0x...", 
      positionId: 456
    }
  ],
  slippage: 1, // 1% slippage
  unwindPercentage: 1 // Unwind 100% of each position
});
```

### Building with stable collateral (LBSC)

Use Shiva's LBSC path to supply a stable token and borrow OVL under the hood. Requires `useShiva: true` and LBSC availability on the chain.

```ts
await sdk.shiva.buildStable({
  account,
  params: {
    marketAddress,
    isLong: true,
    stableCollateral: toWei('100'), // amount in stable token units
    leverage: toWei('2'),
    priceLimit,
    minOvl: toWei('50'), // minimum OVL to receive from borrow
  },
});
```

### Unwinding to stable

`unwindStable` closes a position and swaps OVL proceeds into a stable token. On BSC mainnet swap data is fetched automatically via 1inch (requires `oneInchApiKey`); on other chains provide `swapData`.

```ts
await sdk.shiva.unwindStable({
  account,
  marketAddress,
  positionId,
  fraction: toWei('1'),
  priceLimit,
  minOut: toWei('90'),          // minimum stable tokens to receive
  swapData: '0x...',            // optional; required on chains without 1inch integration
});
```

### On-Behalf-Of Operations

Shiva supports signature-based operations where one address can authorize another to perform actions on their behalf.

When signing messages, you can either:
- Let the SDK generate a random nonce (recommended)
- Provide your own nonce

Example with auto-generated nonce:

```ts
// 1. Owner signs the build parameters
const signedData = await sdk.shiva.signBuildOnBehalfOf({
  account: ownerAccount,
  ovlMarket: marketAddress,
  deadline: Date.now() + 3600000, // 1 hour from now
  collateral: toWei('10'),
  leverage: toWei('2'),
  isLong: true,
  priceLimit: priceLimit
  // nonce is auto-generated if not provided
});

// 2. Operator executes the build using the signed data
await sdk.shiva.buildOnBehalfOf({
  account: operatorAccount,
  params: {
    marketAddress: signedData.ovlMarket,
    isLong: signedData.isLong,
    collateral: signedData.collateral,
    leverage: signedData.leverage,
    priceLimit: signedData.priceLimit
  },
  onBehalfOf: {
    owner: signedData.owner,
    deadline: signedData.deadline,
    nonce: signedData.nonce,
    signature: signedData.signature
  }
});
```

Example with custom nonce:

```ts
const customNonce = 123n;

const signedData = await sdk.shiva.signBuildOnBehalfOf({
  // ... other params
  nonce: customNonce
});
```

### Cancel Nonce

If you need to invalidate a signed message before it expires:

```ts
await sdk.shiva.cancelNonce({
  account,
  nonce: nonceToCancel
});
```

### Emergency Withdrawal

In case of market shutdown, you can withdraw your collateral:

```ts
await sdk.shiva.emergencyWithdraw({
  account,
  marketAddress,
  positionId,
  owner: account
});
```

### Examples and Playground

You can find a complete playground with implemented examples in the `apps/overlay/src/shiva.tsx` file. This playground includes working implementations of all Shiva methods, including:

- Building and unwinding positions
- On-behalf-of operations with signatures
- Multiple position unwinding
- Emergency withdrawals
- Shiva approvals
- Nonce management

Feel free to use this playground as a reference for implementing Shiva functionality in your application.
