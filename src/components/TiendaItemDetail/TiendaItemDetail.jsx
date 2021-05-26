import React from "react";

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
      <h1 className="item-detail__title">{name}</h1>
      <p className="item-detail__price">{price}</p>
      <p>{description}</p>
      <div className="item-detail__temario">
        <h3 className="temario__title">{temario.length > 0 && "Temario:"}</h3>
        <ul className="item-detail__list">
          {temario.map((tema, i) => (
            <li key={i}>{tema}</li>
          ))}
        </ul>
      </div>
      <div className="item-detail__duration">
        <h3 className="duration__title">{temario.length > 0 && "Duración:"}</h3>
        <p className="duration">{duration}</p>
      </div>

      <img src={imgName} alt={imgAlt} />
    </div>
  );
};

export default TiendaItemDetail;
