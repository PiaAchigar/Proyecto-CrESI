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
              img={prod[0]?.imgName}
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
{
  /* <div className="related-wrapper" style={relatedWrapper}></div>; */
}

// const relatedWrapper = {
//   display: "grid",
//   placeItems: "center",
//   gridTemplateColumns: "repeat(auto-fit, minmax(150px,1fr))",
//   gridColumnGap: "3rem",
//   gridRowGap: "1.5rem",
//   padding: "3rem 5rem",
// };
// const cardWrap = {
//   // minWidth: "160px",
//   // maxWidth: "160px",
//   height: "240px",
//   minHeight: "240px",
//   maxHeight: "240px",
//   boxShadow: "0px 4px 10px gray",
// };
