import {useCallback, useMemo} from 'react'
import {useDispatch} from 'react-redux'
import {AppState} from '../state'
import {ApplicationModal, updateChainId} from './actions'
import {useAppSelector, useAppDispatch} from '../hooks'
import {setOpenModal,  setChainId} from './actions'



export function useModalOpen(modal: ApplicationModal): boolean {
  const openModal = useAppSelector((state: AppState) => state.chain.openModal)
  return openModal === modal
}

export function useToggleModal(modal: ApplicationModal): () => void {
  const open = useModalOpen(modal)
  const dispatch = useAppDispatch()
  return useCallback(() => dispatch(setOpenModal(open ? null : modal)), [dispatch, modal, open])
}

export function useWalletModalToggle(): () => void {
  return useToggleModal(ApplicationModal.WALLET)
}

export function useSetChainId(): (chainId: number | null) => void {
  const dispatch = useDispatch()
  return useCallback(
    (chainId: number | null) => {
      // dispatch(updateChainId({chainId}))
      dispatch(setChainId({chainId}))
    },
    [dispatch],
  )
}

export function useChainState(): AppState['chain'] {
  return useAppSelector(state => state.chain)
}

export function useChainIdLocal() {
  const {chainIdLocal} = useChainState()
  return chainIdLocal
}
