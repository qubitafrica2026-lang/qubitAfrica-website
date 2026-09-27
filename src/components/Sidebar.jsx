import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Sidebar({ open, setOpen }) {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (id) => setOpenSection(openSection === id ? null : id);

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed md:sticky top-16 z-40 w-72 shrink-0
        bg-sky-950 font-light border-r border-slate-800/80
        h-[calc(100vh-4rem)] overflow-y-auto md:overflow-y-visible
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <h2 className="text-lg font-light tracking-wide text-white">Course Menu</h2>
          <button className="md:hidden text-gray-300" onClick={() => setOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-4 text-sm font-light">
          <Dropdown
            title="Prerequisites"
            open={openSection === "pre"}
            toggle={() => toggle("pre")}
            items={[
              "Intro to Programming (Python)",
              "Linear Algebra",
              "Calculus",
              "Quantum Mechanics",
            ]}
          />

          <Dropdown
            title="Course Sections"
            open={openSection === "sections"}
            toggle={() => toggle("sections")}
            items={[
              "Qubits & Superposition",
              "Quantum Gates",
              "Quantum Circuits",
              "Quantum Algorithms",
              "Quantum Hardware",
            ]}
          />

          <Dropdown
            title="Week 1 Activities"
            open={openSection === "w1"}
            toggle={() => toggle("w1")}
            items={Array.from({ length: 5 }, (_, i) => `Day ${i + 1}`)}
          />

          <Dropdown
            title="Week 2 Activities"
            open={openSection === "w2"}
            toggle={() => toggle("w2")}
            items={Array.from({ length: 5 }, (_, i) => `Day ${i + 6}`)}
          />
        </nav>
      </aside>

      {/* HAMBURGER (Mobile Only) */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-20 left-4 z-30 md:hidden bg-slate-800/80 backdrop-blur-md p-2 rounded-lg text-white border border-slate-700"
      >
        <Menu className="w-5 h-5" />
      </button>
    </>
  );
}

function Dropdown({ title, open, toggle, items }) {
  return (
    <div className="border-b border-slate-800/50 pb-3">
      <button
        onClick={toggle}
        className="flex justify-between w-full items-center font-light text-slate-200 hover:text-white transition-colors text-left"
      >
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180 text-cyan-400" : "text-slate-400"}`} />
      </button>

      {open && (
        <ul className="mt-2 ml-3 space-y-2 text-xs font-light text-slate-400">
          {items.map((item) => (
            <li key={item} className="hover:text-cyan-300 transition-colors cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}