import { motion } from "framer-motion";

const companies = [
  "Microsoft",
  "Google",
  "Amazon",
  "IBM",
  "Oracle",
  "Cisco",
];

export default function TrustedCompanies() {
  return (
    <section className="bg-zinc-950 py-12 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-zinc-500 uppercase tracking-[5px] text-sm"
        >
          Inspired by enterprise workflows
        </motion.p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {companies.map((company) => (
            <div
              key={company}
              className="rounded-xl border border-zinc-800 bg-zinc-900 py-4 text-center text-zinc-400 font-semibold transition hover:border-indigo-500 hover:text-white"
            >
              {company}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}