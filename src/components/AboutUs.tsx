import { Button } from "@/components/ui/button";
import aboutImage from "../assets/image-removebg-preview (12).png";

const AboutUs = () => {
  return (
    <section className="relative py-20 bg-transparent overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#43c6e4]/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE SIDE - Matches the 3D illustration placement */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start items-center">
            <div className="relative w-full max-w-[650px]">
              <img 
                src={aboutImage} 
                alt="Echo & Impact Illustration"
                className="w-full h-auto object-contain drop-shadow-[0_0_50px_rgba(67,198,228,0.15)]"
              />
            </div>
          </div>

          {/* CONTENT SIDE - Matches the typography in the screenshot */}
          <div className="order-1 lg:order-2">
            
            {/* BRAND HEADER - Matched Font and Tracking */}
            <div className="mb-8">
              <h2 className="text-white text-5xl md:text-6xl font-bold tracking-tight leading-none uppercase">
                ABOUT <span className="text-[#43c6e4]">US</span>
              </h2>
            </div>

            <div className="space-y-8 max-w-xl">
              <p className="text-white text-base md:text-lg leading-relaxed font-normal opacity-90">
                Echo & Impact was built on a simple idea: brands grow when creativity, 
                clarity, and execution move in alignment. Our team brings together 
                specialists in design, software, and marketing who share one philosophy, 
                build with intention and operate with discipline.
              </p>

              <p className="text-white text-base md:text-lg leading-relaxed font-normal opacity-90">
                What shaped us is the belief that businesses deserve partners who stay 
                present, set right expectations, be transparent, and support growth with 
                honesty and commitment. We guide, educate, and collaborate at every step, 
                ensuring you always know where your project stands and where it's going.
              </p>

              <p className="text-white text-base md:text-lg leading-relaxed font-normal opacity-90">
                Every decision is thoughtful. Every outcome is meaningful. Every partnership 
                is built to last.
              </p>
            </div>

            {/* CTA BUTTON - Matched to "Find out more about us" style */}
            <div className="mt-10">
              <Button variant="cyan"
              size="hero"
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