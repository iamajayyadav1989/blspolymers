import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import MinimalLayout from "./layouts/MinimalLayout";

// Pages
import AboutUs from "./pages/AboutUs";
import Certifications from "./pages/Certifications";
import Product from "./pages/Products";
import Services from "./pages/Services";
import Investors from "./pages/Investors";
import Events from "./pages/NewsEvents";
import Gallery from "./pages/Gallery";
import Careers from "./pages/Careers";

import HffrCompound from "./pages/HffrCompound";
import PVCCompound from "./pages/PVCCompound";
import PECompound from "./pages/PECompound";
import XlpeCompound from "./pages/XlpeCompound";
import PipeCoatingPage from "./pages/PipeCoatingPage";
import Adhesive from "./pages/Adhesive";
import CableFilling from "./pages/CableFilling";

import ContactUs from "./pages/ContactUs";
import AdminLogin from "./pages/AdminLogin";

// Components (Home Page Sections)
import HeroCarousel from "./components/HeroCarousel";
import GlobalExpansion from "./components/GlobalExpansion";
import ProductRange from "./components/ProductRange";
import StatsSection from "./components/StatsSection";
import PowerCables from "./components/PowerCables";
import PipeCoating from "./components/PipeCoating";
import ProductSection from "./components/ProductSection";
import QualityControl from "./components/QualityControl";
import ClientsSection from "./components/ClientsSection";
import NewsSection from "./components/NewsSection";
import GlobalPresence from "./components/GlobalPresence";

// Admin
import PrivateRoute from "./components/PrivateRoute";
import AdminDashboard from "./admin/pages/Dashboard"; // corrected if needed
import Products from "./admin/pages/Products";
import News from "./admin/pages/News"; // assuming you have this
import HeroCarouselAdmin from "./admin/pages/HeroCarousel";
import GlobalExpansionAdmin from "./admin/pages/GlobalExpansion";
import Stats from "./admin/pages/Stats";
import PowerCablesAdmin from "./admin/pages/PowerCables";
import AdminPipeCoating from "./admin/pages/PipeCoating";
import AdminProductSection from "./admin/pages/AdminProductSection";
import AdminQualityControl from "./admin/pages/QualityControl";
import AdminClients from "./admin/pages/AdminClients";
import ReportAdmin from "./admin/pages/ReportsAdmin";
import NewsSectionAdmin from "./admin/pages/NewsSectionAdmin";
import AdminLayout from "./admin/layout/AdminLayout";

// export const adminBaseUrl = "http://localhost:005000";

export const adminBaseUrl = "http://srv859195.hstgr.cloud:8080";

const HomePage = () => {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      document.querySelectorAll("a.btn-primary").forEach((el) => {
        if (!el.querySelector("span")) {
          const text = el.textContent.trim();
          el.textContent = "";
          const span = document.createElement("span");
          span.textContent = text;
          el.appendChild(span);
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect(); // Clean up
  }, []);

  return (
    <>
      <HeroCarousel />
      <GlobalExpansion />
      <ProductRange />
      <StatsSection />
      <div className="products-wrapper">
        <PowerCables />
        <PipeCoating />
        <ProductSection />
      </div>
      <QualityControl />
      <ClientsSection />
      <NewsSection />
      <GlobalPresence />
    </>
  );
};

const App = () => {
  return (
    <Router basename="/">
      <Routes>
        {/* Main Website Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/certificate" element={<Certifications />} />
          <Route path="/products" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/products/hffr-compound" element={<HffrCompound />} />
          <Route path="/products/pvc-compound" element={<PVCCompound />} />
          <Route path="/products/pe-compound" element={<PECompound />} />
          <Route path="/products/xlpe-compound" element={<XlpeCompound />} />
          <Route path="/products/pipe-coating" element={<PipeCoatingPage />} />
          <Route path="/products/adhesive" element={<Adhesive />} />
          <Route path="/products/cable-filling" element={<CableFilling />} />
        </Route>

        {/* Admin Login Without Header/Footer */}
        <Route element={<MinimalLayout />}>
          <Route path="/admin/login" element={<AdminLogin />} />
        </Route>

        {/* Admin Dashboard Routes with CoreUI layout */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="product-range" element={<Products />} />
          <Route path="news" element={<News />} />
          <Route path="herocarousel" element={<HeroCarouselAdmin />} />
          <Route path="globalexpansion" element={<GlobalExpansionAdmin />} />
          <Route path="/admin/stats" element={<Stats />} />
          <Route path="/admin/power-cables" element={<PowerCablesAdmin />} />
          <Route path="/admin/pipe-coating" element={<AdminPipeCoating />} />
          <Route path="/admin/products" element={<AdminProductSection />} />
          <Route path="/admin/clients" element={<AdminClients />} />
          <Route path="/admin/news-section" element={<NewsSectionAdmin />} />
          <Route path="/admin/reports" element={<ReportAdmin />} />
          <Route
            path="/admin/quality-control"
            element={<AdminQualityControl />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
