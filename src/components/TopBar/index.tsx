import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Popover, Button } from 'antd';
import { useConnectWallet, useSetChain } from '@web3-onboard/react';
import LoginButton from './LoginButton';
import styles from './index.module.scss';

const TopBar: React.FC = () => {
  const navigate = useNavigate()
  const [{ wallet: walletObject, connecting }, connect, disconnect] = useConnectWallet();
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain()
  const [showAccount, setShowAccount] = useState<string>('')
  const [show1Account, setShow1Account] = useState<string>('')

  const account = useMemo(() => {
    return walletObject?.accounts?.[0]?.address || ''
  }, [walletObject])


  useEffect(() => {
    if (account) {
      const _account = account
      const len = _account.length
      const start = _account.substring(0, 4)
      const start1 = _account.substring(0, 6)
      const end = _account.substring(len - 4, len)
      setShowAccount(`${start}...${end}`)
      setShow1Account(`${start1}...${end}`)
    }
  }, [account]);

  return <div className={styles.container}>
    <div className={styles.left}>
      <div className={styles.logo} onClick={() => navigate('/')}>Logo</div>
      <div className={styles.link} onClick={() => navigate(`/`)}><Button >Dashboard</Button></div>
      <div className={styles.link} onClick={() => navigate("/mark")}><Button>Markets</Button></div>
    </div>
    <div className={styles.right} id='headIcon'>
      {
        !account
          ? <LoginButton />
          : <>
            {
              <Popover
                destroyTooltipOnHide
                arrow={false}
                trigger="click"
                content={<>
                  <div className="disConnect">
                    <div
                      className='btn'
                      onClick={() => {
                        disconnect(walletObject as any)
                      }}
                    >DISCONNECT</div>
                  </div>
                </>}
              >
                {
                  <div className="account"
                  >
                    {showAccount}
                  </div>
                }
              </Popover>
            }
          </>
      }
    </div>
  </div>
}


export default TopBar
