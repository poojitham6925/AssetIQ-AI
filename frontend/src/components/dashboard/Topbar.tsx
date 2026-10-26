import { ChevronDown, CircleUserRound } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";

const pageTitles: Record<string, string> = {
  "/dashboard": "Overview",
  "/assets": "Assets",
  "/analytics": "Analytics",
  "/ai": "Insights",
  "/settings": "Settings",
};

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const pageTitle = pathname.startsWith("/assets/") ? "Asset details" : pageTitles[pathname] ?? "AssetIQ";

  useEffect(() => {
    if (!menuOpen) return;
    const handlePointerDown = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-30 flex min-h-[76px] items-center justify-between gap-3 border-b border-border bg-canvas/90 px-4 pl-16 backdrop-blur-xl sm:px-7 sm:pl-20 lg:px-10 lg:pl-10">
      <div>
        <p className="text-xs font-medium text-muted">Workspace preview</p>
        <h1 className="mt-0.5 text-lg font-semibold tracking-tight text-copy">{pageTitle}</h1>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggle compact />
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-haspopup="menu"
            aria-controls="user-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-border bg-surface px-2.5 text-copy hover:bg-surface-raised sm:px-3"
          >
            <CircleUserRound size={19} className="text-accent" />
            <span className="hidden text-sm font-medium sm:inline">Preview user</span>
            <ChevronDown size={15} className="text-muted" />
          </button>
          {menuOpen && (
            <div id="user-menu" role="menu" className="absolute right-0 top-full mt-2 w-52 rounded-2xl border border-border bg-surface p-2 shadow-[var(--shadow)]">
              <p className="px-3 py-2 text-xs text-muted">Not signed in</p>
              <Link role="menuitem" to="/login" onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-copy hover:bg-surface-raised">Sign in (not connected)</Link>
              <Link role="menuitem" to="/settings" onClick={() => setMenuOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm font-medium text-copy hover:bg-surface-raised">Settings preview</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
