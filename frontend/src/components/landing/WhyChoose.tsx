import {
  Zap,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Faster Operations",
    description:
      "Manage thousands of enterprise assets with a streamlined workflow and instant QR identification.",
    color: "bg-amber-500/10 text-amber-400",
  },
  {
    icon: BrainCircuit,
    title: "AI Powered Decisions",
    description:
      "Receive predictive maintenance insights and intelligent recommendations before failures occur.",
    color: "bg-indigo-500/10 text-indigo-400",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Centralized asset monitoring with secure access control, audit history and QR verification.",
    color: "bg-emerald-500/10 text-emerald-400",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-zinc-950 py-36">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
            Why AssetIQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Built for Modern Enterprises
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400">
            AssetIQ combines Artificial Intelligence, QR technology and
            enterprise analytics into one secure platform that simplifies
            every stage of asset management.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]"
              >

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-7 text-zinc-400">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}