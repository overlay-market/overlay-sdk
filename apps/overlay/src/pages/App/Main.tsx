import "./App.css";
import logo from "../../logo.png";
import { useAccount } from "../../hooks/useAccount";
import { useChainId, useAccount as useWagmiAccount } from "wagmi";

function Main() {
  const { address: account, chainId } = useAccount();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Working on ...</p>
        <p>
          <code>overlay-sdk</code>
        </p>
        <p>current account - {account}</p>
        <p>current chainId - {chainId}</p>
      </header>
    </div>
  );
}

export default Main;
