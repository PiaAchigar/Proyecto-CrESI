import React, { useEffect, useContext } from "react";
//Context
import { CartContext } from "../context/cartContext";
import CarritoProds from "../components/CarritoProds/CarritoProds";
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

  const { cart } = useContext(CartContext);

  return (
    <div className="page-wrapper">
      {cart.length > 0 ? <CarritoProds cart={cart} /> : <CarritoVacio />}
    </div>
  );
};

export default Carrito;
