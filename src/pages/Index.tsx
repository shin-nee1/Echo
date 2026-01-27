import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import InfoSection from "@/components/InfoSection";
import { Button } from "@/components/ui/button";
import { Code, Palette, TrendingUp, Smartphone } from "lucide-react";
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
      description: "Brand identity, UI/UX, and creative direction",
    },
    {
      icon: Code,
      title: "Development",
      description: "Web & mobile apps, scalable digital platforms",
    },
    {
      icon: TrendingUp,
      title: "Marketing",
      description: "SEO, growth strategy, and performance marketing",
    },
  ];

  const whyUs = [
    {
      title: "Expert Team",
      description: "Senior designers, developers, and strategists",
    },
    {
      title: "Proven Results",
      description: "Real impact with measurable growth outcomes",
    },
    {
      title: "End-to-End",
      description: "From idea to launch — we handle everything",
    },
    {
      title: "Always Available",
      description: "Reliable support whenever you need us",
    },
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Simple websites take 2–4 weeks. Larger platforms or applications may take 2–3 months depending on scope.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes. We provide maintenance, performance monitoring, and feature upgrades after launch.",
    },
    {
      question: "How does pricing work?",
      answer:
        "Pricing is flexible and based on your requirements. We provide transparent, custom quotes.",
    },
    {
      question: "Can you work with our brand guidelines?",
      answer:
        "Absolutely. We can follow existing brand systems or create one from scratch.",
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      quote:
        "Echo & Impact completely transformed our digital presence. Exceptional execution.",
    },
    {
      name: "Sarah Johnson",
      role: "Founder, StartupXYZ",
      quote:
        "Clear communication, fast delivery, and premium quality throughout.",
    },
    {
      name: "Mike Williams",
      role: "Marketing Director",
      quote:
        "Our conversions doubled within months. Their strategy actually works.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan/10 via-transparent to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan/20 rounded-full blur-[180px] opacity-40" />

        <div className="container mx-auto px-6 pt-28 text-center relative z-10">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            We Create The <span className="text-cyan">Echo</span>, <br />
            You Make The <span className="text-cyan">Impact</span>.
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Powerful digital experiences — crafted through design,
            development, and data-driven marketing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-cyan text-background hover:bg-cyan/90 glow-cyan px-10"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan/50 text-cyan hover:bg-cyan/10 px-10"
            >
              View Our Work
            </Button>
          </div>

          {/* Hero visual */}
          <div className="mt-20 max-w-5xl mx-auto">
            <div className="relative">
              <div className="aspect-video card-glass flex items-center justify-center">
                <span className="text-muted-foreground">
                  Hero Image Placeholder
                </span>
              </div>

              <div className="absolute -left-10 top-1/4 w-24 h-32 card-glass flex items-center justify-center animate-float">
                <Smartphone className="w-8 h-8 text-cyan" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <InfoSection
        title="Who We"
        highlight="Are"
        paragraphs={[
          "Echo & Impact is a full-service digital agency blending creativity, technology, and strategy.",
          "We build experiences that connect brands with people — and turn attention into impact.",
        ]}
        imagePlaceholder="Team Image Placeholder"
        ctaText="Learn More About Us"
      />

      {/* ================= SERVICES ================= */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="What We"
            highlight="Do"
            subtitle="Complete digital solutions under one roof"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="card-glass p-8 text-center hover-glow group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center group-hover:bg-cyan/20 transition">
                  <service.icon className="w-8 h-8 text-cyan" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-cyan transition">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO ================= */}
      <PortfolioSection />

      {/* ================= WHY US ================= */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Why Echo &"
            highlight="Impact?"
            subtitle="What makes us different"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <div key={i} className="card-glass p-6 hover-glow">
                <div className="w-10 h-10 mb-4 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                  <span className="font-display font-bold text-cyan">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Frequently Asked"
            highlight="Questions"
          />

          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="card-glass px-6"
                >
                  <AccordionTrigger className="font-display text-left hover:text-cyan">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* ================= ABOUT ================= */}
      <InfoSection
        title="About"
        highlight="Us"
        paragraphs={[
          "With 5+ years of experience, we help brands grow through thoughtful design and engineering.",
        ]}
        imagePlaceholder="About Image Placeholder"
        imagePosition="left"
        ctaText="Meet Our Team"
      />

      {/* ================= CTA ================= */}
      <CTASection
        title="Let's Create Your"
        highlight="App"
        subtitle="We shape how the world experiences your brand."
      />

      <Footer />
    </div>
  );
};

export default Index;
