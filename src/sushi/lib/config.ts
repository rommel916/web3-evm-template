// change and review this file before release

// public/manifest.json
// public/index.html
// public/favicon.ico
// public/favicon.svg

// icon path: hard coded, just replace the svg file
// src/assets/pool/eth.svg          
// src/assets/new/reward-logo.png       

// supportPools,supportedTradeTokens ,usdcAddr ,chains, contractAddresses: sushi/lib/contants

import { supportedChainId } from './constants'


// main icons
const icons_main:any = {

}

const apy_path: {[key: string]: string} = {
  'devnet': '/api/apy-devnet.json',
}

// main texts
const texts_main: {[key: string]: string} = {
  'email': '',
  'rewardName': 'ARBI',
  'veRewardToken':'sARBI',
  'projectName': 'Beluga',
  'MainLPName':'MAIN',
  'AltlPName':'LSD',
  'EcolPName':'Eco',
  'localTokenName':'MATIC',
  'daoRewardName0': 'ARBI',
  'daoRewardName1': 'velo',
  'daoRewardName2': 'op',
}

const urls_main: {[key: string]: string} = {
  'github': 'https://github.com/web3/web3.js',
  'twitter': 'https://twitter.com/explore',
  'telegram': '',
  'gitbook': 'https://www.gitbook.com/',
  'discord': '',
  'medium': '',
  'coinmarketcap': '',
  'coingecko': '',
  'audit':'',
  'BuyTokenDex':'',
  'AddLpTokenDex':''
}

const config:any = (() => {
  // may return different configs, according to chain id
  return {
    texts: texts_main,
    urls: urls_main,
    icons: icons_main,
    apy_path,
  }
})()

export default config
