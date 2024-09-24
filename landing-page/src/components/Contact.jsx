import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <Container>
        <Row>
          <Col md={6} className="contact-image-col">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3647212514015!2d81.07030757602992!3d26.8919177609828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399958aa9da50cb7%3A0x8f5a1f4d75d0d691!2sShri%20Ramswaroop%20College%20Of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1727166914485!5m2!1sen!2sin"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </Col>

          <Col md={6} className="contact-form-col">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-description">Feel free to reach out for collaborations or just a friendly chat.</p>
            <Form className="contact-form">
              <Form.Group controlId="formName">
                <Form.Label className="form-label">Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" className="form-input" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label className="form-label">Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" className="form-input" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label className="form-label">Your Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" className="form-input" />
              </Form.Group>

              <div className="text-end">
                <Button variant="primary" type="submit" className="submit-btn">
                  Send Message
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
