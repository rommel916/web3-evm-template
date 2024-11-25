import { useCallback } from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected, OKXWallet, coinbaseWallet } from '../contexts/WalletConnectList/connectors';
import { Web3Provider } from '@ethersproject/providers';

const wall: { [key: string]: any } = {
    injected: injected,
    OKXWallet: OKXWallet,
    coinbaseWallet: coinbaseWallet
};

const useConnectWallet = () => {
    const context = useWeb3React<Web3Provider>();
    const { library, chainId: chainId2, account, activate: connect, deactivate } = context;

    const connectWallet = useCallback(() => {
        const connector = localStorage.getItem('connector');
        if (connector) {
            try {
                connect(wall[connector]);
            } catch (error) {
                console.log(error);
            }
        }
    }, []);

    const off = () => {
        deactivate();
        localStorage.removeItem('wallet_name');
        localStorage.removeItem('connector');
    };

    return { connectWallet, off, account, library, chainId2 };
};

export default useConnectWallet;
