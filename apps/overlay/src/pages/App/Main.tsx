import "./App.css";
import logo from "../../logo.png";
import { useAccount } from "../../hooks/useAccount";
import { MultichainContextProvider } from "../../state/multichain/MultichainContext";
import { useMultichainContext } from "../../state/multichain/useMultichainContext";

function Main() {
  const { address: account, chainId } = useAccount();
  const { chainId: contextChainID } = useMultichainContext();
  console.log({ contextChainID, chainId });
  return (
    <MultichainContextProvider initialChainId={contextChainID as number}>
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>current account - {account}</p>
          <p>useAccount chainId - {chainId}</p>
          <p>Context chainId - {contextChainID as number}</p>
        </header>
      </div>
    </MultichainContextProvider>
  );
}

export default Main;
