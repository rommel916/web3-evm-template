import HelperAbi from "./abi/helper.json";

import {
  contractAddresses,
  supportedChainIdList,
} from "./constants_evm";
import * as Types from "./types.js";

export class Contracts {
  constructor(provider, networkId, web3, options) {
    this.web3 = web3;
    this.defaultConfirmations = options.defaultConfirmations;
    this.autoGasMultiplier = options.autoGasMultiplier || 1.5;
    this.confirmationType =
      options.confirmationType || Types.ConfirmationType.Confirmed;
    this.defaultGas = options.defaultGas;
    this.defaultGasPrice = options.defaultGasPrice;
    this.helper = new this.web3.eth.Contract(HelperAbi);

    if (!supportedChainIdList.includes(networkId)) {
      throw new Error(`warning: Contract.networkId: ${networkId}`);
    };
    this.setProvider(provider, networkId);
    this.setDefaultAccount(this.web3.eth.defaultAccount);
  }

  setProvider(provider, networkId, market) {
    const setProvider = (contract, address) => {
      try {
        contract.setProvider(provider);
        if (address) contract.options.address = address;
      } catch (e) {
        console.log(e);
      }
    };
    setProvider(this.helper, contractAddresses.helper[networkId]);
  }

  setDefaultAccount(account) {
    this.sushi.options.from = account;
    this.comptroller.options.from = account;
  }
}
