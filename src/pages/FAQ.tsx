import React from "react";
import Navbar from "@/components/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqCategories, type FAQCategory as FAQCategoryType } from "@/data/faqdata";
import HeroImage from "@/assets/image-removebg-preview (14).png";

/**
 * HighlightedText logic preserved:
 * Colors the delimiter (& or ,) AND the text following it teal.
 */
const HighlightedText = ({ text }: { text: string }) => {
  const parts = text.split(/([,&])/g);
  
  return (
    <>
      {parts.map((part, i) => {
        const isDelimiter = part === "&" || part === ",";
        const followsDelimiter = i > 0 && (parts[i - 1] === "&" || parts[i - 1] === ",");
        
        return (
          <span key={i} className={isDelimiter || followsDelimiter ? "text-[#4fb3c4]" : ""}>
            {part}
          </span>
        );
      })}
    </>
  );
};

const FAQCategory = ({ title, highlight, faqs }: FAQCategoryType) => {
  const sectionId = (title + highlight).toLowerCase().replace(/\s+/g, "-");
  const fullTitle = `${title} ${highlight}`;

  return (
    <div className="mb-16 md:mb-32 scroll-mt-24 md:scroll-mt-32" id={sectionId}>
      {/* CATEGORY HEADING: Changed from font-bold to font-medium */}
      <div className="text-center mb-10 md:mb-16">
        <h3 className="text-white text-3xl md:text-5xl lg:text-6xl tracking-tight font-medium font-sans">
          <HighlightedText text={fullTitle} />
        </h3>
      </div>

      <div className="w-full rounded-[1.5rem] md:rounded-[3rem] border border-[#0c7a7f]/30 bg-black/40 backdrop-blur-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${title}-${index}`}
              className="px-6 md:px-12 relative border-none first:pt-6 md:first:pt-10 last:pb-6 md:last:pb-10"
            >
              {/* QUESTION TRIGGER: Changed from font-bold to font-medium */}
              <AccordionTrigger className="text-white hover:text-[#00d8ff] transition-colors text-left py-6 md:py-10 text-lg md:text-2xl lg:text-3xl font-medium font-sans leading-snug">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-white/70 text-base md:text-xl font-normal leading-relaxed font-sans">
                <div className="pb-8 md:pb-12 max-w-4xl opacity-80">
                  {faq.answer}
                </div>
              </AccordionContent>

              {index !== faqs.length - 1 && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-[90%] md:w-[94%] bg-[#0c7a7f]/20" />
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="font-sans text-white selection:bg-[#4fb3c4]/30 overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 sm:pt-40 md:pt-52 pb-16 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
            
            <div className="lg:col-span-7 text-center lg:text-left z-10 order-2 lg:order-1">
              {/* FAQ'S HERO: Changed from font-black to font-medium */}
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium mb-6 tracking-tighter opacity-90 font-sans">
                FAQ's
              </h2>
              
              <div className="inline-block bg-[#0bb7d6] px-8 py-3 rounded-full mb-8">
                <span className="text-black text-xs md:text-base font-bold tracking-[0.15em] uppercase font-sans">
                  Frequently Asked Questions
                </span>
              </div>

              {/* TAGLINE: Changed from font-bold to font-medium */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium mb-10 tracking-tight lg:whitespace-nowrap font-sans">
                Clear <span className="text-[#4fb3c4]">Answers</span>. No <span className="text-[#4fb3c4]">Ambiguity</span>
              </h1>

              <ul className="space-y-4 md:space-y-6 flex flex-col items-center lg:items-start">
                {faqCategories.map((cat, i) => (
                  <li key={i} className="group w-fit">
                    <a 
                      href={`#${(cat.title + cat.highlight).toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center gap-4 text-white/50 group-hover:text-[#00d8ff] transition-all duration-300 transform group-hover:translate-x-2"
                    >
                      <span className="text-[#4fb3c4] text-2xl font-light">→</span>
                      <span className="text-lg md:text-2xl font-light tracking-wide text-white group-hover:text-[#00d8ff] transition-all font-sans">
                        <HighlightedText text={`${cat.title} ${cat.highlight}`} />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full max-w-[300px] sm:max-w-[450px] lg:max-w-[550px] animate-float">
                <img 
                  src={HeroImage} 
                  alt="FAQ Illustration" 
                  className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(12,122,127,0.4)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories Mapping */}
      <section className="relative py-16 md:py-32 z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            {faqCategories.map((category, idx) => (
              <FAQCategory key={idx} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION: Changed from font-bold to font-medium */}
      <section className="relative py-20 md:py-40 z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto p-10 md:p-24 rounded-[2.5rem] md:rounded-[4rem] border border-white/5 bg-white/[0.02] backdrop-blur-md">
            <h2 className="text-white text-3xl sm:text-5xl md:text-7xl font-medium mb-8 tracking-tighter font-sans leading-tight">
              Still Have <span className="text-[#4fb3c4]">Questions?</span>
            </h2>
            <p className="text-white/50 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-sans font-normal">
              Can’t find what you’re looking for? Let’s talk — our team usually responds within 24 hours.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#3b879c] to-[#4fb3c4] text-white rounded-full px-12 md:px-20 py-5 md:py-8 text-xl md:text-2xl font-medium tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(79,179,196,0.5)] active:scale-95 font-sans"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FAQ;