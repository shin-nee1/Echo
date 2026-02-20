import React from "react";
import { Mail, Phone, Home, ChevronDown } from "lucide-react";
import ContactImg from "@/assets/telephone.png.png";

const ContactHeroMobile = () => {
  const noiseTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.60' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`;

  return (
    <div className="w-full h-auto relative overflow-y-auto bg-transparent scrollbar-hide">
      <section className="relative w-full flex flex-col items-center pt-[clamp(6rem,25vh,12rem)] pb-[5vh] px-[5%]">
        {/* ================= MASTER WRAPPER ================= */}
        <div className="relative w-full max-w-[28rem] flex flex-col items-center">
          
          {/* 1. TELEPHONE - z-0 (LOWERED) */}
          <div className="relative z-0 w-[55%] max-w-[15rem]">
            <img
              src={ContactImg}
              alt="Telephone"
              className="w-full h-auto object-contain filter drop-shadow-[0_0_2rem_rgba(0,210,255,0.4)]"
            />
          </div>

          {/* 2. SEMI-CIRCLES (The Crown) - z-0 */}
          <div className="absolute top-[-15%] w-full h-[30%] z-0 pointer-events-none flex items-end justify-center overflow-visible">
            <svg
              viewBox="0 0 400 200"
              className="w-[115%] h-auto overflow-visible"
            >
              <defs>
                <linearGradient id="arcFade" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00d2ff" stopOpacity="0" />
                  <stop offset="5%" stopColor="#00d2ff" stopOpacity="1" />
                  <stop offset="95%" stopColor="#00d2ff" stopOpacity="1" />
                  <stop offset="100%" stopColor="#00d2ff" stopOpacity="0" />
                </linearGradient>
              </defs>

              <path
                d="M 100,200 A 100,100 0 0 1 300,200"
                fill="none"
                stroke="url(#arcFade)"
                strokeWidth="1.5px"
                strokeOpacity="0.4"
                strokeLinecap="round"
              />
              <path
                d="M 60,200 A 140,140 0 0 1 340,200"
                fill="none"
                stroke="url(#arcFade)"
                strokeWidth="1.5px"
                strokeOpacity="0.4"
                strokeLinecap="round"
              />
              <path
                d="M 20,200 A 180,180 0 0 1 380,200"
                fill="none"
                stroke="url(#arcFade)"
                strokeWidth="1.5px"
                strokeOpacity="0.4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* 3. THE FORM CARD - z-20 (HIGHER than phone) */}
          <div
            className="relative z-20 w-full -mt-[25%] border border-white/20 shadow-2xl overflow-hidden rounded-[2.5rem] backdrop-blur-sm"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }}
          >
            <div
              className="absolute inset-0 pointer-events-none z-0"
              style={{ backgroundImage: noiseTexture, opacity: 0.7 }}
            />

            <div className="relative z-10 flex flex-col justify-center px-[6%] pb-[2rem] pt-[5.5rem]">
              <h2 className="text-white font-bold tracking-tight text-center mb-[1.5rem] text-[1.25rem] whitespace-nowrap drop-shadow-md">
                Tell Us About Your Project
              </h2>
              <form className="grid grid-cols-2 gap-[0.75rem]">
                {["Name", "Email", "Phone", "Company"].map((p) => (
                  <input
                    key={p}
                    placeholder={p}
                    className="rounded-xl px-[1rem] bg-zinc-900/80 border border-white/10 text-white placeholder:text-white/40 text-[0.85rem] h-[2.75rem] focus:outline-none focus:ring-1 focus:ring-[#00d2ff]/30 transition-all shadow-inner"
                  />
                ))}

                <div className="col-span-2 relative">
                  <select className="w-full rounded-xl px-[1rem] bg-zinc-900/80 border border-white/10 text-white/50 text-[0.85rem] appearance-none h-[2.75rem] cursor-pointer focus:outline-none">
                    <option className="bg-[#050a0f]">Service Interest</option>
                  </select>
                  <ChevronDown className="absolute right-[1rem] top-1/2 -translate-y-1/2 w-[1.1rem] h-[1.1rem] text-white/40 pointer-events-none" />
                </div>

                <div className="col-span-2 relative">
                  <select className="w-full rounded-xl px-[1rem] bg-zinc-900/80 border border-white/10 text-white/50 text-[0.85rem] appearance-none h-[2.75rem] cursor-pointer focus:outline-none">
                    <option className="bg-[#050a0f]">Budget Range</option>
                  </select>
                  <ChevronDown className="absolute right-[1rem] top-1/2 -translate-y-1/2 w-[1.1rem] h-[1.1rem] text-white/40 pointer-events-none" />
                </div>

                <textarea
                  placeholder="Project Description..."
                  className="col-span-2 rounded-xl px-[1rem] py-[0.75rem] bg-zinc-900/80 border border-white/10 text-white placeholder:text-white/40 resize-none text-[0.85rem] focus:outline-none h-[6rem] shadow-inner"
                />

                <div className="col-span-2 relative">
                  <select className="w-full rounded-xl px-[1rem] bg-zinc-900/80 border border-white/10 text-white/50 text-[0.85rem] appearance-none h-[2.75rem] cursor-pointer focus:outline-none">
                    <option className="bg-[#050a0f]">
                      How soon do you want to start?
                    </option>
                  </select>
                  <ChevronDown className="absolute right-[1rem] top-1/2 -translate-y-1/2 w-[1.1rem] h-[1.1rem] text-white/40 pointer-events-none" />
                </div>
              </form>
            </div>
          </div>

          {/* 4. INFO CARD - z-40 */}
          <div className="relative z-40 w-full mt-[1.5rem]">
            <div
              className="relative overflow-hidden border border-white/10 backdrop-blur-2xl rounded-[1.75rem] shadow-2xl w-full p-[1.25rem]"
              style={{ backgroundColor: "transparent" }}
            >
              <div className="absolute top-0 right-0 w-[5rem] h-[5rem] bg-[#00d2ff]/20 blur-[2rem] pointer-events-none -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[5rem] h-[5rem] bg-[#00d2ff]/20 blur-[2rem] pointer-events-none translate-y-1/2 -translate-x-1/2" />

              <div
                className="absolute inset-0 pointer-events-none z-0 opacity-30"
                style={{ backgroundImage: noiseTexture }}
              />

              <div className="relative z-10 space-y-[0.75rem]">
                <div className="flex items-center gap-[0.75rem]">
                  <Mail className="text-white w-[1.1rem] h-[1.1rem] shrink-0" />
                  <span className="text-white text-[0.75rem] font-medium tracking-wide">
                    info@echoandimpact.com
                  </span>
                </div>
                <div className="flex items-center gap-[0.75rem]">
                  <Phone className="text-white w-[1.1rem] h-[1.1rem] shrink-0" />
                  <span className="text-white text-[0.75rem] font-medium tracking-wide">
                    0300-1234567
                  </span>
                </div>
                <div className="flex items-start gap-[0.75rem]">
                  <Home className="text-white w-[1.1rem] h-[1.1rem] shrink-0 mt-[0.1rem]" />
                  <span className="text-white text-[0.75rem] font-medium leading-tight tracking-wide">
                    North Nazimabad Block 3 Building 304
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactHeroMobile;