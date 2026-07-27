import {
  QrCode,
  BrainCircuit,
  ShieldCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "QR Asset Tracking",
    description:
      "Generate secure QR codes and instantly identify every enterprise asset.",
  },
  {
    icon: BrainCircuit,
    title: "AI Maintenance",
    description:
      "Predict failures early using intelligent maintenance recommendations.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Monitor asset utilization, depreciation and performance in real time.",
  },
  {
    icon: ShieldCheck,
    title: "Digital Passport",
    description:
      "Store ownership, warranty and service history in one secure place.",
  },
];

export default function Features() {
  return (
    <section className="bg-zinc-950 py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
            Platform Features
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white">
            Everything You Need
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            AssetIQ AI combines asset tracking, analytics, predictive
            maintenance and digital asset management into one modern platform.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600/10">

                  <Icon
                    size={24}
                    className="text-indigo-400"
                  />

                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {feature.description}
                </p>

                <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-400 transition-all group-hover:gap-3">

                  Learn More

                  <ArrowRight size={16} />

                </button>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}