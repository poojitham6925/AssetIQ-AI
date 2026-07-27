import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing/Landing";
import Dashboard from "../pages/Dashboard/Dashboard";
import AssetsPage from "../pages/Assets/AssetsPage";

import FeaturesPage from "../pages/Features/FeaturesPage";
import AnalyticsPage from "../pages/Analytics/AnalyticsPage";
import AIPage from "../pages/AI/AIPage";
import ContactPage from "../pages/Contact/ContactPage";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}