import { wagmiConfig } from "./wagmi";
import { ReactNode } from "react";
import { WagmiProvider } from "wagmi";
import { ConnectionProvider } from "../../hooks/useConnect";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Web3Provider({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ConnectionProvider>
          {/* <Updater /> */}
          {children}
        </ConnectionProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

/** A component to run hooks under the Web3ReactProvider context. */
// function Updater() {
//   const account = useAccount();
//   const provider = useEthersWeb3Provider();

//   const isSupportedChain = useIsSupportedChainId(account.chainId);
//   const { connector } = useAccount();
//   const { pathname } = useLocation();
//   const currentPage = getCurrentPageFromLocation(pathname);
//   const analyticsContext = useTrace();
//   const networkProvider =
//     isSupportedChain && account.chainId
//       ? RPC_PROVIDERS[account.chainId]
//       : undefined;

//   const updateRecentConnectorId = useUpdateAtom(recentConnectorIdAtom);
//   useEffect(() => {
//     if (connector) {
//       updateRecentConnectorId(connector.id);
//     }
//   }, [connector, updateRecentConnectorId]);

//   // Trace RPC calls (for debugging).
//   const shouldTrace = useFeatureFlag(FeatureFlags.TraceJsonRpc);
//   useEffect(() => {
//     if (shouldTrace) {
//       provider?.on("debug", trace);
//       if (provider !== networkProvider) {
//         networkProvider?.on("debug", trace);
//       }
//     }
//     return () => {
//       provider?.off("debug", trace);
//       networkProvider?.off("debug", trace);
//     };
//   }, [analyticsContext, networkProvider, provider, shouldTrace]);

//   const previousConnectedChainId = usePrevious(account.chainId);
//   useEffect(() => {
//     const chainChanged =
//       previousConnectedChainId && previousConnectedChainId !== account.chainId;
//     if (chainChanged) {
//       sendAnalyticsEvent(InterfaceEventName.CHAIN_CHANGED, {
//         result: WalletConnectionResult.SUCCEEDED,
//         wallet_address: account.address,
//         wallet_type: connector?.name ?? "Network",
//         chain_id: account.chainId,
//         previousConnectedChainId,
//         page: currentPage,
//       });
//     }
//   }, [
//     account.address,
//     account.chainId,
//     connector,
//     currentPage,
//     previousConnectedChainId,
//   ]);

//   // Send analytics events when the active account changes.
//   const previousAccount = usePrevious(account.address);
//   const [connectedWallets, addConnectedWallet] = useConnectedWallets();
//   useEffect(() => {
//     if (account.address && account.address !== previousAccount) {
//       const walletType = connector?.name ?? "Network";
//       const peerWalletAgent = provider
//         ? getWalletMeta(provider)?.agent
//         : undefined;

//       const isReconnect = connectedWallets.some(
//         (wallet) =>
//           wallet.account === account.address && wallet.walletType === walletType
//       );

//       provider
//         ?.send("web3_clientVersion", [])
//         .then((clientVersion) => {
//           setUserProperty(CustomUserProperties.WALLET_VERSION, clientVersion);
//         })
//         .catch((error) => {
//           logger.warn(
//             "Web3Provider",
//             "Updater",
//             "Failed to get client version",
//             error
//           );
//         });

//       // User properties *must* be set before sending corresponding event properties,
//       // so that the event contains the correct and up-to-date user properties.
//       setUserProperty(CustomUserProperties.WALLET_ADDRESS, account.address);
//       setUserProperty(
//         CustomUserProperties.ALL_WALLET_ADDRESSES_CONNECTED,
//         account.address,
//         true
//       );

//       setUserProperty(CustomUserProperties.WALLET_TYPE, walletType);
//       setUserProperty(
//         CustomUserProperties.PEER_WALLET_AGENT,
//         peerWalletAgent ?? ""
//       );
//       if (account.chainId) {
//         setUserProperty(CustomUserProperties.CHAIN_ID, account.chainId);
//         setUserProperty(
//           CustomUserProperties.ALL_WALLET_CHAIN_IDS,
//           account.chainId,
//           true
//         );
//       }

//       sendAnalyticsEvent(InterfaceEventName.WALLET_CONNECTED, {
//         result: WalletConnectionResult.SUCCEEDED,
//         wallet_address: account.address,
//         wallet_type: walletType,
//         is_reconnect: isReconnect,
//         peer_wallet_agent: peerWalletAgent,
//         page: currentPage,
//       });

//       addConnectedWallet({ account: account.address, walletType });
//     }
//   }, [
//     account.address,
//     addConnectedWallet,
//     currentPage,
//     account.chainId,
//     connectedWallets,
//     connector,
//     previousAccount,
//     provider,
//   ]);

//   return null;
// }

// function trace(event: any) {
//   if (!event?.request) {
//     return
//   }
//   const { method, id, params } = event.request
//   logger.debug('Web3Provider', 'provider', 'trace', { method, id, params })
// }
