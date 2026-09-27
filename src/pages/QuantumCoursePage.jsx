import { useState } from "react";
import Sidebar from "../components/Sidebar";
import CourseContent from "../components/CourseContent";
import Navbar from "../components/Navbar";

export default function QuantumCoursePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sky-950 text-white font-light flex flex-col overflow-x-hidden">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full h-16 z-50">
        <Navbar />
      </header>

      {/* Main Container */}
      <div className="pt-16 flex flex-1 w-full max-w-7xl mx-auto">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <CourseContent setSidebarOpen={setSidebarOpen} />
      </div>
    </div>
  );
}