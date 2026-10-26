export type OperationalStatus =
  | "In service"
  | "Under maintenance"
  | "Out of service"
  | "Retired";

export interface DemoAsset {
  id: string;
  name: string;
  code: string;
  category: string;
  status: OperationalStatus;
  manufacturer?: string;
  model?: string;
  location?: string;
  nextMaintenance?: string;
}

export const demoAssets: DemoAsset[] = [
  {
    id: "sample-asset-laptop-001",
    name: "Design workstation",
    code: "DEMO-IT-001",
    category: "Computers",
    status: "In service",
    manufacturer: "Illustrative record",
    model: "Sample device",
    location: "North office",
    nextMaintenance: "2026-11-18",
  },
  {
    id: "sample-asset-printer-003",
    name: "Office printer",
    code: "DEMO-OPS-003",
    category: "Office equipment",
    status: "Under maintenance",
    manufacturer: "Illustrative record",
    location: "Shared workspace",
    nextMaintenance: "2026-11-02",
  },
  {
    id: "sample-asset-server-008",
    name: "Compute node",
    code: "DEMO-INF-008",
    category: "Networking",
    status: "In service",
    manufacturer: "Illustrative record",
    location: "Infrastructure room",
    nextMaintenance: "2026-12-04",
  },
  {
    id: "sample-asset-camera-011",
    name: "Entry camera",
    code: "DEMO-FAC-011",
    category: "Security",
    status: "Out of service",
    manufacturer: "Illustrative record",
    location: "Main entrance",
  },
];

export const standardAssetCategories = [
  "Computers",
  "Networking",
  "Office equipment",
  "Security",
  "Vehicles",
  "Other",
];
