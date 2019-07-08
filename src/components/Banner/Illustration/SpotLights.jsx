import React, { useRef, useEffect } from "react";
import { TimelineMax } from "gsap";

function SpotLights() {



  useEffect(() => {}, []);

  return (
    <>
      <linearGradient id="b" x1="331.55" x2="327.41" y1="644.79" y2="298.06" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDBD29" stopOpacity="0" offset="0" />
        <stop stopColor="#FDBD29" offset="1" />
      </linearGradient>
      {/* lamps */}
      <g>
        <circle className="st2" cx="234.75" cy="406.05" r="11.84" />
        <path className="st26" d="M277.02 406.24h-84.53l42.26-42.26z" />
        <path className="st26" d="M232.49 270.06h4.53v109.01h-4.53z" /> 
      </g>
      <g>
        <circle className="st2" cx="331.77" cy="342.07" r="6.93" />
        <path className="st26" d="M330.15 270.06h3.24v47.89h-3.24z" />
        <path fill="url(#b)" opacity=".53" className="screen" d="M331.77 312.28L118.91 666.53l425.71-6.7z" />
        <path className="st26" d="M350.09 342.07l-36.64.58 18.32-30.49z" />
      </g>
      {/*  */}
    </>
  );
}

export default SpotLights;
