import { X, QrCode, ShieldCheck, Calendar, Building2 } from "lucide-react";

interface AssetModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AssetModal({
  open,
  onClose,
}: AssetModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <div className="w-full max-w-2xl rounded-3xl border border-zinc-800 bg-zinc-900 shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-zinc-800 px-8 py-6">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Asset Details
            </h2>

            <p className="mt-1 text-zinc-400">
              Complete information about the selected asset
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg bg-zinc-800 p-2 transition hover:bg-red-600"
          >
            <X className="text-white" />
          </button>

        </div>

        {/* Body */}

        <div className="grid gap-8 p-8 md:grid-cols-2">

          {/* Left */}

          <div className="space-y-6">

            <div>
              <p className="text-sm text-zinc-500">
                Asset Name
              </p>

              <h3 className="text-2xl font-bold text-white">
                Laptop-001
              </h3>
            </div>

            <div className="flex items-center gap-3">

              <Building2 className="text-indigo-400" />

              <div>
                <p className="text-sm text-zinc-500">
                  Department
                </p>

                <p className="text-white">
                  IT Department
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3">

              <Calendar className="text-amber-400" />

              <div>

                <p className="text-sm text-zinc-500">
                  Purchase Date
                </p>

                <p className="text-white">
                  12 Jan 2025
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <ShieldCheck className="text-emerald-400" />

              <div>

                <p className="text-sm text-zinc-500">
                  Health Status
                </p>

                <span className="rounded-full bg-emerald-600/20 px-3 py-1 text-emerald-400">
                  Healthy
                </span>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="flex flex-col items-center justify-center rounded-2xl bg-zinc-800 p-8">

            <div className="rounded-2xl bg-white p-6">

              <QrCode
                size={180}
                className="text-black"
              />

            </div>

            <p className="mt-6 text-center text-zinc-400">
              Scan this QR code to view this asset
              instantly from any device.
            </p>

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 border-t border-zinc-800 px-8 py-6">

          <button
            onClick={onClose}
            className="rounded-xl border border-zinc-700 px-6 py-3 text-white transition hover:border-red-500"
          >
            Close
          </button>

          <button className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500">
            Edit Asset
          </button>

        </div>

      </div>

    </div>
  );
}