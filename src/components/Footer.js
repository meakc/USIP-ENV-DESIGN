import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '24px' }}>Department Of Environmental Engineering</p>
          <p>Delhi Technological University</p>

        </div>
        <div className="footer-links">
          <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '18px' }}>Quick Links</h3>
          <ul style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '16px' }}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '18px' }}>Contact Us</h3>
          <ul style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '16px' }}>
            <li><i className="fas fa-map-marker-alt"></i>Shahbad Daulatpur Village </li>
            <li><i className="fas fa-envelope"></i><a href="mailto:info@company.com">info@company.com</a></li>
            <li><i className="fas fa-phone"></i>(123) 456-7890</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
