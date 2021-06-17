import React, { useEffect } from "react";

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
    <div
      className="page-wrapper"
      style={{ display: "grid", placeItems: "center", padding: "5rem" }}
    >
      <h1>Juego online en desarrollo....</h1>
    </div>
  );
};

export default Inicio;
