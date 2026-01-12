
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-modern">
      <div className="hero-modern-container">
        <div className="hero-modern-content">
          <h1 className="hero-modern-title">
            Building Scalable Web, AI & Cloud Products for Growing Businesses
          </h1>
          <p className="hero-modern-subtitle">
            Full-stack development studio helping startups and enterprises ship faster with modern tech.
          </p>
          <div className="hero-modern-buttons">
            <button
              className="hero-btn hero-btn-primary"
              onClick={() => navigate('/contact')}
            >
              Start a Project <span className="btn-plus">+</span>
            </button>
            <button
              className="hero-btn hero-btn-secondary"
              onClick={() => navigate('/portfolio')}
            >
              View Case Studies <span className="btn-arrow">→</span>
            </button>
          </div>
        </div>
        <div className="hero-modern-visual">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop" 
            alt="Dashboard Analytics" 
            className="hero-device-img hero-laptop"
            style={{ borderRadius: '18px' }}
          />
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop" 
            alt="Dashboard Overview" 
            className="hero-device-img hero-desktop-1"
            style={{ borderRadius: '18px' }}
          />
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=450&fit=crop" 
            alt="Analytics Charts" 
            className="hero-device-img hero-desktop-2"
            style={{ borderRadius: '18px' }}
          />
        </div>
      </div>
      
      <div className="hero-stats">
        <div className="hero-stat-item">
          <div className="hero-stat-number">50+</div>
          <div className="hero-stat-label">Projects Delivered</div>
        </div>
        <div className="hero-stat-item">
          <div className="hero-stat-number">10+</div>
          <div className="hero-stat-label">Industries</div>
        </div>
        <div className="hero-stat-item">
          <div className="hero-stat-number">5+</div>
          <div className="hero-stat-label">Years Experience</div>
        </div>
      </div>

     
    </section>
  );
};

export default Hero;
