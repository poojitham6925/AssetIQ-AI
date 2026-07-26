import { Cpu, Menu } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-black/30 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

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

        <div className="hidden md:flex gap-10 text-zinc-300">
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">Dashboard</a>
          <a href="#" className="hover:text-white">Analytics</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

        <button className="hidden md:block bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-xl font-semibold">
          Get Started
        </button>

        <button className="md:hidden">
          <Menu />
        </button>

      </div>
    </nav>
  );
}

export default Navbar;