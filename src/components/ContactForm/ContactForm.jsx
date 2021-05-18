import React, { useRef, useState } from "react";

//ReCAPTCHA
import ReCAPTCHA from "react-google-recaptcha";

//Estilos
import "./ContactForm.scss";

const ContactForm = () => {
  //
  const [human, setHuman] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const captchaRef = useRef(null);
  const checkRef = useRef(null);
  const textareaRef = useRef(null);

  const handleCaptcha = () => {
    if (captchaRef.current.getValue()) {
      setHuman(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const quiereRecibirMail = checkRef.current.checked;
    const infoContacto = {
      name: nombre,
      email: email,
      mensaje: mensaje.trim(),
      quiereRecibirMail,
    };
    //CONTROLAMOS EL LARGO DEL MENSAJE ENVIADO PARA QUE AL MENOS TENGA MAS DE 15 CARECTERES, MINIMO.
    console.table(infoContacto);
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          onChange={(e) => setNombre(e.target.value)}
          id="nombre"
          placeholder="Ingresa tu nombre"
          maxLength="30"
          autoComplete="off"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="tuemail@mail.com"
          autoComplete="off"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="textarea">Mensaje</label>
        <textarea
          id="textarea"
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribinos algo.."
          ref={textareaRef}
          required
          minLength="25"
        ></textarea>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" name="" id="checkbox" ref={checkRef} />
        <label htmlFor="checkbox">
          Recibir por email las últimas noticias y actualizaciones de CrESI.
        </label>
      </div>
      {/* CHEQUEO QUE EL CATCHA ESTE OK ENTONCES MUESTRO BOTON DE SUBMIT */}
      {!human ? (
        <ReCAPTCHA
          ref={captchaRef}
          sitekey={process.env.REACT_APP_SITE_KEY}
          onChange={handleCaptcha}
        />
      ) : (
        <button className="submit-btn" type="submit">
          Enviar mensaje
        </button>
      )}
    </form>
  );
};

export default ContactForm;
