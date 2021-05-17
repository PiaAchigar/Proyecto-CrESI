import React from "react";

//Components
import Contactanos from "../components/Contactanos/Contactanos";
import Bubble from "../components/BubbleContainer/Bubble";
import BubbleContainer from "../components/BubbleContainer/BubbleContainer";

const Contacto = () => {
  return (
    <div className="page-wrapper">
      <BubbleContainer content={<Contactanos />} hidden>
        <Bubble height="225px" top="0" left="0" celeste />
        <Bubble height="55px" bottom="5%" right="25%" rosa />
      </BubbleContainer>
    </div>
  );
};

export default Contacto;
