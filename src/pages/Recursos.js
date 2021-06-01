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
        <Bubble height="10vw" top="0" left="20vw" naranja />
        <Bubble height="5vw" bottom="10%" right="0" verde />
      </BubbleContainer>
    </div>
  );
};
export default Recursos;
