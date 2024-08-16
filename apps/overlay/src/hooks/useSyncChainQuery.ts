import { useEffect } from 'react'
import useSelectChain from './useSelectChain'
import usePrevious from './usePrevious'
import { useAccount } from './useAccount'
import { useMultichainContext } from '../state/multichain/useMultichainContext'

export default function useSyncChainQuery(chainIdRef: React.MutableRefObject<number | undefined>) {
  const account = useAccount()
  
  const { chainId: chainIdMultichainContext } = useMultichainContext()
  const prevConnectedChainId = usePrevious(chainIdMultichainContext)
  const prevAccountAddress = usePrevious(account.address)

  const selectChain = useSelectChain()
  
  useEffect(() => {
    if (account.address && !prevAccountAddress && prevConnectedChainId && account.chainId !== prevConnectedChainId) {
      chainIdRef.current = prevConnectedChainId as number
      selectChain(prevConnectedChainId as number)
    }
   }, [prevConnectedChainId, prevAccountAddress, account.address,  chainIdRef, selectChain, chainIdMultichainContext, account.chainId])

  useEffect(() => {
    if (chainIdRef.current || chainIdRef.current === account.chainId) {
      chainIdRef.current = undefined
      return
    }
  }, [
    account.chainId,
    account.isConnected,
    chainIdRef,
  ])
}
