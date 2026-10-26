import { Eye, LockKeyhole, PanelTop } from "lucide-react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const principles = [
  { icon: PanelTop, title: "One coherent workspace", detail: "Keep asset information and maintenance context together, rather than scattered across tools." },
  { icon: Eye, title: "Evidence before claims", detail: "Make the source of an insight visible and distinguish rules from validated predictions." },
  { icon: LockKeyhole, title: "Access by workspace", detail: "Build around personal and organization workspaces with clear authorization boundaries." },
];

export default function WhyChoose() {
  return (
    <section className="bg-canvas py-20 sm:py-28">
      <Container>
        <SectionTitle
          badge="Product principles"
          title="Designed to earn trust"
          description="Asset management is operationally important. The product should make records understandable, access deliberate, and recommendations explainable."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {principles.map(({ icon: Icon, title, detail }) => (
            <article key={title} className="rounded-3xl border border-border bg-surface p-7 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/8 text-accent"><Icon size={21} /></span>
              <h3 className="mt-6 text-xl font-semibold text-copy">{title}</h3>
              <p className="mt-3 leading-7 text-muted">{detail}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
