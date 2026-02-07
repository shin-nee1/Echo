import { Mail, Phone, MapPin, ChevronDown } from "lucide-react";
import ContactImg from "@/assets/telephone.png.png"; 

const ContactHero = () => {
  const centerX = 700;
  const centerY = 700;
  const baseRadius = 240; 
  const gap = 120; 

  return (
    <section className="relative min-h-screen w-full flex items-start justify-center overflow-hidden bg-transparent pt-10 lg:pt-32 pb-10">
      
      {/* ================= BACKGROUND ELEMENTS ================= */}
      <div className="absolute inset-0 z-10 flex items-start lg:items-center justify-center pointer-events-none">
        <div className="relative flex items-center justify-center w-[1000px] h-[1000px] lg:w-[1100px] xl:w-[1400px] lg:h-[1100px] xl:h-[1400px] 
                        -translate-y-[20%] max-[425px]:-translate-y-[35%] md:-translate-y-[8%] lg:translate-y-10 xl:translate-y-20 min-[2560px]:-translate-y-[5%]
                        scale-[0.98] max-[425px]:scale-[2.2] sm:scale-75 md:scale-90 lg:scale-[0.75] xl:scale-100 min-[2560px]:scale-[1.4] transition-all duration-500">
          
          <div className="relative z-10 w-[240px] md:w-[320px] lg:w-[480px] xl:w-[680px] lg:translate-x-0 xl:translate-x-10">
            <img 
              src={ContactImg} 
              alt="Telephone"
              className="w-full h-full object-contain filter drop-shadow-[0_0_80px_rgba(34,211,238,0.3)]"
            />
          </div>
          
          <div 
            className="absolute inset-0 flex items-center justify-center z-0"
            style={{
              // ADDED: no-repeat and center to prevent reflection ghosting on 4K
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
            }}
          >
            {/* ADDED: no-repeat to the Tailwind mask-image utility string */}
            <div className="w-full h-full lg:[mask-image:linear-gradient(to_right,black_0%,black_25%,transparent_55%)] lg:[mask-repeat:no-repeat] lg:[webkit-mask-image:linear-gradient(to_right,black_0%,black_25%,transparent_55%)] lg:[webkit-mask-repeat:no-repeat]">
              <svg width="100%" height="100%" viewBox="0 0 1400 1400" className="overflow-visible pointer-events-none">
                <g>
                  {[0, 1, 2].map((i) => (
                    <circle 
                      key={i}
                      cx={centerX}
                      cy={centerY}
                      r={baseRadius + (i * gap)} 
                      fill="none" 
                      stroke="#22d3ee" 
                      strokeWidth="4" 
                      strokeOpacity="0.4"
                      className="drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]"
                    />
                  ))}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-20 w-full max-w-[1400px] min-[2560px]:max-w-[1800px] px-6 
                      pt-80 max-[425px]:pt-[280px] sm:pt-96 md:pt-[550px] lg:pt-0 
                      flex flex-col items-center lg:flex-row lg:justify-between lg:items-end gap-8 lg:gap-12 transition-all">

        {/* CONTACT INFO CARD */}
        <div className="w-full max-w-[550px] lg:max-w-none lg:w-auto order-2 lg:order-1">
          <div 
            className="relative overflow-hidden border border-white/10 rounded-[1.5rem] lg:rounded-[2.5rem] px-6 py-6 lg:px-10 lg:py-7 shadow-2xl backdrop-blur-xl w-full lg:w-[32vw] xl:w-[500px] min-[2560px]:w-[600px]"
            style={{ background: 'rgba(10, 25, 30, 0.4)' }}
          >
            <div className="relative z-10 space-y-4">
              <div className="flex gap-4 items-center">
                <Mail className="text-cyan-400 w-5 h-5" />
                <span className="text-white text-sm md:text-base min-[2560px]:text-lg font-light">info@echoandimpact.com</span>
              </div>
              <div className="flex gap-4 items-center">
                <Phone className="text-cyan-400 w-5 h-5" />
                <span className="text-white text-sm md:text-base min-[2560px]:text-lg font-light">0300-1234567</span>
              </div>
              <div className="flex gap-4 items-start">
                <MapPin className="text-cyan-400 w-5 h-5 flex-shrink-0" />
                <span className="text-white text-sm md:text-base min-[2560px]:text-lg font-light leading-tight">North Nazimabad block 3 building 304</span>
              </div>
            </div>
          </div>
        </div>

        {/* FORM CARD */}
        <div className="w-full max-w-[550px] lg:max-w-none lg:w-auto order-1 lg:order-2 
                        -mt-10 max-[425px]:mt-0 md:-mt-[118px] lg:mt-0">
          <div className="relative overflow-hidden w-full lg:w-[45vw] xl:w-[600px] min-[2560px]:w-[800px] backdrop-blur-[30px] border border-white/10 rounded-[2.5rem] p-6 md:p-10 lg:p-12 shadow-2xl"
               style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
            
            <h2 className="relative z-10 text-white text-xl md:text-2xl lg:text-3xl min-[2560px]:text-4xl font-semibold text-center mb-6 lg:mb-10 tracking-tight">
              Tell Us About Your Project
            </h2>

            <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Name", "Email", "Phone", "Company"].map((f) => (
                <input
                  key={f}
                  placeholder={f}
                  className="h-12 lg:h-14 min-[2560px]:h-16 rounded-xl px-5 bg-[#1a1a1a]/90 border border-white/10 text-white text-sm min-[2560px]:text-lg placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/30 transition-all"
                />
              ))}
              <div className="md:col-span-2 relative">
                <select className="w-full h-12 lg:h-14 min-[2560px]:h-16 rounded-xl px-5 bg-[#1a1a1a]/90 border border-white/10 text-gray-400 text-sm min-[2560px]:text-lg appearance-none focus:outline-none cursor-pointer">
                  <option>Service Interest</option>
                  <option>Brand Identity</option>
                  <option>UI/UX Design</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
              <input 
                placeholder="Budget Range ( in $ )" 
                className="md:col-span-2 h-12 lg:h-14 min-[2560px]:h-16 rounded-xl px-5 bg-[#1a1a1a]/90 border border-white/10 text-white text-sm min-[2560px]:text-lg focus:outline-none" 
              />
              <textarea 
                placeholder="Project Description" 
                className="md:col-span-2 min-h-[120px] lg:min-h-[160px] min-[2560px]:min-h-[220px] rounded-xl p-5 bg-[#1a1a1a]/90 border border-white/10 text-white text-sm min-[2560px]:text-lg resize-none focus:outline-none" 
              />
              <div className="md:col-span-2 relative">
                <select className="w-full h-12 lg:h-14 min-[2560px]:h-16 rounded-xl px-5 bg-[#1a1a1a]/90 border border-white/10 text-gray-400 text-sm min-[2560px]:text-lg appearance-none focus:outline-none cursor-pointer">
                  <option>How soon do u want to start</option>
                  <option>Immediately</option>
                  <option>In 1-2 weeks</option>
                </select>
                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;