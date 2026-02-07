import React from "react";
import { Button } from "@/components/ui/button";
// IMPORT THE FOURTH IMAGE
import WhoWeAreImg from "@/assets/image-removebg-preview (4).png";

const WhoWeAre = () => {
  return (
    <section 
      className="relative bg-transparent overflow-hidden" 
      style={{ padding: "clamp(40px, 8vw, 100px) 0" }}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 items-center" 
          style={{ gap: "clamp(32px, 5vw, 80px)" }}
        >
          
          {/* IMAGE SIDE */}
          <div className="relative order-2 lg:order-1 flex justify-center items-center">
            <div 
              className="relative w-full group" 
              style={{ maxWidth: "clamp(280px, 40vw, 550px)" }}
            >
              <img 
                src={WhoWeAreImg} 
                alt="Who We Are" 
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_10px_30px_rgba(67,198,228,0.15)]"
              />
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#43c6e4]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
                style={{ filter: "blur(clamp(40px, 6vw, 100px))", zIndex: -10 }}
              />
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="order-1 lg:order-2">
            <div className="relative inline-block" style={{ marginBottom: "clamp(20px, 3vw, 40px)" }}>
              <h2 
                className="text-white font-bold tracking-tight leading-[1.1]"
                style={{ fontSize: "clamp(32px, 4.2vw, 56px)" }}
              >
                Who We <span className="text-[#43c6e4]">Are</span>
              </h2>
            </div>

            <div style={{ gap: "clamp(16px, 1.5vw, 24px)" }} className="flex flex-col">
              <p 
                className="text-slate-300 leading-relaxed font-normal"
                style={{ fontSize: "clamp(15px, 1.1vw, 18px)" }}
              >
                Echo & Impact is built by creators, strategists, and engineers who take
                brands from idea to execution, and from presence to performance.
              </p>

              <p 
                className="text-slate-300 leading-relaxed font-normal"
                style={{ fontSize: "clamp(15px, 1.1vw, 18px)" }}
              >
                We unite design, development, and marketing into one intelligent system
                that amplifies what your brand stands for and delivers measurable growth.
              </p>

              <p 
                className="text-slate-300 leading-relaxed font-normal"
                style={{ fontSize: "clamp(15px, 1.1vw, 18px)" }}
              >
                No more juggling partners or agencies. We start with you and
                stay with you, shaping every stage of your digital journey so you can focus on 
                making the impact, while we turn ideas into results.
              </p>
            </div>

            <div style={{ marginTop: "clamp(24px, 3vw, 48px)" }}>
              <Button 
                variant="cyan"
                size="hero"
                style={{ 
                  fontSize: "clamp(13px, 0.9vw, 16px)", 
                  paddingLeft: "clamp(24px, 3vw, 48px)", 
                  paddingRight: "clamp(24px, 3vw, 48px)",
                  height: "clamp(44px, 4vw, 60px)" 
                }}
              >
                Read More
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;