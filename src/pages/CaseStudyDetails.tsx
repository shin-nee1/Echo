import React, { useEffect } from 'react';
import { useSearchParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { caseStudiesData } from '../data/study'; // This pulls from the file above

const CaseStudyDetails = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  // Find the matching case study data
  const study = caseStudiesData.find((s) => s.id === id);

  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // If someone goes to this URL without an ID, or a bad ID, send them back to the Work page
  if (!study) {
    return <Navigate to="/work" replace />;
  }

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="w-full min-h-screen pt-32 pb-24 px-6 md:px-10 max-w-5xl mx-auto relative z-10 text-white">
      
      {/* Back Button */}
      <Link 
        to="/work" 
        className="inline-flex items-center gap-2 text-white/60 hover:text-[#42ACC0] transition-colors mb-10 text-sm font-medium uppercase tracking-wider"
      >
        <ArrowLeft size={16} />
        Back to Work
      </Link>

      <motion.div initial="hidden" animate="visible" variants={fadeUp} className="space-y-20">
        
        {/* ================= HERO SECTION ================= */}
        <section>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-[#42ACC0]">
            {study.title}
          </h1>
          <div className="space-y-6 text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-4xl">
            {study.heroDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* ================= WORKFLOW SECTION ================= */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 border-b border-white/10 pb-4">Workflow Overview</h2>
          <p className="text-white/70 mb-10 text-lg">{study.workflow.overview}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {study.workflow.steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors"
              >
                <div className="text-[#42ACC0] text-sm font-bold tracking-widest mb-3">
                  STEP {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= DISCOVERY SECTION ================= */}
        <section>
          <h2 className="text-3xl font-semibold mb-6 border-b border-white/10 pb-4">Discovery & Overview</h2>
          <div className="space-y-6 text-white/80 leading-relaxed text-lg bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-3xl p-6 md:p-10">
            {study.discovery.map((paragraph, index) => (
              <p key={index} className={paragraph.startsWith('•') ? "pl-4 text-[#42ACC0]" : ""}>
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* ================= PROBLEMS & SOLUTIONS ================= */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 border-b border-white/10 pb-4">Problems & Solutions</h2>
          <div className="space-y-8">
            {study.problemsAndSolutions.map((item, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#010a0f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                
                {/* Problem Box */}
                <div className="p-6 md:p-8 bg-red-500/5 border-b md:border-b-0 md:border-r border-white/5">
                  <div className="flex items-center gap-2 text-red-400 font-semibold mb-4 uppercase tracking-wider text-sm">
                    <AlertCircle size={18} />
                    The Problem
                  </div>
                  <p className="text-white/80 leading-relaxed">{item.problem}</p>
                </div>

                {/* Solution Box */}
                <div className="p-6 md:p-8 bg-[#42ACC0]/5">
                  <div className="flex items-center gap-2 text-[#42ACC0] font-semibold mb-4 uppercase tracking-wider text-sm">
                    <CheckCircle2 size={18} />
                    The Solution
                  </div>
                  <p className="text-white/80 leading-relaxed">{item.solution}</p>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* ================= TECH STACK ================= */}
        <section className="text-center pb-10">
          <div className="inline-block bg-white/5 border border-[#42ACC0]/30 rounded-full px-8 py-4">
            <h3 className="text-[#42ACC0] font-semibold tracking-widest uppercase text-sm mb-2">Tech Stack</h3>
            <p className="text-white/80">{study.techStack}</p>
          </div>
        </section>

      </motion.div>
    </div>
  );
};

export default CaseStudyDetails;