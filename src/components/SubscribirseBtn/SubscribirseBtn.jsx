import React from "react";
//CSS
import "./SubscribirseBtn.scss";
//Iconos
import { FiSend } from "react-icons/fi";

const SubscribirseBtn = () => {
  return (
    <div className="subscribirse-btn">
      <input
        type="text"
        placeholder="tuemail@ejemplo.com"
        className="suscribe-input"
      />
      <div className="send-icon-wrapper">
        <FiSend className="send-icon" />
      </div>
    </div>
  );
};

export default SubscribirseBtn;
