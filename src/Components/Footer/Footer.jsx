import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ProductStore</h3>
            <p>Your trusted partner for premium products and exceptional shopping experience.</p>
            <div className="social-links">
              <a href="https://facebook.com/productstore" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
              <a href="https://twitter.com/productstore" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
              <a href="https://instagram.com/productstore" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
              <a href="https://linkedin.com/company/productstore" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/add-product">Add Product</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Categories</h4>
            <ul>
              <li><Link to="/products?brand=Nike">Nike</Link></li>
              <li><Link to="/products?brand=Adidas">Adidas</Link></li>
              <li><Link to="/products?brand=Puma">Puma</Link></li>
              <li><Link to="/products?brand=Reebok">Reebok</Link></li>
              <li><Link to="/products?brand=Under%20Armour">Under Armour</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p>📧 support@productstore.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Commerce Street<br />New York, NY 10001</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 ProductStore. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/support">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 