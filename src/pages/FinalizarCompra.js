import React, { useContext } from "react";
//componentes
import CompraForm from "../components/CompraForm/CompraForm";

//Contexto de cart
import { CartContext } from "../context/cartContext";

const FinalizarCompra = () => {
  const { cart, cartTotal } = useContext(CartContext);

  return (
    <div className="page-wrapper">
      <CompraForm cart={cart} cartTotal={cartTotal} />
    </div>
  );
};

export default FinalizarCompra;
