import React from "react";

interface WhatIsSectionProps {
  title: string;
  highlightedWord: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const WhatIsSection = ({
  title,
  highlightedWord,
  description,
  imageSrc,
  imageAlt,
}: WhatIsSectionProps) => {
  const titleParts = title.split(highlightedWord);

  return (
    <section 
      className="w-full relative overflow-hidden"
      /* VERTICAL RESTRICTION: Clamp the padding so the section doesn't get 
         excessively tall on massive displays. */
      style={{ padding: "clamp(4rem, 10vh, 8rem) 0" }}
    >
      {/* HORIZONTAL RESTRICTION: max-w-[1400px] keeps content centered and 
          readable even on 4K or ultra-wide screens. */}
      <div className="relative z-10 w-full px-6 md:px-12 mx-auto max-w-[1400px] xl:max-w-[1600px]">
        
        {/* GAP CLAMP: Ensure the gap between text and image scales but stays within bounds */}
        <div className="grid grid-cols-1 lg:grid-cols-[6fr_4fr] items-center gap-[clamp(2.5rem,5vw,5rem)]">
          
          {/* 1. TEXT CONTENT SECTION */}
          <div className="order-1 flex flex-col items-center lg:items-start text-center lg:text-left min-w-0">
            <div className="mb-6 md:mb-8 w-full">
              <h2 className="font-bold tracking-tight text-white leading-[1.1] 
                             text-[clamp(1.8rem,7vw,2.2rem)] 
                             md:text-[clamp(2.2rem,5vw,2.6rem)] 
                             lg:text-[clamp(2.4rem,3.5vw,2.8rem)] 
                             2xl:text-[clamp(2.4rem,3.5vw,2.8rem)]">
                {titleParts[0]}
                <span className="text-[#00d8ff]">{highlightedWord}</span>
                {titleParts[1] || ""}
              </h2>
            </div>
            
            <p className="text-white/60 leading-relaxed font-light max-w-xl xl:max-w-2xl
                          text-[clamp(0.9rem,1.3vw,1.05rem)]
                          2xl:text-[0.9rem,1.3vw,1.05rem]">
              {description}
            </p>
          </div>

          {/* 2. IMAGE CONTENT SECTION */}
          <div className="order-2 relative w-full flex justify-center lg:justify-end min-w-0">
            {/* ASPECT RATIO LOCK: Restricted the height indirectly via width + aspect-ratio 
                to ensure the image doesn't balloon vertically on large screens. */}
            <div className="relative z-10 w-full max-w-[400px] lg:max-w-[500px] 2xl:max-w-[650px] p-2 md:p-4 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl">
              
              <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-[#00d8ff]/30 rounded-tl-2xl" />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-[#00d8ff]/30 rounded-br-2xl" />

              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] w-full bg-[#0a161d]">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#010a0f]/40 to-transparent pointer-events-none" />
              </div>
            </div>
            
            {/* Background Glow: Scaled down slightly to match the restricted width */}
            <div className="absolute inset-0 bg-[#00d8ff]/5 blur-3xl rounded-full -z-10 transform scale-75 translate-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;