import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../common/Container";

export default function CTA() {
  return (
    <section className="bg-canvas pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#242052] px-6 py-14 text-white sm:px-12 sm:py-16">
          <div aria-hidden="true" className="absolute -right-12 -top-32 h-80 w-80 rounded-full bg-[#9689ff]/25 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#c3bdff]">Start with a clearer picture</span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Explore the AssetIQ experience.</h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-white/75">
              Sign-up and workspace services are not connected in this frontend preview. Explore the product screens or return when account services are available.
            </p>
            <Link to="/dashboard" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-5 font-semibold text-[#242052] transition hover:bg-white/90">
              View product preview <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
