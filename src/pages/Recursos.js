import React from "react";
import Card from "../components/Card/Card";

const Recursos = () => {

  const objetivo1 = {
    titulo: "Las ITS (infecciones de transimisión sexual)",
    objetivo: "Que el joven conozca las Infecciones de Transmisión Sexual y su forma de prevención"
  }

  const objetivo2 = {
    titulo: "Embarazo y derecho",
    objetivo: "Que el joven conozca los derechos durante el embarazo. Reducir la deserción escolar de las mujeres por embarazo"
  }

  const objetivo3 = {
    titulo: "Las ITS (infecciones de transimisión sexual)",
    objetivo: "Que el joven conozca las Infecciones de Transmisión Sexual y su forma de prevención"
  }

  const objetivo4 = {
    titulo: "Embarazo y derecho",
    objetivo: "Que el joven conozca los derechos durante el embarazo. Reducir la deserción escolar de las mujeres por embarazo"
  }


  return (
    <div className="page-wrapper">
      <h1>Pagina de Recursos</h1>
      <Card titulo={objetivo1.titulo} objetivo={objetivo1.objetivo} />
      <Card titulo={objetivo2.titulo} objetivo={objetivo2.objetivo} />
      <Card titulo={objetivo3.titulo} objetivo={objetivo3.objetivo} />
      <Card titulo={objetivo4.titulo} objetivo={objetivo4.objetivo}/>
    </div>
  );
};

export default Recursos;
