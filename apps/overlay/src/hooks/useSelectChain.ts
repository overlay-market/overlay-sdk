// import { useSwitchChain } from 'hooks/useSwitchChain'
import { useCallback } from 'react'
// import { PopupType, addPopup, removePopup } from 'state/application/reducer'
import { useAppDispatch } from '../state/hooks'
import { UserRejectedRequestError } from 'viem'
import { useSwitchChain } from 'wagmi'

export default function useSelectChain() {
  const dispatch = useAppDispatch()
  const { switchChain} = useSwitchChain()

  return useCallback(
    async (targetChain: number) => {
      try {
        switchChain({ chainId: targetChain })
        // await switchChain(targetChain)
        return true
      } catch (error: any) {
        if (
          !error?.message?.includes("Request of type 'wallet_switchEthereumChain' already pending") &&
          !(error instanceof UserRejectedRequestError) /* request already pending */
        ) {
          console.log(error)
        }
        // TODO(WEB-3306): This UX could be improved to show an error state.
        return false
      }
    },
    [dispatch, switchChain],
  )
}
