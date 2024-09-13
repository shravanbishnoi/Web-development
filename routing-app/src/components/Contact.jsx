import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>
          We would love to hear from you! Whether you have questions, feedback, or just want to connect, 
          feel free to reach out to us using the form below or through our contact details.
        </p>
        
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>

      <div className="contact-gallery">
        <img 
          src="https://images.pexels.com/photos/3184345/pexels-photo-3184345.jpeg" 
          alt="Customer Support" 
          className="contact-image" 
        />
        <img 
          src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg" 
          alt="Communication" 
          className="contact-image" 
        />
        <img 
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg" 
          alt="Contact Us" 
          className="contact-image" 
        />
      </div>
    </div>
  );
};

export default Contact;
