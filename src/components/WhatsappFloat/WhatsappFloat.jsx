import React from "react";

//Style
import "./WhatsappFloat.scss";
//Icon
import { FaWhatsapp } from "react-icons/fa";

const WhatsappFloat = () => {
  return (
    <div className="whatsapp-float">
      <FaWhatsapp className="icon-wsp" />
    </div>
  );
};

export default WhatsappFloat;
