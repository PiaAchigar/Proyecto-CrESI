import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//Components
import TiendaItemDetail from "../components/TiendaItemDetail/TiendaItemDetail.jsx";
import Bubble from "../components/BubbleContainer/Bubble";
import BubbleContainer from "../components/BubbleContainer/BubbleContainer";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts.jsx";

// ------ ARRAY DE PRODUCTOS ------ //
import infoProductos from "../assets/tienda-productos-info";
// -------------------------------- //

const DetalleProducto = () => {
  const { id } = useParams();
  const [related, setRelated] = useState([]);
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

  useEffect(() => {
    setRelated(relatedProducts);
  }, []);

  //ARRAY DE PRODUCTOS RELACIONADOS
  const relatedProducts = () =>
    product[0].related.map((key) => {
      let info = infoProductos.filter((e) => e.id === key);
      return info;
    });

  return (
    <div className="page-wrapper">
      <BubbleContainer
        content={
          <TiendaItemDetail
            name={product[0].name}
            price={product[0].price}
            description={product[0].description.main}
            temario={product[0].description.temario}
            duration={product[0].description.duration}
            imgName={product[0].imgName}
          />
        }
      >
        <Bubble height="125px" top="0" right="10px" celeste />
      </BubbleContainer>

      <RelatedProducts related={related} />
    </div>
  );
};

export default DetalleProducto;
