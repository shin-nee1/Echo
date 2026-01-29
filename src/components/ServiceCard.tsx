interface ServiceCardProps {

  title: string;

  description: string;

  items: string[];

}



const ServiceCard = ({ title, description, items }: ServiceCardProps) => {

  return (

    <div className="card-glass p-6 hover-glow group">

      {/* Image placeholder */}

      <div className="aspect-video bg-secondary/50 rounded-lg mb-4 flex items-center justify-center border border-border/30 group-hover:border-cyan/30 transition-colors">

        <span className="text-muted-foreground text-sm">Image</span>

      </div>

     

      <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-cyan transition-colors">

        {title}

      </h3>

      <p className="text-muted-foreground text-sm mb-4">{description}</p>

     

      <ul className="space-y-1">

        {items.map((item, index) => (

          <li key={index} className="text-muted-foreground text-xs flex items-center gap-2">

            <span className="w-1 h-1 rounded-full bg-cyan" />

            {item}

          </li>

        ))}

      </ul>

    </div>

  );

};



export default ServiceCard;