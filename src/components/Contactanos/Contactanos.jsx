import React, { useEffect, useState } from "react";

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
import ContactForm from "../ContactForm/ContactForm";

const Contactanos = () => {
  // const [winWidth, setWinWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   setWinWidth(window.innerWidth);
  //   console.log(winWidth);
  // }, [window.innerWidth]);
  return (
    <div className="contactanos">
      {/* /////////////------SOLO TABLET Y DESKTOP-------/////////// */}
      <div className="desktop-tablet-wrapper">
        <div className="content-info">
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
        <div className="form">
          <ContactForm />
        </div>
      </div>
      {/* /////////////------ SOLO MOBILE-------/////////// */}
      <div className="mobile-wrapper">
        <h1>Contactanos</h1>
        <div className="form">
          <ContactForm />
        </div>
        <p>
          O escribinos directamente a <Mailto>appcresi@gmail.com</Mailto>
        </p>
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
    </div>
  );
};

export default Contactanos;
