import React from 'react'
import { useConnectWallet, useSetChain } from '@web3-onboard/react';

const LoginButton = () => {
  const [{ wallet: walletObject, connecting }, connect, disconnect] = useConnectWallet()
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain()

  return (
    <div className='connect' onClick={() => {
      connect().then((states) => {
        if (states.length > 0 && states[0].provider)
          setChain({ chainId: `0x${chains.toString()}` })
      })
    }}>Connect wallet</div>
  )
}


export default LoginButton
