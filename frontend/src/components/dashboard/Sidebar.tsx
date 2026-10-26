import {
  BarChart3,
  Boxes,
  BrainCircuit,
  Cpu,
  LayoutDashboard,
  Settings2,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const menus = [
  { icon: LayoutDashboard, title: "Overview", link: "/dashboard" },
  { icon: Boxes, title: "Assets", link: "/assets" },
  { icon: BarChart3, title: "Analytics", link: "/analytics" },
  { icon: BrainCircuit, title: "Insights", link: "/ai" },
  { icon: Settings2, title: "Settings", link: "/settings" },
];

export default function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <aside className="flex h-full min-h-screen flex-col border-r border-border bg-surface px-4 pb-5 pt-5">
      <Link to="/" className="flex items-center gap-3 rounded-xl px-2 py-2" aria-label="AssetIQ home">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white"><Cpu size={19} /></span>
        <span>
          <span className="block font-bold tracking-tight text-copy">AssetIQ</span>
          <span className="block text-[10px] font-semibold tracking-[0.14em] text-muted">ASSET OPERATIONS</span>
        </span>
      </Link>
      <div className="mt-9 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-muted">Workspace preview</div>
      <nav aria-label="Workspace navigation" className="mt-3 flex-1 space-y-1">
        {menus.map(({ icon: Icon, title, link }) => (
          <NavLink
            key={link}
            to={link}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition ${
                isActive
                  ? "bg-accent/8 text-accent"
                  : "text-muted hover:bg-surface-raised hover:text-copy"
              }`
            }
          >
            <Icon size={18} aria-hidden="true" />
            {title}
          </NavLink>
        ))}
      </nav>
      <div className="rounded-2xl border border-border bg-surface-raised p-4">
        <p className="text-xs font-semibold text-copy">Preview mode</p>
        <p className="mt-1 text-xs leading-5 text-muted">No signed-in account or live workspace is connected.</p>
      </div>
      <p className="px-3 pt-4 text-[11px] text-muted">AssetIQ · Interface preview</p>
    </aside>
  );
}
