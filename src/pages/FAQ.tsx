import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      title: "General",
      highlight: "Questions",
      faqs: [
        { 
          question: "What services does Echo & Impact offer?", 
          answer: "We offer a comprehensive suite of digital services including brand design, UI/UX design, web and mobile development, e-commerce solutions, SEO, social media marketing, and growth strategies. Our full-service approach ensures all your digital needs are covered under one roof." 
        },
        { 
          question: "How long does a typical project take?", 
          answer: "Project timelines vary based on scope and complexity. A simple website takes 2-4 weeks, while complex applications may take 2-3 months. We'll provide a detailed timeline during our initial consultation." 
        },
        { 
          question: "What is your pricing structure?", 
          answer: "We offer flexible pricing based on project requirements. We work with fixed-price projects, retainers, and hourly rates depending on what suits your needs best. Contact us for a custom quote tailored to your specific requirements." 
        },
        { 
          question: "Do you work with startups or only established businesses?", 
          answer: "We work with businesses of all sizes! From early-stage startups to established enterprises, we tailor our approach to match your specific needs, goals, and budget." 
        },
      ]
    },
    {
      title: "Design",
      highlight: "Services",
      faqs: [
        { question: "Can you work with our existing brand guidelines?", answer: "Absolutely! We can work within your existing brand framework or help you develop new guidelines from scratch. Our team excels at both maintaining brand consistency and creating fresh visual identities." },
        { question: "What design tools do you use?", answer: "We use industry-standard tools including Figma, Adobe Creative Suite, and Sketch. We're flexible and can adapt to your preferred tools for seamless collaboration." },
        { question: "Do you provide design revisions?", answer: "Yes, all our design packages include revision rounds. The exact number depends on your project scope, but we always work closely with you to ensure the final result exceeds expectations." },
      ]
    },
    {
      title: "Development",
      highlight: "Services",
      faqs: [
        { question: "What technologies do you specialize in?", answer: "We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various cloud platforms. For mobile, we work with React Native and native iOS/Android development." },
        { question: "Do you offer ongoing support and maintenance?", answer: "Yes, we offer comprehensive maintenance packages to keep your digital products running smoothly, securely, and up-to-date. Our support plans range from basic updates to full 24/7 coverage." },
        { question: "Can you integrate with existing systems?", answer: "Yes, we have extensive experience integrating with CRMs, payment gateways, ERPs, and custom APIs. We'll assess your current tech stack and create seamless integrations." },
      ]
    },
    {
      title: "Marketing",
      highlight: "& Growth",
      faqs: [
        { question: "How do you measure marketing success?", answer: "We track key performance indicators (KPIs) specific to your goals—whether that's traffic, conversions, engagement, or ROI. You'll receive regular reports with actionable insights and recommendations." },
        { question: "Do you offer social media management?", answer: "Yes, we provide full social media management including content creation, scheduling, community management, and paid advertising across all major platforms." },
        { question: "How quickly can I expect to see marketing results?", answer: "Results vary by strategy. SEO typically takes 3-6 months to show significant results, while paid advertising can generate leads immediately. We'll set realistic expectations during our strategy session." },
      ]
    },
  ];

  const FAQCategory = ({ title, highlight, faqs }: { title: string; highlight: string; faqs: { question: string; answer: string }[] }) => (
    <div className="mb-16">
      <h3 className="section-title text-2xl md:text-3xl font-bold mb-8">
        {title} <span className="text-cyan glow-text">{highlight}</span>
      </h3>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`} 
            className="card-glass border-border/50 px-6 hover-glow"
          >
            <AccordionTrigger className="text-left font-display hover:text-cyan hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[150px] opacity-20" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Frequently Asked <span className="text-cyan">Questions</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and how we can help your business grow.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, idx) => (
              <FAQCategory key={idx} title={category.title} highlight={category.highlight} faqs={category.faqs} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Still Have <span className="text-cyan">Questions?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Can't find what you're looking for? Our team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-cyan text-background hover:bg-cyan/90 glow-cyan px-8 h-11 rounded-md font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
