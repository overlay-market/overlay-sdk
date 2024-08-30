import logo from './logo.png';
import './App.css';
import { OverlaySDK } from 'overlay-sdk';
import { createPublicClient, http } from 'viem';
import { arbitrumSepolia } from 'viem/chains';
import {useEffect, useState} from 'react'
import PositionsTable from './positionTable';
import { getActiveMarkets, getActiveMarkets2 } from "overlay-sdk";


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


  useEffect(() => {
    const fetchData = async () => {
      try {
        const activeMarkets = await getActiveMarkets();
        const activeMarkets2 = await getActiveMarkets2();
       
        console.log({activeMarkets, activeMarkets2})
        
      } catch (error) {
        console.error("Error fetching positions:", error);
        if (
          error instanceof Error &&
          error.message.includes("auth error: payment required")
        ) {
          console.error(
            "API key payment required. Please update your subscription or contact support."
          );
        }
      }
    };

    fetchData();
  }, []);

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
