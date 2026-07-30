import { Cpu, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Analytics", path: "/analytics" },
  { name: "AI", path: "/ai" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 shadow-lg shadow-indigo-500/20">

            <Cpu size={20} className="text-white" />

          </div>

          <div>

            <h1 className="text-lg font-bold tracking-tight text-white">
              AssetIQ AI
            </h1>

            <p className="text-xs text-zinc-500">
              Enterprise Asset Platform
            </p>

          </div>

        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">

          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative text-sm font-medium text-zinc-400 transition duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* Right */}
        <div className="hidden items-center gap-4 lg:flex">

          <Link
            to="/login"
            className="text-sm font-medium text-zinc-400 transition hover:text-white"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:bg-indigo-500"
          >
            Get Started
          </Link>

        </div>

        {/* Mobile */}
        <button className="rounded-xl border border-zinc-800 p-2 text-zinc-300 transition hover:bg-zinc-900 lg:hidden">
          <Menu size={20} />
        </button>

      </div>
    </header>
  );
}