

import React from 'react';
import './Services.css';
import dotnetImg from '../../assets/.net.png';
import reactnative from '../../assets//reactnatvie.webp';
import kotlin from '../../assets/kotlin.jpg';
import ai from '../../assets/ai.jpg';

const Services = () => {
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
      title: 'Enterprise grade Backend Development',
      description: 'Robust, scalable e-commerce solution built with React, Spring Boot, and PostgreSQL. Real-time inventory, secure payments, and seamless user experience.',
      features: ['React', 'Spring Boot', 'PostgreSQL']
    },
    {
      image: ai,
      title: 'AI & LLM Agent',
      description: 'Conversational AI chatbot and LLM agent using PyTorch and custom LLM fine-tuning. Context-aware, multi-turn dialogue, and business automation.',
      features: ['PyTorch', 'LLM Fine-tuning', 'AI Agents']
    },
      {
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80',
      title: 'Web App Development',
      description: 'Modern analytics dashboard with Next.js, TypeScript, and Node.js. Real-time data visualization, role-based access, and high-performance rendering.',
      features: ['Next.js', 'TypeScript', 'Node.js']
    },
    {
      image: reactnative,
      title: 'Cross Platform App Development',
      description: 'Cross-platform finance app built with React Native, Expo, for Android and iOS. Real-time expense tracking, budgeting, and secure bank API integration.',
      features: ['React Native', 'Expo', 'Android', 'iOS']
    },
     {
      image: dotnetImg,
      title: '.NET Development',
      description: 'Enterprise-grade .NET solutions including web applications, APIs, microservices, and cloud integration. Expertise in .NET Core, ASP.NET, and modern software architecture for scalable, secure, and high-performance systems.',
      features: ['.NET Core', 'ASP.NET', 'Microservices', 'Cloud Integration']
    },
  
    {
      image: kotlin,
      title: 'Native App Development',
      description: 'Native Android fitness tracker built with Kotlin and Java. Wearable integration, workout tracking, and real-time sync with cloud backend.',
      features: ['Kotlin', 'Java', 'Android']
    },
    
   
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="services-badge">WHAT WE OFFER</span>
          <h1 className="services-title">Comprehensive Digital Solutions</h1>
          <p className="services-subtitle">
            From web development to AI solutions, we offer end-to-end services<br/>
            to transform your business and accelerate growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="services-container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-image-wrapper">
                  <img src={service.image} alt={service.title} className="service-image" />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <a href="#learn-more" className="service-link">
                    Learn More <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="services-cta-content">
          <h2>Have a project in mind?</h2>
          <p>Let's build something great together.</p>
          <div className="services-cta-buttons">
            <a href="#quote" className="cta-button primary">Get a Free Quote</a>
            <a href="#portfolio" className="cta-button secondary">View Portfolio</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
