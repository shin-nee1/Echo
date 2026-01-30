import React from 'react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";

interface FAQProps {
  question: string;
  answer: string;
}

const faqs: FAQProps[] = [
  {
    question: "Do you work with both new and established businesses?",
    answer: "Yes, we work with businesses of all sizes, from early-stage startups to established enterprises, tailoring our approach to your specific stage of growth."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope. A typical branding project takes 4-6 weeks, while comprehensive web development can take 8-12 weeks."
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Absolutely. We offer various maintenance and support packages to ensure your digital products remain secure, up-to-date, and performing optimally."
  },
  {
    question: "How does pricing work?",
    answer: "We offer project-based pricing tailored to your specific needs. After our initial consultation, we provide a detailed proposal outlining the scope and investment."
  },
  {
    question: "Can you work with existing brand guidelines?",
    answer: "Yes, we are happy to work within your existing brand framework or help you evolve it to meet new goals."
  }
];

const FAQ: React.FC = () => {
  return (
    <section className="py-32 relative bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* MATCHING BRAND HEADER */}
        <div className="flex flex-col md:flex-row md:items-start lg:items-center gap-6 md:gap-12 mb-20 relative">
          <div className="relative shrink-0">
            <h2 className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter leading-none uppercase">
              Common <span className="text-[#00d8ff]">Questions</span>
            </h2>
            
            {/* SIGNATURE GLOW BAR */}
            <div className="absolute -bottom-6 left-0 w-24 h-1.5 bg-[#00d8ff] rounded-full shadow-[0_0_20px_rgba(0,216,255,0.6)]" />
          </div>

          {/* BRAND RHYTHM TEXT */}
          <p className="text-slate-400 text-lg md:text-xl font-normal max-w-sm leading-snug pt-1 md:pt-2 border-l border-white/10 md:pl-8">
            Transparent answers for <br className="hidden md:block" />
            seamless partnerships.
          </p>
        </div>

        {/* FAQ ACCORDION */}
        <div className="max-w-4xl">
          <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border-b border-white/5 last:border-0 px-8 transition-all duration-300 hover:bg-white/[0.02]"
                >
                  <AccordionTrigger className="text-xl md:text-2xl font-bold text-white text-left hover:text-[#00d8ff] hover:no-underline transition py-8 tracking-tight">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-slate-400 text-lg md:text-xl font-normal leading-relaxed pb-8 opacity-80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* UPDATED CTA BUTTON */}
          <div className="mt-12">
            <Button 
              size="lg" 
              className="bg-[#00d8ff] text-black hover:bg-[#00d8ff]/90 px-10 py-7 rounded-xl text-lg font-black uppercase tracking-tight shadow-[0_0_25px_rgba(0,216,255,0.3)] transition-all hover:scale-105"
              asChild
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