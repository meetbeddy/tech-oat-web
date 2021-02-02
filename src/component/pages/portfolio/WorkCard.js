import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
width:100%,
height:100%,
margin:auto;
box-sizing:border-box;
 transition: all .2s ease-in-out; 
img:hover{
  transform: scale(2,2);
}


`;

function WorkCard(props) {
  return (
    <StyledContainer>
      <div
        style={{
          border: "1px solid silver",
          height: "250px",
          width: "350px",
          marginBottom: "20px",
          overflow: " hidden",
        }}
      >
        <img
          src={props.imageUrl}
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>

      <p>{props.title}</p>
    </StyledContainer>
  );
}

export default WorkCard;
