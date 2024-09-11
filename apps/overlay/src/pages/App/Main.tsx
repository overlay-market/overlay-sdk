import "./App.css";
import { useAccount } from "../../hooks/useAccount";
import { MultichainContextProvider } from "../../state/multichain/MultichainContext";
import { useMultichainContext } from "../../state/multichain/useMultichainContext";
import PositionsTable from "../../positionTable";
import MarketsTable from "../../marketsTable";

function Main() {
  const { address: account, chainId } = useAccount();
  const { chainId: contextChainID } = useMultichainContext();
  console.log({ contextChainID, chainId });
  return (
    <MultichainContextProvider initialChainId={contextChainID as number}>
      <div className="App">
        <header className="App-header">
          <h1>Positions table</h1>
          <PositionsTable />

          <br />

          <h1>Markets table</h1>
          <MarketsTable />
          <br />
          <p>current account - {account}</p>
          <p>useAccount chainId - {chainId}</p>
          <p>Context chainId - {contextChainID as number}</p>
        </header>
      </div>
    </MultichainContextProvider>
  );
}

export default Main;
