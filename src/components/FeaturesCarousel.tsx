import { useCallback, useEffect, useState, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { EmblaCarouselType } from "embla-carousel";

interface Feature {
  title: string;
  description: string;
  imageSrc: string;
}

interface FeaturesCarouselProps {
  sectionTitle: string;
  highlightedWord: string;
  features: Feature[];
}

const FeaturesCarousel = ({ sectionTitle, highlightedWord, features }: FeaturesCarouselProps) => {
  const titleParts = sectionTitle.split(highlightedWord);

  // 1. DATA BUFFER: Large buffer for seamless looping
  const extendedFeatures = useMemo(() => {
    let repeated = [...features];
    // Create a massive buffer (30+ items) so the loop point is unreachable in normal usage
    while (repeated.length < 30) {
      repeated = [...repeated, ...features];
    }
    return repeated;
  }, [features]);

  // 2. EMBLA CONFIG (Tuned for "Flow State")
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: true,       // Free spinning
    skipSnaps: false,
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  // 3. CYLINDRICAL PHYSICS ENGINE
  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const scrollContainer = emblaApi.rootNode();
    const containerRect = scrollContainer.getBoundingClientRect();
    const containerCenter = containerRect.width / 2;

    const slideNodes = emblaApi.slideNodes();

    slideNodes.forEach((slideNode) => {
      // 1. Get physical position
      const slideRect = slideNode.getBoundingClientRect();
      const slideCenter = slideRect.left - containerRect.left + slideRect.width / 2;
      const dist = slideCenter - containerCenter;

      // 2. Calculate "Angle" on the cylinder
      // We normalize distance so that the screen width is roughly 180 degrees of the wheel
      const angle = dist / (containerRect.width / 2); // -1 (left) to 1 (right)
      const absAngle = Math.abs(angle);

      // --- SMOOTH MATH (No Hard Cuts) ---
      
      // TIGHTER SPREAD:
      // We pull the cards horizontally closer by opposing the distance.
      // 150px pull-in at the edges
      const translateX = angle * -150; 

      // ARCH (Y-Axis):
      // Smooth parabola. 120px drop at the edges.
      const translateY = Math.pow(absAngle, 2) * 120;

      // DEPTH (Z-Axis):
      // Push back significantly to create the "fan" depth.
      const translateZ = Math.pow(absAngle, 1.5) * -700;

      // ROTATION:
      // Rotate based on the angle. 45 degrees max rotation.
      const rotateY = angle * 45;

      // SCALE:
      // Smooth scaling down to 0.8
      const scale = 1 - Math.min(absAngle * 0.2, 0.4);

      // OPACITY:
      // Soft fade out. Instead of cutting to 0, we fade smoothly.
      // This eliminates the flickering glitch.
      const opacity = Math.max(0, 1 - Math.pow(absAngle, 1.5));

      const slideInner = slideNode.querySelector('.slide-inner') as HTMLElement;

      if (slideInner) {
        // GPU Acceleration
        slideInner.style.transform = `
          perspective(1000px)
          translate3d(${translateX}px, ${translateY}px, ${translateZ}px)
          rotateY(${rotateY}deg)
          scale(${scale})
        `;
        slideInner.style.opacity = opacity.toString();
        
        // Disable pointer events on almost-invisible cards to prevent accidental clicks
        slideInner.style.pointerEvents = opacity < 0.2 ? "none" : "auto";
        
        // Dynamic Z-Index for proper layering
        slideNode.style.zIndex = Math.round(100 - absAngle * 100).toString();
      }
    });
  }, []);

  // 4. RENDER LOOP
  useEffect(() => {
    if (!emblaApi) return;

    let frameId: number;
    const animate = () => {
      onScroll(emblaApi);
      frameId = requestAnimationFrame(animate);
    };

    // Start the physics loop
    animate();

    // Re-init on resize
    emblaApi.on("reInit", () => onScroll(emblaApi));
    
    // Sync dots (Modulo arithmetic to map clones to originals)
    emblaApi.on("select", () => {
      const rawIndex = emblaApi.selectedScrollSnap();
      setSelectedIndex(rawIndex % features.length);
    });

    return () => cancelAnimationFrame(frameId);
  }, [emblaApi, onScroll, features.length]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => {
    // Jump to the middle set of clones for stability
    if (emblaApi) emblaApi.scrollTo(extendedFeatures.length / 2 - (features.length / 2) + index);
  }, [emblaApi, features.length, extendedFeatures.length]);

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-6">
          {titleParts[0]}
          <span className="text-primary">{highlightedWord}</span>
          {titleParts[1] || ""}
        </h2>

        {/* CAROUSEL CONTAINER */}
        <div className="relative max-w-[1400px] mx-auto">
          {/* Controls */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-xl"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-xl"
          >
            <ChevronRight size={24} />
          </button>

          {/* Viewport */}
          <div className="overflow-visible" ref={emblaRef}>
            {/* Use touch-action: pan-y to allow vertical scrolling of the page,
               but capture horizontal swipes for the carousel 
            */}
            <div className="flex touch-pan-y items-center">
              {extendedFeatures.map((feature, index) => (
                <div
                  key={index}
                  // BASE WIDTH:
                  // We set a small base width (240px) to naturally pack them tight.
                  // The 3D transform will scale/position them visually.
                  className="flex-shrink-0 w-[240px] px-2"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* INNER CARD */}
                  <div
                    className="slide-inner flex flex-col rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl relative h-[420px] md:h-[500px] will-change-transform"
                    style={{
                      transformStyle: "preserve-3d",
                      backgroundColor: "rgba(255, 255, 255, 0.08)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {/* Image */}
                    <div className="h-[60%] relative overflow-hidden">
                      <img
                        src={feature.imageSrc}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="h-[40%] p-5 flex flex-col justify-center text-center bg-white/5 border-t border-white/10">
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-white line-clamp-1">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 text-xs md:text-sm leading-relaxed line-clamp-3">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-500 rounded-full h-1.5 ${
                index === selectedIndex
                  ? "w-8 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;