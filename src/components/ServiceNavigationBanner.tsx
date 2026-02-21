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
        
        {/* THE MAIN GLASS CARD - High transparency with 2px blur & UPDATED 1rem Radius */}
        <div className="relative w-full rounded-[2rem] lg:rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-[2px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] nav-banner-card">
          
          {/* STATIC AMBIENT GLOWS - ADDED: rounded-[2rem] and overflow-hidden to clip glows to the box */}
          <div className="absolute inset-0 z-0 pointer-events-none rounded-[2rem] overflow-hidden">
            <div className="absolute -top-[120%] -left-[10%] w-[60%] h-[250%] bg-[#00d8ff]/15 blur-[130px] rounded-full opacity-20" />
            
            {/* THE EXTREME CORNER GLOW */}
            <div 
              className="absolute -bottom-[15%] -right-[10%] w-[60%] h-[80%] opacity-60 rounded-[2rem]" 
              style={{
                background: 'radial-gradient(circle at 100% 100%, rgba(0, 216, 255, 0.6) 0%, rgba(0, 216, 255, 0.15) 30%, transparent 70%)',
                filter: 'blur(50px)'
              }}
            />
          </div>
          
          {/* CONTENT SECTION */}
          <div className="relative z-30 flex flex-col items-center justify-center nav-banner-content">
            
            {/* HEADING - All text white */}
            <div className="text-center w-full nav-banner-header">
              <h2 className="text-white font-bold tracking-tight leading-[1.2] nav-banner-title">
                {titlePrefix} <span className="text-white">{highlight1}</span> {middleText} <span className="text-white">{highlight2}</span>?
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

          {/* EDGE LIGHTING - Radius updated to 1rem to match card */}
          <div className="absolute inset-0 rounded-[1rem] border border-white/5 pointer-events-none z-40" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00d8ff]/30 to-transparent z-40" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. MOBILE (< 768px) */
        .nav-banner-wrapper { padding: 3rem 0rem; }
        .nav-banner-content { padding: 3rem 1.5rem; gap: 2.5rem; }
        .nav-banner-title { font-size: 1.2rem; }
        .nav-banner-btn-group { gap: 1rem; width: 70%; }
        
        /* Buttons: Cyan Gradient, Black Text, 15px Font */
        .nav-btn-secondary, .nav-btn-primary { 
            height: 45px; 
            border-radius: 8px; 
            font-size: 15px; 
            font-weight: 700; 
            border: 1px solid rgba(255,255,255,0.1);
            background: linear-gradient(180deg, #3d8894 0%, #5bbec9 100%); 
            color: black;
            box-shadow: 0 10px 30px rgba(61, 136, 148, 0.3);
            transition: 0.3s ease;
        }

        /* 2. TABLET (768px - 1023px) */
        @media (min-width: 768px) {
          .nav-banner-wrapper { padding: 5rem 2rem; }
          .nav-banner-title { font-size: 1.55rem; }
          .nav-banner-btn-group { width: auto; gap: 1.5rem; }
          .nav-btn-secondary, .nav-btn-primary { width: 180px; font-size: 15px; }
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
          .nav-btn-secondary, .nav-btn-primary { height: 70px; width: 400px; font-size: 1.8rem; border-radius: 12px; }
        }

        /* Hover States */
        .nav-btn-secondary:hover, .nav-btn-primary:hover { 
          filter: brightness(1.15); 
          transform: translateY(-1px);
          color: black;
        }
      `}} />
    </section>
  );
};

export default ServiceNavigationBanner;