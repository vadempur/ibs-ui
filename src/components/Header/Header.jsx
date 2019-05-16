import React from 'react';
import logo from './logo.svg';
import './Header.css';

function Header(){
  return(
    <div className="header-container">
      <img width='150px' src={logo} alt={'logo'} style={{cursor:"pointer"}}/> 
    
      <ul  className="header-menu">
        <li className="selected">Accueil</li>
        <li>Moyens</li>
        <li>Equipes</li>
        <li>Méthodologie</li>
        <li>Références</li>
        <li>Partenaires</li>
      </ul>
    </div>
  );
}

export default Header;