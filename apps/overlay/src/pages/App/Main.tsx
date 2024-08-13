import "./App.css";
import logo from "../../logo.png";
import { useAccount } from "../../hooks/useAccount";
import { useAccount as useWagmiAccount } from "wagmi";

function Main() {
  const { account, chainId } = useAccount();
  const { address } = useWagmiAccount();

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
        <p>current address - {address}</p>
      </header>
    </div>
  );
}

export default Main;
