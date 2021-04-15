import React from "react";

//Iconos
import { FiSend } from "react-icons/fi";
import { GiCoffeeCup } from "react-icons/gi";//no funciona
import { FaFacebookSquare, FaInstagramSquare, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import logoheader from "../../assets/img/logo-completo.png";
import logocompleto from "../../assets/img/logo-completo.png";


//Style
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer" id="fondoFooter">
      <div className="padre">
        <div className="terminos-politicas">
          <ul>
            <li>
              <picture className="logo">
                <source media="(min-width: 768px)" srcSet={logoheader} />
                <img src={logocompleto} alt="Logo Cresi" />
              </picture>
            </li>
            <li>
              <p>Terminos y condiciones</p>
              <p>Politicas de privacidad</p>
            </li>
          </ul>
        </div>
        <hr />
        <div className="nosotros-links">
          <div className="nosotros">
            <ul>
              <li>
                <h1>NOSOTROS</h1>
              </li>
              <li>
                ¿Quiénes somos?
              </li>
              <li>
                Premios
              </li>
              <li>
                Prensa
              </li>
              <li>
                Testimonios
              </li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <li>
                <h1>LINKS ÚTILES</h1>
              </li>
              <li>
                Juego online
              </li>
              <li>
                Tienda
              </li>
              <li>
                Contacto
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="suscripcion-donacion">
          <div className="suscripcion">
            <ul>
              <li>
                <h1>SUSCRIBITE</h1>
              </li>
              <li>
                <input type="text" placeholder="tumail@ejemplo.com"/>
              </li>
              <FiSend />
            </ul>
          </div>
          <div className="donacion">
            <ul>
              <li>
                <h1>DONACIONES</h1>
              </li>
              <li>
                <input type="text" name="" id=""/>
              </li>
              <GiCoffeeCup />
            </ul>
          </div>
        </div>
        <hr />
        <div className="redes">
          <ul>
            <li><FaFacebookSquare/></li>
            <li><FaInstagramSquare/></li>
            <li><FaTwitter/></li>
            <li><FaLinkedin/></li>
            <li><FaYoutube/></li>
          </ul>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
