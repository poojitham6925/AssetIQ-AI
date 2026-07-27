import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", assets: 120 },
  { month: "Feb", assets: 180 },
  { month: "Mar", assets: 250 },
  { month: "Apr", assets: 320 },
  { month: "May", assets: 410 },
  { month: "Jun", assets: 520 },
];

export default function Analytics() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-7 shadow-lg">

      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Asset Analytics
          </h2>

          <p className="mt-1 text-sm text-zinc-500">
            Monthly asset growth and activity
          </p>

        </div>

        <div className="flex gap-2">

          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white">
            Month
          </button>

          <button className="rounded-lg bg-zinc-800 px-4 py-2 text-sm text-zinc-400 hover:bg-zinc-700">
            Year
          </button>

        </div>

      </div>

      {/* Summary */}

      <div className="mb-8 grid grid-cols-3 gap-4">

        <div className="rounded-2xl bg-zinc-800 p-4">

          <p className="text-sm text-zinc-500">
            Total Assets
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            1,240
          </h3>

        </div>

        <div className="rounded-2xl bg-zinc-800 p-4">

          <p className="text-sm text-zinc-500">
            Growth
          </p>

          <h3 className="mt-2 text-2xl font-bold text-emerald-400">
            +18%
          </h3>

        </div>

        <div className="rounded-2xl bg-zinc-800 p-4">

          <p className="text-sm text-zinc-500">
            Active
          </p>

          <h3 className="mt-2 text-2xl font-bold text-indigo-400">
            97%
          </h3>

        </div>

      </div>

      {/* Chart */}

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="assetGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#6366f1"
                  stopOpacity={0.7}
                />

                <stop
                  offset="95%"
                  stopColor="#6366f1"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#27272a"
              strokeDasharray="5 5"
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#a1a1aa" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#a1a1aa" }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#18181b",
                border: "1px solid #3f3f46",
                borderRadius: 12,
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="assets"
              stroke="#6366f1"
              strokeWidth={4}
              fill="url(#assetGradient)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}