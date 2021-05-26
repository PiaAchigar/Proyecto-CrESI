import React from "react";

import { Link } from "react-router-dom";

import "./CardTienda.scss";

const CardTienda = ({ img, alt, texto, valor, id }) => {
  return (
    <Link to={`/tienda/${id}`} className="card-tienda">
      <div className="card-top">
        <img src={img} alt={alt} />
      </div>
      <div className="card-botomm">
        <p className="p-top">{texto}</p>
        <hr />
        <p className="p-botomm">{valor}</p>
      </div>
    </Link>
  );
};

export default CardTienda;
