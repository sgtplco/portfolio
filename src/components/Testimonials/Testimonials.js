import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Paras',
      role: 'Blockchain Developer',
      company: 'International Client',
      rating: 5,
      text: 'Paras and his team did an outstanding job. They were always attentive, responsive, and addressed every point we discussed thoroughly. I would gladly work with them again.',
      avatar: 'PC',
    },
    {
      name: 'Omar A.',
      role: 'Full Stack Development',
      company: 'Riyadh, Saudi Arabia',
      rating: 5,
      text: 'Dedicated to work, persist till work is over. Always ready to help going out of way, reliable guy to complete the work.',
      avatar: 'OA',
    },
    {
      name: 'Kumar S.',
      role: 'Mobile App Development',
      company: 'Patna, India',
      rating: 5,
      text: 'They were responsive with the project progress and had good understanding of the problems that were coming up.',
      avatar: 'KS',
    },
    {
      name: 'Dor R.',
      role: 'Compiler Project',
      company: 'Rishon Lezion, Israel',
      rating: 5,
      text: 'Perfect result as always, Shree and his team are professionals that can help with any code engineering task in very high level. I recommend him for anyone looking for perfect solution within deadlines.',
      avatar: 'DR',
    },
    {
      name: 'Data Analysis Client',
      role: 'R Programming',
      company: 'International Client',
      rating: 5,
      text: 'He is always great to work with. He is very knowledgeable and he delivers on time. I had an R project and he did a great job.',
      avatar: 'DC',
    },
    {
      name: 'Arian B.',
      role: 'Database Project',
      company: 'Davis, United States',
      rating: 5,
      text: 'I had a database project and needed help with Indexing, he did a wonderful job! He really knows what he is doing.',
      avatar: 'AB',
    },
    {
      name: 'Sri R.',
      role: 'JSP Bug Fixing',
      company: 'Raleigh, United States',
      rating: 5,
      text: 'Awesome Job. Completed on time. Will definitely hire him for any future work.',
      avatar: 'SR',
    },
  ];

  return (
    <section className="testimonials-modern-section">
      <div className="testimonials-modern-container">
        <div className="testimonials-modern-header">
          <span className="section-badge">Client Testimonials</span>
          <h2 className="testimonials-modern-title">
            What Our <span className="highlight-text">Clients Say</span>
          </h2>
          <p className="testimonials-modern-subtitle">
            Don't just take our word for it - hear from businesses who've transformed with our solutions
          </p>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-modern-card">
                <div className="testimonial-quote-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>
                
                <div className="testimonial-modern-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                  ))}
                </div>
                
                <p className="testimonial-modern-text">"{testimonial.text}"</p>
                
                <div className="testimonial-modern-author">
                  <div className="testimonial-avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="testimonial-author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                    <span className="testimonial-company">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        
      </div>
    </section>
  );
};

export default Testimonials;
