import React from "react";
import { Cpu, Book, Zap } from "lucide-react";


export default function Courses({ navigateFn } = {}) {
  const cards = [
    {
      title: "Quantum Computing and its applications",
      path: "/course/quantum-computing",
      icon: Cpu,
      desc: "Learn qubits, gates, circuits, and the foundations of quantum algorithms.",
    },
    {
      title: "Quantum Information and its applications",
      path: "/course/quantum-information",
      icon: Book,
      desc: "Explore quantum entropy, density matrices, channels, and error correction.",
    },
    {
      title: "Quantum Optics",
      path: "/course/quantum-optics",
      icon: Zap,
      desc: "Study photons, interferometers, detectors, and light–matter interaction.",
    },
  ];

  // Default navigation function uses full-page navigation. If a router is
  // available in the parent app, pass a navigateFn that calls the router's
  // navigate() (e.g. from useNavigate()).
  const defaultNavigate = (path) => {
    // preserve SPA-like behaviour when possible by using history API
    try {
      window.history.pushState({}, "", path);
      // optionally fire a popstate so client-side routers listening for it can react
      window.dispatchEvent(new PopStateEvent("popstate"));
    } catch (e) {
      // fallback to a full redirect
      window.location.assign(path);
    }
  };

  const go = typeof navigateFn === "function" ? navigateFn : defaultNavigate;

  return (
    <div className="max-h-auto w-full flex items-center justify-center  bg-sky-950 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {cards.map((card, i) => {
          const Icon = card.icon;
          const path = `/course/${card.title.toLowerCase().replace(/\s+/g, "-")}`;

          return (
            <div
              key={i}
              role="button"
              tabIndex={0}
              onClick={() => go(path)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  go(path);
                }
              }}
              className="p-8  bg-sky-950/20 rounded-3xl shadow-lg border border-slate-400/20 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 hover:bg-sky-400/40 focus:outline-none focus:ring-4 focus:ring-indigo-200"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-4 bg-blue-400/20 rounded-2xl">
                  <Icon size={32} className="text-white-400" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-200">{card.title}</h2>
              </div>
              <p className="text-sm  text-gray-400 leading-relaxed ">{card.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
