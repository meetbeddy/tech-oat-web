import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import Card from "./Card";
import Map from "../../map/Map";
import styled from "styled-components";
import { motion } from "framer-motion";

const Styles = styled(motion.div)`
  width: auto;
  height: 100vh;
  display: flex;

  .rightside {
    width: 30%;
    margin: 5px;
  }
  .mainside {
    width: 70%;
    margin: 5px;
  }
  .map {
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    width: 100%;
    hieght: auto;
    margin: 0;
    display: flex;
    flex-direction: column;
    .rightside {
      width: 100%;
    }
    .mainside {
      width: 100%;
    }
  }
`;
const location = {
  address: "Lugbe, Airport RD Abuja.",
  phone: "+234 7065978335",
  lat: 8.9868,
  lng: 7.3626,
};
function ContactUs() {
  const [isShown, SetIsShown] = useState(false);
  const [isMobile, setIsmobile] = useState(false);

  useEffect(() => {
    const detect = () => {
      setIsmobile(
        !!navigator.maxTouchPoints && window.PointerEvent ? true : false
      );
    };
    window.addEventListener("resize", detect);
  });

  const handleShown = () => {
    SetIsShown(isShown === true);
  };
  const handleNotShown = () => {
    SetIsShown(isShown === false);
  };
  return (
    <Styles>
      {" "}
      <div className="rightside">
        {" "}
        <div
          onMouseEnter={handleShown}
          onMouseLeave={handleNotShown}
          style={{ cursor: "pointer" }}
        >
          {isShown === true && !isMobile ? (
            <motion.div
              initial={{ opacity: 0, x: "10vh" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: "-10vh" }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 300,
              }}
            >
              <Card location={location} />
            </motion.div>
          ) : (
            <img src="/images/contactus.svg" alt="contact" />
          )}
          {isMobile ? <Card location={location} /> : null}
        </div>
        <div className="map">
          {" "}
          <Map location={location} zoomLevel={17} />
        </div>
      </div>
      <div className="mainside">
        <h4>Send Us a Mail</h4>
        <ContactForm />
      </div>
    </Styles>
  );
}

export default ContactUs;
