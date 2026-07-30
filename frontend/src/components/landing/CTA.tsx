import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-zinc-950 py-36">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[32px] border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-indigo-950/40 px-10 py-20 text-center">

          {/* Background Glow */}

          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

          <div className="relative">

            <span className="inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
              Get Started
            </span>

            <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-bold leading-tight text-white lg:text-5xl">
              Ready to Transform
              <br />
              Your Asset Management?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Simplify asset tracking, automate monitoring, and unlock
              AI-powered insights from one intelligent platform.
            </p>

            <Link
              to="/dashboard"
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500"
            >
              Explore Dashboard
              <ArrowRight size={20} />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}