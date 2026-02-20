import React from "react";
import { Button } from "@/components/ui/button";
// IMPORT THE FOURTH IMAGE
import WhoWeAreImg from "@/assets/image-removebg-preview (4).png";

const WhoWeAre = () => {
  return (
    <section className="whoweare-wrapper relative bg-transparent overflow-hidden">
      <div className="container mx-auto ">
        <div className="whoweare-grid grid items-center">
          
          {/* IMAGE SIDE (Left on Desktop) */}
          <div className="whoweare-img-side relative flex justify-center items-center">
            <div className="whoweare-img-container relative w-full group">
              {/* REMOVED filter drop-shadow-[...] classes */}
              <img 
                src={WhoWeAreImg} 
                alt="Who We Are" 
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* CONTENT SIDE (Right on Desktop) */}
          <div className="whoweare-content">
            <div className="whoweare-title-box relative inline-block">
              <h2 className="whoweare-title text-white font-bold tracking-tight leading-[1.1]">
                Who We <span className="text-[#43c6e4]">Are</span>
              </h2>
            </div>

            <div className="whoweare-text-stack flex flex-col">
              <p className="whoweare-p text-slate-300 leading-relaxed font-normal">
                Echo & Impact is built by creators, strategists, and engineers who take
                brands from idea to execution, and from presence to performance.
              </p>

              <p className="whoweare-p text-slate-300 leading-relaxed font-normal">
                We unite design, development, and marketing into one intelligent system
                that amplifies what your brand stands for and delivers measurable growth.
              </p>

              <p className="whoweare-p text-slate-300 leading-relaxed font-normal">
                No more juggling partners or agencies. We start with you and
                stay with you, shaping every stage of your digital journey so you can focus on 
                making the impact, while we turn ideas into results.
              </p>
              <p className="whoweare-p text-slate-300 leading-relaxed font-normal">
              We combine creative insight with technical precision to keep your brand consistent, adaptive, and ready for what’s next.
              </p>
            </div>

            <div className="whoweare-btn-box">
              <Button variant="cyan" size="hero" className="whoweare-btn">
                Read More
              </Button>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. BASE / MOBILE FIRST (Stacked: Text top, Image bottom) */
        .whoweare-wrapper { padding: clamp(3rem, 10vh, 4rem) 0; }
        .whoweare-grid { grid-template-columns: 1fr; text-align: center; gap: clamp(2rem, 5vw, 3rem); }
        
        .whoweare-img-side { order: 2; }
        .whoweare-content { order: 1; }

        .whoweare-img-container { max-width: clamp(280px, 85vw, 320px); }
        .whoweare-title { font-size: clamp(1.85rem, 8vw, 2rem); margin-bottom: clamp(0.75rem, 3vh, 0.75rem); }
        .whoweare-p { font-size: clamp(0.95rem, 2.5vw, 1rem); margin-bottom: 1rem; }
        .whoweare-btn-box { margin-top: clamp(1rem, 4vh, 1.5rem); }
        
        /* UPDATED BUTTON STYLES */
        .whoweare-btn {
          height: clamp(2.6rem, 5vw, 3rem) !important;
          padding: 0 clamp(1.8rem, 4vw, 2rem) !important;
          font-size: clamp(0.85rem, 2vw, 1rem) !important;
          box-shadow: none !important; /* Removes the glow */
          font-weight: 400 !important;   /* Removes the bold */
        }

        /* --- TABLET VIEW (768px - 1023px) --- */
        @media (min-width: 768px) and (max-width: 1023px) {
          .whoweare-grid { grid-template-columns: 1fr; text-align: center; }
          .whoweare-img-container { max-width: 350px; }
          .whoweare-title { font-size: 2.5rem; }
          .whoweare-p { font-size: 1rem; max-width: 95%; margin-left: auto; margin-right: auto; }
          .whoweare-btn { height: 2.5rem !important; font-size: clamp(0.75rem, 2vw, 0.85rem) !important;}
        }

        /* 2. LAPTOP (1024px+) - NOW SIDE BY SIDE */
        @media (min-width: 1024px) {
          .whoweare-grid { grid-template-columns: repeat(2, 1fr); text-align: left; gap: 01rem; }
          .whoweare-img-side { order: 1; } 
          .whoweare-content { order: 2; }  
          .whoweare-img-container { max-width: 450px; margin: 0 auto; }
          .whoweare-title { font-size: 2rem;text-align: left; }
          .whoweare-p { font-size: 0.85rem; max-width: 100%; text-align: left; }
          .whoweare-btn { height: 2.6rem !important; font-size: 1rem !important;}
        }

        /* 3. LARGE DESKTOP (1280px+) */
        @media (min-width: 1280px) {
          .whoweare-grid { gap: 4rem; }
          .whoweare-img-container { max-width: 550px; }
          .whoweare-title { font-size: 2.4rem; }
          .whoweare-p { font-size: 1rem; max-width: 600px; }
        }

        /* 4. 4K MONITORS (2560px) */
        @media (min-width: 2560px) {
          .whoweare-wrapper { padding: 12vh 0; }
          .whoweare-grid { gap: 7rem; }
          .whoweare-img-container { max-width: 900px; }
          .whoweare-title { font-size: 4.5rem; margin-bottom: 3.5rem; }
          .whoweare-p { 
            font-size: 1.5rem; 
            max-width: 1100px; 
            margin-bottom: 2rem; 
            line-height: 1.7;
          }
          .whoweare-btn {
            height: 4rem !important;
            padding: 0 4rem !important;
            font-size: 1.5rem !important;
          }
          .whoweare-btn-box { margin-top: 0rem; }
        }

        /* 5. SMALL MOBILE FIXES */
        @media (max-width: 425px) {
          .whoweare-title { font-size: 1.85rem; }
          .whoweare-p { font-size: 0.85rem; }
        }
      `}} />
    </section>
  );
};

export default WhoWeAre;