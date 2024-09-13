import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to RoutingMaster, a platform designed to help you navigate through the web efficiently. 
          We are dedicated to providing high-quality content and a seamless user experience.
        </p>
      </div>

      <div className="about-gallery">
        <img 
          src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg" 
          alt="Teamwork" 
          className="about-image" 
        />
        <img 
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg" 
          alt="Office Discussion" 
          className="about-image" 
        />
        <img 
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
          alt="Professional Team" 
          className="about-image" 
        />
      </div>
    </div>
  );
};

export default About;
