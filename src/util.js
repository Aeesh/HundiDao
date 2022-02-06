export const shorten = (first, last, str) => `${str.substring(0, first)}...${str.substring(str.length - last)}`;

export const connectWallet = async () => {
  try {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Get MetaMask!");
      return;
    }
    const accounts = await ethereum.request({
      method: "eth_requestAccounts"
    });
    console.log("Connected", accounts[0]);
   return accounts[0];
  } catch (error) {
    console.log(error);
  }
};