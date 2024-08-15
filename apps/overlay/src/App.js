import logo from './logo.png';
import './App.css';
import { OverlaySDK } from 'overlay-sdk';
import { createPublicClient, http } from 'viem';
import { arbitrumSepolia } from 'viem/chains';
import {useEffect, useState} from 'react'
import PositionsTable from './positionTable';

function App() {
  const [account, setAccount] = useState()

  const rpcProvider = createPublicClient({
    chain: arbitrumSepolia,
    transport: http(),
  });
  
  const web3Provider = window.ethereum;

  const sdk = new OverlaySDK({
    chainId: 421614,
    rpcProvider,
    web3Provider
  });

  console.log("market factor: ", sdk.market.factory("0x6aa41b8f2f858723aafcf388a90d34d1cb1162d9"))

  console.log("market state: ", sdk.state.getFactory("0x2878837ea173e8bd40db7cee360b15c1c27deb5a"))
  const getWeb3Address = async () => {
    const address = await sdk.core.getWeb3Address()
    setAccount(address)
  }

  useEffect(() => {
    try {
      getWeb3Address()
    } catch (error) {
      console.error('Error in getting web3 address', error)
    }
  },[])

  console.log({account})

  const testFunctionResult = sdk.test_module.testFunction()
  console.log({testFunctionResult})
  sdk.test_module.consoleTestModule()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Positions table</h1>
        <PositionsTable />
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Working on ...
        </p>
        <p>
          <code>overlay-sdk</code>
        </p>
        <p>
          current account - {account}
        </p>
        <p>
          current chainId - {sdk.core.chainId}
        </p>
        
      </header>
    </div>
  );
}

export default App;
