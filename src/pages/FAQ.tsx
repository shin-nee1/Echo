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
    <div 
      /* UPDATED: Increased scroll-margin-top to account for taller Navbar buffer */
      className="scroll-mt-[clamp(6rem,12vh,10rem)]" 
      id={sectionId}
      style={{ marginBottom: "clamp(4.5rem, 9vw, 7rem)" }}
    >
      <div className="text-center" style={{ marginBottom: "clamp(2rem, 4vh, 3rem)" }}>
        <h3 className="text-white tracking-tight font-medium font-sans leading-[1.1] text-[clamp(1.5rem,3.5vw,2.5rem)]">
          <HighlightedText text={fullTitle} />
        </h3>
      </div>

      <div className="w-full border border-[#0c7a7f]/20 bg-black/40 backdrop-blur-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
           style={{ borderRadius: "clamp(0.5rem, 3vw, 1.3rem)" }}>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${title}-${index}`}
              className="relative border-none"
              style={{ 
                paddingLeft: "clamp(1.2rem, 4vw, 3rem)", 
                paddingRight: "clamp(1.2rem, 4vw, 3rem)",
                paddingTop: index === 0 ? "clamp(0.2rem, 0.8vh, 0.6rem)" : "0"
              }}
            >
              <AccordionTrigger 
                style={{ fontSize: "0.9rem" }}
                className="text-white hover:text-[#00d8ff] transition-colors text-left font-semibold font-sans leading-snug py-[clamp(1rem,2vh,1.6rem)] text-[clamp(0.8rem,1vw,0.9rem)]"
              >
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-white/70 font-normal leading-relaxed font-sans text-[clamp(0.8rem,0.95vw,0.9rem)]">
                <div className="max-w-3xl opacity-80" style={{ paddingBottom: "clamp(1.2rem, 3.5vh, 2.2rem)" }}>
                  {faq.answer}
                </div>
              </AccordionContent>

              {index !== faqs.length - 1 && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-[94%] bg-[#0c7a7f]/10" />
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
    /* Added global padding-bottom to ensure breathing room from components below */
    <div className="font-sans text-white selection:bg-[#4fb3c4]/30 overflow-x-hidden min-h-screen pb-[5vh]">
      <Navbar />

      <section 
        className="relative overflow-hidden w-full flex justify-center" 
        style={{ 
          /* UPDATED: Increased paddingTop (from 4.5rem to 7.5rem) to clear fixed Navbar */
          paddingTop: "clamp(7.5rem, 15vh, 10rem)", 
          paddingBottom: "clamp(2rem, 6vh, 4rem)" 
        }}
      >
        <div className="container px-[6vw] mx-auto max-w-[1300px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-[clamp(2rem,5vw,6rem)]">
            
            <div className="z-10 order-2 lg:order-1 flex flex-col">
              {/* UPDATED: Changed leading-tight to leading-[1.2] to prevent top clipping of FAQ's */}
              <h2 className="text-left font-medium tracking-tighter opacity-90 font-sans leading-[1.2] mb-[clamp(0.2rem,0.8vh,0.5rem)] text-[clamp(2.2rem,5.5vw,4.2rem)]">
                FAQ's
              </h2>
              
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="inline-flex items-center justify-center bg-[#0bb7d6] rounded-full mt-[clamp(0.3rem,0.8vh,0.5rem)] mb-[clamp(0.8rem,2vh,1.5rem)] min-[1450px]:px-6"
                     style={{ padding: "clamp(0.25rem, 0.45vw, 0.4rem) clamp(0.6rem, 1vw, 1.1rem)" }}>
                  <span className="text-black font-bold tracking-[0.08em] uppercase font-sans text-[clamp(0.75rem,0.95vw,1.05rem)] min-[1450px]:text-[1rem]">
                    Frequently Asked Questions
                  </span>
                </div>

                <h1 className="font-medium tracking-tight font-sans leading-[1.1] mb-[clamp(0.8rem,2.5vh,1.5rem)] text-[clamp(1.3rem,3vw,2.2rem)] lg:whitespace-nowrap min-[1450px]:text-[2.8rem]">
                  Clear <span className="text-[#4fb3c4]">Answers</span>. No <span className="text-[#4fb3c4]">Ambiguity</span>
                </h1>

                <div className="w-full flex justify-center lg:justify-start">
                  <ul className="flex flex-col items-start" style={{ gap: "clamp(0.2rem, 0.6vh, 0.4rem)" }}>
                    {faqCategories.map((cat, i) => (
                      <li key={i} className="group w-fit">
                        <a 
                          href={`#${(cat.title + cat.highlight).toLowerCase().replace(/\s+/g, "-")}`}
                          className="flex items-center gap-3 text-white transition-all duration-300 transform lg:group-hover:translate-x-2 group-hover:text-[#00d8ff]"
                        >
                          <span className="text-[#4fb3c4] font-light text-[clamp(0.8rem,1.2vw,1.1rem)]">→</span>
                          <span className="font-light tracking-wide font-sans text-[clamp(0.85rem,1.2vw,1.1rem)]">
                            {`${cat.title} ${cat.highlight}`}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center order-1 lg:order-2">
              <div className="relative w-full animate-float max-w-[clamp(10rem,18vw,15rem)]">
                <img 
                  src={HeroImage} 
                  alt="FAQ Illustration" 
                  className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(12,122,127,0.3)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="relative z-10" style={{ paddingTop: "clamp(1.5rem, 4vh, 2.5rem)", paddingBottom: "clamp(3rem, 10vh, 7rem)" }}>
        <div className="container mx-auto px-[2vw] max-w-[1300px]">
          <div className="mx-auto max-w-[clamp(50rem,60vw,58rem)]">
            {faqCategories.map((category, idx) => (
              <FAQCategory key={idx} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10" 
               /* UPDATED: Ensured bottom padding (clamp(5rem, 12vh, 10rem)) is robust */
               style={{ paddingBottom: "clamp(5rem, 12vh, 10rem)" }}>
        <div className="container mx-auto px-[6vw] text-center max-w-[1300px]">
          <div className="mx-auto border border-white/5 bg-white/[0.02] backdrop-blur-md max-w-[clamp(35rem,65vw,65rem)]"
               style={{ 
                 padding: "clamp(2rem, 6vw, 4rem) clamp(1.2rem, 4vw, 3rem)",
                 borderRadius: "clamp(1.5rem, 3vw, 3rem)" 
               }}>
            <h2 className="text-white font-medium mb-5 tracking-tighter font-sans leading-tight text-[clamp(1.75rem,4.5vw,3.5rem)]">
              Still Have <span className="text-[#4fb3c4]">Questions?</span>
            </h2>
            <p className="text-white/50 mx-auto mb-8 font-sans font-normal max-w-xl text-[clamp(0.95rem,1.2vw,1.15rem)]">
              Can’t find what you’re looking for? Let’s talk — our team usually responds within 24 hours.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#3b879c] to-[#4fb3c4] text-white rounded-full font-medium tracking-tight transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(79,179,196,0.5)] active:scale-95 font-sans"
              style={{ 
                padding: "clamp(0.8rem, 2vh, 1.2rem) clamp(2rem, 5vw, 3.5rem)",
                fontSize: "clamp(0.85rem, 1.1vw, 1.1rem)"
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-1.5%); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default FAQ;