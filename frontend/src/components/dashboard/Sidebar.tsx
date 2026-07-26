import {
  LayoutDashboard,
  Package,
  ScanLine,
  BrainCircuit,
  BarChart3,
  Settings,
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Package, label: "Assets" },
  { icon: ScanLine, label: "Scanner" },
  { icon: BrainCircuit, label: "AI Insights" },
  { icon: BarChart3, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-slate-900 text-white fixed left-0 top-0">
      <div className="text-2xl font-bold p-6 border-b border-slate-700">
        AssetIQ AI
      </div>

      <nav className="mt-6">
        {menu.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 cursor-pointer transition"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}