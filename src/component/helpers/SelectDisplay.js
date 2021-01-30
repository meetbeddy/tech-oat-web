import React, { useState } from "react";
import Styled from "styled-components";

const Styles = Styled.div`
display:flex;

button{
    width:"auto";
    border:none;
    background:none;
    padding:1px;
    margin:5px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-align:left;
    :focus {
        border: 0;
        outline: none;
      }
}
.all{
    width:36px;
    color: rgba(0, 0, 0, 0.38);
    border-bottom:none;
}
.categories{
    width:92px;
    color: rgba(0, 0, 0, 0.38);
    border-bottom:none;
  
}
.active{
    margin:0;
    color:#590A5B;
    border-bottom:2px solid #590A5B;
}
`;

function SelectDisplay() {
  const [isSelected, setIsSelected] = useState("true");
  const [selected, setSelected] = useState("All");

  return (
    <Styles>
      <div
        isSelected=""
        className={
          isSelected === "true" && selected === "All" ? "active" : "all"
        }
        name="All"
        onClick={() => {
          setSelected("All");
          setIsSelected("true");
        }}
      >
        <button>All</button>
      </div>
      <div
        className={
          isSelected === "true" && selected === "Categories"
            ? "active"
            : "categories"
        }
        onClick={() => {
          setSelected("Categories");
          setIsSelected("true");
        }}
      >
        <button>Categories</button>
      </div>
    </Styles>
  );
}

export default SelectDisplay;
