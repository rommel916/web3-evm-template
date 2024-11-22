import React, { useMemo } from 'react'
import { useConnectWallet, useSetChain } from '@web3-onboard/react';

const TopBar = () => {
  const [{ wallet: walletObject, connecting }, connect, disconnect] = useConnectWallet()
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain()

  const account = useMemo(() => {
    return walletObject?.accounts?.[0]?.address
  }, [walletObject])

  return <>
    {
      account
        ? <div onClick={() => {
          disconnect(walletObject as any);
        }}>disconnect </div>
        : <div onClick={() => {
          connect().then((states) => {
            if (states.length > 0 && states[0].provider) {
              setChain({ chainId: `0x${chains.toString()}` })
            }
          })
        }}
        >connect </div>
    }
  </>
}


export default TopBar
