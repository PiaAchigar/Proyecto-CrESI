import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Components
import TiendaItemDetail from "../components/TiendaItemDetail/TiendaItemDetail.jsx";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts.jsx";

// ------ ARRAY DE PRODUCTOS ------ //
import infoProductos from "../assets/tienda-productos-info";
// -------------------------------- //

const DetalleProducto = () => {
  //
  const { id } = useParams();
  const [related, setRelated] = useState([]);

  //Producto en particular a mostrar
  const product = infoProductos.filter((e) => e.id === id);

  //ARRAY DE PRODUCTOS RELACIONADOS
  const relatedProducts = () =>
    product[0].related.map((key) => {
      let info = infoProductos.filter((e) => e.id === key);
      return info;
    });
  //GO TOP
  useEffect(() => {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
      });
    }, 250);
  }, [id]);

  useEffect(() => {
    setRelated(relatedProducts);
  }, [id]);

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

      <RelatedProducts related={related} />
    </div>
  );
};

export default DetalleProducto;
