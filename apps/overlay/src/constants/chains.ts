import { type Chain } from 'viem';
import { mainnet, arbitrum, arbitrumSepolia, berachainTestnetbArtio, berachainBepolia, bscTestnet } from 'viem/chains';

import { defineChain } from 'viem'
import { berachain } from 'wagmi/chains';
 
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
  }
})

export enum SupportedChainId {
  MAINNET = 1, //at launch
  RINKEBY = 4, //pre-launch only
  GÖRLI = 5, //pre-launch only
  ARBITRUM = 42161,
  ARBITRUM_GÖRLI = 421613,
  ARBITRUM_SEPOLIA = 421614,
  IMOLA = 30732,
  BARTIO = 80084,
  BERACHAIN_MAINNET = 80094,
  BEPOLIA = 80069,
  BSC_TESTNET = 97,
}

export const DEFAULT_NET = SupportedChainId[421614]
export const DEFAULT_CHAINID: number | Chain = SupportedChainId.ARBITRUM_SEPOLIA

export const WORKING_CHAINS = [
  SupportedChainId[SupportedChainId.ARBITRUM_SEPOLIA], 
  SupportedChainId[SupportedChainId.IMOLA], 
  SupportedChainId[SupportedChainId.ARBITRUM], 
  SupportedChainId[SupportedChainId.MAINNET],
  SupportedChainId[SupportedChainId.BARTIO],
  SupportedChainId[SupportedChainId.BERACHAIN_MAINNET],
  SupportedChainId[SupportedChainId.BEPOLIA],
  SupportedChainId[SupportedChainId.BSC_TESTNET],
]

export enum CHAINS {
  Mainnet = 1,
  Arbitrum = 42161,
  ArbitrumSepolia = 421614,
  Bartio = 80084,
  Imola = 30732,
  BerachainMainnet = 80094,
  Bepolia = 80069,
  BscTestnet = 97
}

export const VIEM_CHAINS: { [key in CHAINS]: Chain | number} = {
  [CHAINS.Mainnet]: mainnet,
  [CHAINS.Arbitrum]: arbitrum,
  [CHAINS.ArbitrumSepolia]: arbitrumSepolia,
  [CHAINS.Bartio]: berachainTestnetbArtio,
  [CHAINS.Imola]: imola,
  [CHAINS.BerachainMainnet]: berachain,
  [CHAINS.Bepolia]: berachainBepolia,
  [CHAINS.BscTestnet]: bscTestnet
};

