import type { ReactNode } from "react";

type StatusKind = "loading" | "empty" | "error" | "success" | "unavailable" | "sample";

const styles: Record<StatusKind, string> = {
  loading: "border-border bg-surface-raised text-muted",
  empty: "border-border bg-surface-raised text-muted",
  error: "border-danger/30 bg-danger/5 text-danger",
  success: "border-positive/30 bg-positive/5 text-positive",
  unavailable: "border-warning/30 bg-warning/5 text-warning",
  sample: "border-accent/25 bg-accent/5 text-accent",
};

export default function StatusMessage({
  kind,
  title,
  children,
}: {
  kind: StatusKind;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div
      role={kind === "error" ? "alert" : "status"}
      aria-live={kind === "error" ? "assertive" : "polite"}
      className={`rounded-2xl border p-4 ${styles[kind]}`}
    >
      <p className="font-semibold">{title}</p>
      {children && <div className="mt-1 text-sm leading-6">{children}</div>}
    </div>
  );
}
