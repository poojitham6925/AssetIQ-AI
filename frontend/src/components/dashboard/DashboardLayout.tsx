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

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    if (!isSidebarOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSidebarOpen]);

  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">

      {/* Mobile Sidebar Toggle */}

      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed left-4 top-4 z-50 rounded-xl bg-zinc-800 p-2 text-white transition hover:bg-indigo-600 lg:hidden"
        aria-label="Open navigation"
      >
        <Menu size={20} />
      </button>

      {/* Mobile Sidebar Backdrop */}

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      {/* Sidebar */}

      <div
        className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* Mobile Sidebar Close */}

        <button
          onClick={() => setIsSidebarOpen(false)}
          className="absolute right-4 top-4 rounded-xl bg-zinc-800 p-2 text-white transition hover:bg-indigo-600 lg:hidden"
          aria-label="Close navigation"
        >
          <X size={20} />
        </button>

        <Sidebar />

      </div>

      {/* Content Column */}

      <div className="flex flex-1 flex-col transition-all duration-300">

        <Topbar />

        <main className="flex-1 p-6 lg:p-8">
          {children}
        </main>

      </div>

    </div>
  );
}