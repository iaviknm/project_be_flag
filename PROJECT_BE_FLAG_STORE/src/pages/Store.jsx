import React from "react";
import Footer from "../components/footer/Footer";
import About from "../sections/about/About";
import Contacts from "../sections/contacts/Contacts";
import Hero from "../sections/hero/Hero";
import Products from "../sections/products/Products";

const Store = () => {
  return (
    <div>
      <Hero />
      <About />
      <Products />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Store;
