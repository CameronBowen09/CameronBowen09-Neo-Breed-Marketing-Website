import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#about">About</a></li>
        <li className="dropdown">
          <a href="#services">Services &#9662;</a>
          <div className="dropdown-content">
            <a href="#digital-marketing">Digital Marketing</a>
            <a href="#social-media">Social Media Management</a>
            <a href="#seo">SEO Optimization</a>
          </div>
        </li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;