import {
  Package,
  QrCode,
  BrainCircuit,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: Package,
    title: "Register Assets",
    description:
      "Create and organize enterprise assets with complete ownership and warranty details.",
  },
  {
    icon: QrCode,
    title: "Generate QR Codes",
    description:
      "Assign a unique QR code to every asset for instant identification and tracking.",
  },
  {
    icon: BrainCircuit,
    title: "AI Monitoring",
    description:
      "Monitor asset health continuously and receive predictive maintenance insights.",
  },
  {
    icon: BarChart3,
    title: "Analyze Performance",
    description:
      "Visualize reports, utilization, maintenance history and operational efficiency.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-zinc-950 py-36">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
            Workflow
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Simple Workflow. Powerful Results.
          </h2>

          <p className="mt-6 text-base leading-8 text-zinc-400">
            AssetIQ streamlines the complete asset lifecycle into four
            intelligent steps—from registration to AI-powered insights.
          </p>

        </div>

        {/* Timeline */}

        <div className="mt-20 grid gap-10 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]"
              >
                {/* Step Number */}

                <div className="absolute right-6 top-5 text-5xl font-bold text-zinc-800">
                  0{index + 1}
                </div>

                {/* Icon */}

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600/10">
                  <Icon
                    size={24}
                    className="text-indigo-400"
                  />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  {step.description}
                </p>

                {/* Arrow */}

                {index !== steps.length - 1 && (
                  <ArrowRight
                    size={18}
                    className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-zinc-600 lg:block"
                  />
                )}
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}