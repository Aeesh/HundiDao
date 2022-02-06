import logo from './logo.svg';
import './App.css';

import Home from './components/home';
import { ButtonAppBar } from './components/navBar';
import { useState } from 'react';
import { connectWallet, shorten } from './util';

// import { createNewFlow, createNewFlow2, calculateFlowRate } from './createFlow';


const App = () => {
  const [account, setAccount] = useState("Connect Wallet ");

  const getAccount = async() => {
    const res = await connectWallet();
    setAccount(shorten(8, 6, res));
  }

  return (
    <div className="App">
      <ButtonAppBar account={account} onClick={getAccount} />
      <Home account={account}/>
    </div>
  );
}

export default App;
