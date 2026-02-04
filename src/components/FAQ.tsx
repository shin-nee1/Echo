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
    <section className="relative py-24 md:py-28 bg-transparent overflow-hidden font-sans z-10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-white text-5xl md:text-6xl font-bold tracking-tight leading-none text-center">
            Frequently Asked <span className="text-[#43c6e4]">Questions</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="w-full rounded-[2.5rem] border border-[#0c7a7f]/30 bg-black/40 backdrop-blur-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  // UPDATED: Added first:pt-8 and last:pb-8
                  // This pads the question away from the top/bottom container edges 
                  // without changing the gap between the questions themselves.
                  className="px-8 relative border-b-0 first:pt-8 last:pb-8" 
                >
                  <AccordionTrigger className="text-white hover:text-[#00d8ff] transition-colors py-6 text-left text-lg md:text-xl font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  
                  <AccordionContent className="text-white/70 text-base md:text-lg leading-relaxed">
                    <div className="pb-8">
                      {faq.answer}
                    </div>
                  </AccordionContent>

                  {index !== faqs.length - 1 && (
                    <div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-[92%] bg-[#0c7a7f]/20" 
                    />
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 flex justify-center">
            <Button
              size="hero"
              variant="cyan"
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