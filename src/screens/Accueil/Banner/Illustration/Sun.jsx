
import React,{useRef , useEffect } from 'react';
import { TimelineMax,Sine } from 'gsap';
function Sun() {
  const sun = useRef(null);
  useEffect( ()=>{
    const t1 = new TimelineMax();
    t1.to(sun.current, 0, {autoAlpha:1});
    t1.from(sun.current, 2, {rotation:180, svgOrigin:"250 500"});
    t1.to(sun.current,1.5,{repeat:-1, yoyo:true, y:-10, ease: Sine.easeInOut})
      .to(sun.current,1.5,{repeat:-1,yoyo:true, y:+10, ease: Sine.easeInOut});
  },[] );

  return (
      <path 
        ref={sun}
        className="sun"
        d="M236.91 205.02c1.9 26.18-23.44 52.3-52.72 52.1-25.71-.18-52.77-23.56-52.09-54.04.54-24.08 22.68-51.82 54.02-51.16 25.03.53 52.88 23.53 50.79 53.1z"
      />
  );
}

export default Sun;
