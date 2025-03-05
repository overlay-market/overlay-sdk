import { useState } from 'react'
import { useAccount } from './hooks/useAccount'
import { Address } from 'viem'
import { CHAINS, toWei } from 'overlay-sdk'
import { SHIVA_ADDRESS } from 'overlay-sdk/dist/constants'
import {
  BuildOnBehalfOfSignature,
  BuildSingleOnBehalfOfSignature,
  UnwindOnBehalfOfSignature,
} from 'overlay-sdk/dist/shiva/types'
import useSDKWithShiva from './hooks/useSDKWithShiva'

enum TransactionType {
  Normal = 'Normal',
  Populate = 'Populate',
  Simulate = 'Simulate',
}

const Shiva = () => {
  const { address: account } = useAccount()
  const sdk = useSDKWithShiva()

  const [collateral, setCollateral] = useState(0.01)
  const [leverage, setLeverage] = useState(2)
  const [slippage, setSlippage] = useState(1)
  const [marketAddress, setMarketAddress] = useState('')
  const [marketName, setMarketName] = useState('')
  const [isLong, setIsLong] = useState(true)
  const [positionId, setPositionId] = useState(0n)
  const [fraction, setFraction] = useState(0)
  const [buildHash, setBuildHash] = useState('')
  const [unwindHash, setUnwindHash] = useState('')
  const [amountToApprove, setAmountToApprove] = useState(0)
  const [signature, setSignature] = useState('')
  const [positionIds, setPositionIds] = useState<number[]>([])
  const [nonceToCancel, setNonceToCancel] = useState(0n)

  const [buildOnBehalfOfData, setBuildOnBehalfOfData] = useState<BuildOnBehalfOfSignature>()
  const [unwindOnBehalfOfData, setUnwindOnBehalfOfData] = useState<UnwindOnBehalfOfSignature>()
  const [buildSingleOnBehalfOfData, setBuildSingleOnBehalfOfData] =
    useState<BuildSingleOnBehalfOfSignature>()

  const shivaBuild = async (type: TransactionType = TransactionType.Normal) => {
    try {
      let res: any
      const buildParams = {
        account,
        marketAddress: marketAddress as Address,
        isLong: isLong,
        collateral: toWei(collateral),
        leverage: toWei(leverage),
        priceLimit: (
          await sdk.trade.getPriceInfo(
            marketName,
            toWei(collateral),
            toWei(leverage),
            slippage,
            isLong
          )
        ).minPrice as bigint,
      }
      
      if (type === TransactionType.Normal) {
        res = await sdk.market.build(buildParams)
      } else if (type === TransactionType.Populate) {
        res = await sdk.market.populateBuild(buildParams)
      } else if (type === TransactionType.Simulate) {
        res = await sdk.market.simulateBuild(buildParams)
      }

      console.log('Shiva build result', res)

      if (!res.result) {
        console.error('Shiva build not result')
        return
      }
      setPositionId(res.result.positionId) // Show positionId
      setBuildHash(res.hash) // Show buildHash
    } catch (error) {
      console.error('Error in shivaBuild', error)
    }
  }

  const shivaUnwind = async (type: TransactionType = TransactionType.Normal) => {
    try {
      let res: any
      const unwindParams = {
        account,
        marketAddress: marketAddress as Address,
        positionId: positionId,
        fraction: toWei(fraction),
        priceLimit: (await sdk.trade.getUnwindPrice(
          marketName,
          SHIVA_ADDRESS[CHAINS.Bartio],
          positionId,
          toWei(fraction),
          1
        )) as bigint,
      }
      
      if (type === TransactionType.Normal) {
        res = await sdk.market.unwind(unwindParams)
      } else if (type === TransactionType.Populate) {
        res = await sdk.market.populateUnwind(unwindParams)
      } else if (type === TransactionType.Simulate) {
        res = await sdk.market.simulateUnwind(unwindParams)
      }

      console.log('Shiva unwind result', res)

      if (!res.result) {
        console.error('Shiva unwind not result')
        return
      }
      setUnwindHash(res.hash) // Show unwindHash
    } catch (error) {
      console.error('Error in shivaUnwind', error)
    }
  }

  const shivaBuildSingle = async (type: TransactionType = TransactionType.Normal) => {
    try {
      let res: any
      const buildSingleParams = {
        account,
        params: {
          ovlMarket: marketAddress as Address,
          unwindPriceLimit: (await sdk.trade.getUnwindPrice(
            marketName,
            SHIVA_ADDRESS[CHAINS.Bartio],
            positionId,
            toWei(fraction),
            1
          )) as bigint,
          buildPriceLimit: (
            await sdk.trade.getPriceInfo(
              marketName,
              toWei(collateral),
              toWei(leverage),
              slippage,
              isLong
            )
          ).minPrice as bigint,
          collateral: toWei(collateral),
          leverage: toWei(leverage),
          previousPositionId: positionId,
        },
      }

      if (type === TransactionType.Normal) {
        res = await sdk.shiva.buildSingle(buildSingleParams)
      } else if (type === TransactionType.Populate) {
        res = await sdk.shiva.populateBuildSingle(buildSingleParams)
      } else if (type === TransactionType.Simulate) {
        res = await sdk.shiva.simulateBuildSingle(buildSingleParams)
      }

      console.log('Shiva build single result', res)
      if (!res.result) {
        console.error('Shiva build single not result')
        return
      }
      setBuildHash(res.hash) // Show buildHash
    } catch (error) {
      console.error('Error in shivaBuildSingle', error)
    }
  }

  const shivaEmergencyWithdraw = async (type: TransactionType = TransactionType.Normal) => {
    try {
      let res: any
      const emergencyWithdrawParams = {
        account,
        marketAddress: marketAddress as Address,
        positionId: positionId,
        owner: account as Address,
      }

      if (type === TransactionType.Normal) {
        res = await sdk.market.emergencyWithdraw(emergencyWithdrawParams)
      } else if (type === TransactionType.Populate) {
        res = await sdk.market.populateEmergencyWithdraw(emergencyWithdrawParams)
      } else if (type === TransactionType.Simulate) {
        res = await sdk.market.simulateEmergencyWithdraw(emergencyWithdrawParams)
      }

      console.log('Shiva emergency withdraw result', res)

      if (!res.result) {
        console.error('Shiva emergency withdraw not result')
        return
      }
    } catch (error) {
      console.error('Error in shivaEmergencyWithdraw', error)
    }
  }

  const approveShiva = async (type: TransactionType = TransactionType.Normal) => {
    try {
      let res: any
      const approveShivaParams = {
        account,
        amount: toWei(amountToApprove),
        }

      if (type === TransactionType.Normal) {
        res = await sdk.shiva.approveShiva(approveShivaParams)
      } else if (type === TransactionType.Populate) {
        res = await sdk.shiva.populateApproveShiva(approveShivaParams)
      } else if (type === TransactionType.Simulate) {
        res = await sdk.shiva.simulateApproveShiva(approveShivaParams)
      }

      console.log('Approve Shiva result', res)

      if (!res.result) {
        console.error('Approve Shiva not result')
        return
      }
    } catch (error) {
      console.error('Error in approveShiva', error)
    }
  }

  const signBuildOnBehalfOf = async () => {
    try {
      const data = await sdk.shiva.signBuildOnBehalfOf({
        collateral: toWei(collateral),
        leverage: toWei(leverage),
        deadline: new Date().getTime() + 1000 * 60 * 10,
        ovlMarket: marketAddress as Address,
        priceLimit: (
          await sdk.trade.getPriceInfo(
            marketName,
            toWei(collateral),
            toWei(leverage),
            slippage,
            isLong
          )
        ).minPrice as bigint,
        account: account as Address,
        isLong: isLong,
      })

      console.log('Sign build on behalf of result', data)

      setSignature(data.signature)
      setBuildOnBehalfOfData(data)
    } catch (error) {
      console.error('Error in signBuildOnBehalfOf', error)
    }
  }

  const signUnwindOnBehalfOf = async () => {
    try {
      const data = await sdk.shiva.signUnwindOnBehalfOf({
        account,
        ovlMarket: marketAddress as Address,
        deadline: new Date().getTime() + 1000 * 60 * 10,
        fraction: toWei(fraction),
        positionId: positionId,
        priceLimit: (await sdk.trade.getUnwindPrice(
          marketName,
          SHIVA_ADDRESS[CHAINS.Bartio],
          positionId,
          toWei(fraction),
          1
        )) as bigint,
      })

      console.log('Sign unwind on behalf of result', data)

      setSignature(data.signature)
      setUnwindOnBehalfOfData(data)
    } catch (error) {
      console.error('Error in signUnwindOnBehalfOf', error)
    }
  }

  const signBuildSingleOnBehalfOf = async () => {
    try {
      const data = await sdk.shiva.signBuildSingleOnBehalfOf({
        account,
        ovlMarket: marketAddress as Address,
        deadline: new Date().getTime() + 1000 * 60 * 10,
        collateral: toWei(collateral),
        leverage: toWei(leverage),
        previousPositionId: positionId,
        unwindPriceLimit: (await sdk.trade.getUnwindPrice(
          marketName,
          SHIVA_ADDRESS[CHAINS.Bartio],
          positionId,
          toWei(fraction),
          1
        )) as bigint,
        buildPriceLimit: (
          await sdk.trade.getPriceInfo(
            marketName,
            toWei(collateral),
            toWei(leverage),
            slippage,
            isLong
          )
        ).minPrice as bigint,
      })

      console.log('Sign build single on behalf of result', data)

      setSignature(data.signature)
      setBuildSingleOnBehalfOfData(data)
    } catch (error) {
      console.error('Error in signBuildSingleOnBehalfOf', error)
    }
  }

  const shivaBuildOnBehalfOf = async (type: TransactionType = TransactionType.Normal) => {
    try {
      if (!buildOnBehalfOfData) {
        console.error('No build on behalf of data')
        return
      }
      console.log('buildOnBehalfOfData', buildOnBehalfOfData)

      let res: any
      const buildOnBehalfOfParams = {
        account,
        params: {
          marketAddress: buildOnBehalfOfData.ovlMarket,
          // brokerId: buildOnBehalfOfData.brokerId, this is optional
          isLong: buildOnBehalfOfData.isLong,
          collateral: toWei(collateral),
          leverage: toWei(leverage),
          priceLimit: buildOnBehalfOfData.priceLimit,
        },
        onBehalfOf: {
          deadline: buildOnBehalfOfData.deadline,
          owner: buildOnBehalfOfData.owner as Address,
          nonce: buildOnBehalfOfData.nonce,
          signature: buildOnBehalfOfData.signature as `0x${string}`,
        },
      }

      if (type === TransactionType.Normal) {
        res = await sdk.shiva.buildOnBehalfOf(buildOnBehalfOfParams)
      } else if (type === TransactionType.Populate) {
        res = await sdk.shiva.populateBuildOnBehalfOf(buildOnBehalfOfParams)
      } else if (type === TransactionType.Simulate) {
        res = await sdk.shiva.simulateBuildOnBehalfOf(buildOnBehalfOfParams)
      }

      console.log('Shiva build on behalf of result', res)
      if (!res.result) {
        console.error('Shiva build on behalf of not result')
        return
      }
      setPositionId(res.result.positionId) // Show positionId
      setBuildHash(res.hash) // Show buildHash
    } catch (error) {
      console.error('Error in shivaBuildOnBehalfOf', error)
    }
  }

  const shivaUnwindOnBehalfOf = async (type: TransactionType = TransactionType.Normal) => {
    try {
      if (!unwindOnBehalfOfData) {
        console.error('No unwind on behalf of data')
        return
      }

      let res: any
      const unwindOnBehalfOfParams = {
        account,
        params: {
          marketAddress: unwindOnBehalfOfData.ovlMarket,
          brokerId: unwindOnBehalfOfData.brokerId,
          positionId: unwindOnBehalfOfData.positionId,
          fraction: unwindOnBehalfOfData.fraction,
          priceLimit: unwindOnBehalfOfData.priceLimit,
        },
        onBehalfOf: {
          deadline: unwindOnBehalfOfData.deadline,
          owner: unwindOnBehalfOfData.owner as Address,
          nonce: unwindOnBehalfOfData.nonce,
          signature: unwindOnBehalfOfData.signature as `0x${string}`,
        },
      }

      if (type === TransactionType.Normal) {
        res = await sdk.shiva.unwindOnBehalfOf(unwindOnBehalfOfParams)
      } else if (type === TransactionType.Populate) {
        res = await sdk.shiva.populateUnwindOnBehalfOf(unwindOnBehalfOfParams)
      } else if (type === TransactionType.Simulate) {
        res = await sdk.shiva.simulateUnwindOnBehalfOf(unwindOnBehalfOfParams)
      }
      console.log('Shiva unwind on behalf of result', res)
      if (!res.result) {
        console.error('Shiva unwind on behalf of not result')
        return
      }
      setUnwindHash(res.hash) // Show unwindHash
    } catch (error) {
      console.error('Error in shivaUnwindOnBehalfOf', error)
    }
  }

  const shivaBuildSingleOnBehalfOf = async (type: TransactionType = TransactionType.Normal) => {
    try {
      if (!buildSingleOnBehalfOfData) {
        console.error('No build single on behalf of data')
        return
      }

      let res: any
      const buildSingleOnBehalfOfParams = {
        account,
        params: {
          ovlMarket: buildSingleOnBehalfOfData.ovlMarket,
          // brokerId: buildSingleOnBehalfOfData.brokerId, this is optional
          collateral: buildSingleOnBehalfOfData.collateral,
          leverage: buildSingleOnBehalfOfData.leverage,
          previousPositionId: buildSingleOnBehalfOfData.previousPositionId,
          unwindPriceLimit: buildSingleOnBehalfOfData.unwindPriceLimit,
          buildPriceLimit: buildSingleOnBehalfOfData.buildPriceLimit,
        },
        onBehalfOf: {
          deadline: buildSingleOnBehalfOfData.deadline,
          owner: buildSingleOnBehalfOfData.owner as Address,
          nonce: buildSingleOnBehalfOfData.nonce,
          signature: buildSingleOnBehalfOfData.signature as `0x${string}`,
        },
      }

      if (type === TransactionType.Normal) {
        res = await sdk.shiva.buildSingleOnBehalfOf(buildSingleOnBehalfOfParams)
      } else if (type === TransactionType.Populate) {
        res = await sdk.shiva.populateBuildSingleOnBehalfOf(buildSingleOnBehalfOfParams)
      } else if (type === TransactionType.Simulate) {
        res = await sdk.shiva.simulateBuildSingleOnBehalfOf(buildSingleOnBehalfOfParams)
      }
      console.log('Shiva build single on behalf of result', res)
      if (!res.result) {
        console.error('Shiva build single on behalf of not result')
        return
      }
      setBuildHash(res.hash) // Show buildHash
    } catch (error) {
      console.error('Error in shivaBuildSingleOnBehalfOf', error)
    }
  }

  const shivaUnwindMultiple = async () => {
    try {
      const res = await sdk.market.unwindMultiple({
        positions: positionIds.map((id) => ({
          marketAddress: marketAddress as Address,
          positionId: id,
        })),
        slippage: slippage,
        unwindPercentage: 1,
      })

      console.log('Shiva unwind multiple result', res)
    } catch (error) {
      console.error('Error in shivaUnwindMultiple', error)
    }
  }

  const cancelNonce = async (type: TransactionType = TransactionType.Normal) => {
    try {
      let res: any
      const cancelNonceParams = {
        account,
        nonce: nonceToCancel,
      }

      if (type === TransactionType.Normal) {
        res = await sdk.shiva.cancelNonce(cancelNonceParams)
      } else if (type === TransactionType.Populate) {
        res = await sdk.shiva.populateCancelNonce(cancelNonceParams)
      } else if (type === TransactionType.Simulate) {
        res = await sdk.shiva.simulateCancelNonce(cancelNonceParams)
      }

      console.log('Shiva cancel nonce result', res)
    } catch (error) {
      console.error('Error in cancelNonce', error)
    }
  }

  return (
    <div>
      <h1>Shiva</h1>
      <div>
        <label style={{ fontSize: '15px' }}>
          Approve Shive to spend OVL
          <input
            type="number"
            placeholder="Amount to approve"
            value={amountToApprove}
            onChange={(e) => setAmountToApprove(parseFloat(e.target.value))}
          />
        </label>
        <button onClick={() => approveShiva(TransactionType.Normal)}>Approve Shiva</button>
        <br />
        <button onClick={() => approveShiva(TransactionType.Simulate)}>Simulate Approve Shiva</button>
        <br />
        <button onClick={() => approveShiva(TransactionType.Populate)}>Populate Approve Shiva</button>
      </div>
      <div>
        <label style={{ fontSize: '15px' }}>
          Collateral:
          <input
            type="number"
            placeholder="Collateral"
            value={collateral}
            onChange={(e) => setCollateral(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label style={{ fontSize: '15px' }}>
          Leverage:
          <input
            type="number"
            placeholder="Leverage"
            value={leverage}
            onChange={(e) => setLeverage(parseInt(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label style={{ fontSize: '15px' }}>
          Slippage:
          <input
            type="number"
            placeholder="Slippage"
            value={slippage}
            onChange={(e) => setSlippage(parseInt(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label style={{ fontSize: '15px' }}>
          Market Address:
          <input
            type="text"
            placeholder="Market Address"
            value={marketAddress}
            onChange={(e) => setMarketAddress(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label style={{ fontSize: '15px' }}>
          Market Name:
          <input
            type="text"
            placeholder="Market Name"
            value={marketName}
            onChange={(e) => setMarketName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label style={{ fontSize: '15px' }}>
          Is Long:
          <select value={`${isLong}`} onChange={(e) => setIsLong(e.target.value === 'true')}>
            <option value="true">Long</option>
            <option value="false">Short</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={() => shivaBuild(TransactionType.Normal)}>Shiva Build</button>
        <br />
        <button onClick={() => shivaBuild(TransactionType.Simulate)}>Simulate Shiva Build</button>
        <br />
        <button onClick={() => shivaBuild(TransactionType.Populate)}>Populate Shiva Build</button>
      </div>
      <div>
        <label style={{ fontSize: '15px' }}>
          Position ID:
          <input
            type="number"
            placeholder="Position ID"
            value={Number(positionId)}
            onChange={(e) => setPositionId(BigInt(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label style={{ fontSize: '15px' }}>
          Fraction:
          <input
            type="number"
            placeholder="Fraction"
            value={fraction}
            onChange={(e) => setFraction(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <button onClick={() => shivaUnwind(TransactionType.Normal)}>Shiva Unwind</button>
        <br />
        <button onClick={() => shivaUnwind(TransactionType.Simulate)}>Simulate Shiva Unwind</button>
        <br />
        <button onClick={() => shivaUnwind(TransactionType.Populate)}>Populate Shiva Unwind</button>
      </div>
      <div>
        <button onClick={() => shivaBuildSingle(TransactionType.Normal)}>Shiva Build Single</button>
        <br />
        <button onClick={() => shivaBuildSingle(TransactionType.Simulate)}>Simulate Shiva Build Single</button>
        <br />
        <button onClick={() => shivaBuildSingle(TransactionType.Populate)}>Populate Shiva Build Single</button>
      </div>

      <div>
        <label style={{ fontSize: '15px' }}>
          Sign build on behalf of:
          <button onClick={signBuildOnBehalfOf}>Sign build on behalf of</button>
        </label>
      </div>

      <div>
        <button onClick={() => shivaBuildOnBehalfOf(TransactionType.Normal)}>Shiva Build On Behalf Of</button>
        <br />
        <button onClick={() => shivaBuildOnBehalfOf(TransactionType.Simulate)}>Simulate Shiva Build On Behalf Of</button>
        <br />
        <button onClick={() => shivaBuildOnBehalfOf(TransactionType.Populate)}>Populate Shiva Build On Behalf Of</button>
      </div>

      <div>
        <label style={{ fontSize: '15px' }}>
          Sign unwind on behalf of:
          <button onClick={signUnwindOnBehalfOf}>Sign unwind on behalf of</button>
        </label>
      </div>

      <div>
        <button onClick={() => shivaUnwindOnBehalfOf(TransactionType.Normal)}>Shiva Unwind On Behalf Of</button>
        <br />
        <button onClick={() => shivaUnwindOnBehalfOf(TransactionType.Simulate)}>Simulate Shiva Unwind On Behalf Of</button>
        <br />
        <button onClick={() => shivaUnwindOnBehalfOf(TransactionType.Populate)}>Populate Shiva Unwind On Behalf Of</button>
      </div>

      <div>
        <label style={{ fontSize: '15px' }}>
          Sign build single on behalf of:
          <button onClick={signBuildSingleOnBehalfOf}>Sign build single on behalf of</button>
        </label>
      </div>

      <div>
        <button onClick={() => shivaBuildSingleOnBehalfOf(TransactionType.Normal)}>Shiva Build Single On Behalf Of</button>
        <br />
        <button onClick={() => shivaBuildSingleOnBehalfOf(TransactionType.Simulate)}>Simulate Shiva Build Single On Behalf Of</button>
        <br />
        <button onClick={() => shivaBuildSingleOnBehalfOf(TransactionType.Populate)}>Populate Shiva Build Single On Behalf Of</button>
      </div>

      <div>
        <label style={{ fontSize: '15px' }}>Signature: {signature}</label>
      </div>

      <div>
        <label style={{ fontSize: '15px' }}>
          Position IDs:
          <input
            type="text"
            value={positionIds.join(',')}
            onChange={(e) => setPositionIds(e.target.value.split(',').map((id) => Number(id)))}
          />
        </label>
      </div>

      <div>
        <button onClick={shivaUnwindMultiple}>Shiva Unwind Multiple</button>
      </div>

      <div>
        <label style={{ fontSize: '15px' }}>
          Nonce to cancel:
          <input
            type="number"
            value={Number(nonceToCancel)}
            onChange={(e) => setNonceToCancel(BigInt(e.target.value))}
          />
        </label>
      </div>

      <div>
        <button onClick={() => cancelNonce(TransactionType.Normal)}>Cancel Nonce</button>
        <br />
        <button onClick={() => cancelNonce(TransactionType.Simulate)}>Simulate Cancel Nonce</button>
        <br />
        <button onClick={() => cancelNonce(TransactionType.Populate)}>Populate Cancel Nonce</button>
      </div>

      <div>
        <label style={{ fontSize: '15px' }}>
          Emergency Withdraw:
          <button onClick={() => shivaEmergencyWithdraw(TransactionType.Normal)}>Shiva Emergency Withdraw</button>
          <br />
          <button onClick={() => shivaEmergencyWithdraw(TransactionType.Simulate)}>Simulate Shiva Emergency Withdraw</button>
          <br />
          <button onClick={() => shivaEmergencyWithdraw(TransactionType.Populate)}>Populate Shiva Emergency Withdraw</button>
        </label>
      </div>

      <br />
      <br />
      <br />
    </div>
  )
}

export default Shiva
