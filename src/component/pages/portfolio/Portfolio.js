import React from "react";
import Images from "./Images";
import { motion } from "framer-motion";
import styled from "styled-components";

const Styles = styled(motion.div)`
  display: block;
  margin: auto;
  text-align: center;
  h1 {
    font-family: "Fredoka One", cursive;
    font-size: 2em;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0em;
    text-shadow: 0 0.4em 0.4em rgba(0, 0, 0, 0.35);
  }
`;

function Portfolio() {
  return (
    <Styles>
      <h1>Our Works</h1>
      <Images />
    </Styles>
  );
}

export default Portfolio;
