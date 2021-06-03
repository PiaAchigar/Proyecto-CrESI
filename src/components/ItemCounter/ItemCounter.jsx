import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
// SCSS
import "./ItemCounter.scss";
//Context
import { CartContext } from "../../context/cartContext";

const ItemCounter = ({ item }) => {
  const [counter, setCounter] = useState(1);
  const { id } = useParams();
  const { cart, setCart, addToCart, isInCart } = useContext(CartContext);

  //CAMBIA URL SE RESTAURA EL CONTADOR
  useEffect(() => {
    setCounter(1);
  }, [id]);
  useEffect(() => {
    console.log(isInCart(item.id));
  }, []);

  const removeItem = () => setCounter(counter - 1);
  const addItem = () => setCounter(counter + 1);

  return (
    <div className="item-counter">
      <div className="counter-wrapper">
        <button
          className="counter-btn"
          onClick={removeItem}
          disabled={counter === 1}
        >
          -
        </button>
        <div className="counter-total">{counter}</div>
        <button className="counter-btn" onClick={addItem}>
          +
        </button>
      </div>
      <button
        className={!isInCart(item.id) ? "add-to-cart" : "add-to-cart added"}
        onClick={() => {
          addToCart({
            name: item.name,
            quantity: counter,
            price: item.price,
            img: item.img,
            id: item.id,
          });
          setCounter(1);
        }}
        disabled={isInCart(item.id)}
      >
        {!isInCart(item.id)
          ? "Agregar al carrito"
          : "Producto agregado al carrito"}
      </button>
    </div>
  );
};

export default ItemCounter;
