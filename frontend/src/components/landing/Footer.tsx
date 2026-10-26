import { Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";

const links = [
  { label: "Product", to: "/features" },
  { label: "Dashboard preview", to: "/dashboard" },
  { label: "Assets preview", to: "/assets" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12 sm:py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white"><Cpu size={19} /></span>
              <span className="font-bold tracking-tight text-copy">AssetIQ</span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-muted">
              A considered workspace for organizing assets and maintenance activity. The application is under development.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-copy">Explore</h2>
            <nav aria-label="Footer navigation" className="mt-4 grid gap-3 sm:grid-cols-2">
              {links.map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-muted transition hover:text-accent">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AssetIQ AI</p>
          <p>Product preview · No live workspace data is shown</p>
        </div>
      </Container>
    </footer>
  );
}
