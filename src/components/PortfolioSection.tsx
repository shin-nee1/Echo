import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ASSET IMPORTS
import PortImg9 from "@/assets/image-removebg-preview (9).png";
import PortImg10 from "@/assets/image-removebg-preview (10).png";
import PortImg11 from "@/assets/image-removebg-preview (11).png";

const PortfolioSection = () => {
  const projects = [
    { id: 1, img: PortImg9, name: "Uber", bg: "bg-[#141414]", href: "/portfolio/uber" },
    { id: 2, img: PortImg10, name: "Barclays", bg: "bg-[#00AEEF]", href: "/portfolio/barclays" },
    { id: 3, img: PortImg11, name: "FINKOFF.", bg: "bg-white", href: "/portfolio/finkoff" }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="portfolio-section relative bg-transparent overflow-hidden z-10">
      <style dangerouslySetInnerHTML={{ __html: `
        /* REMOVE SCROLLBAR BUT KEEP SWIPE */
        .portfolio-scroll-container {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }
        .portfolio-scroll-container::-webkit-scrollbar { display: none; }

        /* 1. BASE / MOBILE FIRST */
        .portfolio-wrapper { padding: 3rem 0; }
        .portfolio-header { margin-bottom: 2rem; display: flex; align-items: flex-end; justify-content: space-between; }
        .portfolio-title { font-size: 2.2rem; font-weight: 700; letter-spacing: -0.06em; line-height: 1; color: white; }
        .portfolio-card-link { width: 55vw; flex-shrink: 0; scroll-snap-align: center; margin-right: 1.4rem; }
        .portfolio-card-box { aspect-ratio: 1.1 / 1; border-radius: 1.5rem; overflow: hidden; border: 1px solid rgba(255,255,255,0.05); }
        .portfolio-nav { display: none; } 
        
        /* VIEW ALL BUTTON - REMOVED GLOW */
        .portfolio-view-all { 
          font-size: 0.75rem; 
          height: 2.2rem; 
          padding: 0 1.2rem; 
          box-shadow: none !important; 
          filter: none !important; 
        }

        /* 2. TABLET (768px) */
        @media (min-width: 768px) {
          .portfolio-title { font-size: 2.65rem; }
          .portfolio-card-link { width: 45vw; margin-right: 2rem; }
          .portfolio-card-box { border-radius: 2.5rem; }
          .portfolio-view-all { font-size: 0.85rem; height: 2.5rem; padding: 0 1.8rem; }
        }

        /* 3. LAPTOP (1024px) */
        @media (min-width: 1024px) {
          .portfolio-wrapper { padding: 4rem 0; }
          .portfolio-title { font-size: 3.2rem; }
          .portfolio-card-link { width: 31vw; margin-right: 1.5rem; }
          .portfolio-nav { display: flex; gap: 0.75rem; padding-bottom: 0rem; }
          .portfolio-nav button { 
            width: 2.6rem; height: 2.6rem; border-radius: 50%; border: 1px solid rgba(255,255,255,0.2);
            color: white; display: flex; align-items: center; justify-content: center; transition: all 0.3s;
          }
          .portfolio-nav button:hover { background: #43c6e4; border-color: #43c6e4; color: black; }
          .portfolio-view-all { font-size: 0.9rem; height: 2.5rem; padding: 0 1.5rem; }
        }

        /* 4. LARGE DESKTOP (1440px) - UPDATED TO HORIZONTAL FLOW */
        @media (min-width: 1440px) {
        .portfolio-title { font-size: 3rem; }
          .portfolio-scroll-container { 
            display: flex; /* Changed from grid */
            gap: 2rem; 
            overflow-x: auto; 
          }
          .portfolio-card-link { 
            width: 60vh; 
            flex-shrink: 0; 
            scroll-snap-align: start; 
            margin-right: 0; 
          }
          .portfolio-nav { display: flex; gap: 0.75rem; padding-bottom: 0.5rem; } 
          .portfolio-view-all { font-size: 1rem; height: 3rem; padding: 0 2.2rem; }
        }

        /* 5. 4K MONITORS (2560px) */
        @media (min-width: 2560px) {
          .portfolio-wrapper { padding: 8vh 0; }
          .portfolio-title { font-size: 5.2rem; }
          .portfolio-subtitle { font-size: 1.4rem; margin-left: 4rem; padding-left: 4rem; }
          .portfolio-card-link { width: 60vh; }
          .portfolio-card-box { border-radius: 4rem; }
          .portfolio-header { margin-bottom: 5vh; }
          
          /* 4K NAV BUTTON SCALE */
          .portfolio-nav { gap: 1.5rem; }
          .portfolio-nav button { width: 5.5rem; height: 5.5rem; }
          .portfolio-nav svg { width: 2rem; height: 2rem; }
          
          .portfolio-view-all { font-size: 1.5rem; height: 5.5rem; padding: 0 4.5rem; border-radius: 6rem; }
        }
      `}} />

      <div className="mx-auto px-[5vw] relative z-10" style={{ maxWidth: "2200px" }}>
        
        {/* HEADER AREA */}
        <div className="portfolio-header">
          <div className="shrink-0">
            <h2 className="portfolio-title">
              Our <span className="text-[#43c6e4]">Portfolio</span>
            </h2>
          </div>

          <div className="flex flex-row items-end gap-[1.5rem] shrink-0">
            {/* BUTTONS (Visible 1024px - 1439px) */}
            <div className="portfolio-nav">
              <button onClick={() => scroll("left")}><ArrowLeft size="1.2rem" /></button>
              <button onClick={() => scroll("right")}><ArrowRight size="1.2rem" /></button>
            </div>

            <Button variant="cyan" size="hero" className="portfolio-view-all rounded-full">
              View All
            </Button>
          </div>
        </div>

        {/* PORTFOLIO CARDS ROW */}
        <div ref={scrollRef} className="portfolio-scroll-container -mx-[5vw] px-[5vw] lg:mx-0 lg:px-0">
          {projects.map((project) => (
            <Link key={project.id} to={project.href} className="portfolio-card-link group">
              <motion.div 
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col"
              >
                <div className={`portfolio-card-box relative w-full ${project.bg} flex items-center justify-center transition-all duration-500`}>
                  <img 
                    src={project.img} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;