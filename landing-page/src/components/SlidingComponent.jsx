import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SlidingComponent.css';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <hr className="horizontal-line" />
      <Carousel interval={2000} className="carousel-custom">
        <Carousel.Item>
          <div className="carousel-text">
            <h3>Crafting Intuitive Experiences</h3>
            <p>Transforming ideas into seamless user journeys with cutting-edge<br></br> UI/UX design that captivates, engages, and converts.</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-text">
            <h3>Empowering Brands</h3>
            <p>Our tailored design solutions create immersive digital experiences that<br></br> prioritize user satisfaction and drive business growth.</p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="carousel-text">
            <h3>Designing for Tomorrow</h3>
            <p>Elevate your digital presence with user-centered interfaces that blend <br></br>functionality and creativity, ensuring a lasting impact.</p>
          </div>
        </Carousel.Item>
      </Carousel>
      <hr className="horizontal-line" />
    </div>
  );
}

export default CarouselComponent;
