import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/landing/Hero";
import Stats from "../../components/landing/Stats";
import Features from "../../components/landing/Features";
import CTA from "../../components/landing/CTA";
import Footer from "../../components/landing/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Navbar />

      <main className="pt-20">
        <Hero />
        <Stats />
        <Features />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}