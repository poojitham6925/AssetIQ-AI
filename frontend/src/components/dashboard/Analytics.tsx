import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const pieData = [
  { name: "Laptops", value: 420 },
  { name: "Desktops", value: 180 },
  { name: "Printers", value: 90 },
  { name: "Monitors", value: 260 },
  { name: "Others", value: 140 },
];

const lineData = [
  { month: "Jan", assets: 120 },
  { month: "Feb", assets: 180 },
  { month: "Mar", assets: 250 },
  { month: "Apr", assets: 320 },
  { month: "May", assets: 410 },
  { month: "Jun", assets: 520 },
];

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
];

export default function Analytics() {
  return (
    <div className="grid lg:grid-cols-2 gap-6 mt-8">
      {/* Pie Chart */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-6">
          Asset Categories
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={100}
              label
            >
              {pieData.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-6">
          Monthly Asset Growth
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="assets"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}