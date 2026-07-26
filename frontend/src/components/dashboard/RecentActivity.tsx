const activities = [
  {
    title: "Laptop #A102 scanned",
    time: "2 min ago",
  },
  {
    title: "Printer assigned to HR",
    time: "10 min ago",
  },
  {
    title: "AI predicted maintenance",
    time: "30 min ago",
  },
  {
    title: "New asset added",
    time: "1 hour ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-4">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((item, index) => (
          <div
            key={index}
            className="border-b pb-3 last:border-none"
          >
            <p className="font-medium">{item.title}</p>
            <p className="text-sm text-gray-500">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}