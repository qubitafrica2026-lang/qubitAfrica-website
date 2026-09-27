import { useState } from "react";
import Sidebar from "../components/Sidebar";
import CourseContent from "../components/CourseContent";
import Navbar from "../components/Navbar";

export default function QuantumCoursePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* ✅ FIXED NAVBAR */}
      <div className="fixed top-0 left-0 w-full h-16 z-50">
        <Navbar />
      </div>

      {/* ✅ PAGE CONTENT (offset below navbar) */}
      <div className="pt-16 flex h-screen bg-sky-950 text-white">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <CourseContent setSidebarOpen={setSidebarOpen} />
      </div>
    </>
  );
}

