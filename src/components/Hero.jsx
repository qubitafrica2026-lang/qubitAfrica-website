import { ArrowRight, ChevronDown, Play, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { CodeExample, floatingCards } from "../data/CodeExample";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("state_sup.py");

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const currentFloatignCard = floatingCards[activeTab];
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />


      <div className="max-w-7xl mx-auto text-center relative w-full ">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative">

        {/* Texts for Hero Section */}
        <div>
         

          <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 animate-in slide-in-from-buttom anim-duration-700 delay-100 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">Join the 2nd quantum revolution</span>
            <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">via peer programming </span>
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">with <span className="text-blue-400">qubit</span>
                            <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2">Africa</span></span>
          </h1>

         

          <div className="flex flex-col sm:flex-row xl:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-9 sm:mb-12 animate-in slide-in-from-bottom anim-duration-700 delay-300 ">
            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition all anim-duration-300 hover:scale-102 flex items-center justify-center space-x-2 ">
              <span>
                Start Your Course 
                
              </span>
              < ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform anim-duration-300"/>
            </button>
            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition all anim-duration-300 hover:bg-white/10 flex items-center justify-center space-x-2 ">
              <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 anim-duration-300 transition-colors">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
              </div>

              <span>Students Experience</span>
            </button>
          </div>
        </div>


      <div className="relative order-2 w-full">
        <div className="relative bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
          <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/5">

            {/* IDE Header */}
            <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                </div>
                 <div>
                  <span className="text-blue-400">qubit</span>
                 <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2">Africa</span>
                 </div>
              </div>
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            </div>

            <div className="p-3 sm:p-4 relative h-full">
              {/* Tabs */}
              <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                <button
                  onClick={() => setActiveTab("state_sup.py")}
                  className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                    activeTab === "state_sup.py"
                      ? "bg-blue-500/30 text-white border-blue-400/20"
                      : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                  } transition-all duration-200 whitespace-nowrap`}
                >
                  state_sup.py
                </button>

                <button
                  onClick={() => setActiveTab("bell_state.py")}
                  className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${
                    activeTab === "bell_state.py"
                      ? "bg-blue-500/30 text-white border-blue-400/20"
                      : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                  } transition-all duration-200 whitespace-nowrap`}
                >
                  bell_state.py
                </button>
              </div>

              {/* Code viewer */}
              <div className="relative overflow-hidden flex-grow">
                <SyntaxHighlighter
                  language="python"
                  style={oneDark}
                  customStyle={{
                    background: "transparent",
                    fontSize: "0.55rem",
                    lineHeight: "1.3",
                    borderRadius:"8px",
                    border:"1px solid #3c3c3c",
                  }}
                >
                  {CodeExample[activeTab]}
                </SyntaxHighlighter>
              </div>
            </div>

          </div>

          {/* Floating cards */}
          <div className={`hidden lg:block absolute button-4 right-4 transform translate-x-8 translate-y-8 w-72 ${currentFloatignCard.bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl`}>
                  <div className="flex items-center space-x-2 mb-2">
                      <div className={`w-6 h-6 ${currentFloatignCard.iconColor} flex items-center justify-center text-sm font-bold`}>{currentFloatignCard.icon}</div>
                      <span className={`text-sm font-medium ${currentFloatignCard.textColor} `}>{currentFloatignCard.title}</span>
                  </div>

                  <div className={`text-sm text-left ${currentFloatignCard.contentColor} `}>{currentFloatignCard.content}</div>
          </div>
        </div>
      </div>
       </div>
      </div>
    </section>
  );
}
