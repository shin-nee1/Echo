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
}

const FeaturesCarousel = ({
  sectionTitle,
  highlightedWord,
  features,
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
  // DYNAMIC DRAG CONTROL
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit({ watchDrag: !expandedId });
  }, [emblaApi, expandedId]);

  // --------------------------------------------------------------------------
  // NAVIGATION HANDLERS
  // --------------------------------------------------------------------------
  const scrollPrev = useCallback(() => {
    if (emblaApi && !expandedId) emblaApi.scrollPrev();
  }, [emblaApi, expandedId]);

  const scrollNext = useCallback(() => {
    if (emblaApi && !expandedId) emblaApi.scrollNext();
  }, [emblaApi, expandedId]);

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
        transform = `translate3d(0, 0, 0) rotate(0deg) scale(1)`;
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

    const handleScroll = () => {
        isMoving.current = true;
    };

    emblaApi.on("scroll", handleScroll);
    emblaApi.on("settle", () => { isMoving.current = false; });
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap() % (features.length || 1));
    });

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [emblaApi, applyWheelEffect, features.length]);


  const handleCardClick = useCallback((id: string, index: number) => {
    if (!emblaApi) return;
    
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
        </div>

        {/* MASK CONTAINER */}
        <div className={`relative flex items-center justify-center 
          ${isCompact ? "min-h-[400px] [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]" : "min-h-[600px]"}`}>

          <div className="w-full overflow-visible" ref={emblaRef}>
            <div className={`flex touch-pan-y items-start pb-48 ${isCompact ? "min-h-[360px]" : "min-h-[500px]"}`}>
              {extendedFeatures.map((feature, index) => {
                const isExpanded = expandedId === feature.uniqueId;
                const originalHeight = isCompact ? "280px" : "360px";

                return (
                  <div
                    key={feature.uniqueId}
                    className={`flex-shrink-0 px-0 relative ${isCompact ? "w-[16rem]" : "w-[18rem] lg:w-[18rem] xl:w-[20rem] 2xl:w-[20rem]"}`}
                    style={{ perspective: "1000px" }}
                  >
                    <div
                      data-id={feature.uniqueId}
                      onClick={() => handleCardClick(feature.uniqueId, index)}
                      className="slide-inner relative cursor-pointer flex flex-col items-center"
                      style={{
                        transformOrigin: "center center",
                      }}
                    >
                        {/* 1. THE MAIN CARD */}
                        <div 
                            className={`relative w-full overflow-hidden flex flex-col isolate z-20 transition-all duration-500
                            ${isExpanded 
                                ? "rounded-t-[1.6rem] rounded-b-none border-x border-t border-b-transparent border-[#00d8ff]/60 shadow-[0_0_50px_rgba(0,216,255,0.15)] bg-[#0a0a0a]" 
                                : "rounded-[1.6rem] border border-white/10 bg-white/[0.03] hover:border-white/30"
                             }
                            `}
                            style={{ 
                                height: originalHeight,
                            }}
                        >
                            {/* NEW: Flexbox layout for Image vs Text */}
                            {/* Image Container */}
                            <div className={`relative w-full h-[65%] shrink-0 z-0 overflow-hidden transition-all duration-500 ${isExpanded ? "rounded-t-[1.6rem] rounded-b-none" : "rounded-t-[1.6rem]"}`}>
                                <img
                                    src={feature.imageSrc}
                                    alt={feature.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-700"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-500 ${isExpanded ? "opacity-40" : "opacity-0"}`} />
                            </div>

                            {/* MAIN CARD GLOWS */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#00d8ff]/50 blur-[80px] rounded-full pointer-events-none z-0" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#00d8ff]/50 blur-[80px] rounded-full pointer-events-none z-0" />

                            {/* Text Content Area - Takes up remaining 35% of card */}
                            <div className="relative z-10 w-full flex-grow flex flex-col justify-center items-center p-4 transition-all duration-500">
                                <h3 className={`${isCompact ? "text-[0.75rem]" : "text-[0.85rem]"} font-bold text-white mb-2 tracking-widest uppercase drop-shadow-md text-center`}>
                                    {feature.title}
                                </h3>

                                {!isExpanded && (
                                    <div className="flex items-center gap-2 text-[#00d8ff] text-[0.6rem] uppercase font-bold tracking-widest opacity-90 drop-shadow-md">
                                        <MousePointerClick size="0.75rem" />
                                        <span>Details</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 2. THE SLIDING DRAWER */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="w-full bg-[#0a0a0a] border-x border-b border-[#00d8ff]/60 rounded-b-[1.6rem] overflow-hidden z-10 relative shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                    style={{ marginTop: "-1px" }} 
                                >
                                    {/* DRAWER GLOWS */}
                                    <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#00d8ff]/20 blur-[60px] rounded-full pointer-events-none z-0" />
                                    <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#00d8ff]/20 blur-[60px] rounded-full pointer-events-none z-0" />

                                    <div className="relative z-10 p-6 pt-2 flex flex-col items-center text-center">
                                        <p className="text-white/90 text-[0.8rem] leading-relaxed font-light drop-shadow-sm">
                                            {feature.description}
                                        </p>
                                        <span className="text-white/30 text-[0.6rem] mt-4 uppercase tracking-wider hover:text-white transition-colors">
                                            Tap to close
                                        </span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM CONTROLS */}
        {!expandedId && (
          <div className={`flex flex-col items-center gap-4 relative z-20 ${isCompact ? "mt-4" : "mt-8"}`}>
            <div className="flex items-center gap-4 mb-2">
              <button
                onClick={scrollPrev}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00d8ff]/30 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-md group"
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={scrollNext}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00d8ff]/30 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-md group"
              >
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="flex justify-center gap-[0.35rem]">
              {features.map((_, index) => (
                <div key={index} className={`h-[3px] rounded-full transition-all duration-500 ${index === selectedIndex ? "w-8 bg-[#00d8ff] shadow-[0_0_10px_#00d8ff]" : "w-2 bg-white/10"}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesCarousel;