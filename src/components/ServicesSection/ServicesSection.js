import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 6H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 9H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 12H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Mobile & App Development',
      technologies: ['React Native', 'Kotlin','Android', 'iOS','Flutter' ],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Backend Development',
      technologies: ['Spring Boot', 'Node.js', '.NET Core', 'Express', 'Microservices', 'REST APIs'],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 10L9 8L7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 10H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Web Development',
      technologies: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'HTML/CSS', 'Tailwind'],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 2C13.5 2 15 3 15 5C15 6 14.5 7 13 7C11.5 7 11 6 11 5C11 3 11.5 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 17C13.5 17 15 18 15 19C15 21 13.5 22 12 22C11.5 22 9 21 9 19C9 18 10.5 17 12 17Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M7 7C8 6 9.5 6 10.5 6.5C11 7 11.5 8 11 9C10.5 10 9.5 10.5 8.5 10C7.5 9.5 6.5 8.5 7 7Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M13 15C13.5 16 13.5 17 13 18C12 19 10.5 19 9.5 18.5C8.5 18 8 17 8.5 15.5C9 14 10 13.5 11 14C12 14.5 12.5 14.5 13 15Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M17 7C18 8.5 18 10 17.5 11C17 11.5 16 12 15 11.5C14 11 13.5 9.5 14 8.5C14.5 7.5 15.5 6.5 17 7Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Distributed Systems',
      technologies: ['Docker', 'Kubernetes', 'Redis', 'RabbitMQ', 'Kafka', 'Load Balancing','Cassandra','Spark','Flink'],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <path d="M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M8 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M16 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M7 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'Database Management',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Oracle', 'Firebase'],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'AI & Machine Learning',
      technologies: ['PyTorch', 'TensorFlow', 'LLM Fine-tuning', 'NLP', 'Computer Vision', 'AI Agents'],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'DevOps & CI/CD',
      technologies: ['GitHub Actions', 'Jenkins', 'AWS', 'Azure', 'CI/CD Pipelines', 'Terraform'],
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
          <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
          <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Cloud & Infrastructure',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Serverless', 'Cloud Architecture', 'CDN'],
    },
  ];

  return (
    <section className="services-modern-section">
      <div className="services-modern-container">
        <div className="services-modern-header">
          <span className="section-badge">What We Do</span>
          <h2 className="services-modern-title">
            Expert <span className="highlight-text">Technical Services</span>
          </h2>
          <p className="services-modern-subtitle">Full-stack expertise across modern technologies and platforms</p>
        </div>

        <div className="services-capability-grid">
          {services.map((service, index) => (
            <div key={index} className="service-capability-item">
              <div className="capability-icon">{service.icon}</div>
              <h3 className="capability-title">{service.title}</h3>
              <div className="capability-tags">
                {service.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default ServicesSection;
