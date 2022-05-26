import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import logo from '../assets/Images/bannerText.png'
import MetaMask from '../MetaMask';


const Title = styled.h2`
z-index: 12;
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: center;
    text-align:center;
  font-weight: bold;
  #noFunds, #installAlert{
    display:none;
    color: #d80000;
  }
  #bb{
    color: ${(props) => props.theme.text};
  }
  #nft_left{
    color: white;
  }
  #give{
    color: ${(props) => props.theme.text};
  }
  h1{
    margin-top: 0.8em;
    margin-bottom: 0.1em;
    color: white;
    font-size: 0.9em;
  }

  img{
    align-self: flex-start;
    width: 20vw;
  }

  @media (max-width: 64em) { 
    img{
      width: 35vw;
    }
  
  }


  @media (max-width: 48em){
    img{
      width: 70vw;
    }
    
  }


  button{
    
    display: inline-block;
    background-color: ${props => props.theme.text};
    color: white;
    outline: none;
    border: none;
    font-weight: bold;
    font-size: 0.5em;
    padding: 0.9rem 2.3rem;
    margin: 0.5rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    
    
    @media (max-width: 1611px) {
      font-size: 0.35em;
      padding: 0.8rem 2rem;
  
    }


    @media (max-width: 64em) {
      font-size: 0.33em;
      padding: 0.4em 0.75em 0.4em 0.75em;
      width: auto;
  
    }
    @media (max-width: 48em) { 
      font-weight: 300;
      letter-spacing: 2px;
      padding: 7px 15px;
      border-radius: 88px;
      font-size: 15px;
      margin-left: 5px;
      margin-bottom: 5em;
    }
    @media (max-width: 390px){
      padding: 7px 10px;
    }
    @media (max-width: 300px){
      padding: 7px 10px;
      font-size: 10px;
    }


      &:hover{
          transform: scale(0.9);
}

      &::after{
          content: ' ';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          border: 2px solid ${props => props.theme.text};
          width: 100%;
          height: 100%;
          border-radius: 50px;
          transition: all 0.2s ease;
      }

        &:hover::after{
            transform: translate(-50%, -50%) scale(1);
            padding: 0.3rem;
        }
  

      }

  
`;


const TypeWriterText = () => {
  return (
    <>
        
        <Title>
        <img src={logo} alt="Pharagods" />
        <p id="bb"><span id="nft_left">Donate </span>US!</p>
         <MetaMask />
      
      
    </Title>
    
    
    </>
  );
};



export default TypeWriterText;
