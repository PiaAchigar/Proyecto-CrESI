import React, { useRef, useEffect, useState } from "react";

//Style
import "./BubbleContainer.scss";

//Windows Size
import useWindowSize from "../../hooks/useWindowSize";
//Suma de alturas de burbujas
import SumHeightOfBubbles from "./CalcHeight";

const BubbleContainer = ({ children, content, hidden }) => {
  //

  ///Altura inicial del bubble-container que va a ser la suma de la altura de todas sus burbujas
  let initialHeight = SumHeightOfBubbles(children);

  //Creo una estado para luego darle altura al bubble-container ya que su contenido al ser absoluto
  //nunca le va a dar altura, y precisamos que tenga para que se vea el contenido por dentro
  const [containerHeight, setContainerHeight] = useState(initialHeight);

  const windowSize = useWindowSize();

  //Tomo de referencia el bubble-container para actualizar su altura
  const bubbleRef = useRef(null);

  // Tomo la altura final del contenido del primer children que seria el div.content y se la aplico al style de bubble-container
  useEffect(() => {
    let timeouter = setTimeout(() => {
      setContainerHeight(bubbleRef.current?.children[0].clientHeight);
    }, 400);
    return () => {
      clearTimeout(timeouter);
    };
  }, [containerHeight, windowSize]);

  return (
    <div
      className="bubble-container"
      ref={bubbleRef}
      style={{ height: `${containerHeight}px`, overflowY: hidden && "hidden" }}
    >
      <div className="content">{content}</div>
      {children}
    </div>
  );
};

export default BubbleContainer;
