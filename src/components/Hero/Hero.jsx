import React, { useEffect, useRef, useState } from 'react';
import profilePhoto from '../../assets/half_body.png';

const Hero = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 animate-fade-in-up flex justify-center">
          <div
            className="w-48 h-48 rounded-full border-4 border-green-600 shadow-lg hover:scale-105 transition-transform duration-300 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${profilePhoto})`,
            }}
            role="img"
            aria-label="Bramantio Krisno Aji"
          />
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-white animate-fade-in-up animation-delay-200">
          Bramantio Krisno Aji
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in-up animation-delay-400">
          Software Developer
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-600">
          Building modern web applications with clean code and user-focused design
        </p>
        <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-800">
          <button
            onClick={() => scrollToSection('about')}
            className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-green-600/50"
          >
            Get To Know Me
          </button>
          <button
            onClick={() => scrollToSection('experiences')}
            className="px-8 py-3 border-2 border-green-600 text-green-600 rounded-lg font-medium hover:bg-green-600 hover:text-white hover:scale-105 active:scale-95 transition-all duration-200"
          >
            View Experiences
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
