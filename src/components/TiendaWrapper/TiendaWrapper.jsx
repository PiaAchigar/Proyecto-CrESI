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

import "./TiendaWrapper.scss";

const TiendaWrapper = () => {
  return (
    <div className="tienda-wrapper">
      <h1>Tienda</h1>
      <h2>Acá vas a encontrar diversos cursos, juegos y recursos de CrESI.</h2>
      <div className="products-container">
        <CardTienda
          img={abp}
          alt="pdf logo"
          texto="ABP Recurso Digital"
          valor="$100"
          id="abp-recurso-digital"
        />
        <CardTienda
          img={cresi_game}
          alt="juego de mesa cresi"
          texto="CrESI Game"
          valor="$500"
          id="cresi-game"
        />
        <CardTienda
          img={curso_abp}
          alt="curso abp aprendizaje basado en proyectos"
          texto="Curso 'ABP - Aprendizaje basado en Proyectos'"
          valor="$500"
          id="curso-abp-proyectos"
        />
        <CardTienda
          img={curso_classroom_cero}
          alt="curso classroom desde cero"
          texto="Curso 'Classroom desde Cero'"
          valor="$200"
          id="curso-classroom-cero"
        />
        <CardTienda
          img={curso_classroom}
          alt="curso classroom"
          texto="Curso Classroom"
          valor="$5000"
          id="curso-classroom"
        />
        <CardTienda
          img={curso_app}
          alt="Mi primera app"
          texto="Curso 'Mi primera app'"
          valor="$500"
          id="curso-app"
        />
        <CardTienda
          img={filtro_azar}
          alt="filtro al azar"
          texto="Filtro imagen al azar"
          valor="$1000"
          id="filtro-azar"
        />
        <CardTienda
          img={filtro_simple}
          alt="filtro simple"
          texto="Filtro simple"
          valor="$500"
          id="filtro-simple"
        />
        <CardTienda
          img={filtro_vf}
          alt="filtro verdadero o falso"
          texto="Filtro Verdadero o Falso para Instagram/Facebook"
          valor="$1500"
          id="filtro-vf"
        />
        <CardTienda
          img={cafecito}
          alt="ilustracion vaso de cafe"
          texto="lorem ipsum dolor"
          valor="$50"
          id="cafecito"
        />
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
