import React from "react";

//Imagenes
import quienes_img from "../../assets/img/quienes-img.png";
import porque_img from "../../assets/img/porque-img.png";
//Style
import "./QuienesSomos.scss";

const QuienesSomos = () => {
  return (
    <div className="quienes-porque-container">
      <section className="quienes-somos">
        <h1>¿Quiénes somos?</h1>
        <article className="article">
          <div className="image-container">
            <img src={quienes_img} alt="" />
          </div>
          <div className="text-container">
            <h2>Somos la primera app de educación sexual integral de Argentina</h2>
            <p>
              CrESI es un proyecto desarrollado por estudiantes del Colegio Mano Amiga de Pilar,
              Buenos Aires. <br />
              El nombre surge de la unión de la palabra Crecer y de las sigas ESI. El embarazo
              adolescente se debe muchas veces por la falta de educación sexual integral. Por eso en
              agosto del 2015 decidimos hacer una aplicación que organizara la información de manera
              más práctica. Así fuimos realizando encuestas y descubrimos las dudas de los jóvenes.
            </p>
          </div>
        </article>
      </section>
      <section className="porque-lo-hacemos">
        <h1>¿Por qué lo hacemos?</h1>
        <article className="article">
          <div className="image-container">
            <img src={porque_img} alt="" />
          </div>
          <div className="text-container">
            <h2>"Nuestro objetivo es bajar el porcentaje de embarazos en las adolescentes"</h2>
            <p>
              "Creemos que debe ser una app sumamente educativa para los jóvenes y que trate sobre
              salud en general."
              <br />
              <br />
              "Tiene que abarcar todos los aspectos de la sociedad para educar a los adolescentes.
              Se incluye, ademas de la salud, temas como los derechos de los jóvenes y la diversidad
              de género."
            </p>
          </div>
        </article>
      </section>
    </div>
  );
};

export default QuienesSomos;
