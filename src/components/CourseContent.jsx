export default function CourseContent() {
  return (
    <main className="flex-1 bg-sky-950 overflow-y-auto p-8 md:ml-20">
      
      {/* Full-width container with sane max width */}
      <div className="w-full max-w-[1600px]">

        {/* Header */}
        <section className="mb-12">
          <h1 className="text-4xl font-md mb-4">
            Introduction to Quantum Computing
          </h1>

          <p className="text-slate-300 max-w-3xl mt-4">
            This course introduces the principles of quantum computation,
            quantum information processing, and real-world applications
            using modern quantum frameworks. Click any day's topic below to launch 
            its specific Google Colab notebook.
          </p>
        </section>

        {/* Grid content */}
        <div
          className="
            grid gap-8
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
          "
        >

          {/* Prerequisites */}
          <section className="bg-sky-900/40 border border-sky-800 backdrop-blur p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-sky-100">
              Prerequisites
            </h2>

            <ul className="list-disc ml-6 space-y-2 text-slate-300">
              <li>Python Programming</li>
              <li>Linear Algebra</li>
              <li>Calculus</li>
              <li>Quantum Mechanics</li>
            </ul>
          </section>

          {/* Week 1 */}
          <Week
            title="Week 1: Foundations of Quantum Computing"
            days={[
              { 
                title: "Classical vs Quantum Computation", 
                colabUrl: "https://github.com/qubitafrica2026-lang/QubitAfrica-Summer-School-2027/blob/main/Classical_and_quantum_computing.ipynb" 
              },
              { 
                title: "Qubits & Bloch Sphere", 
                colabUrl: "https://github.com/qubitafrica2026-lang/QubitAfrica-Summer-School-2027/blob/main/quantum_information.ipynb" 
              },
              { 
                title: "Quantum Gates", 
                colabUrl: "https://github.com/qubitafrica2026-lang/QubitAfrica-Summer-School-2027/blob/main/quantum_information.ipynb" 
              },
              { 
                title: "Measurement & Entanglement", 
                colabUrl: "https://colab.research.google.com/github/your-username/your-repo/blob/main/week1/day4.ipynb" 
              },
              { 
                title: "Quantum Circuits with Qiskit", 
                colabUrl: "https://colab.research.google.com/github/your-username/your-repo/blob/main/week1/day5.ipynb" 
              },
            ]}
          />

          {/* Week 2 */}
          <Week
            title="Week 2: Algorithms & Applications"
            days={[
              { 
                title: "Deutsch-Jozsa Algorithm", 
                colabUrl: "https://colab.research.google.com/github/your-username/your-repo/blob/main/week2/day1.ipynb" 
              },
              { 
                title: "Grover’s Search Algorithm", 
                colabUrl: "https://colab.research.google.com/github/your-username/your-repo/blob/main/week2/day2.ipynb" 
              },
              { 
                title: "Shor’s Algorithm (Conceptual)", 
                colabUrl: "https://colab.research.google.com/github/your-username/your-repo/blob/main/week2/day3.ipynb" 
              },
              { 
                title: "Quantum Communication & QKD", 
                colabUrl: "https://colab.research.google.com/github/your-username/your-repo/blob/main/week2/day4.ipynb" 
              },
              { 
                title: "Applications in AI, Chemistry & Security", 
                colabUrl: "https://colab.research.google.com/github/your-username/your-repo/blob/main/week2/day5.ipynb" 
              },
            ]}
          />

        </div>
      </div>
    </main>
  );
}


function Week({ title, days }) {
  return (
    <section className="bg-sky-900/40 border border-sky-800 backdrop-blur p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-sky-100">
        {title}
      </h2>

      <div className="space-y-3">
        {days.map((day, i) => (
          <a
            key={i}
            href={day.colabUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-sky-950/60 border border-sky-900/60 p-3 rounded-lg hover:bg-sky-800/80 hover:border-sky-600 transition group cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sky-200 group-hover:text-white transition-colors">
                Day {i + 1}
              </h3>
              <span className="text-xs bg-sky-900 text-sky-300 px-2 py-0.5 rounded-full border border-sky-700 flex items-center gap-1">
                Open in Colab ↗
              </span>
            </div>
            <p className="text-slate-300 mt-1 text-sm">{day.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
}