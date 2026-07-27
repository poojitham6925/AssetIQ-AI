import {
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
    <aside className="flex h-screen w-72 flex-col border-r border-zinc-800 bg-[#09090b]">

      {/* Logo */}

      <div className="border-b border-zinc-800 px-8 py-8">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-bold text-white">
            AI
          </div>

          <div>

            <h1 className="text-2xl font-bold text-white">
              AssetIQ
            </h1>

            <p className="text-sm text-zinc-500">
              Enterprise Platform
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-3 px-5 py-8">

        {menus.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.link}
              className={({ isActive }) =>
                `group flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-300 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
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
                size={18}
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
            PM
          </div>

          <div>

            <h3 className="font-semibold text-white">
              Poojitha M
            </h3>

            <p className="text-sm text-zinc-500">
              AIML Developer
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}