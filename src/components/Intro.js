import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/profile-img.png'
import MeChange from '../assets/Images/prof.png'


const Box = styled(motion.div)`

position: absolute;
left: 70%;
top: 50%;
transform: translate(-50%, -50%);

display: flex;

width: 500px;
height: 200px;
border-radius: 50%;
background: white;
background-repeat: no-repeat;
border-left: 2px solid ${props => props.theme.body};
border-right: 2px solid ${props => props.theme.text};
z-index:1;

`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: -10%;
    left: 0;
    width: 200%;
    height: 100%;
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props =>props.theme.body === "#000000" ? 'white' : 'black'};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;

}
`

const BoxOne = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:55vh;
display: flex;


    background-repeat: no-repeat;
    background-size: 100% 2px;


    z-index:1;

`
const Intro = () => {
    return (
        <BoxOne
        initial={{height:0}}
        animate={{height: '55vh'}}
        transition={{ type: 'spring', duration:2, delay:1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Sandeep.</h3>
                    <h6></h6>
                </Text>
            </SubBox>
            <Box
            initial={{height:0}}
            animate={{height: '55vh'}}
            transition={{ type: 'spring', duration:2, delay:1 }}
            >
            <SubBox>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{ duration:1, delay:2 }}>
                    <img className="pic" src={MeChange} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
        </BoxOne>
    )
}

export default Intro


