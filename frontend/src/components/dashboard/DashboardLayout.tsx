import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 flex-1 bg-slate-100 min-h-screen">
        <Topbar />

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}