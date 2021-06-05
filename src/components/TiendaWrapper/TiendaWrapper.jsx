import React from "react";

//Componentes
import CardTienda from "../CardTienda/CardTienda";
import InvitameCafecitoBtn from "../InvitameCafecitoBtn/InvitameCafecitoBtn";
//Imagenes
import cafecito from "../../assets/img/tienda-cafecito.jpg";
import curso_abp from "../../assets/img/tienda-abp.png";
import curso_classroom from "../../assets/img/tienda-classroom.jpg";
import curso_classroom_cero from "../../assets/img/tienda-classroomcero.png";
import curso_app from "../../assets/img/tienda-cursoapp.jpg";
import filtro_azar from "../../assets/img/tienda-filtroimagen.jpg";
import filtro_simple from "../../assets/img/tienda-filtrosimple.jpg";
import filtro_vf from "../../assets/img/tienda-filtrovf.jpg";
import cresi_game from "../../assets/img/tienda-juego.jpeg";
import abp from "../../assets/img/tienda-pdf.jpg";
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
