import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Neo Breed Marketing Solutions</h1>
        <p>Your success is our priority.</p>
        <a href="#contact" className="cta-button">Get Started</a>
      </div>
    </section>
  );
};

export default HeroSection;
