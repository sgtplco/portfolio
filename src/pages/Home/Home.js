import React from 'react';
import Hero from '../../components/Hero/Hero';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Testimonials from '../../components/Testimonials/Testimonials';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
