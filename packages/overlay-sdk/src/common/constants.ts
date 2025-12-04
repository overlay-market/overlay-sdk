import { type Chain } from "viem";
import { bscTestnet, bsc } from "viem/chains";

export enum CHAINS {
  BscTestnet = 97,
  BscMainnet = 56
}

export const SUPPORTED_CHAINS: CHAINS[] = [
  CHAINS.BscTestnet,
  CHAINS.BscMainnet
];

export const VIEM_CHAINS: { [key in CHAINS]: Chain } = {
  [CHAINS.BscTestnet]: bscTestnet,
  [CHAINS.BscMainnet]: bsc
};

export const enum OVERLAY_CONTRACT_NAMES {
  overlayV1Market = "overlayV1Market",
}

export const NOOP = () => {};