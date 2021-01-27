import React from "react";
import { Button } from "../../button/Bottons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Landingimg from "./img/landing-img.jpg";
import { motion } from "framer-motion";

const ContainerVariants = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const Styles = styled(motion.div)`
  width: auto;
  height: 100vh;
  background-color: #d8d2d4;
  background-image: url(${Landingimg});
  text-align: center;

  h1 {
    font-family: "Fredoka One", cursive;
    font-size: 2em;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0em;
  }
  h4 {
    font-family: "Pacifico", cursive;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0em;
  }
  .main {
    margin-top: 7vh;
  }
  .message {
    margin-top: 25vh;
  }
  .actionbtn {
    margin-top: 10vh;
  }
  @media (max-width: 768px) {
    width: auto;
    hieght: auto;

    letter-spacing: -2px;
    background-repeat: no-repeat;
    h1 {
      font-family: "Fredoka One", cursive;
      font-size: 1.5em;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 0em;
    }
    h4 {
      font-family: "Pacifico", cursive;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      letter-spacing: 0em;
    }
    .actionbtn {
      margin-top: 4vh;
    }
    .main {
      margin-top: 10px;
    }
    .message {
      margin-top: 5vh;
    }
  }
`;

function HomePage() {
  return (
    <Styles
      variants={ContainerVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <div>
        <div className="main">
          {" "}
          <h4>Technical Oath Aluminium.co </h4>
        </div>
        <motion.div
          className="message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <h1>
            Fastest Growing Company in Construction, Fabrication and
            Installation of Aluminium Doors and Windows <br />
            in Nigeria
          </h1>
        </motion.div>
        <motion.div class="actionbtn">
          <Link to="/about">
            <Button
              initial={{ opacity: 0, y: "10vh" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                delay: 2,
                type: "spring",
                stiffness: 300,
              }}
            >
              Read More
            </Button>
          </Link>
        </motion.div>
      </div>
    </Styles>
  );
}

export default HomePage;
