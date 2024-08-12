import { useEffect, useMemo, useState } from 'react'
import { UseAccountReturnType, useAccount as useAccountWagmi, useChainId, useEnsName } from 'wagmi'
import { OverlaySDK, CHAINS } from "overlay-sdk";
import { createPublicClient, http, type Chain } from "viem";
import { arbitrumSepolia } from "viem/chains";
import { DEFAULT_CHAINID, VIEM_CHAINS } from '../constants/chains';

export function useAccount() {
  const { chainId, address, ...rest } = useAccountWagmi()
  const fallbackChainId = useChainId()

  // const supportedChainId = useSupportedChainId(chainId ?? fallbackChainId)

  const [account, setAccount] = useState<`0x${string}` | undefined>(undefined);

  const rpcProvider = createPublicClient({
    chain: VIEM_CHAINS[chainId as keyof typeof VIEM_CHAINS ?? DEFAULT_CHAINID as keyof typeof VIEM_CHAINS] as Chain,
    // chain: arbitrumSepolia,
    transport: http(),
  });

  const web3Provider = window.ethereum;

  const sdk = new OverlaySDK({
    chainId: chainId ? chainId as CHAINS : DEFAULT_CHAINID as number,
    rpcProvider,
    web3Provider,
  });

  const getWeb3Address = async () => {
    const address = await sdk.core.getWeb3Address();
    console.log(address)
    setAccount(address);
  };

  useEffect(() => {
    try {
      getWeb3Address();
    } catch (error) {
      console.error("Error in getting web3 address", error);
    }
  }, []);
 
  return useMemo(
    () => ({
      account: account,
      chainId: chainId,
      address: address,
    }),
    [ chainId, address, account],
  )
}


