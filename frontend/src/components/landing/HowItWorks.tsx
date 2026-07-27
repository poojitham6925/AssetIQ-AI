import { motion } from "framer-motion";
import {
  UserPlus,
  Package,
  QrCode,
  BrainCircuit,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Account",
    description:
      "Register your organization and securely access the AssetIQ AI platform.",
  },
  {
    icon: Package,
    title: "Register Assets",
    description:
      "Add laptops, machines, furniture, vehicles, or any company asset.",
  },
  {
    icon: QrCode,
    title: "Generate QR Codes",
    description:
      "Assign a unique QR code to every asset for instant identification.",
  },
  {
    icon: BrainCircuit,
    title: "AI Monitoring",
    description:
      "Receive AI-powered insights, health scores, and maintenance predictions.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-zinc-950 py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 uppercase tracking-[5px] text-sm">
            Workflow
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            How AssetIQ AI Works
          </h2>

          <p className="mt-5 text-zinc-400 max-w-2xl mx-auto">
            A simple workflow to register, monitor and maintain
            your organization's assets using AI.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-indigo-500/40 transition"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600 mb-5">
                <step.icon size={22} className="text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-sm leading-7 text-zinc-400">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}