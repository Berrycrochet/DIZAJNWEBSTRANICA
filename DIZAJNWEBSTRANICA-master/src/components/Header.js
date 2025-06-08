import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // Placeholder za trenutnog korisnika.
  // U stvarnoj aplikaciji, ovo bi dolazilo iz nekog konteksta (npr. AuthContext)
  // ili globalnog stanja (Redux, Zustand).
  const currentUser = null; // Postavi na null za odjavljenog korisnika, ili na objekt za prijavljenog { username: 'Korisnik' }

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  // Funkcija za odjavu - placeholder logika
  const handleLogout = () => {
    console.log("Korisnik odjavljen!");
    // Ovdje bi išla stvarna logika za odjavu (npr. brisanje tokena, postavljanje currentUser na null)
    closeDropdown();
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav-left">
          <NavLink to="/" className="nav-link" end onClick={closeDropdown}>Početna</NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeDropdown}>O nama</NavLink>
          <NavLink to="/pricing" className="nav-link" onClick={closeDropdown}>Cjenovnik</NavLink>
        </div>

        <div className="nav-center">BACKSTAGE CAFFE</div>

        <div className="nav-right">
          <NavLink to="/Shows" className="nav-link" onClick={closeDropdown}>Svirke</NavLink>

          {/* Ovdje dolazi logika za Prijavu/Registraciju dropdown */}
          {!currentUser ? ( // Ako korisnik NIJE prijavljen
            <div className="dropdown" onMouseLeave={closeDropdown}>
              <NavLink
                to="#"
                onClick={toggleDropdown}
                className="nav-link button-dropdown"
                isActive={() => false} // Sprječava automatsko highlightovanje
              >
                Prijava
              </NavLink>
              {dropdownOpen && (
                <div className="dropdown-content show"> {/* Dodaj 'show' klasu za prikaz */}
                  <NavLink to="/login" className="dropdown-link" onClick={closeDropdown}>
                    Prijava
                  </NavLink>
                  <NavLink to="/register" className="dropdown-link" onClick={closeDropdown}>
                    Registracija
                  </NavLink>
                </div>
              )}
            </div>
          ) : ( // Ako je korisnik prijavljen
            <div className="dropdown" onMouseLeave={closeDropdown}>
              <button onClick={toggleDropdown} className="nav-link button-dropdown">
                {currentUser.username || 'Moj Profil'}
              </button>
              {dropdownOpen && (
                <div className="dropdown-content show"> {/* Dodaj 'show' klasu za prikaz */}
                  <NavLink to="/profile" className="dropdown-link" onClick={closeDropdown}>
                    Moj Profil
                  </NavLink>
                  <button onClick={handleLogout} className="dropdown-link">
                    Odjavi se
                  </button>
                </div>
              )}
            </div>
          )}

          <NavLink to="/contact" className="nav-link" onClick={closeDropdown}>Kontakt</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;