import { ArrowDown, ArrowRight, Boxes, ShieldCheck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";

const previewItems = [
  { icon: Boxes, title: "A clearer asset picture", detail: "Bring inventory and operational context together." },
  { icon: Wrench, title: "Maintenance, in context", detail: "Keep service schedules and history close to each asset." },
  { icon: ShieldCheck, title: "Workspace-first access", detail: "Design for personal and organization workspaces." },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-canvas pb-20 pt-16 sm:pb-28 sm:pt-24 lg:pb-32 lg:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-32 -z-10 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-3xl" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-3.5 py-2 text-xs font-semibold tracking-wide text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              ASSET OPERATIONS, MADE CLEAR
            </div>
            <h1 className="mt-7 max-w-2xl text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-copy sm:text-6xl lg:text-7xl">
              Know what you own.{" "}
              <span className="bg-gradient-to-r from-accent to-[#9a83db] bg-clip-text text-transparent">
                Keep it working.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
              A focused workspace for organizing assets, tracking maintenance, and making day-to-day operations easier to understand.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/register" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-5 font-semibold text-white shadow-lg shadow-accent/15 transition hover:-translate-y-0.5 hover:bg-accent-hover">
                Get started <ArrowRight size={17} />
              </Link>
              <a href="#product-preview" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-5 font-semibold text-copy transition hover:bg-surface-raised">
                Explore the product <ArrowDown size={16} />
              </a>
            </div>
            <p className="mt-5 text-sm text-muted">A new platform in progress. No customer or performance statistics are claimed here.</p>
          </div>

          <div id="product-preview" className="relative">
            <div aria-hidden="true" className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/15 via-transparent to-[#81b9d3]/15 blur-xl" />
            <div className="overflow-hidden rounded-[1.7rem] border border-border bg-surface shadow-[var(--shadow)]">
              <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Product preview</p>
                  <p className="mt-1 font-semibold text-copy">Your asset workspace</p>
                </div>
                <span className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-semibold text-accent">Illustrative</span>
              </div>
              <div className="space-y-3 p-4 sm:p-6">
                {previewItems.map(({ icon: Icon, title, detail }, index) => (
                  <div key={title} className="flex gap-4 rounded-2xl border border-border bg-surface-raised p-4 sm:p-5">
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${index === 1 ? "bg-[#e8a755]/15 text-[#ad6c16]" : "bg-accent/10 text-accent"}`}>
                      <Icon size={20} />
                    </span>
                    <div>
                      <h2 className="font-semibold text-copy">{title}</h2>
                      <p className="mt-1 text-sm leading-6 text-muted">{detail}</p>
                    </div>
                  </div>
                ))}
                <div className="rounded-2xl border border-dashed border-border px-4 py-3 text-center text-xs text-muted">
                  Illustrative interface only · no live account data
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-border bg-surface px-4 py-3 shadow-lg sm:block">
              <p className="text-xs font-medium text-muted">Thoughtful by design</p>
              <p className="mt-1 text-sm font-semibold text-copy">One workspace at a time</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
