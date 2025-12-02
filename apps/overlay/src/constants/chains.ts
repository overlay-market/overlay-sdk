import { type Chain } from 'viem';
import { bscTestnet, bsc } from 'viem/chains';

export enum SupportedChainId {
  BSC_TESTNET = 97,
  BSC_MAINNET = 56,
}

export const DEFAULT_NET = SupportedChainId[56]
export const DEFAULT_CHAINID: number | Chain = SupportedChainId.BSC_MAINNET

export const WORKING_CHAINS = [
  SupportedChainId[SupportedChainId.BSC_TESTNET],
  SupportedChainId[SupportedChainId.BSC_MAINNET],
]

export enum CHAINS {
  BscTestnet = 97,
  BscMainnet = 56,
}

export const VIEM_CHAINS: { [key in CHAINS]: Chain | number} = {
  [CHAINS.BscTestnet]: bscTestnet,
  [CHAINS.BscMainnet]: bsc,
};

