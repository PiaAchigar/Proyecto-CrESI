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

      {/* 
      <BubbleContainer content={<AprendeJugando />}>
        <Bubble height="150px" top="-30vw" left="-30vw" gris />
        <Bubble height="75px" bottom="20%" right="15vw" celeste />
      </BubbleContainer> */}
    </div>
  );
};

export default Inicio;
