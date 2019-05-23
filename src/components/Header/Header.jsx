import React, { useState,useEffect } from "react";
import logo from "./logo.svg";
import "./Header.css";

function Header() {
  const [isMobileSize, setIsMobileSize] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [toggleSubMenu, setToggleSubMenu] = useState(-1);
  
  useEffect(()=>{
    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  function resize() {
    let innerWidth = window.innerWidth <= 1080;
    if (innerWidth !== isMobileSize) {
      setIsMobileSize(innerWidth);
      setShowMenu(!innerWidth);
    }
  }

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  const handleEnter = () => {
    setToggleSubMenu(1);
  };
  const handleExit = () => {
    setToggleSubMenu(-1);
  };

  return (
    <header className="header-container">

      <img width="150px" src={logo} alt={"logo"} style={{ cursor: "pointer" }} />
      
      {isMobileSize && (
        <div className="nav-toggle" onClick={handleShowMenu}>
            <i />
            <i />
            <i />
        </div>
      )}
      {showMenu &&

      <ul className="header-menu">
        <li className="selected" onMouseEnter={handleEnter} onMouseLeave={handleExit}>
          <a href='#constraction'>Accueil</a>
          {toggleSubMenu === 1 && (
            <SubMenu>
              <li> Lorem Ipsum </li>
              <li> Lorem Ipsum </li>
              <li> Lorem Ipsum </li>
            </SubMenu>
          )}
        </li>
        <li><a href='#constraction'>Produits et Services</a></li>
        <li><a href='#constraction'>Equipes</a></li>
        <li><a href='#constraction'>Méthodologie</a></li>
        <li><a href='#constraction'>Références</a></li>
        <li><a href='#constraction'>Partenaires</a></li>
      </ul>
      }
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
          top: -10, zIndex: -1, 
          transform: "rotate(-45deg)", 
          boxShadow: "2px -2px 3px 0px rgba(0,0,0,.1)"
        }}
        width="20px"
        height="20px"
      >
        <path d="M0,0 20,0 20,20" fill="#fff"  />
        {/* <rect width='20px' height='20px' fill='#f00' stroke='black' /> */}
      </svg>
    </ul>
  );
}

export default Header;
