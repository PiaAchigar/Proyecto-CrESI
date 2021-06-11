import React, { useRef, useState } from "react";

//ReCAPTCHA
import ReCAPTCHA from "react-google-recaptcha";

//Estilos
import "./ContactForm.scss";

//Imagenes
import logoheader from "../../assets/img/logo-header.png";
import { HiOutlineMail } from "react-icons/hi";

const ContactForm = () => {
  //
  const [human, setHuman] = useState(false);
  const [response, setResponse] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const captchaRef = useRef(null);
  const checkRef = useRef(null);
  const textareaRef = useRef(null);

  const emailEndpoint = "https://cresi-api-rest-desarrollo.herokuapp.com/mail";

  const handleCaptcha = () => {
    if (captchaRef.current.getValue()) {
      setHuman(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const quiereRecibirMail = checkRef.current.checked;
    const messageTrimmed = mensaje.trim();

    const infoContacto = {
      name: nombre,
      mail: email,
      subject: "email enviado desde Cresi",
      message: messageTrimmed,
      notice: quiereRecibirMail,
    };

    fetch(emailEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(infoContacto),
    })
      .then((response) => response.json())
      .then((data) => {
        const { msg } = data;
        msg.msg_code === "SM002" && setResponse(true);
      })
      .catch((error) => {
        alert("Ha ocurrido un enviar al enviar tu mensaje, intenta nuevamente");
        window.location.reload();
      });
  };

  return !response ? (
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
  ) : (
    <div className="email-send-container">
      <h1>
        Tu mensaje ha sido enviado, pronto nos pondremos en contacto contigo!
      </h1>
      <HiOutlineMail className="mail-icon bounce-1" />
      <img src={logoheader} alt="logo cresi" />
      <p>
        CrESI<sup>&reg;</sup>
      </p>
    </div>
  );
};

export default ContactForm;
