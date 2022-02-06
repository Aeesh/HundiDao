import logo from './logo.svg';
import './App.css';

import Home from './components/home';
import { ButtonAppBar } from './components/navBar';
import { useState } from 'react';
import { connectWallet, shorten } from './util';

// import { createNewFlow, createNewFlow2, calculateFlowRate } from './createFlow';


const App = () => {
  const [account, setAccount] = useState("Connect Wallet ");
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentInterval, setPaymentInterval] = useState('');
  const [circleName, setCircleName] = useState('');

  const handleChange = (event) => {
    if(event.target.name === "username") {
      setUsername(event.target.value);
    }
    if(event.target.name === "address") {
      setAddress(event.target.value);
    }
    if(event.target.name === "interval") {
      setPaymentInterval(event.target.value);
    }
    if(event.target.name === "circle") {
      setCircleName(event.target.value);
    }
    if(event.target.name === "amount") {
      setAmount(event.target.value);
    }
  };

  const getAccount = async() => {
    const res = await connectWallet();
    setAccount(shorten(8, 6, res));
  }

  return (
    <div className="App">
      <ButtonAppBar account={account} onClick={getAccount} />
      <Home
        address={address}
        username={username}
        amount={amount}
        paymentInterval={paymentInterval}
        circleName={circleName}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
