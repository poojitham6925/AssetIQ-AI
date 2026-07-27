import {
  Globe,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white">
                AI
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  AssetIQ
                </h2>

                <p className="text-sm text-zinc-500">
                  AI Asset Management
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-zinc-400">
              Smart enterprise asset management powered by Artificial
              Intelligence, QR technology and predictive analytics.
            </p>

            <div className="mt-8 flex gap-4">

              <button className="rounded-xl border border-zinc-800 p-3 transition hover:border-indigo-500 hover:bg-zinc-900">
                <Globe size={18} />
              </button>

              <button className="rounded-xl border border-zinc-800 p-3 transition hover:border-indigo-500 hover:bg-zinc-900">
                <Mail size={18} />
              </button>

              <button className="rounded-xl border border-zinc-800 p-3 transition hover:border-indigo-500 hover:bg-zinc-900">
                <ArrowUpRight size={18} />
              </button>

            </div>
          </div>

          {/* Product */}

          <div>
            <h3 className="text-lg font-semibold text-white">
              Product
            </h3>

            <div className="mt-6 space-y-4 text-sm">
              <p className="cursor-pointer text-zinc-400 transition hover:text-white">
                Dashboard
              </p>

              <p className="cursor-pointer text-zinc-400 transition hover:text-white">
                Assets
              </p>

              <p className="cursor-pointer text-zinc-400 transition hover:text-white">
                Analytics
              </p>

              <p className="cursor-pointer text-zinc-400 transition hover:text-white">
                AI Insights
              </p>
            </div>
          </div>

          {/* Company */}

          <div>
            <h3 className="text-lg font-semibold text-white">
              Company
            </h3>

            <div className="mt-6 space-y-4 text-sm">
              <p className="cursor-pointer text-zinc-400 transition hover:text-white">
                About
              </p>

              <p className="cursor-pointer text-zinc-400 transition hover:text-white">
                Careers
              </p>

              <p className="cursor-pointer text-zinc-400 transition hover:text-white">
                Privacy
              </p>

              <p className="cursor-pointer text-zinc-400 transition hover:text-white">
                Contact
              </p>
            </div>
          </div>

          {/* Newsletter */}

          <div>
            <h3 className="text-lg font-semibold text-white">
              Stay Updated
            </h3>

            <p className="mt-5 text-sm leading-6 text-zinc-400">
              Receive product updates and AI feature announcements.
            </p>

            <div className="mt-6 flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-l-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-indigo-500"
              />

              <button className="rounded-r-xl bg-indigo-600 px-5 transition hover:bg-indigo-500">
                <ArrowUpRight size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>© 2026 AssetIQ AI. All rights reserved.</p>

          <p>Designed with ❤️ using React + FastAPI</p>
        </div>
      </div>
    </footer>
  );
}