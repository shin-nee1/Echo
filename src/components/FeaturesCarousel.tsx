import React, { useCallback, useEffect, useState, useMemo, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MousePointerClick, ChevronLeft, ChevronRight } from "lucide-react";
import type { EmblaCarouselType } from "embla-carousel";
import { motion, AnimatePresence } from "framer-motion";

export interface Feature {
  title: string;
  description: string;
  imageSrc: string;
  slug?: string;
}

interface FeaturesCarouselProps {
  sectionTitle: string;
  highlightedWord: string;
  features: Feature[];
  subheadline?: string;
}

const FeaturesCarousel = ({
  sectionTitle,
  highlightedWord,
  features,
  subheadline = "Every brand we build follows a rhythm. Designed to create presence."
}: FeaturesCarouselProps) => {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsCompact(window.innerWidth < 1000);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const titleParts = sectionTitle.split(highlightedWord);

  const extendedFeatures = useMemo(() => {
    if (!features || features.length === 0) return [];
    let repeated = [...features];
    while (repeated.length < 20) { 
      repeated = [...repeated, ...features];
    }
    return repeated.map((f, i) => ({ ...f, uniqueId: `feature-${i}` }));
  }, [features]);

  // CHANGED: dragFree set to false to ensure it always snaps to center
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false, 
    startIndex: Math.floor(extendedFeatures.length / 2),
    watchDrag: true,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const isMoving = useRef(false);
  const animationFrameRef = useRef<number>(0);

  // --------------------------------------------------------------------------
  // NAVIGATION HANDLERS
  // --------------------------------------------------------------------------
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  // --------------------------------------------------------------------------
  // PHYSICS ENGINE
  // --------------------------------------------------------------------------
  const applyWheelEffect = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi) return;
    
    const container = emblaApi.rootNode();
    const containerRect = container.getBoundingClientRect();
    const center = containerRect.width / 2;
    const slideNodes = emblaApi.slideNodes();
    
    const engine = (emblaApi as any).internalEngine();
    const isDragging = engine.dragHandler.pointerDown();
    const isSettling = emblaApi.scrollProgress() !== emblaApi.scrollSnapList()[emblaApi.selectedScrollSnap()];

    slideNodes.forEach((slideNode) => {
      const slideInner = slideNode.querySelector(".slide-inner") as HTMLElement;
      if (!slideInner) return;

      const slideId = slideInner.getAttribute('data-id');
      const isExpanded = expandedId === slideId;
      const isAnyExpanded = !!expandedId;

      const slideRect = slideNode.getBoundingClientRect();
      const slideCenter = slideRect.left - containerRect.left + slideRect.width / 2;
      const dist = slideCenter - center;
      
      const ratioDenominator = isCompact ? containerRect.width * 0.55 : containerRect.width * 0.45;
      const ratio = dist / ratioDenominator; 
      const absRatio = Math.abs(ratio);

      // --- LOGIC ---

      let transition = "transform 0.1s linear, opacity 0.2s ease"; 
      if (isAnyExpanded || (!isDragging && !isSettling)) {
        transition = "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.5s ease"; 
      }
      slideInner.style.transition = transition;

      let transform = "";
      let opacity = "1";
      let zIndex = "10";
      let grayscale = "0%";

      if (isExpanded) {
        transform = `translate3d(0, 10px, 0) rotate(0deg) scale(1.05)`;
        opacity = "1";
        zIndex = "100";
        grayscale = "0%";

      } else if (isAnyExpanded) {
        const clampedRatio = Math.min(absRatio, 2.0);
        const verticalIntensity = isCompact ? 50 : 120;
        const translateY = Math.pow(clampedRatio, 2) * verticalIntensity; 
        const rotate = ratio * 15; 
        const scale = 1 - Math.min(absRatio * 0.2, 0.3);

        transform = `translate3d(0, ${translateY + 40}px, 0) rotate(${rotate}deg) scale(${scale})`;
        opacity = "0.1"; 
        zIndex = "1";
        grayscale = "100%";

      } else {
        const clampedRatio = Math.min(absRatio, 2.2);
        const verticalIntensity = isCompact ? 40 : 100;
        const translateY = Math.pow(clampedRatio, 2) * verticalIntensity; 
        const rotate = ratio * 14; 
        const scale = 1 - Math.min(absRatio * 0.15, 0.4);

        opacity = (1 - absRatio * 0.6).toString();
        if (parseFloat(opacity) < 0) opacity = "0";

        transform = `translate3d(0, ${translateY + 40}px, 0) rotate(${rotate}deg) scale(${scale})`;
        zIndex = Math.round(50 - absRatio * 50).toString();
      }

      slideInner.style.transform = transform;
      slideInner.style.opacity = opacity;
      slideInner.style.zIndex = zIndex;
      slideInner.style.filter = `grayscale(${grayscale})`;
    });

  }, [expandedId, isCompact]);

  useEffect(() => {
    if (!emblaApi) return;

    const animate = () => {
      applyWheelEffect(emblaApi);
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animationFrameRef.current = requestAnimationFrame(animate);

    emblaApi.on("scroll", () => { isMoving.current = true; });
    emblaApi.on("settle", () => { isMoving.current = false; });
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap() % (features.length || 1));
    });

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [emblaApi, applyWheelEffect, features.length]);


  const handleCardClick = useCallback((id: string, index: number) => {
    if (!emblaApi) return;
    const engine = (emblaApi as any).internalEngine();
    
    if (engine.dragHandler.pointerDown()) return;

    if (expandedId === id) {
      setExpandedId(null);
    } else {
      emblaApi.scrollTo(index);
      setExpandedId(id);
    }
  }, [emblaApi, expandedId]);

  return (
    <section className={`relative overflow-hidden z-10 w-full flex flex-col items-center ${isCompact ? "py-10" : "py-[10vh]"}`}>
      <div className="w-full px-[2vw] relative z-10">
        
        <div className={`flex flex-col items-center text-center ${isCompact ? "mb-6" : "mb-[4vh]"}`}>
          <h2 className={`${isCompact ? "text-3xl" : "text-[clamp(2.2rem,4.5vw,3.8rem)]"} font-bold tracking-tight text-white leading-[1.1]`}>
            {titleParts[0]}
            <span className="text-[#00d8ff]">{highlightedWord}</span>
            {titleParts[1]}
          </h2>
          <p className={`max-w-[32rem] mx-auto mt-[1.5vh] text-white/40 font-light ${isCompact ? "text-sm px-4" : "text-[clamp(0.85rem,1.1vw,1rem)]"}`}>
            {subheadline}
          </p>
        </div>

        {/* NAVIGATION BUTTONS (Desktop Only) */}
        {!isCompact && !expandedId && (
          <>
            <button 
              onClick={scrollPrev}
              className="absolute left-[5%] top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00d8ff]/30 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-md group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={scrollNext}
              className="absolute right-[5%] top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00d8ff]/30 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-md group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </>
        )}

        {/* MASK CONTAINER */}
        <div className={`relative flex items-center justify-center 
          ${isCompact ? "min-h-[400px] [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]" : "min-h-[600px]"}`}> 
          
          <div className="w-full overflow-visible" ref={emblaRef}>
            <div className={`flex touch-pan-y items-start ${isCompact ? "h-[360px]" : "h-[500px]"}`}> 
              {extendedFeatures.map((feature, index) => {
                const isExpanded = expandedId === feature.uniqueId;
                
                return (
                  <div 
                    key={feature.uniqueId} 
                    className={`flex-shrink-0 px-0 relative ${isCompact ? "w-[14rem]" : "w-[12rem] lg:w-[14rem] xl:w-[16rem] 2xl:w-[20rem]"}`}
                    style={{ perspective: "1000px" }}
                  > 
                    <div 
                      data-id={feature.uniqueId}
                      onClick={() => handleCardClick(feature.uniqueId, index)}
                      className={`slide-inner relative cursor-pointer rounded-[1.6rem] border overflow-hidden flex flex-col justify-between items-center
                        ${isExpanded ? "border-[#00d8ff]/60 shadow-[0_0_50px_rgba(0,216,255,0.15)] bg-[#0a0a0a]" : "border-white/10 bg-white/[0.03] hover:border-white/30"}
                      `}
                      style={{
                        height: isExpanded ? "auto" : (isCompact ? "280px" : "360px"),
                        minHeight: isCompact ? "280px" : "360px",
                        transformOrigin: "center center",
                        willChange: "transform, opacity",
                      }}
                    >
                      {/* IMAGE */}
                      <div className={`flex-grow flex items-center justify-center w-full transition-all duration-700 ${isExpanded ? "p-0 h-[220px]" : (isCompact ? "p-5" : "p-8")}`}>
                        <img 
                          src={feature.imageSrc} 
                          alt={feature.title} 
                          className={`w-full h-full object-contain pointer-events-none transition-all duration-700 
                            ${isExpanded ? "scale-110 object-cover" : ""}
                            ${isCompact ? "max-h-[110px]" : "max-h-[160px]"}`} 
                        />
                      </div>

                      {/* TEXT */}
                      <div className={`w-full text-center flex flex-col items-center bg-gradient-to-t from-black/80 to-transparent transition-all duration-500 ${isExpanded ? "pt-4 pb-6" : "p-6 pt-0"}`}>
                        <h3 className={`${isCompact ? "text-[0.75rem]" : "text-[0.85rem]"} font-bold text-white mb-2 tracking-widest uppercase`}>
                          {feature.title}
                        </h3>
                        
                        <div className={`h-[2px] bg-[#00d8ff]/40 mb-3 transition-all duration-500 ${isExpanded ? "w-12" : "w-6"}`} />
                        
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }} 
                              animate={{ opacity: 1, height: "auto" }} 
                              exit={{ opacity: 0, height: 0 }} 
                              transition={{ duration: 0.4 }}
                              className="overflow-hidden"
                            >
                              <p className="text-white/70 text-[0.8rem] leading-relaxed font-light px-6 pb-2">
                                {feature.description}
                              </p>
                              
                              <button 
                                className="mt-4 text-[0.7rem] bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-colors"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExpandedId(null);
                                }}
                              >
                                Close
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                        {!isExpanded && (
                          <div className="mt-auto flex items-center gap-2 text-[#00d8ff] text-[0.6rem] uppercase font-bold tracking-widest opacity-80">
                            <MousePointerClick size="0.75rem" />
                            <span>Details</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* PAGINATION */}
        {!expandedId && (
          <div className={`flex justify-center gap-[0.35rem] relative z-20 ${isCompact ? "mt-4" : "mt-8"}`}>
            {features.map((_, index) => (
              <div key={index} className={`h-[3px] rounded-full transition-all duration-500 ${index === selectedIndex ? "w-8 bg-[#00d8ff]" : "w-2 bg-white/10"}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesCarousel;