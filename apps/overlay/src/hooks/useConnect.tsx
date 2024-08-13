import { useDisconnect } from "./useDisconnect";
import { PropsWithChildren, createContext, useContext, useEffect } from "react";
import { UserRejectedRequestError } from "viem";
import {
  ResolvedRegister,
  UseConnectReturnType,
  useConnect as useConnectWagmi,
} from "wagmi";

const ConnectionContext = createContext<
  UseConnectReturnType<ResolvedRegister["config"]> | undefined
>(undefined);

export function ConnectionProvider({ children }: PropsWithChildren) {
  const { disconnect } = useDisconnect();

  const connection = useConnectWagmi({
    mutation: {
      onMutate({ connector }) {
        console.log(`Connection activating: ${connector.name}`);
      },
      onSuccess(_, { connector }) {
        console.log(`Connection activated: ${connector.name}`);
      },
      onError(error, { connector }) {
        if (error instanceof UserRejectedRequestError) {
          connection.reset();
          return;
        }
        console.log(`Connection failed: ${connector.name}`, error.message);
      },
    },
  });

  useEffect(() => {
    if (connection.isPending) {
      connection.reset();
      disconnect();
    }
  }, [connection, disconnect]);

  return (
    <ConnectionContext.Provider value={connection}>
      {children}
    </ConnectionContext.Provider>
  );
}

/**
 * Wraps wagmi.useConnect in a singleton provider to provide the same connect state to all callers.
 * @see {@link https://wagmi.sh/react/api/hooks/useConnect}
 */
export function useConnect() {
  const value = useContext(ConnectionContext);
  if (!value) {
    throw new Error("useConnect must be used within a ConnectionProvider");
  }
  return value;
}
