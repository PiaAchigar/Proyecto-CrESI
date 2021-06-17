import React, { useEffect } from "react";

//COMPONENTES
import RecursosComponente from "../components/Recursos/RecursosComponente";
import Bubble from "../components/BubbleContainer/Bubble";
import BubbleContainer from "../components/BubbleContainer/BubbleContainer";

const Recursos = () => {
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
      <BubbleContainer content={<RecursosComponente />}>
        <Bubble height="10vw" top="0" left="35vw" naranja />
        <Bubble height="15vw" top="35vw" right="-1vw" amarillo />
        <Bubble height="8vw" bottom="12%" right="5vw" verde />
        <Bubble height="10vw" bottom="25vw" left="0" celeste />
      </BubbleContainer>
    </div>
  );
};
export default Recursos;
