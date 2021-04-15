import React from 'react'
import "../Card/Card.scss"
import logoCompleto from "../../assets/img/logo-completo.png"
import { FaDownload } from "react-icons/fa"


const Card = (props) => {
  console.log(props)
  return (
    <div className="container">
      <h1>{props.titulo}</h1>
      <div className="card-container">
      <div className="card-objetivo">
        <img src={logoCompleto} className="iconos"/>
        <h2>OBJETIVO</h2>
        <p>{props.objetivo}</p>
      </div>
      <div className="card-download">
        <FaDownload className="download" size="2rem" color="#2cbd9b"/>
        <h2>Descargar PDF</h2>
      </div>
      </div>
      
    </div>
  )
}

export default Card
