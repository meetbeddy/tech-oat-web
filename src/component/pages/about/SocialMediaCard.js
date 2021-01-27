import React from "react";
import { BouncyButton } from "../../button/Bottons";

function SocialMediaCard() {
  return (
    <React.Fragment>
      <BouncyButton>
        <i className="fab fa-twitter-square"></i>
      </BouncyButton>
      <BouncyButton>
        <i class="fab fa-whatsapp-square"></i>
      </BouncyButton>
      <BouncyButton>
        <i className="fab fa-facebook-square"></i>
      </BouncyButton>
    </React.Fragment>
  );
}

export default SocialMediaCard;
