import { GET_ACCOUNT } from './types.js';

// import {  Web3AuthCore } from "@web3auth/core";
// import { Web3Auth } from "@web3auth/web3auth";
// import { MetamaskAdapter } from '@web3auth/metamask-adapter';
// import { CHAIN_NAMESPACES, CONNECTED_EVENT_DATA, ADAPTER_EVENTS } from "@web3auth/base";

// const web3auth = new Web3Auth({
//   chainConfig: { chainNamespace: CHAIN_NAMESPACES.EIP155, chainId: "0x3" },
//   authType: "DAPP",
//   clientId: "example-client-id", // get your client id from developer dashboard
// })

// // const web3auth = new Web3Auth(options);
// const adapter = new MetamaskAdapter({
//      chainNamespace: CHAIN_NAMESPACES.EIP155,
//      chainId: "0x3",
//      rpcTarget: "https://ropsten.infura.io/v3/776218ac4734478c90191dde8cae483c",
//      displayName: "ropsten",
//      blockExplorer: "https://ropsten.etherscan.io/",
//      ticker: "ETH",
//      tickerName: "Ethereum",
//    })

// it will add/update  the metamask adapter in to web3auth class
// web3auth.configureAdapter(adapter);

// export const connectEthAccount = async () => {
//   if (window.ethereum) {
//     const web3 = new Web3(window.ethereum);
//     const network = await web3.eth.net.getNetworkType()
//     if (config.ethereum.chain === "mainnet" && network !== "main") {
//       alert("Please connect to mainnet in your ethereum wallet");
//       throw new Error("ethereum not connected to mainnet")
//     }
//     if (config.ethereum.chain !== "mainnet" && network !== config.ethereum.chain) {
//       alert(`Please connect to ${config.ethereum.chain} in your ethereum wallet`);
//       throw new Error(`ethereum not connected ${config.ethereum.chain}`)
//     }
//     await window.ethereum.enable();
//     const account = await web3.eth.getAccounts();
//     return { web3, account: account[0] };

//   }

//   alert(
//     "Please install an Ethereum-compatible browser or extension like MetaMask to use this dApp!"
//   );

//   return undefined;
// };

/**
 * This function is used to get the account details of a user.
 *
 * @param  clients
 * @param  server
 * @param  protocolAddresses
 * @param  comptroller
 * @param  markets
 */
export const addWalletAction = () => async (dispatch) => {
  console.log('asdfg');
    // dispatch({ type: GET_ACCOUNT, payload: provider });
    // console.log('a', provider);
};
