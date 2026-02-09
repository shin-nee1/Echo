import { useCallback, useEffect, useState, useMemo, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, MousePointerClick } from "lucide-react";
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
  const titleParts = sectionTitle.split(highlightedWord);

  const extendedFeatures = useMemo(() => {
    if (!features || features.length === 0) return [];
    let repeated = [...features];
    while (repeated.length < 50) {
      repeated = [...repeated, ...features];
    }
    return repeated.map((f, i) => ({ ...f, uniqueId: `feature-${i}` }));
  }, [features]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
    startIndex: Math.floor(extendedFeatures.length / 2),
    // Changed: Always watch drag so we can detect the "Rotate to Close" intent
    watchDrag: true, 
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const animationFrameRef = useRef<number>(0);

  // Helper function to close the expanded card
  const closeCard = useCallback(() => {
    if (expandedId) {
      setIsClosing(true);
      setExpandedId(null);
      setTimeout(() => setIsClosing(false), 500);
    }
  }, [expandedId]);

  const applyWheelEffect = useCallback((emblaApi: EmblaCarouselType) => {
    const container = emblaApi.rootNode();
    const containerRect = container.getBoundingClientRect();
    const center = containerRect.width / 2;
    const slideNodes = emblaApi.slideNodes();

    slideNodes.forEach((slideNode) => {
      const slideInner = slideNode.querySelector(".slide-inner") as HTMLElement;
      if (!slideInner) return;

      const slideId = slideInner.getAttribute('data-id');
      const isExpanded = expandedId === slideId;

      const slideRect = slideNode.getBoundingClientRect();
      const slideCenter = slideRect.left - containerRect.left + slideRect.width / 2;
      const dist = slideCenter - center;
      
      const ratio = dist / (containerRect.width / 2.5); 
      const absRatio = Math.abs(ratio);

      const baseTranslateY = Math.pow(absRatio, 2) * (window.innerHeight * 0.045); 
      const spacingCorrection = ratio * (absRatio * -18); 

      const rotate = ratio * 12; 
      const baseScale = 1 - Math.min(absRatio * 0.12, 0.25);

      slideInner.style.transition = (isExpanded || isClosing) 
        ? "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)" 
        : "transform 0s";

      slideInner.style.opacity = "1";

      if (isExpanded) {
        slideInner.style.transform = `translate3d(0, 3vh, 0) rotate(0deg) scale(1.05)`;
        slideInner.style.zIndex = "100";
      } else {
        slideInner.style.transform = `translate3d(${spacingCorrection}px, ${baseTranslateY + 40}px, 0) rotate(${rotate}deg) scale(${baseScale})`;
        slideInner.style.zIndex = Math.round(100 - absRatio * 100).toString();
      }
    });

    if (!isReady) setIsReady(true);
  }, [expandedId, isClosing, isReady]);

  useEffect(() => {
    if (!emblaApi) return;

    const animate = () => {
      applyWheelEffect(emblaApi);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Close card when user starts dragging
    emblaApi.on("pointerDown", closeCard);
    
    // Track selected index
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap() % (features.length || 1));
    });

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      emblaApi.off("pointerDown", closeCard);
    };
  }, [emblaApi, applyWheelEffect, features.length, closeCard]);

  const handleCardClick = (id: string, index: number) => {
    if (expandedId === id) {
      closeCard();
    } else {
      // If another card is open, close it first then scroll/open new one
      setExpandedId(null);
      emblaApi?.scrollTo(index);
      // Small delay to ensure the scroll starts before expanding
      setTimeout(() => setExpandedId(id), 50);
    }
  };

  return (
    <section className="py-[4vh] relative overflow-hidden z-10 w-full flex flex-col items-center">
      <div className="w-full px-[2vw] relative z-10">
        
        <div className="flex flex-col items-center text-center mb-[3vh]">
          <h2 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold tracking-tight text-white leading-[1.1]">
            {titleParts[0]}
            <span className="text-[#00d8ff]">{highlightedWord}</span>
            {titleParts[1]}
          </h2>
          <p className="max-w-[32rem] mx-auto mt-[1.5vh] text-white/40 text-[clamp(0.85rem,1.1vw,1rem)] font-light">
            {subheadline}
          </p>
        </div>

        <div className="relative min-h-[35vh] flex items-center justify-center"> 
          <AnimatePresence>
            {!expandedId && (
              <div className="hidden lg:block">
                <button 
                  onClick={() => emblaApi?.scrollPrev()} 
                  className="absolute left-[5vw] top-[45%] z-40 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#00d8ff] hover:text-black transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size="1.2rem" />
                </button>
                <button 
                  onClick={() => emblaApi?.scrollNext()} 
                  className="absolute right-[5vw] top-[45%] z-40 p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#00d8ff] hover:text-black transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight size="1.2rem" />
                </button>
              </div>
            )}
          </AnimatePresence>

          <div className={`w-full overflow-visible transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`} ref={emblaRef}>
            <div className="flex touch-pan-y items-start h-[40vh]"> 
              {extendedFeatures.map((feature, index) => {
                const isExpanded = expandedId === feature.uniqueId;
                return (
                  <div 
                    key={feature.uniqueId} 
                    className="flex-shrink-0 w-[11rem] lg:w-[12rem] xl:w-[13.5rem] 2xl:w-[16rem] px-1"
                  > 
                    <motion.div 
                      layout
                      data-id={feature.uniqueId}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent embla pointerDown from firing immediately
                        handleCardClick(feature.uniqueId, index);
                      }}
                      className={`slide-inner relative cursor-pointer rounded-[0.75rem] border overflow-hidden flex flex-col items-center
                        ${isExpanded ? "border-[#00d8ff]/40 shadow-xl" : "border-white/5 hover:border-white/20"}
                      `}
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        backdropFilter: "blur(8px)",
                        height: isExpanded ? "auto" : "22vh",
                        minHeight: "18vh",
                        transformOrigin: "center bottom"
                      }}
                    >
                      <div className={`w-full flex items-center justify-center p-[6%] ${isExpanded ? "h-[10vh]" : "h-[12vh]"}`}>
                        <img src={feature.imageSrc} alt={feature.title} className="w-full h-full object-contain" />
                      </div>

                      <div className="w-full p-[6%] pt-0 text-center flex flex-col items-center">
                        <h3 className="text-[0.8rem] font-bold text-white mb-[0.2vh] tracking-tight uppercase">
                          {feature.title}
                        </h3>
                        <div className="w-[1rem] h-[1px] bg-[#00d8ff]/40 mb-[0.6vh]" />
                        
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pb-2">
                              <p className="text-white/40 text-[0.65rem] leading-relaxed font-light">{feature.description}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {!isExpanded && (
                          <div className="mt-auto flex items-center gap-1 text-[#00d8ff] text-[0.45rem] uppercase tracking-tighter">
                            <MousePointerClick size="0.6rem" />
                            <span>View</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {!expandedId && (
          <div className="flex justify-center gap-[0.2rem] mt-[-5vh] relative z-20">
            {features.map((_, index) => (
              <div key={index} 
                className={`h-[2px] rounded-full transition-all duration-500 ${index === selectedIndex ? "w-[1.2rem] bg-[#00d8ff]" : "w-[0.3rem] bg-white/10"}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesCarousel;