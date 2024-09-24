import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/ProfileSection.css';
import mypic from '../assets/mypic.jpeg';
import { Link } from 'react-router-dom';

const ProfileSection = ({ text, btnlink }) => {
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
            <Link to={btnlink}>
              <button className="contact-button">Contact</button>
            </Link>    
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default ProfileSection;
