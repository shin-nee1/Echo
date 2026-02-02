import { useCallback, useEffect, useState, useMemo, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X, MousePointerClick } from "lucide-react";
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
    while (repeated.length < 30) {
      repeated = [...repeated, ...features];
    }
    return repeated.map((f, i) => ({ ...f, uniqueId: `feature-${i}` }));
  }, [features]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
    containScroll: false,
    startIndex: features.length,
    watchDrag: () => !expandedId,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const animationFrameRef = useRef<number>(0);

  const applyWheelEffect = useCallback((emblaApi: EmblaCarouselType) => {
    const container = emblaApi.rootNode();
    const containerRect = container.getBoundingClientRect();
    const center = containerRect.width / 2;
    const slideNodes = emblaApi.slideNodes();

    slideNodes.forEach((slideNode) => {
      const slideInner = slideNode.querySelector(".slide-inner") as HTMLElement;
      const contentLayer = slideNode.querySelector(".content-layer") as HTMLElement;
      
      if (!slideInner) return;

      const slideId = slideInner.getAttribute('data-id');
      const isExpanded = expandedId === slideId;
      const isAnyExpanded = !!expandedId;

      const slideRect = slideNode.getBoundingClientRect();
      const slideCenter = slideRect.left - containerRect.left + slideRect.width / 2;
      const dist = slideCenter - center;
      const ratio = dist / (containerRect.width / 3.5); 
      const absRatio = Math.abs(ratio);

      // --- MATH CONSTANTS ---
      const baseTranslateY = Math.pow(absRatio, 2) * 45; // Arch depth
      const rotate = ratio * 12; // Subtle tilt
      const translateX = ratio * -60; // Tight spacing
      const baseScale = 1 - Math.min(absRatio * 0.1, 0.2);

      // Transition handling: instant for wheel, smooth for expansion/closing
      if (isExpanded || isClosing) {
        slideInner.style.transition = "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), height 0.5s ease, opacity 0.5s ease";
      } else {
        slideInner.style.transition = "transform 0s, height 0.5s ease, opacity 0.5s ease";
      }

      if (isExpanded) {
        slideInner.style.transform = `translate3d(0, -40px, 0) rotate(0deg) scale(1.05)`;
        slideInner.style.opacity = "1";
        slideInner.style.zIndex = "100";
        slideInner.style.filter = "brightness(1.1)";
        slideInner.style.pointerEvents = "auto";
        if (contentLayer) contentLayer.style.opacity = "1";
      } else if (isAnyExpanded) {
        // BACKGROUND CARDS: Stay in place, just fade. No vertical drop.
        slideInner.style.transform = `translate3d(${translateX}px, ${baseTranslateY}px, 0) rotate(${rotate}deg) scale(${baseScale})`;
        slideInner.style.opacity = "0.3"; 
        slideInner.style.zIndex = Math.round(50 - absRatio * 10).toString();
        slideInner.style.filter = "none"; 
        slideInner.style.pointerEvents = "none";
        if (contentLayer) contentLayer.style.opacity = "0";
      } else {
        // DEFAULT WHEEL
        slideInner.style.transform = `translate3d(${translateX}px, ${baseTranslateY}px, 0) rotate(${rotate}deg) scale(${baseScale})`;
        slideInner.style.opacity = Math.max(1 - Math.pow(absRatio, 1.5), 0.3).toString();
        slideInner.style.zIndex = Math.round(100 - absRatio * 100).toString();
        slideInner.style.filter = "none";
        slideInner.style.pointerEvents = "auto";
        if (contentLayer) contentLayer.style.opacity = Math.max(1 - absRatio * 2.5, 0).toString();
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
    emblaApi.on("select", () => setSelectedIndex(emblaApi.selectedScrollSnap() % features.length));
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, [emblaApi, applyWheelEffect, features.length]);

  const handleCardClick = (id: string, index: number) => {
    if (expandedId === id) {
      setIsClosing(true);
      setExpandedId(null);
      setTimeout(() => setIsClosing(false), 500); 
    } else {
      emblaApi?.scrollTo(index);
      setExpandedId(id);
    }
  };

  if (!features || features.length === 0) return null;

  return (
    <section className="py-32 relative overflow-hidden z-10 font-sans">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight font-display italic">
              {titleParts[0]}
              <span className="text-[#00d8ff]">{highlightedWord}</span>
              {titleParts[1]}
            </h2>
            <div className="mt-8 w-24 h-1 bg-[#00d8ff] rounded-full shadow-[0_0_20px_#00d8ff] mx-auto" />
            <p className="max-w-xl mt-8 text-slate-400 text-lg font-light leading-relaxed">
              {subheadline}
            </p>
          </motion.div>
        </div>

        <div className="relative min-h-[850px]"> 
          <AnimatePresence>
            {!expandedId && (
              <>
                <button onClick={() => emblaApi?.scrollPrev()} className="absolute left-2 md:left-10 top-[40%] z-40 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#00d8ff] hover:text-black transition-all backdrop-blur-md">
                  <ChevronLeft size={28} />
                </button>
                <button onClick={() => emblaApi?.scrollNext()} className="absolute right-2 md:right-10 top-[40%] z-40 p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#00d8ff] hover:text-black transition-all backdrop-blur-md">
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </AnimatePresence>

          <div className={`overflow-visible px-[10%] md:px-[20%] transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`} ref={emblaRef}>
            <div className="flex touch-pan-y items-start h-[900px]"> 
              {extendedFeatures.map((feature, index) => {
                const isExpanded = expandedId === feature.uniqueId;
                return (
                  <div key={index} className="flex-shrink-0 w-[280px] md:w-[420px] px-0"> 
                    <motion.div 
                      layout
                      data-id={feature.uniqueId}
                      onClick={() => handleCardClick(feature.uniqueId, index)}
                      className={`slide-inner relative cursor-pointer rounded-[2.5rem] border overflow-hidden flex flex-col items-center
                        ${isExpanded ? "border-[#00d8ff]/50 shadow-[0_0_80px_rgba(0,216,255,0.15)]" : "border-white/10 hover:border-white/30"}
                      `}
                      style={{
                        background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                        backdropFilter: "blur(12px)",
                        height: isExpanded ? "auto" : "550px",
                        minHeight: "550px",
                        transformOrigin: "center bottom"
                      }}
                    >
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                      <motion.div layout className={`w-full flex items-center justify-center p-8 transition-all duration-500 ${isExpanded ? "h-[250px]" : "h-[350px]"}`}>
                        <img src={feature.imageSrc} alt={feature.title} className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(0,216,255,0.1)]" />
                      </motion.div>

                      <div className="content-layer w-full p-8 pt-0 text-center flex flex-col items-center">
                        <motion.h3 layout className="text-2xl font-bold text-white mb-3 tracking-tight uppercase italic font-display">
                          {feature.title}
                        </motion.h3>
                        <motion.div layout className="w-12 h-0.5 bg-[#00d8ff] mb-4" />
                        
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                              <p className="text-slate-400 text-sm leading-relaxed font-light mb-8">{feature.description}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {!isExpanded && (
                          <div className="mt-4 flex items-center gap-2 text-[#00d8ff] text-xs uppercase tracking-widest opacity-60">
                            <MousePointerClick size={14} />
                            <span>Expand</span>
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

        <AnimatePresence>
          {!expandedId && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex justify-center gap-2 mt-[-60px] relative z-20">
              {features.map((_, index) => (
                <button key={index} onClick={() => emblaApi?.scrollTo(extendedFeatures.length / 2 - features.length / 2 + index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${index === selectedIndex ? "w-12 bg-[#00d8ff]" : "w-2 bg-white/10"}`}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturesCarousel;