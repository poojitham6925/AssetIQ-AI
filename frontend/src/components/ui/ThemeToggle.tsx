import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "../../styles/theme";
import type { ThemePreference } from "../../styles/theme";

const options: {
  value: ThemePreference;
  label: string;
  Icon: typeof Sun;
}[] = [
  { value: "light", label: "Light theme", Icon: Sun },
  { value: "dark", label: "Dark theme", Icon: Moon },
  { value: "system", label: "Use system theme", Icon: Monitor },
];

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { preference, setPreference } = useTheme();
  const selected = options.find((option) => option.value === preference) ?? options[2];
  const Icon = selected.Icon;

  return (
    <label className="inline-flex items-center gap-2">
      <span className="sr-only">Color theme</span>
      <Icon aria-hidden="true" size={17} className="text-muted" />
      <select
        aria-label="Color theme"
        className={`rounded-xl border border-border bg-surface text-copy outline-none transition focus-visible:ring-2 focus-visible:ring-[var(--focus)] ${
          compact ? "min-w-[7.25rem] px-2 py-2 text-xs" : "px-3 py-2 text-sm"
        }`}
        value={preference}
        onChange={(event) => setPreference(event.target.value as ThemePreference)}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </label>
  );
}
