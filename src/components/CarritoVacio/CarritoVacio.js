import React from "react"
import "./CarritoVacio.scss"

const CarritoVacio = () => {
    return(
        <div className="carrito">
            <h1>Carrito</h1>
            <hr />
            <div className="vacio-ir">
                <h2>Tu carrito está vacío</h2>
                <button className="ir">Ir a la Tienda</button>
            </div>
        </div>
    )
}
export default CarritoVacio;