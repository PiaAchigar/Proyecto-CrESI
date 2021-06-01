import React, { useEffect } from "react";

//Componentes
import Bubble from "../components/BubbleContainer/Bubble";
import BubbleContainer from "../components/BubbleContainer/BubbleContainer";
import AprendeJugando from "../components/AprendeJugando/AprendeJugando";
import QuienesSomos from "../components/QuienesSomos/QuienesSomos.js";
import Premios from "../components/Premios/Premios";
import QueDicen from "../components/QueDicen/QueDicen";
import Apoyo from "../components/Apoyo/Apoyo";

const Inicio = () => {
  useEffect(() => {
    console.log("pagina inicio");
  }, []);
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
      <BubbleContainer content={<Premios />}>
        <Bubble height="25vw" top="-10%" right="10%" amarillo />
      </BubbleContainer>
      <BubbleContainer content={<QueDicen />}>
        <Bubble height="10vw" top="-10%" right="80%" violeta />
      </BubbleContainer>
      <BubbleContainer content={<Apoyo />}>
        <Bubble height="7vw" top="-20%" right="35%" celeste />
      </BubbleContainer>
    </div>
  );
};

export default Inicio;
