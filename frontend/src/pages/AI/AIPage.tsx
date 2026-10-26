import { BrainCircuit, CircleHelp } from "lucide-react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import AIInsights from "../../components/dashboard/AIInsights";
import StatusMessage from "../../components/ui/StatusMessage";

export default function AIPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/8 text-accent"><BrainCircuit size={20} /></span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Transparent by design</p>
            <h1 className="text-2xl font-semibold text-copy sm:text-3xl">Maintenance insights</h1>
          </div>
        </div>
        <p className="mt-3 max-w-2xl leading-7 text-muted">The first planned insights use clear maintenance rules. This UI preview describes those rules but does not run them against real assets.</p>
        <div className="mt-6"><AIInsights /></div>
        <div className="mt-5">
          <StatusMessage kind="unavailable" title="No predictive model is active">
            AssetIQ makes no prediction or accuracy claim. A model would require suitable historical data and measured evaluation results.
          </StatusMessage>
        </div>
        <div className="mt-5 flex gap-3 rounded-2xl border border-border bg-surface p-5">
          <CircleHelp size={18} className="mt-0.5 shrink-0 text-muted" />
          <p className="text-sm leading-6 text-muted">Insight examples can be hidden in this browser view. That action is temporary and does not acknowledge a stored finding or change an asset.</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
