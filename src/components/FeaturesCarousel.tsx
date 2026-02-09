import React, { useCallback, useEffect, useState, useMemo, useRef } from "react";
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
    watchDrag: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const animationFrameRef = useRef<number>(0);
  const isMoving = useRef(false);

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

      if (isExpanded) {
        slideInner.style.zIndex = "100";
        slideInner.style.transform = `translate3d(0, 20px, 0) rotate(0deg) scale(1.05)`;
        slideInner.style.opacity = "1";
        return;
      }

      const slideRect = slideNode.getBoundingClientRect();
      const slideCenter = slideRect.left - containerRect.left + slideRect.width / 2;
      const dist = slideCenter - center;
      
      const ratioDenominator = isCompact ? 1.1 : 2.1;
      const ratio = dist / (containerRect.width / ratioDenominator); 
      const absRatio = Math.abs(ratio);

      const verticalIntensity = isCompact ? 35 : 100;
      const baseTranslateY = Math.pow(absRatio, 2) * verticalIntensity; 
      
      const opacity = isCompact ? Math.max(0, 1 - absRatio * 1.5) : 1;

      const spacingMultiplier = isCompact ? -130 : -65;
      const spacingCorrection = ratio * (absRatio * spacingMultiplier); 
      const rotate = ratio * 15; 
      const baseScale = 1 - Math.min(absRatio * 0.25, 0.4);

      slideInner.style.transition = isClosing ? "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)" : "none";
      slideInner.style.transform = `translate3d(${spacingCorrection}px, ${baseTranslateY + 60}px, 0) rotate(${rotate}deg) scale(${baseScale})`;
      slideInner.style.opacity = opacity.toString();
      slideInner.style.zIndex = Math.round(100 - absRatio * 100).toString();
    });

    if (!isReady) setIsReady(true);
  }, [expandedId, isClosing, isReady, isCompact]);

  useEffect(() => {
    if (!emblaApi) return;
    const animate = () => {
      applyWheelEffect(emblaApi);
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animationFrameRef.current = requestAnimationFrame(animate);

    emblaApi.on("pointerDown", (api) => {
      api.on("pointerUp", () => {
        const engine = (api as any).internalEngine();
        if (engine.clickAllowed && !engine.clickAllowed()) { closeCard(); }
      });
    });

    emblaApi.on("scroll", () => { isMoving.current = true; });
    emblaApi.on("settle", () => { isMoving.current = false; });
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap() % (features.length || 1));
    });

    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [emblaApi, applyWheelEffect, features.length, closeCard]);

  const handleCardClick = (id: string, index: number) => {
    const internalApi = emblaApi as any;
    if (internalApi && internalApi.internalEngine().clickAllowed) {
        if (!internalApi.internalEngine().clickAllowed()) return;
    }

    if (expandedId === id) {
      closeCard();
    } else {
      setExpandedId(null);
      emblaApi?.scrollTo(index);
      const checkSettle = setInterval(() => {
        if (!isMoving.current) {
          setExpandedId(id);
          clearInterval(checkSettle);
        }
      }, 50);
      setTimeout(() => clearInterval(checkSettle), 1000);
    }
  };

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

        <div className={`relative flex items-center justify-center 
          ${isCompact ? "min-h-[400px] [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]" : "min-h-[550px]"}`}> 
          
          <div className={`w-full overflow-visible transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`} ref={emblaRef}>
            <div className={`flex touch-pan-y items-start ${isCompact ? "h-[360px]" : "h-[500px]"}`}> 
              {extendedFeatures.map((feature, index) => {
                const isExpanded = expandedId === feature.uniqueId;
                return (
                  <div 
                    key={feature.uniqueId} 
                    /* SLIGHTLY REDUCED WIDTH: 14.5rem for a tighter look < 1000px */
                    className={`flex-shrink-0 px-0 ${isCompact ? "w-[14.5rem]" : "w-[13rem] lg:w-[15rem] xl:w-[17.5rem] 2xl:w-[21.7rem]"}`}
                  > 
                    <motion.div 
                      layout
                      transition={{ layout: { duration: 1.1, type: "spring", stiffness: 60, damping: 25 } }}
                      data-id={feature.uniqueId}
                      onClick={(e) => {
                        e.stopPropagation(); 
                        handleCardClick(feature.uniqueId, index);
                      }}
                      className={`slide-inner relative cursor-pointer rounded-[1.6rem] border overflow-hidden flex flex-col justify-between items-center
                        ${isExpanded ? "border-[#00d8ff]/40 shadow-2xl bg-white/[0.08]" : "border-white/5 bg-white/[0.02] hover:border-white/20"}
                      `}
                      style={{
                        backdropFilter: "blur(12px)",
                        willChange: "transform, height, opacity",
                        transition: "height 1.1s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1.1s cubic-bezier(0.2, 0.8, 0.2, 1), background-color 0.3s ease, opacity 0.5s ease",
                        height: isExpanded ? "auto" : (isCompact ? "280px" : "340px"),
                        minHeight: isCompact ? "280px" : "340px",
                        transformOrigin: "center bottom"
                      }}
                    >
                      <div className={`flex-grow flex items-center justify-center w-full ${isCompact ? "p-5" : "p-8"}`}>
                        <img 
                          src={feature.imageSrc} 
                          alt={feature.title} 
                          className={`w-full h-full object-contain pointer-events-none ${isCompact ? "max-h-[110px]" : "max-h-[140px]"}`} 
                        />
                      </div>

                      <div className="w-full p-6 pt-0 text-center flex flex-col items-center bg-gradient-to-t from-black/20 to-transparent">
                        <h3 className={`${isCompact ? "text-[0.75rem]" : "text-[0.85rem]"} font-bold text-white mb-2 tracking-widest uppercase`}>{feature.title}</h3>
                        <div className="w-6 h-[2px] bg-[#00d8ff]/40 mb-3" />
                        
                        <AnimatePresence mode="wait">
                          {isExpanded && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.6 }} className="pb-6">
                              <p className="text-white/60 text-[0.7rem] leading-relaxed font-light px-4">{feature.description}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                        {!isExpanded && (
                          <div className="mt-auto flex items-center gap-2 text-[#00d8ff] text-[0.6rem] uppercase font-bold tracking-widest">
                            <MousePointerClick size="0.75rem" />
                            <span>Details</span>
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
          <div className={`flex justify-center gap-[0.35rem] relative z-20 ${isCompact ? "mt-4" : "mt-4"}`}>
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