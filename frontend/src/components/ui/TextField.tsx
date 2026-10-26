import type { InputHTMLAttributes } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  hint?: string;
}

export default function TextField({
  label,
  error,
  hint,
  id,
  className = "",
  ...props
}: TextFieldProps) {
  const inputId = id ?? props.name;
  const messageId = inputId ? `${inputId}-message` : undefined;

  return (
    <div className="grid gap-2">
      <label className="text-sm font-semibold text-copy" htmlFor={inputId}>
        {label}
      </label>
      <input
        {...props}
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={messageId}
        className={`min-h-12 rounded-xl border bg-surface px-4 text-copy placeholder:text-muted/70 ${
          error ? "border-danger" : "border-border"
        } ${className}`}
      />
      {(error || hint) && (
        <p
          id={messageId}
          className={`text-sm ${error ? "text-danger" : "text-muted"}`}
        >
          {error ?? hint}
        </p>
      )}
    </div>
  );
}
