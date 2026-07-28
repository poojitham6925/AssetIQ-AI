import {
  Cpu,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600">

                <Cpu size={22} className="text-white" />

              </div>

              <div>

                <h2 className="text-xl font-bold text-white">
                  AssetIQ AI
                </h2>

                <p className="text-sm text-zinc-500">
                  Enterprise Asset Platform
                </p>

              </div>

            </div>

            <p className="mt-6 leading-7 text-zinc-400">
              AI-powered enterprise asset management platform for
              intelligent tracking, predictive maintenance and
              analytics.
            </p>

            <div className="mt-8 flex gap-3">

              <button className="rounded-xl border border-zinc-800 p-3 transition hover:border-indigo-500 hover:bg-zinc-900">


              </button>

              <button className="rounded-xl border border-zinc-800 p-3 transition hover:border-indigo-500 hover:bg-zinc-900">


              </button>

              <button className="rounded-xl border border-zinc-800 p-3 transition hover:border-indigo-500 hover:bg-zinc-900">

                <Mail size={18} />

              </button>

            </div>

          </div>

          {/* Product */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Product
            </h3>

            <div className="mt-6 space-y-4">

              <Link
                to="/dashboard"
                className="block text-zinc-400 transition hover:text-white"
              >
                Dashboard
              </Link>

              <Link
                to="/assets"
                className="block text-zinc-400 transition hover:text-white"
              >
                Assets
              </Link>

              <Link
                to="/analytics"
                className="block text-zinc-400 transition hover:text-white"
              >
                Analytics
              </Link>

              <Link
                to="/ai"
                className="block text-zinc-400 transition hover:text-white"
              >
                AI Insights
              </Link>

            </div>

          </div>

          {/* Resources */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Resources
            </h3>

            <div className="mt-6 space-y-4">

              <Link
                to="/features"
                className="block text-zinc-400 transition hover:text-white"
              >
                Features
              </Link>

              <Link
                to="/contact"
                className="block text-zinc-400 transition hover:text-white"
              >
                Contact
              </Link>

              <p className="cursor-pointer text-zinc-400 transition hover:text-white">
                Privacy Policy
              </p>

              <p className="cursor-pointer text-zinc-400 transition hover:text-white">
                Terms of Service
              </p>

            </div>

          </div>

          {/* Newsletter */}

          <div>

            <h3 className="text-lg font-semibold text-white">
              Stay Updated
            </h3>

            <p className="mt-5 text-sm leading-7 text-zinc-400">
              Subscribe to receive updates about new AI features and
              platform improvements.
            </p>

            <div className="mt-6 flex">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm outline-none focus:border-indigo-500"
              />

              <button className="rounded-r-xl bg-indigo-600 px-5 transition hover:bg-indigo-500">

                <ArrowUpRight size={18} className="text-white" />

              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-500 md:flex-row">

          <p>
            © 2026 AssetIQ AI. All rights reserved.
          </p>

          <p>
            Built with React • TypeScript • FastAPI
          </p>

        </div>

      </div>

    </footer>
  );
}