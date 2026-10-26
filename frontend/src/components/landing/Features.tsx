import { ArrowRight, BrainCircuit, CalendarDays, Boxes, QrCode } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const features = [
  { icon: Boxes, title: "Asset register", description: "Organize core asset identity and operational status in one workspace." },
  { icon: CalendarDays, title: "Maintenance history", description: "Keep service records and schedules associated with the asset." },
  { icon: QrCode, title: "Secure QR workflow", description: "Design asset lookup around opaque identifiers and authorized access." },
  { icon: BrainCircuit, title: "Explainable maintenance rules", description: "Surface clear conditions and recommended actions without unsupported prediction claims." },
];

export default function Features() {
  return (
    <section className="bg-canvas py-20 sm:py-28">
      <Container>
        <SectionTitle
          badge="Product capabilities"
          title="The essentials, connected"
          description="A coherent product direction for inventory, maintenance, secure lookup, and operational understanding."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/8 text-accent"><Icon size={20} /></span>
              <h3 className="mt-5 font-semibold text-copy">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
              <Link to="/features" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">
                Learn more <ArrowRight size={15} />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
