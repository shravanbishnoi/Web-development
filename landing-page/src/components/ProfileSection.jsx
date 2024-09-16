import React from 'react';
import '../styles/ProfileSection.css';
import mypic from '../assets/mypic.jpeg';


const ProfileSection = ({ text, scrollToContact }) => {
  return (
    <section className="profile-section">
      <div className="profile-container">
        <div className="image-block">
            <img src={mypic} alt="Profile" className="profile-image" />
        </div>
        <div className="text-block">
          <h1>HELLO !</h1>
          <p>
            {text}
          </p>
          <button className="contact-button" onClick={scrollToContact}>Contact</button>
          <button className="contact-button" onClick={scrollToContact}>More</button>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
