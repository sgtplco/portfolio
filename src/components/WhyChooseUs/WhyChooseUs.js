import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const technologies = [
    {
      name: 'React',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
        </svg>
      ),
      description: 'Building dynamic, responsive web applications with React',
      color: '#61DAFB',
    },
    {
      name: 'Node.js',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1.5L2 7v10l10 5.5L22 17V7L12 1.5zm0 2.2l7.5 4.1v8.4L12 20.3l-7.5-4.1V7.8L12 3.7z"/>
          <path d="M12 8L8 10.5v5L12 18l4-2.5v-5L12 8z"/>
        </svg>
      ),
      description: 'Scalable backend solutions with Node.js and Express',
      color: '#68A063',
    },
    {
      name: 'Python',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.5 2 7 3.5 7 6v2h5v1H6c-2 0-3 1.5-3 4s1 4 3 4h1v-2c0-2 1-4 4-4h4c2 0 3-1 3-3V6c0-2.5-1.5-4-5-4zm-1 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM12 22c3.5 0 5-1.5 5-4v-2h-5v-1h6c2 0 3-1.5 3-4s-1-4-3-4h-1v2c0 2-1 4-4 4h-4c-2 0-3 1-3 3v4c0 2.5 1.5 4 5 4zm1-2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
        </svg>
      ),
      description: 'AI/ML solutions and data processing with Python',
      color: '#3776AB',
    },
     {
      name: '.NET',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#fff" stroke="#888" strokeWidth="1.5"/>
          <text x="12" y="17" textAnchor="middle" fill="#888" fontSize="12" fontWeight="bold">.NET</text>
        </svg>
      ),
      description: 'Robust enterprise and web solutions with .NET',
      color: '#888',
    },
    {
      name: 'AWS',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.5 10c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5S8 12.3 8 11.5 7.3 10 6.5 10zm5.5 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5zm5.5 0c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5 1.5-.7 1.5-1.5-.7-1.5-1.5-1.5z"/>
          <path d="M2 15c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6zm18-7v8H4V8h16z"/>
        </svg>
      ),
      description: 'Cloud infrastructure and deployment on AWS',
      color: '#FF9900',
    },
    {
      name: 'Docker',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="9" width="3" height="3" />
          <rect x="6" y="9" width="3" height="3" />
          <rect x="10" y="9" width="3" height="3" />
          <rect x="6" y="5" width="3" height="3" />
          <rect x="10" y="5" width="3" height="3" />
          <path d="M14 9h2c2 0 3.5.5 4.5 1.5 1 1 1.5 2.5 1.5 4.5v1h-20v-1c0-2 .5-3.5 1.5-4.5S12 9 14 9z"/>
        </svg>
      ),
      description: 'Containerization and microservices architecture',
      color: '#2496ED',
    },
    {
      name: 'TypeScript',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="2"/>
          <text x="12" y="17" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">TS</text>
        </svg>
      ),
      description: 'Type-safe development with TypeScript',
      color: '#3178C6',
    },
   
    {
      name: 'Next.js',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 8h8l-6 8V8z" fill="white"/>
        </svg>
      ),
      description: 'Server-side rendering and static site generation',
      color: '#000000',
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="why-container">
        <div className="section-header">
          <span className="section-badge">Our Technology Stack</span>
          <h2>Technologies We <span className="highlight-text">Master</span></h2>
          <p className="section-subtitle">Leveraging cutting-edge technologies to build powerful, scalable solutions</p>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="tech-swiper"
        >
          {technologies.map((tech, index) => (
            <SwiperSlide key={index}>
              <div className="tech-card">
                <div className="tech-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <h3 className="tech-name">{tech.name}</h3>
                <p className="tech-description">{tech.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhyChooseUs;
