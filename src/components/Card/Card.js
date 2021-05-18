
import React from 'react'
import "../Card/Card.scss"
import logoCompleto from "../../assets/img/logo-completo.png"
import { FaDownload } from "react-icons/fa"


const Card = (props) => {

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
      <a href={props.descarga}><FaDownload className="download" size="2rem" color="#2cbd9b"/></a>
        <h2><a className="a-mobile" href={props.descarga}>Descargar PDF</a></h2>
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
    <p>{props.informacion}</p>
    <p>{props.informacion2}</p>
    <p>{props.informacion3}</p>
    <p>{props.informacion4}</p>
    <div className="card-download">
      <a href={props.descarga} className="download"><FaDownload className="download" size="2rem" /></a>
      <h2><a href={props.descarga}>Descargar PDF</a></h2>
      <h2>|</h2>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Card