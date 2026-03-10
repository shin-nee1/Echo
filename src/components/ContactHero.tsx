import React from "react";
import { Mail, Phone, Home, ChevronDown } from "lucide-react";
import ContactImg from "@/assets/telephone.png.png"; // Ensure this path is correct for your project
import ContactHeroMobile from "./ContactHeroMobile";
import { servicesData } from "@/data/servicesData";

const ContactHero = () => {
  const viewBoxSize = 1400;
  const centerX = 700;
  const centerY = 700;
  const maxRadius = 540;
  const gap = 140;

  const noiseTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.60' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`;

  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      <div className="block lg:hidden w-full h-full">
        <ContactHeroMobile />
      </div>

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden lg:block w-full h-full">
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[85vh] min-h-[750px] overflow-hidden bg-transparent m-0">
          <section className="relative w-full h-full flex items-center justify-center selection:bg-[#00d2ff]/30">
            {/* MASTER SCALING WRAPPER */}
            <div
              className="relative flex items-center justify-center transition-all duration-700"
              style={{
                width: "clamp(50rem, 95vw, 100rem)",
                height: "clamp(40rem, 85vh, 70rem)",
                transform: "scale(clamp(0.8, calc(1vw * 0.02 + 0.7), 1))",
              }}
            >
              {/* 1. SEMI-CIRCLES (Background Framework) - z-0 */}
              <svg
                width="100%"
                height="100%"
                viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
                className="absolute inset-0 overflow-visible z-0"
              >
                <g
                  className="transition-transform duration-1000 rotate-0 lg:-rotate-90"
                  style={{ transformOrigin: "center" }}
                >
                  {[0, 1, 2].map((i) => {
                    const r = maxRadius - i * gap;
                    if (r <= 0) return null;
                    const d = `M ${centerX - r} ${centerY} A ${r} ${r} 0 0 1 ${
                      centerX + r
                    } ${centerY}`;
                    return (
                      <path
                        key={i}
                        d={d}
                        fill="none"
                        stroke="#00d2ff"
                        strokeWidth="3"
                        strokeOpacity={0.22 - i * 0.07}
                        strokeLinecap="round"
                      />
                    );
                  })}
                </g>
              </svg>

              {/* 2. TELEPHONE - z-10 */}
              <div
                className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ width: "23%" }}
              >
                <img
                  src={ContactImg}
                  alt="Telephone"
                  className="w-full h-auto object-contain filter drop-shadow-[0_0_5rem_rgba(0,210,255,0.3)]"
                />
              </div>

              {/* 3. THE FORM CARD - z-20 */}
              <div
                className="absolute z-20 flex flex-col border border-white/20 shadow-2xl backdrop-blur-sm"
                style={{
                  left: "50%",
                  width: "42%",
                  height: "auto",
                  maxHeight: "90%",
                  minHeight: "450px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  borderRadius: "2.5rem",
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none z-0"
                  style={{ backgroundImage: noiseTexture, opacity: 0.5 }}
                />

                <div className="relative z-10 h-full w-full overflow-y-auto overflow-x-hidden scrollbar-hide flex flex-col p-6 xl:p-8">
                  <h2 className="text-white font-bold tracking-tight text-center mb-5 text-lg xl:text-xl drop-shadow-md">
                    Tell Us About Your Project
                  </h2>

                  <form className="grid grid-cols-2 gap-3 flex-grow content-center">
                    {/* INPUTS */}
                    {["Name*", "Email*", "Phone*", "Company"].map((p) => (
                      <input
                        key={p}
                        type={p === "Email*" ? "email" : "text"}
                        placeholder={p}
                        required={p.includes("*")}
                        className="rounded-xl px-4 bg-zinc-900/60 border border-white/10 text-white placeholder:text-white/30 placeholder:font-bold text-xs xl:text-sm h-10 focus:outline-none focus:border-[#00d2ff]/50 transition-all shadow-inner w-full"
                      />
                    ))}

                    {/* SERVICE INTEREST DROPDOWN */}
                    <div className="col-span-2 relative">
                      <select defaultValue="" className="w-full rounded-xl px-4 bg-zinc-900/60 border border-white/10 text-white/50 text-xs xl:text-sm appearance-none h-10 cursor-pointer focus:outline-none focus:text-white">
                        <option value="" disabled className="bg-[#050a0f]">
                          Service Interest
                        </option>
                        
                        <optgroup label="Design Services" className="bg-[#050a0f]">
                          {servicesData.filter(s => s.category === "design").map((service) => (
                            <option key={service.slug} value={service.slug}>{service.title}</option>
                          ))}
                        </optgroup>

                        <optgroup label="Development Services" className="bg-[#050a0f]">
                          {servicesData.filter(s => s.category === "develop").map((service) => (
                            <option key={service.slug} value={service.slug}>{service.title}</option>
                          ))}
                        </optgroup>

                        <optgroup label="Marketing Services" className="bg-[#050a0f]">
                          {servicesData.filter(s => s.category === "market").map((service) => (
                            <option key={service.slug} value={service.slug}>{service.title}</option>
                          ))}
                        </optgroup>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                    </div>

                    {/* PROJECT DESCRIPTION */}
                    <textarea
                      placeholder="Project Description..."
                      className="col-span-2 rounded-xl px-4 py-3 bg-zinc-900/60 border border-white/10 text-white placeholder:text-white/30 placeholder:font-bold resize-none text-xs xl:text-sm focus:outline-none h-20 xl:h-24 shadow-inner"
                    />

                    {/* BUDGET RANGE (Input) */}
                    <div className="col-span-2">
                      <input
                        type="text"
                        placeholder="Budget Range (Min - Max $)"
                        className="w-full rounded-xl px-4 bg-zinc-900/60 border border-white/10 text-white placeholder:text-white/30 placeholder:font-bold text-xs xl:text-sm h-10 focus:outline-none focus:border-[#00d2ff]/50 transition-all shadow-inner"
                      />
                    </div>

                    {/* TIMELINE DROPDOWN */}
                    <div className="col-span-2 relative">
                      <select defaultValue="" className="w-full rounded-xl px-4 bg-zinc-900/60 border border-white/10 text-white/50 text-xs xl:text-sm appearance-none h-10 cursor-pointer focus:outline-none focus:text-white">
                        <option value="" disabled className="bg-[#050a0f]">
                          How soon do you want to start?
                        </option>
                        <option value="Immediately" className="bg-[#050a0f]">Immediately</option>
                        <option value="In a month" className="bg-[#050a0f]">In a month</option>
                        <option value="In 2 - 3 months" className="bg-[#050a0f]">In 2 - 3 months</option>
                        <option value="Not sure" className="bg-[#050a0f]">Not sure</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                    </div>
                  </form>
                </div>
              </div>

              {/* 4. TRANSPARENT INFO CARD - z-40 */}
              <div
                className="absolute left-[5%] z-40 hidden lg:block"
                style={{
                  top: "78%",
                  transform: "translateY(-100%)",
                }}
              >
                <div className="relative overflow-hidden border border-white/10 backdrop-blur-2xl rounded-[1.5rem] bg-black/20 shadow-2xl w-[260px] xl:w-[300px] p-5">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#00d2ff]/20 blur-[40px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00d2ff]/20 blur-[40px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

                  <div className="relative z-10 space-y-3.5">
                    <div className="flex items-center gap-3">
                      <Mail className="text-white w-4 h-4 shrink-0" />
                      <span className="text-white text-[11px] xl:text-xs font-medium">
                        info@echoandimpact.com
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-white w-4 h-4 shrink-0" />
                      <span className="text-white text-[11px] xl:text-xs font-medium">
                        +1 (844) 591-ECHO
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Home className="text-white w-4 h-4 shrink-0 mt-0.5" />
                      <span className="text-white text-[11px] xl:text-xs font-medium leading-tight">
                        5225 Main St, Suite 4, Buffalo NY, 14221
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactHero;