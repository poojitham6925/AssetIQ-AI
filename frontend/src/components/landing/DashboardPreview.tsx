import { ArrowRight, CheckCircle2 } from "lucide-react";
import dashboardImg from "../../assets/dashboard.png";

export default function DashboardPreview() {
  return (
    <section className="bg-zinc-950 py-32">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
            Dashboard
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Everything You Need in One Dashboard
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Access all your assets, monitor AI insights, track QR codes and
            analyze performance from one intelligent dashboard.
          </p>

        </div>

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-6">

            {[
              "Real-time Asset Monitoring",
              "AI Maintenance Predictions",
              "QR Code Tracking",
              "Interactive Analytics",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5"
              >
                <CheckCircle2 className="text-indigo-400" size={22} />

                <span className="text-lg text-zinc-300">
                  {item}
                </span>
              </div>
            ))}

            <button className="mt-4 flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500">
              Explore Dashboard
              <ArrowRight size={18} />
            </button>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-2xl">

            <img
              src={dashboardImg}
              alt="Dashboard"
              className="rounded-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}