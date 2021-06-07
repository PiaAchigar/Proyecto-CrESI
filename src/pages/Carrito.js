import React, { useEffect, useContext } from "react";
//Context
import { CartContext } from "../context/cartContext";
import CarritoProds from "../components/CarritoProds/CarritoProds";
import CarritoVacio from "../components/CarritoVacio/CarritoVacio";

//Components
import Bubble from "../components/BubbleContainer/Bubble";
import BubbleContainer from "../components/BubbleContainer/BubbleContainer";

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
      <BubbleContainer
        content={
          cart.length > 0 ? <CarritoProds cart={cart} /> : <CarritoVacio />
        }
        hidden
      >
        <Bubble height="105px" top="0" left="0" violeta />
        <Bubble height="55px" bottom="25%" right="25%" verde />
      </BubbleContainer>
    </div>
  );
};

export default Carrito;
