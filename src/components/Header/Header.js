import React from "react";
import { NavLink } from "react-router-dom";
//Imagenes
import logoheader from "../../assets/img/logo-header.png";
//Iconos
import { MdShoppingCart } from "react-icons/md";

//Style
import "./Header.scss";

const Header = () => {
  return (
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
      <div className="right-links">
        <NavLink className="button" to="/tienda">
          Tienda
        </NavLink>
        <NavLink className="cart" to="/carrito">
          <MdShoppingCart size="2rem" color="black" />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
