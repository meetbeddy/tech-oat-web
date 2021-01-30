import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { TechOathLogo } from "../Logos";
import { motion } from "framer-motion";

const Styles = styled(motion.div)`
  .navbar {
    background-color: transparent;
  }
  a {
    :hover {
      background: #d8d2d4;
      border-radius: 5px;
      box-shadow: 0 0.4em 0.4em rgba(0, 0, 0, 0.35);
    }
  }
  .navbar-nav,
  .navbar-light .nav-link {
    color: black;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0em;
    text-shadow: 0 0.4em 0.4em rgba(0, 0, 0, 0.35);
    font-family: "Fredoka One", cursive;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    display: inline-flex;
    margin: auto;
    font-family: "Pacifico", cursive;
    font-size: 2em;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-shadow: 0 0.4em 0.4em rgba(0, 0, 0, 0.35);
    color: #a66c7c;
    .logo {
      margin-right: 5px;
    }
    &:hover {
      background: none;
      :hover {
        box-shadow: none;
      }
    }
    @media (max-width: 768px) {
      width: auto;
      font-size: 2em;
      letter-spacing: -2px;
    }
  }
`;
function NavBar() {
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <motion.div className="logo">
            {" "}
            <TechOathLogo />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "10vh" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: 2,
              type: "spring",
              stiffness: 300,
            }}
          >
            Technical Oath
          </motion.div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/works">View Works</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavBar;
