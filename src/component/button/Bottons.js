import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const buttonBounce = keyframes`
{
   0% {
    top: 0em;
  }
   40% {
    top: 0em;
  }
   43% {
    top: -0.9em;
  }
   46% {
    top: 0em;
  }
   48% {
    top: -0.4em;
  }
   50% {
    top: 0em;
  }
   100% {
    top: 0em;
  }`;

export const Button = styled(motion.button)`
   display: inline-block;
   width: 12em
   height:4.5em
   padding: 0.46em;
   border: 0.1em solid #a66c7c;;
   margin: 0 0.2em 0.2em 0;
   border-radius: 0.7em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   color: white;
   text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
   background-color: rgb(85,48,53 ,0.7);
   text-align: center;
   transition: all 0.15s;
  :hover{
     text-shadow: 0 0 2em rgba(255,255,255,1);
     color:#A3B2B7;
     border-color:#FFFFFF;
    }
    @media (max-width: 768px) {
  
      width:9em;
      height:3em;
      display:block;
      margin:0.4em auto;
    font-size:0.7em;
     font-weight: 100;
    
  
`;
export const BouncyButton = styled.button`
  display: inline-block;

   padding: 0.35em 1.2em;
   border: 0.1em solid #ffffff;
  background-color: transparent;
   margin: 0 0.3em 0.3em 0;
   border-radius: 0.25rem;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 400;
  vertical-align: middle;
   text-align: center;
   transition: all 0.2s;
   animation: ${buttonBounce} 5s infinite linear;
   position: relative;
  :hover {
     color: white;
     background-color: #4267b2;
  }
`;

export const ButtonSmall = styled.button`
display: inline-block;
   width: 6em
   height:2.5em
   padding: 0.46em;
   border: 0.1em solid silver;
   margin: 0 0.2em 0.2em 0;
   border-radius: 0.7em;
   box-sizing: border-box;
   text-decoration: none;
   font-family: "Roboto", sans-serif;
   font-weight: 300;
   color: white;
   text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
   background-color: rgb(63,61,86 ,0.2);
   text-align: center;
   transition: all 0.15s;
  :hover{
     text-shadow: 0 0 2em rgba(255,255,255,1);
     color:#FFFFFF;
     border-color:#FFFFFF;
    }
:active{
 box-shadow:inset 0 0.6em 2em -0.3em rgba(0,0,0,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12);
}
@media all and (max-width:30em){
 a.button{
  display:block;
  margin:0.4em auto;
 }
}
`;
