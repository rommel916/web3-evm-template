//@ts-nocheck
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { TrustWalletConnector } from "@web3-react/walletconnect-connector";
// import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { chainRPCs, supportedChainId } from "src/sushi/lib/constants_evm";
import WalletConnect from "@walletconnect/client";
// import QRCodeModal from "@walletconnect/qrcode-modal";

// import QRCodeModal from "@walletconnect/qrcode-modal";

export const injected = new InjectedConnector({
  supportedNetworks: [supportedChainId],
});

export const OKXWallet = new InjectedConnector({
  supportedNetworks: [supportedChainId],
});

export const coinbaseWallet = new WalletLinkConnector({
  rpc: `https://mainnet.infura.io/v3/${supportedChainId}`, // 替换为你的 Infura 项目 ID
  supportedNetworks: [supportedChainId], // 支持的网络 ID 列表
});
