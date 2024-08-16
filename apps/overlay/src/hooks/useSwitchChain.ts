import { useIsSupportedChainIdCallback } from './useSupportedChainId'
import { useCallback } from 'react'
import { useSwitchChain as useSwitchChainWagmi } from 'wagmi'
import { useAccount } from './useAccount'
import { useAppDispatch } from '../state/hooks'

export function useSwitchChain() {
  const dispatch = useAppDispatch()
  const isSupportedChainCallback = useIsSupportedChainIdCallback()
  const { switchChain } = useSwitchChainWagmi()
  const { connector } = useAccount()
  
  return useCallback(
    async (chainId: number) => {
      const isSupportedChain = isSupportedChainCallback(chainId)
      if (!isSupportedChain) {
        throw new Error(`Chain ${chainId} not supported for connector (${connector?.name})`)
      }
      switchChain( {chainId: chainId as number})    
      return true    
    },    
    [
      isSupportedChainCallback,
      connector?.name,
      dispatch,
      switchChain,      
    ],
  )
}
