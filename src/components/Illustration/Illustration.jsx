import React, { useEffect, useRef, useState } from "react";
import "./Illustration.css";
import { TweenLite, TimelineMax, Sine } from "gsap";

import Sun from "./Sun";
import Gears from "./Gears";
import Clouds from "./Clouds";
import Person from "./Person";

function Illustration() {
  const shadow = useRef(null);
  const floor_shadow = useRef(null);
  const [translate, setTranslate] = useState(-30);

  useEffect(() => {
    animate();
    handleScroll();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  function animate() {
    TweenLite.set(shadow.current, { transformOrigin: "50% 50%", scaleX: 0.8 });
    TweenLite.to(shadow.current, 2, { delay: 0.6, x: 70, scaleX: 1 });
    TweenLite.set(floor_shadow.current, { transformOrigin: "50% 0%", scaleY: 0.3 });
    TweenLite.to(floor_shadow.current, 1, { delay: 0.6, transformOrigin: "50% 0%", scaleY: 1 });

    const t1 = new TimelineMax({ delay: 2 });
    const t2 = new TimelineMax({ delay: 2 });

    t1.to(shadow.current, 1.5, {
      repeat: -1,
      yoyo: true,
      scaleX: "-=0.05",
      transformOrigin: "30% 50%",
      ease: Sine.easeInOut
    }).to(shadow.current, 1.5, {
      repeat: -1,
      yoyo: true,
      scaleX: "+=0.05",
      transformOrigin: "30% 50%",
      ease: Sine.easeInOut
    });

    t2.to(floor_shadow.current, 1.5, {
      repeat: -1,
      yoyo: true,
      scaleY: "-=0.2",
      transformOrigin: "50% 0%",
      ease: Sine.easeInOut
    }).to(floor_shadow.current, 1.5, {
      repeat: -1,
      yoyo: true,
      scaleY: "+=0.09",
      transformOrigin: "50% 0%",
      ease: Sine.easeInOut
    });
  }

  const handleScroll = () => {
    if (window.scrollY < 300) {
      let new_translate = 0;
      new_translate = map(window.scrollY, 0, 300, -30, 90);
      setTranslate(new_translate);
    }else{
      setTranslate(90);
    }
  };

  function map(value, start1, stop1, start2, stop2) {
    return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
  }

  // console.log(translate);

  return (
    <div className="illustration" style={{ transform: "translate(0px," + translate + "px)" }}>
      <svg style={{ display: "block" }} viewBox="0 0 712.08 893.97">
        {/* main circle clip definition */}
        <clipPath id="a">
          <circle cx="368.59" cy="596.98" r="259.9" />
        </clipPath>
        <defs>
          <filter id="spotlight">
            <feBlend in="SourceGraphic" in2="floodFill" mode="multiply" />
          </filter>
        </defs>

        {/* the sun */}
        <Sun />
        {/* the shadow */}
        <path
          ref={shadow}
          className="st26"
          d="M629.5 851.6c0 .46-.22.92-.65 1.37-3.23 3.43-18.56 6.61-42.85 9.31-.05.01-.11.01-.18.02-3.67.41-7.54.8-11.61 1.19-47.58 4.5-121.54 7.39-204.61 7.39s-157.03-2.89-204.61-7.39c-.26-.02-.52-.05-.78-.07-3.86-.37-7.53-.75-11.02-1.14-.21-.02-.42-.05-.62-.07-27.1-3.04-42.88-6.69-42.88-10.61 0-10.65 116.37-19.28 259.91-19.28 44.16 0 85.75.82 122.16 2.26 76.86 3.04 130.69 8.86 137.09 15.66.43.45.65.91.65 1.36z"
        />
        {/* back circle */}
        <path
          d="M628.5 596.98c0 6.19-.22 12.34-.65 18.42-3.23 46.24-18.56 89.14-42.85 125.56-.05.09-.11.18-.18.27-3.01 4.51-6.15 8.9-9.43 13.2-.71.95-1.44 1.89-2.18 2.83a260.697 260.697 0 0 1-33.73 35.54c-45.68 39.91-105.45 64.08-170.88 64.08s-125.2-24.17-170.88-64.08a260.697 260.697 0 0 1-33.73-35.54c-.26-.33-.52-.67-.78-1a247.73 247.73 0 0 1-7.62-10.34c-1.16-1.64-2.29-3.29-3.4-4.96-.21-.31-.42-.62-.62-.94-27.1-41.03-42.88-90.19-42.88-143.04 0-143.55 116.37-259.91 259.91-259.91 44.16 0 85.75 11.01 122.16 30.44 76.86 41 130.69 119.49 137.09 211.05.43 6.08.65 12.23.65 18.42z"
          fill="#29abe2"
        />
        {/* building */}
        <path className="st26" d="M491.13 22.19h142.02v734.07H491.13z" />
        <path className="st28" d="M575.39 41.99h37.21v612.87h-37.21zM515.39 41.99h37.21v612.87h-37.21z" />
        {/*  */}

        {/* green wall */}
        <path className="st29 multiply" d="M212.83 270.06h182.93v470.91H212.83z" />

        {/* two lines */}
        <path className="st30 overlay" d="M298.86 270.06v577.1M633.47 584.28H38.98" />
        {/* table */}
        <path className="st31" d="M276.93 575.36v165.92" />

        <Person />

        {/* lamps */}
        <path className="st26" d="M232.49 270.06h4.53v109.01h-4.53z" />
        <circle className="st2" cx="234.75" cy="406.05" r="11.84" />
        <path className="st26" d="M277.02 406.24h-84.53l42.26-42.26zM330.15 270.06h3.24v47.89h-3.24z" />
        <linearGradient id="b" x1="331.55" x2="327.41" y1="644.79" y2="298.06" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDBD29" stopOpacity="0" offset="0" />
          <stop stopColor="#FDBD29" offset="1" />
        </linearGradient>
        <path fill="url(#b)" opacity=".53" d="M331.77 312.28L118.91 666.53l425.71-6.7z" />
        <circle className="st2" cx="331.77" cy="342.07" r="6.93" />
        <path className="st26" d="M350.09 342.07l-36.64.58 18.32-30.49z" />
        {/*  */}

        <Gears />
        <Clouds />

        {/* circle trees */}
        {/* <circle className="st1" cx="521.09" cy="714.19" r="16.42" />
      <path className="st1" d="M519.17 729.07h3.84v11.9h-3.84z" />
      <circle className="st1" cx="564.64" cy="694.09" r="28.74" />
      <path className="st1" d="M561.28 720.14H568v20.83h-6.72z" /> */}
        <circle className="st29" cx="521.09" cy="714.19" r="16.42" />
        <path className="st29" d="M519.17 729.07h3.84v11.9h-3.84z" />
        <circle className="st48" cx="564.64" cy="694.09" r="28.74" />
        <path className="st29" d="M561.28 720.14H568v20.83h-6.72z" />

        {/* triangle trees */}
        {/* <path className="st1" d="M399.47 740.97l22.7-89.51 22.7 89.51z" />
      <path className="st1" d="M426.64 740.97l32.49-128.13 32.49 128.13z" />
      <path className="st1" d="M456.15 740.97l25.99-102.48 25.99 102.48z" /> */}
        <path fill="#d9e021" d="M399.47 740.97l22.7-89.51 22.7 89.51z" />
        <path className="st29" d="M426.64 740.97l32.49-128.13 32.49 128.13z" />
        <path className="st48" d="M456.15 740.97l25.99-102.48 25.99 102.48z" />

        {/* floor */}
        <g clipPath="url(#a)">
          <rect ref={floor_shadow} x={150.95} y={745.92} width="430" height="50" fill="#272d7a" opacity=".3" />
        </g>
        <path
          className="st26"
          d="M584.82 740.23a258.27 258.27 0 0 1-11.61 16.03h-410c-3.86-4.96-7.53-10.06-11.02-15.3-.21-.31-.42-.62-.62-.94l433.25.21z"
        />
        {/*  */}
      </svg>
    </div>
  );
}

export default Illustration;
