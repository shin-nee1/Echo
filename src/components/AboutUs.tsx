import { Button } from "@/components/ui/button";
import aboutImage from "../assets/image-removebg-preview (12).png";

const AboutUs = () => {
  return (
    <section className="relative py-32 bg-transparent overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00d8ff]/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* IMAGE SIDE - Maximized size, no frame, no animation */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start items-center">
            <div className="relative w-full max-w-[900px] group">
              <img 
                src={aboutImage} 
                alt="Echo & Impact Identity"
                className="w-full h-auto object-contain transition-transform duration-700 
                           group-hover:scale-105 drop-shadow-[0_0_40px_rgba(0,216,255,0.2)]"
              />
              {/* Subtle background glow layer */}
              <div className="absolute inset-0 bg-[#00d8ff]/5 blur-[120px] -z-10 opacity-50" />
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="order-1 lg:order-2">
            
            {/* BRAND HEADER - No underline, original font */}
            <div className="relative inline-block mb-12">
              <h2 className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter leading-none uppercase">
                About <span className="text-[#00d8ff]">Us</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-normal opacity-90">
                Echo & Impact is built by creators, strategists, and engineers who take
                brands from idea to execution, and from presence to performance.
              </p>

              <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-normal opacity-90">
                We unite design, development, and marketing into one intelligent system
                that amplifies what your brand stands for and delivers measurable growth.
              </p>

              <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-normal opacity-90">
                No more juggling partners. We start with you and stay with you, 
                shaping every stage of your digital journey so you can focus on making an impact.
              </p>
            </div>

            {/* CTA BUTTON */}
            <div className="mt-12">
              <Button 
                size="lg"
                className="bg-[#00d8ff] text-black hover:bg-[#00d8ff]/90 px-10 py-7 rounded-xl text-lg font-black uppercase tracking-tight shadow-[0_0_25px_rgba(0,216,255,0.3)] transition-all hover:scale-105 active:scale-95"
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

export default AboutUs;