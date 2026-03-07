import React, { useState, useMemo } from "react";
import { MousePointerClick, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface Feature {
  title: string;
  description: string;
  imageSrc: string;
  alternateImageSrc?: string; // <-- Added the alternate image property here
  slug?: string;
}

interface FeaturesCarouselProps {
  sectionTitle: string;
  highlightedWord: string;
  features: Feature[];
}

const FeaturesCarousel = ({
  sectionTitle,
  highlightedWord,
  features,
}: FeaturesCarouselProps) => {
  const [isCompact, setIsCompact] = React.useState(false);

  React.useEffect(() => {
    const checkSize = () => setIsCompact(window.innerWidth < 1000);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const titleParts = sectionTitle.split(highlightedWord);

  const TOTAL_CARDS = Math.max(15, Math.ceil(15 / (features.length || 1)) * features.length);
  const extendedFeatures = useMemo(() => {
    if (!features || features.length === 0) return [];
    let arr = [];
    while (arr.length < TOTAL_CARDS) {
      arr.push(...features);
    }
    return arr.slice(0, TOTAL_CARDS).map((f, i) => ({ 
      ...f, 
      uniqueId: `feature-${i}`,
      realIndex: i % features.length 
    }));
  }, [features, TOTAL_CARDS]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleNext = () => {
    setActiveIndex((prev) => prev + 1);
    setExpandedId(null);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => prev - 1);
    setExpandedId(null);
  };

  const activeDotIndex = ((activeIndex % features.length) + features.length) % features.length;

  return (
    <section className={`relative overflow-hidden z-10 w-full flex flex-col items-center ${isCompact ? "py-6" : "py-12"}`}>
      <div className="w-full px-[2vw] relative z-10 flex flex-col items-center">

        <div className={`flex flex-col items-center text-center ${isCompact ? "mb-6" : "mb-8"}`}>
          <h2 className={`${isCompact ? "text-3xl" : "text-[clamp(2.5rem,5vw,4rem)]"} font-bold tracking-tight text-white leading-[1.1]`}>
            {titleParts[0]}
            <span className="text-[#47c2d2]">{highlightedWord}</span>
            {titleParts[1]}
          </h2>
        </div>

        <motion.div 
          onPanEnd={(e, info) => {
            const swipeThreshold = 50;
            if (info.offset.x < -swipeThreshold) handleNext();
            if (info.offset.x > swipeThreshold) handlePrev();
          }}
          className={`relative w-full flex items-center justify-center touch-pan-y
          ${isCompact ? "min-h-[580px]" : "min-h-[800px]"}
          ${isCompact ? "[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]" : ""}`}
        >
          {extendedFeatures.map((feature, i) => {
            let dist = (((i - activeIndex) % TOTAL_CARDS) + TOTAL_CARDS) % TOTAL_CARDS;
            if (dist > TOTAL_CARDS / 2) dist -= TOTAL_CARDS;

            const isExpanded = expandedId === feature.uniqueId;
            const isAnyExpanded = !!expandedId;

            const archFactor = isCompact ? 0.6 : 0.45;
            const ratio = dist * archFactor;
            const absRatio = Math.abs(ratio);

            const cardWidth = isCompact ? 220 : 340; 
            const x = dist * cardWidth;

            let y = 0;
            let rotate = 0;
            let scale = 1;
            let opacity = 1;
            let zIndex = 10;
            let grayscale = "0%";
            let brightness = "100%"; 

            if (isExpanded) {
              y = 0;
              rotate = 0;
              scale = 1;
              opacity = 1;
              zIndex = 100;
              grayscale = "0%";
              brightness = "100%";
            } else if (isAnyExpanded) {
              const clampedRatio = Math.min(absRatio, 2.0);
              const verticalIntensity = isCompact ? 160 : 350;
              y = Math.pow(clampedRatio, 2) * verticalIntensity + 20;
              rotate = ratio * 35;
              scale = 1 - Math.min(absRatio * 0.25, 0.4);
              
              opacity = 1;
              zIndex = 1;
              grayscale = "100%";
              brightness = "30%";
            } else {
              const clampedRatio = Math.min(absRatio, 2.2);
              const verticalIntensity = isCompact ? 120 : 260;
              y = Math.pow(clampedRatio, 2) * verticalIntensity + 20;
              rotate = ratio * 28;
              scale = 1 - Math.min(absRatio * 0.15, 0.25);
              
              zIndex = Math.round(50 + dist * 10);
              
              grayscale = "0%";
              brightness = `${Math.max(40, 100 - (absRatio * 25))}%`;
              opacity = absRatio > 2.5 ? 0 : 1; 
            }

            const imageHeight = isCompact ? 240 : 340;
            const originalHeight = isCompact ? 350 : 480;

            return (
              <motion.div
                key={feature.uniqueId}
                animate={{ 
                  x, y, rotate, scale, opacity, zIndex, 
                  filter: `grayscale(${grayscale}) brightness(${brightness})`,
                  pointerEvents: opacity === 0 ? "none" : "auto"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 250, 
                  damping: 30, 
                  mass: 0.8 
                }}
                className={`absolute ${isCompact ? "w-[18rem]" : "w-[22rem] lg:w-[24rem] xl:w-[26rem]"}`}
                style={{ transformOrigin: "center center", perspective: "1000px" }}
              >
                <div
                  onClick={() => {
                    if (expandedId === feature.uniqueId) {
                      setExpandedId(null);
                    } else {
                      setActiveIndex((prev) => prev + dist);
                      setExpandedId(feature.uniqueId);
                    }
                  }}
                  className="slide-inner relative cursor-pointer flex flex-col items-center justify-center w-full"
                >
                  <motion.div
                    layout
                    className="relative w-full overflow-hidden flex flex-col isolate z-20 rounded-[2rem] border backdrop-blur-xl bg-black"
                    animate={{
                      backgroundColor: isExpanded ? "#0a0a0a" : "rgb(0, 0, 0)",
                      borderColor: isExpanded ? "rgba(0, 216, 255, 0.6)" : "rgba(255, 255, 255, 0.15)",
                      boxShadow: isExpanded ? "0 0 50px rgba(0, 216, 255, 0.15)" : "0 4px 15px rgba(0,0,0,0.5)",
                      height: isExpanded ? "auto" : originalHeight,
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ minHeight: originalHeight }}
                  >
                    <div className="relative w-full overflow-hidden flex-shrink-0" style={{ height: imageHeight }}>
                      <img
                        src={feature.imageSrc}
                        alt={feature.title}
                        className="w-full h-full object-contain drop-shadow-xl"
                        // <-- Added fallback logic here:
                        onError={(e) => {
                          if (feature.alternateImageSrc && e.currentTarget.src !== feature.alternateImageSrc) {
                            e.currentTarget.src = feature.alternateImageSrc;
                          }
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    <div className="flex flex-col flex-grow w-full p-5 text-center justify-center bg-black/50">
                      <h3 className={`${isCompact ? "text-[0.95rem]" : "text-[1.1rem]"} font-bold text-white mb-3 tracking-wide uppercase`}>
                        {feature.title}
                      </h3>

                      {!isExpanded && (
                        <div className="flex justify-center">
                          <div className="flex items-center gap-2 text-[#00d8ff] text-[0.65rem] uppercase font-bold tracking-widest bg-black/40 px-3 py-1 rounded-full border border-[#00d8ff]/30 backdrop-blur-sm">
                            <MousePointerClick size="0.75rem" />
                            <span>Details</span>
                          </div>
                        </div>
                      )}

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden w-full"
                          >
                            <div className="pt-3">
                              <div className="w-[60%] h-[1px] bg-white/10 mx-auto mb-4" />
                              <p className="text-white/90 text-[0.85rem] leading-relaxed font-light mb-3">
                                {feature.description}
                              </p>
                              <span className="text-white/30 text-[0.6rem] uppercase tracking-wider">
                                Tap to close
                              </span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="absolute -bottom-10 -right-10 w-[90%] h-[90%] bg-[#00d8ff]/10 blur-[80px] rounded-full pointer-events-none z-0" />
                    <div className="absolute -bottom-10 -left-10 w-[90%] h-[90%] bg-[#00d8ff]/10 blur-[80px] rounded-full pointer-events-none z-0" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {!expandedId && (
          <div className="flex flex-col items-center gap-4 relative z-20 mt-2">
            <div className="flex items-center gap-4 mb-2">
              <button onClick={handlePrev} className="p-3.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white transition-all backdrop-blur-md group cursor-pointer z-50">
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button onClick={handleNext} className="p-3.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white transition-all backdrop-blur-md group cursor-pointer z-50">
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            <div className="flex justify-center gap-[0.4rem]">
              {features.map((_, index) => (
                <div key={index} className={`h-[3.5px] rounded-full transition-all duration-500 ${index === activeDotIndex ? "w-10 bg-[#00d8ff] shadow-[0_0_10px_#00d8ff]" : "w-2.5 bg-white/10"}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesCarousel;