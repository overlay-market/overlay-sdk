import { useState } from 'react'
import { useAccount } from './hooks/useAccount'
import useSDK from './hooks/useSDK'
import { Address } from 'viem'
import { toWei } from 'overlay-sdk'

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
  const [fraction, setFraction] = useState(0n)
  const [buildHash, setBuildHash] = useState('')
  const [unwindHash, setUnwindHash] = useState('')

  const shivaBuild = async () => {
    try {
      const res = await sdk.shiva.build({
        account,
        params: {
          ovMarket: marketAddress as Address,
          brokerId: 1,
          isLong: isLong,
          collateral: toWei(collateral),
          leverage: toWei(leverage),
          priceLimit: (await sdk.trade.getPriceInfo(marketName, toWei(collateral), toWei(leverage), slippage, isLong)).minPrice as bigint,
        },
      })

      console.log('Shiva build result', res)

      if (!res.result) {
        console.error('Shiva build not result')
        return
      }
      setPositionId(res.result.positionId); // Show positionId
      setBuildHash(res.hash); // Show buildHash
    } catch (error) {
      console.error('Error in shivaBuild', error)
    }
  }

  const shivaUnwind = async () => {
    try {
      const res = await sdk.shiva.unwind({
        account,
        params: {
          ovMarket: marketAddress as Address,
          brokerId: 1,
          positionId: positionId,
          fraction: fraction,
          priceLimit: (await sdk.trade.getUnwindPrice(marketName, account as Address, positionId, toWei(Number(fraction)), 1)) as bigint,
        },
      })

      console.log('Shiva unwind result', res)

      if (!res.result) {
        console.error('Shiva unwind not result')
        return
      }
      setUnwindHash(res.hash); // Show unwindHash
    } catch (error) {
      console.error('Error in shivaUnwind', error)
    }
  }

  const shivaBuildSingle = async () => {
    try {
      const res = await sdk.shiva.buildSingle({
        account,
        params: {
          ovMarket: marketAddress as Address,
          brokerId: 1,
          unwindPriceLimit: (await sdk.trade.getUnwindPrice(marketName, account as Address, positionId, toWei(Number(fraction)), 1)) as bigint,
          buildPriceLimit: (await sdk.trade.getPriceInfo(marketName, toWei(collateral), toWei(leverage), slippage, isLong)).minPrice as bigint,
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
      setBuildHash(res.hash); // Show buildHash
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

  const shivaBuildOnBehalfOf = async () => {

    


    // try {
    //   const res = await sdk.shiva.buildOnBehalfOf({
    //     account,
    //     params: {
    //       ovMarket: marketAddress as Address,
    //       brokerId: 1,
    //       isLong: isLong,
    //       collateral: toWei(collateral),
    //       leverage: toWei(leverage),
    //       priceLimit: (await sdk.trade.getPriceInfo(marketName, toWei(collateral), toWei(leverage), slippage, isLong)).minPrice as bigint,
    //     },
    //     onBehalfOf: {
    //       deadline: new Date().getTime() + 1000 * 60 * 10,
    //       owner: account as Address,
    //       signature: await account.s
    //     }
    //   })

    //   console.log('Shiva build on behalf of result', res)

    //   if (!res.result) {
    //     console.error('Shiva build on behalf of not result')
    //     return
    //   }
    //   setPositionId(res.result.positionId); // Show positionId
    //   setBuildHash(res.hash); // Show buildHash
    // } catch (error) {
    //   console.error('Error in shivaBuildOnBehalfOf', error)
    // }
  }

  return (
    <div>
      <h1>Shiva</h1>
    </div>
  )
}

export default Shiva
