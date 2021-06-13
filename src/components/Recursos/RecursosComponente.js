import React from "react";
//CSS
import "../Recursos/Recursos.scss";
//Componentes
import CardRecursos from "../CardRecursos/CardRecursos";

import Mailto from "../../components/Mailto";
//Imagenes
import recursosDidacticos from "../../assets/img/recursos-didacticos.png";

import recursosIlustracion from "../../assets/img/recursos-ilustracion.png";

const objetivo1 = {
  titulo: "Las ITS (infecciones de transmisión sexual)",
  objetivo:
    "Que el joven conozca las Infecciones de Transmisión Sexual y su forma de prevención",
  informacion:
    "Cada día, más de 1 millón de personas contraen una infección de transmisión sexual (ITS)",
  informacion2: "•¿Qué con las ITS?",
  informacion3: "•¿Cómo comenzar a hablar del tema?",
  informacion4: "•¿Cómo usar CrESI para trabajar el tema?",
  descarga:
    "https://drive.google.com/file/d/19A7L-qm2n9XobA43J_RcOGNnUkScSPul/view",
};

const objetivo2 = {
  titulo: "Embarazo y derecho",
  objetivo:
    "Que el joven conozca los derechos durante el embarazo. Reducir la deserción escolar de las mujeres por embarazo",
  informacion:
    "Según un informe de UNICEF del 2014, existen 3.000 nacimientos anuales de madres menores de 15 años. La maternidad en la adolescencia precoz es expresión de múltiples problemas sociales y sanitarios: La pobreza, la falta de educación, la inequidad de género, configuran formas de vulneración de los derechos, generalmente en contextos familiares adversos. (OMS, Organización Mundial de la Salud)",
  descarga:
    "https://drive.google.com/file/d/1FFz0R5volpeSgwwppMtyHEAIiHc0TGdx/view",
};

const objetivo3 = {
  titulo: "Los jovenes y la noche",
  objetivo:
    "Que el joven conozca los derechos al momento de salir a la calle o ir a un boliche.",
  informacion:
    "Los resultados revelan que la mitad de los jóvenes prefieren las salidas nocturnas (51%), mientras que cuatro de cada diez eligen las salidas con amigos durante el día. En cuanto a la edad, mientras que la mitad de los jóvenes de entre 14 y 24 años declara que sale de noche al menos una vez a la semana, la gran mayoría de los menores de 13 años dice no salir nunca de noche (75%). (Indagando sobre las salidas nocturnas de los jóvenes, Universidad de Palermo)",
  descarga:
    "https://drive.google.com/file/d/10UPEt0dQk5HWWZfCsAoDRLscMSrPfkBL/view",
};

const RecursosComponente = () => {
  return (
    <div>
      <div className="recursos">
        <h1 className="h1-recursos">Sumemos contenidos</h1>
        <img src={recursosDidacticos} alt="Niño con pizarra" />
        <p className="p-chico">
          <b>
            Puede ser utilizada tanto al comienzo de una clase como actividad
            exploratoria para ver qué sabe y qué no los alumnos, o para evaluar
            los contenidos.
          </b>
          En esta sección te presentamos una serie de talleres que te servirán
          para sacarle el jugo a la app
        </p>
        <h1>
          Talleres CrESI
          <br />
          "Aprender más, para cuidarse mejor"
        </h1>
      </div>
      <div className="recursos-tablet">
        <h1 className="h1-recursos-tablet">Sumemos contenidos</h1>
        <div className="img-texto">
          <img
            className="imagen-recursos-tablet"
            src={recursosDidacticos}
            alt="Niño con pizarra"
          />

          <p className="p-chico-tablet">
            <span className="h1-recursos-desktop">Sumemos contenidos</span>
            Una de las caracteristicas mas importantes de CrESI es que{" "}
            <b>
              una vez que se descarga puede ser usada sin conexión a internet.
            </b>
            Esta cualidad hace que pueda ser usada en todas las escuelas como
            recurso didáctico para trabajar la Educación Sexual Integral.
            <br />
            <br />
            <b>
              Puede ser utilizada al comienzo de una clase como actividad
              exploratoria para ver qué saben y qué no los alumnos, o para
              evaluar los contenidos.
            </b>
            En esta sección te presentamos una serie de talleres que te servirán
            para sacarle el jugo a la app.
          </p>
        </div>

        <h1>
          Talleres CrESI
          <br />
          "Aprender más, para cuidarse mejor"
        </h1>
      </div>

      <div className="cards">
        <CardRecursos
          titulo={objetivo1.titulo}
          objetivo={objetivo1.objetivo}
          informacion={objetivo1.informacion}
          informacion2={objetivo1.informacion2}
          informacion3={objetivo1.informacion3}
          informacion4={objetivo1.informacion4}
          descarga={objetivo1.descarga}
        />
        <CardRecursos
          titulo={objetivo2.titulo}
          objetivo={objetivo2.objetivo}
          informacion={objetivo2.informacion}
          descarga={objetivo2.descarga}
        />
        <CardRecursos
          titulo={objetivo3.titulo}
          objetivo={objetivo3.objetivo}
          informacion={objetivo3.informacion}
          descarga={objetivo3.descarga}
        />
      </div>

      <div className="recursos-final">
        <img src={recursosIlustracion} alt="Hombre con pizarra" />
        <p className="p-grande">
          ¿Sos docente? ¿Usaste alguno de los talleres? ¿Qué te parecieron?
          ¿Querés proponer algún tema para los talleres? ¿Querés hacer alguna
          corrección?
        </p>
        <p className="p-grande">
          Escribinos a <Mailto>appcresi@gmail.com</Mailto> o ingresa a la app
          CrESI y tocá el botón con el sobre.
        </p>
      </div>
      <div className="recursos-tablet-final">
        <img src={recursosIlustracion} alt="Hombre con pizarra" />
        <p className="p-grande">
          ¿Sos docente? ¿Usaste alguno de los talleres? ¿Qué te parecieron?
          ¿Querés proponer algún tema para los talleres? ¿Querés hacer alguna
          corrección?
          <br />
          <br />
          Escribinos a <Mailto>appcresi@gmail.com</Mailto> o ingresa a la app
          CrESI y tocá el botón con el sobre.
          <br />
          <br />
          ¡Te esperamos!
        </p>
      </div>
    </div>
  );
};

export default RecursosComponente;
