import { type Chain } from "viem";
import { mainnet, arbitrum, arbitrumSepolia, berachainTestnetbArtio } from "viem/chains";

export enum CHAINS {
  Mainnet = 1,
  Arbitrum = 42161,
  ArbitrumSepolia = 421614,
  Bartio = 80084,
}

export const SUPPORTED_CHAINS: CHAINS[] = [
  CHAINS.Mainnet,
  CHAINS.Arbitrum,
  CHAINS.ArbitrumSepolia,
  CHAINS.Bartio
];

export const VIEM_CHAINS: { [key in CHAINS]: Chain } = {
  [CHAINS.Mainnet]: mainnet,
  [CHAINS.Arbitrum]: arbitrum,
  [CHAINS.ArbitrumSepolia]: arbitrumSepolia,
  [CHAINS.Bartio]: berachainTestnetbArtio,
};

export const enum OVERLAY_CONTRACT_NAMES {
  overlayV1Market = "overlayV1Market",
}

export const NOOP = () => {};