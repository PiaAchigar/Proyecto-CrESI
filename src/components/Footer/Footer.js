import React from "react";

//Iconos
import { FiSend } from "react-icons/fi";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import logoheader from "../../assets/img/logo-completo.png";
import logocompleto from "../../assets/img/logo-completo.png";
import logoCafe from "../../assets/img/cafecito-logo.svg";

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
              <p>Politicas de privacidad</p>
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
        </div>
        <hr />
        <div className="suscripcion-donacion">
          <div className="suscripcion">
            <h1>SUSCRIBITE</h1>
            <div className="divWrap">
              <input type="text" placeholder="tumail@ejemplo.com"/>
              <div className="logoSend"><FiSend /></div>
            </div>
          </div>
          <div className="donacion">
            <h1>DONACIONES</h1>
            <div className="divWrapCafe">
                <button><img src={logoCafe} alt=""/></button>
                <input type="text" name="" id="" placeholder="Invitame un Cafecito (ARS $100)"/>
            </div> 
          </div>
          
        </div>
        <hr />
        <hr className="linea"/>
        <div className="redes-copy">
          <div className="redes">
            <ul>
              <li><a href="www.google.com"><FaFacebookSquare size="2rem"/></a> </li>
              <li><a href="www.google.com"><FaInstagramSquare size="2rem"/></a></li>
              <li><a href="www.google.com"><FaTwitter size="2rem"/></a></li>
              <li><a href="www.google.com"><FaLinkedin size="2rem"/></a></li>
              <li><a href="www.google.com"><FaYoutube size="2rem"/></a></li>
            </ul>
          </div>
          <div className="separador">|</div>
          <hr />
          <div className="copyright">
            <p>Copyright CrESI | Powered by  <a href="link">CrESI&reg;</a> </p>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
