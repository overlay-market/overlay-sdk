// import { useSwitchChain } from 'hooks/useSwitchChain'
import { useCallback } from 'react'
// import { PopupType, addPopup, removePopup } from 'state/application/reducer'
import { useAppDispatch } from '../state/hooks'
import { UserRejectedRequestError } from 'viem'
import { useSwitchChain } from './useSwitchChain'

export default function useSelectChain() {
  const dispatch = useAppDispatch()
  const  switchChain = useSwitchChain()

  return useCallback(
     async (targetChain: number) => {
      try {
        switchChain(targetChain)
        return true
      } catch (error: any) {
        if (
          !error?.message?.includes("Request of type 'wallet_switchEthereumChain' already pending") &&
          !(error instanceof UserRejectedRequestError) /* request already pending */
        ) {
          console.log(error)
        }
        return false
      }
    },
    [dispatch, switchChain],
  )
}
