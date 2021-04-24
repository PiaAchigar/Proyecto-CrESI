import React from "react";
//Components
import Iframe from "../Iframe/Iframe";
import CardArticulo from "../CardArticulo/CardArticulo";

//Images
import lanacion from "../../assets/img/prensa-lanacion.png";
import pagina12 from "../../assets/img/prensa-pagina12.png";
import tn from "../../assets/img/prensa-tn.png";

//Style
import "./QueDicen.scss";

const QueDicen = () => {
  return (
    <div className="que-dicen">
      <h1>¿Qué dicen de nosotros?</h1>
      <div className="slider-container1">
        <div className="slider">
          <Iframe src="https://www.youtube.com/embed/uOHz86iDQ3g" />
          <Iframe src="https://www.youtube.com/embed/uszRaw2e7os" />
          <Iframe src="https://www.youtube.com/embed/XCFnMVAfN9o" />
        </div>
      </div>
      <div className="slider-container2">
        <div className="slider">
          <CardArticulo
            src={lanacion}
            alt="la nacion logo"
            href="https://google.com"
            text="CrESI: la app creada por estudiantes secundarios para enseñar Educación Sexual Integral."
          />
          <CardArticulo
            src={pagina12}
            alt="pagina 12 logo"
            href="https://google.com"
            text="Una app de educacion sexual para jóvenes"
          />
          <CardArticulo
            src={tn}
            alt="tn logo"
            href="https://google.com"
            text="Cómo nació CrESI, la app que busca derribar tabúes sobre la Educación Sexual Integral"
          />
        </div>
      </div>
    </div>
  );
};

export default QueDicen;
