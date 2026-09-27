import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPage from "./components/About";
import Courses from "./components/Courses"; // Make sure path matches your structure
import Footer from "./components/Footer";

import QuantumCoursePage from "./pages/QuantumCoursePage";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-sky-950 text-white overflow-hidden scroll-smooth">
      <Navbar />
      <Hero />
      
      {/* Renders the course cards grid */}
      <Courses navigateFn={(path) => navigate(path)} />

      <Routes>
        <Route path="about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Allows nested routes inside LandingPage (like /about) to match */}
      <Route path="/*" element={<LandingPage />} />

      {/* FULL COURSE PAGE - Matches the slug generated in Courses */}
      <Route
        path="/course/quantum-computing-and-its-applications"
        element={<QuantumCoursePage />}
      />
    </Routes>
  );
}