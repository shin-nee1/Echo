import React from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";

const faqs = [
  {
    question: "Do you work with both new and established businesses?",
    answer: "Yes, we work with businesses of all sizes, from early-stage startups to established enterprises, tailoring our approach to your specific stage of growth.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope. A typical branding project takes 4–6 weeks, while comprehensive web development can take 8–12 weeks.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Absolutely. We offer various maintenance and support packages to ensure your digital products remain secure, up-to-date, and performing optimally.",
  },
  {
    question: "How does pricing work?",
    answer: "We offer project-based pricing tailored to your specific needs. After our initial consultation, we provide a detailed proposal outlining the scope and investment.",
  },
  {
    question: "Can you work with existing brand guidelines?",
    answer: "Yes, we’re happy to work within your existing brand framework or help you evolve it to meet new goals.",
  },
];

const FAQ: React.FC = () => {
  return (
    <section className="relative bg-transparent overflow-hidden font-sans z-10 faq-section">
      <div className="mx-auto relative z-10 w-full px-[5vw]">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center faq-header-wrapper">
          <h2 className="text-white font-bold tracking-tight leading-[1.1] faq-main-title">
            Frequently Asked <span className="text-[#43c6e4]">Questions</span>
          </h2>
        </div>

        {/* ACCORDION CONTAINER */}
        <div className="mx-auto w-full faq-card-container">
          {/* Removed shadow-[0_20px_50px_rgba(0,0,0,0.5)] to remove glow */}
          <div className="w-full border border-[#0c7a7f]/30 bg-black/40 backdrop-blur-2xl overflow-hidden faq-glass-card">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="relative border-b-0 faq-item"
                >
                  <AccordionTrigger 
                    className="text-white hover:text-[#43c6e4] transition-colors text-left font-medium border-none outline-none focus:outline-none faq-trigger"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  
                  <AccordionContent className="text-white/70 overflow-hidden">
                    <div className="leading-relaxed faq-content-text">
                      {faq.answer}
                    </div>
                  </AccordionContent>

                  {/* CUSTOM DIVIDER */}
                  {index !== faqs.length - 1 && (
                    <div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#0c7a7f]/20 faq-divider" 
                    />
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* VIEW ALL BUTTON */}
          <div className="flex justify-center faq-button-wrapper">
            <Button
              asChild
              variant="cyan"
              className="rounded-full flex items-center justify-center transition-transform hover:scale-105 faq-all-btn"
            >
              <Link to="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. MOBILE (< 768px) */
        .faq-section { padding: 0rem 0; }
        .faq-header-wrapper { margin-bottom: 2rem; }
        .faq-main-title { font-size: 26.5px; }
        .faq-card-container { max-width: 100%; }
        .faq-glass-card { border-radius: 1rem; min-height: 250px; } /* Increased min-height */
        .faq-item { padding: 0 1.25rem; }
        .faq-trigger { font-size: 12px; padding: 1.25rem 0; line-height: 1.4; }
        .faq-content-text { font-size: 11px; padding-bottom: 1.25rem; line-height: 1.6; }
        .faq-divider { height: 1px; width: 90%; }
        .faq-button-wrapper { margin-top: 1.5rem; }
        .faq-all-btn { height: 2.5rem; padding: 0 1.5rem; font-size: 0.75rem; }

        /* 2. TABLET (768px - 1023px) */
        @media (min-width: 768px) {
          .faq-section { padding: 0rem 0; }
          .faq-main-title { font-size: 38px; }
          .faq-card-container { max-width: 550px; }
          .faq-glass-card { min-height: 350px; } /* Increased min-height */
          .faq-item { padding: 0 2rem; }
          .faq-trigger { font-size: 13px; padding: 1.5rem 0; }
          .faq-content-text { font-size: 12px; padding-bottom: 1.5rem; }
        }

        /* 3. STANDARD LAPTOP (1024px - 1439px) */
        @media (min-width: 1024px) {
          .faq-section { padding: 0rem 0; }
          .faq-header-wrapper { margin-bottom: 3rem; }
          .faq-main-title { font-size: 45px; }
          .faq-card-container { max-width: 750px; }
          .faq-glass-card { min-height: 400px; } /* Increased min-height */
          .faq-item { padding: 0 2.5rem; }
          .faq-trigger { font-size: 14px; padding: 1.75rem 0; }
          .faq-content-text { font-size: 13px; }
          .faq-button-wrapper { margin-top: 1.5rem; }
        }

        /* 4. LARGE DESKTOP / 1440p (1440px - 2559px) */
        @media (min-width: 1440px) {
          .faq-main-title { font-size: 48px; }
          .faq-card-container { max-width: 950px; }
          .faq-glass-card { min-height: 450px; } /* Increased min-height */
          .faq-trigger { font-size: 15px; }
          .faq-content-text { font-size: 14px; }
          .faq-all-btn { height: 3rem; padding: 0 2rem; font-size: 0.85rem; }
        }

        /* 5. 4K MONITORS (2560px+) */
        @media (min-width: 2560px) {
          .faq-section { padding: 2rem 0; }
          .faq-header-wrapper { margin-bottom: 5rem; }
          .faq-main-title { font-size: 85px; }
          .faq-card-container { max-width: 1650px; }
          .faq-glass-card { border-radius: 2rem; min-height: 600px; } /* Increased min-height */
          .faq-item { padding: 0 4rem; }
          .faq-trigger { font-size: 28px; padding: 3.5rem 0; }
          .faq-content-text { font-size: 27px; padding-bottom: 3.5rem; }
          .faq-button-wrapper { margin-top: 6rem; }
          .faq-all-btn { height: 5rem; padding: 0 5.5rem; font-size: 1.6rem; }
          .faq-button-wrapper { margin-top: 2.5rem; }
        }
      `}} />
    </section>
  );
};

export default FAQ;