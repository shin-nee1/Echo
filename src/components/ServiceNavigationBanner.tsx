import React from "react";
import { Button } from "@/components/ui/button";

interface NavigationBannerProps {
  titlePrefix: string;
  highlight1: string;
  middleText: string;
  highlight2: string;
  leftBtnText: string;
  leftBtnLink: string;
  rightBtnText: string;
  rightBtnLink: string;
}

const ServiceNavigationBanner = ({
  titlePrefix,
  highlight1,
  middleText,
  highlight2,
  leftBtnText,
  leftBtnLink,
  rightBtnText,
  rightBtnLink
}: NavigationBannerProps) => {
  return (
    <section className="relative w-full bg-transparent overflow-visible nav-banner-wrapper">
      <div className="container mx-auto relative z-10 nav-banner-container">
        
        {/* THE MAIN GLASS CARD */}
        <div className="relative w-full rounded-[2rem] lg:rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-[2px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] nav-banner-card">
          
          {/* STATIC AMBIENT GLOWS */}
          <div className="absolute inset-0 z-0 pointer-events-none rounded-[2rem] overflow-hidden">
            <div className="absolute -top-[120%] -left-[10%] w-[60%] h-[250%] bg-[#47c2d2]/15 blur-[130px] rounded-full opacity-20" />
            
            <div 
              className="absolute -bottom-[15%] -right-[10%] w-[60%] h-[80%] opacity-60 rounded-[2rem]" 
              style={{
                background: 'radial-gradient(circle at 100% 100%, rgba(71, 194, 210, 0.6) 0%, rgba(71, 194, 210, 0.15) 30%, transparent 70%)',
                filter: 'blur(50px)'
              }}
            />
          </div>
          
          {/* CONTENT SECTION */}
          <div className="relative z-30 flex flex-col items-center justify-center nav-banner-content">
            
            {/* HEADING */}
            <div className="text-center w-full nav-banner-header">
              <h2 className="text-white font-bold tracking-tight leading-[1.2] nav-banner-title">
                {titlePrefix} <span className="text-white">{highlight1}</span> {middleText} <span className="text-white">{highlight2}</span>?
              </h2>
            </div>

            {/* BUTTON GROUP */}
            <div className="flex flex-col sm:flex-row nav-banner-btn-group">
              <a href={leftBtnLink} className="w-full sm:w-auto">
                <Button variant="cyan" className="w-full sm:w-auto nav-btn-custom">
                  {leftBtnText}
                </Button>
              </a>
              
              <a href={rightBtnLink} className="w-full sm:w-auto">
                <Button variant="cyan" className="w-full sm:w-auto nav-btn-custom">
                  {rightBtnText}
                </Button>
              </a>
            </div>
          </div>

          {/* EDGE LIGHTING */}
          <div className="absolute inset-0 rounded-[1rem] border border-white/5 pointer-events-none z-40" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#47c2d2]/30 to-transparent z-40" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .nav-banner-wrapper { padding: 3rem 0rem; }
        .nav-banner-content { padding: 3rem 1.5rem; gap: 2.5rem; }
        .nav-banner-title { font-size: 1.2rem; }
        .nav-banner-btn-group { gap: 1rem; width: 70%; }
        
        /* SQUARE WITH ROUNDED EDGES & BLACK TEXT */
        .nav-btn-custom { 
            height: 45px; 
            font-size: 15px; 
            font-weight: 700; 
            border-radius: 8px !important; /* Square-ish rounded edges */
            color: black !important;      /* Force black text */
            transition: 0.3s ease;
        }

        @media (min-width: 768px) {
          .nav-banner-wrapper { padding: 5rem 2rem; }
          .nav-banner-title { font-size: 1.55rem; }
          .nav-banner-btn-group { width: auto; gap: 1.5rem; }
          .nav-btn-custom { width: 180px; }
        }

        @media (min-width: 1024px) {
          .nav-banner-wrapper { padding: 6rem 4rem; }
          .nav-banner-container { max-width: 1200px !important; }
          .nav-banner-content { padding: 2rem 4rem; gap: 3rem; }
          .nav-banner-title { font-size: 1.95rem; }
          .nav-btn-custom { width: 200px; }
        }

        @media (min-width: 1440px) {
          .nav-banner-container { max-width: 1400px !important; }
          .nav-banner-title { font-size: 2.6rem; }
          .nav-btn-custom { width: 220px; }
        }

        @media (min-width: 2560px) {
          .nav-banner-container { max-width: 2200px !important; }
          .nav-banner-title { font-size: 3.6rem; }
          .nav-banner-content { padding: 5rem 8rem; gap: 5rem; }
          .nav-btn-custom { height: 70px; width: 400px; font-size: 1.8rem; border-radius: 12px !important; }
        }

        .nav-btn-custom:hover { 
          transform: translateY(-2px);
          filter: brightness(1.1);
          color: black !important;
        }
      `}} />
    </section>
  );
};

export default ServiceNavigationBanner;