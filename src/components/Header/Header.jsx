import React, { useState , useEffect } from "react";
import logo from "./logo.svg";
import "./Header.css";
import {useMobile} from '../../customHooks'
function Header() {
  
  const isMobile = useMobile(1080);
  const [showMenu, setShowMenu] = useState(false);
  const [toggleSubMenu, setToggleSubMenu] = useState(-1);

  useEffect(()=>{
    if(!isMobile){
      setShowMenu(true);
    }else{
      setShowMenu(false);
    }
  }, [isMobile] );

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

      {isMobile && (
        <div className="nav-toggle" onClick={handleShowMenu}>
          <i />
          <i />
          <i />
        </div>
      )}
      { (showMenu || !isMobile) && (
        <ul className="header-menu">
          <svg
            style={{
              position: "absolute",
              top: -5,
              right:18,
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
          <li className="selected" onMouseEnter={handleEnter} onMouseLeave={handleExit}>
            <a href="#constraction">Accueil</a>
            {toggleSubMenu === 1 && (
              <SubMenu>
                <li> Lorem Ipsum </li>
                <li> Lorem Ipsum </li>
                <li> Lorem Ipsum </li>
              </SubMenu>
            )}
          </li>
          <li>
            <a href="#constraction">Produits et Services</a>
          </li>
          <li>
            <a href="#constraction">Equipes</a>
          </li>
          <li>
            <a href="#constraction">Méthodologie</a>
          </li>
          <li>
            <a href="#constraction">Références</a>
          </li>
          <li>
            <a href="#constraction">Partenaires</a>
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
