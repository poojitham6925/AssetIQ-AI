import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import AssetTable from "../../components/assets/AssetTable";
import AssetModal from "../../components/assets/AssetModal";
import StatusMessage from "../../components/ui/StatusMessage";
import { demoAssets, standardAssetCategories } from "../../fixtures/demoAssets";
import type { DemoAsset, OperationalStatus } from "../../fixtures/demoAssets";

const statuses: OperationalStatus[] = ["In service", "Under maintenance", "Out of service", "Retired"];

export default function AssetsPage() {
  const [selectedAsset, setSelectedAsset] = useState<DemoAsset | null>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const [status, setStatus] = useState("All statuses");

  const filteredAssets = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return demoAssets.filter((asset) => {
      const matchesQuery = !normalizedQuery
        || `${asset.name} ${asset.code} ${asset.category}`.toLowerCase().includes(normalizedQuery);
      const matchesCategory = category === "All categories" || asset.category === category;
      const matchesStatus = status === "All statuses" || asset.status === status;
      return matchesQuery && matchesCategory && matchesStatus;
    });
  }, [category, query, status]);

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Inventory</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-copy">Assets</h1>
            <p className="mt-2 text-muted">Find an asset and review its illustrative details.</p>
          </div>
          <button type="button" disabled aria-describedby="asset-action-note" className="min-h-11 rounded-xl bg-accent px-4 text-sm font-semibold text-white opacity-55">
            Add asset · unavailable
          </button>
        </div>
        <div className="mt-6">
          <StatusMessage kind="sample" title="Sample inventory">
            These records are local design fixtures only. Changes are not saved, and no workspace data is connected.
          </StatusMessage>
        </div>
        <p id="asset-action-note" className="sr-only">Asset creation requires the backend and database, which are not connected.</p>
        <section aria-label="Filter sample assets" className="mt-6 grid gap-3 rounded-2xl border border-border bg-surface p-4 sm:grid-cols-[minmax(12rem,1fr)_minmax(10rem,0.45fr)_minmax(10rem,0.45fr)]">
          <label className="relative">
            <span className="sr-only">Search sample assets</span>
            <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} className="min-h-11 w-full rounded-xl border border-border bg-canvas pl-10 pr-3 text-sm text-copy placeholder:text-muted/70" placeholder="Search name, code, category" />
          </label>
          <label className="grid gap-1 text-xs font-semibold text-muted">
            Category
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="min-h-11 rounded-xl border border-border bg-canvas px-3 text-sm text-copy">
              <option>All categories</option>
              {standardAssetCategories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="grid gap-1 text-xs font-semibold text-muted">
            Operational status
            <select value={status} onChange={(event) => setStatus(event.target.value)} className="min-h-11 rounded-xl border border-border bg-canvas px-3 text-sm text-copy">
              <option>All statuses</option>
              {statuses.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </section>
        <div className="mt-4">
          <AssetTable assets={filteredAssets} onView={setSelectedAsset} />
        </div>
      </div>
      <AssetModal asset={selectedAsset} onClose={() => setSelectedAsset(null)} />
    </DashboardLayout>
  );
}
