import React from "react";
import { TimelineMax } from "gsap";




class NumberOneIcon extends React.Component {
  constructor(props){
    super(props);
    this.tl =  new TimelineMax({paused:true});
    this.borders_tl = new TimelineMax();
  }
  componentDidMount() {
    this.tl.to(this.light_line, .7, { y: -160 })
      .to(this.sparkle, 0.2, { transformOrigin: "50% 50%", scale: 1.5 }, "-=.3")
      .to(this.sparkle, 0.2, {
        transformOrigin: "50% 50%",
        scale: 0
      });

      this.borders_tl.to( this.border_left, .7 , { transformOrigin: "50% 0%", rotation:-30 })
      .to( this.border_right, .7 , { transformOrigin: "50% 0%", rotation:30 },"-=.7" );
  }

  manageAnimation(){
    if (this.props.shouldPlay) {
      this.tl.play();
      this.borders_tl.play();
    }else{
      this.tl.reverse();
      this.borders_tl.reverse();
    }
    this.tl.eventCallback("onComplete", () => {
      if (this.props.shouldPlay) {        
        this.tl.reverse();
        this.borders_tl.reverse();
      }
    });
  }


  render() {
    this.manageAnimation();
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" style={{ width: "100px",height:200 }}>
        <path
          ref={ref => (this.border_right = ref)}
          style={styles.cls2}
          d="M137.11 94.56l47.76 89.98-43.37-4-20.99 38.17-47.77-89.99 64.37-34.16z"
        />
        <g ref={ref => (this.border_left = ref)}>
          <path style={styles.cls2} d="M47.76 94.56L0 184.54l43.37-4 21 38.17 47.76-89.99-64.37-34.16z" />
          <path style={styles.cls3} d="M112.12 128.71L64.36 218.7l-16.8-47.58 32.97-59.17.02.01 31.57 16.75z" />
        </g>
        <circle cx="92.44" cy="79.81" r="79.81" fill="#fdbd29" />
        <circle cx="92.44" cy="79.81" r="60" style={styles.cls3} />

        <path
          style={styles.cls5}
          d="M65 102.36a7.3 7.3 0 0 0-1.84 2.81 7.83 7.83 0 0 0-.61 3.34c.08 1.22.58 2.57.65 3.78v.45a56.69 56.69 0 0 1-5.88-9.6 5.49 5.49 0 0 1 .39-1.89 21.88 21.88 0 0 1 1.77-2.62 9.57 9.57 0 0 0 1-3 11.91 11.91 0 0 0 .27-3.39l-.3-.19a7 7 0 0 0-2.33 2.13 7.11 7.11 0 0 0-1.29 2.89c-.18 1.13 0 2.46-.2 3.56a5.94 5.94 0 0 1-.18.6A57.12 57.12 0 0 1 53 90.91a5.68 5.68 0 0 1 .85-2 17.91 17.91 0 0 1 2.22-2 8.52 8.52 0 0 0 1.53-2.49 10.22 10.22 0 0 0 .87-3.1l-.24-.25a7 7 0 0 0-4.4 3.77c-.39 1-.48 2.27-.89 3.22a4.28 4.28 0 0 1-.4.69 58.18 58.18 0 0 1-1-10.62A5.53 5.53 0 0 1 52.89 76a16.76 16.76 0 0 1 2.46-1.26 7.44 7.44 0 0 0 1.9-2 9.44 9.44 0 0 0 1.38-2.73c-.06-.1-.12-.2-.19-.3a5.46 5.46 0 0 0-2.71.7 5.57 5.57 0 0 0-2.1 1.78c-.55.84-.87 2-1.44 2.8a4.48 4.48 0 0 1-.66.71 59.87 59.87 0 0 1 1.29-10.39l.11-.16a5.36 5.36 0 0 1 1.94-2 15 15 0 0 1 2.51-.58 6 6 0 0 0 2.12-1.42 8.7 8.7 0 0 0 1.8-2.33 3.4 3.4 0 0 1-.12-.34 5 5 0 0 0-2.63 0 4.83 4.83 0 0 0-2.28 1.21c-.67.68-1.19 1.72-1.87 2.32a4 4 0 0 1-.95.65 59.54 59.54 0 0 1 3.66-10l.09.12.4-.41a4.81 4.81 0 0 1 2.16-1.41 13.75 13.75 0 0 1 2.4 0 5.37 5.37 0 0 0 2.23-.89 8.25 8.25 0 0 0 2.12-1.89v-.36a4.33 4.33 0 0 0-2.4-.6 4.27 4.27 0 0 0-2.32.64c-.75.51-1.45 1.4-2.19 1.83a3.56 3.56 0 0 1-1.13.43 1.92 1.92 0 0 1 0-.22 58.66 58.66 0 0 1 9.5-13 60.06 60.06 0 0 0-9.3 11.54c0-.12.07-.26.07-.38a16.3 16.3 0 0 0 0-2.61 8.5 8.5 0 0 0-1.93-4.55l-.39.15a11.78 11.78 0 0 0-1.62 6 8.9 8.9 0 0 0 .52 2.46 6.4 6.4 0 0 0 1.1 2.16l.22.28A58.1 58.1 0 0 0 53 60.78v-.09a23 23 0 0 0-.71-2.69 10 10 0 0 0-3-4.38l-.34.22a12.83 12.83 0 0 0-.06 6.6A10.29 10.29 0 0 0 50 62.9a7.35 7.35 0 0 0 1.66 2 59.67 59.67 0 0 0-1.58 8.9 23.3 23.3 0 0 0-1.31-2.54 11.82 11.82 0 0 0-4.14-4l-.28.29A14 14 0 0 0 46 74.46a12.29 12.29 0 0 0 1.8 2.31 8.37 8.37 0 0 0 2 1.63 60.17 60.17 0 0 0 .43 8.89 25.35 25.35 0 0 0-1.86-2.2 14.16 14.16 0 0 0-5.19-3.35l-.22.35a15.3 15.3 0 0 0 3.37 6.68 12.79 12.79 0 0 0 2.43 2A8.67 8.67 0 0 0 51 91.92a59.89 59.89 0 0 0 2.39 8.54c-.77-.61-1.53-1.24-2.33-1.77a16.58 16.58 0 0 0-6.18-2.44c0 .13-.09.26-.13.39a16.9 16.9 0 0 0 5.15 6.16 15.34 15.34 0 0 0 3 1.57 9.63 9.63 0 0 0 2.32.63 59.63 59.63 0 0 0 4.33 7.85c-.91-.43-1.82-.9-2.74-1.24a20 20 0 0 0-7-1.3c0 .14 0 .28-.05.42a19 19 0 0 0 7 5.22 17.39 17.39 0 0 0 3.58 1 11.36 11.36 0 0 0 2.32.15 63.96 63.96 0 0 0 4.15 4.76l2.35-2.35a60.59 60.59 0 0 1-4.75-5.16 6.4 6.4 0 0 1 0-1.69 21.59 21.59 0 0 1 1.11-3.2 12.07 12.07 0 0 0 .31-3.36 14.15 14.15 0 0 0-.48-3.59zM119.88 102.36a7.19 7.19 0 0 1 1.84 2.81 7.68 7.68 0 0 1 .61 3.34c-.08 1.22-.58 2.57-.65 3.78v.45a56.69 56.69 0 0 0 5.88-9.6 5.49 5.49 0 0 0-.39-1.89 19.74 19.74 0 0 0-1.77-2.62 10.12 10.12 0 0 1-1-3 12.28 12.28 0 0 1-.27-3.39l.3-.19a7 7 0 0 1 2.34 2.13 7.23 7.23 0 0 1 1.28 2.89c.18 1.13 0 2.46.2 3.56a4.18 4.18 0 0 0 .19.6 57.87 57.87 0 0 0 3.43-10.35 5.51 5.51 0 0 0-.85-2 17.22 17.22 0 0 0-2.22-2 8.52 8.52 0 0 1-1.53-2.49 10.51 10.51 0 0 1-.87-3.1l.24-.25a7 7 0 0 1 4.4 3.77c.39 1 .48 2.27.89 3.22a5.18 5.18 0 0 0 .4.69 58.18 58.18 0 0 0 1-10.62A5.42 5.42 0 0 0 132 76a17.17 17.17 0 0 0-2.45-1.26 7.32 7.32 0 0 1-1.91-2 9.44 9.44 0 0 1-1.38-2.73l.19-.3a5.43 5.43 0 0 1 2.71.7 5.5 5.5 0 0 1 2.1 1.78c.56.84.87 2 1.44 2.8a4.48 4.48 0 0 0 .66.71 58.91 58.91 0 0 0-1.29-10.39.86.86 0 0 1-.1-.16 5.38 5.38 0 0 0-1.95-2 14.78 14.78 0 0 0-2.51-.58 6 6 0 0 1-2.12-1.42 8.68 8.68 0 0 1-1.79-2.33c0-.11.07-.22.11-.34a5 5 0 0 1 2.64 0 4.85 4.85 0 0 1 2.27 1.21c.67.68 1.19 1.72 1.87 2.32a4 4 0 0 0 .95.65 57.18 57.18 0 0 0-3.65-10 1.25 1.25 0 0 0-.08.12l-.4-.41a4.76 4.76 0 0 0-2.17-1.41 14.7 14.7 0 0 0-2.39 0 5.17 5.17 0 0 1-2.23-.88 8.47 8.47 0 0 1-2.13-1.89v-.36a4.31 4.31 0 0 1 2.39-.61 4.21 4.21 0 0 1 2.33.65c.75.5 1.45 1.4 2.19 1.82a3.31 3.31 0 0 0 1.12.44 1.49 1.49 0 0 1 0-.21 58.71 58.71 0 0 0-9.51-13 59.38 59.38 0 0 1 9.3 11.54c0-.12-.06-.27-.06-.39a16.29 16.29 0 0 1 0-2.61A8.43 8.43 0 0 1 128 41.1l.39.14a11.8 11.8 0 0 1 1.63 6 9.35 9.35 0 0 1-.52 2.47 6.38 6.38 0 0 1-1.11 2.15l-.21.28a59.93 59.93 0 0 1 3.69 8.62v-.1a22.66 22.66 0 0 1 .67-2.7 10.09 10.09 0 0 1 3-4.38l.35.22a12.91 12.91 0 0 1 .07 6.59 10.71 10.71 0 0 1-1.16 2.46 7.38 7.38 0 0 1-1.66 2h-.06a58.66 58.66 0 0 1 1.59 8.9 20.94 20.94 0 0 1 1.31-2.54 12 12 0 0 1 4.13-4l.29.29a14 14 0 0 1-1.61 6.83 11.81 11.81 0 0 1-1.8 2.31 8.14 8.14 0 0 1-2 1.62 60.09 60.09 0 0 1-.42 8.89 26.85 26.85 0 0 1 1.85-2.2 14.35 14.35 0 0 1 5.19-3.34c.08.11.15.23.22.35a15.35 15.35 0 0 1-3.36 6.68 13.37 13.37 0 0 1-2.43 2 8.4 8.4 0 0 1-2.23 1.14 59.89 59.89 0 0 1-2.39 8.54c.77-.62 1.53-1.24 2.33-1.77a16.53 16.53 0 0 1 6.25-2.31l.14.39a16.87 16.87 0 0 1-5.16 6.15 14.5 14.5 0 0 1-3 1.57 9.33 9.33 0 0 1-2.32.64 59.19 59.19 0 0 1-4.34 7.85c.92-.44 1.83-.9 2.74-1.24a19.6 19.6 0 0 1 7-1.3v.42a19 19 0 0 1-7 5.22 17.68 17.68 0 0 1-3.58 1 11.31 11.31 0 0 1-2.32.15 61.45 61.45 0 0 1-4.15 4.76l-2.34-2.35a58.87 58.87 0 0 0 4.74-5.16 6.07 6.07 0 0 0 0-1.7 20.71 20.71 0 0 0-1.1-3.19 11.39 11.39 0 0 1-.31-3.36 13.72 13.72 0 0 1 .48-3.59zM91.31 42.08a26.61 26.61 0 0 1-9.08 12 46.65 46.65 0 0 1-6.44 4.19v13.19a47.25 47.25 0 0 0 12.8-8.22v54.28H103V42.08z"
        />

        <clipPath id="circle">
          <circle cx="92.44" cy="79.81" r="79.81" fill="#f00" />
        </clipPath>

        <g clipPath="url(#circle)" style={{ fill: "#fff", opacity: 0.6, mixBlendMode: "overlay" }}>
          <rect
            ref={ref => {
              this.light_line = ref;
            }}
            width="300"
            height="30"
            transform="rotate(20,0,0),translate(-40,140)"
          />
        </g>

        <path
          ref={ref => (this.sparkle = ref)}
          transform="matrix(0, 0, 0, 0, 130, 30)"
          d="M36.93 18.94c-13.37 2.23-15.76 4.62-18 18a.34.34 0 0 1-.67 0c-2.24-13.37-4.62-15.76-18-18a.34.34 0 0 1 0-.67C13.65 16 16 13.65 18.27.28a.34.34 0 0 1 .67 0c2.23 13.37 4.62 15.75 18 18a.34.34 0 0 1-.01.66z"
          fill="#fff"
        />
      </svg>
    );
  }
}

const styles = {
  cls2: {
    fill: "#2e3192"
  },
  cls3: {
    fill: "#fff",
    opacity: 0.6,
    mixBlendMode: "overlay"
  },
  cls5: {
    fill: "#0747a6"
  }
};

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function NumberOneIcon({ shouldPlay }) {
//   const light = useRef(null);
//   const play = useRef(shouldPlay);

//   useEffect(() => {
//     animate();
//   }, [] );

//   function animate(){
//     t1.to(light.current, 0.8, { repeat: -1, repeatDelay: 0.6, onRepeat:checkShouldStop , y: 160 });
//   }

//   function checkShouldStop() {
//     console.log(play.current);
//   }

//   return (

//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240">
//       <path style={styles.cls2} d="M47.76 94.56L0 184.54l43.37-4 21 38.17 47.76-89.99-64.37-34.16z" />
//       <path style={styles.cls3} d="M112.12 128.71L64.36 218.7l-16.8-47.58 32.97-59.17.02.01 31.57 16.75z" />
//       <path style={styles.cls2} d="M137.11 94.56l47.76 89.98-43.37-4-20.99 38.17-47.77-89.99 64.37-34.16z" />
//       <circle cx="92.44" cy="79.81" r="79.81" fill="#fdbd29" />
//       <circle cx="92.44" cy="79.81" r="60" style={styles.cls3} />
//       <path
//         style={styles.cls5}
//         d="M65 102.36a7.3 7.3 0 0 0-1.84 2.81 7.83 7.83 0 0 0-.61 3.34c.08 1.22.58 2.57.65 3.78v.45a56.69 56.69 0 0 1-5.88-9.6 5.49 5.49 0 0 1 .39-1.89 21.88 21.88 0 0 1 1.77-2.62 9.57 9.57 0 0 0 1-3 11.91 11.91 0 0 0 .27-3.39l-.3-.19a7 7 0 0 0-2.33 2.13 7.11 7.11 0 0 0-1.29 2.89c-.18 1.13 0 2.46-.2 3.56a5.94 5.94 0 0 1-.18.6A57.12 57.12 0 0 1 53 90.91a5.68 5.68 0 0 1 .85-2 17.91 17.91 0 0 1 2.22-2 8.52 8.52 0 0 0 1.53-2.49 10.22 10.22 0 0 0 .87-3.1l-.24-.25a7 7 0 0 0-4.4 3.77c-.39 1-.48 2.27-.89 3.22a4.28 4.28 0 0 1-.4.69 58.18 58.18 0 0 1-1-10.62A5.53 5.53 0 0 1 52.89 76a16.76 16.76 0 0 1 2.46-1.26 7.44 7.44 0 0 0 1.9-2 9.44 9.44 0 0 0 1.38-2.73c-.06-.1-.12-.2-.19-.3a5.46 5.46 0 0 0-2.71.7 5.57 5.57 0 0 0-2.1 1.78c-.55.84-.87 2-1.44 2.8a4.48 4.48 0 0 1-.66.71 59.87 59.87 0 0 1 1.29-10.39l.11-.16a5.36 5.36 0 0 1 1.94-2 15 15 0 0 1 2.51-.58 6 6 0 0 0 2.12-1.42 8.7 8.7 0 0 0 1.8-2.33 3.4 3.4 0 0 1-.12-.34 5 5 0 0 0-2.63 0 4.83 4.83 0 0 0-2.28 1.21c-.67.68-1.19 1.72-1.87 2.32a4 4 0 0 1-.95.65 59.54 59.54 0 0 1 3.66-10l.09.12.4-.41a4.81 4.81 0 0 1 2.16-1.41 13.75 13.75 0 0 1 2.4 0 5.37 5.37 0 0 0 2.23-.89 8.25 8.25 0 0 0 2.12-1.89v-.36a4.33 4.33 0 0 0-2.4-.6 4.27 4.27 0 0 0-2.32.64c-.75.51-1.45 1.4-2.19 1.83a3.56 3.56 0 0 1-1.13.43 1.92 1.92 0 0 1 0-.22 58.66 58.66 0 0 1 9.5-13 60.06 60.06 0 0 0-9.3 11.54c0-.12.07-.26.07-.38a16.3 16.3 0 0 0 0-2.61 8.5 8.5 0 0 0-1.93-4.55l-.39.15a11.78 11.78 0 0 0-1.62 6 8.9 8.9 0 0 0 .52 2.46 6.4 6.4 0 0 0 1.1 2.16l.22.28A58.1 58.1 0 0 0 53 60.78v-.09a23 23 0 0 0-.71-2.69 10 10 0 0 0-3-4.38l-.34.22a12.83 12.83 0 0 0-.06 6.6A10.29 10.29 0 0 0 50 62.9a7.35 7.35 0 0 0 1.66 2 59.67 59.67 0 0 0-1.58 8.9 23.3 23.3 0 0 0-1.31-2.54 11.82 11.82 0 0 0-4.14-4l-.28.29A14 14 0 0 0 46 74.46a12.29 12.29 0 0 0 1.8 2.31 8.37 8.37 0 0 0 2 1.63 60.17 60.17 0 0 0 .43 8.89 25.35 25.35 0 0 0-1.86-2.2 14.16 14.16 0 0 0-5.19-3.35l-.22.35a15.3 15.3 0 0 0 3.37 6.68 12.79 12.79 0 0 0 2.43 2A8.67 8.67 0 0 0 51 91.92a59.89 59.89 0 0 0 2.39 8.54c-.77-.61-1.53-1.24-2.33-1.77a16.58 16.58 0 0 0-6.18-2.44c0 .13-.09.26-.13.39a16.9 16.9 0 0 0 5.15 6.16 15.34 15.34 0 0 0 3 1.57 9.63 9.63 0 0 0 2.32.63 59.63 59.63 0 0 0 4.33 7.85c-.91-.43-1.82-.9-2.74-1.24a20 20 0 0 0-7-1.3c0 .14 0 .28-.05.42a19 19 0 0 0 7 5.22 17.39 17.39 0 0 0 3.58 1 11.36 11.36 0 0 0 2.32.15 63.96 63.96 0 0 0 4.15 4.76l2.35-2.35a60.59 60.59 0 0 1-4.75-5.16 6.4 6.4 0 0 1 0-1.69 21.59 21.59 0 0 1 1.11-3.2 12.07 12.07 0 0 0 .31-3.36 14.15 14.15 0 0 0-.48-3.59zM119.88 102.36a7.19 7.19 0 0 1 1.84 2.81 7.68 7.68 0 0 1 .61 3.34c-.08 1.22-.58 2.57-.65 3.78v.45a56.69 56.69 0 0 0 5.88-9.6 5.49 5.49 0 0 0-.39-1.89 19.74 19.74 0 0 0-1.77-2.62 10.12 10.12 0 0 1-1-3 12.28 12.28 0 0 1-.27-3.39l.3-.19a7 7 0 0 1 2.34 2.13 7.23 7.23 0 0 1 1.28 2.89c.18 1.13 0 2.46.2 3.56a4.18 4.18 0 0 0 .19.6 57.87 57.87 0 0 0 3.43-10.35 5.51 5.51 0 0 0-.85-2 17.22 17.22 0 0 0-2.22-2 8.52 8.52 0 0 1-1.53-2.49 10.51 10.51 0 0 1-.87-3.1l.24-.25a7 7 0 0 1 4.4 3.77c.39 1 .48 2.27.89 3.22a5.18 5.18 0 0 0 .4.69 58.18 58.18 0 0 0 1-10.62A5.42 5.42 0 0 0 132 76a17.17 17.17 0 0 0-2.45-1.26 7.32 7.32 0 0 1-1.91-2 9.44 9.44 0 0 1-1.38-2.73l.19-.3a5.43 5.43 0 0 1 2.71.7 5.5 5.5 0 0 1 2.1 1.78c.56.84.87 2 1.44 2.8a4.48 4.48 0 0 0 .66.71 58.91 58.91 0 0 0-1.29-10.39.86.86 0 0 1-.1-.16 5.38 5.38 0 0 0-1.95-2 14.78 14.78 0 0 0-2.51-.58 6 6 0 0 1-2.12-1.42 8.68 8.68 0 0 1-1.79-2.33c0-.11.07-.22.11-.34a5 5 0 0 1 2.64 0 4.85 4.85 0 0 1 2.27 1.21c.67.68 1.19 1.72 1.87 2.32a4 4 0 0 0 .95.65 57.18 57.18 0 0 0-3.65-10 1.25 1.25 0 0 0-.08.12l-.4-.41a4.76 4.76 0 0 0-2.17-1.41 14.7 14.7 0 0 0-2.39 0 5.17 5.17 0 0 1-2.23-.88 8.47 8.47 0 0 1-2.13-1.89v-.36a4.31 4.31 0 0 1 2.39-.61 4.21 4.21 0 0 1 2.33.65c.75.5 1.45 1.4 2.19 1.82a3.31 3.31 0 0 0 1.12.44 1.49 1.49 0 0 1 0-.21 58.71 58.71 0 0 0-9.51-13 59.38 59.38 0 0 1 9.3 11.54c0-.12-.06-.27-.06-.39a16.29 16.29 0 0 1 0-2.61A8.43 8.43 0 0 1 128 41.1l.39.14a11.8 11.8 0 0 1 1.63 6 9.35 9.35 0 0 1-.52 2.47 6.38 6.38 0 0 1-1.11 2.15l-.21.28a59.93 59.93 0 0 1 3.69 8.62v-.1a22.66 22.66 0 0 1 .67-2.7 10.09 10.09 0 0 1 3-4.38l.35.22a12.91 12.91 0 0 1 .07 6.59 10.71 10.71 0 0 1-1.16 2.46 7.38 7.38 0 0 1-1.66 2h-.06a58.66 58.66 0 0 1 1.59 8.9 20.94 20.94 0 0 1 1.31-2.54 12 12 0 0 1 4.13-4l.29.29a14 14 0 0 1-1.61 6.83 11.81 11.81 0 0 1-1.8 2.31 8.14 8.14 0 0 1-2 1.62 60.09 60.09 0 0 1-.42 8.89 26.85 26.85 0 0 1 1.85-2.2 14.35 14.35 0 0 1 5.19-3.34c.08.11.15.23.22.35a15.35 15.35 0 0 1-3.36 6.68 13.37 13.37 0 0 1-2.43 2 8.4 8.4 0 0 1-2.23 1.14 59.89 59.89 0 0 1-2.39 8.54c.77-.62 1.53-1.24 2.33-1.77a16.53 16.53 0 0 1 6.25-2.31l.14.39a16.87 16.87 0 0 1-5.16 6.15 14.5 14.5 0 0 1-3 1.57 9.33 9.33 0 0 1-2.32.64 59.19 59.19 0 0 1-4.34 7.85c.92-.44 1.83-.9 2.74-1.24a19.6 19.6 0 0 1 7-1.3v.42a19 19 0 0 1-7 5.22 17.68 17.68 0 0 1-3.58 1 11.31 11.31 0 0 1-2.32.15 61.45 61.45 0 0 1-4.15 4.76l-2.34-2.35a58.87 58.87 0 0 0 4.74-5.16 6.07 6.07 0 0 0 0-1.7 20.71 20.71 0 0 0-1.1-3.19 11.39 11.39 0 0 1-.31-3.36 13.72 13.72 0 0 1 .48-3.59zM91.31 42.08a26.61 26.61 0 0 1-9.08 12 46.65 46.65 0 0 1-6.44 4.19v13.19a47.25 47.25 0 0 0 12.8-8.22v54.28H103V42.08z"
//       />

//       <clipPath id="circle">
//         <circle cx="92.44" cy="79.81" r="79.81" fill="#f00" />
//       </clipPath>

//       <g clipPath="url(#circle)" style={{ fill: "#fff", opacity: 1, mixBlendMode: "overlay" }}>
//         <rect ref={light} width="200" height="30" transform="rotate(20,0,0),translate(-30,-70)" />
//       </g>
//     </svg>
//   );
// }

export default NumberOneIcon;
