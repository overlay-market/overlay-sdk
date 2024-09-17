import { useAccount } from "../../hooks/useAccount";
import { useContext } from "react";
import { MultichainContext } from "./types";

export function useMultichainContext() {
  const account = useAccount();
  const context = useContext(MultichainContext);

  return {
    ...context,
    chainId: context.isMultichainContext ? context.chainId : account.chainId,
  };
}
