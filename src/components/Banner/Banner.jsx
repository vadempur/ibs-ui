import React, { useEffect, useState } from "react";
import "./Banner.css";

import DiagonalFloor from '../DiagonalFloor/DiagonalFloor'
import Illustration from '../Illustration/Illustration'

let lastScrollY = 0;

function Banner() {

  const [rotation, setRotation] = useState(-10);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    let new_rotation = rotation + (window.scrollY - lastScrollY) / 20;
    if (new_rotation < -10) new_rotation = -10;
    if (new_rotation > 0) new_rotation = 0;
    setRotation(new_rotation);

    lastScrollY = window.scrollY;
  };

  return (
    <div className="banner-container">
      <DiagonalFloor />
      <div className="section1-left">
        <h1>Integrated Business Solutions</h1>
        <p>
          En 2009, IB Solutions atteint le statut <b className='golden'>GOLD CERTIFIED PARTNER</b> <br />
          Microsoft Business Solutions (Dynamics NAV et AX) <br />
          Data Management solutions pour la spécialisation BI
        </p>
        <h2>ET SI SOLUTIONS RIMAIENT AVEC INTEGRATION.</h2>
      </div>
      <Illustration />
    </div>
  );
}

export default Banner;
