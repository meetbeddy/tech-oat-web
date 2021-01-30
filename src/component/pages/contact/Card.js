import React from "react";
import { BouncyButton } from "../../button/Bottons";
import "./card.css";

function Card(props) {
  const { location } = props;
  return (
    <div className="card w-100">
      <div className="card-body">
        <div className="card-text">
          <p id="address">
            <i className="fas fa-map-marker-alt"></i>
            {""} {location.address}
          </p>
          <p id="phone">
            <i className="fas fa-phone-square"></i>
            {""}
            {location.phone}
          </p>
        </div>

        <div className="social-icons">
          <BouncyButton>
            <i className="fab fa-twitter-square"></i>
          </BouncyButton>
          <BouncyButton>
            <i className="fab fa-linkedin"></i>
          </BouncyButton>
          <BouncyButton>
            <i className="fab fa-facebook-square"></i>
          </BouncyButton>
        </div>
      </div>
    </div>
  );
}

export default Card;
