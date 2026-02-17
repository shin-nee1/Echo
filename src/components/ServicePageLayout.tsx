import * as React from "react";
// DELETED: import Navbar from "./Navbar"; 

interface ServicePageLayoutProps {
  children: React.ReactNode;
}

const ServicePageLayout = ({ children }: ServicePageLayoutProps) => {
  return (
    // Removed <Navbar /> to prevent doubling with the global Navbar in App.tsx
    <div className="min-h-screen text-white selection:bg-cyan/30">
      <main>{children}</main>
    </div>
  );
};

export default ServicePageLayout;