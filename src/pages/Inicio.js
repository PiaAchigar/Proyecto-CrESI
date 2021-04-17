import React from "react";

//Componentes
import Bubble from "../components/BubbleContainer/Bubble";
import BubbleContainer from "../components/BubbleContainer/BubbleContainer";
import AprendeJugando from "../components/AprendeJugando/AprendeJugando";
import QuienesSomos from "../components/QuienesSomos/QuienesSomos.js";

const Inicio = () => {
  return (
    <div className="page-wrapper">
      <BubbleContainer content={<AprendeJugando />}>
        <Bubble height="125px" top="-5%" left="-5%" gris />
        <Bubble height="125px" top="30%" left="50%" celeste />
      </BubbleContainer>
      <BubbleContainer content={<QuienesSomos />}>
        <Bubble height="175px" top="0" left="15%" naranja />
        <Bubble height="125px" top="40%" right="10%" rosa />
      </BubbleContainer>
    </div>
  );
};

export default Inicio;
