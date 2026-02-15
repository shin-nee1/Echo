import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { serviceTitleToSlug } from "@/data/servicesData";

import navLogo from "../assets/image-removebg-preview (13).png";

/* =======================
   SERVICES DROPDOWN (DESKTOP)
======================= */
const ServicesDropdown = ({ onClose }: { onClose?: () => void }) => {
  const sections = [
    {
      title: "Design",
      items: [
        "Brand Identity & Guidelines",
        "UI/UX Design",
        "Creative Direction",
        "Photography & Videography",
        "Motion & Graphic Design",
      ],
    },
    {
      title: "Develop",
      items: [
        "Website Development",
        "Shopify Development",
        "Web Application Development",
        "Mobile Application Development",
        "CRO & Speed Optimization",
      ],
    },
    {
      title: "Market",
      items: [
        "Paid Media",
        "Social Media Management",
        "SEO & Content Strategy",
        "Email & SMS Marketing",
        "Analytics & Tracking",
        "Creative Optimization",
      ],
    },
  ];

  const getServiceLink = (itemText: string) => {
    const slug = serviceTitleToSlug[itemText];
    return slug ? `/services/${slug}` : "/services";
  };

  return (
    // REDUCED: gap-4 -> gap-2, text-sm -> text-xs, min-w reduced
    <div className="flex flex-col gap-2 text-xs min-w-[180px]">
      {sections.map((section) => (
        <div key={section.title}>
          {/* REDUCED: mb-1 -> mb-0.5, text-lg -> text-sm */}
          <h4 className="mb-0.5 text-sm font-bold text-foreground border-b border-border pb-1 md:border-none">
            {section.title}
          </h4>

          <ul className="space-y-0">
            {section.items.map((item) => (
              <li key={item}>
                <Link
                  to={getServiceLink(item)}
                  onClick={onClose}
                  // REDUCED: py-1 -> py-0.5
                  className="block rounded-lg px-2 py-0.5 text-muted-foreground hover:bg-cyan/20 hover:text-cyan transition-all whitespace-normal"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

/* =======================
   NAVBAR
======================= */
const Navbar = () => {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith("/services");

  // REUSABLE ACTIVE UNDERLINE COMPONENT
  const ActiveUnderline = () => (
    <motion.div
      layoutId="navbar-underline"
      className="absolute bottom-1 left-1/4 h-[2px]  rounded-full bg-[#00d2ff]"
      initial={{ opacity: 0, width: "0%" }}
      animate={{ opacity: 1, width: "50%" }} 
      transition={{ type: "spring", stiffness: 380, damping: 30 }}
    />
  );

  return (
    <nav className="absolute top-0 left-0 right-0 z-[100]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* LOGO */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src={navLogo}
              alt="Echo & Impact"
              className="h-12 md:h-16 lg:h-20 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_15px_rgba(0,216,255,0.25)]"
            />
          </Link>

          {/* DESKTOP NAV & CTA CONTAINER */}
          <div className="hidden min-[769px]:flex flex-1 items-center justify-end gap-8">
            
            {/* NAV LINKS */}
            <div className="flex items-center gap-x-8">
              
              {/* HOME LINK */}
              <Link
                to="/"
                className="relative text-sm font-medium transition-colors group py-2"
              >
                <span className={isActive("/") 
                  ? "bg-gradient-to-r from-[#009dff] to-[#00e5ff] bg-clip-text text-transparent font-bold"
                  : "text-muted-foreground hover:text-cyan"
                }>
                  Home
                </span>
                {isActive("/") && <ActiveUnderline />}
              </Link>

              {/* SERVICES (DESKTOP) */}
              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className="relative flex items-center gap-1 text-sm font-medium transition-colors group py-2"
                >
                  <span className={isServicesActive || servicesOpen
                    ? "bg-gradient-to-r from-[#009dff] to-[#00e5ff] bg-clip-text text-transparent font-bold"
                    : "text-muted-foreground hover:text-cyan"
                  }>
                    Services
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    } ${isServicesActive || servicesOpen ? "text-[#00e5ff]" : "text-muted-foreground group-hover:text-cyan"}`}
                  />
                  {isServicesActive && <ActiveUnderline />}
                </button>

                {/* DROPDOWN MENU */}
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      // REDUCED: mt-4 -> mt-2, p-6 -> p-3
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max rounded-2xl border border-cyan/40 bg-background shadow-2xl p-3 z-[9999]"
                    >
                      <ServicesDropdown onClose={() => setServicesOpen(false)} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* OTHER LINKS */}
              {["/work", "/about", "/contact"].map((path) => (
                <Link
                  key={path}
                  to={path}
                  className="relative text-sm font-medium transition-colors group py-2"
                >
                  <span className={isActive(path)
                    ? "bg-gradient-to-r from-[#009dff] to-[#00e5ff] bg-clip-text text-transparent font-bold"
                    : "text-muted-foreground hover:text-cyan"
                  }>
                    {path.replace("/", "").replace(/^./, (c) => c.toUpperCase())}
                  </span>
                  {isActive(path) && <ActiveUnderline />}
                </Link>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <div className="flex items-center">
              <Button
                size="sm"
                className="bg-cyan text-background hover:bg-cyan/90 px-6 font-bold rounded-full"
              >
                Start Project
              </Button>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="min-[769px]:hidden p-2 rounded-lg hover:bg-foreground/5"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} className="text-cyan" /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-[769px]:hidden border-t border-border/50 bg-background touch-pan-y overflow-y-auto max-h-[85vh]"
            >
              <div className="py-6 space-y-4 px-2">

                {["Home", "Work", "About", "Contact"].map((item) => {
                  const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                  return (
                    <Link
                      key={item}
                      to={path}
                      onClick={() => setMobileOpen(false)}
                      className={`block text-lg font-semibold p-2 rounded-lg ${
                        isActive(path)
                          ? "bg-gradient-to-r from-[#009dff] to-[#00e5ff] bg-clip-text text-transparent bg-cyan/5"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item}
                    </Link>
                  );
                })}

                {/* MOBILE SERVICES */}
                <div className="pt-4 border-t border-border/50">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-2 py-3 text-lg font-semibold text-muted-foreground hover:text-cyan"
                  >
                    <span className={isServicesActive ? "text-[#00e5ff]" : ""}>Services</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        mobileServicesOpen ? "rotate-180 text-[#00e5ff]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-2 gap-2 px-2 pb-4">
                          {Object.entries(serviceTitleToSlug).map(([title, slug]) => (
                            <Link
                              key={slug}
                              to={`/services/${slug}`}
                              onClick={() => {
                                setMobileServicesOpen(false);
                                setMobileOpen(false);
                              }}
                              className="text-sm py-2 text-muted-foreground hover:text-cyan"
                            >
                              {title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CTA */}
                <div className="pt-4 flex justify-center pb-6">
                  <Button
                    className="bg-cyan text-background px-8 py-3 text-base font-semibold shadow-lg hover:bg-cyan/90 rounded-full"
                    asChild
                  >
                    <Link to="/contact" onClick={() => setMobileOpen(false)}>
                      Start Project
                    </Link>
                  </Button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;