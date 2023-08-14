import React from 'react';
import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Services from './components/Services/Services';
import ContactForm from './components/ContactForm/ContactForm';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <HeroSection />
      <About />
      <Services />
      <ContactForm />
    </div>
  );
};

export default App;
