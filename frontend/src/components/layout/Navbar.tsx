import { Cpu, Menu } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-black/30 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-indigo-600 flex items-center justify-center">
            <Cpu className="text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              AssetIQ AI
            </h1>

            <p className="text-xs text-zinc-400">
              Intelligent Asset Platform
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10 text-zinc-300 font-medium">

          <a
            href="#features"
            className="hover:text-white transition"
          >
            Features
          </a>

          <Link
            to="/dashboard"
            className="hover:text-white transition"
          >
            Dashboard
          </Link>

          <a
            href="#analytics"
            className="hover:text-white transition"
          >
            Analytics
          </a>

          <a
            href="#contact"
            className="hover:text-white transition"
          >
            Contact
          </a>

        </div>

        {/* Get Started Button */}
        <Link
          to="/dashboard"
          className="hidden md:block bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Get Started
        </Link>

        {/* Mobile Menu */}
        <button className="md:hidden text-white">
          <Menu />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;