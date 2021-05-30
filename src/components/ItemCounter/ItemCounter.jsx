import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// SCSS
import "./ItemCounter.scss";

const ItemCounter = () => {
  const [counter, setCounter] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    setCounter(1);
  }, [id]);

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
      <button className="add-to-cart">Agregar al carrito</button>
    </div>
  );
};

export default ItemCounter;
