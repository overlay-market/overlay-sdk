import { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { useAccount } from "../../hooks/useAccount";
import usePrevious from "../../hooks/usePrevious";
import { MultichainContext } from "./types";

export function MultichainContextProvider({
  children,
  initialChainId,
}: PropsWithChildren<{
  initialChainId?: number;
}>) {
  const [selectedChainId, setSelectedChainId] = useState<
    number | undefined | null
  >(initialChainId);
  const [isUserSelectedChainId, setIsUserSelectedChainId] =
    useState<boolean>(false);

  const account = useAccount();
  // const previousConnectedChainId = usePrevious(account.chainId);

  useEffect(() => {
    if (initialChainId) {
      setSelectedChainId(initialChainId);
    }
  }, [initialChainId, setSelectedChainId]);

  // const setMulticallUpdaterChainId = useUpdateAtom(
  //   multicallUpdaterSwapChainIdAtom
  // );

  // useEffect(() => {
  //   const chainId = selectedChainId ? account.chainId : undefined;
  //   setMulticallUpdaterChainId(chainId);
  // }, [account.chainId, selectedChainId, setMulticallUpdaterChainId]);

  const value = useMemo(() => {
    return {
      setSelectedChainId,
      initialChainId,
      chainId: selectedChainId ? account.chainId : undefined,
      isMultichainContext: true,
      isUserSelectedChainId,
      setIsUserSelectedChainId,
    };
  }, [initialChainId, account.chainId, selectedChainId, isUserSelectedChainId]);

  return (
    <MultichainContext.Provider value={value}>
      {children}
    </MultichainContext.Provider>
  );
}
