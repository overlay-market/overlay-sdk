import { OverlaySDK } from "overlay-sdk";
import { createPublicClient, http } from "viem";
import { arbitrumSepolia } from "viem/chains";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Header from "./pages/App/Header";
import Main from "./pages/App/Main";

export const AppWrapper = styled.div`
  background-color: #202431;
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  max-width: calc(
    100vw - (100vw - 100%)
  ); //the width of the scrollbar is subtracted
  position: relative;
`;

function App() {
  const [account, setAccount] = useState<`0x${string}` | undefined>(undefined);

  const rpcProvider = createPublicClient({
    chain: arbitrumSepolia,
    transport: http(),
  });

  const web3Provider = window.ethereum;

  const sdk = new OverlaySDK({
    chainId: 421614,
    rpcProvider,
    web3Provider,
  });

  const getWeb3Address = async () => {
    const address = await sdk.core.getWeb3Address();
    setAccount(address);
  };

  useEffect(() => {
    try {
      getWeb3Address();
    } catch (error) {
      console.error("Error in getting web3 address", error);
    }
  }, []);

  return (
    <AppWrapper>
      <Header />
      <Main />
    </AppWrapper>
  );
}

export default App;
