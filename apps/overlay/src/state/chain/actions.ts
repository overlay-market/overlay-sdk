import {createAction} from '@reduxjs/toolkit'

export enum ApplicationModal {
  WALLET,
}

export const updateChainId = createAction<{chainId: number | null}>('application/updateChainId')
export const setChainId = createAction<{chainId: number | null}>('application/setChainId')
export const setOpenModal = createAction<ApplicationModal | null>('application/setOpenModal')
