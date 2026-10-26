import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "quiet" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  loading?: boolean;
  children: ReactNode;
}

const variants: Record<Variant, string> = {
  primary: "border-transparent bg-accent text-white hover:bg-accent-hover",
  secondary: "border-border bg-surface text-copy hover:bg-surface-raised",
  quiet: "border-transparent bg-transparent text-muted hover:bg-surface-raised hover:text-copy",
  danger: "border-transparent bg-danger text-white hover:brightness-95",
};

export default function Button({
  variant = "primary",
  loading = false,
  disabled,
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold shadow-sm transition hover:-translate-y-px disabled:pointer-events-none disabled:opacity-55 ${variants[variant]} ${className}`}
    >
      {loading && <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />}
      {children}
    </button>
  );
}