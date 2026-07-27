import type { LucideIcon } from "lucide-react";

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
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-indigo-500">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-zinc-400">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {value}
          </h2>
        </div>

        <div className={`${color} rounded-xl p-3`}>
          <Icon size={24} className="text-white" />
        </div>

      </div>

    </div>
  );
}