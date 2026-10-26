import { MonitorCog, ShieldCheck, UserRound, UsersRound } from "lucide-react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import ThemeToggle from "../../components/ui/ThemeToggle";
import StatusMessage from "../../components/ui/StatusMessage";

const sections = [
  { icon: UserRound, title: "Profile", description: "Profile details require a connected account." },
  { icon: ShieldCheck, title: "Security", description: "Session and recovery controls require the authentication service." },
  { icon: UsersRound, title: "Workspaces and members", description: "Workspace membership management is not connected." },
];

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/8 text-accent"><MonitorCog size={20} /></span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Preferences</p>
            <h1 className="text-2xl font-semibold text-copy sm:text-3xl">Settings</h1>
          </div>
        </div>
        <p className="mt-3 text-muted">Appearance works locally in this preview. Account and workspace settings are not connected.</p>
        <section className="mt-6 rounded-2xl border border-border bg-surface p-5 sm:p-6">
          <h2 className="font-semibold text-copy">Appearance</h2>
          <p className="mt-1 text-sm text-muted">Choose light, dark, or follow your device preference. This preference is stored in this browser only.</p>
          <div className="mt-5"><ThemeToggle /></div>
        </section>
        <div className="mt-4 grid gap-4">
          {sections.map(({ icon: Icon, title, description }) => (
            <section key={title} className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-raised text-muted"><Icon size={18} /></span>
              <div>
                <h2 className="font-semibold text-copy">{title}</h2>
                <p className="mt-1 text-sm leading-6 text-muted">{description}</p>
              </div>
            </section>
          ))}
        </div>
        <div className="mt-5"><StatusMessage kind="unavailable" title="Account settings are unavailable">No profile, security, invitation, or organization changes can be saved in this frontend-only stage.</StatusMessage></div>
      </div>
    </DashboardLayout>
  );
}
