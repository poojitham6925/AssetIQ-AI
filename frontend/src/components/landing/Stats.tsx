import { Boxes, CalendarClock, Layers3, ScanLine } from "lucide-react";
import Container from "../common/Container";

const capabilities = [
  { icon: Boxes, title: "Asset inventory", detail: "A structured home for the things your team manages." },
  { icon: CalendarClock, title: "Maintenance context", detail: "Schedules and service history alongside each asset." },
  { icon: ScanLine, title: "QR-ready workflows", detail: "Designed around secure, workspace-aware asset lookup." },
  { icon: Layers3, title: "Workspace model", detail: "Personal workspaces with room for organization teams." },
];

export default function Stats() {
  return (
    <section className="border-y border-border bg-surface py-12 sm:py-16">
      <Container>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map(({ icon: Icon, title, detail }) => (
            <div key={title} className="flex gap-4 rounded-2xl p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/8 text-accent">
                <Icon size={20} />
              </span>
              <div>
                <h2 className="text-sm font-semibold text-copy">{title}</h2>
                <p className="mt-1 text-sm leading-6 text-muted">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
