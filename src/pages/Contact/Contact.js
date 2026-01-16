import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setStatus('');

  //   // EmailJS Configuration
  //   // Replace these with your actual EmailJS credentials from https://www.emailjs.com/
  //   const serviceID = 'YOUR_SERVICE_ID'; // Get from EmailJS dashboard
  //   const templateID = 'YOUR_TEMPLATE_ID'; // Get from EmailJS dashboard
  //   const publicKey = 'YOUR_PUBLIC_KEY'; // Get from EmailJS dashboard

  //   const templateParams = {
  //     from_name: formData.name,
  //     from_email: formData.email,
  //     message: formData.message,
  //     to_email: 'contact@sgtpl.co.in',
  //   };

  //   emailjs
  //     .send(serviceID, templateID, templateParams, publicKey)
  //     .then(() => {
  //       setStatus('✅ Message sent successfully! We will get back to you soon.');
  //       setFormData({ name: '', email: '', message: '' });
  //       setLoading(false);
  //       setTimeout(() => setStatus(''), 5000);
  //     })
  //     .catch((error) => {
  //       console.error('EmailJS Error:', error);
  //       setStatus('❌ Failed to send message. Please try again or contact us directly at contact@sgtpl.co.in');
  //       setLoading(false);
  //       setTimeout(() => setStatus(''), 5000);
  //     });
  // };

  const faqs = [
    {
      question: 'What technologies do we work with?',
      answer: 'We specialize in a comprehensive range of modern technologies including: React, React Native, Next.js, Node.js, Spring Boot, .NET Core, Python, Java, Kotlin, C++, C Programming, Golang, Flutter, JavaScript, TypeScript, PostgreSQL, MySQL, MongoDB, Redis, Kafka, AWS, Azure, Docker, Kubernetes, Blockchain, Smart Contracts, Web3, PyTorch, Machine Learning, R Programming, and more. From web and mobile development to blockchain, AI/ML, databases, operating systems, and cloud infrastructure—we cover full-stack development across diverse platforms.',
    },
    {
      question: 'How do we get started with you?',
      answer: 'Getting started is simple! Just reach out to us using the contact information provided above (phone or email). We\'ll discuss your project requirements, objectives, and timeline to create a custom solution that fits your needs.',
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Most projects are completed within 15-30 days, depending on the project length, complexity, and specific requirements. We prioritize timely delivery while maintaining high-quality standards. Exact timelines will be discussed during our initial consultation.',
    },
  ];

  return (

    <div className="contact-page" style={{ padding: '2rem 0', background: '#f5f6fa', minHeight: '100vh' }}>
      <div className="contact-hero" style={{ justifyContent: 'center', alignItems: 'center', padding: '4rem 0 2rem 0', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)' }}>
        <div className="contact-hero-content" style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#1e293b', marginBottom: '1rem', letterSpacing: '-1px' }}>Contact Information</h1>
          <p style={{ fontSize: '1.2rem', color: '#475569', marginBottom: 0 }}>Reach out to us directly for any project inquiries, collaborations, or questions.<br/>We're always happy to connect!</p>
        </div>
      </div>

      <div className="contact-content" style={{ padding: '3rem 0 2rem 0' }}>
        <div className="contact-container" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          
          {/* Contact Form */}
          {/* <div style={{ background: '#fff', borderRadius: 20, padding: '2.5rem', boxShadow: '0 8px 32px rgba(0,0,0,0.08)', border: '1.5px solid #e5e7eb' }}>
            <h2 style={{ marginBottom: '1.5rem', color: '#1e293b', fontWeight: 700, fontSize: '1.75rem', letterSpacing: '-0.5px' }}>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 10,
                    border: '1.5px solid #e5e7eb',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#334155', fontSize: '0.95rem' }}>Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 10,
                    border: '1.5px solid #e5e7eb',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: '#334155', fontSize: '0.95rem' }}>Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="5"
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 10,
                    border: '1.5px solid #e5e7eb',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: loading ? '#94a3b8' : 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 10,
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => !loading && (e.target.style.transform = 'translateY(-2px)', e.target.style.boxShadow = '0 8px 20px rgba(59,130,246,0.4)')}
                onMouseLeave={(e) => !loading && (e.target.style.transform = 'translateY(0)', e.target.style.boxShadow = 'none')}
              >
                {loading ? 'Sending...' : 'Send Message →'}
              </button>
              
              {status && (
                <p style={{ marginTop: '1rem', textAlign: 'center', color: status.includes('✅') ? '#059669' : '#dc2626', fontWeight: 500, fontSize: '0.95rem' }}>
                  {status}
                </p>
              )}
            </form>
          </div> */}

          {/* Contact Info */}
          <div className="contact-info-section" style={{ width: '100%' }}>
            <div className="contact-info-card" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.08)', borderRadius: 20, padding: '2.5rem 2.5rem', background: '#fff', border: '1.5px solid #e5e7eb' }}>
              <h2 style={{ marginBottom: '2.2rem', color: '#1e293b', fontWeight: 700, fontSize: '2rem', letterSpacing: '-0.5px' }}>Get in Touch</h2>
              <div className="info-item" style={{ marginBottom: '1.5rem' }}>
                <div>
                  <p className="info-label" style={{ fontWeight: 600, color: '#334155', marginBottom: 0 }}>Phone</p>
                  <p className="info-value" style={{ color: '#64748b', fontWeight: 500, fontSize: '1.05rem', margin: 0 }}>+91 8882131116</p>
                </div>
              </div>
              <div className="info-item" style={{ marginBottom: '1.5rem' }}>
                <div>
                  <p className="info-label" style={{ fontWeight: 600, color: '#334155', marginBottom: 0 }}>Email</p>
                  <p className="info-value" style={{ color: '#64748b', fontWeight: 500, fontSize: '1.05rem', margin: 0 }}>contact@sgtpl.co.in</p>
                </div>
              </div>
              <div className="info-item">
                <div>
                  <p className="info-label" style={{ fontWeight: 600, color: '#334155', marginBottom: 0 }}>Address</p>
                  <p className="info-value" style={{ color: '#64748b', fontWeight: 500, fontSize: '1.05rem', margin: 0 }}> Flat 103 Block 15, Suncity Apartment, 6th Main, </p>
                  <p className="info-value" style={{ color: '#64748b', fontWeight: 500, fontSize: '1.05rem', margin: 0 }}>Iblur Junction, Bellandur, Bangalore-560103, Karnataka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faqs-section" style={{ background: '#f9fafb', padding: '4rem 0', marginTop: '3rem' }}>
        <div className="contact-container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem', color: '#1f2937' }}>Frequently Asked Questions</h2>
          <div className="faqs-list" style={{ maxWidth: 800, margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{expandedFaq === index ? '−' : '+'}</span>
                </button>
                {expandedFaq === index && (
                  <div className="faq-answer">
                    <div className="faq-answer-content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
