import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  detail: string;
  tone?: "accent" | "positive" | "warning" | "danger";
}

const tones = {
  accent: "bg-accent/8 text-accent",
  positive: "bg-positive/10 text-positive",
  warning: "bg-warning/10 text-warning",
  danger: "bg-danger/10 text-danger",
};

export default function StatCard({ title, value, icon: Icon, detail, tone = "accent" }: StatCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-muted">{title}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-copy">{value}</p>
        </div>
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${tones[tone]}`}><Icon size={19} /></span>
      </div>
      <p className="mt-4 border-t border-border pt-3 text-xs leading-5 text-muted">{detail}</p>
    </article>
  );
}
