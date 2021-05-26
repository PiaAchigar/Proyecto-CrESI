import React, { useState } from "react";
//CSS
import "./InvitameCafecitoBtn.scss";
//Logo
import logoCafe from "../../assets/img/cafecito-logo.svg";

const InvitameCafecitoBtn = ({ txtColor, bgColor }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="cafecito-btn">
      <img
        src={logoCafe}
        alt="ilustracion taza de cafe"
        className={hover ? "cafecito-logo bounce-1" : "cafecito-logo"}
      />
      <a
        href="https://cafecito.app/cresi"
        target="_blank"
        rel="noopener noreferrer"
      >
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
      </a>
    </div>
  );
};

export default InvitameCafecitoBtn;
