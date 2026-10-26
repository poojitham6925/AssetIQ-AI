import { useEffect } from "react";
import { Building2, CalendarDays, QrCode, X } from "lucide-react";
import { Link } from "react-router-dom";
import type { DemoAsset } from "../../fixtures/demoAssets";
import StatusMessage from "../ui/StatusMessage";

interface AssetModalProps {
  asset: DemoAsset | null;
  onClose: () => void;
}

export default function AssetModal({ asset, onClose }: AssetModalProps) {
  useEffect(() => {
    if (!asset) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [asset, onClose]);

  if (!asset) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-[#101526]/55 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section role="dialog" aria-modal="true" aria-labelledby="asset-dialog-title" className="my-8 w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-surface shadow-[var(--shadow)]">
        <header className="flex items-start justify-between gap-4 border-b border-border px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Sample asset</p>
            <h2 id="asset-dialog-title" className="mt-1 text-xl font-semibold text-copy">{asset.name}</h2>
            <p className="mt-1 font-mono text-sm text-muted">{asset.code}</p>
          </div>
          <button autoFocus type="button" onClick={onClose} aria-label="Close asset details" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border text-muted hover:bg-surface-raised hover:text-copy"><X size={18} /></button>
        </header>
        <div className="grid gap-6 p-5 sm:grid-cols-[1fr_0.8fr] sm:p-7">
          <dl className="grid content-start gap-4">
            <div><dt className="text-xs font-medium text-muted">Category</dt><dd className="mt-1 font-medium text-copy">{asset.category}</dd></div>
            <div><dt className="text-xs font-medium text-muted">Operational status</dt><dd className="mt-1 font-medium text-copy">{asset.status}</dd></div>
            <div className="flex items-start gap-3"><Building2 size={17} className="mt-0.5 text-accent" /><div><dt className="text-xs font-medium text-muted">Location</dt><dd className="mt-1 font-medium text-copy">{asset.location ?? "Not specified"}</dd></div></div>
            <div className="flex items-start gap-3"><CalendarDays size={17} className="mt-0.5 text-accent" /><div><dt className="text-xs font-medium text-muted">Next maintenance</dt><dd className="mt-1 font-medium text-copy">{asset.nextMaintenance ?? "No sample date"}</dd></div></div>
          </dl>
          <div className="grid content-start gap-3">
            <div className="grid min-h-36 place-items-center rounded-2xl border border-dashed border-border bg-surface-raised text-muted">
              <div className="text-center"><QrCode size={30} className="mx-auto" /><p className="mt-2 text-sm font-medium">QR service not connected</p></div>
            </div>
            <StatusMessage kind="unavailable" title="No QR was generated">
              QR resolution requires the authorized backend.
            </StatusMessage>
          </div>
        </div>
        <footer className="flex flex-col-reverse justify-between gap-3 border-t border-border px-5 py-4 sm:flex-row sm:items-center sm:px-7">
          <p className="text-xs text-muted">Illustrative record · not persisted</p>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="min-h-10 rounded-xl border border-border px-4 text-sm font-semibold text-copy hover:bg-surface-raised">Close</button>
            <Link to={`/assets/${asset.id}`} onClick={onClose} className="inline-flex min-h-10 items-center rounded-xl bg-accent px-4 text-sm font-semibold text-white hover:bg-accent-hover">Open details</Link>
          </div>
        </footer>
      </section>
    </div>
  );
}
