import {
  Boxes,
  Activity,
  Building2,
  Monitor,
} from "lucide-react";

const stats = [
  {
    icon: Boxes,
    value: "10K+",
    label: "Assets Managed",
    color: "bg-indigo-500/20 text-indigo-400",
  },
  {
    icon: Activity,
    value: "99.9%",
    label: "System Uptime",
    color: "bg-green-500/20 text-green-400",
  },
  {
    icon: Building2,
    value: "250+",
    label: "Companies",
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    icon: Monitor,
    value: "24/7",
    label: "AI Monitoring",
    color: "bg-orange-500/20 text-orange-400",
  },
];

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-16">

      <div className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl border border-zinc-800 bg-zinc-900 overflow-hidden">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center gap-5 p-8 border-zinc-800 lg:border-r last:border-r-0"
            >
              <div className={`p-4 rounded-xl ${item.color}`}>
                <Icon size={28} />
              </div>

              <div>
                <h2 className="text-4xl font-bold">
                  {item.value}
                </h2>

                <p className="text-zinc-400 mt-1">
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}

      </div>

    </section>
  );
}