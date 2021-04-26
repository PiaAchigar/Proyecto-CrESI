import React from "react";

import "./CardArticulo.scss";

const CardArticulo = ({ src, alt, text, href }) => {
  return (
    <div className="card-articulo">
      <div className="card-top">
        <img src={src} alt={alt} />
      </div>
      <div className="card-botomm">
        <p>{text}</p>

        <a href={href} className="btn-articulo">
          Ver
        </a>
      </div>
    </div>
  );
};

export default CardArticulo;
