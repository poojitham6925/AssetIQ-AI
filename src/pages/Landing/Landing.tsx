import Navbar from "../../components/layout/Navbar";

function Landing() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />

      <section className="flex flex-col items-center justify-center min-h-screen px-6">

        <p className="uppercase tracking-[6px] text-indigo-400 text-sm mb-5">
          AI Powered Asset Management
        </p>

        <h1 className="text-6xl md:text-8xl font-black text-white text-center">
          AssetIQ AI
        </h1>

        <p className="mt-8 text-xl text-zinc-400 max-w-2xl text-center leading-8">
          Manage, monitor and predict your organization's assets using
          AI-powered Digital Passports, QR technology and analytics.
        </p>

        <div className="flex gap-6 mt-10">

          <button className="bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-xl font-semibold text-lg">
            Get Started
          </button>

          <button className="border border-zinc-700 px-8 py-4 rounded-xl text-lg hover:border-indigo-500">
            Live Demo
          </button>

        </div>

      </section>
    </div>
  );
}

export default Landing;