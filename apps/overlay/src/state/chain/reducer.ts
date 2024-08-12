import {createReducer} from '@reduxjs/toolkit'
import {
  updateChainId,
  setChainId,
  setOpenModal,
  ApplicationModal
} from './actions'

export interface ChainState {
  readonly chainId: number | null
  readonly chainIdLocal: number | null
  readonly openModal: ApplicationModal | null
}

const initialState: ChainState = {
  chainId: 1,
  chainIdLocal: null,
  openModal: null,
}

export default createReducer(initialState, builder =>
  builder
    .addCase(updateChainId, (state, action) => {
      const {chainId} = action.payload
      state.chainId = chainId
    })
    .addCase(setOpenModal, (state, action) => {
      state.openModal = action.payload
    })
    .addCase(setChainId, (state, action) => {
      const {chainId} = action.payload
      state.chainIdLocal = chainId
    }),    
)
