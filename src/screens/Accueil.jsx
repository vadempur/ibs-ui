import React from "react";
import Page1 from "../components/Page1";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Slide from "../components/Slide";

export default function Accueil({ slideVisible, setSlideVisible }) {
  const [mountSlide, setMountSlide] = React.useState(true);
  function setVisible(bool) {
    setSlideVisible(bool);
    setTimeout(() => {
      setMountSlide(bool);
    }, 1000);
  }
  return (
    <>
      {mountSlide === true && <Slide visible={slideVisible} setVisible={setVisible} />}
      {!slideVisible && <Banner />}
      <Page1 />
      <div style={{ padding: "60px 0", display: "flex", alignItems: "center", flexDirection: "column" }}>
        <p>Services...</p>
        <p>Produits...</p>
      </div>
      <Contact />
    </>
  );
}
