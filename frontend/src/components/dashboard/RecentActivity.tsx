import { ArrowRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import StatusMessage from "../ui/StatusMessage";

export default function RecentActivity() {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/8 text-accent"><Clock3 size={18} /></span>
          <div>
            <h2 className="font-semibold text-copy">Recent activity</h2>
            <p className="mt-0.5 text-xs text-muted">Workspace event stream</p>
          </div>
        </div>
        <Link to="/assets" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">Assets <ArrowRight size={15} /></Link>
      </div>
      <div className="mt-4">
        <StatusMessage kind="empty" title="No activity feed is connected">
          Events are not available in this frontend preview. Nothing has been inferred or fabricated.
        </StatusMessage>
      </div>
    </section>
  );
}
