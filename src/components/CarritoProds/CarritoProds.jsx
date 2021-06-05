import React, { useState, useEffect, useContext } from "react";
//Context
import { CartContext } from "../../context/cartContext";
//Componentes
import ItemRow from "../ItemRow/ItemRow";
//CSS
import "./CarritoProds.scss";

//Este es el carro cuando hay productos agregados
const CarritoProds = ({ cart }) => {
  const { cartTotalItems } = useContext(CartContext);
  const [totalItems, setTotalItems] = useState("");

  useEffect(() => {
    setTotalItems(cartTotalItems);
  }, []);

  return (
    <div className="carrito-prods">
      <h1>Carrito({totalItems})</h1>
      <hr />
      {cart.map(({ name, id, price, quantity, img }, key) => (
        <div key={key}>
          <ItemRow
            name={name}
            price={price}
            quantity={quantity}
            img={img}
            id={id}
          />
        </div>
      ))}
    </div>
  );
};

export default CarritoProds;
