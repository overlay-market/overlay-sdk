import "./App.css";
import { OverlaySDK } from "overlay-sdk";
import { createPublicClient, http } from "viem";
import { arbitrumSepolia } from "viem/chains";
import { useEffect, useState } from "react";
import logo from "../../logo.png";
import { useAccount } from "../../hooks/useAccount";
import {
  useAccount as useWagmiAccount,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useConnect,
  Connector,
} from "wagmi";

function Main() {
  const { account, chainId } = useAccount();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useWagmiAccount();

  const { connectors, connect } = useConnect();

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
        <div>
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      </header>
      {!isConnected &&
        connectors.map((connector) => (
          <WalletOption
            key={connector.uid}
            connector={connector}
            onClick={() => connect({ connector })}
          />
        ))}
    </div>
  );
}

function WalletOption({
  connector,
  onClick,
}: {
  connector: Connector;
  onClick: () => void;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  return (
    <button disabled={!ready} onClick={onClick}>
      {connector.name}
    </button>
  );
}

export default Main;
