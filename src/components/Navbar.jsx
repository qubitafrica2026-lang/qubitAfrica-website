// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import qba from "../assets/qba4.png";

// export default function Navbar() {
//     const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

//     return (
//         <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/10 backdrop-blur-sm">
//             <div className="max-w-7xl mx-auto sm:px-4 lg:px-8">
//                 <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    
//                     {/* Logo */}
//                     <div className="flex items-center space-x-1 group cursor-pointer">
//                         <img
//                             src={qba}
//                             className="h-10 sm:h-10 md:h-12 w-auto"
//                         />
//                     </div>

//                     {/* Desktop nav */}
//                     <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
//                         <a href="#features" className="text-gray-300 hover:text-white text-sm lg:text-base">About</a>
//                         <a href="#courses" className="text-gray-300 hover:text-white text-sm lg:text-base">Courses </a>
//                         <a href="#careers" className="text-gray-300 hover:text-white text-sm lg:text-base">Q-Community</a>
//                     </div>

//                     {/* Hamburger button */}
//                     <button 
//                         className="md:hidden items-center p-2 text-gray-300 hover:text-white"
//                         onClick={() => setMobileMenuIsOpen(prev => !prev)}
//                     >
//                         {mobileMenuIsOpen ? (
//                             <X className="w-5 h-5 sm:w-6 sm:h-6" />
//                         ) : (
//                             <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
//                         )}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile menu — FIXED */}
//             {mobileMenuIsOpen && (
//                 <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top anim-duration-300">
//                     <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
//                         <a 
//                             href="#features" 
//                             onClick={() => setMobileMenuIsOpen(false)}
//                             className="block text-gray-300 hover:text-white text-sm lg:text-base"
//                         >
//                             About
//                         </a>

//                         <a 
//                             href="#courses"
//                             onClick={() => setMobileMenuIsOpen(false)}
//                             className="block text-gray-300 hover:text-white text-sm lg:text-base"
//                         >
//                             Courses
//                         </a>

//                         <a 
//                             href="#careers"
//                             onClick={() => setMobileMenuIsOpen(false)}
//                             className="block text-gray-300 hover:text-white text-sm lg:text-base"
//                         >
//                             Career Development
//                         </a>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// }


import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom"; // 1. Import Link
import qba from "../assets/qba4.png";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1 group cursor-pointer">
            <img
              src={qba}
              alt="Qubit Africa Logo"
              className="h-10 sm:h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/about" className="text-gray-300 hover:text-white text-sm lg:text-base transition-colors">
              About
            </Link>
            <Link to="/courses" className="text-gray-300 hover:text-white text-sm lg:text-base transition-colors">
              Courses
            </Link>
            <Link to="/community" className="text-gray-300 hover:text-white text-sm lg:text-base transition-colors">
              Q-Community
            </Link>
          </div>

          {/* Hamburger button */}
          <button 
            className="md:hidden items-center p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen(prev => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top anim-duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <Link 
              to="/about" 
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              About
            </Link>

            <Link 
              to="/courses"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Courses
            </Link>

            <Link 
              to="/community"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base"
            >
              Career Development
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}