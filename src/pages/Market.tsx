import ServicePageLayout from "@/components/ServicePageLayout";
import { Search, Target, Megaphone, BarChart3, Zap, TrendingUp } from "lucide-react";

const Market = () => {
  const processSteps = [
    { icon: Search, number: "01", title: "Discovery", description: "Analyzing your market, competitors, and target audience to inform strategy." },
    { icon: Target, number: "02", title: "Strategy", description: "Developing a comprehensive marketing strategy aligned with your goals." },
    { icon: Megaphone, number: "03", title: "Execution", description: "Implementing campaigns across the right channels for maximum impact." },
    { icon: BarChart3, number: "04", title: "Analytics", description: "Tracking performance metrics and gathering actionable insights." },
    { icon: Zap, number: "05", title: "Optimization", description: "Continuously refining strategies based on data and results." },
    { icon: TrendingUp, number: "06", title: "Growth", description: "Scaling successful strategies for sustainable business growth." },
  ];

  const services = [
    { 
      title: "Paid Social Media Marketing", 
      description: "Strategic paid campaigns that reach your ideal audience.",
      items: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "TikTok Ads"]
    },
    { 
      title: "Social Media Management", 
      description: "Building and engaging your community across platforms.",
      items: ["Content Calendar", "Community Management", "Growth Strategy", "Influencer Outreach"]
    },
    { 
      title: "SEO & Content Marketing", 
      description: "Organic growth through strategic content.",
      items: ["Keyword Research", "On-Page SEO", "Blog Writing", "Link Building"]
    },
    { 
      title: "Email & SMS Marketing", 
      description: "Direct communication that converts.",
      items: ["Campaign Strategy", "Automation", "A/B Testing", "List Management"]
    },
    { 
      title: "Analytics & Intelligence", 
      description: "Data-driven insights for smarter decisions.",
      items: ["Performance Tracking", "Custom Dashboards", "ROI Analysis", "Competitive Analysis"]
    },
    { 
      title: "Creative Content Production", 
      description: "Compelling content that captures attention.",
      items: ["Video Production", "Graphic Design", "Copywriting", "Photography"]
    },
  ];

  return (
    <ServicePageLayout
      // Hero
      heroTitle={
        <>
          We Turn Creativity Into <span className="text-cyan">Measurable</span>,<br />
          Scalable <span className="text-cyan">Growth</span>.
        </>
      }
      heroSubtitle="Marketing Isn't Noise. It's Precision."
      heroCta="Start Your Marketing Project"
      heroImagePlaceholder="Marketing Hero Image Placeholder"
      
      // Info Section
      infoTitle="What is"
      infoHighlight="Market?"
      infoParagraphs={[
        "Marketing is the bridge between your brand and your audience. It's how you attract, engage, and convert prospects into loyal customers.",
        "In today's digital landscape, effective marketing requires a blend of creativity, data analysis, and strategic thinking to cut through the noise.",
        "We combine proven strategies with innovative approaches to deliver marketing that doesn't just get attention—it drives measurable results.",
      ]}
      infoImagePlaceholder="Marketing Concept Image"
      
      // Process Section
      processTitle="Marketing"
      processHighlight="Process"
      processSubtitle="Our data-driven approach to achieving your marketing goals"
      processSteps={processSteps}
      
      // Services Section
      servicesTitle="Market"
      servicesHighlight="Services"
      servicesSubtitle="Comprehensive marketing solutions for sustainable growth"
      services={services}
      
      // Cross Sell
      crossSellTitle="Interested In Design Or Development?"
      crossSellLinks={[
        { text: "Explore Design", href: "/design" },
        { text: "Explore Development", href: "/develop" },
      ]}
      
      // Final CTA
      ctaTitle="Let's Grow Where It"
      ctaHighlight="Matters"
      ctaSubtitle="Marketing Isn't Noise. It's Precision."
    />
  );
};

export default Market;