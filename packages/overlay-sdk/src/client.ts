import { OverlaySDK } from "./sdk";
import { createPublicClient, http } from "viem";
import { arbitrumSepolia } from "viem/chains";

const rpcProvider = createPublicClient({
  chain: arbitrumSepolia,
  transport: http(),
});

const web3Provider = window.ethereum;


export const sdk = new OverlaySDK({
  chainId: 421614,
  rpcProvider,
  web3Provider,
});