import { Link, NavLink } from "react-router-dom";
import { Menu, Sparkles } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Analytics", path: "/analytics" },
    { name: "AI", path: "/ai" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur-xl">

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-3"
        >

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white shadow-lg shadow-indigo-500/20">

            AI

          </div>

          <div>

            <h1 className="text-lg font-bold text-white">
              AssetIQ
            </h1>

            <p className="text-xs text-zinc-500">
              Enterprise AI
            </p>

          </div>

        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 lg:flex">

          {navItems.map((item) => (

            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>

          ))}

        </nav>

        {/* Right */}

        <div className="flex items-center gap-3">

          <Link
            to="/login"
            className="hidden rounded-xl border border-zinc-800 px-5 py-2 text-sm text-zinc-300 transition hover:border-indigo-500 hover:text-white md:block"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="hidden items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition hover:bg-indigo-500 md:flex"
          >

            <Sparkles size={16} />

            Get Started

          </Link>

          <button className="rounded-xl border border-zinc-800 p-2 text-zinc-300 lg:hidden">

            <Menu size={20} />

          </button>

        </div>

      </div>

    </header>
  );
}