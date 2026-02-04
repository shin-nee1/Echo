import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

interface PageHeroProps {
  title: React.ReactNode;
  subtitle: string;
  ctaText?: string;
}

const PageHero = ({ title, subtitle, ctaText = "Shape your Next Move" }: PageHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent">
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Title Container: Narrowed slightly to force exactly 2 lines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1100px] mx-auto" 
        >
          <h1 className="text-4xl md:text-5xl lg:text-[4.2rem] font-bold tracking-[-0.03em] text-white leading-[1.05] mb-8 font-display">
            {title}
          </h1>
        </motion.div>

        {/* Subtitle: Clean and Directional */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button 
            variant="cyan" 
            size="hero" 
            asChild
          >
            <Link to="/contact">
              {ctaText}
            </Link>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default PageHero;