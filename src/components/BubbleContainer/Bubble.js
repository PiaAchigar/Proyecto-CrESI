import React from "react";
//JS circle colors
import circleColors from "../../assets/circle-colors-vars";

//Style
import "./Bubble.scss";
const Bubble = ({
  height,
  top,
  bottom,
  left,
  right,
  amarillo,
  violeta,
  naranja,
  celeste,
  verde,
  rosa,
  gris,
}) => {
  const checkColor = () => {
    //si no se paso nigun color props dara propColor = false//
    let propColor =
      amarillo ||
      violeta ||
      naranja ||
      celeste ||
      verde ||
      rosa ||
      gris ||
      false;
    let colors = circleColors;
    //Chequeo el color y devuelvo su valor en rgba para aplicar al BubbleStyle
    switch (propColor) {
      case naranja:
        propColor = `${colors.naranja}`;
        break;
      case violeta:
        propColor = `${colors.violeta}`;
        break;
      case amarillo:
        propColor = `${colors.amarillo}`;
        break;
      case celeste:
        propColor = `${colors.celeste}`;
        break;
      case verde:
        propColor = `${colors.verde}`;
        break;
      case rosa:
        propColor = `${colors.rosa}`;
        break;
      case gris:
        propColor = `${colors.gris}`;
        break;
      default:
        propColor = "black";
        break;
    }
    return propColor;
  };

  const bubbleStyle = {
    backgroundColor: checkColor(),
    width: `${height}`,
    height: `${height}`,
    top: `${top}`,
    bottom: `${bottom}`,
    left: `${left}`,
    right: `${right}`,
  };

  return <div className="bubble" style={bubbleStyle}></div>;
};

export default Bubble;
