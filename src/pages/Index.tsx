import Navbar from "@/components/Navbar";
import HaloBackground from "@/components/HaloBackground";
import FAQ from "@/components/FAQ";
import WhoWeAre from "@/components/WhoWeAre";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import WhyUsSection from "@/components/WhyUsSection";
import { Button } from "@/components/ui/button";
import { Code, Palette, TrendingUp, Smartphone, Zap } from "lucide-react";
import { Link } from "react-router-dom";

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

  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, TechCorp",
      quote: "Echo & Impact completely transformed our digital presence.",
    },
    {
      name: "Sarah Johnson",
      role: "Founder, StartupXYZ",
      quote: "Clear communication and premium quality throughout.",
    },
    {
      name: "Mike Williams",
      role: "Marketing Director",
      quote: "Our conversions doubled within months.",
    },
  ];

  return (
    <div className="relative min-h-screen text-white selection:bg-cyan/30">
      {/* 1. Global Background stays fixed while you scroll */}
      <HaloBackground />
      <Navbar />

      {/* ================= MAIN CONTENT WRAPPER ================= */}
      <main className="relative z-10">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative flex flex-col items-center justify-center min-h-screen pt-20 overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
            {/* Title with Neon Highlight */}
            <h1 className="font-display font-bold leading-[1.1] mb-8 text-[clamp(2.5rem,6vw,5rem)] tracking-tight">
              We Create The <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">Echo</span>, <br />
              You Make The <span className="text-cyan drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">Impact</span>.
            </h1>

            <p className="text-slate-400 text-[clamp(1rem,2.5vw,1.25rem)] max-w-2xl mx-auto mb-12 leading-relaxed">
              Design. Development. Marketing. Powerful digital experiences that
              drive real results through specialized software.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
              <Button size="lg" className="bg-cyan text-black hover:bg-cyan/90 px-10 py-7 rounded-xl text-lg font-bold shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="border-white/10 bg-white/5 text-white hover:bg-white/10 px-10 py-7 rounded-xl text-lg font-bold backdrop-blur-sm">
                View Our Work
              </Button>
            </div>

            {/* Hero Visual Stack (Grid will show through the gaps) */}
            <div className="relative max-w-5xl mx-auto">
              <div className="animate-float">
                <div className="aspect-video w-full rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
                   <span className="text-slate-500 font-display tracking-widest uppercase text-xs">Project Showcase</span>
                </div>
              </div>

              {/* Floating Element: Smartphone */}
              <div className="absolute -left-4 md:-left-12 top-1/4 w-20 h-32 md:w-28 md:h-44 rounded-2xl border border-cyan/30 bg-black/40 backdrop-blur-xl flex items-center justify-center animate-float-slow shadow-2xl hidden sm:flex">
                 <Smartphone className="w-8 h-8 text-cyan drop-shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHO WE ARE ================= */}
        <WhoWeAre />
        {/* ================= SERVICES ================= */}

        <section className="relative py-32 bg-transparent">

          <div className="container mx-auto px-6">

            <SectionHeader

              title="What We"

              highlight="Do"

              subtitle="Design, develop, and market — all under one roof"

            />



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

              {services.map((service, i) => (

                <Link key={i} to={service.href} className="group block">

                  <div className="h-full p-8 rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-md hover:border-cyan/30 hover:bg-white/[0.06] transition-all duration-500 group-hover:-translate-y-2">

                    <div className="w-16 h-16 mb-6 rounded-2xl bg-cyan/10 border border-cyan/20 flex items-center justify-center group-hover:bg-cyan/20 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.1)]">

                      <service.icon className="w-8 h-8 text-cyan" />

                    </div>

                    <h3 className="font-display text-2xl font-bold mb-3 text-white group-hover:text-cyan transition-colors">

                      {service.title}

                    </h3>

                    <p className="text-slate-400 leading-relaxed">

                      {service.description}

                    </p>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>

        <PortfolioSection />
        <WhyUsSection />
        <FAQ />
        <TestimonialCarousel testimonials={testimonials} />
        <AboutUs />

        <CTASection
          title="Let's Create Your"
          highlight="Impact"
          subtitle="We shape how the world experiences your brand."
        />

        <Footer />
      </main>
    </div>
  );
};

export default Index;