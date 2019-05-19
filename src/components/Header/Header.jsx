import React, { useState } from "react";
import logo from "./logo.svg";
import "./Header.css";

function Header() {

  const [visibleSub , setVisibleSub ] = useState( -1 );

  const handleEnter = () => {
    setVisibleSub(1);
  };
  const handleExit = () => {
    setVisibleSub(-1);
  };

  return (
    <div className="header-container">
      <img width="150px" src={logo} alt={"logo"} style={{ cursor: "pointer" }} />
      <ul className="header-menu">
        <li className="selected" onMouseEnter={handleEnter} onMouseLeave={handleExit} >
          Accueil
          { visibleSub === 1 &&
            <SubMenu>
              <li> Lorem Ipsum </li>
              <li> Lorem Ipsum </li>
              <li> Lorem Ipsum </li>
            </SubMenu>
          }
        </li>
        <li>Moyens</li>
        <li>Equipes</li>
        <li>Méthodologie</li>
        <li>Références</li>
        <li>Partenaires</li>
      </ul>
    </div>
  );
}


function SubMenu(props){
  
  
  return (
    <ul className="sub-home-menu">
      {props.children}
      <svg style={{position:'absolute',top:-10, zIndex:-1, transform:'rotate(-45deg)'  }}  width = '20px' height='20px'>
        <path d='M0,0 20,0 20,20'  fill='#fff' stroke='#bbbbbb' />
        {/* <rect width='20px' height='20px' fill='#f00' stroke='black' /> */}
      </svg>
    </ul>
  );
}

export default Header;
