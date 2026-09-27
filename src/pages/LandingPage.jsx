import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Quantum Science Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <CourseCard
          title="Introduction to Quantum Computing"
          description="Qubits, algorithms, and real-world applications"
          onClick={() => navigate("/course/quantum-computing")}
        />
      </div>
    </div>
  );
}

function CourseCard({ title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-slate-900 p-6 rounded-2xl
      hover:bg-slate-800 transition transform hover:-translate-y-1"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}
