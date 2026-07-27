import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/landing/Footer";

export default function AIPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <div className="pt-32 max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold">AI Insights</h1>
        <p className="mt-4 text-zinc-400">
          AI features and predictions will be available here.
        </p>
      </div>

      <Footer />
    </div>
  );
}