import type { LucideIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";

export interface ProcessStepData {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title: string;
  highlight: string;
  subtitle?: string;
  steps: ProcessStepData[];
  className?: string;
}

const ProcessSection = ({
  title,
  highlight,
  subtitle,
  steps,
  className = "bg-card/30",
}: ProcessSectionProps) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-6">
        <SectionHeader title={title} highlight={highlight} subtitle={subtitle} />

        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-8 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`flex-1 ${
                  index % 2 === 1 ? "text-left" : "text-right"
                }`}
              >
                <div
                  className={`card-glass p-6 hover-glow ${
                    index % 2 === 1 ? "mr-auto" : "ml-auto"
                  } max-w-md`}
                >
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 1 ? "" : "justify-end"
                    }`}
                  >
                    <span className="text-cyan font-display font-bold">
                      {step.number}
                    </span>
                    <h3 className="font-display font-semibold text-lg">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Center Icon */}
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-full bg-cyan/20 border border-cyan/50 flex items-center justify-center glow-cyan">
                  <step.icon className="w-6 h-6 text-cyan" />
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-cyan/50 to-transparent" />
                )}
              </div>

              {/* Empty space */}
              <div className="flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
