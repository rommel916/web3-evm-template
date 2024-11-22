export const SEED_CONTRACT_INFO = 'masterchef-contract-info'
export const SEED_USER_INFO = 'masterchef-user-info'
 
export const SEED_PROGRAM_ADDRESS = 'masterchef-solana-0'

export const supportedChainIdList = [
  'devnet', 'mainnet-beta',
]

export let supportedChainId = (() => {
  return supportedChainIdList[0];
})();