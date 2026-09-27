import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Users,
  Award,
  Globe,
  Building2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  HeartHandshake,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

function LinkedinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function TwitterIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const founders = [
    {
      id: 1,
      name: "Helarie MEDIE FAH",
      role: "Co-Founder",
      bio: "PhD Student in Quantum Computing at University of KwaZulu-Natal. Passionate about democratizing quantum hardware access across Africa through open-source education.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
      category: "founders",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" },
    },
    {
      id: 2,
      name: "Godfred Badu",
      role: "Co-Founder & Head of Community",
      bio: "Tech Lead & Quantum Software Architect. Driven by building collaborative peer-programming networks for future researchers.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
      category: "founders",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" },
    },
    {
      id: 3,
      name: "Dr. Comfort Mintah",
      role: "Head of Educational Curriculum",
      bio: "Specializing in Qiskit and quantum error correction algorithms. Has trained over 500+ students across Africa in quantum error correction.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
      category: "leads",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" },
    },
    {
      id: 4,
      name: "Prof. Dr. Andreas Buchleitner",
      role: "Director of Research Partnerships",
      bio: "Bridging global academic research centers with pan-African innovation hubs. Dedicated to open-science quantum research.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      category: "leads",
      socials: { linkedin: "https://linkedin.com", twitter: "https://x.com", github: "https://github.com" },
    },
  ];

  const stats = [
    { value: "55+", label: "Learners Trained", icon: Users },
    { value: "50+", label: "Certificates Issued", icon: Award },
    { value: "40+", label: "Countries Reached", icon: Globe },
    { value: "20+", label: "Academic & Industry Partners", icon: Building2 },
  ];

  const sponsors = [
    { name: "IBM Quantum Network", category: "Tier 1 Partner", logo: "⚛️ CQCtech" },
    { name: "Qiskit Community", category: "Ecosystem Partner", logo: "🚀 Academic City" },
    { name: "PennyLane AI", category: "Quantum Machine Learning", logo: "🌌 UKZN" },
    { name: "African Physics Society", category: "Academic Alliance", logo: "🔬 Google" },
    { name: "Global Quantum Hub", category: "Research Grant Sponsor", logo: "🌐 GQ Hub" },
    { name: "DeepTech Africa", category: "Inkubator Partner", logo: "💡 IBM" },
  ];

  const filteredTeam =
    activeTab === "all" ? founders : founders.filter((member) => member.category === activeTab);

  return (
    <div className="min-h-screen bg-sky-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-sky-950 overflow-x-hidden">
      {/* Dynamic Cursor Gradient Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-xs sm:text-sm text-blue-300">
            About <span className="text-blue-400 font-medium">qubit</span>
            <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-medium">
              Africa
            </span>
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 leading-tight text-white">
          Empowering Quantum Leadership in Africa
        </h1>

        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          qubitAfrica is a premier community-led initiative empowering the next generation of
          scientists, engineers, and quantum thinkers through hands-on peer programming,
          accessible research tools, and pan-African academic collaboration.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#team"
            className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-lg font-semibold text-sky-950 hover:opacity-95 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2"
          >
            <span>Meet Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#sponsors"
            className="w-full sm:w-auto px-7 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-slate-200 hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
          >
            <span>Our Sponsors & Partners</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </a>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-100 mb-4">
            Founders & Leadership Team
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Meet the visionary researchers, software architects, and educators building Africa's quantum future.
          </p>

          <div className="flex items-center justify-center space-x-2 mt-8">
            {["all", "founders", "leads"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs sm:text-sm capitalize rounded-lg border transition-all ${
                  activeTab === tab
                    ? "bg-blue-500/30 text-white border-blue-400/40 shadow-lg shadow-blue-500/10"
                    : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10"
                }`}
              >
                {tab === "all" ? "All Team" : tab === "founders" ? "Founders" : "Leads & Directors"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950 via-sky-950/20 to-transparent" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-sky-950/80 backdrop-blur-md rounded-full border border-white/10 text-[10px] text-cyan-300 uppercase tracking-wider font-semibold">
                    {member.category}
                  </div>
                </div>

                <div className="p-6 relative -mt-6">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium mb-3 mt-1">{member.role}</p>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6">{member.bio}</p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 border-t border-white/5 flex items-center space-x-3">
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-lg text-gray-300 hover:text-cyan-300 transition-colors border border-white/5"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-lg text-gray-300 hover:text-cyan-300 transition-colors border border-white/5"
                  aria-label="Twitter/X"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 bg-white/5 hover:bg-blue-500/20 rounded-lg text-gray-300 hover:text-cyan-300 transition-colors border border-white/5"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative w-full border-y border-white/10 bg-slate-900/40 backdrop-blur-md py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((item, i) => {
              const IconComp = item.icon;
              return (
                <div key={i} className="text-center group">
                  <div className="inline-flex items-center justify-center p-3 mb-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {item.value}
                  </p>
                  <p className="text-sm text-gray-400 mt-2 font-medium">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-100 mb-4">
            Backed by Industry Leaders
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            We partner with leading technology providers, universities, and research institutes worldwide to grant compute access and funding.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sponsors.map((sponsor, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-all text-center flex flex-col justify-center items-center group"
            >
              <div className="text-lg font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                {sponsor.logo}
              </div>
              <p className="text-[10px] text-gray-400 mt-2 font-medium">{sponsor.category}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}