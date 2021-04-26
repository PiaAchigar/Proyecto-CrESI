import React, { useRef, useEffect, useState } from "react";

//Style
import "./BubbleContainer.scss";

//Windows Size
import useWindowSize from "../../hooks/useWindowSize";

const BubbleContainer = ({ children, content, hidden }) => {
  //
  //Tomo de referencia el bubble-container para actualizar su altura
  const bubbleRef = useRef(null);
  //Creo una estado para luego darle altura al bubble-container ya que su contenido al ser absoluto
  //nunca le va a dar altura, y precisamos que tenga para que se vea el contenido por dentro
  const [containerHeight, setContainerHeight] = useState(
    bubbleRef.current?.children[0].clientHeight
  );

  // const windowSize = useWindowSize();

  // Tomo la altura final del contenido del primer children que seria el div.content y se la aplico al style de bubble-container
  useEffect(() => {
    setContainerHeight(bubbleRef.current?.children[0].clientHeight);
  }, [containerHeight]);

  useEffect(() => {
    let timeouter = setTimeout(() => {
      setContainerHeight(bubbleRef.current?.children[0].clientHeight);
    }, 400);
    return () => {
      clearTimeout(timeouter);
    };
  }, [containerHeight]);

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
