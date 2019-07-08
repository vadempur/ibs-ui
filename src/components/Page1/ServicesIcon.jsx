import React, { useRef, useEffect } from "react";
import { TimelineMax,SteppedEase } from "gsap";

const tl = new TimelineMax({ paused: true });
const DURATION = 1;

function ServicesIcon({ shouldPlay }) {
  const gear = useRef();
  const tool = useRef();

  useEffect(() => {
    tl.to(gear.current, DURATION, {
      ease: SteppedEase.config(5),
      transformOrigin: "50% 50%",
      rotation: 45
    })
    .to(tool.current, DURATION, {
      // ease: SteppedEase.config(30),
      transformOrigin: "30% 30%",
      rotation: -45
    },'-='+DURATION)
    ;
  }, []);

  if (shouldPlay) {
    tl.play();
  } else {
    tl.reverse();
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 433.93">
      <g data-name="Layer 2">
        <g data-name="Layer 3">
          <path
            ref={gear}
            d="M418.48 187.71c-.66-5.87-7.51-10.29-13.43-10.29a46.13 46.13 0 0 1-31.57-80.28 11.6 11.6 0 0 0 1.27-15.75A206.46 206.46 0 0 0 341.66 48a11.64 11.64 0 0 0-15.88 1.29C313.33 63 291 68.16 273.68 61a46.39 46.39 0 0 1-28.21-45.4 11.6 11.6 0 0 0-10.26-12.21 208.08 208.08 0 0 0-47-.12 11.63 11.63 0 0 0-10.34 12 46.47 46.47 0 0 1-28.61 44.57C132.19 66.77 110 61.68 97.55 48a11.64 11.64 0 0 0-15.76-1.32A207.92 207.92 0 0 0 48 80.11 11.62 11.62 0 0 0 49.24 96a46.29 46.29 0 0 1 11.68 52.1c-7.21 17.18-25 28.24-45.45 28.24A11.37 11.37 0 0 0 3.4 186.6a209 209 0 0 0-.09 47.5C4 240 11 244.38 17 244.38c18.19-.46 35.65 10.79 43 28.62a46.48 46.48 0 0 1-11.68 51.66A11.61 11.61 0 0 0 47 340.4a207.73 207.73 0 0 0 33 33.43 11.62 11.62 0 0 0 16-1.26c12.49-13.82 34.86-18.93 52.07-11.71a46.34 46.34 0 0 1 28.27 45.34 11.58 11.58 0 0 0 10.25 12.2 207.63 207.63 0 0 0 47 .13 11.64 11.64 0 0 0 10.34-12A46.44 46.44 0 0 1 272.5 362c17.19-7 39.31-1.88 51.74 11.77a11.67 11.67 0 0 0 15.76 1.34 207.89 207.89 0 0 0 33.8-33.42 11.61 11.61 0 0 0-1.25-15.88 46.27 46.27 0 0 1-11.7-52.1 46.74 46.74 0 0 1 42.73-28.32l2.58.07a11.63 11.63 0 0 0 12.23-10.25 207.85 207.85 0 0 0 .09-47.5zM210.9 336.65A125.75 125.75 0 1 1 336.65 210.9 125.75 125.75 0 0 1 210.9 336.65z"
            fill="#29ABE2"
          />
          <path
            ref={tool}
            d="M369.94 429.93a24.46 24.46 0 0 1-17.88-7.67L247.64 312.37a102.29 102.29 0 0 1-35.79 6.4h-2a103 103 0 0 1-96.92-131.87 15.17 15.17 0 0 1 14.25-11.12h.27a15.28 15.28 0 0 1 10.88 5c.33.34 33 34.09 44.82 46.34a3.5 3.5 0 0 0 2.47 1.15L191 227v.83c11.58-1 23.18-2.58 28.47-4l.13-.13c1.73-5.86 4.08-19.59 5.5-32.29v-.2l.13-.76a5.75 5.75 0 0 0-.08-2c-11.51-12-45.15-47.21-45.49-47.56a15 15 0 0 1-3.85-14.63 15.26 15.26 0 0 1 10.77-10.43 103 103 0 0 1 25.21-3.13h2a103.1 103.1 0 0 1 93.14 142.55L411.22 365.1a24.79 24.79 0 0 1-.52 34.5l-23.41 23.19a24.53 24.53 0 0 1-17.35 7.14z"
            fill="#eeeeee"
          />
        </g>
      </g>
    </svg>
  );
}

export default ServicesIcon;
