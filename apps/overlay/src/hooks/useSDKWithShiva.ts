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
    },
    web3Provider: OverlaySDKCore.createWeb3Provider(chainId as CHAINS, window.ethereum),
    brokerId: 7777,
    useShiva: true,
  });
  console.log('overlay-sdk initialized with chainId:', chainId)
  return sdk
  
}