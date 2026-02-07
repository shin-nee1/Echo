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
    <section className="relative bg-transparent overflow-hidden font-sans z-10" style={{ padding: "clamp(3rem, 8vh, 6rem) 0" }}>
      <div className="mx-auto relative z-10 w-full">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center" style={{ marginBottom: "clamp(2rem, 5vh, 4rem)" }}>
          <h2 
            className="text-white font-bold tracking-tight leading-[1.1]"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            Frequently Asked <span className="text-[#43c6e4]">Questions</span>
          </h2>
        </div>

        {/* ACCORDION CONTAINER - Adjusted for global 15% padding */}
        <div className="mx-auto w-full" style={{ maxWidth: "850px" }}>
          <div 
            className="w-full border border-[#0c7a7f]/30 bg-black/40 backdrop-blur-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            style={{ borderRadius: "1rem" }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="relative border-b-0"
                  style={{ 
                    paddingLeft: "clamp(1.25rem, 3vw, 2.5rem)", 
                    paddingRight: "clamp(1.25rem, 3vw, 2.5rem)",
                    paddingTop: index === 0 ? "0.75rem" : "0px",
                    paddingBottom: index === faqs.length - 1 ? "0.75rem" : "0px"
                  }}
                >
                  <AccordionTrigger 
                    className="text-white hover:text-[#43c6e4] transition-colors text-left font-medium border-none outline-none focus:outline-none py-0"
                    style={{ 
                      fontSize: "clamp(0.95rem, 1.2vw, 1.2rem)", 
                      paddingTop: "clamp(1.25rem, 2vh, 1.75rem)", 
                      paddingBottom: "clamp(1.25rem, 2vh, 1.75rem)",
                      lineHeight: "1.4" 
                    }}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  
                  <AccordionContent className="text-white/70 overflow-hidden">
                    <div 
                      className="leading-relaxed"
                      style={{ 
                        fontSize: "clamp(0.875rem, 1vw, 1rem)", 
                        paddingBottom: "1.5rem",
                        lineHeight: "1.6"
                      }}
                    >
                      {faq.answer}
                    </div>
                  </AccordionContent>

                  {/* CUSTOM DIVIDER */}
                  {index !== faqs.length - 1 && (
                    <div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#0c7a7f]/20" 
                      style={{ height: "1px", width: "95%" }}
                    />
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* VIEW ALL BUTTON */}
          <div className="flex justify-center" style={{ marginTop: "3rem" }}>
            <Button
              asChild
              variant="cyan"
              className="rounded-full flex items-center justify-center transition-transform hover:scale-105"
              style={{ 
                fontSize: "0.95rem",
                padding: "0 2.5rem",
                height: "3.25rem",
                width: "fit-content"
              }}
            >
              <Link to="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;