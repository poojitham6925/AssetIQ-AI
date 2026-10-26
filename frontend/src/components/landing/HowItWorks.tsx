import { ArrowUpRight, ClipboardList, PackagePlus, ScanLine } from "lucide-react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const steps = [
  { icon: PackagePlus, title: "Organize", description: "Bring asset details into a consistent, searchable workspace." },
  { icon: ScanLine, title: "Identify", description: "Use opaque QR identifiers to guide authorized users to the right record." },
  { icon: ClipboardList, title: "Maintain", description: "Capture service activity and keep upcoming work visible." },
  { icon: ArrowUpRight, title: "Understand", description: "Turn trusted records into clear operational views and explainable alerts." },
];

export default function HowItWorks() {
  return (
    <section className="bg-canvas py-20 sm:py-28">
      <Container>
        <SectionTitle
          badge="A practical workflow"
          title="From inventory to informed action"
          description="A considered asset workflow should make records easier to maintain and decisions easier to explain."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="relative rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/8 text-accent"><Icon size={20} /></span>
                <span className="text-sm font-semibold tracking-widest text-muted">0{index + 1}</span>
              </div>
              <h3 className="mt-7 text-lg font-semibold text-copy">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
