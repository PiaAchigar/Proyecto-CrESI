import React, { useEffect } from "react";

//Components
import Contactanos from "../components/Contactanos/Contactanos";
import Bubble from "../components/BubbleContainer/Bubble";
import BubbleContainer from "../components/BubbleContainer/BubbleContainer";

const Contacto = () => {
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
      <BubbleContainer content={<Contactanos />} hidden>
        <Bubble height="200px" top="-1vw" left="0" celeste />
        <Bubble height="100px" bottom="5%" right="5%" rosa />
      </BubbleContainer>
    </div>
  );
};

export default Contacto;
