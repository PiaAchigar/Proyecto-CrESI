
import React from 'react'
import "../Card/Card.scss"
import logoCompleto from "../../assets/img/logo-completo.png"
import { FaDownload } from "react-icons/fa"


const Card = (props) => {
  console.log(props)
  return (
    <div>
      <div className="container1">
      <h1>{props.titulo}</h1>
      <div className="card-container">
      <div className="card-objetivo">
        <img src={logoCompleto} className="iconos" alt='Logo cresi'/>
        <h2>OBJETIVO</h2>
        <p>{props.objetivo}</p>
      </div>
      <div className="card-download">
        <FaDownload className="download" size="2rem" color="#2cbd9b"/>
        <h2>Descargar PDF</h2>
      </div>
      </div>
    </div>
    <div className="container2">
    <div className="card-container">
    <div className="card-objetivo">
      <img src={logoCompleto} className="iconos" alt='Logo cresi'/>
      <h2>OBJETIVO</h2>
      <p>{props.objetivo}</p>
    </div>
    <div className="textos">
    <h1>{props.titulo}</h1>
    <p>Cada día, más de 1 millón de personas contraen una onfección de transmisión sexual (ITS)<br/>
    <p className="items">
    •¿Qué con las ITS?<br/>
    •¿Cómo comenzar a hablar del tema?<br/>
    •¿Cómo usar CrESI para trabajar el tema?<br/>
    </p>
    </p> 
    {/* <p>{props.informacion}</p> */}
    <div className="card-download">
      <FaDownload className="download" size="2rem" />
      <h2>Descargar PDF</h2>
      <h2>|</h2>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Card