import { Chain, createPublicClient, http } from 'viem'
import { useMultichainContext } from '../state/multichain/useMultichainContext';
import { OverlaySDK, OverlaySDKCore } from 'overlay-sdk';
import { CHAINS, DEFAULT_CHAINID,  VIEM_CHAINS } from '../constants/chains';

export default function useSDKWithShiva() {
  const { chainId } = useMultichainContext();

  const rpcProvider = createPublicClient({
    chain: VIEM_CHAINS[chainId as keyof typeof VIEM_CHAINS ?? DEFAULT_CHAINID as keyof typeof VIEM_CHAINS] as Chain,
    transport: http(),
  });
  
  const sdk = new OverlaySDK({
    chainId: chainId ? chainId as CHAINS : DEFAULT_CHAINID as number,
    rpcProvider,
    web3Provider: OverlaySDKCore.createWeb3Provider(chainId as CHAINS, window.ethereum),
    brokerId: 7777,
    useShiva: true,
  });
  console.log('overlay-sdk initialized with chainId:', chainId)
  return sdk
  
}