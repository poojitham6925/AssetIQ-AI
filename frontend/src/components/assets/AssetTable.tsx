import { ArrowUpRight, Eye } from "lucide-react";
import type { DemoAsset } from "../../fixtures/demoAssets";

interface AssetTableProps {
  assets: DemoAsset[];
  onView: (asset: DemoAsset) => void;
}

const statusStyles: Record<DemoAsset["status"], string> = {
  "In service": "bg-positive/10 text-positive",
  "Under maintenance": "bg-warning/10 text-warning",
  "Out of service": "bg-danger/10 text-danger",
  Retired: "bg-surface-raised text-muted",
};

export default function AssetTable({ assets, onView }: AssetTableProps) {
  if (assets.length === 0) {
    return (
      <div className="rounded-2xl border border-border bg-surface px-6 py-16 text-center">
        <h2 className="font-semibold text-copy">No sample assets match</h2>
        <p className="mt-2 text-sm text-muted">Change or clear the filters to see the illustrative records.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
        <div>
          <h2 className="font-semibold text-copy">Asset register</h2>
          <p className="mt-1 text-xs text-muted">{assets.length} sample records</p>
        </div>
        <span className="rounded-full bg-accent/5 px-3 py-1 text-xs font-semibold text-accent">Preview data</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left">
          <thead className="bg-surface-raised text-xs uppercase tracking-wide text-muted">
            <tr>
              <th scope="col" className="px-5 py-3 font-semibold sm:px-6">Asset</th>
              <th scope="col" className="px-4 py-3 font-semibold">Category</th>
              <th scope="col" className="px-4 py-3 font-semibold">Location</th>
              <th scope="col" className="px-4 py-3 font-semibold">Status</th>
              <th scope="col" className="px-5 py-3 text-right font-semibold sm:px-6">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {assets.map((asset) => (
              <tr key={asset.id} className="transition hover:bg-surface-raised">
                <td className="px-5 py-4 sm:px-6">
                  <p className="font-semibold text-copy">{asset.name}</p>
                  <p className="mt-1 font-mono text-xs text-muted">{asset.code}</p>
                </td>
                <td className="px-4 py-4 text-sm text-copy">{asset.category}</td>
                <td className="px-4 py-4 text-sm text-muted">{asset.location ?? "Not specified"}</td>
                <td className="px-4 py-4">
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[asset.status]}`}>{asset.status}</span>
                </td>
                <td className="px-5 py-4 text-right sm:px-6">
                  <button type="button" onClick={() => onView(asset)} aria-label={`View sample asset ${asset.name}`} className="inline-flex min-h-10 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-accent hover:bg-accent/5">
                    <Eye size={16} /> View <ArrowUpRight size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
