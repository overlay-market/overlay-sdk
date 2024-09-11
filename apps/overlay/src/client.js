import { OverlaySDK } from "overlay-sdk";
import { createPublicClient, http } from "viem";
import { arbitrumSepolia, berachainTestnetbArtio } from "viem/chains";

// const rpcProvider = createPublicClient({
//   chain: arbitrumSepolia,
//   transport: http(),
// });

// const web3Provider = window.ethereum;

// export const sdk = new OverlaySDK({
//   chainId: 421614,
//   rpcProvider,
//   web3Provider
// });

const rpcProvider = createPublicClient({
  chain: berachainTestnetbArtio,
  transport: http(),
});

const web3Provider = window.ethereum;

export const sdk = new OverlaySDK({
  chainId: 80084,
  rpcProvider,
  web3Provider
});