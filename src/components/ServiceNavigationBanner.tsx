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
        <div className="relative w-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] nav-banner-card">
          
          {/* STATIC AMBIENT GLOWS */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute -top-[120%] -left-[10%] w-[60%] h-[250%] bg-[#00d8ff]/15 blur-[130px] rounded-full" />
            <div className="absolute -bottom-[120%] -right-[10%] w-[60%] h-[250%] bg-cyan-900/25 blur-[130px] rounded-full" />
          </div>
          
          {/* CONTENT SECTION */}
          <div className="relative z-30 flex flex-col items-center justify-center nav-banner-content">
            
            {/* HEADING */}
            <div className="text-center w-full nav-banner-header">
              <h2 className="text-white font-bold tracking-tight leading-[1.2] nav-banner-title">
                {titlePrefix} <span className="text-[#00d8ff]">{highlight1}</span> {middleText} <span className="text-[#00d8ff]">{highlight2}</span>?
              </h2>
            </div>

            {/* BUTTON GROUP */}
            <div className="flex flex-col sm:flex-row nav-banner-btn-group">
              <a href={leftBtnLink} className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto nav-btn-secondary">
                  {leftBtnText}
                </Button>
              </a>
              
              <a href={rightBtnLink} className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto nav-btn-primary">
                  {rightBtnText}
                </Button>
              </a>
            </div>
          </div>

          {/* EDGE LIGHTING */}
          <div className="absolute inset-0 rounded-[2rem] lg:rounded-[3rem] border border-white/5 pointer-events-none z-40" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00d8ff]/30 to-transparent z-40" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. MOBILE (< 768px) */
        .nav-banner-wrapper { padding: 3rem 0rem; }
        .nav-banner-content { padding: 3rem 1.5rem; gap: 2.5rem; }
        .nav-banner-title { font-size: 1.2rem; }
        .nav-banner-btn-group { gap: 1rem; width: 70%; }
        .nav-btn-secondary, .nav-btn-primary { 
            height: 45px; border-radius: 1rem; font-size: 13px; font-weight: 600; 
        }
        .nav-btn-secondary { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); color: white; }
        .nav-btn-primary { background: #00d8ff; color: #010a0f; }

        /* 2. TABLET (768px - 1023px) */
        @media (min-width: 768px) {
          .nav-banner-wrapper { padding: 5rem 2rem; }
          .nav-banner-title { font-size: 1.55rem; }
          .nav-banner-btn-group { width: auto; gap: 1.5rem; }
          .nav-btn-secondary, .nav-btn-primary { width: 180px; font-size: 13px; }
        }

        /* 3. LAPTOP (1024px - 1439px) */
        @media (min-width: 1024px) {
          .nav-banner-wrapper { padding: 6rem 4rem; }
          .nav-banner-container { max-width: 1200px !important; }
          .nav-banner-content { padding: 2rem 4rem; gap: 3rem; }
          .nav-banner-title { font-size: 1.95rem; max-width: 900px; }
          .nav-btn-secondary, .nav-btn-primary { height: 45px; width: 200px; }
        }

        /* 4. LARGE DESKTOP (1440px - 2559px) */
        @media (min-width: 1440px) {
          .nav-banner-container { max-width: 1400px !important; }
          .nav-banner-title { font-size: 2.6rem; max-width: 1100px; }
          .nav-banner-content { padding: 3rem 5rem; }
          .nav-btn-secondary, .nav-btn-primary { height: 45px; width: 200px; }
        }

        /* 5. 4K MONITORS (2560px+) */
        @media (min-width: 2560px) {
          .nav-banner-container { max-width: 2200px !important; }
          .nav-banner-title { font-size: 3.6rem; max-width: 1800px; }
          .nav-banner-content { padding: 5rem 8rem; gap: 5rem; }
          .nav-btn-secondary, .nav-btn-primary { height: 70px; width: 400px; font-size: 1.6rem; border-radius: 2rem; }
        }

        /* Hover Transitions */
        .nav-btn-secondary:hover { background: rgba(255,255,255,0.08); }
        .nav-btn-primary:hover { background: white; transition: 0.3s ease; }
        .nav-btn-primary { box-shadow: 0 15px 40px rgba(0,216,255,0.2); transition: 0.3s ease; }
      `}} />
    </section>
  );
};

export default ServiceNavigationBanner;