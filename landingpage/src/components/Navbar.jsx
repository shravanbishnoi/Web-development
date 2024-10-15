import React from 'react';
import './Navbar.css'; // External CSS file
import {useNavigate} from 'react-router-dom';
import {useUser} from '../lib/context/user';

const Navbar = () => {
  const user = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    user.logout();
    navigate("/"); // Redirect to login page after logout
  };

  if (!user.current) {
    // If the user is not logged in, redirect to the login page
    navigate("/");
    return null; // Prevent rendering until redirect
  }
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Testimonials</a>
      </div>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
