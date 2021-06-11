import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
//Icons
import { FiTrash2 } from "react-icons/fi";
//CSS
import "./ItemRow.scss";

const ItemRow = ({ name, price, quantity, img, id }) => {
  const { deleteItemById, changeQty } = useContext(CartContext);

  return (
    <div className="item-row">
      <div className="item__img">
        <img src={img} alt="producto carrito cresi" />
      </div>

      <div className="wrapper-one">
        <h1 className="item__name">{name}</h1>
        <div className="item__counter">
          <p>Cantidad</p>
          <div className="counter">
            <button
              className="counter-btn"
              onClick={() => {
                changeQty("-", id);
              }}
              disabled={quantity === 1}
            >
              -
            </button>
            <div className="counter-total">{quantity}</div>
            <button
              className="counter-btn"
              onClick={() => {
                changeQty("+", id);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="wrapper-two">
        <div className="item__price">
          <span>Precio</span>
          <p>${price * quantity}</p>
        </div>

        <div className="trash-wrapper">
          <FiTrash2 className="trash-icon" onClick={() => deleteItemById(id)} />
        </div>
      </div>
    </div>
  );
};

export default ItemRow;
