import React from "react";
//Components
import CardTienda from "../CardTienda/CardTienda";
//SCSS
import "./RelatedProducts.scss";

const RelatedProducts = ({ related }) => {
  return (
    <div className="related-products">
      <h2>Productos relacionados</h2>
      <div className="cards-wrapper">
        {related !== [] &&
          related.map((prod, key) => (
            <CardTienda
              img={prod[0]?.img}
              alt="asd"
              texto={prod[0]?.name}
              valor={prod[0]?.price}
              id={prod[0]?.id}
              key={key}
            />
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
