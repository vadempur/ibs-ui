import React from "react";
import Page1 from "../components/Page1";
import Banner from "../components/Banner";
import Contact from "../components/Contact";

export default function Accueil() {
  
  return (
    <>
      <Banner />
      <Page1 />
      <div style={{ padding: "60px 0", display: "flex", alignItems: "center", flexDirection: "column" }}>
        <p>Services...</p>
        <p>Produits...</p>
      </div>
      <Contact />      
    </>
  );
}
