import React from "react";

//Componentes
import CardTienda from "../CardTienda/CardTienda";
import InvitameCafecitoBtn from "../InvitameCafecitoBtn/InvitameCafecitoBtn";

//CSS
import "./TiendaWrapper.scss";
// ------ ARRAY DE PRODUCTOS ------ //
import infoProductos from "../../assets/tienda-productos-info";

const TiendaWrapper = () => {
  return (
    <div className="tienda-wrapper">
      <h1>Tienda</h1>
      <h2>Acá vas a encontrar diversos cursos, juegos y recursos de CrESI.</h2>
      <div className="products-container">
        {infoProductos.map((prod, key) => (
          <CardTienda
            img={prod.img}
            alt=""
            texto={prod.name}
            valor={prod.price}
            id={prod.id}
            key={key}
          />
        ))}
      </div>
      <div className="wrapper">
        <h3>
          ¡También podes apoyarnos para que este proyecto siga creciendo con tu
          donación!
        </h3>
        <InvitameCafecitoBtn txtColor="#fff" bgColor="#8fa2cc" />
      </div>
    </div>
  );
};

export default TiendaWrapper;
