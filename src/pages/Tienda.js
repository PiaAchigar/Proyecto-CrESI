import React, { useEffect } from "react";

//Components
import TiendaWrapper from "../components/TiendaWrapper/TiendaWrapper";
import Bubble from "../components/BubbleContainer/Bubble";
import BubbleContainer from "../components/BubbleContainer/BubbleContainer";

const Tienda = () => {
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
      <BubbleContainer content={<TiendaWrapper />} hidden>
        <Bubble height="225px" top="0" left="0" amarillo />
        <Bubble height="155px" bottom="20%" right="30%" violeta />
      </BubbleContainer>
    </div>
  );
};

export default Tienda;
