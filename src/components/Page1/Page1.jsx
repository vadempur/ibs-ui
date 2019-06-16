import React, { createRef, useState, useCallback, useRef } from "react";
import "./Page1.css";

import { useEventListener, useMobile } from "../../customHooks";

import NumberOneIcon from "./NumberOneIcon";
import ServicesIcon from "./ServicesIcon";
import CollabIcon from "./CollabIcon";
import NetworkIcon from "./NetworkIcon";

function Page1() {
  const [iconsToPlay, setIconsToPlay] = useState([]);
  const refs = useRef([createRef(), createRef(), createRef(), createRef()]);
  const isMobile = useMobile(1080);

  const isElementOnViewPort = useCallback(() => {
    if (!isMobile) return;

    let new_play = [];
    let changed = false;
    refs.current.forEach((e, index) => {
      const rect = e.current.getBoundingClientRect();
      const visible = isRectOnViewPort(rect);
      if (iconsToPlay[index] !== visible) changed = true;
      new_play[index] = visible;
    });

    if (changed) setIconsToPlay(new_play);
  });

  useEventListener("scroll", isElementOnViewPort);

  const handlePlayOnMouse = index => {
    if (isMobile) return;
    let new_play = [];
    new_play[index] = true;
    setIconsToPlay(new_play);
  };

  return (
    <div className="page1-container">
      <div className="page1-column border-right">
        <div
          ref={refs.current[0]}
          className="column-container"
          onMouseEnter={() => handlePlayOnMouse(0)}
          onMouseLeave={() => handlePlayOnMouse(-1)}
        >
          <NumberOneIcon shouldPlay={iconsToPlay[0]} />
          <p>
            N°1 en qualité d’intégrateur des solutions <b>DYNAMICS AX</b> <br />
            sur le plan national parmi les partenaires agrées de
            <b> MICROSOFT</b>
          </p>
        </div>
      </div>

      <div className="page1-column border-right">
        <div
          ref={refs.current[1]}
          className="column-container"
          onMouseEnter={() => handlePlayOnMouse(1)}
          onMouseLeave={() => handlePlayOnMouse(-1)}
        >
          <CollabIcon shouldPlay={iconsToPlay[1]} />
          <p>
            Plus de 30 personnes en Algérie <br /> Certifiés dans Microsoft Dynamics <b>ERP & CRM </b> <br /> 12 ans
            d’expérience sur Microsoft Dynamics
          </p>
        </div>
      </div>

      <div className="page1-column border-right">
        <div
          ref={refs.current[2]}
          className="column-container"
          onMouseEnter={() => handlePlayOnMouse(2)}
          onMouseLeave={() => handlePlayOnMouse(-1)}
        >
          <ServicesIcon shouldPlay={iconsToPlay[2]} />
          <p>
            Localisation Algérienne des solutions Microsoft,
            <br /> Utilisation de la méthodologie de gestion de projet
            <b> Microsoft Sure Step</b>
          </p>
        </div>
      </div>

      <div className="page1-column border-right">
        <div
          ref={refs.current[3]}
          className="column-container"
          onMouseEnter={() => handlePlayOnMouse(3)}
          onMouseLeave={() => handlePlayOnMouse(-1)}
        >
          <NetworkIcon shouldPlay={iconsToPlay[3]} />
          <p>
            Nos clients évoluent dans des secteurs hétérogènes
            <br /> comme l’industrie pétrolière, agro-alimentaire, mécanique ou chimique
            <br /> ainsi que les télécoms, et les services dans le secteur public.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page1;

function isRectOnViewPort(rect) {
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) /*or $(window).height() */ &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ); /*or $(window).width() */
}
