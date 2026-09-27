import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import footerpic from "../assets/qba4.png";

export default function Footer() {
  return (
    <footer className="w-full backdrop-blur-xl border-t border-white/20 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-gray-200">
        {/* Address Section */}
        <div>
          <div className="flex items-center space-x-1 group cursor-pointer">
            <img
              src={footerpic}
              alt="Footer Logo"
              className="h-14 sm:h-10 md:h-12 w-auto"
            />
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            <br />
            <br />
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-md mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Courses</li>
            <li className="hover:text-white cursor-pointer">Research</li>
            <li className="hover:text-white cursor-pointer">Community</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-md mb-3">Contact</h2>
          <div className="flex space-x-4">
            <a href="#" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-300 py-4 border-t border-white/10">
        © {new Date().getFullYear()}- <span className="text-blue-400">qubit</span>
        <span className="bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2">
          Africa
        </span>
        -All Rights Reserved
      </div>
    </footer>
  );
}