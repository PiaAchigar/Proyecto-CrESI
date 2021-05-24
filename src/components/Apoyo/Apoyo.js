import React from "react";

import "./Apoyo.scss"
import Mailto from "../Mailto";
import logo_intive_blue from "../../assets/img/logo_intive_blue.png"

const Apoyo = () => {
  return (
    <div className="apoyo-wrapper">
      <h1>Nos dan su apoyo</h1>
      <div className="img-sumarte-wrapper">
          <div className="img-container">
            <img src={logo_intive_blue} alt="logo_intive_blue" />
          </div>
          <div className="sumarte-wrapper">
              <h2>¿Queres sumarte?</h2>
              <p>
                En CrESI queremos involucrar a todos los actores de la sociaedad {" "}
                <b>para dar solución a la problematica de la falta de Educacion Sexual
                    Integral en adolescentes y jóvenes.</b>
              </p>
              <div>
                  <button>Sumar mi empresa</button>
              </div>
              <p className="email">
                  O escribinos a <Mailto>appcresi@gmail.com</Mailto>
                </p>
          </div>
      </div>
    </div>
  );
};

export default Apoyo;