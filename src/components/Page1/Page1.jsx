import React, { createRef, useState, useCallback, useRef } from "react";
import "./Page1.css";

import { useEventListener, useMobile } from "../../customHooks";

import NumberOneIcon from "./NumberOneIcon";
import ServicesIcon from "./ServicesIcon";
import CollabIcon from "./CollabIcon";

function Page1() {
  const [play, setPlay] = useState([]);
  const refs = useRef([createRef(), createRef(), createRef(), createRef()]);
  const isMobile = useMobile(1080);

  const isElementOnViewPort = useCallback(() => {
    if (!isMobile) return;

    let new_play = [];
    let changed = false;
    refs.current.forEach((e, index) => {
      const rect = e.current.getBoundingClientRect();
      const visible = isRectOnViewPort(rect);
      if (play[index] !== visible) changed = true;
      new_play[index] = visible;
    });

    if (changed) setPlay(new_play);
  });

  useEventListener("scroll", isElementOnViewPort);

  const handlePlayOnMouse = index => {
    if (isMobile) return;
    let new_play = [];
    new_play[index] = true;
    setPlay(new_play);
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
          <NumberOneIcon shouldPlay={play[0]} />
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
          <CollabIcon shouldPlay={play[1]} />
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
          <ServicesIcon shouldPlay={play[2]} />
          <p>
            Localisation Algérienne des solutions Microsoft,
            <br /> Utilisation de la méthodologie de gestion de projet
            <b> Microsoft Sure Step</b>
          </p>
        </div>
      </div>

      <div className="page1-column border-right">
        <div ref={refs.current[3]} className="column-container">
          <NetworkIcon />
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

function NetworkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53 53">
      <path
        fill="#2E3192"
        d="M27 28h2v18h-2zM45.293 5.292l1.414 1.414-15 15-1.414-1.414zM25.293 25.293l1.414 1.414-20 20-1.414-1.415zM13.707 8.293l11 11-1.414 1.414-11-11zM30.707 25.292l15 15-1.415 1.414-15-15z"
      />
      <circle cx="48" cy="5" r="5" fill="#43b05c" />
      <circle cx="28" cy="48" r="5" fill="#29ABE2" />
      <circle cx="5" cy="46" r="5" fill="#57d8ab" />
      <circle cx="12" cy="8" r="3" fill="#d75a4a" />
      <circle cx="44" cy="40" r="3" fill="#ebba16" />
      <circle cx="28" cy="24" r="7" fill="#FF0066" />
    </svg>
  );
}
