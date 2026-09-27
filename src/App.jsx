import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPage from "./components/About";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import QuantumCoursePage from "./pages/QuantumCoursePage";

// Main Landing Page Component
function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      <section id="courses-section">
        <Courses navigateFn={(path) => navigate(path)} />
      </section>
    </>
  );
}

// Wrapper for common layout
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-sky-950 text-white overflow-x-hidden flex flex-col justify-between scroll-smooth">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  const navigate = useNavigate(); // Hook called cleanly at component top level

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <LandingPage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutPage />
          </Layout>
        }
      />
      <Route
        path="/courses"
        element={
          <Layout>
            <Courses navigateFn={(path) => navigate(path)} />
          </Layout>
        }
      />

      {/* FULL COURSE PAGE */}
      <Route
        path="/course/quantum-computing-and-its-applications"
        element={<QuantumCoursePage />}
      />
    </Routes>
  );
}