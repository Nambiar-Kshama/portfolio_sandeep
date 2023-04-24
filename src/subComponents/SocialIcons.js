import { motion } from "framer-motion";
import React from "react";
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { Facebook, Github, Twitter } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const IconsOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color:  ${props =>props.theme.body === "#000000" ? 'white' : 'white'};
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;

  position: fixed;
  bottom: 30%;
  left: 0;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;
const IconsTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color:  ${props =>props.theme.body === "#000000" ? 'white' : 'white'};
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;

  position: fixed;
  bottom: 22%;
  left: 0;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;
const IconsThree = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color:  ${props =>props.theme.body === "#000000" ? 'white' : 'black'};

  position: fixed;
  bottom: 0;
  left: 17px;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color:  ${props =>props.theme.body === "#000000" ? 'white' : 'black'};
`;

const SocialIcons = (props) => {
  return (
    <div>
    <IconsOne>
      <motion.div
        initial={{scale:0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://github.com/codebucks27"}
        >
          <Github
            width={25}
            height={25}
            fill={props =>props.theme.body === "#000000" ? 'white' : 'black'}
          />
        </a>
      </motion.div>
      </IconsOne>
      <IconsTwo>
      <motion.div
        initial={{scale:0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://twitter.com/code_bucks"}
        >
          <Twitter
            width={25}
            height={25}
            fill={props =>props.theme.body === "#000000" ? 'white' : 'black'}
          />
        </a>
      </motion.div>
     </IconsTwo>
     <IconsThree>
      <Line
        color={props.theme}
        initial={{
          height: 10,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
      </IconsThree>
      </div>
  );
};

export default SocialIcons;
