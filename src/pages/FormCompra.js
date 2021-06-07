import React, { useContext } from "react";
//Contexto de cart
import { CartContext } from "../context/cartContext";

const FormCompra = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  return (
    <div className="page-wrapper">
      <h1>Formulario de compra</h1>
    </div>
  );
};

export default FormCompra;
