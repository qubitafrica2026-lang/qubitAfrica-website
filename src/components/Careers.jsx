import groupPic from "../assets/pic3.jpg";



export default function Careers() {
  const stats = [
    { value: "55+", label: "Learners Trained" },
    { value: "50+", label: "Certificates Issued" },
    { value: "40+", label: "Countries Reached" },
    { value: "20+", label: "Academic & Industry Partners" },
  ];

  return (
    <section className="w-full bg-sky-950 py-20">
      
      {/* CONTENT */}
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-semibold text-slate-200 mb-4">
          Quantum Community
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm">
          United by a shared passion for quantum technologies, our global
          community spans learners, researchers, and institutions driving the
          next wave of quantum innovation.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {stats.map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-extrabold bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {item.value}
              </p>
              <p className="text-sm text-gray-400 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ FULL-WIDTH RESPONSIVE IMAGE */}
      <div className="mt-16 w-full h-[70vh] relative">
        <img
          src= {groupPic}
          alt="Global Quantum Community"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
