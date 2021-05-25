import React, { useRef, useState, useEffect } from "react";

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

  //SOLO PARA TEST FETCH
  useEffect(() => {
    handleSubmit();
  }, []);

  const emailEndpoint = "https://cresi-api-rest-desarrollo.herokuapp.com/mail";

  const handleCaptcha = () => {
    if (captchaRef.current.getValue()) {
      setHuman(true);
    }
  };
  const handleSubmit = (e) => {
    // e.preventDefault();

    const quiereRecibirMail = checkRef.current.checked;
    const messageTrimmed = mensaje.trim();

    // const infoContacto = {
    //   name: nombre,
    //   mail: email,
    //   subject: "prueba",
    //   message: mensaje,
    //   notice: quiereRecibirMail,
    // };
    // const infoContacto = {
    //   name: "Roberto",
    //   mail: "asdasd@mail.com",
    //   subject: "Prueba 2",
    //   message: "Este es un mensaje de prueba 2",
    //   notice: true,
    // };
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify({
    //   name: "German",
    //   mail: "testpsotman@german.com",
    //   subject: "Prueba postman german",
    //   message: "Este es un mensaje de prueba,Este es un mensaje de prueba",
    //   notice: true,
    // });

    // var requestOptions = {
    //   method: "POST",
    //   body: raw,
    //   redirect: "follow",
    // };

    // fetch(
    //   "https://cresi-api-rest-desarrollo.herokuapp.com/mail",
    //   requestOptions
    // )
    //   .then((response) => response.json())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));

    // fetch(emailEndpoint, {
    //   method: "POST",
    //   body: JSON.stringify(infoContacto),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log("error de catch: " + error);
    //   });
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
          // required
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
          // required
        />
      </div>
      <div className="input-group">
        <label htmlFor="textarea">Mensaje</label>
        <textarea
          id="textarea"
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribinos algo.."
          ref={textareaRef}
          // required
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
