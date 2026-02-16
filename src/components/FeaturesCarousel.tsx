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
    while (repeated.length < 10) {
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

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit({ watchDrag: !expandedId });
  }, [emblaApi, expandedId]);

  const scrollPrev = useCallback(() => {
    if (emblaApi && !expandedId) emblaApi.scrollPrev();
  }, [emblaApi, expandedId]);

  const scrollNext = useCallback(() => {
    if (emblaApi && !expandedId) emblaApi.scrollNext();
  }, [emblaApi, expandedId]);

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

      const ratioDenominator = isCompact ? containerRect.width * 0.75 : containerRect.width * 0.65;
      const ratio = dist / ratioDenominator;
      const absRatio = Math.abs(ratio);

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
        const verticalIntensity = isCompact ? 80 : 180; 
        const translateY = Math.pow(clampedRatio, 2) * verticalIntensity;
        const rotate = ratio * 25; 
        const scale = 1 - Math.min(absRatio * 0.25, 0.4);

        transform = `translate3d(0, ${translateY + 20}px, 0) rotate(${rotate}deg) scale(${scale})`;
        opacity = "0.3"; 
        zIndex = "1";
        grayscale = "100%";
      } else {
        const clampedRatio = Math.min(absRatio, 2.2);
        const verticalIntensity = isCompact ? 50 : 110; 
        const translateY = Math.pow(clampedRatio, 2) * verticalIntensity;
        const rotate = ratio * 18; 
        const scale = 1 - Math.min(absRatio * 0.15, 0.25);

        opacity = "1"; 
        transform = `translate3d(0, ${translateY + 20}px, 0) rotate(${rotate}deg) scale(${scale})`;
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
    if (expandedId === id) {
        setExpandedId(null);
    } else {
      emblaApi.scrollTo(index);
      setExpandedId(id);
    }
  }, [emblaApi, expandedId]);

  return (
    <section className={`relative overflow-hidden z-10 w-full flex flex-col items-center ${isCompact ? "py-6" : "py-12"}`}>
      <div className="w-full px-[2vw] relative z-10 flex flex-col items-center">

        <div className={`flex flex-col items-center text-center ${isCompact ? "mb-6" : "mb-8"}`}>
          <h2 className={`${isCompact ? "text-3xl" : "text-[clamp(2.5rem,5vw,4rem)]"} font-bold tracking-tight text-white leading-[1.1]`}>
            {titleParts[0]}
            <span className="text-[#00d8ff]">{highlightedWord}</span>
            {titleParts[1]}
          </h2>
        </div>

        {/* Adjusted min-height for the reduced card heights */}
        <div className={`relative w-full flex flex-col items-center justify-center 
          ${isCompact ? "min-h-[500px]" : "min-h-[680px]"}
          ${isCompact ? "[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]" : ""}`}>

          <div className="w-full overflow-visible" ref={emblaRef}>
            <div className={`flex touch-pan-y items-start pb-8 ${isCompact ? "min-h-[440px]" : "min-h-[620px]"}`}>
              {extendedFeatures.map((feature, index) => {
                const isExpanded = expandedId === feature.uniqueId;
                
                /**
                 * HEIGHT REDUCTIONS:
                 * imageHeight: 300 -> 240 (Compact), 420 -> 340 (Desktop)
                 * originalHeight: 420 -> 350 (Compact), 580 -> 480 (Desktop)
                 */
                const imageHeight = isCompact ? 240 : 340;
                const originalHeight = isCompact ? 350 : 480;

                return (
                  <div
                    key={feature.uniqueId}
                    className={`flex-shrink-0 px-0 relative ${isCompact ? "w-[18rem] -ml-6" : "w-[22rem] -ml-16 lg:w-[24rem] xl:w-[26rem]"}`}
                    style={{ perspective: "1000px" }}
                  >
                    <div
                      data-id={feature.uniqueId}
                      onClick={() => handleCardClick(feature.uniqueId, index)}
                      className="slide-inner relative cursor-pointer flex flex-col items-center justify-center w-full"
                      style={{ transformOrigin: "center center" }}
                    >
                        <motion.div 
                            layout
                            className="relative w-full overflow-hidden flex flex-col isolate z-20 rounded-[2rem] border transition-colors duration-500 backdrop-blur-xl"
                            animate={{
                                backgroundColor: isExpanded ? "#0a0a0a" : "rgb(0, 0, 0)", 
                                borderColor: isExpanded ? "rgba(0, 216, 255, 0.6)" : "rgba(255, 255, 255, 0.15)",
                                boxShadow: isExpanded ? "0 0 50px rgba(0, 216, 255, 0.15)" : "0 4px 15px rgba(0,0,0,0.5)",
                                height: isExpanded ? "auto" : originalHeight, 
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            style={{ minHeight: originalHeight }}
                        >
                            <div 
                                className="relative w-full overflow-hidden flex-shrink-0"
                                style={{ height: imageHeight }}
                            >
                                <img
                                    src={feature.imageSrc}
                                    alt={feature.title}
                                    className="w-full h-full object-contain drop-shadow-xl transition-transform duration-700"
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>

                            <div className="flex flex-col flex-grow w-full p-5 text-center justify-center">
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
                                            transition={{ duration: 0.4 }}
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {!expandedId && (
          <div className="flex flex-col items-center gap-4 relative z-20 mt-2">
            <div className="flex items-center gap-4 mb-2">
              <button onClick={scrollPrev} className="p-3.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white transition-all backdrop-blur-md group">
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button onClick={scrollNext} className="p-3.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white transition-all backdrop-blur-md group">
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
            <div className="flex justify-center gap-[0.4rem]">
              {features.map((_, index) => (
                <div key={index} className={`h-[3.5px] rounded-full transition-all duration-500 ${index === selectedIndex ? "w-10 bg-[#00d8ff] shadow-[0_0_10px_#00d8ff]" : "w-2.5 bg-white/10"}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesCarousel;