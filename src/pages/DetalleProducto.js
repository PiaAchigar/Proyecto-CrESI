import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
//Components
import TiendaItemDetail from "../components/TiendaItemDetail/TiendaItemDetail.jsx";

// ------ ARRAY DE PRODUCTOS ------ //
import infoProductos from "../assets/tienda-productos-info";
// -------------------------------- //

const DetalleProducto = () => {
  const { id } = useParams();
  //Producto en particular a mostrar
  const product = infoProductos.filter((e) => e.id === id);
  //GO TOP
  useEffect(() => {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
      });
    }, 250);
  }, []);

  return (
    <div className="page-wrapper">
      <TiendaItemDetail
        name={product[0].name}
        price={product[0].price}
        description={product[0].description.main}
        temario={product[0].description.temario}
        duration={product[0].description.duration}
        imgName={product[0].imgName}
      />
    </div>
  );
};

export default DetalleProducto;
