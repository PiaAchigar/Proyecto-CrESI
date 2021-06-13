import React from "react";

import { Link } from "react-router-dom";

//Componentes
import InvitameCafecitoBtn from "../InvitameCafecitoBtn/InvitameCafecitoBtn";
import SubscribirseBtn from "../SubscribirseBtn/SubscribirseBtn";

//Iconos
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import logoheader from "../../assets/img/logo-completo.png";
import logocompleto from "../../assets/img/logo-completo.png";

//Style
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer" id="fondoFooter">
      <div className="padre">
        <div className="politicas-nosotros">
          <div className="politicas">
            <picture className="logo">
              <source media="(min-width: 768px)" srcSet={logoheader} />
              <img src={logocompleto} alt="Logo Cresi" />
            </picture>
            <Link to="/politicas">
              <p>Politicas de privacidad</p>
            </Link>
          </div>
          <hr />
          <div className="nosotros-links">
            <div className="nosotros">
              <ul>
                <li>
                  <h1>NOSOTROS</h1>
                </li>
                <li>
                  <a href="/#quienes-somos">¿Quiénes somos?</a>
                </li>
                <li>
                  <a href="/#premios">Premios</a>
                </li>
                <li>
                  <a href="/#prensa-testimonios">Prensa</a>
                </li>
              </ul>
            </div>
            <div className="links">
              <ul>
                <li>
                  <h1>LINKS ÚTILES</h1>
                </li>
                <li>
                  <Link to="/">Juego online</Link>
                </li>
                <li>
                  <Link to="/tienda">Tienda</Link>
                </li>
                <li>
                  <Link to="/contacto">Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="suscripcion-donacion">
          <div className="suscripcion">
            <h1>SUSCRIBITE</h1>

            <SubscribirseBtn />

            {/* <div className="divWrap">
              <input
                className="input-send"
                type="button"
                placeholder="tumail@ejemplo.com"
              />
              <div className="logoSend">
                <FiSend />
              </div>
            </div> */}
          </div>
          <div className="donacion">
            <h1>DONACIONES</h1>
            <InvitameCafecitoBtn txtColor="#8fa2cc" bgColor="#fff" />
          </div>
        </div>
        <hr />
        <hr className="linea" />
        <div className="redes-copy">
          <div className="redes">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/appcresi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebookSquare className="fa-icon" />
                </a>{" "}
              </li>
              <li>
                <a
                  href="https://www.instagram.com/appcresi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="fa-icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/appCrESI"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="fa-icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/appcresi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="fa-icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCXxbxxBrPSbY4akDfj3VcIA/videos"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube className="fa-icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="separador">|</div>
          <hr />
          <div className="copyright">
            <p>
              Copyright &copy; 2021 <a href="link">CrESI&reg;.</a> Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
