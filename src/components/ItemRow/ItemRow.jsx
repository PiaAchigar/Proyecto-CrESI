import React from "react";

//Icons

import { FiTrash2 } from "react-icons/fi";
//CSS
import "./ItemRow.scss";

const ItemRow = ({ name, price, quantity, img, id }) => {
  return (
    <div className="item-row">
      <div className="wrapper-one">
        <div className="item__img">
          <img src={img} alt="" />
        </div>
        <h1 className="item__name">{name}</h1>
        <div className="vertical-line"></div>
        <div className="trash-wrapper">
          <FiTrash2 className="trash-icon" />
        </div>
      </div>

      <div className="wrapper-two">
        <div className="item__counter">
          <p>Cantidad</p>
          <div className="counter">
            <button className="counter-btn">-</button>
            <div className="counter-total">{quantity}</div>
            <button className="counter-btn">+</button>
          </div>
        </div>

        <div className="item__price">
          <span>Precio</span>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemRow;
