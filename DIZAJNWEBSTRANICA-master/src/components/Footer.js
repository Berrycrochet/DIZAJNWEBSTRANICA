import React from 'react';
import '../styles/Footer.css';
import Logo from '../images/Logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="socials">
          <a href="https://www.instagram.com/backstagecaffe/?hl=en" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.facebook.com/p/Backstage-Caffe-Zenica-100057204169207/" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="https://x.com/backstage_caffe" target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fab fa-x-twitter"></i> X
          </a>
        </div>

        <div className="footer-center">
          <h2 className="footer-title">BACKSTAGE CAFFE</h2>
        </div>

        <div className="footer-logo">
          <img src={Logo} alt="Backstage Logo" />
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