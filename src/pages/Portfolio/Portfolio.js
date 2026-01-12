

import React, { useState } from 'react';
import './Portfolio.css';
import Modal from '../../components/Modal/Modal';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Blockchain Marketplace & Walletless Functionality',
      category: 'Blockchain',
      budget: '$700 USD',
      description: 'Developed a basic marketplace with walletless functionality for a blockchain project.',
      techStack: ['Blockchain', 'Smart Contracts', 'Web3', 'Marketplace Development'],
      review: 'Paras and his team did an outstanding job. They were always attentive, responsive, and addressed every point we discussed thoroughly. I would gladly work with them again, and if you have any blockchain-related projects, I highly recommend reaching out to Paras.',
      clientLocation: 'International Client'
    },
    {
      title: 'Atmospheric Data Analysis and Visualization',
      category: 'Data Science',
      budget: '$150 USD',
      description: 'R-based data analysis project with statistical analysis and visualization.',
      techStack: ['R Programming', 'Data Analysis', 'Statistical Analysis', 'Data Cleansing', 'Data Visualization'],
      review: 'He is always great to work with. He is very knowledgeable and he delivers on time. I had an R project and he did a great job.',
      clientLocation: 'International Client'
    },
    {
      title: 'Full Stack Development Project',
      category: 'Full Stack',
      budget: '$1,200 USD',
      description: 'Complex full-stack logistics application with multiple technology stacks.',
      techStack: ['Golang', 'C++ Programming', 'Full Stack Development', 'Flutter', 'Logistics'],
      review: 'Dedicated to work, persist till work is over. Always ready to help going out of way, reliable guy to complete the work.',
      clientName: 'Omar A.',
      clientLocation: 'Riyadh, Saudi Arabia'
    },
    {
      title: 'Multicurrency HD Wallet (Bitcoin/Ethereum)',
      category: 'Blockchain',
      budget: '$250 USD',
      description: 'HD wallet implementation supporting multiple cryptocurrencies.',
      techStack: ['JavaScript', 'HTML5', 'Node.js', 'Blockchain', 'Truffle'],
      review: 'Job well done, will contact again in the future.',
      clientName: 'Tomer M.',
      clientLocation: 'Haifa, Israel'
    },
    {
      title: 'Assembler Development',
      category: 'Systems Programming',
      budget: '$120 USD',
      description: 'Custom assembler creation for low-level programming.',
      techStack: ['C Programming', 'Java', 'C#', 'Software Architecture', 'C++'],
      review: 'Perfect result as always, Shree and his team are professionals that can help with any code engineering task in very high level. I recommend him for anyone looking for perfect solution within deadlines.',
      clientName: 'Dor R.',
      clientLocation: 'Rishon Lezion, Israel'
    },
    {
      title: 'Database Indexing Enhancement',
      category: 'Database',
      budget: '$290 USD',
      description: 'Advanced database optimization with indexing strategies using Python.',
      techStack: ['Python', 'Software Architecture', 'Database Programming', 'Database Development', 'Database Design'],
      review: 'I had a database project and needed help with Indexing, he did a wonderful job! He really knows what he is doing, as soon as you talk a little technical with him you will see he is very knowledgeable! He actually is a professional and he does all work himself! I highly recommend him for your tasks.',
      clientName: 'Arian B.',
      clientLocation: 'Davis, United States'
    },
    {
      title: 'Mobile App for Parking Startup',
      category: 'Mobile Development',
      budget: '₹20,000 INR',
      description: 'Cross-platform parking booking application with payment integration.',
      techStack: ['React Native', 'Java', 'MySQL', 'Google Maps API', 'Payment Gateway Integration'],
      review: 'They were responsive with the project progress and had good understanding of the problems that were coming up.',
      clientName: 'Kumar S.',
      clientLocation: 'Patna, India'
    },
    {
      title: 'Project Management System',
      category: 'Enterprise Software',
      budget: '£60 GBP',
      description: 'Java-based project management system with Oracle/MySQL database.',
      techStack: ['Java', 'Software Architecture', 'Oracle', 'MySQL', 'Eclipse'],
      review: 'He is a good worker and does all the jobs I need and very knowledgeable in his field of work thank you!',
      clientName: 'Grow D.',
      clientLocation: 'Mugla, Turkey'
    },
    {
      title: 'JSP Bug Fixing',
      category: 'Web Development',
      budget: '$30 USD',
      description: 'Quick bug fix in JSP codebase.',
      techStack: ['Java', 'JSP', 'CSS', 'HTML'],
      review: 'Awesome Job. Completed on time. Will definitely hire him for any future work.',
      clientName: 'Sri R.',
      clientLocation: 'Raleigh, United States'
    },
    {
      title: 'Simplex Algorithm Translation (C to JavaScript)',
      category: 'Algorithm Implementation',
      budget: '$150 USD',
      description: 'Translation of simplex software from C to JavaScript across all three versions.',
      techStack: ['C Programming', 'JavaScript', 'Algorithm Development'],
      review: 'Thanks to Anurag for his efforts and the good communication.',
      clientName: 'Noor A.',
      clientLocation: 'Ramat Gan, Israel'
    },
    {
      title: 'Schedule and Transport Planning Tool',
      category: 'Software Development',
      budget: '$150 USD',
      description: 'Complex scheduling and transport plan optimization software.',
      techStack: ['C Programming', 'Java', 'Python', 'Software Architecture', 'C++'],
      review: 'I would really thank you Anurag J. for your precious work. The task was completed on time and all requirements satisfied. Even if during the developing some minor bug appeared, Anurag J. answered to all my queries and solved the issues quickly.',
      clientName: 'Riccardo C.',
      clientLocation: 'Mori, Italy'
    },
    {
      title: 'Unix Shell Expert (Operating System)',
      category: 'Operating Systems',
      budget: '₹23,500 INR',
      description: 'Unix shell development and system administration work.',
      techStack: ['Linux', 'Cisco', 'UNIX', 'Network Administration'],
      review: 'Thanks for the work. He is very polite and professional. I would hire you again.',
      clientName: 'Simon A.',
      clientLocation: 'New Delhi, India'
    },
    {
      title: 'Simplex Algorithm Translation (C to Java)',
      category: 'Algorithm Implementation',
      budget: '$300 USD',
      description: 'Converting simplex algorithm implementation from C to Java.',
      techStack: ['C Programming', 'Java'],
      review: 'He is professional. Did great job and very fast. I definitely going to work with him again.',
      clientName: 'Ilan V.',
      clientLocation: 'Akko, Israel'
    },
    {
      title: 'Operating System C Development',
      category: 'Operating Systems',
      budget: '$550 USD',
      description: 'Complex operating system development project in C.',
      techStack: ['C Programming', 'Operating Systems', 'System Architecture'],
      review: 'I have never met someone so responsible and responsive as Anurag. Anurag helped so much even during weekends and even when he was in vacation texting me first if I am doing alright. You are going to see how humble, nice, warm, and responsible he is.',
      clientLocation: 'International Client'
    },
    {
      title: 'Real-Time Air Traffic Control System',
      category: 'Real-Time Systems',
      budget: '$200 CAD',
      description: 'Real-time ATC system for air traffic monitoring and control.',
      techStack: ['C Programming', 'C++', 'Real-Time Systems', 'System Architecture'],
      review: 'He is an extremely knowledgeable person, very humble and polite. Kept in touch throughout my project and even explained and helped me after the timely delivery of the work.',
      clientLocation: 'International Client'
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const handleOpenModal = (project) => {
    setModalProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalProject(null);
  };

  return (
    <div className="portfolio-page">
      <section className="portfolio-hero-new">
        <div className="portfolio-hero-container">
          <motion.div
            className="portfolio-hero-content"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              <span className="hero-accent">Client</span> Testimonials
            </h1>
            <p>Real projects, real reviews from satisfied clients worldwide. Browse through our verified freelance work and see what clients say about our dedication to quality and timely delivery.</p>
            <a href="#projects" className="hero-cta-btn">See Projects ↓</a>
          </motion.div>
          <motion.div
            className="portfolio-hero-image"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=700&fit=crop"
              alt="Portfolio showcase"
            />
            <div className="hero-image-accent"></div>
          </motion.div>
        </div>
      </section>


      <div className="portfolio-projects" id="projects">
        <div className="portfolio-container">
          <h2>Client Projects & Testimonials</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
            Real reviews from real clients on Freelancer.com
          </p>
          <div className="portfolio-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn${selectedCategory === cat ? ' active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                  border: '1px solid #e5e7eb',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onClick={() => handleOpenModal(project)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <span className="alt-project-tag" style={{ fontSize: '0.85rem' }}>{project.category}</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem', color: '#1f2937' }}>{project.title}</h3>
                <p style={{ fontSize: '0.95rem', color: '#6b7280', marginBottom: '1rem', lineHeight: '1.6' }}>{project.description}</p>
                
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} style={{
                        fontSize: '0.8rem',
                        padding: '0.25rem 0.75rem',
                        background: '#f3f4f6',
                        borderRadius: '6px',
                        color: '#374151',
                        fontWeight: '500'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div style={{
                  padding: '1rem',
                  background: '#f9fafb',
                  borderLeft: '3px solid #3b82f6',
                  borderRadius: '8px',
                  marginBottom: '1rem'
                }}>
                  <p style={{ fontSize: '0.9rem', color: '#4b5563', fontStyle: 'italic', lineHeight: '1.6' }}>
                    "{project.review}"
                  </p>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: '#9ca3af' }}>
                  <span>{project.clientName || 'Verified Client'}</span>
                  <span>📍 {project.clientLocation}</span>
                </div>
                
                
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={handleCloseModal}>
        {modalProject && (
          <div className="modal-project-details">
            <div style={{ 
              display: 'inline-block', 
              padding: '0.5rem 1rem', 
              background: '#f0f9ff', 
              borderRadius: '8px',
              marginBottom: '1rem'
            }}>
              <span style={{ fontSize: '0.9rem', color: '#0369a1', fontWeight: '600' }}>{modalProject.category}</span>
            </div>
            
            <h2 style={{ marginBottom: '1rem', fontSize: '1.75rem', color: '#1f2937' }}>{modalProject.title}</h2>
            
            <p style={{ marginBottom: '1.5rem', color: '#6b7280', lineHeight: '1.7' }}>{modalProject.description}</p>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem', color: '#374151' }}>Tech Stack:</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {modalProject.techStack.map((tech, idx) => (
                  <span key={idx} style={{
                    fontSize: '0.85rem',
                    padding: '0.4rem 1rem',
                    background: '#e0e7ff',
                    borderRadius: '8px',
                    color: '#3730a3',
                    fontWeight: '500'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)',
              borderLeft: '4px solid #3b82f6',
              borderRadius: '12px',
              marginBottom: '1.5rem'
            }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.75rem', color: '#1f2937' }}>Client Review:</h4>
              <p style={{ fontSize: '1rem', color: '#374151', fontStyle: 'italic', lineHeight: '1.7' }}>
                "{modalProject.review}"
              </p>
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
                <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                  <strong>{modalProject.clientName || 'Verified Client'}</strong> • {modalProject.clientLocation}
                </p>
              </div>
            </div>
            
            <button className="cta-button primary" onClick={handleCloseModal}>Close</button>
          </div>
        )}
      </Modal>


    </div>
  );
};

export default Portfolio;
