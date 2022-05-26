import React, { useState, useEffect } from "react";
import { ethers } from "ethers";



export default function App() {  
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);
  const [buttonText, setButtonText] = useState("DONATE")
  const [price, setPrice] = useState(0.1)
  const  [loading, setLoading] = useState(false)
  const [logged, setLogged] = useState(false)
  const fullWidth = window.screen.width;
  const phone = () =>{
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      let phonePrice = price*10;
      let eValue = 17;
      if(phonePrice === 10){
        phonePrice = 1;
        eValue = 18;
        
      }
      window.open("https://metamask.app.link/send/0x653a7870C62a687bb66f10D7Cbd0f848Dd46D184@01?value="+ phonePrice +"e"+eValue)
      
      
      }
  }
  useEffect(()=>{
    setLoading(true)
    setLogged(false)
    const checkConnection = async() =>{
      
      if (!window.ethereum && fullWidth>1000) 
      document.querySelector("#installAlert").style.display = "block";
      else{
        
        const response = await window.ethereum.send("eth_accounts");
        if(response.result.length === 0){
          setButtonText("Connect Wallet")
          
        }
        else{
          const accountBalance = response.result[0];
          const balance = await window.ethereum.request({method: 'eth_getBalance', params: [accountBalance, 'latest']})
          const totalBalance = ethers.utils.formatEther(balance)
          if(totalBalance<0.1){
            document.querySelector("#noFunds").style.display = "block";
          }
          else{
            setButtonText("DONATE")
            console.log("tak")
          }
          setLogged(true)
        }
        setLoading(false)
     }
      
    }
    
    checkConnection();
  },[])



  const startPayment = async ({ setError, setTxs, ether }) => {
    if(loading) return;
    
    let addr = "0x653a7870C62a687bb66f10D7Cbd0f848Dd46D184";
    try {
        if(!logged){
          if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
          }
          setLoading(true)
          const writen = await window.ethereum.send("eth_requestAccounts");
          console.log(writen)
          setLogged(true)
          setButtonText("DONATE")
          setLoading(false)
        }
        else{
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
           const changeNetwork = [{
            chainId: '0x1'}];
          await window.ethereum.request({method: 'wallet_switchEthereumChain', params:changeNetwork})
          const response = await window.ethereum.send("eth_accounts");
          const accountBalance = response.result[0];
          const balance = await window.ethereum.request({method: 'eth_getBalance', params: [accountBalance, 'latest']})
          const totalBalance = ethers.utils.formatEther(balance)
          if(totalBalance<0.1){
            document.querySelector("#noFunds").style.display = "block";
          }
          else{
            const tx = await signer.sendTransaction({
              to: addr,
              value: ethers.utils.parseEther(`${price}`)
            });
            console.log({ ether, addr });
            console.log("tx", tx);
            setTxs([tx]);
          }
          
      
        }
      
    } catch (err) {
      setError(err.message);
    }
  };
  const increasePrice = () =>{
    const newPrice = Math.round((price+0.1)*10)/10
    setPrice(newPrice>1?1:newPrice)
  }

  const decreasePrice = () =>{
    const newPrice = Math.round((price-0.1)*10)/10
    setPrice(newPrice<0.1?0.1:newPrice)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr")
    });
  };return (
    <form className="m-4" onSubmit={handleSubmit}>
      <div className="credit-card w-full lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
        <footer className="p-4">
          <h1> Give: <span id="give">{price} ETH</span></h1>
          <h6 id="noFunds">Insufficient Funds!</h6>
          <h6 id="installAlert">Please install metamask</h6>
          <div id="buttons">
          <button type="button" className="goldButton" id="buttonMinus" onClick={decreasePrice}>-</button>
          
          <button
            type="submit" onClick={phone}
            className="btn btn-primary submit-button focus:ring focus:outline-none w-full" id="sendTransaction"
          >
            {buttonText}
          </button>
          
          
          <button type="button" className="goldButton" id="buttonMinus" onClick={increasePrice}>+</button>
          </div>
        </footer>
      </div>
    </form>
  );
}
