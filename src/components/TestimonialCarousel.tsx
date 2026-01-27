import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "./SectionHeader";

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  title?: string;
  highlight?: string;
  autoPlayInterval?: number;
}

const TestimonialCarousel = ({
  testimonials,
  title = "Testimonials",
  highlight = "",
  autoPlayInterval = 5000,
}: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goToSlide = useCallback((index: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    goToSlide(newIndex, "left");
  }, [currentIndex, testimonials.length, goToSlide]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    goToSlide(newIndex, "right");
  }, [currentIndex, testimonials.length, goToSlide]);

  // Auto-play
  useEffect(() => {
    if (autoPlayInterval <= 0) return;
    const timer = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlayInterval, goToNext]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <SectionHeader title={title} highlight={highlight} />

        <div className="max-w-3xl mx-auto relative">
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 w-10 h-10 rounded-full border border-border/50 hover:border-cyan/50 hover:bg-cyan/10"
          >
            <ChevronLeft className="w-5 h-5 text-cyan" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 w-10 h-10 rounded-full border border-border/50 hover:border-cyan/50 hover:bg-cyan/10"
          >
            <ChevronRight className="w-5 h-5 text-cyan" />
          </Button>

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <div
              className={`card-glass p-8 md:p-12 text-center transition-all duration-300 ${
                isAnimating
                  ? direction === "right"
                    ? "opacity-0 translate-x-8"
                    : "opacity-0 -translate-x-8"
                  : "opacity-100 translate-x-0"
              }`}
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-6 overflow-hidden">
                {currentTestimonial.avatar ? (
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </div>

              {/* Quote */}
              <blockquote className="text-lg md:text-xl text-foreground/90 italic mb-6 leading-relaxed">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author */}
              <div>
                <div className="font-display font-semibold text-foreground">
                  {currentTestimonial.name}
                </div>
                <div className="text-cyan text-sm">{currentTestimonial.role}</div>
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() =>
                  goToSlide(index, index > currentIndex ? "right" : "left")
                }
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-cyan w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;