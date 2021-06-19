import React, { useEffect } from "react";

import Politicas from "../components/Politicas/Politicas";

const Politica = () => {
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
      <Politicas />
    </div>
  );
};

export default Politica;
