import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Navbar.css'; // We'll create this CSS file next

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo/Brand */}
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">🦠</span>
          <span className="logo-text">TB Awareness</span>
        </Link>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <span className="icon">✕</span>
          ) : (
            <span className="icon">☰</span>
          )}
        </div>

        {/* Desktop Menu */}
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link" onClick={toggleMobileMenu}>
              About TB
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/treatment" className="navbar-link" onClick={toggleMobileMenu}>
              Treatment
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/prevention" className="navbar-link" onClick={toggleMobileMenu}>
              Prevention
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/resources" className="navbar-link" onClick={toggleMobileMenu}>
              Resources
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;