import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-8">
      <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-lg">
        <Search size={18} />
        <input
          className="bg-transparent outline-none"
          placeholder="Search assets..."
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell className="cursor-pointer" />
        <UserCircle2 size={34} />
      </div>
    </header>
  );
}