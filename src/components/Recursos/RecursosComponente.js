import React from 'react';
import '../Recursos/Recursos.scss';
import Card from "../../components/Card/Card";
import recursosDidacticos from "../../assets/img/recursos-didacticos.jpg";
import recursosIlustracion from "../../assets/img/recursos-ilustracion.png";
import { Link } from 'react-router-dom';



const objetivo1 = {
  titulo: "Las ITS (infecciones de transimisión sexual)",
  objetivo: "Que el joven conozca las Infecciones de Transmisión Sexual y su forma de prevención",
  informacion: "Cada día, más de 1 millón de personas contraen una onfección de transmisión sexual (ITS) \n  •¿Qué con las ITS? •¿Cómo comenzar a hablar del tema? •¿Cómo usar CrESI para trabajar el tema?"
}

const objetivo2 = {
  titulo: "Embarazo y derecho",
  objetivo: "Que el joven conozca los derechos durante el embarazo. Reducir la deserción escolar de las mujeres por embarazo",
  informacion: "Segun un informe de UNICEF del 2014, existen '3000 nacimientos anuales de madres menores de 15 años. La maternidad en la adolescencia precoz es expresion de multiples problemas sociales y sanitarios: La"
}

const objetivo3 = {
  titulo: "Las ITS (infecciones de transimisión sexual)",
  objetivo: "Que el joven conozca las Infecciones de Transmisión Sexual y su forma de prevención"
}

const objetivo4 = {
  titulo: "Embarazo y derecho",
  objetivo: "Que el joven conozca los derechos durante el embarazo. Reducir la deserción escolar de las mujeres por embarazo"
}

const RecursosComponente = () => {

  const Mailto = ({ subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    return <a href={`mailto:${'appcresi@gmail.com'}${params}`}>{children}</a>;
  };

  return (
      <div>
        <div className="recursos">
          <h1 className="h1-recursos">Sumemos contenidos</h1>
          <img src={recursosDidacticos} alt="Niño con pizarra" />
          <p className="p-chico"><b>Puede ser utilizada tanto al comienzo de una clase como actividad exploratoria para ver qué sabe y qué no los alumnos, o para evaluar los contenidos.</b>
          En esta sección te presentamos una serie de talleres que te servirán para sacarle el jugo a la app</p>
          <h1>Talleres CrESI<br/>"Aprender más, para cuidarse mejor"</h1>
        </div>
        <div className="recursos-tablet">
          <h1 className="h1-recursos-tablet">Sumemos contenidos</h1>
          <div className="img-texto">
          <img className="imagen-recursos-tablet" src={recursosDidacticos} alt="Niño con pizarra" />
          
          <p className="p-chico-tablet">
          <h1 className="h1-recursos-desktop">Sumemos contenidos</h1>
          Una de las caractiristas mas importantes de CrESI es que <b>una vez que se descarga puede ser usada sin conexion a internet.</b>
          Esta cualidad hace que pueda ser usada en todas las escuelas como recurso didactico para trabajar la Educacion Sexual Integral.<br/><br/>
          <b>Puede ser utilizada tanto al comienzo de una clase como actividad exploratoria para ver qué sabe y qué no los alumnos, o para evaluar los contenidos.</b>
          En esta sección te presentamos una serie de talleres que te servirán para sacarle el jugo a la app.
          </p>
          </div>
          
          <h1>Talleres CrESI<br/>"Aprender más, para cuidarse mejor"</h1>
        </div>
        
        <div className="cards">
          <Card titulo={objetivo1.titulo} objetivo={objetivo1.objetivo} informacion={objetivo1.informacion} />
          <Card titulo={objetivo2.titulo} objetivo={objetivo2.objetivo} informacion={objetivo2.informacion} />
          <Card titulo={objetivo3.titulo} objetivo={objetivo3.objetivo} informacion={objetivo1.informacion} />
          <Card titulo={objetivo4.titulo} objetivo={objetivo4.objetivo} informacion={objetivo1.informacion}/>
        </div>
        
      
        <div className="recursos-final">
          <img src={recursosIlustracion} alt="Hombre con pizarra" />
          <p className="p-grande">¿Sos docente? ¿Usaste alguno de los talleres? ¿Qué te parecieron? ¿Querés proponer algún tema para los talleres?
            ¿Querés hacer alguna corrección?
          </p>
          <p className="p-grande">Escribinos a <Mailto>appcresi@gmail.com</Mailto> o ingresa a la app CrESI y tocá el botón con el sobre.</p>
        </div>
        <div className="recursos-tablet-final">
          <img src={recursosIlustracion} alt="Hombre con pizarra" />
          <p className="p-grande">¿Sos docente? ¿Usaste alguno de los talleres? ¿Qué te parecieron? ¿Querés proponer algún tema para los talleres?
            ¿Querés hacer alguna corrección?<br/><br/>
          Escribinos a <Mailto>appcresi@gmail.com</Mailto> o ingresa a la app CrESI y tocá el botón con el sobre.
          <br/><br/>
          ¡Te esperamos!
          </p>
        </div>
        </div>
        
      
      
  )
}

export default RecursosComponente
