import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from './Button';
import logo from '../assets/Images/bannerText.png'

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  img{
    align-self: flex-start;
    width: ${props => `calc(25vw - ${props.theme.navHeight})`};
  }


  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxxl};

  }
  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
    font-size: ${(props) => props.theme.fontxl};

    img{
      width: 40vw;
    }

  }
  @media (max-width: 40em){
    width: 90%;
  }

  
`;
const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontmd};
  text-transform: capitalize;
  color: white;
  font-weight:600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};

  }

  @media (max-width: 48em) { 
    align-self: center;
    text-align:center;
  }

  .text1{
    color: white !important;
  }
  
`


const TypeWriterText = () => {
  return (
    <>
        
        <Title>
        <img src={logo} alt="Pharagods" />
         <p>are not just pictures, they are also</p>
      <Typewriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(`NFTs.`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`Metaverse Museum.`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`Passive Income!`)
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
      
    </Title>
    <SubTitle>We will launch the world’s first ancient museum in the Metaverse, and you’re part of the family! We are excited to share that ownership of a PharaGods NFT gives you fractional ownership of our Metaverse ancient museum.</SubTitle>
    
    </>
  );
};

export default TypeWriterText;
