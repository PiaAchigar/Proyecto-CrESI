import React from "react";

//Componentes
import Bubble from "../components/BubbleContainer/Bubble";
import BubbleContainer from "../components/BubbleContainer/BubbleContainer";
import AprendeJugando from "../components/AprendeJugando/AprendeJugando";

const Inicio = () => {
  return (
    <div className="page-wrapper">
      <BubbleContainer content={<AprendeJugando />}>
        <Bubble height="10vw" top="0" left="20vw" naranja />
        <Bubble height="5vw" bottom="10%" right="0" verde />
      </BubbleContainer>
    </div>
  );
};

export default Inicio;
