import { Chain, createPublicClient, http } from 'viem'
import { useMultichainContext } from '../state/multichain/useMultichainContext';
import { OverlaySDK, OverlaySDKCore } from 'overlay-sdk';
import { CHAINS, DEFAULT_CHAINID } from '../constants/chains';

export default function useSDKWithShiva() {
  const { chainId } = useMultichainContext();

  const sdk = new OverlaySDK({
    chainId: chainId ? chainId as CHAINS : DEFAULT_CHAINID as number,
    rpcUrls: {
      [CHAINS.Bartio]: 'https://bartio.rpc.berachain.com',
      [CHAINS.BerachainMainnet]: 'https://rpc.berachain.com',
      [CHAINS.Bepolia]: 'https://bepolia.rpc.berachain.com',
      [CHAINS.ArbitrumSepolia]: 'https://sepolia-rollup.arbitrum.io/rpc',
      [CHAINS.BscTestnet]: ['https://bsctestapi.terminet.io/rpc', 'https://bsc-testnet.bnbchain.org'],
    },
    web3Provider: OverlaySDKCore.createWeb3Provider(chainId as CHAINS, window.ethereum),
    brokerId: 7777,
    useShiva: true,
  });
  console.log('overlay-sdk initialized with chainId:', chainId)
  return sdk
  
}