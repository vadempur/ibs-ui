import React, { useRef, useEffect, createRef } from "react";
import { TimelineMax } from "gsap";
const tl = new TimelineMax({ paused: true, });
const DURATION = 1;
const ease = undefined

function NetworkIcon({ shouldPlay }) {
  const atoms = useRef([createRef(), createRef(), createRef(), createRef(), createRef()]);

  useEffect(() => {
    const atoms_refs = atoms.current.map(atom_ref => atom_ref.current);

    tl.to(atoms_refs[0], DURATION, { ease: ease, rotation: -30, transformOrigin: "0% 100%" });
    tl.to(atoms_refs[1], DURATION, { ease: ease, rotation: -30, transformOrigin: "50% 0%" }, "-=" + DURATION);
    tl.to(atoms_refs[2], DURATION, { ease: ease, rotation: 10, transformOrigin: "100% 0%" }, "-=" + DURATION);
    tl.to(atoms_refs[3], DURATION, { ease: ease, rotation: -20, transformOrigin: "100% 100%" }, "-=" + DURATION);
    tl.to(atoms_refs[4], DURATION, { ease: ease, rotation: 50, transformOrigin: "0% 0%" }, "-=" + DURATION);

    
  }, []);

  tl.eventCallback("onComplete", () => {
    if (shouldPlay) {
      tl.reverse();
    }
  });

  tl.eventCallback("onReverseComplete", () => {
    if (shouldPlay) {
      tl.restart();
    }
  });

  if (shouldPlay) {
    if (!tl.isActive()) tl.restart();
  }else{
    tl.reverse();
  }

  return (
    <svg viewBox="0 0 71 70.6" style={{ width: "150px" }}>
      <g ref={atoms.current[3]}>
        <path fill="#2E3192" d="M24,25.3l1.4-1.4l11,11L35,36.3L24,25.3z" />
        <circle fill="#d75a4a" cx="23.7" cy="23.6" r="3" />
      </g>
      <g ref={atoms.current[4]}>
        <path fill="#2E3192" d="M34.8,36.4l1.4-1.4l15,15l-1.4,1.4L34.8,36.4z" />
        <circle fill="#ebba16" cx="49.5" cy="49.7" r="3" />
      </g>
      <g ref={atoms.current[0]}>
        <path fill="#2E3192" d="M34.5,35l15-15l1.4,1.4l-15,15L34.5,35z" />
        <circle fill="#43b05c" cx="52.2" cy="19.7" r="5" />
      </g>
      <g ref={atoms.current[1]}>
        <path fill="#2E3192" d="M34.5,35.4h2v18h-2V35.4z" />
        <circle fill="#29ABE2" cx="35.5" cy="55.4" r="5" />
      </g>
      <g ref={atoms.current[2]}>
        <path fill="#2E3192" d="M14.4,55l20-20l1.4,1.4l-20,20L14.4,55z" />
        <circle fill="#57d8ab" cx="14.2" cy="55.7" r="5" />
      </g>

      <circle fill="#FF0066" cx="35.5" cy="35.4" r="7" />
    </svg>
  );
}
export default NetworkIcon;
