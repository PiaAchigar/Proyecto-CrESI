import React from "react";

import "./CardTienda.scss";

const CardTienda = ({ img, alt, texto, valor }) => {
  return (
    <div className="card-tienda">
      <div className="card-top">
        <img src={img} alt={alt} />
      </div>
      <div className="card-botomm">
        <p className="p-top">{texto}</p>
        <hr />
        <p className="p-botomm">{valor}</p>
      </div>
    </div>
  );
};

export default CardTienda;
