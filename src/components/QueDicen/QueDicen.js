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
    <div className="que-dicen" id="prensa-testimonios">
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
            href="https://www.lanacion.com.ar/tecnologia/cresi-app-creada-estudiantes-secundarios-ensenar-educacion-nid2308856/"
            text="CrESI: la app creada por estudiantes secundarios para enseñar Educación Sexual Integral."
          />
          <CardArticulo
            src={pagina12}
            alt="pagina 12 logo"
            href="https://www.pagina12.com.ar/263910-una-app-de-educacion-sexual-para-jovenes"
            text="Una app de educacion sexual para jóvenes"
          />
          <CardArticulo
            src={tn}
            alt="tn logo"
            href="https://tn.com.ar/tecno/f5/como-nacio-cresi-la-aplicacion-que-busca-derribar-tabues-sobre-la-educacion-sexual-integral_1028118/"
            text="Cómo nació CrESI, la app que busca derribar tabúes sobre la Educación Sexual Integral"
          />
        </div>
      </div>
    </div>
  );
};

export default QueDicen;
