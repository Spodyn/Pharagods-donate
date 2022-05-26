import React, { lazy, Suspense } from 'react'
import styled from 'styled-components';

import img1 from '../../assets/Images/matt-millard.jpg';
import img2 from '../../assets/Images/david-masson.jpg';
import img3 from '../../assets/Images/attiya.webp';
import img4 from '../../assets/Images/mazen.jpg';
import img5 from '../../assets/Images/eri.jpg';
import img6 from '../../assets/Images/rohan.jpg';
import img7 from '../../assets/Images/joe-moore.jpg';
import img8 from '../../assets/Images/erik-mayer.jpg';

import Loading from '../Loading';
// import ConfettiComponent from '../Confetti';



const Section = styled.section`
min-height: 60vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
overflow: hidden;

`
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

  @media (max-width: 40em){
    font-size: ${(props) => props.theme.fontxl};

}
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em){
width: 80%;
}
@media (max-width: 48em){
width: 90%;
justify-content: center;
}
`

const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
z-index:5;

backdrop-filter: blur(4px);

border: 2px solid ${props => props.theme.text};
border-radius: 20px;

&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}

@media (max-width: 30em){
width: 70vw;
}

`

const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color:${props => props.theme.carouselColor};
border: 1px solid ${props => props.theme.text};
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
transition: all 0.3s ease;

}
`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`

const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: white;
font-weight:400;
`

const MemberComponent = ({img, name=" ",position=" "}) => {

  return(
    <Item>
      <ImageContainer>
        <img width={500} height={400}  src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}


const Team = () => {
  return (
    <Section id="team">
    
      <Title>Team</Title>
      <Container>
      <a href="https://www.instagram.com/mattmillard3d/" target='_blank' 
      rel="noopener noreferrer"
      aria-label='Instagram'><MemberComponent img={img1} href={"https://www.google.com/intl/pl/gmail/about/"} name="Matt Millard" position="3D Artist" /></a>
        <a href="https://www.instagram.com/david_masson_sg/" target='_blank' 
      rel="noopener noreferrer"
      aria-label='Instagram'><MemberComponent img={img2}  name="David Masson" position="3D Artist Advisor" /></a>
        <a href="https://www.instagram.com/ma.attiya/" target='_blank' 
      rel="noopener noreferrer"
      aria-label='Instagram'><MemberComponent img={img3}  name="Attiya" position="Founder" /></a>
        <a href="https://www.instagram.com/mazensta/" target='_blank' 
      rel="noopener noreferrer"
      aria-label='Instagram'><MemberComponent img={img4}  name="Mazen" position="Founder" /></a>
        <a href="https://www.instagram.com/r_ohaan/" target='_blank' 
      rel="noopener noreferrer"
      aria-label='Instagram'><MemberComponent img={img5}  name="Rohaan" position="Marketing Director" /></a>
        <a href="https://www.instagram.com/eroslavgeo/" target='_blank' 
      rel="noopener noreferrer"
      aria-label='Instagram'><MemberComponent img={img6}  name="Eri Georgiev" position="Head of Paid Social" /></a>
        <a href="https://www.instagram.com/joe.axel.moore/" target='_blank' 
      rel="noopener noreferrer"
      aria-label='Instagram'><MemberComponent img={img7}  name="Joe Moore" position="Community Specialist" /></a>
        <a href="https://www.instagram.com/erikmay.er/" target='_blank' 
      rel="noopener noreferrer"
      aria-label='Instagram'><MemberComponent img={img8}  name="Erik Mayer" position="Advisor" /></a>
        

      </Container>
    </Section>
  )
}

export default Team