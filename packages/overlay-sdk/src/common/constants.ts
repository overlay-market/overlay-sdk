import { type Chain } from "viem";
import { mainnet, arbitrum, arbitrumSepolia, berachainTestnetbArtio, berachain, berachainBepolia } from "viem/chains";
import { defineChain } from 'viem'
 
export const imola = defineChain({
  id: 30732,
  name: 'Movement',
  nativeCurrency: {
    decimals: 18,
    name: 'MOVE',
    symbol: 'MOVE',
  },
  rpcUrls: {
    default: {
      http: ['https://overlay-rpc.devnet.imola.movementnetwork.xyz'],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://explorer.devnet.imola.movementlabs.xyz/#/?network=testnet' },
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11'
    }
  }
})

export enum CHAINS {
  Mainnet = 1,
  Arbitrum = 42161,
  ArbitrumSepolia = 421614,
  Bartio = 80084,
  Imola = 30732,
  BerachainMainnet = 80094,
  Bepolia = 80069
}

export const SUPPORTED_CHAINS: CHAINS[] = [
  CHAINS.Mainnet,
  CHAINS.Arbitrum,
  CHAINS.ArbitrumSepolia,
  CHAINS.Bartio,
  CHAINS.Imola,
  CHAINS.BerachainMainnet,
  CHAINS.Bepolia
];

export const VIEM_CHAINS: { [key in CHAINS]: Chain } = {
  [CHAINS.Mainnet]: mainnet,
  [CHAINS.Arbitrum]: arbitrum,
  [CHAINS.ArbitrumSepolia]: arbitrumSepolia,
  [CHAINS.Bartio]: berachainTestnetbArtio,
  [CHAINS.Imola]: imola,
  [CHAINS.BerachainMainnet]: berachain,
  [CHAINS.Bepolia]: berachainBepolia
};

export const enum OVERLAY_CONTRACT_NAMES {
  overlayV1Market = "overlayV1Market",
}

export const NOOP = () => {};