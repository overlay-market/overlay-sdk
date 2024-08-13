import { SupportedChainId, WORKING_CHAINS } from "../constants/chains"

export function useSupportedChainId(chainId?: number): number | undefined {
  if (!chainId || WORKING_CHAINS.indexOf(SupportedChainId[chainId]) === -1) {
    return
  }

  return chainId as number
}