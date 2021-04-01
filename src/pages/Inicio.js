import React from "react";

//Components
import HeroSwitcher from "../components/HeroSwitcher/HeroSwitcher";
import Text from "../components/Text/Text";

const Inicio = () => {
  return (
    <div className="page-wrapper">
      <h1>Pagina de Inicio</h1>
      <HeroSwitcher />
      <Text>
        <p>
          Parrafo pasado como children <strong>con un strong</strong>
          <br />
          <i>Y un salto de linea con italic</i>
        </p>
      </Text>
    </div>
  );
};

export default Inicio;
