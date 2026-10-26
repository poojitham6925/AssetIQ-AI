import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { demoAssets } from "../../fixtures/demoAssets";
import StatusMessage from "../ui/StatusMessage";

type View = "category" | "status";

export default function Analytics() {
  const [view, setView] = useState<View>("category");
  const chartData = useMemo(() => {
    const key = view === "category" ? "category" : "status";
    const counts = new Map<string, number>();
    for (const asset of demoAssets) counts.set(asset[key], (counts.get(asset[key]) ?? 0) + 1);
    return Array.from(counts, ([label, count]) => ({ label, count }));
  }, [view]);

  return (
    <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-copy">Inventory breakdown</h2>
          <p className="mt-1 text-sm text-muted">Counts derived from local design fixtures only.</p>
        </div>
        <label className="grid gap-1 text-xs font-semibold text-muted">
          Group by
          <select aria-label="Group sample assets by" value={view} onChange={(event) => setView(event.target.value as View)} className="min-h-9 rounded-lg border border-border bg-canvas px-2.5 text-sm text-copy">
            <option value="category">Category</option>
            <option value="status">Status</option>
          </select>
        </label>
      </div>
      <div className="mt-4">
        <StatusMessage kind="sample" title="Sample analytics">These values are calculated from the small bundled demo fixture, not a live database.</StatusMessage>
      </div>
      <div className="mt-4 h-64 w-full" role="img" aria-label={`Sample asset counts grouped by ${view}`}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -16, bottom: 8 }}>
            <defs>
              <linearGradient id="sampleAssetFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity={0.28} />
                <stop offset="95%" stopColor="var(--accent)" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--border)" strokeDasharray="4 5" vertical={false} />
            <XAxis dataKey="label" tick={{ fill: "var(--muted)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis allowDecimals={false} tick={{ fill: "var(--muted)", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, color: "var(--copy)" }} />
            <Area type="monotone" dataKey="count" name="Sample assets" stroke="var(--accent)" strokeWidth={2.5} fill="url(#sampleAssetFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
