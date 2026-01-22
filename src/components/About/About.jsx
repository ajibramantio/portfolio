import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">About Me</h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
          <p>
            I am an experienced Software Engineer specializing in the JavaScript ecosystem (React, Vue, and Node.js). 
            I use TypeScript to build scalable, maintainable web applications and streamline development workflows. 
            My focus is on driving innovation and delivering robust solutions that support business growth and user engagement.
          </p>
          <p>
            With experience in modern web technologies, I strive to write clean,
            maintainable code and stay up-to-date with the latest industry trends
            and best practices.
          </p>
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://drive.google.com/file/d/13x2QBZbPlax5FSenMkI5_LhNvZxwZTXY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-green-600/50"
          >
            See My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
