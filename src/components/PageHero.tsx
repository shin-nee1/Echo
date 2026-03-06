import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

interface PageHeroProps {
  title: React.ReactNode;
  subtitle: string;
  ctaText?: string;
}

const PageHero = ({ title, subtitle, ctaText = "Shape your Next Move" }: PageHeroProps) => {
  return (
    <section 
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-transparent hero-wrapper"
    >
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Title Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto hero-title-box" 
        >
          {/* ADDED 'capitalize' HERE */}
          <h1 className="font-bold tracking-[-0.03em] text-white leading-[1.05] font-display hero-title capitalize">
            {title}
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/70 mx-auto leading-relaxed font-light hero-subtitle"
        >
          {subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hero-btn-container"
        >
          <Button 
            variant="cyan" 
            size="hero" 
            asChild
            className="hero-btn"
          >
            <Link to="/contact">
              {ctaText}
            </Link>
          </Button>
        </motion.div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. GLOBAL FLUID VARIABLES (Mobile First) */
        .hero-wrapper {
          padding-top: clamp(8rem, 15vh, 10rem); 
          padding-bottom: clamp(4rem, 8vh, 6rem);
          min-height: 60vh;
        }

        .hero-title-box {
          width: 100%;
          max-width: 100%;
        }

        .hero-title {
          font-size: clamp(1.5rem, 5vw, 1.7rem); 
          line-height: 1.1;
          margin-bottom: clamp(1rem, 3vh, 1.5rem);
        }

        .hero-subtitle {
          font-size: clamp(0.7rem, 3vw, 0.8rem);
          line-height: 1.6;
          margin-bottom: clamp(1.5rem, 4vh, 2.5rem);
          max-width: 90vw;
        }

        .hero-btn-container { margin-bottom: clamp(1rem, 2vh, 2rem); }
        
        /* BUTTON SCALING */
        .hero-btn {
          height: clamp(2.2rem, 6vw, 2.2rem) !important;
          padding: 0 clamp(1rem, 4vw, 1rem) !important;
          font-size: clamp(0.8rem, 2.5vw, 0.85rem) !important;
          border-radius: 9999px;
        }

        /* 2. TABLET (768px) */
        @media (min-width: 768px) {
          .hero-wrapper { padding-top: 10rem; padding-bottom: 6rem; }
          
          .hero-title { 
            font-size: clamp(2rem, 3vw, 2.5rem); 
            letter-spacing: -0.04em; /* Tighter for "Sees" word wrapping */
          }
          
          .hero-subtitle {
            font-size: 1rem;
            max-width: 80%;
          }
        }
          .hero-btn {
          height: clamp(2.5rem, 5vw, 2.8rem) !important;
          padding: 0 clamp(1rem, 4vw, 1rem) !important;
          font-size: clamp(0.8rem, 2.5vw, 0.85rem) !important;
          border-radius: 9999px;
        }

        /* 3. LAPTOP (1024px) */
        @media (min-width: 1024px) {
          .hero-wrapper { padding-top: 11rem; padding-bottom: 6rem; }
          
          .hero-title-box { max-width: 100%; } /* Forces the 2-line structure */
          
          .hero-title { 
            font-size: 3rem; 
            margin-bottom: 1rem;
            letter-spacing: -0.04em;
          }
          
          .hero-subtitle { 
            font-size: 1.1rem; 
            max-width: 650px; 
            margin-bottom: 2rem; 
          }
          
          .hero-btn { 
            height: 2.8rem !important; 
            font-size: 1rem !important;
            padding: 0 1.5rem !important;
          }
        }

        /* 4. LARGE LAPTOP (1440px) */
        @media (min-width: 1440px) {
          .hero-wrapper { padding-top: 15rem; padding-bottom: 10rem; }
          
          .hero-title-box { max-width: 100%; }
          
          .hero-title { font-size: 3rem; }
          
          .hero-subtitle { 
            font-size: 1.2rem; 
            max-width: 800px; 
          }
          
          .hero-btn { 
            height: 3rem !important; 
            font-size: 1rem !important; 
          }
        }

        /* 5. 4K MONITORS (2560px) */
        @media (min-width: 2560px) {
          .hero-wrapper { padding-top: 22rem; padding-bottom: 15rem; }
          
          .hero-title-box { max-width: 180%; }
          
          .hero-title { 
            font-size: 5rem; 
            margin-bottom: 2rem; 
          }
          
          .hero-subtitle { 
            font-size: 2rem; 
            max-width: 1200px; 
            margin-bottom: 3rem; 
          }
          
          .hero-btn { 
            height: 5rem !important; 
            padding: 0 4rem !important; 
            font-size: 1.6rem !important; 
            border-radius: 4rem;
          }
        }

        /* 6. SMALL MOBILE (Max 425px) */
        @media (max-width: 425px) {
          .hero-wrapper { padding-top: 7rem; }
          .hero-title { font-size: 2rem; }
          .hero-subtitle { font-size: 0.9rem; max-width: 95%; }
          .hero-btn { height: 2.8rem !important; }
        }
      `}} />
    </section>
  );
};

export default PageHero;