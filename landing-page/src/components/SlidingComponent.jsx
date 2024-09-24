import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SlidingComponent.css';

const CarouselComponent = () => {
  const headings = [
    'Crafting Intuitive Experiences',
    'Empowering Brands',
    'Designing for Tomorrow'
  ];

  const descriptions = [
    'Transforming ideas into seamless user journeys with cutting-edge UI/UX design that captivates, engages, and converts.',
    'Our tailored design solutions create immersive digital experiences that prioritize user satisfaction and drive business growth.',
    'Elevate your digital presence with user-centered interfaces that blend functionality and creativity, ensuring a lasting impact.'
  ];

  return (
    <div className="carousel-container">
      <hr className="horizontal-line" />
      <Carousel interval={2000} className="carousel-custom">
        {headings.map((heading, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-text">
              <h3>{heading}</h3>
              <p>{descriptions[index]}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <hr className="horizontal-line" />
    </div>
  );
};

export default CarouselComponent;
