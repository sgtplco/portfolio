import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top when location changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Handle navigation and scroll to top
  const handleNavClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={() => handleNavClick('/')}
          style={({ isActive }) => ({ color: isActive ? '#4a6788' : undefined })}>
          <span className="logo-text">SGTPL</span>
        </NavLink>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={() => handleNavClick('/')}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={() => handleNavClick('/services')}>Services</NavLink>
          <NavLink to="/portfolio" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={() => handleNavClick('/portfolio')}>Portfolio</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`} onClick={() => handleNavClick('/contact')}>Contact</NavLink>
          <NavLink to="/contact" className="navbar-cta-button" onClick={() => handleNavClick('/contact')}>Get Started</NavLink>
        </div>

        <button 
          className="navbar-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
