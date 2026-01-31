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
    let repeated = [...features];
    while (repeated.length < 30) {
      repeated = [...repeated, ...features];
    }
    return repeated;
  }, [features]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: true,
    skipSnaps: false,
    containScroll: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const container = emblaApi.rootNode();
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.width / 2;
    const slideNodes = emblaApi.slideNodes();

    slideNodes.forEach((slideNode) => {
      const slideRect = slideNode.getBoundingClientRect();
      const slideCenter = slideRect.left - containerRect.left + slideRect.width / 2;
      const dist = slideCenter - containerCenter;

      const angle = dist / (containerRect.width / 2);
      const absAngle = Math.abs(angle);

      const translateX = angle * -260;
      const translateY = Math.pow(absAngle, 2) * 110;
      const translateZ = Math.pow(absAngle, 1.5) * -750;
      const rotateY = angle * 45;
      const scale = 1 - Math.min(absAngle * 0.18, 0.35);
      const opacity = Math.max(0, 1 - Math.pow(absAngle, 1.4));

      const slideInner = slideNode.querySelector(".slide-inner") as HTMLElement;

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
        emblaApi.scrollTo(extendedFeatures.length / 2 - features.length / 2 + index);
    },
    [emblaApi, features.length, extendedFeatures.length]
  );

  return (
    <section className="py-24 relative overflow-hidden bg-[#010a0f]">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00d8ff]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* CENTERED HEADING */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="relative">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              {titleParts[0]}
              <span className="text-[#00d8ff]">{highlightedWord}</span>
              {titleParts[1] || ""}
            </h2>
            {/* Centered Glowing Bar */}
            <div className="mt-8 w-24 h-[4px] bg-[#00d8ff] rounded-full shadow-[0_0_20px_rgba(0,216,255,0.8)] mx-auto" />
          </div>

          <div className="max-w-2xl mt-8">
            <p className="text-white/50 text-lg md:text-xl leading-relaxed font-light">
              {subheadline.split("presence").map((text, i) => (
                <span key={i}>
                  {text}
                  {i === 0 && <span className="text-white/80 font-normal">presence</span>}
                </span>
              ))}
            </p>
          </div>
        </div>

        {/* Carousel Logic */}
        <div className="relative max-w-[1700px] mx-auto">
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#00d8ff] hover:text-[#010a0f] transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-[#00d8ff] hover:text-[#010a0f] transition-all"
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-visible" ref={emblaRef}>
            <div className="flex touch-pan-y items-center">
              {extendedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[390px] px-2"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    className="slide-inner flex flex-col rounded-[2.5rem] overflow-hidden border border-white/10 relative h-[420px] md:h-[500px] will-change-transform"
                    style={{
                      transformStyle: "preserve-3d",
                      background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                      backdropFilter: "blur(16px)",
                      boxShadow: "0 10px 40px rgba(0,0,0,0.35) inset, 0 10px 30px rgba(0,0,0,0.25)",
                    }}
                  >
                    <div className="h-[55%] relative overflow-hidden">
                      <img
                        src={feature.imageSrc}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>

                    <div className="h-[45%] p-6 flex flex-col justify-center text-center bg-white/5 border-t border-white/10">
                      <h3 className="text-xl font-bold mb-3 text-white line-clamp-1 uppercase tracking-wider">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Cyan Indicators */}
        <div className="flex justify-center gap-3 mt-16">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all duration-500 rounded-full h-1.5 ${
                index === selectedIndex
                  ? "w-10 bg-[#00d8ff]"
                  : "w-3 bg-white/10 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;