import {
  Cpu,
  LayoutDashboard,
  Package,
  BarChart3,
  BrainCircuit,
  Settings,
  ChevronRight,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const menus = [
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      link: "/dashboard",
    },
    {
      icon: Package,
      title: "Assets",
      link: "/assets",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      link: "/analytics",
    },
    {
      icon: BrainCircuit,
      title: "AI Insights",
      link: "/ai",
    },
    {
      icon: Settings,
      title: "Settings",
      link: "/settings",
    },
  ];

  return (
    <aside className="flex h-full w-72 flex-col border-r border-zinc-800 bg-zinc-950">

      {/* Logo */}

      <div className="border-b border-zinc-800 px-8 py-8">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600">
            <Cpu size={22} className="text-white" />
          </div>

          <div>

            <h1 className="text-2xl font-bold text-white">
              AssetIQ AI
            </h1>

            <p className="text-sm text-zinc-500">
              Enterprise Asset Platform
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-3 overflow-y-auto px-5 py-8">

        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.link}
              className={({ isActive }) =>
                `group flex items-center justify-between rounded-2xl border px-5 py-4 transition-all duration-300 hover:translate-x-1 ${
                  isActive
                    ? "border-indigo-500/20 bg-indigo-500/10 text-indigo-300"
                    : "border-transparent text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`
              }
            >
              <div className="flex items-center gap-4">

                <Icon size={20} />

                <span className="font-medium">
                  {item.title}
                </span>

              </div>

              <ChevronRight
                size={16}
                className="opacity-0 transition group-hover:opacity-100"
              />

            </NavLink>
          );
        })}

      </nav>

      {/* User Card */}

      <div className="border-t border-zinc-800 p-6">

        <div className="flex items-center gap-4 rounded-2xl bg-zinc-900 p-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
            GU
          </div>

          <div>

            <h3 className="font-semibold text-white">
              Guest User
            </h3>

            <p className="text-sm text-zinc-500">
              Not Signed In
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}