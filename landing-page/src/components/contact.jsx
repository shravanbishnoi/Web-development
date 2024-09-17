import React from 'react';
import '../styles/contact.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const Contact = () => {
    return (
        <div className="contact-section">
            <h2 className='heading'>INTERESTED IN <br/>WORKING WITH ME?</h2>
            <Button className="rounded-pill btn-contact">
              <Nav.Link className="text-black">Start a project</Nav.Link>
            </Button>
        </div>
    );
};

export default Contact;
