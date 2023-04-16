import React, { useState } from 'react';
import './Header.css';
import Logo from '../newLogo.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="header">
      <div className="header__menu">
        <div className="header__menu-toggle" onClick={toggleMenu}>
          Menu
        </div>
        {menuOpen && (
          <div className="header__menu-dropdown">
            <a href="#about">About</a>
            <a href="#how-to-play">How to Play</a>
            <a href="#contato">Contato</a>
          </div>
        )}
      </div>
      <div className="header__logo">
        <img src={Logo} alt="My Logo" />
      </div> 

      {/* this is a place holder */}
      <div className="header__menu" style={ {visibility: 'hidden' }}>
        <div className="header__menu-toggle" onClick={toggleMenu}>
          Menu
        </div>
        {menuOpen && (
          <div className="header__menu-dropdown">
            <a href="#about">About</a>
            <a href="#how-to-play">How to Play</a>
            <a href="#contato">Contato</a>
          </div>
        )}
      </div> 
      
    </div>
  );
}

export default Header;