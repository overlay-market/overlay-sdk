import React, { useEffect, useState } from 'react'

import { OverlaySDK } from 'overlay-sdk'
import { createPublicClient, http } from 'viem'
import { arbitrumSepolia } from 'viem/chains'

const Market = () => {
  const [account, setAccount] = useState()

  const rpcProvider = createPublicClient({
    chain: arbitrumSepolia,
    transport: http(),
  })

  const web3Provider = window.ethereum

  const sdk = new OverlaySDK({
    chainId: 421614,
    rpcProvider,
    web3Provider,
  })

  useEffect(() => {
    try {
      getWeb3Address()
    } catch (error) {
      console.error('Error in getting web3 address', error)
    }
  }, [])

  const getWeb3Address = async () => {
    const address = await sdk.core.getWeb3Address()
    console.log('market component ' + address)
    setAccount(address)
  }

  const approveMarket = async () => {
    try {
      const result = await sdk.ov.approve({
        account,
        amount: '0.001',
        to: '0x3a204d03e9b1fee01b8989333665b6c46cc1f79e',
      })
      console.log({ result })
    } catch (error) {
      console.error('Error in approving market', error)
    }
  }

  const build = async () => {
    try {
      const result = await sdk.market.build({
        account,
        marketAddress: '0x3a204d03e9b1fee01b8989333665b6c46cc1f79e',
        collateral: 100000000000000000,
        leverage: 1000000000000000000,
        isLong: true,
        priceLimit: 141571275687020441,
      })
      console.log({ result })
    } catch (error) {
      console.error('Error in building market', error)
    }
  }

  return (
    <div>
      <h1>Market</h1>
      <button onClick={approveMarket}>Approve Market</button>
      <button onClick={build}>Build Market</button>
    </div>
  )
}

export default Market
