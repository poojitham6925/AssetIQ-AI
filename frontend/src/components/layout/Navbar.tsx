import { Cpu, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

const navItems = [
  { name: "Product", path: "/features" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Analytics", path: "/analytics" },
  { name: "Insights", path: "/ai" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-canvas/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-10">
        <Link to="/" className="flex items-center gap-3" aria-label="AssetIQ AI home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white shadow-lg shadow-accent/20">
            <Cpu size={20} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-base font-bold tracking-tight text-copy">AssetIQ</span>
            <span className="block text-[11px] font-medium tracking-[0.14em] text-muted">ASSET OPERATIONS</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-accent ${isActive ? "text-accent" : "text-muted"}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle compact />
          <Link className="text-sm font-semibold text-muted transition hover:text-copy" to="/login">
            Sign in
          </Link>
          <Link className="inline-flex min-h-10 items-center rounded-xl bg-accent px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover" to="/register">
            Get started
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-copy hover:bg-surface-raised lg:hidden"
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-border bg-surface px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-3 text-sm font-medium ${isActive ? "bg-accent/10 text-accent" : "text-copy hover:bg-surface-raised"}`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="mt-3 flex items-center justify-between border-t border-border pt-4">
              <ThemeToggle />
              <div className="flex gap-3">
                <Link to="/login" onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-2 text-sm font-semibold text-muted">Sign in</Link>
                <Link to="/register" onClick={() => setMenuOpen(false)} className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white">Get started</Link>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
