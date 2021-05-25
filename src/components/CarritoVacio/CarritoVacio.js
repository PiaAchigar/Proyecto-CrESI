import React from "react";
import "./CarritoVacio.scss";
import { Link } from "react-router-dom";
const CarritoVacio = () => {
  return (
    <div className="carrito">
      <h1>Carrito</h1>
      <hr />
      <div className="title-btn-wrapper">
        <h2>Tu carrito está vacío</h2>
        <Link to={`/Tienda`} className="to-tienda-btn">
          Ir a la Tienda
        </Link>
      </div>
    </div>
  );
};
export default CarritoVacio;
