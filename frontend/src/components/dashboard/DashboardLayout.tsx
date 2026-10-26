import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    window.matchMedia("(max-width: 1023px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const updateViewport = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    if (!isSidebarOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsSidebarOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen bg-canvas text-copy lg:flex">
      <button
        type="button"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Open navigation"
        aria-expanded={isSidebarOpen}
        aria-controls="app-sidebar"
        className="fixed left-4 top-4 z-40 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-copy shadow-sm lg:hidden"
      >
        <Menu size={19} />
      </button>
      {isSidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 cursor-default bg-black/45 lg:hidden"
        />
      )}
      <div
        id="app-sidebar"
        aria-hidden={isMobile && !isSidebarOpen}
        inert={isMobile && !isSidebarOpen}
        className={`fixed inset-y-0 left-0 z-50 w-[min(19rem,88vw)] transition-transform duration-200 lg:static lg:z-auto lg:block lg:w-64 lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          type="button"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close navigation"
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted lg:hidden"
        >
          <X size={18} />
        </button>
        <Sidebar onNavigate={() => setIsSidebarOpen(false)} />
      </div>
      <div className="min-w-0 flex-1">
        <Topbar />
        <main className="px-4 py-7 sm:px-7 lg:px-10 lg:py-9">{children}</main>
      </div>
    </div>
  );
}
