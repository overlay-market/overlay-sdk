import { createContext, Dispatch, SetStateAction } from "react"
import { DEFAULT_CHAINID } from "../../constants/chains"
import { Chain } from "viem"

type MultichainContextType = {
  setSelectedChainId: Dispatch<SetStateAction<number | undefined | null>>
    
  // The chainId of the context - can be different from the connected Chain ID
  // if multichain UX is enabled, otherwise it will be the same as the connected chain ID
  chainId?: number | Chain
  // The initial chain ID - used by TDP and PDP pages to keep swap scoped to the initial chain
  initialChainId?: number | Chain
  // Components may use swap and limit context while outside of the context
  // this flag is used to determine if we should fallback to account.chainId
  // instead of using the context chainId
  isMultichainContext: boolean
}

export const MultichainContext = createContext<MultichainContextType>({
  setSelectedChainId: () => undefined,
  chainId: DEFAULT_CHAINID,
  initialChainId: DEFAULT_CHAINID,
  isMultichainContext: false,
})