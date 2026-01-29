import { useState } from "react";
import SectionHeader from "./SectionHeader";

interface WhyUsItem {
  title: string;
  description: string;
}

interface WhyUsSectionProps {
  items?: WhyUsItem[];
}

const defaultItems: WhyUsItem[] = [
  { title: "Expert Team", description: "Skilled professionals with years of industry experience" },
  { title: "Proven Results", description: "Track record of successful projects and satisfied clients" },
  { title: "Full Service", description: "End-to-end solutions from design to deployment" },
  { title: "24/7 Support", description: "Always here to help when you need us" },
];

const WhyUsSection = ({ items = defaultItems }: WhyUsSectionProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Why Echo &" 
          highlight="Impact?" 
          subtitle="What sets us apart from the rest"
        />

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-stretch min-h-[400px]">
          {items.map((item, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`
                  card-glass cursor-pointer relative overflow-hidden
                  transition-all duration-500 ease-out
                  ${isExpanded ? 'flex-1 md:flex-[3] p-6 md:p-8' : 'flex-none md:w-20 p-4 md:p-6'}
                  hover-glow group
                `}
              >
                {/* Number - top in collapsed, moves inside expanded */}
                <div
                  className={`
                    absolute top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center
                    text-cyan font-display font-bold transition-all duration-500
                    ${isExpanded ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
                  `}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Vertical Text - collapsed */}
                <div
                  className={`
                    absolute top-16 left-1/2 -translate-x-1/2
                    flex flex-col items-center justify-start h-full transition-all duration-500
                    ${isExpanded ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}
                  `}
                >
                  <h3
                    className="font-display font-semibold text-lg text-center"
                    style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Horizontal content - expanded */}
                <div
                  className={`
                    flex flex-col transition-all duration-500
                    ${isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}
                  `}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center shrink-0">
                      <span className="text-cyan font-display font-bold">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xl mb-2 text-cyan">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
