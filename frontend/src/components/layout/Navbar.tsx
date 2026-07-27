import { Cpu, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600">
            <Cpu size={20} className="text-white" />
          </div>

          <div>
            <h1 className="text-lg font-bold text-white">
              AssetIQ AI
            </h1>

            <p className="text-xs text-zinc-500">
              Intelligent Asset Platform
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">

          <Link to="/" className="text-zinc-400 hover:text-white transition">
            Home
          </Link>

          <Link to="/features" className="text-zinc-400 hover:text-white transition">
            Features
          </Link>

          <Link to="/dashboard" className="text-zinc-400 hover:text-white transition">
            Dashboard
          </Link>

          <Link to="/analytics" className="text-zinc-400 hover:text-white transition">
            Analytics
          </Link>

          <Link to="/ai" className="text-zinc-400 hover:text-white transition">
            AI
          </Link>

          <Link to="/contact" className="text-zinc-400 hover:text-white transition">
            Contact
          </Link>

        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">

          <Link
            to="/login"
            className="text-zinc-400 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-indigo-600 px-5 py-2 text-white font-medium hover:bg-indigo-500 transition"
          >
            Get Started
          </Link>

        </div>

        {/* Mobile Menu */}
        <button className="lg:hidden text-white">
          <Menu size={24} />
        </button>

      </div>
    </header>
  );
}