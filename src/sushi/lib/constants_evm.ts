type chainRPCsOptions = {
  [key: string]: any;
};
export const chainRPCs: chainRPCsOptions = {
  "43114": "https://api.avax.network/ext/bc/C/rpc",
  "43113": "https://endpoints.omniatech.io/v1/avax/fuji/public",
  "338": "https://evm-t3.cronos.org",
  "25": "https://evm.cronos.org",
  "5": "https://rpc-mumbai.maticvigil.com",
  "80002": "https://polygon-amoy.drpc.org",
};

type contractAddressesOptions = {
  [key: string | number]: any;
};

export const contractAddresses: contractAddressesOptions = {
  helper: {
    43113: "0x3f075C3B0948F2d92FA9b7639377D6F3fEc4be6f",
    338: "0xd30672473567bD17B307E6A6d39e59c60b311Aa8",
    25: "0x92c085F52B5C9C29e6Ba8B97C8f25E7C9471bED9",
    5: "0x79C161d8400eC2D9e2005184FEB5Bd1d8Ee5a53d",
    80002: "0x6e978B37Bd77803D99a4e5b0852400e833A3FeB0",
  },
};

export const supportedChainIdList: number[] = [80002, 5, 43113];

let window1: any = window;
const herfList = window1.location.pathname.split("/");
const params = parseInt(herfList[herfList.length - 1]);

export let supportedChainId = (() => {
  if (supportedChainIdList.indexOf(params) != -1) {
    return params;
  } else {
    return supportedChainIdList[0];
  }
})();