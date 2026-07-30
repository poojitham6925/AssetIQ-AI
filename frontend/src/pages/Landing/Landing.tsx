import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/landing/Hero";
import Stats from "../../components/landing/Stats";
import HowItWorks from "../../components/landing/HowItWorks";
import DashboardPreview from "../../components/landing/DashboardPreview";
import WhyChoose from "../../components/landing/WhyChoose";
import CTA from "../../components/landing/CTA";
import Footer from "../../components/landing/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Navbar />

      <main className="pt-28">
        <Hero />
        <Stats />
        <HowItWorks />
        <DashboardPreview />
        <WhyChoose />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}