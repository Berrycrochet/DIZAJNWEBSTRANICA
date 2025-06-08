import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginDropdown = () => {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    setOpen(false);
    navigate('/login');
  };

  return (
    <div className="dropdown" style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setOpen(!open)}
        className="button"
        type="button"
      >
        {isLoggedIn ? 'Nalog' : 'Prijava'}
      </button>

      {open && (
        <div
          className="dropdown-content"
          style={{
            background: 'white',
            position: 'absolute',
            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
            padding: '0.5rem 1rem',
            zIndex: 1,
            minWidth: '140px',
            borderRadius: '5px',
            marginTop: '0.5rem',
          }}
        >
          {!isLoggedIn ? (
            <>
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
            </>
          ) : (
            <button
              onClick={handleLogout}
              style={{
                display: 'block',
                padding: '0.5rem 0',
                color: '#036977',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              Odjavi se
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LoginDropdown;
