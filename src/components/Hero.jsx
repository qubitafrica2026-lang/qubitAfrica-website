import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Play,
  Sparkles,
  Copy,
  Check,
  Terminal,
  Cpu,
  Layers,
} from "lucide-react";
import { CodeExample, floatingCards } from "../data/CodeExample";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("state_sup.py");
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const currentFloatingCard = floatingCards[activeTab];

  const handleStartCourse = () => {
    const courseSection = document.getElementById("courses-section");
    if (courseSection) {
      courseSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/courses");
    }
  };

  const handleCopyCode = () => {
    const codeToCopy = CodeExample[activeTab] || "";
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.12), transparent 45%)`,
        }}
      />

      {/* Background Mesh Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-5 sm:left-12 w-64 sm:w-80 h-64 sm:h-80 bg-blue-600/15 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 sm:right-12 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/15 rounded-full blur-[120px] animate-pulse delay-1000 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-center lg:text-left">
          
          {/* Left Hero Column: Text & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/25 rounded-full mb-6 backdrop-blur-md hover:border-cyan-400/40 transition-all duration-300 shadow-sm shadow-blue-500/10">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm text-blue-200 font-medium tracking-wide">
                Training future quantum scientists
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-[1.15]">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent block">
                Join the 2nd quantum
              </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent block mt-1">
                revolution via peer programming
              </span>
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent block mt-1">
                with{" "}
                <span className="text-blue-400 font-bold">qubit</span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">
                  Africa
                </span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed font-light">
              Empowering researchers, developers, and students across Africa with open-source quantum computing algorithms and hands-on hardware training.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <button
                onClick={handleStartCourse}
                className="group w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-xl font-semibold text-sky-950 text-sm sm:text-base transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/25 active:scale-95 shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2.5"
              >
                <span>Start Your Course</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={() => navigate("/about")}
                className="group w-full sm:w-auto px-7 py-3.5 bg-slate-900/60 backdrop-blur-md border border-white/10 hover:border-white/20 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 hover:bg-slate-800/60 active:scale-95 flex items-center justify-center space-x-2.5 text-slate-200 shadow-md"
              >
                <div className="p-1.5 bg-white/10 rounded-full group-hover:bg-cyan-400 group-hover:text-sky-950 transition-colors duration-200">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>Student Experience</span>
              </button>
            </div>
          </div>

          {/* Right Hero Column: Interactive Code Workspace */}
          <div className="lg:col-span-6 relative w-full mt-8 lg:mt-0">
            {/* Ambient Glow behind IDE */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000 pointer-events-none" />

            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl p-2.5 sm:p-4 shadow-2xl border border-white/15">
              <div className="bg-slate-950/90 rounded-xl overflow-hidden border border-white/10 min-h-[340px] sm:min-h-[400px] flex flex-col justify-between">
                
                {/* IDE Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
                    </div>
                    <div className="flex items-center space-x-1.5 text-xs font-semibold tracking-wider ml-2 border-l border-white/10 pl-3">
                      <Terminal className="w-3.5 h-3.5 text-blue-400" />
                      <span className="text-blue-400">qubit</span>
                      <span className="text-cyan-400">Africa</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleCopyCode}
                      className="p-1.5 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-md transition-all duration-200 border border-white/5"
                      title="Copy Code"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-green-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col">
                  {/* File Tabs */}
                  <div className="flex space-x-2 mb-3 overflow-x-auto pb-1 scrollbar-none">
                    {["state_sup.py", "bell_state.py"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3.5 py-1.5 text-xs rounded-lg border transition-all duration-200 whitespace-nowrap font-mono flex items-center space-x-2 ${
                          activeTab === tab
                            ? "bg-blue-500/20 text-cyan-300 border-blue-400/40 shadow-inner"
                            : "bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-slate-200"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{tab}</span>
                      </button>
                    ))}
                  </div>

                  {/* Code Viewer */}
                  <div className="text-left font-mono rounded-lg overflow-hidden text-xs sm:text-sm flex-1 border border-white/5 relative">
                    <SyntaxHighlighter
                      language="python"
                      style={oneDark}
                      customStyle={{
                        background: "rgba(10, 15, 30, 0.75)",
                        padding: "1.25rem",
                        margin: 0,
                        borderRadius: "8px",
                        height: "100%",
                        maxHeight: "270px",
                        overflowY: "auto",
                        fontSize: "0.85rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {CodeExample[activeTab] || "# Loading workspace source..."}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>

              {/* Floating Information Card */}
              {currentFloatingCard && (
                <div
                  className={`mt-4 lg:mt-0 lg:absolute lg:-bottom-6 lg:-right-6 w-full lg:w-72 ${currentFloatingCard.bgColor} backdrop-blur-2xl rounded-xl p-4 border border-white/20 shadow-2xl text-left transition-all duration-300 hover:scale-[1.02]`}
                >
                  <div className="flex items-center space-x-2.5 mb-2">
                    <div
                      className={`w-7 h-7 rounded-lg ${currentFloatingCard.iconColor} flex items-center justify-center text-sm font-bold shadow-md`}
                    >
                      {currentFloatingCard.icon}
                    </div>
                    <span className={`text-sm font-semibold ${currentFloatingCard.textColor}`}>
                      {currentFloatingCard.title}
                    </span>
                  </div>
                  <p className={`text-xs ${currentFloatingCard.contentColor} leading-relaxed font-light`}>
                    {currentFloatingCard.content}
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}