import React from "react";

//Style
import "./WhatsappFloat.scss";
//Icon
import { FaWhatsapp } from "react-icons/fa";

const WhatsappFloat = () => {
  return (
    <div className="whatsapp-float">
      {/* NUMERO CELULAR DE ANDRES */}
      <a href="https://wa.me/543513325737" target="_blank">
        <FaWhatsapp className="icon-wsp" />
      </a>
    </div>
  );
};

export default WhatsappFloat;
