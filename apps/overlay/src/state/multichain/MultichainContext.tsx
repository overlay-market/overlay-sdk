import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { useAccount } from "../../hooks/useAccount";
import { MultichainContext } from "./types";
import { DEFAULT_CHAINID } from "../../constants/chains";

export function MultichainContextProvider({
  children,
  initialChainId,
}: PropsWithChildren<{
  initialChainId?: number;
}>) {
  const [selectedChainId, setSelectedChainId] = useState<
    number | undefined | null
  >(initialChainId);

  const account = useAccount();

  useEffect(() => {
    if (initialChainId) {
      setSelectedChainId(initialChainId);
    }
  }, [initialChainId, setSelectedChainId]);
  console.log({ selectedChainId, account }, account.chainId, DEFAULT_CHAINID);
  const value = useMemo(() => {
    return {
      setSelectedChainId,
      initialChainId,
      chainId: selectedChainId ?? account.chainId ?? DEFAULT_CHAINID,
      isMultichainContext: true,
    };
  }, [initialChainId, account.chainId, selectedChainId]);

  return (
    <MultichainContext.Provider value={value}>
      {children}
    </MultichainContext.Provider>
  );
}
