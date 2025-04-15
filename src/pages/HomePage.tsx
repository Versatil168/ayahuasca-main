import React from 'react';
import Carousel from '../components/Carousel';
import AboutSection from '../components/AboutSection';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import ServicesSection from '../components/ServicesSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Carousel />

      <div className="bg-custom-bg bg-cover bg-center lg:bg-fixed min-h-[100vh]">
        <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 lg:py-12 bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg">
          <AboutSection />
          <ServicesSection />
          <FeaturedProducts />
          <Testimonials />
        </div>
      </div>

      
    </div>
  );
};

export default HomePage;
