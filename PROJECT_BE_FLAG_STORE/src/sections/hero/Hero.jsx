import React from "react";
// import { Link } from "wouter";
import Navbar from "../../components/navbar/Navbar";
import "./Hero.css";

const heroData = {
  title: "SEJAM BEM VINDOS",
  smallText:
    "Uma retrosaria pensada ao pormenor para si e para as suas necessidades",
};

const Hero = () => {
  return (
    <div>
      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="hero__info">
            <h1>{heroData.title}</h1>

            <p>{heroData.smallText}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
