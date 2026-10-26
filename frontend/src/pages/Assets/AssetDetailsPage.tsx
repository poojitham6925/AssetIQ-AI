import { ArrowLeft, CalendarDays, QrCode } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import StatusMessage from "../../components/ui/StatusMessage";
import { demoAssets } from "../../fixtures/demoAssets";

export default function AssetDetailsPage() {
  const { assetId } = useParams();
  const asset = demoAssets.find((item) => item.id === assetId);

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-5xl">
        <Link to="/assets" className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-accent"><ArrowLeft size={16} /> Back to inventory</Link>
        {!asset ? (
          <div className="mt-6"><StatusMessage kind="empty" title="Sample asset not found">This preview route only contains a small set of illustrative records.</StatusMessage></div>
        ) : (
          <>
            <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Sample asset detail</p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight text-copy">{asset.name}</h1>
                <p className="mt-2 font-mono text-sm text-muted">{asset.code}</p>
              </div>
              <span className="w-fit rounded-full bg-accent/8 px-3 py-1.5 text-sm font-semibold text-accent">{asset.status}</span>
            </div>
            <div className="mt-6"><StatusMessage kind="sample" title="Illustrative record">This asset is a frontend fixture. No production workspace data is connected.</StatusMessage></div>
            <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.75fr]">
              <section className="rounded-2xl border border-border bg-surface p-6">
                <h2 className="font-semibold text-copy">Asset information</h2>
                <dl className="mt-5 grid gap-5 sm:grid-cols-2">
                  {[["Category", asset.category], ["Location", asset.location ?? "Not specified"], ["Manufacturer", asset.manufacturer ?? "Not specified"], ["Model", asset.model ?? "Not specified"], ["Next maintenance", asset.nextMaintenance ?? "Not scheduled"]].map(([label, value]) => (
                    <div key={label}><dt className="text-xs font-medium text-muted">{label}</dt><dd className="mt-1 text-sm font-medium text-copy">{value}</dd></div>
                  ))}
                </dl>
              </section>
              <section className="rounded-2xl border border-border bg-surface p-6">
                <h2 className="font-semibold text-copy">Maintenance and identification</h2>
                <div className="mt-4 grid gap-3">
                  <StatusMessage kind="unavailable" title="Maintenance history is not connected">No service records are loaded or created in this preview.</StatusMessage>
                  <StatusMessage kind="unavailable" title="QR service is not connected"><QrCode size={16} className="mr-1 inline" /> No QR code has been generated.</StatusMessage>
                </div>
              </section>
            </div>
            <div className="mt-5 flex items-center gap-2 text-xs text-muted"><CalendarDays size={14} /> Record actions require a connected backend.</div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
