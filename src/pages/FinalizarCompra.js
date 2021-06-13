import React, { useContext, useEffect } from "react";

import { useHistory } from "react-router-dom";
//componentes
import CompraForm from "../components/CompraForm/CompraForm";

//Contexto de cart
import { CartContext } from "../context/cartContext";

const FinalizarCompra = () => {
  const { cart, cartTotal } = useContext(CartContext);
  const hist = useHistory();

  useEffect(() => {
    //Si el carrito esta vacio, redirijo al usuario a la home page. No puede estar en esta seccion si no tiene productos agregados.
    cart.length === 0 && hist.push("/");
  });

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
