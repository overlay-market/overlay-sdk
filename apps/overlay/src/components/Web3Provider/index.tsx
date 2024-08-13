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
        <ConnectionProvider>{children}</ConnectionProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
