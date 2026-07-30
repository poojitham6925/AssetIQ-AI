import type { LucideIcon } from "lucide-react";
import { TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: StatCardProps) {
  return (
    <div className="group rounded-xl p-2.5 border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-[0_0_40px_rgba(99,102,241,0.18)]">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-medium text-zinc-400">
            {title}
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white">
            {value}
          </h2>

        </div>

        <div
          className={`${color} flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg`}
        >
          <Icon
            size={20}
            className="text-white"
          />
        </div>

      </div>

      {/* Progress */}

      <div className="mt-6">

        <div className="mb-2 flex items-center justify-between">

          <span className="text-xs text-zinc-500">
            Performance
          </span>

          <span className="flex items-center gap-1 text-sm font-medium text-emerald-400">

            <TrendingUp size={15} />

            +12%

          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-zinc-800">

          <div className="h-full w-4/5 rounded-full bg-indigo-500"></div>

        </div>

      </div>

    </div>
  );
}