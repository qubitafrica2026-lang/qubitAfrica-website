import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
import { CodeExample, floatingCards } from "../data/CodeExample";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("state_sup.py");
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

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic Cursor Gradient Effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Ambient background glows */}
      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center text-center lg:text-left">
          
          {/* Left Hero Column: Text & CTAs */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-xs sm:text-sm text-blue-200 font-medium">
                The Future of Quantum Learning
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1">
                Join the 2nd quantum revolution
              </span>
              <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1">
                via peer programming
              </span>
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block">
                with <span className="text-blue-400">qubit</span>
                <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Africa
                </span>
              </span>
            </h1>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl mb-8 leading-relaxed">
              Empowering researchers, developers, and students across Africa with open-source quantum computing algorithms and hands-on hardware training.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <button
                onClick={handleStartCourse}
                className="group w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg font-semibold text-sky-950 text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2"
              >
                <span>Start Your Course</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigate("/about")}
                className="group w-full sm:w-auto px-7 py-3.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2 text-slate-200"
              >
                <div className="p-1.5 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-white text-white" />
                </div>
                <span>Student Experience</span>
              </button>
            </div>
          </div>

          {/* Right Hero Column: Interactive IDE Component */}
          <div className="relative w-full mt-6 lg:mt-0">
            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-3 sm:p-5 shadow-2xl border border-white/10">
              <div className="bg-slate-950/80 rounded-xl overflow-hidden border border-white/10 min-h-[300px] sm:min-h-[380px]">
                
                {/* IDE Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="text-xs font-semibold tracking-wider">
                      <span className="text-blue-400">qubit</span>
                      <span className="text-cyan-400">Africa</span>
                    </div>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>

                <div className="p-4">
                  {/* Tabs */}
                  <div className="flex space-x-2 mb-4 overflow-x-auto pb-1">
                    {["state_sup.py", "bell_state.py"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3.5 py-1.5 text-xs sm:text-sm rounded-lg border transition-all duration-200 whitespace-nowrap font-mono ${
                          activeTab === tab
                            ? "bg-blue-500/30 text-cyan-300 border-blue-400/40 shadow-sm"
                            : "bg-white/5 text-gray-400 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Code Viewer */}
                  <div className="text-left font-mono rounded-lg overflow-hidden text-xs sm:text-sm">
                    <SyntaxHighlighter
                      language="python"
                      style={oneDark}
                      customStyle={{
                        background: "rgba(15, 23, 42, 0.6)",
                        padding: "1rem",
                        borderRadius: "8px",
                        border: "1px solid rgba(255, 255, 255, 0.05)",
                        maxHeight: "260px",
                        overflowY: "auto",
                      }}
                    >
                      {CodeExample[activeTab] || "# Code loading..."}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>

              {/* Floating Information Card */}
              {currentFloatingCard && (
                <div
                  className={`mt-4 lg:mt-0 lg:absolute lg:-bottom-6 lg:-right-6 w-full lg:w-72 ${currentFloatingCard.bgColor} backdrop-blur-xl rounded-xl p-4 border border-white/20 shadow-2xl text-left transition-all duration-300`}
                >
                  <div className="flex items-center space-x-2.5 mb-1.5">
                    <div
                      className={`w-7 h-7 rounded-lg ${currentFloatingCard.iconColor} flex items-center justify-center text-sm font-bold shadow-sm`}
                    >
                      {currentFloatingCard.icon}
                    </div>
                    <span className={`text-sm font-semibold ${currentFloatingCard.textColor}`}>
                      {currentFloatingCard.title}
                    </span>
                  </div>
                  <p className={`text-xs ${currentFloatingCard.contentColor} leading-relaxed`}>
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