import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">

      <Sidebar />

      <div className="flex-1 flex flex-col">

        <Topbar />

        <main className="flex-1 p-8">
          {children}
        </main>

      </div>

    </div>
  );
}