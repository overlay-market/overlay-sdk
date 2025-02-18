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
  chainId: CHAINS.Bartio,
  rpcUrls: {
    [CHAINS.ArbitrumSepolia]: 'https://arb-sepolia.g.alchemy.com/v2/xxx',
    [CHAINS.Bartio]: 'https://bera-testnet.nodeinfra.com',
  },
  web3Provider,
});
```

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
s
You can find a complete playground with implemented examples in the `apps/overlay/src/shiva.tsx` file. This playground includes working implementations of all Shiva methods, including:

- Building and unwinding positions
- On-behalf-of operations with signatures
- Multiple position unwinding
- Emergency withdrawals
- Shiva approvals
- Nonce management

Feel free to use this playground as a reference for implementing Shiva functionality in your application.