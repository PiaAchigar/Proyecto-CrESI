import React, { useState, useEffect } from "react";
//CSS
import "./InvitameCafecitoBtn.scss";
//Logo
import logoCafe from "../../assets/img/cafecito-logo.svg";

const InvitameCafecitoBtn = ({ txtColor, bgColor }) => {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    console.log(hover);
  }, [hover]);

  return (
    <div className="cafecito-btn">
      <img
        src={logoCafe}
        alt="ilustracion taza de cafe"
        className={hover ? "cafecito-logo bounce-1" : "cafecito-logo"}
      />
      <input
        type="button"
        value="Invitame un Cafecito (ARS $100)"
        className="cafecito-input"
        onMouseEnter={() => {
          setHover(!hover);
        }}
        onMouseLeave={() => {
          setHover(!hover);
        }}
        style={{
          backgroundColor: bgColor,
          color: txtColor,
        }}
      />
    </div>
  );
};

export default InvitameCafecitoBtn;
