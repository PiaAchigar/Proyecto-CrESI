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
      <BubbleContainer content={<AprendeJugando />}>
        <Bubble height="125px" top="-5%" left="-5%" amarillo />
        <Bubble height="125px" top="30%" left="50%" celeste />
      </BubbleContainer>
      <BubbleContainer content={<QuienesSomos />}>
        <Bubble height="150px" top="0" left="35%" naranja />
        <Bubble height="125px" top="45%" right="10%" rosa />
        <Bubble height="125px" top="55%" left="-5%" violeta />
      </BubbleContainer>
      <BubbleContainer content={<Premios />}>
        <Bubble height="20vw" top="0" right="18%" amarillo />
      </BubbleContainer>
      <BubbleContainer content={<QueDicen />}>
        <Bubble height="15vw" top="-25%" left="10%" rosa />
      </BubbleContainer>
      <BubbleContainer content={<Apoyo />}>
        <Bubble height="7vw" top="-20%" right="35%" celeste />
      </BubbleContainer>
    </div>
  );
};

export default Inicio;
