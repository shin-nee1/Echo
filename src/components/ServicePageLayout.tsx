import * as React from "react";
import Navbar from "./Navbar";

interface ServicePageLayoutProps {
  children: React.ReactNode;
}

const ServicePageLayout = ({ children }: ServicePageLayoutProps) => {
  return (
    // This background color ensures the "deep space" look of your reference
    <div className="min-h-screen bg-[#010a0f] text-white selection:bg-cyan/30">
      <Navbar />
      <main>{children}</main>
      
    </div>
  );
};

export default ServicePageLayout;