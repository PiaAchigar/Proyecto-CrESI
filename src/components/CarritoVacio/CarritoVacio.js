import React from "react"
import "./CarritoVacio.scss"
import { Link } from "react-router-dom"
const CarritoVacio = () => {
    return(
        <div className="carrito">
            <h1>Carrito</h1>
            <hr />
            <div className="vacio-ir">
                <h2>Tu carrito está vacío</h2>
                <Link exact to = {`/Tienda`} className="link-item">
                    <button className="ir">Ir a la Tienda</button>
                </Link>
            </div>
        </div>
    )
}
export default CarritoVacio;