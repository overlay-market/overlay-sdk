import { useMemo } from 'react'
import { useAccount as useAccountWagmi, useChainId } from 'wagmi'
import { useSupportedChainId } from './useSupportedChainId';

export function useAccount() {
  const { chainId, ...rest } = useAccountWagmi()
  const fallbackChainId = useChainId()

  const supportedChainId = useSupportedChainId(chainId ?? fallbackChainId)

  return useMemo(
    () => ({
      ...rest,
      chainId: supportedChainId,
    }),
    [ rest, supportedChainId],
  )
}


