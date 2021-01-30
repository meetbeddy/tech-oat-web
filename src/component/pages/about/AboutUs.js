import React from "react";
import Styled from "styled-components";
import { motion } from "framer-motion";
import SocialMediaCard from "./SocialMediaCard";
import Construction from "./coffeebreak.svg";

const ContainerVariants = {
  initial: { x: "100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      delay: 1,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const StyledWrapper = Styled(motion.div)`
width:100%;
height:100vh;
display:inline-flex;
.about{
    width:70%;
    height:auto;
    margin:10px;
    text-align:center; 
    background-image: url(${Construction});
    background-repeat: no-repeat;
  background-position: left bottom;
  background-size: auto center;
  top: auto;
  width: 100vw;
  height: 100vh;
    

}
.text{
    width:100%;
    height:30%
    border:1px solid silver;
    border-radius:0px 0px 30px 30px;
    margin-top:4px;
    padding:5px;
}
.title{
    width:100%;
    background-color:#D8D2D4;
    border-radius:30px 0px 30px 0px;
    box-shadow: 0 0.4em 0.4em rgba(0, 0, 0, 0.35);
   
    h1{
      font-family: "Fredoka One", cursive;
        font-size: 45px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.1em;
       
    }
    
}
.sidecontent{
  width:30%;
  height:auto;
  display:flex;
  flex-direction:column;
  margin:5px 10px 5px 5px;
  
}
.missionstmt{
    width:100%;
    height:auto;
    border:1px solid silver;
    border-radius:30px 0px 30px 0px;
    background-color:rgb(155,173,173,0.2);
   
    margin:5px;
    padding:10px;
    text-align:center;
    :hover{
      box-shadow: 0 0.4em 0.4em rgba(0, 0, 0, 0.35);
    }
    ul{
      list-style-type: circle;
      list-style-position: inside;
      margin: 0;
      padding: 0;
      
    }
}
.membersect{
  width:100%;
  height:auto
  display:block;
  text-align:left;
  color:black;
  margin-top:10px;
   p#phone{
    margin:0;
    background-color:rgb(0,0,0,0.2);
    font-weight:600;
  }

  h4 {
    font-family: "Fredoka One", cursive;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.2em;
   
  }
  
}
.membertitle{
  background-color:rgb(155,173,173,0.2);
  width:auto;
  text-align:center;
  border-radius:20px 20px 20px 20px;
  box-shadow: 0 0.4em 0.4em rgba(0, 0, 0, 0.35);
}
.sect{
  width:100%;
  display:inline-flex;
img{
  border:1px solid silver;
  border-radius:50%;
}
.profile{
  text-align:center;
  width:40%;
 
}
.profiletext{
  width:60%;
  margin:5px;
}
}
@media (max-width: 768px) {
  width: 100%;
  hieght: auto;
  margin:0;
  display:flex;
  flex-direction:column;
 
.sidecontent{
    width:auto;
    height:auto;
  }
.about{
  width:auto;
  height:auto;
  margin:0;
  text-align:center; 
background-position: left bottom;
background-size: auto auto;
h1{
  
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  
 
}

}
.text{
  width:100%;
  height:auto;
  border:1px solid silver;
  border-radius:0px 0px 30px 30px;
  margin-top:4px;
  padding:5px;
}
.membersect{
  margin:10px 0 0;
  
}
// .profile{
//   text-align:center;
//   width:auto;
 
// }
img{
  width:25vw;
}
.profiletext{
  width:100%;
  
}
`;

const AboutUs = () => {
  return (
    <StyledWrapper
      variants={ContainerVariants}
      initial="initial"
      animate="visible"
      exit="exit"
    >
      <div className="sidecontent">
        <motion.div
          className="missionstmt"
          initial={{ opacity: 0, x: "10vh" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 3,
            type: "spring",
            stiffness: 300,
          }}
        >
          <h4>Mission Statement</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur alias laborum architecto in quae provident veritatis
            earum.
          </p>
        </motion.div>
        <motion.div
          className="missionstmt"
          initial={{ opacity: 0, x: "10vh" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 4,
            type: "spring",
            stiffness: 300,
          }}
        >
          <h4>Our Services</h4>
          <ul>
            <li>Lorem ipsum dolor sit,</li>
            <li>Lorem ipsum dolor sit,</li>
            <li>Lorem ipsum dolor sit,</li>
            <li>Lorem ipsum dolor sit,</li>
          </ul>
        </motion.div>
      </div>

      <div className="about">
        <div className="title">
          {" "}
          <h1>About Us</h1>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis tempore quae nobis voluptatum laudantium, sapiente earum
            aliquid illum adipisci tempora exercitationem quod reprehenderit sed
            eum. Nisi odit asperiores placeat tempora. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Perferendis tempore quae nobis
            voluptatum laudantium, sapiente earum aliquid illum adipisci tempora
            exercitationem quod reprehenderit sed eum. Nisi odit asperiores
            placeat tempora. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Perferendis tempore quae nobis voluptatum laudantium, sapiente
            earum aliquid illum adipisci tempora exercitationem quod
            reprehenderit sed eum. Nisi odit asperiores placeat tempora.
          </p>
        </div>
        <div className="membersect">
          <div className="membertitle">
            <h4>Meet The Chief Tech</h4>
          </div>
          <div className="sect">
            <div className="profile">
              <img src="/images/person2.jpg" alt="chieftech" />
              <div className="social">
                <SocialMediaCard />{" "}
              </div>
              <h5>Oluwasegun Aluko Timothy</h5>
              <p id="phone"> CEO/Chief Tech</p>
              <p id="phone">
                <i className="fas fa-phone-square"></i>
                {""}
                {""}
                {""}
                07064492675
              </p>
            </div>
            <div className="profiletext">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                in quos ipsa quae. Odit officiis maxime ab, ipsam rem voluptatem
                provident dignissimos reprehenderit cum optio assumenda incidunt
                soluta commodi rerum!
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default AboutUs;
