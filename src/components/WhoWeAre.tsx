import { Button } from "@/components/ui/button";
// IMPORT THE FOURTH IMAGE
import WhoWeAreImg from "@/assets/image-removebg-preview (4).png";

const WhoWeAre = () => {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE SIDE - Now floating directly on the page */}
          <div className="relative order-2 lg:order-1 flex justify-center items-center">
            <div className="relative w-full max-w-[500px] group">
              {/* IMAGE (4) */}
              <img 
                src={WhoWeAreImg} 
                alt="Who We Are" 
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_20px_50px_rgba(0,216,255,0.15)]"
              />
              
              {/* Subtle Ambient Glow behind the image to make it pop */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#00d8ff]/10 blur-[100px] -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="order-1 lg:order-2">
            <div className="relative inline-block mb-12">
              <h2 className="text-white text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight">
                Who We <span className="text-[#00d8ff]">Are</span>
              </h2>
              {/* BRAND ACCENT BAR REMOVED FROM HERE */}
            </div>

            <div className="space-y-6">
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-normal opacity-85">
                Echo & Impact is built by creators, strategists, and engineers who take
                brands from idea to execution, and from presence to performance.
              </p>

              <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-normal opacity-85">
                We unite design, development, and marketing into one intelligent system
                that amplifies what your brand stands for and delivers measurable growth.
              </p>

              <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-normal opacity-85">
                No more juggling partners or agencies. We start with you and
                stay with you, shaping every stage of your digital journey.
              </p>
            </div>

            <div className="mt-12">
              <Button 
                size="lg"
                className="bg-[#00d8ff] text-black hover:bg-[#00d8ff]/90 px-10 py-7 rounded-xl text-lg font-bold uppercase tracking-tight shadow-[0_0_25px_rgba(0,216,255,0.3)] transition-all hover:scale-105 active:scale-95"
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