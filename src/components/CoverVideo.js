import React from 'react'
import styled from 'styled-components'
import image from '../assets/Images/Finalwebbanner.jpg'


const VideoContainer = styled.div`
width: 100%;

video{
    width: 100%;
    height: auto;
    
}

img{
  z-index: 10;
}



@media (max-width: 64em) {
  display: flex;
  
  max-width: 100%;
  justify-content: center;
  align-items: center;
  
}

@media (max-width: 64em) {
  img{
    width: 100vw;
  }


@media (max-width: 48em) {
  img{
    
  }
}




`

const CoverVideo = () => {
  return (
    <VideoContainer>
        <img src={image}  />
    </VideoContainer>
  )
}

export default CoverVideo