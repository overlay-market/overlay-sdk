import { createClient } from 'viem'
import { http, createConfig } from 'wagmi'
import { arbitrum, mainnet, arbitrumSepolia } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect, coinbaseWallet } from 'wagmi/connectors'

const projectId = <string>process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID

export const wagmiConfig = createConfig({
  chains: [mainnet, arbitrum, arbitrumSepolia],
  connectors: [
    injected(),
    walletConnect({ projectId }),
    metaMask(),
    safe(),
  ],
  // transports: {
  //   [mainnet.id]: http(),
  //   [arbitrum.id]: http(),
  //   [arbitrumSepolia.id]: http(),
  // },
  client({ chain }) {
    return createClient({
      chain,
      batch: { multicall: true },
      pollingInterval: 12_000,
      transport: http(chain.rpcUrls.default.http[0])
    })
  },
})