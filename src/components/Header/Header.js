import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//Imagenes
import logoheader from "../../assets/img/logo-header.png";
import logocompleto from "../../assets/img/logo-completo.png";
//Iconos
import { MdShoppingCart } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";

//Style
import "./Header.scss";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <picture>
          <source media="(min-width: 768px)" srcSet={logoheader} />
          <img src={logocompleto} alt="Logo Cresi" />
        </picture>
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

      {nav ? (
        <>
          <div className="bg-close" onClick={handleNav}></div>
          <div className="sidenav">
            <div className="sidenav__close" onClick={handleNav}>
              <MdClose className="close-icon" size="1.5rem" />
            </div>
            <ul>
              <li>
                <NavLink onClick={handleNav} className="sidenav__link" to="/" exact>
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleNav} className="sidenav__link" to="/recursos">
                  Recursos
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleNav} className="sidenav__link" to="/visitas">
                  Visitas a escuelas
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleNav} className="sidenav__link" to="/contacto">
                  Contacto
                </NavLink>
              </li>
              <hr />
              <li>
                <NavLink onClick={handleNav} className="sidenav__link tienda" to="/tienda">
                  Tienda
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <MdMenu onClick={handleNav} className="sidenav__open" size="2rem" />
      )}
      <div className="right-links">
        <NavLink className="button-tienda" to="/tienda">
          Tienda
        </NavLink>
        <NavLink className="cart" to="/carrito">
          <MdShoppingCart className="cart-icon" size="2rem" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
