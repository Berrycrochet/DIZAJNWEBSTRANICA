import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import'../styles/Header.css';

const Header = ({ currentUser, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // burger meni

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleLogoutClick = () => {
    if (onLogout) {
      onLogout();
    }
    closeDropdown();
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    closeDropdown();
  };

  const closeMenu = () => {
    setMenuOpen(false);
    closeDropdown();
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className="burger" onClick={toggleMenu}>
          ☰
        </div>

        <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <div className="nav-left">
            <NavLink to="/" className="nav-link" end onClick={closeMenu}>Početna</NavLink>
            <NavLink to="/about" className="nav-link" onClick={closeMenu}>O nama</NavLink>
            <NavLink to="/pricing" className="nav-link" onClick={closeMenu}>Cjenovnik</NavLink>
          </div>

          <div className="nav-center">BACKSTAGE CAFFE</div>

          <div className="nav-right">
            <NavLink to="/Shows" className="nav-link" onClick={closeMenu}>Svirke</NavLink>

           {!currentUser ? (
  <div className="dropdown" onMouseLeave={closeDropdown}>
    <button onClick={toggleDropdown} className="nav-link button-dropdown">
      Prijava
    </button>
    {dropdownOpen && (
      <div className="dropdown-content show">
        <NavLink to="/login" className="dropdown-link" onClick={closeMenu}>
          Prijava
        </NavLink>
        <NavLink to="/register" className="dropdown-link" onClick={closeMenu}>
          Registracija
        </NavLink>
      </div>
    )}
  </div>
) : (
  <div className="dropdown" onMouseLeave={closeDropdown}>
    <button onClick={toggleDropdown} className="nav-link button-dropdown">
      {currentUser.ime || currentUser.username || currentUser.email}
    </button>
    {dropdownOpen && (
      <div className="dropdown-content show">
        <button onClick={handleLogoutClick} className="dropdown-link logout-button">
          Odjavi se
        </button>
      </div>
    )}
  </div>
)}


            <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Kontakt</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
