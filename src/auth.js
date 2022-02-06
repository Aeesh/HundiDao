import React from 'react';
import Script from '@gumgum/react-script-tag';

// export const connectWallet = () => async(dispatch) => {
  export const load = async() => {
  console.log('call');
  const web3authSdk = window.Web3auth
    let web3AuthInstance = null;
    (async function init() {
      web3AuthInstance = new web3authSdk.Web3Auth({
        chainConfig: {
          chainNamespace: "eip155"
        },
        clientId: "BBltSREZlcQaLvyLM5OUbv920WZtqeFQpxWwNRkrHSwmkpKTYmkgCgSirla6St5G1ioDKfL-hs48VodwiXzn73I"
      });
      // subscribeAuthEvents(web3AuthInstance)
      await web3AuthInstance.initModal();
  })();
  const provider = await web3AuthInstance.connect();
  const user = await web3AuthInstance.getUserInfo();
  console.log('pp', provider)
  console.log('user', user)
}

export const  Auth = ()=> {
  return(
     <>
      <Script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" />
      <Script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.7.0/dist/web3.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/@web3auth/web3auth@0.2.2/dist/web3auth.umd.min.js" />
       <Script
        onLoad={load}
      />
     </>
  );
}

export default Auth;
