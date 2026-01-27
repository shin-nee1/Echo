import type { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isLeft?: boolean;
}

const ProcessStep = ({ number, title, description, icon: Icon, isLeft = true }: ProcessStepProps) => {
  return (
    <div className={`flex items-center gap-8 ${isLeft ? "" : "flex-row-reverse"}`}>
      {/* Content */}
      <div className={`flex-1 ${isLeft ? "text-right" : "text-left"}`}>
        <div className={`card-glass p-6 hover-glow ${isLeft ? "ml-auto" : "mr-auto"} max-w-md`}>
          <div className={`flex items-center gap-3 mb-3 ${isLeft ? "justify-end" : ""}`}>
            <span className="text-cyan font-display font-bold">{number}</span>
            <h3 className="font-display font-semibold text-lg">{title}</h3>
          </div>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>

      {/* Center Icon */}
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-cyan/20 border border-cyan/50 flex items-center justify-center glow-cyan">
          <Icon className="w-6 h-6 text-cyan" />
        </div>
        {/* Connecting line */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-cyan/50 to-transparent" />
      </div>

      {/* Empty space for layout */}
      <div className="flex-1" />
    </div>
  );
};

export default ProcessStep;
