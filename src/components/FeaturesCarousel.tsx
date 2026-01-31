import { useCallback, useEffect, useState, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { EmblaCarouselType } from "embla-carousel";

export interface Feature {
  title: string;
  description: string;
  imageSrc: string;
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
  const titleParts = sectionTitle.split(highlightedWord);

  /* ---------------- DATA BUFFER (SEAMLESS LOOP) ---------------- */
  const extendedFeatures = useMemo(() => {
    let repeated = [...features];
    while (repeated.length < 30) {
      repeated = [...repeated, ...features];
    }
    return repeated;
  }, [features]);

  /* ---------------- EMBLA CONFIG ---------------- */
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: true,
    skipSnaps: false,
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  /* ---------------- CYLINDER PHYSICS ---------------- */
  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const container = emblaApi.rootNode();
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.width / 2;

    const slideNodes = emblaApi.slideNodes();

    slideNodes.forEach((slideNode) => {
      const slideRect = slideNode.getBoundingClientRect();
      const slideCenter =
        slideRect.left - containerRect.left + slideRect.width / 2;
      const dist = slideCenter - containerCenter;

      const angle = dist / (containerRect.width / 2);
      const absAngle = Math.abs(angle);

      const translateX = angle * -260;
      const translateY = Math.pow(absAngle, 2) * 110;
      const translateZ = Math.pow(absAngle, 1.5) * -750;
      const rotateY = angle * 45;
      const scale = 1 - Math.min(absAngle * 0.18, 0.35);
      const opacity = Math.max(0, 1 - Math.pow(absAngle, 1.4));

      const slideInner = slideNode.querySelector(
        ".slide-inner"
      ) as HTMLElement;

      if (slideInner) {
        slideInner.style.transform = `
          perspective(1000px)
          translate3d(${translateX}px, ${translateY}px, ${translateZ}px)
          rotateY(${rotateY}deg)
          scale(${scale})
        `;
        slideInner.style.opacity = opacity.toString();
        slideInner.style.pointerEvents = opacity < 0.2 ? "none" : "auto";
        slideNode.style.zIndex = Math.round(100 - absAngle * 100).toString();
      }
    });
  }, []);

  /* ---------------- RENDER LOOP ---------------- */
  useEffect(() => {
    if (!emblaApi) return;

    let frameId: number;

    const animate = () => {
      onScroll(emblaApi);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    emblaApi.on("reInit", () => onScroll(emblaApi));
    emblaApi.on("select", () => {
      const rawIndex = emblaApi.selectedScrollSnap();
      setSelectedIndex(rawIndex % features.length);
    });

    return () => cancelAnimationFrame(frameId);
  }, [emblaApi, onScroll, features.length]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi)
        emblaApi.scrollTo(
          extendedFeatures.length / 2 - features.length / 2 + index
        );
    },
    [emblaApi, features.length, extendedFeatures.length]
  );

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/10 rounded-full blur-[140px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-white/10 rounded-full blur-[140px] -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-10 text-white">
          {titleParts[0]}
          <span className="text-primary">{highlightedWord}</span>
          {titleParts[1] || ""}
        </h2>

        {/* Carousel */}
        <div className="relative max-w-[1700px] mx-auto">
          {/* Controls */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary transition"
          >
            <ChevronRight size={24} />
          </button>

          {/* Viewport */}
          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex touch-pan-y items-center">
              {extendedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[390px] px-2"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Card */}
                  <div
                    className="slide-inner flex flex-col rounded-[2rem] overflow-hidden border border-white/10 relative h-[420px] md:h-[500px] will-change-transform"
                    style={{
                      transformStyle: "preserve-3d",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                      backdropFilter: "blur(16px)",
                      boxShadow:
                        "0 10px 40px rgba(0,0,0,0.35) inset, 0 10px 30px rgba(0,0,0,0.25)",
                    }}
                  >
                    {/* Image */}
                    <div className="h-[55%] relative overflow-hidden">
                      <img
                        src={feature.imageSrc}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="h-[45%] p-5 flex flex-col justify-center text-center bg-white/5 border-t border-white/10">
                      <h3 className="text-xl font-bold mb-2 text-white line-clamp-1">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
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
        <div className="flex justify-center gap-3 mt-12">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-500 rounded-full h-1.5 ${
                index === selectedIndex
                  ? "w-10 bg-primary"
                  : "w-3 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
