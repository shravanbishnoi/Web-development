import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/ProfileSection.css';
import mypic from '../assets/mypic.jpeg';

const ProfileSection = ({ text }) => {
  return (
    <section className="profile-section">
      <div className="container">
        <Row className="align-items-center">
          <Col md={6} className="image-block"> 
            <img src={mypic} alt="Profile" className="profile-image" />
          </Col>
          <Col md={6} className="text-block">
            <h1>HELLO !</h1>
            <p>{text}</p>
            <button className="contact-button">Contact</button>       
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default ProfileSection;
