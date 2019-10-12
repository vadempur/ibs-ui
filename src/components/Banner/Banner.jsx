import React, { useState, useEffect } from "react";

import DiagonalFloor from "./DiagonalFloor/DiagonalFloor";
import Illustration from "./Illustration/Illustration";
import "./Banner.css";
import { useMobile } from "../../helpers/customHooks";
let timeout;
function Banner({ getRef, replay }) {
  const [play, setPlay] = useState(true);
  const isMobile = useMobile(1080);

  useEffect(() => {
    if (replay) {
      clearTimeout(timeout);
      setPlay(replay);
    } else {
      timeout = setTimeout(() => {
        setPlay(replay);
      }, 500);
    }
  }, [replay]);

  return (
    <div className="banner-container" ref={getRef}>
      {!isMobile && <DiagonalFloor />}
      <div className="banner-left">
        <h1>Integrated Business Solutions</h1>
        <p>
          En 2009, IB Solutions atteint le statut <b className="golden">GOLD CERTIFIED PARTNER</b> <br />
          Microsoft Business Solutions (Dynamics NAV et AX) <br />
          Data Management solutions pour la spécialisation BI
        </p>
        {/* <h2>ET SI SOLUTIONS RIMAIENT AVEC INTEGRATION.</h2> */}
      </div>
      <Illustration replay={play} />
    </div>
  );
}

export default Banner;
