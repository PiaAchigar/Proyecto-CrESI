import React, { useState, useEffect } from "react";

//Imagenes
import heroapp from "../../assets/img/hero-imgapp.png";
import heroweb from "../../assets/img/hero-imgweb.png";
//Style
import "./HeroSwitcher.scss";

//Imagen principal que cambia su estado cada 2 segundos y switchea de una imagen a otra
const HeroSwitcher = () => {
  const [hero, setHero] = useState("");

  useEffect(() => {
    const heroe = setTimeout(() => {
      hero === "mobile" ? setHero("laptop") : setHero("mobile");
    }, 3000);

    return () => clearTimeout(heroe);
  }, [hero]);

  return hero === "mobile" ? (
    <img className="hero-img" src={heroapp} alt="Mobile  with cresi app open" height="300px" />
  ) : (
    <img className="hero-img" src={heroweb} alt="Laptop with cresi web open" height="300px" />
  );
};

export default HeroSwitcher;
