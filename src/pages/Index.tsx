import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import InfoSection from "@/components/InfoSection";
import WhyUsSection from "@/components/WhyUsSection";
import { Button } from "@/components/ui/button";
import { Code, Palette, TrendingUp, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const services = [
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX, brand identity, and visual systems",
      href: "/design",
    },
    {
      icon: Code,
      title: "Develop",
      description: "Web & mobile apps, scalable platforms",
      href: "/develop",
    },
    {
      icon: TrendingUp,
      title: "Market",
      description: "SEO, growth strategy, and performance marketing",
      href: "/market",
    },
  ];


  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Simple websites take 2–4 weeks. Larger platforms can take 2–3 months.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes. We provide maintenance, monitoring, and feature upgrades.",
    },
    {
      question: "How does pricing work?",
      answer:
        "Pricing is custom and transparent based on your requirements.",
    },
    {
      question: "Can you work with existing brand guidelines?",
      answer:
        "Absolutely — or we can build a brand system from scratch.",
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      quote:
        "Echo & Impact completely transformed our digital presence.",
    },
    {
      name: "Sarah Johnson",
      role: "Founder, StartupXYZ",
      quote:
        "Clear communication and premium quality throughout.",
    },
    {
      name: "Mike Williams",
      role: "Marketing Director",
      quote:
        "Our conversions doubled within months.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] lg:min-h-screen py-16 lg:py-24 overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan/10 via-transparent to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[clamp(300px,50vw,700px)] h-[clamp(300px,50vw,700px)] bg-cyan/20 rounded-full blur-[180px] opacity-40" />

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-display font-bold leading-tight mb-6 text-[clamp(2.5rem,5vw,4rem)]">
            We Create The <span className="text-cyan">Echo</span>, <br />
            You Make The <span className="text-cyan">Impact</span>.
          </h1>
          <p className="text-muted-foreground text-[clamp(1rem,2.5vw,1.25rem)] max-w-2xl mx-auto mb-10">
            Design. Development. Marketing. Powerful digital experiences that
            drive real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-cyan text-background px-10">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan/50 text-cyan px-10"
            >
              View Our Work
            </Button>
          </div>

          {/* Hero visual */}
          <div className="mt-12 max-w-[clamp(20rem,85vw,64rem)] mx-auto relative">
            <div className="aspect-video card-glass w-full flex items-center justify-center">
              <span className="text-muted-foreground">
                Hero Image Placeholder
              </span>
            </div>
            <div className="absolute -left-10 top-1/4 w-24 h-32 card-glass flex items-center justify-center animate-float">
              <Smartphone className="w-8 h-8 text-cyan" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What We"
            highlight="Do"
            subtitle="Design, develop, and market — all under one roof"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link key={i} to={service.href} className="group block">
                <div className="card-glass p-6 text-center hover-glow cursor-pointer hover:-translate-y-1 transition-all w-full max-w-[clamp(18rem,90%,32rem)] mx-auto">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center group-hover:bg-cyan/20 transition">
                    <service.icon className="w-8 h-8 text-cyan" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-cyan transition">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <PortfolioSection />

      {/* ================= WHY US ================= */}
      <WhyUsSection />

      {/* ================= FAQ ================= */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Frequently Asked" highlight="Questions" />
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="card-glass px-6"
                >
                  <AccordionTrigger className="font-display hover:text-cyan">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
                  {/* SHOW ALL BUTTON */}
      <div className="mt-6 text-center">
  <Link to="/faq">
    <Button size="lg" className="bg-cyan text-background hover:bg-cyan/90 px-8">
      Show All FAQs
    </Button>
  </Link>
</div>


          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* ================= CTA ================= */}
      <CTASection
        title="Let's Create Your"
        highlight="Impact"
        subtitle="We shape how the world experiences your brand."
      />

      <Footer />
    </div>
  );
};

export default Index;
