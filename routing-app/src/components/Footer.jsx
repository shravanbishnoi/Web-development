import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Designed and Implemented by Shravan</p>
        <p>&copy; {new Date().getFullYear()} RoutingMaster. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
