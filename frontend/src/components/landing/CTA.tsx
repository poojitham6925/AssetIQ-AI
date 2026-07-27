import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-zinc-950 py-28">

      <div className="mx-auto max-w-6xl px-8">

        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-indigo-950/30 shadow-2xl">

          <div className="grid items-center gap-12 p-10 lg:grid-cols-2 lg:p-14">

            {/* Left */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">

                <Sparkles size={16} />

                AI Powered Platform

              </div>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white">

                Ready to Modernize
                <br />
                Asset Management?

              </h2>

              <p className="mt-5 max-w-lg text-base leading-7 text-zinc-400">

                Track assets, automate maintenance,
                generate QR codes and gain intelligent
                insights—all from one secure platform.

              </p>

              <button className="mt-8 flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500">

                Get Started

                <ArrowRight size={18} />

              </button>

            </div>

            {/* Right */}

            <div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

                  <p className="text-sm text-zinc-500">
                    Assets
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-white">
                    10,248
                  </h3>

                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

                  <p className="text-sm text-zinc-500">
                    Health
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-emerald-400">
                    97%
                  </h3>

                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

                  <p className="text-sm text-zinc-500">
                    Alerts
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-amber-400">
                    15
                  </h3>

                </div>

                <div className="rounded-2xl border border-zinc-800 bg-indigo-600 p-5">

                  <p className="text-sm text-indigo-100">
                    AI Status
                  </p>

                  <h3 className="mt-2 text-xl font-semibold text-white">
                    All Systems Active
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}