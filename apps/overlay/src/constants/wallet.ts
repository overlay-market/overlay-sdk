import {  CreateConnectorFn } from 'wagmi';
// import METAMASK_ICON from '../assets/images/metamask.png'
// import WALLETCONNECT_ICON from '../assets/images/walletconnect.svg'
import { metaMask, walletConnect, injected } from '@wagmi/connectors'

interface WalletInfo {
  connector?: CreateConnectorFn
  name: string
  iconURL?: string
  description: string
  href: string | null
  primary?: true
  mobile?: true
  mobileOnly?: true
}

const projectId = <string>process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID

export const SUPPORTED_WALLETS: {[key: string]: WalletInfo} = {
  // INJECTED: {
  //   connector: injected(),
  //   name: 'Injected',
  //   iconURL: 'empty',
  //   description: 'Injected web3 provider.',
  //   href: null,
  //   primary: true,
  // },
  METAMASK: {
    connector: metaMask(),
    name: 'MetaMask',
    // iconURL: METAMASK_ICON,
    description: 'Easy-to-use browser extension.',
    href: null,
  },
  WALLET_CONNECT: {
    connector: walletConnect({ projectId }),
    name: 'WalletConnect',
    // iconURL: WALLETCONNECT_ICON,
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    mobile: true,
  },
}
