import { ArrowRight, Boxes, CalendarClock, CircleAlert, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import Analytics from "../../components/dashboard/Analytics";
import AIInsights from "../../components/dashboard/AIInsights";
import RecentActivity from "../../components/dashboard/RecentActivity";
import StatCard from "../../components/dashboard/StatCard";
import StatusMessage from "../../components/ui/StatusMessage";
import { demoAssets } from "../../fixtures/demoAssets";

const inService = demoAssets.filter((asset) => asset.status === "In service").length;
const maintenanceDue = demoAssets.filter((asset) => Boolean(asset.nextMaintenance)).length;
const outOfService = demoAssets.filter((asset) => asset.status === "Out of service").length;

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Your operations at a glance</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-copy">Overview</h1>
            <p className="mt-2 text-muted">A workspace interface preview with clearly identified sample records.</p>
          </div>
          <Link to="/assets" className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-accent hover:underline">Browse sample assets <ArrowRight size={16} /></Link>
        </div>
        <div className="mt-6">
          <StatusMessage kind="sample" title="Preview data only">
            The figures on this page are calculated from bundled demo assets. No account or live data source is connected.
          </StatusMessage>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard title="Sample assets" value={String(demoAssets.length)} detail="Records in the local design fixture" icon={Boxes} />
          <StatCard title="In service" value={String(inService)} detail="Sample records with this status" icon={Wrench} tone="positive" />
          <StatCard title="Maintenance scheduled" value={String(maintenanceDue)} detail="Sample records with a next-maintenance date" icon={CalendarClock} tone="warning" />
          <StatCard title="Out of service" value={String(outOfService)} detail="Sample records with this status" icon={CircleAlert} tone="danger" />
        </div>
        <div className="mt-5 grid gap-5 xl:grid-cols-[1.05fr_0.95fr]">
          <Analytics />
          <AIInsights />
        </div>
        <div className="mt-5">
          <RecentActivity />
        </div>
      </div>
    </DashboardLayout>
  );
}
