import { useEffect, useRef, useState } from "react";
import {
  Search,
  Bell,
  CircleUserRound,
  Sparkles,
  ChevronDown,
  User,
  Settings,
  LogIn,
} from "lucide-react";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-zinc-800 bg-zinc-950/95 px-8 backdrop-blur">

      {/* Left */}

      <div className="flex items-center gap-6">

        <div>

          <h1 className="text-2xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-sm text-zinc-500">
            Welcome back 👋
          </p>

        </div>

      </div>

      {/* Center */}

      <div className="relative hidden lg:block">

        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          type="text"
          placeholder="Search assets, departments..."
          className="w-96 rounded-2xl border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 text-white outline-none transition focus:border-indigo-500"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* AI Button */}

        <button className="hidden items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 lg:flex">

          <Sparkles size={20} />

          AI Assistant

        </button>

        {/* Notifications */}

        <button className="relative rounded-xl bg-zinc-800 p-3 text-white transition hover:bg-indigo-600">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500" />

        </button>

        {/* User */}

        <div ref={menuRef} className="relative">

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 px-3 py-2 transition hover:border-indigo-500"
          >

            <CircleUserRound
              size={34}
              className="text-indigo-400"
            />

            <div className="hidden text-left lg:block">

              <p className="text-sm font-semibold text-white">
                Guest User
              </p>

              <p className="text-xs text-zinc-500">
                Not Signed In
              </p>

            </div>

            <ChevronDown
              size={16}
              className={`hidden text-zinc-500 transition-transform duration-300 lg:block ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />

          </button>

          {/* Dropdown */}

          {isMenuOpen && (
            <div className="absolute right-0 top-full z-50 mt-3 w-64 rounded-2xl border border-zinc-800 bg-zinc-900 p-2 shadow-lg">

              <div className="border-b border-zinc-800 px-3 py-3">

                <p className="text-sm font-semibold text-white">
                  Guest User
                </p>

                <p className="text-xs text-zinc-500">
                  Not Signed In
                </p>

              </div>

              <div className="mt-2 space-y-1">

                <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white">
                  <User size={16} />
                  Profile
                </button>

                <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-400 transition hover:bg-zinc-800 hover:text-white">
                  <Settings size={16} />
                  Settings
                </button>

                <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-indigo-400 transition hover:bg-zinc-800 hover:text-indigo-300">
                  <LogIn size={16} />
                  Sign In
                </button>

              </div>

            </div>
          )}

        </div>

      </div>

    </header>
  );
}