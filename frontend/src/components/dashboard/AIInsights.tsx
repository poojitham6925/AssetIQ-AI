import { useState } from "react";
import { CalendarClock, CircleAlert, ClipboardCheck, ShieldAlert } from "lucide-react";
import Button from "../ui/Button";
import StatusMessage from "../ui/StatusMessage";

const rules = [
  { icon: CalendarClock, title: "Upcoming maintenance", signal: "Next maintenance date is within the configured 30-day window.", action: "Review the schedule and prepare the service task." },
  { icon: CircleAlert, title: "Overdue maintenance", signal: "A scheduled maintenance date is earlier than today and remains unresolved.", action: "Review the asset record and record the completed or rescheduled work." },
  { icon: ShieldAlert, title: "Expired warranty", signal: "Warranty expiry date is earlier than today.", action: "Confirm coverage and review service options." },
  { icon: ClipboardCheck, title: "Missing schedule", signal: "No maintenance schedule is present for the asset.", action: "Decide whether this asset needs a recurring maintenance plan." },
];

export default function AIInsights() {
  const [hidden, setHidden] = useState<string[]>([]);
  const visibleRules = rules.filter((rule) => !hidden.includes(rule.title));

  return (
    <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">Rules preview</p>
          <h2 className="mt-1 text-lg font-semibold text-copy">Maintenance insight examples</h2>
          <p className="mt-1 text-sm text-muted">Explainable rules—not generated or predictive results.</p>
        </div>
        {hidden.length > 0 && <Button variant="quiet" className="min-h-9 px-2 text-xs" onClick={() => setHidden([])}>Reset examples</Button>}
      </div>
      <div className="mt-4">
        <StatusMessage kind="sample" title="No insight service is running">
          The rules below describe intended behavior. They have not been evaluated against workspace records.
        </StatusMessage>
      </div>
      <div className="mt-4 space-y-3">
        {visibleRules.map(({ icon: Icon, title, signal, action }) => (
          <article key={title} className="rounded-xl border border-border bg-surface-raised p-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/8 text-accent"><Icon size={17} /></span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-copy">{title}</h3>
                <p className="mt-1 text-xs leading-5 text-muted"><span className="font-semibold">Trigger:</span> {signal}</p>
                <p className="mt-1 text-xs leading-5 text-muted"><span className="font-semibold">Suggested action:</span> {action}</p>
                <button type="button" onClick={() => setHidden((items) => [...items, title])} className="mt-2 text-xs font-semibold text-accent hover:underline">
                  Hide this example for this view
                </button>
              </div>
            </div>
          </article>
        ))}
        {visibleRules.length === 0 && <p className="rounded-xl border border-border p-4 text-sm text-muted">Examples hidden for this view. No asset data has changed.</p>}
      </div>
      <p className="mt-4 text-xs leading-5 text-muted">Hiding an example only changes this preview’s display. It does not acknowledge a stored insight or alter an asset.</p>
    </section>
  );
}
