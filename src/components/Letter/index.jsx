import React, { useState, useCallback, useRef, useEffect } from "react";
import "./Letter.css";
import LetterSvg from "./LetterSvg";
import { TweenMax } from "gsap";
import { useEventListener } from "../../customHooks";

let circleAnim;

function Letter() {
  const circleRef = useRef();
  // const paperRef = useRef();
  const [letterVisible, setLetterVisible] = useState(false);
  const [dimentions, setDimentions] = useState([0, 0]);

  const handleResizeSvg = useCallback(e => {
    setDimentions([window.innerWidth, window.innerHeight]);
  });

  const showLetter = useCallback(() => {

    const circleR = Math.max( dimentions[0] , dimentions[1] );

    if (!letterVisible) {
      setLetterVisible(true);
      document.body.style.overflow = "hidden";
      circleAnim = TweenMax.to(circleRef.current, 0.4, {
        x: -circleR / 2,
        attr: { r: circleR },
        onReverseComplete: () => {
          setLetterVisible(false);
        }
      });
    } else {
      document.body.style.overflow = "auto";
      circleAnim.reverse();
    }
  });

  useEventListener("resize", handleResizeSvg);

  useEffect(() => {
    setDimentions([window.innerWidth, window.innerHeight]);
    TweenMax.set(circleRef.current, { x: "-90px", y: "-80px" });
  }, []);

  return (
    <>
      <div className="circle-animation-container" style={{ display: letterVisible ? "block" : "none" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox={`0 0 ${dimentions[0]} ${dimentions[1]}`}
        >
          <circle ref={circleRef} className="modal-circle" cx={dimentions[0]} cy={dimentions[1]} r="40" />
        </svg>
      </div>

      <div className="modal" onClick={showLetter} style={{ display: letterVisible ? "block" : "none" }}>
        <div className="modal-content" onClick={(e)=>{e.stopPropagation();}}>
          <p>testing this content</p>
        </div>
      </div>

      <div className="letter-icon" onClick={showLetter}>
        <LetterSvg />
      </div>
    </>
  );
}

export default Letter;
