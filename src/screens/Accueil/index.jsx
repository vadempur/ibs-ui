import React from "react";
import AnimatedIcons from "./AnimatedIcons";
import Banner from "./Banner";
import Contact from "../Contact";
import Slide from "./Slide";
import Services from "./Services";

export default function Accueil({ slideVisible, setVisible, mountSlide }) {
  return (
    <>
      {mountSlide === true && <Slide visible={slideVisible} setVisible={setVisible} />}
      {!slideVisible && <Banner />}
      <>
        <AnimatedIcons />
        <Services />
        <div style={{ padding: "60px 0", display: "flex", alignItems: "center", flexDirection: "column" }}>
          <p>Produits...</p>
        </div>
        <Contact />
      </>
    </>
  );
}
