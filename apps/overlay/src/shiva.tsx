import { useState } from 'react'
import { useAccount } from './hooks/useAccount'
import useSDK from './hooks/useSDK'
import { Address } from 'viem'
import { CHAINS, toWei } from 'overlay-sdk'
import { SHIVA_ADDRESS } from 'overlay-sdk/dist/constants'
import { BuildOnBehalfOfSignature, BuildSingleOnBehalfOfSignature, UnwindOnBehalfOfSignature } from 'overlay-sdk/dist/shiva/types'

const Shiva = () => {
  const { address: account } = useAccount()
  const sdk = useSDK()

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

  const [buildOnBehalfOfData, setBuildOnBehalfOfData] = useState<BuildOnBehalfOfSignature>()
  const [unwindOnBehalfOfData, setUnwindOnBehalfOfData] = useState<UnwindOnBehalfOfSignature>()
  const [buildSingleOnBehalfOfData, setBuildSingleOnBehalfOfData] = useState<BuildSingleOnBehalfOfSignature>()

  const shivaBuild = async () => {
    try {
      const res = await sdk.shiva.build({
        account,
        params: {
          ovlMarket: marketAddress as Address,
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
        },
      })

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

  const shivaUnwind = async () => {
    try {
      const res = await sdk.shiva.unwind({
        account,
        params: {
          ovlMarket: marketAddress as Address,
          positionId: positionId,
          fraction: toWei(fraction),
          priceLimit: (await sdk.trade.getUnwindPrice(
            marketName,
            SHIVA_ADDRESS[CHAINS.Bartio],
            positionId,
            toWei(fraction),
            1
          )) as bigint,
        },
      })

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

  const shivaBuildSingle = async () => {
    try {
      const res = await sdk.shiva.buildSingle({
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
      })

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

  const shivaEmergencyWithdraw = async () => {
    try {
      const res = await sdk.shiva.emergencyWithdraw({
        account,
        market: marketAddress as Address,
        positionId: positionId,
        owner: account as Address,
      })

      console.log('Shiva emergency withdraw result', res)

      if (!res.result) {
        console.error('Shiva emergency withdraw not result')
        return
      }
    } catch (error) {
      console.error('Error in shivaEmergencyWithdraw', error)
    }
  }

  const approveShiva = async () => {
    try {
      const res = await sdk.shiva.approveShiva({
        account,
        amount: toWei(amountToApprove),
      })

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

  const shivaBuildOnBehalfOf = async () => {
    try {
      if (!buildOnBehalfOfData) {
        console.error('No build on behalf of data')
        return
      }
      console.log('buildOnBehalfOfData', buildOnBehalfOfData)
      
      const res = await sdk.shiva.buildOnBehalfOf({
        account,
        params: {
          ovlMarket: buildOnBehalfOfData.ovlMarket,
          // brokerId: buildOnBehalfOfData.brokerId, this is optional
          isLong: buildOnBehalfOfData.isLong,
          collateral: buildOnBehalfOfData.collateral,
          leverage: buildOnBehalfOfData.leverage,
          priceLimit: buildOnBehalfOfData.priceLimit,
        },
        onBehalfOf: {
          deadline: buildOnBehalfOfData.deadline,
          owner: buildOnBehalfOfData.owner as Address,
          signature: buildOnBehalfOfData.signature as `0x${string}`,
        },
      })
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

  const shivaUnwindOnBehalfOf = async () => {
    try {
      if (!unwindOnBehalfOfData) {
        console.error('No unwind on behalf of data')
        return
      }

      const res = await sdk.shiva.unwindOnBehalfOf({
        account,
        params: {
          ovlMarket: unwindOnBehalfOfData.ovlMarket,
          brokerId: unwindOnBehalfOfData.brokerId,
          positionId: unwindOnBehalfOfData.positionId,
          fraction: unwindOnBehalfOfData.fraction,
          priceLimit: unwindOnBehalfOfData.priceLimit,
        },
        onBehalfOf: {
          deadline: unwindOnBehalfOfData.deadline,
          owner: unwindOnBehalfOfData.owner as Address,
          signature: unwindOnBehalfOfData.signature as `0x${string}`,
        },
      })
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

  const shivaBuildSingleOnBehalfOf = async () => {
    try {
      if (!buildSingleOnBehalfOfData) {
        console.error('No build single on behalf of data')
        return
      }

      const res = await sdk.shiva.buildSingleOnBehalfOf({
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
          signature: buildSingleOnBehalfOfData.signature as `0x${string}`,
        },
      })
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
        <button onClick={approveShiva}>Approve Shiva</button>
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
        <button onClick={shivaBuild}>Shiva Build</button>
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
        <button onClick={shivaUnwind}>Shiva Unwind</button>
      </div>
      <div>
        <button onClick={shivaBuildSingle}>Shiva Build Single</button>
      </div>

      <div>
        <label style={{ fontSize: '15px' }}>
          Sign build on behalf of:
          <button onClick={signBuildOnBehalfOf}>Sign build on behalf of</button>
        </label>
      </div>

      <div>
        <button onClick={shivaBuildOnBehalfOf}>Shiva Build On Behalf Of</button>
      </div>

      <div>
        <label style={{ fontSize: '15px' }}>
          Sign unwind on behalf of:
          <button onClick={signUnwindOnBehalfOf}>Sign unwind on behalf of</button>
        </label>
      </div>

      <div>
        <button onClick={shivaUnwindOnBehalfOf}>Shiva Unwind On Behalf Of</button>
      </div>

      <div>
        <label style={{ fontSize: '15px' }}>
          Sign build single on behalf of:
          <button onClick={signBuildSingleOnBehalfOf}>Sign build single on behalf of</button>
        </label>
      </div>

      <div>
        <button onClick={shivaBuildSingleOnBehalfOf}>Shiva Build Single On Behalf Of</button>
      </div>

      <div>
        <label style={{ fontSize: '15px' }}>
          Signature: {signature}
        </label>
      </div>

      <br />
      <br />
      <br />
    </div>
  )
}

export default Shiva