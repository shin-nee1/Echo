import { Button } from "@/components/ui/button";
// IMPORT THE FOURTH IMAGE
import WhoWeAreImg from "@/assets/image-removebg-preview (4).png";

const WhoWeAre = () => {
  return (
    <section className="relative py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE SIDE - Floating with ambient glow */}
          <div className="relative order-2 lg:order-1 flex justify-center items-center">
            <div className="relative w-full max-w-[500px] group">
              <img 
                src={WhoWeAreImg} 
                alt="Who We Are" 
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 filter drop-shadow-[0_20px_50px_rgba(67,198,228,0.2)]"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#43c6e4]/10 blur-[100px] -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="order-1 lg:order-2">
            <div className="relative inline-block mb-10">
              {/* HEADING: Matched to Bold weight and Tight tracking in image */}
              <h2 className="text-white text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                Who We <span className="text-[#43c6e4]">Are</span>
              </h2>
            </div>

            <div className="space-y-8">
              {/* BODY TEXT: Matched to the Regular weight and Slate-300 color in image */}
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-normal">
                Echo & Impact is built by creators, strategists, and engineers who take
                brands from idea to execution, and from presence to performance.
              </p>

              <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-normal">
                We unite design, development, and marketing into one intelligent system
                that amplifies what your brand stands for and delivers measurable growth.
              </p>

              <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-normal">
                No more juggling partners or agencies. We start with you and
                stay with you, shaping every stage of your digital journey so you can focus on 
                making the impact, while we turn ideas into results.
              </p>
            </div>

            <div className="mt-12">
              {/* Using the custom "hero" size and "cyan" variant established for brand consistency */}
              <Button 
                variant="cyan"
                size="hero"
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