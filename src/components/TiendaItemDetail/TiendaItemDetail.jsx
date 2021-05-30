import React from "react";
//Componentes
import ItemCounter from "../ItemCounter/ItemCounter";
//SCSS
import "./TiendaItemDetail.scss";

const TiendaItemDetail = ({
  name,
  price,
  description,
  temario,
  duration,
  imgName,
  imgAlt,
}) => {
  return (
    <div className="item-detail">
      <div className="img-wrapper">
        <img src={imgName} alt={imgAlt} />
      </div>
      <div className="item-info">
        <h1 className="item-detail__title">{name}</h1>
        <p className="item-detail__price">${price}</p>
        <ItemCounter />
        <p className="item-detail__description">{description}</p>
      </div>
      <div className="wrapper">
        <div className="item-detail__temario">
          <h3 className="temario__title">{temario.length > 0 && "Temario:"}</h3>
          <ul className="item-detail__list">
            {temario.map((tema, i) => (
              <li key={i}>{tema}</li>
            ))}
          </ul>
        </div>
        <div className="item-detail__duration">
          <h3 className="duration__title">{duration !== "" && "Duración:"}</h3>
          <p className="duration">{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default TiendaItemDetail;
