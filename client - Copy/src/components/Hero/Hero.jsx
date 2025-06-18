import React, { useEffect, useState } from 'react';
import './Hero.css'; // your existing CSS
import img1 from '../../assets/hero1.png';
import img2 from '../../assets/hero2.png';  // additional images
import img3 from '../../assets/hero3.png';  // additional images  

const images = [img1, img2, img3];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(slider);
  }, []);

  return (
    <div id='home'className="hero">
      <div className="hero-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      <div className="hero-content">
        <h1>Welcome to Our Platform</h1>
        <p>
          Discover the best services and solutions that empower your business growth. Join us
          on a journey of innovation and excellence.
        </p>
        <button className="btn">Get Started</button>  
      </div>
    </div>
  );
};

export default Hero;
