import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import DrawSvg from "../DrawSvg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: inline-block;
  overflow: hidden;

  @media (max-width: 400px) and (max-height: 800px){
   padding-bottom: 3em;
    
  }
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Container = styled.div`
  width: 70%;
  height: 200vh;
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`;
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: lightblue; */

  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;

      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
      text-align: left;
        p {
          border-radius: 0 40px 0 40px;

        }
      }
    }
    p {
      border-radius: 40px 0 40px 0;
    }
  }
  & > *:nth-of-type(2n) {
    justify-content: end;
    @media (max-width: 48em) {
      justify-content: center;
    }
    div {
      border-radius: 0 50px 0 50px;
      text-align: left;

      
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;
const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
  @media (max-width: 400px) and (max-height: 800px){
    margin-top: 1em;
    margin-bottom: 1em;
    
  }
`;
const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 70%;

  }
`;

const Box = styled.p`
  height: fit-content;
  background-color: #bb9b30;
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;
const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: white;

  @media (max-height: 1200px) {
    font-size: ${(props) => props.theme.fontmd}
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;
const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: white;

  font-weight: 400;
  margin: 0.5rem 0;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const RoadMapItem = ({ title, subtext, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title} </SubTitle>
          <Text>{subtext}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };



  return (
    <Section id="roadmap">
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem
            addToRef={addToRefs}
            title="1. As an army, we move as one"
            subtext="Implementation Of Voting And Suggestions Systems For Our NFT Holders. We Will Launch A Secret Server For PharaGods Owners."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="2. We Will Launch The World’s First Ancient Museum In The Metaverse!"
            subtext="We'll Buy A Piece Of Land On Decentraland And Build The First Ancient Museum. We Gives You Fractional Ownership Of Ancient Museum."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="3. Time to get dressed up"
            subtext="We will be working with a  merchandise provider, who will be designing unique PharaGods themed merchandise for holders. We are going to make a merchandise line  to wear on the streets. We’ll cover the cost - you do the rest"
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="4. Holder rewards and advantages"
            subtext="Holder Lottery where all holders win something (from discounts to fully paid trips to Egypt depending on your PharaGods level."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="5. Time to share the loot"
            subtext="PharaGods Will Donate To Feed The Children, A Non-Profit Organization Focused On Alleviating Hunger. We’ve Allocated 5% Of All Secondary Sales Royalty."
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;

// 🚀 SKYVERSE MINT IS LIVE! 🚀

// Mint Link: http://skyversenft.co 
// Price: 0.1 ETH 
// Supply: 1,000 Left

// We are delighted to announce that we are donating $250,000 to the innocent families in Ukraine 🔥

// Be a part of something bigger, get a SkyVerse 👀



// ustawić lepiej przyciski
// dodać działanie na telefonie
// ROADMAP - poniżej 400x800 robimy margin

    
// PRZETESTOWAĆ czy działa oraz czy budowanie tego inaczej nie byłoby inną opcją (transakcje)

