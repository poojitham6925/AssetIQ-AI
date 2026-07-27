import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/landing/Footer";
import {
  QrCode,
  BrainCircuit,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: QrCode,
    title: "QR Asset Tracking",
    desc: "Generate secure QR codes and instantly identify every company asset.",
  },
  {
    icon: BrainCircuit,
    title: "AI Maintenance",
    desc: "Predict failures before they happen using intelligent maintenance models.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Visualize utilization, depreciation and asset performance in real time.",
  },
  {
    icon: ShieldCheck,
    title: "Asset Passport",
    desc: "Maintain complete ownership, warranty and service history digitally.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white">

      <Navbar />

      <main className="flex-1 pt-28">

        <section className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-indigo-400 text-sm">
              FEATURES
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              Everything You Need
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-zinc-400 text-lg leading-8">
              AssetIQ AI provides everything required to monitor,
              secure and optimize enterprise assets from one platform.
            </p>

          </div>

          <div className="grid gap-8 mt-20 md:grid-cols-2">

            {features.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 hover:border-indigo-500 transition"
              >

                <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center">

                  <item.icon className="w-7 h-7"/>

                </div>

                <h2 className="mt-6 text-2xl font-semibold">
                  {item.title}
                </h2>

                <p className="mt-4 text-zinc-400 leading-8">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}