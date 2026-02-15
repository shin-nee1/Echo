import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// ASSETS
import HeroImg1 from "@/assets/image-removebg-preview (1).png";
import HeroImg2 from "@/assets/image-removebg-preview (2).png";
import HeroImg3 from "@/assets/image-removebg-preview (3).png";

const IndexHero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [HeroImg1, HeroImg2, HeroImg3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero-wrapper relative flex flex-col items-center justify-center overflow-hidden">
      
      {/* IMPROVED VISIBLE GRID */}
      <div 
        className="hero-grid-bg absolute inset-0 pointer-events-none" 
        style={{
          zIndex: 1,
          backgroundImage: `
            linear-gradient(rgba(67, 198, 228, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(67, 198, 228, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          backgroundPosition: 'center center',
          maskImage: 'radial-gradient(circle at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 70%)'
        }}
      />

      <div className="container relative z-10 mx-auto px-[5vw] text-center">
        <h1 className="hero-title font-bold text-white mx-auto">
          We Create The <span className="text-[#43c6e4]">Echo</span>,
          <br className="block" />
          You Make The Impact.
        </h1>

        <div className="hero-subtitle text-slate-200 mx-auto font-normal opacity-90">
          <p>From strategy and storytelling to code and conversion.</p>
          <p>One partner to shape your brand and drive performance.</p>
        </div>

        <div className="hero-link-container">
          <a href="#" className="hero-link text-[#43c6e4] transition-all font-semibold border-b border-transparent hover:border-[#43c6e4]">
            Access Your Free Project Guide
          </a>
        </div>

        <div className="hero-btn-container">
          <Button variant="cyan" size="hero" className="hero-btn">
            Start Project
          </Button>
        </div>

        {/* PASSING TRANSITION LOGIC */}
        <div className="hero-slider-container">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: "100%" }} // New image starts fully below
              animate={{ opacity: 1, y: 0 }}       // New image moves to center
              exit={{ opacity: 0, y: "100%" }}    // Old image passes through to the top
              transition={{ 
                duration: 0.5, 
   // A more sophisticated "passing" ease
              }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <motion.img
                src={slides[currentSlide]}
                alt="Hero Slide"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-wrapper {
          padding-top: clamp(6.5rem, 10vh, 8rem); 
          padding-bottom: clamp(1.5rem, 5vh, 3rem);
          min-height: 80vh;
        }

        .hero-title {
          font-size: clamp(1.75rem, 8vw, 1.95rem); 
          line-height: 1.2;
          margin-bottom: clamp(1rem, 3vh, 1.5rem);
          max-width: 100vw; 
        }

        .hero-subtitle {
          font-size: clamp(0.5rem, 2.5vw, 0.75rem);
          line-height: 1.5;
          margin-bottom: clamp(1rem, 2vh, 2rem);
          max-width: 85vw;
        }

        .hero-link-container { margin-bottom: clamp(1rem, 1vh, 2.5rem); }
        .hero-link { font-size: clamp(0.85rem, 2vw, 0.95rem); }

        .hero-btn-container { margin-bottom: clamp(2rem, 5vh, 5rem); }
        .hero-btn {
          height: clamp(2.25rem, 5vw, 3rem) !important;
          padding: 0 clamp(1.75rem, 3vw, 2rem) !important;
          font-size: clamp(0.5rem, 2vw, 1rem) !important;
          border-radius: 9999px;
        }

        .hero-slider-container {
          position: relative;
          width: 100%;
          height: clamp(220px, 25vh, 300px); 
          margin: 0 auto;
          overflow: visible; /* Allows images to be seen as they pass the boundaries */
        }

        @media (min-width: 768px) {
          .hero-title { font-size: clamp(2rem, 5vw, 2.35rem); }
          .hero-subtitle { font-size: clamp(0.65rem, 2.5vw, 0.85rem); }
          .hero-link { font-size: clamp(1rem, 2vw, 1.5rem); }
          .hero-slider-container { height: 40vh; }
          .hero-btn { 
            padding: 0 clamp(1rem, 3vw, 1.75rem) !important;
            height: 2.2rem !important; 
            font-size: 0.85rem !important; 
          }
        }

        @media (min-width: 1024px) {
          .hero-wrapper { padding-top: 18vh; }
          .hero-title { font-size: 2.95rem; max-width: 600px; }
          .hero-subtitle { font-size: 0.9rem; max-width: 650px; }
          .hero-link-container { margin-bottom: clamp(1.2rem, 1vh, 2.5rem); }
          .hero-link { font-size: clamp(0.75rem, 2vw, 1rem); }
          .hero-slider-container { height: 45vh; max-width: 70vw; }
          .hero-btn { height: 2.2rem !important; padding: 0 1.5rem !important; 
          font-size: clamp(0.85rem, 2vw, 0.95rem) !important;}
        }

        @media (min-width: 1440px) {
          .hero-title { font-size: 3.35rem; max-width: 900px; }
          .hero-subtitle { font-size: 1rem; max-width: 750px; }
          .hero-link { font-size: clamp(0.75rem, 2vw, 1rem); }
          .hero-slider-container { height: 45vh; max-width: 900px; }
          .hero-btn { height: 2.5rem !important; padding: 0 1.75rem !important; 
          font-size: clamp(0.75rem, 2vw, 1rem) !important;}
        }

        @media (min-width: 2560px) {
          .hero-wrapper { padding-top: 15vh; }
          .hero-title { font-size: 5rem; max-width: 1500px; }
          .hero-subtitle { font-size: 2rem; max-width: 1100px; }
          .hero-link-container { margin-bottom: clamp(1.7rem, 1vh, 2.5rem); }
          .hero-btn { 
            height: 4rem !important; 
            padding: 0 4rem !important; 
            font-size: 1.5rem !important; 
          }
          .hero-slider-container { height: 60vh; max-width: 1300px; }
          .hero-link { font-size: 2rem; }
        }

        @media (max-width: 425px) {
          .hero-title { font-size: 1.6rem; }
          .hero-subtitle { font-size: 0.8rem; max-width: 90vw; }
          .hero-btn { 
            height: 2.6rem !important; 
            padding: 0 1.5rem !important; 
            font-size: 0.85rem !important; 
          }
          .hero-slider-container { height: 22vh; min-height: 180px; }
        }
      `}} />
    </section>
  );
};

export default IndexHero;