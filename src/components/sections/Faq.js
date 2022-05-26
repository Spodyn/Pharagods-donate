import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: black;
position: relative;
color: white;
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${props => props.theme.text};
  
  margin: 1rem auto;
  border-bottom: 2px solid #bb9b30;
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
.strong{
  font-weight: bold;
}
@media (max-width: 64em){
  width: 90%;
  align-self: center;
  }

`



const Faq = () => {
  const todayDate = new Date();
  const tomorrowDate = todayDate.getDate()+1;
const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;
  
  if(window.screen.width>770){
    ScrollTrigger.create({
      trigger: element,
      start:'bottom bottom',
      end:'bottom top',
      pin:true,   
      pinSpacing:false, 
      scrub:1,
      // markers:true,
    })
    return () => {
      ScrollTrigger.kill();
    };
  }
  

  
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHAT WALLETS ARE SUPPORTED?" >
  While we support the most popular wallets, we highly recommend MetaMask for a seamless experience. We support Coinbase, WalletConnect, and hardware wallets Ledger is tested and found to be working but sometimes encounters errors for specific users due to new updates. The best place to find support is in their community forums or Discord in such cases.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="WHERE CAN I SEE MY NFTS AFTER MINTING?" >
  Your NFTs will be visible on OpenSea and in your wallet if it supports displaying NFTs (highly recommend MetaMask browser). Note that it should take 10 minutes to see it. If you're not seeing it by then, don't hesitate to get in touch with us on Discord.

  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="I MINTED MY NFT, BUT I AM NOT SEEING THE DIGITAL APE IMAGE OR PROPERTIES?" >
  All Digital Ape Club NFTs will be revealed at a set time on April {tomorrowDate}. Until then, you will see an animated Digital Ape gif. If you still do not see your Ape and its properties after the reveal date, please use the manual Metadata Refresh button on OpenSea or if your wallet offers one to view the updated version.
  </Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title='WHY AM I GETTING A "TRANSACTION CANCELLED" ERROR?' >
The leading cause of this message is if you choose to reject the transaction confirmation prompted by your wallet. Alternatively, wallets are not perfect and sometimes encounter internal errors. Please try to refresh the page and try your transaction again if you encounter such an issue.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="HOW MUCH GAS DO I NEED TO MINT?
" >
While our smart contracts are built for ultimate efficiency, the gas price fluctuates throughout the day based on network demand and congestion. We cannot predict the gas price, but please do note this is not a fee set by or collected by us - it goes to the miners and node operators who allow the Ethereum network to operate. Estimated gas on regular time should cost between 30-150$ (0.01 - 0.05 ETH ) Max.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="HOW TO MINT?
" >
<p class="strong">Step 1</p>
<p>Connect your wallet:</p>
<p>Click "Connect Wallet", You need to have enough ETH to mint</p>
<p class="strong">Step 2</p>
<p>Choose how many you would like to mint:</p>
<p>You may mint multiple times, up to the maximum</p>
<p class="strong">Step 3</p>
<p>Confirm in your wallet:</p>
<p>You have to have enough ETH in your wallet to cover 'gas fees'</p>
<p class="strong">Step 4</p>
<p>Enjoy your NFT!</p>
  </Accordion>
</Box>
    </Container>
    </Section>
  )
}

export default Faq