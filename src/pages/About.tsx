import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SectionHeader from "@/components/SectionHeader";
import { Users, Target, Award, Lightbulb, Linkedin, Twitter } from "lucide-react";

const About = () => {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "5+", label: "Years Experience" },
    { value: "30+", label: "Happy Clients" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const values = [
    { 
      icon: Target, 
      title: "Excellence", 
      description: "We strive for perfection in every pixel, line of code, and strategy we create." 
    },
    { 
      icon: Lightbulb, 
      title: "Innovation", 
      description: "Staying ahead of trends to deliver cutting-edge solutions for our clients." 
    },
    { 
      icon: Users, 
      title: "Collaboration", 
      description: "Working closely with clients as partners to achieve shared goals." 
    },
    { 
      icon: Award, 
      title: "Integrity", 
      description: "Transparent communication and honest relationships built on trust." 
    },
  ];

  const team = [
    { 
      name: "Alex Chen", 
      role: "Founder & Creative Director", 
      image: null,
      bio: "10+ years leading creative teams at top agencies.",
      linkedin: "#",
      twitter: "#",
    },
    { 
      name: "Sarah Mitchell", 
      role: "Head of Development", 
      image: null,
      bio: "Full-stack expert passionate about clean code.",
      linkedin: "#",
      twitter: "#",
    },
    { 
      name: "Marcus Johnson", 
      role: "Marketing Strategist", 
      image: null,
      bio: "Growth specialist who's scaled multiple startups.",
      linkedin: "#",
      twitter: "#",
    },
    { 
      name: "Emily Rodriguez", 
      role: "Lead Designer", 
      image: null,
      bio: "Award-winning designer with an eye for detail.",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan/5 via-transparent to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[150px] opacity-20" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-cyan">Echo & Impact</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            We're a team of passionate creatives, developers, and strategists dedicated to helping brands make their mark in the digital world.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-cyan mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-cyan">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Echo & Impact was founded in 2019 with a simple mission: to help brands create meaningful digital experiences that resonate with their audiences and drive real business results.
                </p>
                <p>
                  What started as a small team of three has grown into a full-service digital agency serving clients across industries. We've stayed true to our roots—combining creativity with strategy, and design with technology.
                </p>
                <p>
                  Today, we continue to push boundaries, embracing new technologies and trends while never losing sight of what matters most: helping our clients succeed.
                </p>
              </div>
            </div>
            <div className="card-glass p-4">
              <div className="aspect-square bg-card/50 rounded-lg flex items-center justify-center border border-border/30">
                <span className="text-muted-foreground">Team Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Our" 
            highlight="Values" 
            subtitle="The principles that guide everything we do"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="card-glass p-6 hover-glow group text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
                  <value.icon className="w-7 h-7 text-cyan" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-cyan transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Meet Our" 
            highlight="Team" 
            subtitle="The talented people behind Echo & Impact"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="card-glass p-6 hover-glow group">
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-card/50 border border-border/30 flex items-center justify-center overflow-hidden">
                  <span className="text-muted-foreground text-xs">Photo</span>
                </div>
                
                <div className="text-center">
                  <h3 className="font-display font-semibold text-lg group-hover:text-cyan transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-cyan text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <a 
                      href={member.linkedin} 
                      className="w-8 h-8 rounded-lg bg-card/50 border border-border/30 flex items-center justify-center hover:bg-cyan/10 hover:border-cyan/30 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-muted-foreground hover:text-cyan" />
                    </a>
                    <a 
                      href={member.twitter} 
                      className="w-8 h-8 rounded-lg bg-card/50 border border-border/30 flex items-center justify-center hover:bg-cyan/10 hover:border-cyan/30 transition-colors"
                    >
                      <Twitter className="w-4 h-4 text-muted-foreground hover:text-cyan" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Ready to Work"
        highlight="Together?"
        subtitle="Let's create something amazing for your brand."
      />
    </div>
  );
};

export default About;
