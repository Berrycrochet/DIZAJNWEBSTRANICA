import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-left">
          <NavLink to="/" className="nav-link" end>
            Početna
          </NavLink>
          <NavLink to="/about" className="nav-link">
            O nama
          </NavLink>
          <NavLink to="/pricing" className="nav-link">
            Cjenovnik
          </NavLink>
          <NavLink to="/gigs" className="nav-link">
            Svirke
          </NavLink>
        </div>

        <div className="nav-center">
          BACKSTAGE CAFFE
        </div>

        <div className="nav-right">
          <NavLink to="/login" className="nav-link">
            Prijava
          </NavLink>
          <NavLink to="/register" className="nav-link">
            Registracija
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Kontakt
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
