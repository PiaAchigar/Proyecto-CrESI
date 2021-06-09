import React from "react";
//Componentes
import CardTienda from "../CardTienda/CardTienda";
//CSS
import "./CompraForm.scss";
// ------ ARRAY DE PRODUCTOS ------ //
import infoProductos from "../../assets/tienda-productos-info";

const CompraForm = ({ cart, cartTotal }) => {
  return (
    <>
      <div className="compra-form">
        <h1>Ultimos pasos</h1>
        <div className="line-gray-top"></div>

        <div className="content-wrapper">
          <form className="form">
            <div className="input-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                // onChange={(e) => setNombre(e.target.value)}
                id="nombre"
                placeholder="Ingresa tu nombre"
                maxLength="50"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                id="apellido"
                placeholder="Ingresa tu apellido"
                maxLength="50"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                id="telefono"
                placeholder="Ingresa tu teléfono"
                maxLength="30"
                autoComplete="off"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="tuemail@mail.com"
                autoComplete="off"
                maxLength="50"
                required
              />
            </div>
            {/* <div className="input-group">
          <label htmlFor="direccion">Direccion</label>
          <input
            type="text"
            id="direccion"
            placeholder="Ingresa tu dirección"
            autoComplete="off"
            maxLength="30"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="ciudad">Localidad / Ciudad</label>
          <input
            type="text"
            id="ciudad"
            placeholder="Ingresa tu ciudad"
            autoComplete="off"
            maxLength="30"
            required
          />
        </div> */}
          </form>

          <div className="line-gray"></div>

          <div className="finalizar-compra-wrapper">
            <div className="total-pagar">
              <h5>Total a pagar</h5>
              <p>${cartTotal}</p>
            </div>
            <div className="medios-de-pago">
              <h3>Medios de pago</h3>
            </div>
            <button className="green-btn finalizar-compra-btn" type="submit">
              <p>Finalizar compra</p>
            </button>
          </div>
        </div>
      </div>
      <div className="recomendados">
        <h2>Productos recomendados</h2>
        <hr />
        <div className="recomendados-container">
          {infoProductos.slice(0, 6).map((prod, key) => (
            <CardTienda
              img={prod.img}
              alt=""
              texto={prod.name}
              valor={prod.price}
              id={prod.id}
              key={key}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CompraForm;
