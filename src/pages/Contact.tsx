import { useState } from "react";
import Navbar from "@/components/Navbar";
import FAQ from "@/components/FAQ";
import ProcessSection, {
  type ProcessStepData,
} from "@/components/ProcessSection";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  /* ================= PROCESS STEPS ================= */

  const processSteps: ProcessStepData[] = [
    {
      number: "01",
      title: "REVIEW",
      description:
        "We review your submission to understand your goals and requirements.",
      icon: "🔍",
    },
    {
      number: "02",
      title: "CONVERSATION",
      description:
        "If aligned, we schedule a discovery call to clarify scope and direction.",
      icon: "💡",
    },
    {
      number: "03",
      title: "NEXT STEPS",
      description:
        "You receive a clear proposal covering approach, timeline, and pricing.",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen bg-[#010a0f] text-white">
      <Navbar />

      {/* ==================================================
          TELL US ABOUT YOUR PROJECT (FULL GLASS SECTION)
      ================================================== */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute -right-40 bottom-0 w-[600px] h-[600px] bg-cyan-600/5 blur-[150px] rounded-full" />

        <div className="container mx-auto px-6 lg:px-20 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Tell Us About Your{" "}
              <span className="text-[#00d8ff]">Project</span>
            </h1>

            <p className="text-slate-400 max-w-md text-lg">
              Ready to bring your vision to life? Share a few details and we’ll
              help you move forward with clarity and confidence.
            </p>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>0300-1234567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>info@yourbrand.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>North Nazimabad, Block 3, Building 304</span>
              </div>
            </div>
          </div>

          {/* GLASS FORM CARD */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent blur-3xl rounded-[2.5rem]" />

            <div className="relative bg-[#051118]/70 border border-white/10 backdrop-blur-2xl rounded-[2.5rem] p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
              <h2 className="text-xl font-semibold mb-8">
                Tell Us About Your Project
              </h2>

              <form
                onSubmit={handleSubmit}
                className="grid md:grid-cols-2 gap-5"
              >
                <Input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10"
                />

                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10"
                />

                <Input
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-white/5 border-white/10 md:col-span-2"
                />

              <select
  name="budget"
  value={formData.budget}
  onChange={handleChange}
  className="h-10 rounded-md bg-white/5 border border-white/10 backdrop-blur-2xl text-white px-3 md:col-span-2"
>
  <option value="" className="bg-black text-white">
    Budget Range
  </option>
  <option value="5k-10k" className="bg-black text-white">
    $5k – $10k
  </option>
  <option value="10k-25k" className="bg-black text-white">
    $10k – $25k
  </option>
  <option value="25k-50k" className="bg-black text-white">
    $25k – $50k
  </option>
  <option value="50k+" className="bg-black text-white">
    $50k+
  </option>
</select>



                <Textarea
                  name="message"
                  placeholder="Project Description"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="md:col-span-2 min-h-[150px] bg-white/5 border-white/10"
                />

                <select
  name="timeline"
  value={formData.timeline}
  onChange={handleChange}
  className="h-10 rounded-md bg-white/5 border border-white/10 backdrop-blur-2xl text-white px-3 md:col-span-2"
>
  <option value="" className="bg-black text-white">
    How soon do you want to start?
  </option>
  <option value="1-2months" className="bg-black text-white">
    1–2 months
  </option>
  <option value="2-3months" className="bg-black text-white">
    2–3 months
  </option>
  <option value="3-6months" className="bg-black text-white">
    3–6 months
  </option>
  <option value="6months+" className="bg-black text-white">
    6+ months
  </option>
</select>

                <Button
                  type="submit"
                  className="md:col-span-2 mt-4 bg-[#00d8ff] text-black hover:bg-[#00c8ec]"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS SECTION ================= */}
      <ProcessSection
        title="What Happens"
        highlight="Next"
        steps={processSteps}
      />

      <FAQ />
    </div>
  );
};

export default Contact;
