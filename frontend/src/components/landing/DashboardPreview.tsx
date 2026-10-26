import { ArrowRight, CalendarDays, ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import StatusMessage from "../ui/StatusMessage";

export default function DashboardPreview() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Designed for clarity</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-copy sm:text-4xl">A calmer view of complex operations.</h2>
            <p className="mt-5 leading-7 text-muted">The interface brings inventory, maintenance activity, and useful context into one place—without presenting illustrative figures as live business data.</p>
            <Link to="/dashboard" className="mt-7 inline-flex items-center gap-2 font-semibold text-accent hover:underline">
              Explore the preview <ArrowRight size={17} />
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-canvas shadow-[var(--shadow)]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border p-5 sm:px-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">Workspace overview</p>
                <h3 className="mt-1 font-semibold text-copy">A product interface preview</h3>
              </div>
              <button type="button" className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-3 py-2 text-sm text-copy">
                <CalendarDays size={15} /> Last 30 days <ChevronDown size={14} />
              </button>
            </div>
            <div className="grid gap-4 p-5 sm:p-7">
              <StatusMessage kind="sample" title="Illustrative preview">
                This is a design sample, not connected to a workspace or live asset data.
              </StatusMessage>
              <div className="grid gap-3 sm:grid-cols-3">
                {["Asset register", "Service history", "Workspace insights"].map((item) => (
                  <div key={item} className="rounded-2xl border border-border bg-surface p-4">
                    <span className="block h-2 w-12 rounded-full bg-accent/25" />
                    <p className="mt-5 text-sm font-semibold text-copy">{item}</p>
                    <p className="mt-1 text-xs text-muted">Connected records, clearly organized</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3">
                <Search size={17} className="text-muted" />
                <span className="text-sm text-muted">Search your workspace (preview only)</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
