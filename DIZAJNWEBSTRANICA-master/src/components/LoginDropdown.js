import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // koristi Link ako koristiš React Router

const LoginDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown" style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setOpen(!open)}
        className="button"
        type="button"
      >
        Prijava
      </button>

      {open && (
        <div
          className="dropdown-content"
          style={{
            background: 'white', // Ovo je bila greška: bilo je `background:2, 'white'`
            position: 'absolute',
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
            padding: '0.5rem 1rem',
            zIndex: 1,
            minWidth: '120px',
            borderRadius: '5px',
            marginTop: '0.5rem',
          }}
        >
          <Link
            to="/Login"
            style={{
              display: 'block',
              padding: '0.5rem 0',
              color: '#036977',
              textDecoration: 'none',
            }}
          >
            Prijava
          </Link>
          <Link
            to="/RegisterForma"
            style={{
              display: 'block',
              padding: '0.5rem 0',
              color: '#036977',
              textDecoration: 'none',
            }}
          >
            Registracija
          </Link>
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
