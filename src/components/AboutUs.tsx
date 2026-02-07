import { Button } from "@/components/ui/button";
import aboutImage from "../assets/image-removebg-preview (12).png";

const AboutUs = () => {
  return (
    <section className="relative bg-transparent overflow-hidden" style={{ padding: "clamp(3rem, 8vh, 6rem) 0" }}>
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div 
          className="absolute left-1/4 top-1/2 -translate-y-1/2 rounded-full bg-[#43c6e4]/5 blur-[8vw]" 
          style={{ width: "30vw", height: "30vw", minWidth: "250px" }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-[1200px]">
        {/* FLEX LAYOUT - Balanced for tablet and laptop widths */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* IMAGE SIDE - Controlled sizing for desktop */}
          <div className="relative flex justify-center lg:justify-start items-center order-2 lg:order-1 lg:w-[45%] w-full">
            <div className="relative w-full max-w-[350px] md:max-w-[400px] lg:max-w-full">
              <img 
                src={aboutImage} 
                alt="Echo & Impact Illustration"
                className="w-full h-auto object-contain drop-shadow-[0_0_25px_rgba(67,198,228,0.12)]"
              />
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="order-1 lg:order-2 lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* BRAND HEADER */}
            <div className="mb-4 md:mb-6">
              <h2 
                className="text-white font-bold tracking-tight leading-none uppercase"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
              >
                ABOUT <span className="text-[#43c6e4]">US</span>
              </h2>
            </div>

            {/* SCALABLE TEXT BLOCK - Narrowed for better readability */}
            <div 
              className="flex flex-col gap-4 text-white leading-relaxed font-normal opacity-90 max-w-[550px]"
              style={{ fontSize: "clamp(0.95rem, 1.05vw, 1.125rem)" }}
            >
              <p>
                Echo & Impact was built on a simple idea: brands grow when creativity, 
                clarity, and execution move in alignment. Our team brings together 
                specialists in design, software, and marketing who share one philosophy: 
                build with intention and operate with discipline.
              </p>

              <p>
                What shaped us is the belief that businesses deserve partners who stay 
                present, set right expectations, be transparent, and support growth with 
                honesty and commitment. We guide, educate, and collaborate at every step.
              </p>

              <p className="font-semibold text-[#43c6e4]/90">
                Every decision is thoughtful. Every outcome is meaningful. Every partnership 
                is built to last.
              </p>
            </div>

            {/* CTA BUTTON - More compact for desktop */}
            <div className="mt-8 w-full flex justify-center lg:justify-start">
              <Button 
                variant="cyan"
                className="rounded-full flex items-center justify-center transition-all active:scale-95"
                style={{ 
                  fontSize: "clamp(0.85rem, 0.9vw, 1rem)",
                  padding: "0 2rem",
                  height: "clamp(2.75rem, 3.5vw, 3.25rem)",
                  width: "fit-content"
                }}
              >
                Find out more about us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;