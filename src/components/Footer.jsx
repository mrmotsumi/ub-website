import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-heading">About TB Awareness</h3>
            <p className="footer-about">
              We are dedicated to raising awareness about Tuberculosis, 
              providing accurate information, and connecting people with 
              resources for prevention and treatment.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" aria-label="Facebook">
                <span className="social-icon">📘</span>
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <span className="social-icon">🐦</span>
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <span className="social-icon">📷</span>
              </a>
              <a href="https://youtube.com" aria-label="YouTube">
                <span className="social-icon">▶️</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About TB</Link></li>
              <li><Link to="/symptoms" className="footer-link">Symptoms</Link></li>
              <li><Link to="/treatment" className="footer-link">Treatment</Link></li>
              <li><Link to="/prevention" className="footer-link">Prevention</Link></li>
              <li><Link to="/resources" className="footer-link">Resources</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="footer-contact">
              <li className="contact-item">
                <span className="contact-icon">📧</span>
                info@tbawareness.org
              </li>
              <li className="contact-item">
                <span className="contact-icon">📞</span>
                +1 (800) TB-HELP
              </li>
              <li className="contact-item">
                <span className="contact-icon">🏢</span>
                123 Health Way, Medical City, 10001
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3 className="footer-heading">Stay Updated</h3>
            <p className="footer-newsletter-text">
              Subscribe to our newsletter for the latest TB awareness news and updates.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} TB Awareness. All rights reserved.
          </div>
          <div className="footer-legal">
            <Link to="/privacy" className="legal-link">Privacy Policy</Link>
            <Link to="/terms" className="legal-link">Terms of Service</Link>
            <Link to="/cookies" className="legal-link">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;