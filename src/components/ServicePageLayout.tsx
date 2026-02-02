import * as React from "react";
import Navbar from "./Navbar";

interface ServicePageLayoutProps {
  children: React.ReactNode;
}

const ServicePageLayout = ({ children }: ServicePageLayoutProps) => {
  return (
    // Removed bg-[#010a0f] to allow the global App background to show through
    <div className="min-h-screen text-white selection:bg-cyan/30">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default ServicePageLayout;