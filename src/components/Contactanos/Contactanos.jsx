import React from "react";

//Components
import Mailto from "../Mailto";
//Style
import "./Contactanos.scss";
//Iconos
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Contactanos = () => {
  return (
    <div className="contactanos">
      <div className="desktop-tablet-wrapper">
        <div className="content">
          <h1>Contactanos</h1>
          <h3>¡Ponete en contacto con nosotros!</h3>
          <ul>
            <li>Completa el formulario y dejanos tu mensaje</li>
            <li>
              O escribinos directamente a <Mailto>appcresi@gmail.com</Mailto>
            </li>
          </ul>
          <h4>Seguinos en nuestras redes:</h4>
          <div className="socials-wrapper">
            <a
              href="https://www.facebook.com/appcresi"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/appcresi/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://twitter.com/appCrESI"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/appcresi/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCXxbxxBrPSbY4akDfj3VcIA/videos"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="social-icon" />
            </a>
          </div>
        </div>
        <div className="form"></div>
      </div>
      <div className="mobile-wrapper"></div>
    </div>
  );
};

export default Contactanos;
