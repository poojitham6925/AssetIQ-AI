import { QrCode, Eye, Pencil } from "lucide-react";

interface AssetTableProps {
  onView: () => void;
}

const assets = [
  {
    name: "Laptop-001",
    department: "IT",
    status: "Active",
    health: "Healthy",
  },
  {
    name: "Printer-003",
    department: "HR",
    status: "Service",
    health: "Pending",
  },
  {
    name: "Server-008",
    department: "Admin",
    status: "Active",
    health: "Healthy",
  },
  {
    name: "Camera-011",
    department: "Security",
    status: "Active",
    health: "Healthy",
  },
];

export default function AssetTable({ onView }: AssetTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-xl">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">

        <div>
          <h2 className="text-xl font-bold text-white">
            Asset Inventory
          </h2>

          <p className="mt-1 text-sm text-zinc-400">
            Monitor and manage enterprise assets
          </p>
        </div>

        <button className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500">
          + Add Asset
        </button>

      </div>

      {/* Table */}

      <table className="w-full">

        <thead className="bg-zinc-800/60">

          <tr className="text-left text-sm uppercase tracking-wide text-zinc-300">

            <th className="px-6 py-4">Asset</th>
            <th className="px-4 py-4">Department</th>
            <th className="px-4 py-4">Status</th>
            <th className="px-4 py-4">Health</th>
            <th className="px-4 py-4 text-center">Actions</th>

          </tr>

        </thead>

        <tbody>

          {assets.map((asset) => (

            <tr
              key={asset.name}
              className="border-t border-zinc-800 transition hover:bg-zinc-800/50"
            >

              {/* Asset */}

              <td className="px-6 py-5">

                <div>

                  <p className="font-semibold text-white">
                    {asset.name}
                  </p>

                  <p className="text-sm text-zinc-500">
                    Enterprise Asset
                  </p>

                </div>

              </td>

              {/* Department */}

              <td className="px-4 py-5 text-zinc-300">
                {asset.department}
              </td>

              {/* Status */}

              <td className="px-4 py-5">

                <span className="rounded-full bg-indigo-600/20 px-4 py-1 text-sm font-medium text-indigo-400">
                  {asset.status}
                </span>

              </td>

              {/* Health */}

              <td className="px-4 py-5">

                <span
                  className={`rounded-full px-4 py-1 text-sm font-medium ${
                    asset.health === "Healthy"
                      ? "bg-emerald-600/20 text-emerald-400"
                      : "bg-yellow-600/20 text-yellow-400"
                  }`}
                >
                  {asset.health}
                </span>

              </td>

              {/* Actions */}

              <td className="px-4 py-5">

                <div className="flex justify-center gap-3">

                  <button
                    onClick={onView}
                    className="rounded-lg bg-zinc-800 p-2 transition hover:bg-indigo-600"
                    title="View Asset"
                  >
                    <Eye size={18} className="text-white" />
                  </button>

                  <button
                    className="rounded-lg bg-zinc-800 p-2 transition hover:bg-emerald-600"
                    title="Edit Asset"
                  >
                    <Pencil size={18} className="text-white" />
                  </button>

                  <button
                    className="rounded-lg bg-zinc-800 p-2 transition hover:bg-purple-600"
                    title="View QR Code"
                  >
                    <QrCode size={18} className="text-white" />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}