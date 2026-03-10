// FILE 1: HeroSubService.tsx
import React from "react";
import { Button } from "@/components/ui/button";

interface HeroSubServiceProps {
  title: React.ReactNode;
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
        
       {/* BUTTON - Color dimmed, bold removed, no glows */}
<div className="hero-btn-container">
  {/* Wrap the button in an anchor tag pointing to /contact */}
  <a href="/contact" className="inline-block outline-none">
    <Button 
      variant="cyan" 
      size="hero" 
    >
      {ctaText}
    </Button>
  </a>
</div>
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
          margin-bottom: clamp(2rem, 4vh, 3rem); 
        }

        .sub-hero-btn {
          height: clamp(2.6rem, 5vw, 3rem);
          padding: 0 clamp(1.8rem, 4vw, 2.2rem);
          font-size: clamp(0.85rem, 2.2vw, 1rem);
          box-shadow: none !important;
          -webkit-appearance: none;
          letter-spacing: 0.02em; /* Added slight tracking for readability with normal weight */
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
            min-height: 65vh; 
            padding-top: 20vh;
          }
          .sub-hero-title { 
            font-size: 3rem; 
            max-width: 100%;
          }
          .sub-hero-btn {
            height: 3rem;
            padding: 0 2rem;
            font-size: 1rem;
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
            margin-bottom: 5rem;
          }
          .sub-hero-btn { 
            height: 4.2rem; 
            padding: 0 4rem; 
            font-size: 1.5rem; 
          }
        }

        /* 6. SMALL MOBILE (Max 425px) */
        @media (max-width: 425px) {
          .sub-hero-wrapper { min-height: 60vh; }
          .sub-hero-title { font-size: 2rem; }
          .sub-hero-btn { height: 2.5rem; font-size: 0.9rem; }
        }
      `}} />
    </section>
  );
};

export default HeroSubService;