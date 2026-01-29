import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
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
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-display">
            Frequently Asked <span className="text-cyan">Questions</span>
          </h2>
        </div>

        {/* FAQ Card */}
        <div className="max-w-3xl mx-auto">
          <div className="card-glass rounded-2xl overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border-b border-white/10 last:border-0 px-6"
                >
                  <AccordionTrigger className="text-lg font-medium text-white hover:text-cyan transition py-6">
                    {faq.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 text-center">
            <Button variant="cyan" size="lg" asChild>
              <Link to="/faq">Show All FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default FAQ;