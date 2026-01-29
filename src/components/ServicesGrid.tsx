import SectionHeader from "./SectionHeader";

import ServiceCard from "./ServiceCard";



export interface ServiceData {

  title: string;

  description: string;

  items: string[];

}



interface ServicesGridProps {

  title: string;

  highlight: string;

  subtitle?: string;

  services: ServiceData[];

  className?: string;

}



const ServicesGrid = ({

  title,

  highlight,

  subtitle,

  services,

  className = "",

}: ServicesGridProps) => {

  return (

    <section className={`py-20 ${className}`}>

      <div className="container mx-auto px-6">

        <SectionHeader title={title} highlight={highlight} subtitle={subtitle} />



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (

            <ServiceCard key={index} {...service} />

          ))}

        </div>

      </div>

    </section>

  );

};



export default ServicesGrid;

