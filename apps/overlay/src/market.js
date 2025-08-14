import useSDK from './hooks/useSDK'
import { useAccount } from './hooks/useAccount';
import { toWei } from 'overlay-sdk';
import { useState } from 'react';

const Market = () => {
  const { address: account } = useAccount();
  const sdk = useSDK()

  const [activeMarkets, setActiveMarkets] = useState([]);
  const [collateral, setCollateral] = useState(0.01);
  const [leverage, setLeverage] = useState(2);
  const [slippage, setSlippage] = useState(1);
  const [marketAddress, setMarketAddress] = useState('');
  const [marketName, setMarketName] = useState('');
  const [isLong, setIsLong] = useState(true);
  const [positionId, setPositionId] = useState(0n);
  const [fraction, setFraction] = useState(0n);
  const [buildHash, setBuildHash] = useState('');
  const [unwindHash, setUnwindHash] = useState('');
  const [ovlPrice, setOvlPrice] = useState(0);

  // Fetch active markets and display their id and marketName
  const fetchActiveMarkets = async () => {
    try {
      const markets = await sdk.markets.getActiveMarkets();
      setActiveMarkets(markets);
      console.log("Active Markets", markets);
    } catch (error) {
      console.error('Error fetching active markets', error);
    }
  }

  // Build market
  const buildMarket = async () => {
    try {
      const res = await sdk.market.build({
        account,
        marketAddress,
        collateral: toWei(collateral),
        leverage: toWei(leverage),
        isLong,
        priceLimit: (await sdk.trade.getPriceInfo(marketName, toWei(collateral), toWei(leverage), slippage, isLong)).minPrice,
      });
      console.log("Build result: ", res);
      setPositionId(res.result.positionId); // Show positionId
      setBuildHash(res.hash); // Show buildHash
    } catch (error) {
      console.error('Error building market', error);
    }
  }

  // Unwind market
  const unwindMarket = async () => {
    try {
      const result = await sdk.market.unwind({
        account,
        marketAddress,
        positionId,
        fraction: toWei(fraction),
        // get current price and multiply by slippage
        priceLimit: (await sdk.trade.getUnwindPrice(marketName, account, positionId, toWei(fraction), 1)),
      });
      console.log("Unwind result: ", result);
      setUnwindHash(result.hash); // Show unwindHash
    } catch (error) {
      console.error('Error in unwinding market', error);
    }
  }

  const multipleUnwind = async () => {
    try {
      const result = await sdk.market.unwindMultiple({
        positions: [
          {
            marketAddress: '0xd9b217fa8a9e8ef1c8558128029564e9a50f284d',
            positionId: 4680,
          },
          {
            marketAddress: '0x09e8641df1e963d0bb1267e51579fc2b4e3e60cd',
            positionId: 6868,
          },
        ],
        account,
        slippage: 1, // 1% slippage
        unwindPercentage: 1, // 100% unwind
      });

      console.log("Multiple unwind result: ", result);

      // await Promise.all(result).then((res) => {
      //   console.log("Multiple unwind result: ", res);
      // });
    } catch (error) {
      console.error('Error in multiple unwinding market', error);
    }
  }

  // OVL token methods

  const checkBalance = async () => {
    try {
      const balance = await sdk.ovl.balance(account)
      console.log("Balance: ", balance)
    } catch (error) {
      console.error('Error in checking balance', error)
    }
  }

  const transfer = async () => {
    try {
      const result = await sdk.ovl.transfer({
        account,
        amount: '0.00000000001',
        to: '0x33337473995D1E5Ad4D3290DbCe2C596e9558894',
      })
      console.log("Transfer result: ", result)
    } catch (error) {
      console.error('Error in transferring', error)
    }
  }

  const populateTransfer = async () => {
    try {
      const result = await sdk.ovl.populateTransfer({
        account,
        amount: '0.00000000001',
        to: '0x33337473995D1E5Ad4D3290DbCe2C596e9558894',
      })
      console.log("Populate transfer result: ", result)
    }
    catch (error) {
      console.error('Error in populating transfer', error)
    }
  }

  const simulateTransfer = async () => {
    try {
      const result = await sdk.ovl.simulateTransfer({
        account,
        amount: '0.00000000001',
        to: '0x33337473995D1E5Ad4D3290DbCe2C596e9558894',
      })
      console.log("Simulate transfer result: ", result)
    }
    catch (error) {
      console.error('Error in simulating transfer', error)
    }
  }

  const approveMarket = async () => {
    try {
      const result = await sdk.ovl.approve({
        account,
        amount: '0.001',
        to: marketAddress,
      })
      console.log("Approve result: ", result)
    } catch (error) {
      console.error('Error in approving market', error)
    }
  }

  const populateApproveMarket = async () => {
    try {
      const result = await sdk.ovl.populateApprove({
        account,
        amount: '0.001',
        to: marketAddress,
      })
      console.log("Populate approve result: ", result)
    } catch (error) {
      console.error('Error in populating approve market', error)
    }
  }

  const simulateApproveMarket = async () => {
    try {
      const result = await sdk.ovl.simulateApprove({
        account,
        amount: '0.001',
        to: marketAddress,
      })
      console.log("Simulate approve result: ", result)
    } catch (error) {
      console.error('Error in simulating approve market', error)
    }
  }

  const totalSupply = async () => {
    try {
      const result = await sdk.ovl.totalSupply()
      console.log("Total supply: ", result)
    } catch (error) {
      console.error('Error in getting total supply', error)
    }
  }

  const getOvlPrice = async () => {
    try {
      const price = await sdk.ovl.price()
      setOvlPrice(price)
      console.log("OVL Price: ", price)
    } catch (error) {
      console.error('Error getting OVL price', error)
    }
  }

  return (
    <div>
      <h3>ovl token methods</h3>
      <button onClick={checkBalance}>Check balance</button>
      <br />
      <button onClick={transfer}>Transfer</button>
      <br />
      <button onClick={populateTransfer}>Populate transfer</button>
      <br />
      <button onClick={simulateTransfer}>Simulate transfer</button>
      <br />
      <button onClick={approveMarket}>Approve Market</button>
      <br />
      <button onClick={populateApproveMarket}>Populate approve Market</button>
      <br />
      <button onClick={simulateApproveMarket}>Simulate approve Market</button>
      <br />
      <button onClick={totalSupply}>Total supply</button>
      <br />
      <button onClick={getOvlPrice}>Get OVL Price</button>
      {ovlPrice > 0 && <p>OVL Price: ${ovlPrice}</p>}
      <br />

      <h3>Market methods</h3>
      <input 
        type="text" 
        placeholder="Collateral" 
        value={collateral} 
        onChange={(e) => setCollateral(e.target.value)} 
      />
      <br />
      <input 
        type="text" 
        placeholder="Leverage" 
        value={leverage} 
        onChange={(e) => setLeverage(e.target.value)} 
      />
      <br />
      <input 
        type="text" 
        placeholder="Slippage" 
        value={slippage} 
        onChange={(e) => setSlippage(e.target.value)} 
      />
      <br />
      <input 
        type="text" 
        placeholder="Market Address" 
        value={marketAddress} 
        onChange={(e) => setMarketAddress(e.target.value)} 
      />
      <br />
      <input 
        type="text" 
        placeholder="Market Name" 
        value={marketName} 
        onChange={(e) => setMarketName(e.target.value)} 
      />
      <br />
      <select value={isLong} onChange={(e) => setIsLong(e.target.value === 'true')}>
        <option value="true">Long</option>
        <option value="false">Short</option>
      </select>
      <br />
      <button onClick={buildMarket}>Build Market</button>
      {positionId && <p>Position ID: {Number(positionId)}</p>}
      {buildHash && <p>Build Hash: {buildHash}</p>}
      <br />

      <h3>Unwind Market</h3>
      <input 
        type="text" 
        placeholder="Position ID" 
        value={positionId} 
        onChange={(e) => setPositionId(e.target.value)} 
      />
      <br />
      <input 
        type="text" 
        placeholder="Fraction" 
        value={fraction} 
        onChange={(e) => setFraction(e.target.value)} 
      />
      <br />
      <button onClick={multipleUnwind}>Unwind Market</button>
      {unwindHash && <p>Unwind Hash: {unwindHash}</p>}
      <br />

      <h3>Get Active Markets</h3>
      <button onClick={fetchActiveMarkets}>Get Active Markets</button>
      <ul>
        {activeMarkets.map((market, index) => (
          <li key={index}>
            {market.id}: {market.marketName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Market
