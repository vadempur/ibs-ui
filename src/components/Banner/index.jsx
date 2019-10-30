import React from "react";

import DiagonalFloor from "./DiagonalFloor";
import Illustration from "./Illustration";
import "./Banner.css";
import { useMobile } from "../../helpers/customHooks";

function Banner({ getRef }) {
  const isMobile = useMobile(1080);

  return (
    <div className="banner-container" ref={getRef}>
      {!isMobile && <DiagonalFloor />}
      <div className="banner-left">
        <h1 className="fade-in">Integrated Business Solutions</h1>
        <p className="fade-in">
          En 2009, IB Solutions atteint le statut <b className="golden">GOLD CERTIFIED PARTNER</b> <br />
          Microsoft Business Solutions (Dynamics NAV et AX) <br />
          Data Management solutions pour la spécialisation BI
        </p>
        {/* <h2>ET SI SOLUTIONS RIMAIENT AVEC INTEGRATION.</h2> */}
      </div>
      <Illustration />
    </div>
  );
}

export default Banner;
