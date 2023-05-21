import React from 'react';
import './Navbar.css';
import logo from './images/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="Logo" />
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="/services" className="navbar-link">Services</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Lab Infrastructure</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Consultancy</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Publications</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Events</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Alumni</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Student</a>
          </li>
          <li className="navbar-item">
            <a href="/contact" className="navbar-link">Placement</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
