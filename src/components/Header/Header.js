import React, { useState, useEffect, useRef, useContext } from "react";
import { NavLink } from "react-router-dom";

//Components
import Mailto from "../../components/Mailto";
//Imagenes
import logoheader from "../../assets/img/logo-header.png";
//Context
import { CartContext } from "../../context/cartContext";

//Iconos
import { MdShoppingCart } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

//Style
import "./Header.scss";

const Header = () => {
  //
  const [nav, setNav] = useState(false);

  const { cartTotalItems } = useContext(CartContext);
  //Referencia del header
  const headerRef = useRef();
  //Referencia del contador del icono de carrito
  const cartSpanRef = useRef();

  //Cada vez que cambia el total de items agrego la clase bounce y 2,2 seg despues la quito.
  useEffect(() => {
    cartSpanRef.current.className = "cart-span bounce-1";

    return setTimeout(() => {
      cartSpanRef.current.className = "cart-span";
    }, 2200);
  }, [cartTotalItems]);

  const handleNav = () => {
    setNav(!nav);
  };
  //Esconde la parte superior del header
  window.onscroll = function () {
    let scrollYoffset = window.pageYOffset;
    let windowWidth = window.innerWidth;

    if (windowWidth >= 768) {
      if (scrollYoffset >= 150) {
        headerRef.current.style.top = "-2.5rem";
      } else {
        headerRef.current.style.top = "0";
      }
    }
  };

  return (
    <div className="header-wrapper" ref={headerRef}>
      <div className="top-header">
        <div className="top_header__mailto">
          <Mailto>
            <HiOutlineMail className="mail-icon" />
          </Mailto>
          <Mailto>
            <p style={{ color: "#707070" }}>appcresi@gmail.com</p>
          </Mailto>
        </div>
        <div className="vertical-line"></div>
        <div className="top-header__socials">
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
      <header className="header">
        <NavLink to="/" className="logo">
          <img src={logoheader} alt="Logo Cresi" />
          <h1>CrESI</h1>
        </NavLink>
        <nav className="main-links">
          <ul>
            <li>
              <NavLink to="/" exact>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/recursos">Recursos</NavLink>
            </li>
            <li>
              <NavLink to="/visitas">Visitas a escuelas</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>
          </ul>
        </nav>

        {/* Menu mobile */}
        {nav ? (
          <>
            <div className="bg-close" onClick={handleNav}></div>
            <div className="sidenav">
              <div className="sidenav__close" onClick={handleNav}>
                <MdClose className="close-icon" size="2rem" />
              </div>
              <ul>
                <li>
                  <NavLink
                    onClick={handleNav}
                    className="sidenav__link"
                    to="/"
                    exact
                  >
                    Inicio
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleNav}
                    className="sidenav__link"
                    to="/recursos"
                  >
                    Recursos
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleNav}
                    className="sidenav__link"
                    to="/visitas"
                  >
                    Visitas a escuelas
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleNav}
                    className="sidenav__link"
                    to="/contacto"
                  >
                    Contacto
                  </NavLink>
                </li>
                <hr />
                <li>
                  <NavLink
                    onClick={handleNav}
                    className="sidenav__link tienda"
                    to="/tienda"
                  >
                    Tienda
                  </NavLink>
                </li>
              </ul>
              <div className="sidenav__bottom">
                <h4>DATOS ÚTILES</h4>
                <div className="mailto">
                  <Mailto>appcresi@gmail.com</Mailto>
                </div>
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
          </>
        ) : (
          <MdMenu onClick={handleNav} className="sidenav__open" size="2rem" />
        )}
        {/* Fin Menu mobile */}

        <div className="right-links">
          <NavLink className="button-tienda" to="/tienda">
            Tienda
          </NavLink>
          <NavLink className="cart" to="/carrito">
            <MdShoppingCart className="cart-icon" size="2rem" />
            <span
              className="cart-span"
              hidden={cartTotalItems <= 0}
              ref={cartSpanRef}
            >
              {cartTotalItems}
            </span>
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Header;
