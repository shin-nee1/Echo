import React from "react";
import { Mail, Phone, Home, ChevronDown } from "lucide-react";
import ContactImg from "@/assets/telephone.png.png";
import ContactHeroMobile from "./ContactHeroMobile";

const ContactHero = () => {
  const viewBoxSize = 1400;
  const centerX = 700;
  const centerY = 700;
  const maxRadius = 420;
  const gap = 120;

  const noiseTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.60' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`;

  return (
    <>
      {/* ================= MOBILE VIEW (< 1024px) ================= */}
      <div className="block lg:hidden w-full h-full">
        <ContactHeroMobile />
      </div>

      {/* ================= DESKTOP VIEW (>= 1024px) ================= */}
      <div className="hidden lg:block w-full h-full">
        <div className="w-full h-[80vh] min-h-[600px] relative overflow-hidden bg-transparent m-0 px-[1px]">
          
          {/* ================= SECTION ================= */}
          <section className="relative w-full h-full flex items-center justify-center selection:bg-[#00d2ff]/30">

            {/* ================= MASTER SCALING WRAPPER ================= */}
            <div
              className="relative flex items-center justify-center transition-all duration-700 aspect-square"
              style={{
                width: "clamp(20rem, 90%, 45rem)", 
                height: "clamp(20rem, 90%, 65rem)",
                transform: "scale(clamp(0.65, calc(1vw * 0.05 + 0.5), 1))",
              }}
            >

              {/* 1. TELEPHONE */}
              <div
                className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ width: "32%" }}
              >
                <img
                  src={ContactImg}
                  alt="Telephone"
                  className="w-full h-auto object-contain filter drop-shadow-[0_0_5rem_rgba(0,210,255,0.2)]"
                />
              </div>

              {/* 2. SEMI-CIRCLES */}
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
                        strokeWidth="3.5"
                        strokeOpacity={0.25 - i * 0.08}
                        strokeLinecap="round"
                      />
                    );
                  })}
                </g>
              </svg>

              {/* 3. THE FORM CARD */}
              <div
                className="absolute left-1/2 z-20 hidden lg:block border border-white/30 shadow-2xl overflow-hidden"
                style={{
                  height: "46%", 
                  width: "50%",
                  top: "50%",
                  transform: "translateY(-50%)",
                  borderRadius: "2rem",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none z-0 backdrop-blur-3xl"
                  style={{ backgroundImage: noiseTexture, opacity: 0.7 }}
                />
                <div className="relative z-10 h-full flex flex-col justify-center px-4 py-4">
                  <h2 className="text-white font-bold tracking-tight text-center mb-2.5 text-lg lg:text-xl whitespace-nowrap drop-shadow-md">
                    Tell Us About Your Project
                  </h2>
                  <form className="grid grid-cols-2 gap-2">
                    {/* Row 1 & 2: Inputs */}
                    {["Name", "Email", "Phone", "Company"].map((p) => (
                      <input
                        key={p}
                        placeholder={p}
                        className="rounded-lg px-3 bg-zinc-900/80 border border-white/5 text-white placeholder:text-white/30 text-[11px] xl:text-xs h-9 focus:outline-none focus:border-[#00d2ff]/50 transition-all shadow-inner"
                      />
                    ))}
                    
                    {/* Row 3: Service Interest (Full Width) */}
                    <div className="col-span-2 relative">
                      <select className="w-full rounded-lg px-3 bg-zinc-900/80 border border-white/5 text-white/50 text-[11px] xl:text-xs appearance-none h-9 cursor-pointer focus:outline-none">
                        <option className="bg-[#050a0f]">Service Interest</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40 pointer-events-none" />
                    </div>

                    {/* Row 4: Budget Range (Full Width - Below Service) */}
                    <div className="col-span-2 relative">
                      <select className="w-full rounded-lg px-3 bg-zinc-900/80 border border-white/5 text-white/50 text-[11px] xl:text-xs appearance-none h-9 cursor-pointer focus:outline-none">
                        <option className="bg-[#050a0f]">Budget Range</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40 pointer-events-none" />
                    </div>

                    {/* Row 5: Textarea */}
                    <textarea
                      placeholder="Project Description..."
                      className="col-span-2 rounded-lg px-3 py-2 bg-zinc-900/80 border border-white/5 text-white placeholder:text-white/30 resize-none text-[11px] xl:text-xs focus:outline-none h-11 shadow-inner"
                    />

                    {/* Row 6: Timeline */}
                    <div className="col-span-2 relative">
                      <select className="w-full rounded-lg px-3 bg-zinc-900/80 border border-white/5 text-white/50 text-[11px] xl:text-xs appearance-none h-9 cursor-pointer focus:outline-none">
                        <option className="bg-[#050a0f]">
                          How soon do you want to start?
                        </option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/40 pointer-events-none" />
                    </div>
                  </form>
                </div>
              </div>

              {/* 4. TRANSPARENT INFO CARD */}
              <div
                className="absolute left-[-2%] z-30 hidden lg:block"
                style={{
                  top: "73%",
                  transform: "translateY(-100%) translateX(15%)",
                }}
              >
                <div
                  className="relative overflow-hidden border border-white/10 backdrop-blur-2xl rounded-[1.5rem] bg-transparent shadow-2xl w-[260px] xl:w-[290px]"
                  style={{ padding: "0.85rem 1.25rem" }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#00d2ff]/30 blur-[40px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00d2ff]/30 blur-[40px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

                  <div
                    className="absolute inset-0 pointer-events-none z-0 opacity-40"
                    style={{ backgroundImage: noiseTexture }}
                  />

                  <div className="relative z-10 space-y-2.5">
                    <div className="flex items-center gap-2.5">
                      <Mail className="text-white w-3.5 h-3.5 shrink-0" />
                      <span className="text-white text-[10px] font-medium tracking-wide">
                        info@echoandimpact.com
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="text-white w-3.5 h-3.5 shrink-0" />
                      <span className="text-white text-[10px] font-medium tracking-wide">
                        0300-1234567
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Home className="text-white w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span className="text-white text-[10px] font-medium leading-tight tracking-wide">
                        North Nazimabad Block 3 Building 304
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