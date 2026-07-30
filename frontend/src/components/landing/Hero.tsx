import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Activity,
  QrCode,
} from "lucide-react";

export default function Hero() {
  return (
   <section className="relative overflow-hidden bg-zinc-950 py-32">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
              AI Powered Enterprise Platform
            </span>

            <h1 className="mt-12 text-5xl font-black leading-[1.15] tracking-tight text-white lg:text-6xl">

              Smarter Asset
              <br />

              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                Management
              </span>

            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400">

              Manage enterprise assets with intelligent QR tracking,
              predictive maintenance and AI-powered insights from a
              single modern platform.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500">

                Explore Dashboard

                <ArrowRight size={18} />

              </button>

              <button className="flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition hover:border-indigo-500">

                <PlayCircle size={18} />

                Learn More

              </button>

            </div>

            {/* Stats */}

            <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">

              <div>
                <h3 className="text-3xl font-bold text-white">10K+</h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Assets
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">98%</h3>
                <p className="mt-2 text-sm text-zinc-500">
                  AI Accuracy
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">24/7</h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Monitoring
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">250+</h3>
                <p className="mt-2 text-sm text-zinc-500">
                  Organizations
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex items-center justify-center">

            <div className="grid w-full max-w-md gap-8">

              {/* Card 1 */}

              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-zinc-500">
                      Assets Managed
                    </p>

                    <h3 className="mt-2 text-4xl font-bold text-white">
                      10,248
                    </h3>

                  </div>

                  <div className="rounded-2xl bg-indigo-600/15 p-4">

                    <QrCode
                      className="text-indigo-400"
                      size={26}
                    />

                  </div>

                </div>

              </div>

              {/* Card 2 */}

              <div className="ml-12 rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-zinc-500">
                      AI Health Score
                    </p>

                    <h3 className="mt-2 text-4xl font-bold text-white">
                      98%
                    </h3>

                  </div>

                  <div className="rounded-2xl bg-emerald-600/15 p-4">

                    <Activity
                      className="text-emerald-400"
                      size={26}
                    />

                  </div>

                </div>

              </div>

              {/* Card 3 */}

              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-zinc-500">
                      AI Monitoring
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      Active
                    </h3>

                    <div className="mt-4 flex items-center gap-2">

                      <ShieldCheck
                        size={16}
                        className="text-emerald-400"
                      />

                      <span className="text-sm text-zinc-400">
                        Secure & Live
                      </span>

                    </div>

                  </div>

                  <div className="rounded-2xl bg-violet-600/15 p-4">

                    <Sparkles
                      className="text-violet-400"
                      size={26}
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
      );
}