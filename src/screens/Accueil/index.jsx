import React from "react";

import AnimatedIcons from "./AnimatedIcons";
import Banner from "./Banner";
import Contact from "../Contact";
import Slide from "./Slide";
import Services from "./Services";
import Products from "./Products";
import Partners from "./Partners";


export default function Accueil({ slideVisible, setVisible, mountSlide }) {
  return (
    <>
      {mountSlide === true && <Slide visible={slideVisible} setVisible={setVisible} />}
      {!slideVisible && <Banner />}
      <>
        <AnimatedIcons />
        <Services />        
        <Products />
        <Partners />
        <Contact />
      </>
    </>
  );
}
