import { BarChart3, Info } from "lucide-react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Analytics from "../../components/dashboard/Analytics";
import StatusMessage from "../../components/ui/StatusMessage";
import { demoAssets } from "../../fixtures/demoAssets";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/8 text-accent"><BarChart3 size={20} /></span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Explore the sample</p>
            <h1 className="text-2xl font-semibold text-copy sm:text-3xl">Analytics</h1>
          </div>
        </div>
        <p className="mt-3 max-w-2xl leading-7 text-muted">The current visualization groups the local fixture records. Production analytics will require a connected database and documented metric definitions.</p>
        <div className="mt-6"><StatusMessage kind="sample" title="Illustrative data source">{demoAssets.length} bundled sample asset records · not production or workspace data.</StatusMessage></div>
        <div className="mt-5"><Analytics /></div>
        <div className="mt-5 rounded-2xl border border-border bg-surface p-5">
          <div className="flex items-start gap-3">
            <Info size={18} className="mt-0.5 text-muted" />
            <div>
              <h2 className="font-semibold text-copy">Metric definitions</h2>
              <p className="mt-1 text-sm leading-6 text-muted">The chart displays record counts by the selected category or operational status. It does not represent a time-series trend, growth rate, or live operational KPI.</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
