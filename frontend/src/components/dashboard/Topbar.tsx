import {
  Search,
  Bell,
  CircleUserRound,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-zinc-800 bg-[#09090b]/95 px-8 backdrop-blur">

      {/* Left */}

      <div className="flex items-center gap-6">

        <div>

          <h1 className="text-2xl font-bold text-white">
            Dashboard
          </h1>

          <p className="text-sm text-zinc-500">
            Welcome back, Poojitha 👋
          </p>

        </div>

      </div>

      {/* Center */}

      <div className="relative hidden lg:block">

        <Search
          size={18}
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

        <button className="hidden items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white transition hover:bg-indigo-500 lg:flex">

          <Sparkles size={18} />

          AI Assistant

        </button>

        {/* Notifications */}

        <button className="relative rounded-xl border border-zinc-800 bg-zinc-900 p-3 transition hover:border-indigo-500">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        {/* User */}

        <button className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 px-3 py-2 transition hover:border-indigo-500">

          <CircleUserRound
            size={34}
            className="text-indigo-400"
          />

          <div className="hidden text-left lg:block">

            <p className="text-sm font-semibold text-white">
              Poojitha M
            </p>

            <p className="text-xs text-zinc-500">
              AIML Developer
            </p>

          </div>

          <ChevronDown
            size={16}
            className="hidden text-zinc-500 lg:block"
          />

        </button>

      </div>

    </header>
  );
}