import React, { useEffect } from "react";

import CarritoVacio from "../components/CarritoVacio/CarritoVacio";

const Carrito = () => {
  //GO TOP
  useEffect(() => {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
      });
    }, 250);
  }, []);

  return (
    <div className="page-wrapper">
      <CarritoVacio />
    </div>
  );
};

export default Carrito;
