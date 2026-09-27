import React from "react";
import { Cpu, Book, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Courses({ navigateFn }) {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Quantum Computing and its applications",
      icon: Cpu,
      desc: "Learn qubits, gates, circuits, and the foundations of quantum algorithms.",
    },
    {
      title: "Quantum Information and its applications",
      icon: Book,
      desc: "Explore quantum entropy, density matrices, channels, and error correction.",
    },
    {
      title: "Quantum Optics",
      icon: Zap,
      desc: "Study photons, interferometers, detectors, and light–matter interaction.",
    },
  ];

  const handleCardClick = (path) => {
    if (typeof navigateFn === "function") {
      navigateFn(path);
    } else {
      navigate(path);
    }
  };

  return (
    <div className="w-full min-h-screen bg-sky-950 pt-28 pb-16 px-6 font-light flex flex-col items-center">
      <div className="text-center mb-12 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-normal text-white mb-3 tracking-wide">
          Explore Our Courses
        </h1>
        <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
          Select a course below to dive into tutorials, interactive notebooks, and quantum hardware concepts.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {cards.map((card, i) => {
          const Icon = card.icon;
          const path = `/course/${card.title.toLowerCase().replace(/\s+/g, "-")}`;

          return (
            <div
              key={i}
              role="button"
              tabIndex={0}
              onClick={() => handleCardClick(path)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleCardClick(path);
                }
              }}
              className="p-8 bg-white/5 rounded-3xl shadow-xl border border-white/10 hover:border-cyan-500/30 backdrop-blur-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="p-4 bg-cyan-500/10 rounded-2xl group-hover:scale-105 transition-transform">
                    <Icon size={32} className="text-cyan-400" />
                  </div>
                  <h2 className="text-xl font-medium text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug">
                    {card.title}
                  </h2>
                </div>
                <p className="text-sm text-gray-300 font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}