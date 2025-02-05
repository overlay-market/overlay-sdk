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