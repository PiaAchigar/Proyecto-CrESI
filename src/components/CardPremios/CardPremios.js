import React from "react";

//Style
import "./CardPremios.scss";

const CardPremios = ({ img, alt, texto, premio }, ref) => {
  return (
    <div className="card-premio">
      <div className="card-top">
        <img src={img} alt={alt} />
      </div>
      <div className="card-botomm">
        <p className="p-top">{texto}</p>
        <hr />
        <p className="p-botomm">{premio}</p>
      </div>
    </div>
  );
};

export default CardPremios;
