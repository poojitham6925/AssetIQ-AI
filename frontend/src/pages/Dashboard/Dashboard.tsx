import DashboardLayout from "../../components/dashboard/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import RecentActivity from "../../components/dashboard/RecentActivity";
import AIInsights from "../../components/dashboard/AIInsights";
import Analytics from "../../components/dashboard/Analytics";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      {/* Statistics Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <StatCard title="Assets" value="1,240" />
        <StatCard title="Active" value="1,187" />
        <StatCard title="Maintenance" value="38" />
        <StatCard title="Alerts" value="15" />
      </div>

      {/* Recent Activity + AI Insights */}
      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <RecentActivity />
        <AIInsights />
      </div>

      {/* Analytics Charts */}
      <Analytics />
    </DashboardLayout>
  );
}