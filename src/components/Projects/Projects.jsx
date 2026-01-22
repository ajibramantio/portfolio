import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      title: 'Software Engineer',
      details: 'PT. Kokatto Teknologi Global (4.5 Years)',
      description: 'I was working as a software engineer at a company called Kokatto. I am responsible for developing and maintaining the company\'s software applications including Backend and Frontend. I developed and optimized the Kokatto Automatic Notification (KAN) platform with TypeScript and VueJS, creating a robust, responsive architecture that significantly enhanced client engagement and operational efficiency.',
      tech: ['JavaScript', 'Vue.js', 'Node.js', 'TypeScript', 'AWS Services', 'MongoDB'],
    },
    {
      title: 'Frontend Developer Freelance',
      details: 'Koma Tech Studio (1 Year)',
      description: 'I am responsible for developing client\'s website and web applications. focusing on creating responsive and visually appealing company profile websites. Additionally, implemented product listing functionality with seamless redirection to e-commerce platforms, enhancing user experience and supporting business objectives.',
      tech: ['React.js', 'Next.js', 'Node.js'],
    },
    {
      title: 'Frontend Developer',
      details: 'Faculty of Psychology UI (5 Months)',
      description: 'I am responsible for developing thesis management system for another faculty in my university. enabling college students to submit thesis chapters for review. The platform provided features for lecturers to review submissions, provide feedback, approve or reject chapters, and guide students through the revision process effectively.',
      tech: ['React.js', 'AWS Services'],
      github: null,
      live: null
    },
    {
      title: 'IT Internship',
      details: 'PT. Jeevesindo Gemilang (3 Months)',
      description: 'I revamped the company\'s website using PHP, delivering an award-winning design recognized by CINET that remains in active use today. Additionally, I contributed to the development of a robust Point of Sales (POS) system, enhancing its functionality to support efficient, reliable business operations. ',
      tech: ['PHP', 'JavaScript'],
      live: 'https://www.jeeves-indonesia.com/'
    },
    {
      title: 'Fullstack Developer',
      details: 'Asset Management Project (On Going)',
      description: 'I am responsible for developing the Asset Management Project. The project is a web application that allows users to manage their company assets. ',
      tech: ['React.js', 'Node.js', 'JavaScript'],
      live: null
    },
  ];

  return (
    <section 
      id="experiences" 
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-800 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((project, index) => (
            <div
              key={index}
              className={`bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-green-600 hover:scale-105 hover:shadow-lg hover:shadow-green-600/20 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm mb-3 leading-relaxed">{project.details}</p>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs hover:bg-green-600 hover:text-white transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-400 text-sm font-medium hover:underline transition-all duration-200"
                  >
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:text-green-400 text-sm font-medium hover:underline transition-all duration-200"
                  >
                    Live →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
