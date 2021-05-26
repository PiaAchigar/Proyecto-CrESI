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
        <h2>¡Descargate la app!</h2>
        <div className="jugando__stores">
          <a
            href="https://play.google.com/store/apps/details?id=appinventor.ai_tallerprogramacionma.CrESIVersion1&hl=es_AR&gl=US"
            target="_blank"
            rel="noreferrer"
          >
            <img src={googlePlay} alt="play store" />
          </a>
          <a
            href="https://apps.apple.com/ar/app/cresi/id1464565385"
            target="_blank"
            rel="noreferrer"
          >
            <img src={appStore} alt="apple store" />
          </a>
        </div>
        <div className="play-online-btn">
          <a href="" target="_blank" rel="noreferrer">
            ¡Jugar Online!
          </a>
        </div>

        <div className="hero-switcher-mobile">
          <HeroSwitcher />
        </div>
        <p className="jugando__info">
          Es un juego de trivia,mediante una ruleta dividida en seis categorías,
          permite evaluar los conocimientos del usuario acerca de temas como{" "}
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
