import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBarComponent.css';

const Navbar = ({ siteName }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>{siteName}</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
