import React from 'react';
import './Footer.css';
import Login from '../pages/Login';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
        <div className="footer-logo">
          {/* Ovde ubaciš logo - možeš staviti <img src="path_to_logo" alt="Backstage Logo" /> ili tekst */}
          <img src="../images/Logo.png" alt="Backstage Logo" />
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© Sva prava zadržana Backstage</p>
      </div>
    </footer>
  );
};

export default Footer;
