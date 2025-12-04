import { useMultichainContext } from '../state/multichain/useMultichainContext';
import { OverlaySDK, OverlaySDKCore } from 'overlay-sdk';
import { CHAINS, DEFAULT_CHAINID } from '../constants/chains';

export default function useSDK() {
  const { chainId } = useMultichainContext();
  
  const sdk = new OverlaySDK({
    chainId: chainId ? chainId as CHAINS : DEFAULT_CHAINID as number,
    rpcUrls: {
      [CHAINS.BscTestnet]: ['https://data-seed-prebsc-2-s3.bnbchain.org:8545', 'https://bsc-testnet.bnbchain.org'],
      [CHAINS.BscMainnet]: ['https://bsc-rpc.publicnode.com	'],
    },
    web3Provider: OverlaySDKCore.createWeb3Provider(chainId as CHAINS, window.ethereum),
    oneInchApiKey: process.env.REACT_APP_ONE_INCH_API_KEY,
    brokerId: 99
  });
  console.log('overlay-sdk initialized with chainId:', chainId)
  return sdk
  
}
