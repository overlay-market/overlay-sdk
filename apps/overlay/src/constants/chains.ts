export enum SupportedChainId {
  MAINNET = 1, //at launch
  RINKEBY = 4, //pre-launch only
  GÖRLI = 5, //pre-launch only
  ARBITRUM = 42161,
  ARBITRUM_GÖRLI = 421613,
  ARBITRUM_SEPOLIA = 421614,
  IMOLA = 30732,
}

export const DEFAULT_NET = SupportedChainId[421614]
export const DEFAULT_CHAINID = SupportedChainId.ARBITRUM_SEPOLIA

export const WORKING_CHAINS = [SupportedChainId[SupportedChainId.ARBITRUM_SEPOLIA], SupportedChainId[SupportedChainId.IMOLA]]
