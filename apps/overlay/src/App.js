import './App.css';
import PositionsTable from './positionTable';
import MarketsTable from './marketsTable';
import LiquidatedPositionsTable from './liquidatedTable';
import Market from './market';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Positions table</h1>
        <PositionsTable />

        <br />

        <h1>Markets table</h1>
        <MarketsTable />
        <br />        

        <h1>Market write methods</h1>
        <Market />
        <br />
        
        <h1>liquidated table</h1>
        <LiquidatedPositionsTable />
        <br />        
        
      </header>
    </div>
  );
}

export default App;
