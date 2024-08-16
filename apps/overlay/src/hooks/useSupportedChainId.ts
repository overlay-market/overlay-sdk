import { useCallback } from "react"
import { SupportedChainId, WORKING_CHAINS } from "../constants/chains"

export function useSupportedChainId(chainId?: number): number | undefined {
  if (!chainId || WORKING_CHAINS.indexOf(SupportedChainId[chainId]) === -1) {
    return
  }

  return chainId as number
}

export function isSupportedChainId(chainId: number | null) {
  return !!chainId && WORKING_CHAINS.includes(SupportedChainId[chainId])
}

export function useIsSupportedChainIdCallback() {
  return useCallback(
    (chainId: number ) => {
      return isSupportedChainId(chainId)
    },
    [],
  )
}