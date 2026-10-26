import { ArrowRight, Boxes, CalendarDays, ScanLine, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/landing/Footer";
import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import StatusMessage from "../../components/ui/StatusMessage";

const features = [
  { icon: Boxes, title: "Structured inventory", desc: "A place to organize asset identity, category, operational status, and workspace ownership." },
  { icon: CalendarDays, title: "Maintenance context", desc: "Keep maintenance schedules and service activity connected to the relevant asset." },
  { icon: ScanLine, title: "Workspace-aware QR", desc: "Use opaque identifiers for asset lookup, with access controlled by the signed-in workspace." },
  { icon: ShieldCheck, title: "Explainable insights", desc: "Begin with transparent maintenance rules that show the data behind each recommendation." },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-canvas text-copy">
      <Navbar />
      <main className="py-16 sm:py-24">
        <Container>
          <SectionTitle
            badge="Product direction"
            title="Built around the asset lifecycle"
            description="AssetIQ is being designed to connect inventory, maintenance history, and operational context in a clear workspace."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {features.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="rounded-3xl border border-border bg-surface p-7 shadow-sm">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/8 text-accent"><Icon size={21} /></span>
                <h2 className="mt-6 text-xl font-semibold text-copy">{title}</h2>
                <p className="mt-3 leading-7 text-muted">{desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <StatusMessage kind="unavailable" title="Product services are not connected">
              This preview does not provide live authentication, stored assets, QR resolution, or generated insights.
            </StatusMessage>
          </div>
          <Link to="/dashboard" className="mt-7 inline-flex items-center gap-2 font-semibold text-accent hover:underline">
            View the interface preview <ArrowRight size={17} />
          </Link>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
