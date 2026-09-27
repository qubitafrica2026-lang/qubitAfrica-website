import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Sidebar({ open, setOpen }) {
  const [openSection, setOpenSection] = useState(null);

  const toggle = (id) =>
    setOpenSection(openSection === id ? null : id);

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
        className={`fixed top-16 md:relative md:top-0 z-40 w-72
        bg-sky-950 h-[calc(100vh-4rem)]
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-xl font-semibold">Course Menu</h2>
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        <nav className="overflow-y-auto h-full p-4 space-y-4">
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

      {/* HAMBURGER */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-20 left-4 z-30 md:hidden bg-slate-800 p-2 rounded-lg"
      >
        <Menu />
      </button>
    </>
  );
}

function Dropdown({ title, open, toggle, items }) {
  return (
    <div>
      <button
        onClick={toggle}
        className="flex justify-between w-full items-center font-medium"
      >
        {title}
        <ChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul className="mt-2 ml-3 space-y-1 text-sm text-slate-300">
          {items.map((item) => (
            <li key={item} className="hover:text-white cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
