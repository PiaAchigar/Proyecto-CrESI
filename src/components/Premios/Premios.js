import React from "react";

//images
import imgPrincipal from "../../assets/img/premios-bg.jpg";
import impulso from "../../assets/img/premios-impulso.jpg";
import chicos from "../../assets/img/premios-chicos.jpg";
import nosotros from "../../assets/img/premios-nosotros.jpg";
import concausa from "../../assets/img/premios-concausa.png";
import fundacion from "../../assets/img/premios-fundacion.jpg";

//Components
import CardPremios from "../CardPremios/CardPremios";

//Style
import "./Premios.scss";

const Premios = () => {
  // //CARD QUE VA A ESTAR SIEMPRE AL MEDIO EN MOBILE, EN ESTA CASO LA 3ra, SON 7 CARDS
  // //SOLO SIRVE HASTA 768px PERO SIRVE :D
  // const slider = useRef();
  // useEffect(() => {
  //   const CardNumber3 = slider.current.children[3];
  //   CardNumber3.scrollIntoView();
  // }, []);
  //////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="premios" id="premios">
      <h1>Premios</h1>

      <img src={imgPrincipal} alt="Equipo Cresi con bandera argentina" />
      <div className="slider-container">
        <div className="premios-slider">
          <CardPremios
            img={chicos}
            alt={"Premio Asociacion chicos.net"}
            texto={"Foro de Adolescentes Tecnologia para un Mundo Mejor"}
            premio={"1er Puesto"}
          />
          <CardPremios
            img={nosotros}
            alt={"Premio Nosotros quremos"}
            texto={"Región Buenos Aires"}
            premio={"1er Puesto"}
          />
          <CardPremios
            img={concausa}
            alt={"Premio Concausa"}
            texto={"Concausa 2030 Argentina, América Solidaria."}
            premio={"1er Puesto"}
          />
          <CardPremios
            img={fundacion}
            alt={"Premio Fundacion La Nación"}
            texto={"Comunidad a la Educación"}
            premio={"Pre-finalistas"}
          />
          <CardPremios
            img={impulso}
            alt={"Premio Impulso Joven emprende"}
            texto={"Dirección Provincial de Desarrollo de Buenos Aires Área de la Juventud"}
            premio={"Pre-finalistas"}
          />
        </div>
      </div>
    </div>
  );
};

export default Premios;
