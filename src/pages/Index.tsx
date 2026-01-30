import Navbar from "@/components/Navbar";
import HaloBackground from "@/components/HaloBackground";
import WhatWeDo from "@/components/WhatWeDo";
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
<section className="relative flex flex-col items-center justify-center min-h-screen pt-20 overflow-hidden bg-[#010a0f]">
  
  {/* 1. LAYER: Deep Depth Base */}
  <div 
    className="absolute inset-0 z-0" 
    style={{ background: "radial-gradient(circle at 50% 50%, #051923 0%, #010a0f 100%)" }} 
  />

  {/* 2. LAYER: The High-Vibrancy Premium Grid */}
  <div 
    className="absolute inset-0 z-10 pointer-events-none opacity-[0.25]" 
    style={{ 
      backgroundImage: `
        linear-gradient(to right, rgba(0, 229, 255, 0.2) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 229, 255, 0.2) 1px, transparent 1px)
      `,
      backgroundSize: '45px 45px',
      // High-end masking: strong center, soft edges, fades out at the bottom
      WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
      maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
    }} 
  />
  {/* 3. LAYER: Animated Blur Blobs (The depth "Mist") */}
  {/* Cyan Pulse (Top Left) */}
  <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-cyan/15 rounded-full blur-[120px] z-10 opacity-40 animate-pulse pointer-events-none" />
  
  {/* Primary Float (Bottom Right) */}
  <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] z-10 opacity-30 animate-float-slow pointer-events-none" />

  {/* 3. LAYER: Architectural Geometric Arcs */}
  <div className="absolute top-0 left-0 w-[600px] h-[600px] border border-cyan/20 rounded-full -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none mix-blend-screen" />
  <div className="absolute bottom-0 right-0 w-[700px] h-[700px] border border-cyan/10 rounded-full translate-x-1/2 translate-y-1/2 z-20 pointer-events-none mix-blend-screen" />

  {/* 4. LAYER: "Vibrant Hub" Central Glow */}
  <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan/15 rounded-full blur-[160px] opacity-50 z-10 pointer-events-none" />

  {/* CONTENT LAYER */}
  <div className="container mx-auto px-6 text-center relative z-20">
    <h1 className="font-display font-bold leading-[1.1] mb-8 text-[clamp(2.5rem,6vw,5rem)] tracking-tight text-white">
      We Create The <span className="text-cyan drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]">Echo</span>, <br />
      You Make The <span className="text-cyan drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]">Impact</span>.
    </h1>

    <p className="text-slate-400 text-[clamp(1rem,2.5vw,1.25rem)] max-w-2xl mx-auto mb-12 leading-relaxed font-light">
      Design. Development. Marketing. Powerful digital experiences that
      drive real results through specialized software.
    </p>

    {/* Buttons with Premium Shadows */}
    <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
      <Button size="lg" className="bg-[#00e5ff] text-black hover:bg-[#00e5ff]/90 px-10 py-7 rounded-xl text-lg font-bold shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all hover:scale-105">
        Get Started
      </Button>
      <Button variant="outline" size="lg" className="border-white/10 bg-white/5 text-white hover:bg-white/10 px-10 py-7 rounded-xl text-lg font-bold backdrop-blur-md">
        View Our Work
      </Button>
    </div>

    {/* Showcase Visual */}
    <div className="relative max-w-5xl mx-auto">
       <div className="animate-float relative z-30">
         <div className="aspect-video w-full rounded-[2.5rem] border border-white/10 bg-[#020c12]/60 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.7)] flex items-center justify-center overflow-hidden">
            {/* Inner grid texture for the card itself */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            <span className="text-slate-500 font-display tracking-[0.3em] uppercase text-[10px] font-bold">Project Showcase</span>
         </div>
       </div>

       {/* Premium Floating Icon */}
       <div className="absolute -left-12 top-1/4 w-28 h-44 rounded-[2rem] border border-cyan/40 bg-[#010a0f]/90 backdrop-blur-2xl flex items-center justify-center animate-float-slow shadow-[0_0_40px_rgba(0,229,255,0.2)] hidden sm:flex z-40">
           <Smartphone className="w-10 h-10 text-cyan drop-shadow-[0_0_12px_#00e5ff]" />
       </div>
    </div>
  </div>
</section>

        {/* ================= WHO WE ARE ================= */}
        <WhoWeAre />
        {/* ================= SERVICES ================= */}
        <WhatWeDo/>
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

       
      </main>
    </div>
  );
};

export default Index;