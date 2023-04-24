import React from 'react'
import styled from 'styled-components'
import HomeButton from '../subComponents/HomeButton'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import Intro from './Intro'

const MainContainer = styled.div`
background: ${props => props.theme.body};
color: ${props =>props.theme.body === "#000000" ? 'white' : 'black'};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`
const Container = styled.div`
padding: 2rem;
`

const Main =()=>{
    return(
        <MainContainer>
            <Container>
            <HomeButton/>
            <LogoComponent/>
            <SocialIcons />
            </Container>
            <Intro /> 
        </MainContainer>
    )
}

export default Main