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

            {/* <p>
              Não criaste conta ou fizeste login? Clica{" "}
              <Link href="/auth" style={{ color: "#440018" }}>
                aqui
              </Link>{" "}
              para te registares ou fazer login
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
