import { Chain, createPublicClient, http } from 'viem'
import { useMultichainContext } from '../state/multichain/useMultichainContext';
import { OverlaySDK, OverlaySDKCore } from 'overlay-sdk';
import { CHAINS, DEFAULT_CHAINID,  VIEM_CHAINS } from '../constants/chains';

export default function useSDK() {
  const { chainId } = useMultichainContext();
  
  const sdk = new OverlaySDK({
    chainId: chainId ? chainId as CHAINS : DEFAULT_CHAINID as number,
    rpcUrls: {
      [CHAINS.Bartio]: 'https://bartio.rpc.berachain.com',
      [CHAINS.BerachainMainnet]: 'https://rpc.berachain.com',
      [CHAINS.ArbitrumSepolia]: 'https://sepolia-rollup.arbitrum.io/rpc',
    },
    web3Provider: OverlaySDKCore.createWeb3Provider(chainId as CHAINS, window.ethereum),
    brokerId: 99
  });
  console.log('overlay-sdk initialized with chainId:', chainId)
  return sdk
  
}