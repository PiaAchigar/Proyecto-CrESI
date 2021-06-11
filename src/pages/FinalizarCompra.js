import React, { useContext, useEffect } from "react";
//componentes
import CompraForm from "../components/CompraForm/CompraForm";

//Contexto de cart
import { CartContext } from "../context/cartContext";

const FinalizarCompra = () => {
  const { cart, cartTotal } = useContext(CartContext);
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
      <CompraForm cart={cart} cartTotal={cartTotal} />
    </div>
  );
};

export default FinalizarCompra;
