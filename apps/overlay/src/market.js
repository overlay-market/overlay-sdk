import useSDK from './hooks/useSDK'
import { useAccount } from './hooks/useAccount';
import { toWei } from 'overlay-sdk';

const Market = () => {
  const { address: account } = useAccount();
  const sdk = useSDK()

  const getWeb3Provider = async () => {
    const chainId = await sdk.core.rpcProvider.getChainId()
    console.log('Chain data: ', chainId)
  }

  // OV token methods

  const checkBalance = async () => {
    try {
      const balance = await sdk.ov.balance(account)
      console.log("Balance: ", balance)
    } catch (error) {
      console.error('Error in checking balance', error)
    }
  }

  const transfer = async () => {
    try {
      const result = await sdk.ov.transfer({
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
      const result = await sdk.ov.populateTransfer({
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
      const result = await sdk.ov.simulateTransfer({
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
      const result = await sdk.ov.approve({
        account,
        amount: '0.001',
        to: '0x3a204d03e9b1fee01b8989333665b6c46cc1f79e',
      })
      console.log("Approve result: ", result)
    } catch (error) {
      console.error('Error in approving market', error)
    }
  }

  const populateApproveMarket = async () => {
    try {
      const result = await sdk.ov.populateApprove({
        account,
        amount: '0.001',
        to: '0x3a204d03e9b1fee01b8989333665b6c46cc1f79e',
      })
      console.log("Populate approve result: ", result)
    } catch (error) {
      console.error('Error in populating approve market', error)
    }
  }

  const simulateApproveMarket = async () => {
    try {
      const result = await sdk.ov.simulateApprove({
        account,
        amount: '0.001',
        to: '0x3a204d03e9b1fee01b8989333665b6c46cc1f79e',
      })
      console.log("Simulate approve result: ", result)
    } catch (error) {
      console.error('Error in simulating approve market', error)
    }
  }

  const totalSupply = async () => {
    try {
      const result = await sdk.ov.totalSupply()
      console.log("Total supply: ", result)
    } catch (error) {
      console.error('Error in getting total supply', error)
    }
  }

  // Market methods
  const collateral = toWei(0.1)
  const leverage = toWei(1)
  const slippage = 1

  const build = async () => {
    try {
      const res = await sdk.market.build({
        account,
        marketAddress: '0x3a204d03e9b1fee01b8989333665b6c46cc1f79e',
        collateral,
        leverage,
        isLong: true,
        priceLimit: (await sdk.trade.getPriceInfo("ETH Dominance", collateral, leverage, slippage, true)).minPrice,
       })
      console.log("Build result: ", res)
      console.log("Position ID: ", res.result.positionId)
    } catch (error) {
      console.error(JSON.stringify(error))
    }
  }

  const populateBuild = async () => {
    try {
      const result = await sdk.market.populateBuild({
        account,
        marketAddress: '0x3a204d03e9b1fee01b8989333665b6c46cc1f79e',
        collateral,
        leverage,
        isLong: true,
        priceLimit: (await sdk.trade.getPriceInfo("ETH Dominance", collateral, leverage, slippage, true)).minPrice,
      })
      console.log("Populate build result: ", result)
    } catch (error) {
      console.error('Error in populating build market', error)
    }
  }

  const simulateBuild = async () => {
    try {
      const result = await sdk.market.simulateBuild({
        account,
        marketAddress: '0x3a204d03e9b1fee01b8989333665b6c46cc1f79e',
        collateral,
        leverage,
        isLong: true,
        priceLimit: (await sdk.trade.getPriceInfo("ETH Dominance", collateral, leverage, slippage, true)).minPrice,
      })
      console.log("Simulate build result: ", result)
    } catch (error) {
      console.error('Error in simulating build market', error)
    }
  }

  const unwind = async () => {
    try {
      const result = await sdk.market.unwind({
        account,
        marketAddress: '0x3a204d03e9b1fee01b8989333665b6c46cc1f79e',
        positionId: 447250, // replace by a valid positionId
        fraction: 10057326762546514,
        priceLimit: 134306256321145264,
      })
      console.log("Unwind result: ", result)
    } catch (error) {
      console.error('Error in unwinding market', error)
    }
  }

  const populateUnwind = async () => {
    try {
      const result = await sdk.market.populateUnwind({
        account,
        marketAddress: '0x3a204d03e9b1fee01b8989333665b6c46cc1f79e',
        positionId: 447250, // replace by a valid positionId
        fraction: 10057326762546514,
        priceLimit: 134306256321145264,
      })
      console.log("Populate unwind result: ", result)
    } catch (error) {
      console.error('Error in populating unwind market', error)
    }
  }

  const simulateUnwind = async () => {
    try {
      const result = await sdk.market.simulateUnwind({
        account,
        marketAddress: '0x3a204d03e9b1fee01b8989333665b6c46cc1f79e',
        positionId: 447250, // replace by a valid positionId
        fraction: 10057326762546514,
        priceLimit: 134306256321145264,
      })
      console.log("Simulate unwind result: ", result)
    } catch (error) {
      console.error('Error in simulating unwind market', error)
    }
  }

  const emergencyWithdraw = async () => {
    try {
      const result = await sdk.market.emergencyWithdraw({
        account,
        marketAddress: '0x3a204d03e9b1fee01b8989333665b6c46cc1f79e',
        positionId: 447251, // replace by a valid positionId
      })
      console.log("Emergency withdraw result: ", result)
    } catch (error) {
      console.error('Error in emergency withdraw market', error)
    }
  }

  const populateEmergencyWithdraw = async () => {
    try {
      const result = await sdk.market.populateEmergencyWithdraw({
        account,
        marketAddress: '0x3a204d03e9b1fee01b8989333665b6c46cc1f79e',
        positionId: 447251, // replace by a valid positionId
      })
      console.log("Populate emergency withdraw result: ", result)
    } catch (error) {
      console.error('Error in populating emergency withdraw market', error)
    }
  }

  const simulateEmergencyWithdraw = async () => {
    try {
      const result = await sdk.market.simulateEmergencyWithdraw({
        account,
        marketAddress: '0x3a204d03e9b1fee01b8989333665b6c46cc1f79e',
        positionId: 447251, // replace by a valid positionId
      })
      console.log("Simulate emergency withdraw result: ", result)
    } catch (error) {
      console.error('Error in simulating emergency withdraw market', error)
    }
  }

  return (
    <div>
      <h3>web3 provider</h3>
      <button onClick={getWeb3Provider}>Get chain data</button>
      <h3>OV token methods</h3>
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
      <h3>Market methods</h3>
      <button onClick={build}>Build Market</button>
      <br />
      <button onClick={populateBuild}>Populate build Market</button>
      <br />
      <button onClick={simulateBuild}>Simulate build Market</button>
      <br />
      <button onClick={unwind}>Unwind Market</button>
      <br />
      <button onClick={populateUnwind}>Populate unwind Market</button>
      <br />
      <button onClick={simulateUnwind}>Simulate unwind Market</button>
      <br />
      <button onClick={emergencyWithdraw}>Emergency withdraw Market</button>
      <br />
      <button onClick={populateEmergencyWithdraw}>Populate emergency withdraw Market</button>
      <br />
      <button onClick={simulateEmergencyWithdraw}>Simulate emergency withdraw Market</button>
    </div>
  )
}

export default Market
