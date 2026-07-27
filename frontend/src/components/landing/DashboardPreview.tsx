import {
  Bell,
  Search,
  LayoutDashboard,
  Package,
  BarChart3,
  BrainCircuit,
  Settings,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="bg-zinc-950 pb-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">

          <p className="text-sm uppercase tracking-[6px] text-indigo-400">
            Dashboard Preview
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Everything You Need.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-zinc-400">
            Asset management, analytics, AI predictions and QR tracking —
            all from one beautiful dashboard.
          </p>

        </div>

        {/* Dashboard */}
        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">

          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-zinc-800 px-8 py-5">

            <div className="flex items-center gap-4">

              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <div className="hidden md:flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-sm text-zinc-400">
                <Search size={16} />
                Search assets...
              </div>

            </div>

            <Bell size={20} className="text-zinc-400" />

          </div>

          <div className="grid lg:grid-cols-[230px_1fr]">

            {/* Sidebar */}

            <aside className="border-r border-zinc-800 p-6">

              <div className="space-y-4">

                <SidebarItem icon={<LayoutDashboard size={18} />} active>
                  Dashboard
                </SidebarItem>

                <SidebarItem icon={<Package size={18} />}>
                  Assets
                </SidebarItem>

                <SidebarItem icon={<BarChart3 size={18} />}>
                  Analytics
                </SidebarItem>

                <SidebarItem icon={<BrainCircuit size={18} />}>
                  AI Insights
                </SidebarItem>

                <SidebarItem icon={<Settings size={18} />}>
                  Settings
                </SidebarItem>

              </div>

            </aside>

            {/* Main */}

            <main className="p-8">

              {/* KPI Cards */}

              <div className="grid gap-5 md:grid-cols-4">

                <Card title="Assets" value="1,240" />

                <Card title="Healthy" value="97%" />

                <Card title="Alerts" value="15" />

                <Card title="Scans" value="3,812" />

              </div>

              {/* Charts */}

              <div className="mt-8 grid gap-6 lg:grid-cols-3">

                <div className="lg:col-span-2 rounded-2xl bg-zinc-800 p-6">

                  <h3 className="mb-6 font-semibold text-white">
                    Asset Activity
                  </h3>

                  <div className="flex h-44 items-end gap-3">

                    <Bar h="35%" />

                    <Bar h="70%" />

                    <Bar h="55%" />

                    <Bar h="90%" />

                    <Bar h="65%" />

                    <Bar h="100%" />

                    <Bar h="75%" />

                  </div>

                </div>

                <div className="rounded-2xl bg-zinc-800 p-6">

                  <h3 className="mb-5 font-semibold">
                    AI Insights
                  </h3>

                  <ul className="space-y-4 text-sm text-zinc-400">

                    <li>✅ 97% assets healthy</li>

                    <li>⚠ 12 assets need maintenance</li>

                    <li>📈 Performance increased 18%</li>

                    <li>🔋 5 batteries nearing replacement</li>

                  </ul>

                </div>

              </div>

            </main>

          </div>

        </div>

      </div>
    </section>
  );
}

function SidebarItem({
  icon,
  children,
  active = false,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
        active
          ? "bg-indigo-600 text-white"
          : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
      }`}
    >
      {icon}
      {children}
    </div>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-zinc-800 p-5">

      <p className="text-sm text-zinc-400">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-white">
        {value}
      </h2>

    </div>
  );
}

function Bar({ h }: { h: string }) {
  return (
    <div
      style={{ height: h }}
      className="flex-1 rounded-t-lg bg-gradient-to-t from-indigo-600 to-violet-500"
    />
  );
}