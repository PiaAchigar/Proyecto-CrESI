import React from "react";

//Componentes
import HeroSwitcher from "../HeroSwitcher/HeroSwitcher";

//Imagenes
import appStore from "../../assets/img/app-store.png";
import googlePlay from "../../assets/img/google-play.png";

//Style
import "./AprendeJugando.scss";

const AprendeJugando = () => {
  return (
    <div className="aprende-jugando">
      <div className="wrapper">
        <h1>Aprende jugando</h1>
        <h2>!Descargate la app!</h2>
        <div className="play-online">
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            !Jugar Online!
          </a>
        </div>
        <div className="jugando__stores">
          <img src={appStore} alt="Boton para redigirse al apple store y descargar la app" />
          <img src={googlePlay} alt="Boton para redirigirse a play store y descargar la app" />
        </div>
        <div className="hero-switcher-mobile">
          <HeroSwitcher />
        </div>
        <p className="jugando__info">
          Es un juego de trivia,mediante una ruleta dividida en seis categorías, permite evaluar los
          conocimientos del usuario acerca de temas como{" "}
          <strong>salud, sexualidad, derechos, diversidad, prevención.</strong>
        </p>
      </div>
      <div className="wrapper2">
        <HeroSwitcher />
      </div>
    </div>
  );
};

export default AprendeJugando;
