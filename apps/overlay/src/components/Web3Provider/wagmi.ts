import { createClient } from 'viem'
import { http, createConfig } from 'wagmi'
import { arbitrum, mainnet, arbitrumSepolia, berachainTestnetbArtio, berachainBepolia } from 'wagmi/chains'
import { injected, metaMask, walletConnect } from 'wagmi/connectors'

const projectId = <string>process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID

export const wagmiConfig = createConfig({
  chains: [mainnet, arbitrum, arbitrumSepolia, berachainTestnetbArtio, berachainBepolia],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
  ],
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [arbitrumSepolia.id]: http(),
    [berachainTestnetbArtio.id]: http(),
    [berachainBepolia.id]: http(),
  },
  // client({ chain }) {
  //   return createClient({
  //     chain,
  //     batch: { multicall: true },
  //     pollingInterval: 12_000,
  //     transport: http(chain.rpcUrls.default.http[0])
  //   })
  // },
})