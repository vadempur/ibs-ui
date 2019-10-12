import React, { useState, useEffect, useCallback } from "react";
import logo from "./logo.svg";
import logo_icon from "../../assets/logo_icon.svg";
import logo_light from "./logo-light.svg";
import "./Header.css";
import { useMobile, useEventListener } from "../../helpers/customHooks";
import {
  Link
} from "react-router-dom";
function Header({ light,setSlideVisible }) {
  const isMobile = useMobile(1080);
  const [onTop, setOnTop] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [toggleSubMenu, setToggleSubMenu] = useState(-1);

  useEffect(() => {
    if (!isMobile) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, [isMobile]);

  const handleOutSideClick = useCallback(e => {
    if (e.target.className !== "hamburger" && e.target.className !== "hamburger-piece")
      if (showMenu) setShowMenu(false);
  });

  useEventListener("click", handleOutSideClick, document.getElementById("root"));
  
  
  const handleHeaderOnTop = useCallback(() => {
    // console.log( window.scrollY );
    if(window.scrollY<60){
      if(!onTop) setOnTop(true);
    }else{
      if(onTop) setOnTop(false);
    }
  });

  useEventListener("scroll", handleHeaderOnTop);

  function handleShowMenu(e) {
    setShowMenu(!showMenu);
  }

  const handleEnter = () => {
    setToggleSubMenu(1);
  };
  const handleExit = () => {
    setToggleSubMenu(-1);
  };

  let root = document.documentElement;
  if (light) {
    root.style.setProperty("--header-text-color", "white");
  } else {
    root.style.setProperty("--header-text-color", "var(--light-gray)");
  }

  return (
    <header className={`header-container${(light ? " header-light-bg":"")}${(onTop ? " header-on-top":"")}`}>
      {!onTop ?
        <img width={"30px"} height={"30px"} src={logo_icon} alt={"logo"} className={"logo"} />
        :<img width={"130px"} height={"30px"} src={light ? logo_light : logo} alt={"logo"} className={"logo"} />
      }

      {isMobile && (
        <div className="hamburger" onClick={handleShowMenu}>
          <i className="hamburger-piece" />
          <i className="hamburger-piece" />
          <i className="hamburger-piece" />
        </div>
      )}
      {(showMenu || !isMobile) && (
        <ul className={`header-menu ${light && "header-light-txt"}`}>
          <li className="selected">
            <Link to="/" onClick={()=>{window.scrollTo(0,0); setSlideVisible(true)}}>Accueil</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>
          <li>
            <Link to="/">Produits</Link>
          </li>
          <li onMouseEnter={handleEnter} onMouseLeave={handleExit}>
            <Link to="/about">Socièté</Link>
            {toggleSubMenu === 1 && (
              <SubMenu>
                <li> Qui sommes nous </li>
                <li> Mission et Valeurs </li>
                <li> Nos partenaires </li>
                <li> Nos clients </li>
              </SubMenu>
            )}
          </li>
          <li>
            <a href="#constraction">Contact</a>
          </li>
        </ul>
      )}
    </header>
  );
}

function SubMenu(props) {
  return (
    <ul className="sub-home-menu">
      {props.children}
      <svg
        style={{
          position: "absolute",
          top: -5,
          zIndex: -1,
          transform: "rotate(-45deg)",
          boxShadow: "2px -2px 3px 0px rgba(0,0,0,.1)"
        }}
        width="15px"
        height="15px"
      >
        <path d="M0,0 20,0 20,20" fill="#fff" />
        {/* <rect width='20px' height='20px' fill='#f00' stroke='black' /> */}
      </svg>
    </ul>
  );
}

export default Header;
