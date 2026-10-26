import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/landing/Footer";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas text-copy">
      <Navbar />
      <main className="grid flex-1 place-items-center px-5 py-20 text-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">404 · Not found</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">This page isn’t here.</h1>
          <p className="mt-3 text-muted">The link may be outdated, or the address may be incorrect.</p>
          <Link to="/" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-accent px-4 font-semibold text-white hover:bg-accent-hover"><ArrowLeft size={16} /> Return home</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
