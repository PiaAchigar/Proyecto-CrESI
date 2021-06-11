import React, { useContext } from "react";

import { Link } from "react-router-dom";
//Context
import { CartContext } from "../../context/cartContext";
//Componentes
import ItemRow from "../ItemRow/ItemRow";
//CSS
import "./CarritoProds.scss";

//Este es el carro cuando hay productos agregados
const CarritoProds = ({ cart }) => {
  const { cartTotalItems, cartTotal } = useContext(CartContext);

  return (
    <div className="carrito-prods">
      <h1>Carrito({cartTotalItems})</h1>
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
      <div className="bottom-info">
        <div className="total-carrito">
          <p className="total-text">Total carrito</p>
          <p className="total">${cartTotal}</p>
        </div>

        <button className="green-btn continue-buy-btn">
          <Link to="/finalizar-compra">Continuar compra </Link>
        </button>
      </div>
    </div>
  );
};

export default CarritoProds;
