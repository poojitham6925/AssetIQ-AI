import { useState } from "react";

import DashboardLayout from "../../components/dashboard/DashboardLayout";
import AssetTable from "../../components/assets/AssetTable";
import AssetModal from "../../components/assets/AssetModal";

export default function AssetsPage() {

  const [open, setOpen] = useState(false);

  return (
    <DashboardLayout>

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-white">
            Asset Management
          </h1>

          <p className="mt-2 text-zinc-400">
            Monitor and manage enterprise assets.
          </p>

        </div>

        <button className="rounded-xl bg-indigo-600 px-6 py-3 font-medium transition hover:bg-indigo-500">
          + Add Asset
        </button>

      </div>

      <AssetTable
        onView={() => setOpen(true)}
      />

      <AssetModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </DashboardLayout>
  );
}