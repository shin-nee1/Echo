import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const portfolioItems = [
  { title: "Uber", subtitle: "Case Study" },
  { title: "Redesign Mobile app Concept", subtitle: "UI/UX Design" },
  { title: "Princely", subtitle: "Branding" },
];

const PortfolioSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <SectionHeader title="Explore" highlight="Our Portfolio" centered={false} />
          <Button variant="outline" size="sm" className="border-cyan/50 text-cyan hover:bg-cyan/10">
            View All <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] bg-card rounded-xl overflow-hidden border border-border/50 hover:border-cyan/50 transition-all hover-glow cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                <span className="text-muted-foreground">Portfolio Image</span>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <span className="text-cyan text-xs font-medium">{item.subtitle}</span>
                <h3 className="font-display font-semibold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
