import {
  Laptop,
  Printer,
  Wrench,
  PlusCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const activities = [
  {
    icon: Laptop,
    title: "Laptop #A102 Scanned",
    description: "QR code scanned by IT Department.",
    time: "2 min ago",
    status: "Completed",
  },
  {
    icon: Printer,
    title: "Printer Assigned",
    description: "Assigned to HR Department.",
    time: "10 min ago",
    status: "Completed",
  },
  {
    icon: Wrench,
    title: "Maintenance Scheduled",
    description: "AI detected service requirement.",
    time: "30 min ago",
    status: "Pending",
  },
  {
    icon: PlusCircle,
    title: "New Asset Registered",
    description: "Dell Latitude 7450 added.",
    time: "1 hour ago",
    status: "Completed",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-7 shadow-lg">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Latest asset operations across the organization
          </p>

        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-indigo-400 transition hover:translate-x-1">

          View All

          <ArrowRight size={16} />

        </button>

      </div>

      {/* Timeline */}

      <div className="space-y-5">

        {activities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-start gap-5 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition-all duration-300 hover:border-indigo-500 hover:bg-zinc-800"
            >

              {/* Icon */}

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600">

                <Icon
                  size={20}
                  className="text-white"
                />

              </div>

              {/* Content */}

              <div className="flex-1">

                <div className="flex items-center justify-between">

                  <h3 className="font-semibold text-white">
                    {item.title}
                  </h3>

                  <span className="text-xs text-zinc-500">
                    {item.time}
                  </span>

                </div>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-4">

                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
                      item.status === "Completed"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-yellow-500/15 text-yellow-400"
                    }`}
                  >
                    <CheckCircle2 size={14} />

                    {item.status}

                  </span>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}