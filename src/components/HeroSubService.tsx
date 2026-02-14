// FILE 1: HeroSubService.tsx
import React from "react";

interface HeroSubServiceProps {
  title: React.ReactNode;
  // subtitle prop removed
  ctaText: string;
}

const HeroSubService = ({ title, ctaText }: HeroSubServiceProps) => {
  return (
    <section className="sub-hero-wrapper relative w-full flex flex-col justify-center items-center px-[5%]">
      <div className="flex flex-col items-center text-center relative z-10">
        
        {/* TITLE */}
        <h1 className="sub-hero-title font-bold text-white tracking-tight leading-[1.1] font-display max-w-5xl">
          {title}
        </h1>
        
        {/* SUBTITLE REMOVED */}

        {/* BUTTON */}
        <button className="sub-hero-btn bg-[#43c6e4] text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(67,198,228,0.3)] hover:shadow-[0_0_30px_rgba(67,198,228,0.5)]">
          {ctaText}
        </button>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. GLOBAL FLUID VARIABLES (Mobile First) */
        .sub-hero-wrapper {
          min-height: 70vh;
          padding-top: clamp(8rem, 15vh, 10rem); 
          padding-bottom: clamp(4rem, 8vh, 6rem);
        }

        .sub-hero-title {
          font-size: clamp(2.1rem, 9vw, 2.8rem); 
          /* Increased bottom margin since subtitle is gone to separate button from title */
          margin-bottom: clamp(2.5rem, 5vh, 4rem); 
        }

        .sub-hero-btn {
          height: clamp(3rem, 6vw, 3.5rem);
          padding: 0 clamp(2rem, 5vw, 2.5rem);
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
        }

        /* 2. TABLET (768px) */
        @media (min-width: 768px) {
          .sub-hero-title { 
            font-size: clamp(2rem, 7vw, 3rem); 
          }
        }

        /* 3. LAPTOP (1024px) */
        @media (min-width: 1024px) {
          .sub-hero-wrapper { 
            min-height: 75vh; 
            padding-top: 20vh;
          }
          .sub-hero-title { 
            font-size: 3rem; 
            max-width: 80%;
          }
          .sub-hero-btn {
            height: 3.5rem;
            padding: 0 2.5rem;
            font-size: 1.1rem;
          }
        }

        /* 4. LARGE LAPTOP (1440px) */
        @media (min-width: 1440px) {
          .sub-hero-title { 
            font-size: 4rem; 
            max-width: 1100px;
          }
        }

        /* 5. 4K MONITORS (2560px) */
        @media (min-width: 2560px) {
          .sub-hero-wrapper { 
            min-height: 80vh; 
            padding-top: 25vh;
          }
          .sub-hero-title { 
            font-size: 5rem; 
            max-width: 1600px;
            margin-bottom: 6rem;
          }
          .sub-hero-btn { 
            height: 5rem; 
            padding: 0 5rem; 
            font-size: 1.8rem; 
          }
        }

        /* 6. SMALL MOBILE (Max 425px) */
        @media (max-width: 425px) {
          .sub-hero-wrapper { min-height: 60vh; }
          .sub-hero-title { font-size: 2rem; }
          .sub-hero-btn { height: 3rem; font-size: 1rem; }
        }
      `}} />
    </section>
  );
};

export default HeroSubService;