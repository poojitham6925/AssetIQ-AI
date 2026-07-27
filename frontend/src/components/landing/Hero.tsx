import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import dashboardImg from "../../assets/dashboard.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24">

      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
              AI Powered Enterprise Asset Management
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">
              Manage Assets
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                Smarter with AI
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
              AssetIQ AI helps organizations monitor enterprise assets,
              generate QR codes, predict maintenance, automate workflows,
              and gain intelligent insights from one secure platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500">

                Explore Dashboard

                <ArrowRight size={18} />

              </button>

              <button className="flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 font-medium text-white transition hover:border-indigo-500">

                <PlayCircle size={18} />

                Learn More

              </button>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <div className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4">

                <div className="rounded-lg bg-emerald-500/10 p-2">
                  <ShieldCheck size={18} className="text-emerald-400" />
                </div>

                <div>

                  <p className="font-semibold text-white">
                    Secure QR Tracking
                  </p>

                  <p className="text-sm text-zinc-500">
                    End-to-end asset security
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-4">

                <div className="rounded-lg bg-indigo-500/10 p-2">
                  <Sparkles size={18} className="text-indigo-400" />
                </div>

                <div>

                  <p className="font-semibold text-white">
                    AI Predictions
                  </p>

                  <p className="text-sm text-zinc-500">
                    Prevent failures before they happen
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 shadow-2xl">

              <h2 className="text-3xl font-bold text-white leading-tight">
                Ready to Modernize Your Asset Management?
              </h2>

              <p className="mt-5 text-base leading-7 text-zinc-400">
                Join organizations using AI to monitor assets,
                predict maintenance and improve operational
                efficiency.
              </p>

              <button className="mt-7 flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500">

                Get Started

                <ArrowRight size={18} />

              </button>

              <img
                src={dashboardImg}
                alt="Dashboard Preview"
                className="mt-10 w-full rounded-2xl border border-zinc-800 shadow-xl"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}