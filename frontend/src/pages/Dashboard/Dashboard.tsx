import {
  Package,
  ShieldCheck,
  TriangleAlert,
  QrCode,
} from "lucide-react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Analytics from "../../components/dashboard/Analytics";
import AIInsights from "../../components/dashboard/AIInsights";
import RecentActivity from "../../components/dashboard/RecentActivity";
import StatCard from "../../components/dashboard/StatCard";

export default function Dashboard() {
  return (
    <DashboardLayout>

      <h1 className="mb-8 text-3xl font-bold text-white">
        Dashboard Overview
      </h1>

      {/* KPI Cards */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Assets"
          value="1,240"
          icon={Package}
          color="bg-indigo-600"
        />

        <StatCard
          title="Healthy Assets"
          value="97%"
          icon={ShieldCheck}
          color="bg-emerald-600"
        />

        <StatCard
          title="Critical Alerts"
          value="15"
          icon={TriangleAlert}
          color="bg-rose-600"
        />

        <StatCard
          title="QR Scans"
          value="3,812"
          icon={QrCode}
          color="bg-amber-600"
        />

      </div>

      {/* Charts */}

      <div className="mt-8 grid gap-6 lg:grid-cols-2">

        <Analytics />

        <AIInsights />

      </div>

      {/* Recent Activity */}

      <div className="mt-8">

        <RecentActivity />

      </div>

    </DashboardLayout>
  );
}