import {
  Boxes,
  ShieldCheck,
  Activity,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: Boxes,
    value: "10,248",
    label: "Managed Assets",
    color: "bg-indigo-500/10 text-indigo-400",
  },
  {
    icon: ShieldCheck,
    value: "98%",
    label: "Asset Health",
    color: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: Activity,
    value: "24/7",
    label: "AI Monitoring",
    color: "bg-violet-500/10 text-violet-400",
  },
  {
    icon: Clock3,
    value: "< 2 min",
    label: "Average Scan Time",
    color: "bg-amber-500/10 text-amber-400",
  },
];

export default function Stats() {
  return (
    <section className="bg-zinc-950 py-28">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="mt-8 text-4xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-3 text-base text-zinc-400">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}