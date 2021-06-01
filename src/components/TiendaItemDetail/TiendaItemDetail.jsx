import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//Componentes
import ItemCounter from "../ItemCounter/ItemCounter";
//Imagenes
import heroapp from "../../assets/img/hero-imgapp.png";
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
  const { id } = useParams();
  const [logo, setLogo] = useState(false);

  useEffect(() => {
    //SI NO EXISTE NI TEMARIO NI DURACION RETORNO EL LOGO CRESI PARA QUE NO QUEDE UN ESPACIO EN BLANCO (SOLO PARA DESKTOP)
    if (temario.length === 0 && duration === "" && window.innerWidth > 1200) {
      setLogo(true);
    } else {
      setLogo(false);
    }
  }, [id, temario.length, duration]);

  return (
    <div className="item-detail">
      <div className="img-wrapper">
        <img src={imgName} alt={imgAlt} />
      </div>
      <div className="item-info">
        <h1 className="item-detail__title">{name}</h1>
        <p className="item-detail__price">${price}</p>
        <div className="ItemCounter-wrapper">
          <ItemCounter />
        </div>
        <p className="item-detail__description">{description}</p>
      </div>
      <div className="wrapper">
        {logo && (
          <div className="img-wrap">
            <img src={heroapp} alt="app cresi mobile" />
          </div>
        )}

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
