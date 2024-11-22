import React from 'react'
import { Web3OnboardProvider, init } from '@web3-onboard/react'
import okxModule from '@web3-onboard/okx'
import metamaskModule from '@web3-onboard/metamask'
import coinbaseModule from '@web3-onboard/coinbase'

import { ReactNode } from 'react'
import { chainRPCs } from '../../sushi/lib/constants_evm'

const coinbase = coinbaseModule()
const okx = okxModule()

// initialize the module with options
const metamask = metamaskModule({options: {
  extensionOnly: false,
  dappMetadata: {
    name: 'Web3Onboard'
  }
}})

const wallets = [
  metamask,
  okx,
  coinbase,
]

const chains = [
  {
    id: '0x1',
    token: 'ETH',
    label: 'Ethereum Mainnet',
    rpcUrl: `https://1rpc.io/eth`
  },
  {
    id: 11155111,
    token: 'ETH',
    label: 'Sepolia',
    rpcUrl: 'https://rpc.sepolia.org/'
  },
  {
    id: '0x13881',
    token: 'MATIC',
    label: 'Polygon - Mumbai',
    rpcUrl: 'https://matic-mumbai.chainstacklabs.com'
  },
  {
    id: 80002,
    token: 'MATIC',
    label: 'Amoy',
    rpcUrl: chainRPCs["80002"]
  },
]

const appMetadata = {
  name: 'Connect Wallet Module',
  description: 'pump connect a wallet.',
  recommendedInjectedWallets: [
    { name: 'MetaMask', url: 'https://metamask.io' },
    { name: 'Okx', url: 'https://www.okx.com/' }
  ],
}

const web3Onboard = init({
    wallets,
    chains,
    appMetadata,
    connect: {
      autoConnectAllPreviousWallet: true
    },
    accountCenter: {
      desktop: {
        enabled: false,
      },
      mobile: {
        enabled: false,
      }
    },
    theme: "dark",
})

const OnboardWalletConnectorProvider:React.FC<{children?: ReactNode}> = ({children}) => {
    return <Web3OnboardProvider web3Onboard={web3Onboard}>{children}</Web3OnboardProvider>
}

export default OnboardWalletConnectorProvider
