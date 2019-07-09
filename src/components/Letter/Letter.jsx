import React, { useState, useCallback,useRef,useEffect} from "react";
import "./Letter.css";
import LetterSvg from "./LetterSvg";
import { TimelineMax, TweenMax } from "gsap";
import { useEventListener } from "../../customHooks";

const tl = new TimelineMax({paused:true});
let anime;
function Letter() {
  const circleRef = useRef();
  const [letterVisible, setLetterVisible] = useState(false);
  const [dimentions, setDimentions] = useState([0, 0]);


  const handleResizeSvg = useCallback(e => {
    setDimentions([window.innerWidth, window.innerHeight]);
  });

  const showLetter = useCallback(()=>{
    
    if(!letterVisible){
      anime =TweenMax.to(circleRef.current, 1, { x: -dimentions[0]/2, attr:{r:dimentions[0]} } );
    }
    else{
      anime.reverse();
    }

  });

  useEventListener("resize", handleResizeSvg);


  useEffect(()=>{
    setDimentions([window.innerWidth, window.innerHeight]);
    TweenMax.set(circleRef.current,{ x:"-90px" , y:"-80px" } );
    // tl.to(circleRef.current, 1, { x: -dimentions[0]/2, attr:{r:dimentions[0]} } );
  },[]);



  return (
    <>
      <div className="svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox={`0 0 ${dimentions[0]} ${dimentions[1]}`}>
          <circle ref={circleRef}  className="animated-circle" cx={dimentions[0]} cy={dimentions[1]} r="40" />
        </svg>
      </div>
      <div className="letter-modal" 
        onClick={showLetter}
      >
        <div
          className="letter-container"
          onClick={() => {
            setLetterVisible(!letterVisible);
          }}
        >
          <LetterSvg />
        </div>
      </div>
    </>
  );
}

export default Letter;
