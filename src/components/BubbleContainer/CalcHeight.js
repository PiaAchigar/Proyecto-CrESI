//Esta funcion devuelve la suma total de las alturas de las burbujas ingresada en un BubbleContainer

const SumHeightOfBubbles = (children) => {
  ///
  //Primer condicional solo para que acepte una sola burbuja y no se rompa con el reduce
  if (children.length === undefined) {
    let BubbleHeigth = parseInt(
      children.props.height.substring(0, children.props.height.length - 2)
    );

    return BubbleHeigth;
  } else {
    const BubbleHeightsToNumber = (child) => {
      let heightSliced = parseInt(child.substring(0, child.length - 2));
      return heightSliced;
    };
    const BubbleHeigths = children.reduce(
      (acc, child) => acc + BubbleHeightsToNumber(child.props.height),
      0
    );

    return BubbleHeigths;
  }
};

export default SumHeightOfBubbles;
