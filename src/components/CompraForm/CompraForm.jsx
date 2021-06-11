import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
//Componentes
import CardTienda from "../CardTienda/CardTienda";
//Context
import { CartContext } from "../../context/cartContext";
//CSS
import "./CompraForm.scss";
// ------ ARRAY DE PRODUCTOS ------ //
import infoProductos from "../../assets/tienda-productos-info";

const CompraForm = ({ cart, cartTotal }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const histo = useHistory();

  const { setCart } = useContext(CartContext);

  const finalizarCompraHandler = (e) => {
    e.preventDefault();

    //Informacion del comprador
    let usuarioInfo = {
      name,
      lastname,
      phone,
      mail,
    };

    //Elimino la propiedad img de cada prod
    cart.forEach((e) => delete e.img);

    //Informacion de compra ( datos comprador + detalle productos + total)
    const compraInfo = {
      buyer: usuarioInfo,
      products: cart,
      total: cartTotal,
    };

    alert(
      "Develop : A continuacion se muestra la informacion final de la compra, sin la informacion del metodo de pago. Tambien se mostrara en consola. Luego redirige al home."
    );
    alert(JSON.stringify(compraInfo, null, 2));
    console.log(compraInfo);

    //Vacio el carrito de compra
    setCart([]);
    //Redirigo a la home
    histo.push("/");
  };

  return (
    <>
      <div className="compra-form">
        <h1>Ultimos pasos</h1>
        <div className="line-gray-top"></div>

        <div className="content-wrapper">
          <form className="form" id="buy-form">
            <div className="input-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                id="nombre"
                placeholder="Ingresa tu nombre"
                maxLength="50"
                autoComplete="off"
              />
            </div>
            <div className="input-group">
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                onChange={(e) => setLastname(e.target.value)}
                id="apellido"
                placeholder="Ingresa tu apellido"
                maxLength="50"
                autoComplete="off"
              />
            </div>
            <div className="input-group">
              <label htmlFor="telefono">Teléfono</label>
              <input
                type="tel"
                onChange={(e) => setPhone(e.target.value)}
                id="telefono"
                placeholder="Ingresa tu teléfono"
                maxLength="30"
                autoComplete="off"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                onChange={(e) => setMail(e.target.value)}
                id="email"
                placeholder="tuemail@mail.com"
                maxLength="50"
              />
            </div>
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
            <button
              className="green-btn finalizar-compra-btn"
              type="submit"
              form="buy-form"
              onClick={(e) => finalizarCompraHandler(e)}
            >
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
