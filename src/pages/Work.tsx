import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
  const caseStudies = [
    { 
      id: "rateo", 
      title: "Rateo Project", 
      description: "A comprehensive breakdown of the project architecture and design decisions.",
      imageSrc: "/rateo al-03-01.png" 
    },
    { 
      id: "clearmind", 
      title: "ClearMind App", 
      description: "Analyzing the performance improvements and user engagement metrics.",
      imageSrc: "/clearmind al-3-01.png" 
    },
    { 
      id: "bware", 
      title: "Bware Security", 
      description: "An overview of the challenges faced and the solutions implemented.",
      imageSrc: "/bware al-03-01.png"
    },
  ];

  return (
    <div className="w-full pt-32 pb-12 px-6 md:px-10 max-w-5xl mx-auto relative z-10">
      
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight text-[#42ACC0] text-center">
        Case Studies
      </h1>

      {/* Responsive 2x2 Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {caseStudies.map((study) => (
          <div key={study.id} className="flex flex-col group">
            
            {/* Clickable Real Image Asset */}
            <Link 
              to={`/CaseStudyDetails?id=${study.id}`} 
              className="block w-full overflow-hidden transition-transform duration-300 group-hover:-translate-y-1"
            >
              <div className="w-full h-auto min-h-[150px] flex items-center justify-center rounded-lg border border-white/10 bg-white/5 overflow-hidden">
                <img 
                  src={study.imageSrc} 
                  alt={study.title} 
                  className="w-full h-auto object-cover" 
                />
              </div>
            </Link>

            {/* Clickable Title */}
            <Link to={`/CaseStudyDetails?id=${study.id}`} className="inline-block w-fit mt-5">
              <h2 className="text-2xl font-semibold mb-3 text-white hover:underline decoration-2 underline-offset-4">
                {study.title}
              </h2>
            </Link>

            {/* Description */}
            <p className="text-white/80 leading-relaxed text-base">
              {study.description}
            </p>
            
          </div>
        ))}

      </div>
    </div>
  );
};

export default Work;