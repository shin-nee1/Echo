import React, { useEffect, useState } from 'react';
import { useSearchParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudiesData } from '../data/study';

const CaseStudyDetails = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [currentIndex, setCurrentIndex] = useState(0);

  const study = caseStudiesData.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!study) {
    return <Navigate to="/work" replace />;
  }

  // Navigation handlers
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === study.images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? study.images.length - 1 : prev - 1));
  };

  const renderTwoToneHeading = (text: string) => {
    const words = text.split(' ');
    if (words.length <= 1) return text;
    const lastWord = words.pop();
    const remainingText = words.join(' ');
    return (
      <>
        {remainingText} <span className="text-[#42ACC0]">{lastWord}</span>
      </>
    );
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const techImages = [
    { src: "/Firebase.png", alt: "Firebase" },
    { src: "/Flutter.png", alt: "Flutter" },
    { src: "/MongoDB.png", alt: "MongoDB" },
    { src: "/Nodejs.png", alt: "Node.js" },
    { src: "/React Native.png", alt: "React Native" },
  ];

  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6 md:px-10 max-w-5xl mx-auto relative z-10 text-white">
      
      <Link 
        to="/work" 
        className="inline-flex items-center gap-2 text-white/60 hover:text-[#42ACC0] transition-colors mb-10 text-sm font-medium uppercase tracking-wider"
      >
        <ArrowLeft size={16} />
        Back to Work
      </Link>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-24">
        
        {/* HERO SECTION */}
        <section>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 text-center tracking-tight text-white">
            {renderTwoToneHeading(study.title)}
          </h1>
          <div className="space-y-6 text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-4xl mx-auto text-center">
            {study.heroDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* WORKFLOW SECTION */}
        <section>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-10 border-b border-white/10 pb-6">
            {renderTwoToneHeading("Workflow Overview")}
          </h2>
          <p className="text-white/70 mb-10 text-lg text-center max-w-3xl mx-auto">{study.workflow.overview}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {study.workflow.steps.map((step, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors">
                <div className="text-[#42ACC0] text-sm font-bold tracking-widest mb-3">STEP {step.number}</div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DISCOVERY SECTION */}
        <section>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-10 border-b border-white/10 pb-6">
            {renderTwoToneHeading("Discovery & Overview")}
          </h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-lg bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-3xl p-6 md:p-10">
            {study.discovery.map((paragraph, index) => (
              <p key={index} className={paragraph.startsWith('•') ? "pl-4 text-[#42ACC0]" : ""}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* 5. Problems & Solutions */}
        <section>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-12 border-b border-white/10 pb-6">
            {renderTwoToneHeading("Challenges & Solutions")}
          </h2>
          <div className="space-y-6">
            {study.problemsAndSolutions.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10 rounded-[2rem] overflow-hidden">
                <div className="p-8 md:p-12 bg-neutral-950/50 backdrop-blur-xl">
                  <div className="flex items-center gap-3 text-red-400/80 font-semibold mb-6 uppercase tracking-widest text-base">
                    <AlertCircle size={16} /> The Challenge
                  </div>
                  <p className="text-white/60 text-lg leading-relaxed">{item.problem}</p>
                </div>
                <div className="p-8 md:p-12 bg-neutral-950/50 backdrop-blur-xl">
                  <div className="flex items-center gap-3 text-[#42ACC0] font-semibold mb-6 uppercase tracking-widest text-base">
                    <CheckCircle2 size={16} /> Our Solution
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <section className="text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-white font-bold tracking-widest uppercase text-3xl md:text-4xl mb-6">
              {renderTwoToneHeading("Tech Stack")}
            </h3>
            <p className="text-white/80 mb-12 text-lg">{study.techStack}</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {techImages.map((tech, index) => (
                <div key={index} className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg flex items-center justify-center hover:scale-110 hover:-translate-y-2 transition-all duration-300" title={tech.alt}>
                  <img src={tech.src} alt={tech.alt} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Final Outcome (Carousel) */}
        <section className="relative overflow-visible pb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-16 border-b border-white/10 pb-6">
            {renderTwoToneHeading("Final Outcome")}
          </h2>

          {/* Full-width wrapper */}
          <div className="relative w-screen left-1/2 -ml-[50vw] flex flex-col items-center">
            
            {/* 1. Carousel Stage */}
            <div className="relative w-full flex items-center justify-center h-[400px] sm:h-[500px] md:h-[600px]">
              
              {/* Vertical Buttons */}
              <div className="absolute z-50 flex flex-col gap-4 -translate-x-[125px] sm:-translate-x-[160px] md:-translate-x-[200px]">
                <button 
                  onClick={prevSlide}
                  className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:border-[#42ACC0] hover:text-[#42ACC0] transition-all bg-[#050505]/90 backdrop-blur-md group shadow-xl"
                >
                  <ChevronLeft size={22} />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center hover:border-[#42ACC0] hover:text-[#42ACC0] transition-all bg-[#050505]/90 backdrop-blur-md group shadow-xl"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              {/* Centered Image Row */}
              <div className="relative w-full flex items-center justify-center overflow-visible">
                <AnimatePresence mode="popLayout" initial={false}>
                  {study.images.map((img, index) => {
                    const displayPosition = (index - currentIndex + study.images.length) % study.images.length;
                    const isActive = displayPosition === 0;

                    if (displayPosition > 5) return null;

                    let xOffset = 0;
                    if (displayPosition > 0) {
                      xOffset = displayPosition * (window.innerWidth < 640 ? 125 : 190);
                    }

                    return (
                      <motion.div
                        key={img}
                        initial={{ opacity: 0, scale: 0.8, x: xOffset }}
                        animate={{
                          opacity: isActive ? 1 : 0.2,
                          scale: isActive ? 1.15 : 0.85,
                          x: xOffset,
                          zIndex: 40 - displayPosition,
                          filter: isActive ? "blur(0px)" : "blur(3px)"
                        }}
                        exit={{ 
                          opacity: 0, 
                          scale: 0.7,
                          transition: { duration: 0.3 } 
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 180, 
                          damping: 25,
                        }}
                        className="absolute w-[115px] xs:w-[135px] sm:w-[185px] md:w-[215px] aspect-[9/19] cursor-pointer"
                        onClick={() => setCurrentIndex(index)}
                      >
                        <img 
                          src={img} 
                          alt={`App Screen ${index}`} 
                          className="w-full h-full object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)] select-none pointer-events-none"
                        />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            {/* 2. Pagination UI */}
            <div className="relative z-10 mt-8 md:mt-12 flex flex-col items-center gap-2 opacity-40">
              <div className="flex items-center gap-5 font-mono text-[11px] tracking-[0.4em] uppercase">
                <span className="text-[#42ACC0] font-bold">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                <div className="w-16 h-[1px] bg-white/30"></div>
                <span className="text-white">
                  {String(study.images.length).padStart(2, '0')}
                </span>
              </div>
            </div>

          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default CaseStudyDetails;