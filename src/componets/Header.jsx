import React, { useState, useEffect, useRef  } from 'react';
import './Header.css';
import Logo from '../newLogo.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  // add event listener to close toggle is user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);


  return (
    <div className="header">
      <div className="header__menu" ref={dropdownRef}>
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