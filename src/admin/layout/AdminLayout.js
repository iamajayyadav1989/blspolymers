import React, { useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../assets/admin.css";
import {
  CContainer,
  CFooter,
  CSidebar,
  CSidebarNav,
  CNavItem,
  CNavLink,
} from "@coreui/react";

// 🔥 Import Topbar
import Topbar from "../components/Topbar";

const AdminLayout = () => {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      document.querySelectorAll("button.btn-primary").forEach((el) => {
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

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Topbar */}
      <Topbar />

      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <CSidebar visible={true} className="border-end">
          <CSidebarNav>
            <CNavItem>
              <CNavLink as={NavLink} to="/admin/herocarousel">
                Hero Slider
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={NavLink} to="/admin/globalexpansion">
                Global Expansion
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={NavLink} to="/admin/product-range">
                Product Range
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={NavLink} to="/admin/stats">
                Stats
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={NavLink} to="/admin/power-cables">
                Power Cable
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={NavLink} to="/admin/pipe-coating">
                Pipe Coating
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={NavLink} to="/admin/products">
                Fiber Cable
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={NavLink} to="/admin/quality-control">
                Quality Control
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={NavLink} to="/admin/clients">
                Our Clients
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={NavLink} to="/admin/news-section">
                News & Events
              </CNavLink>
            </CNavItem>
            <CNavItem>
              <CNavLink as={NavLink} to="/admin/reports">
                Investor Reports
              </CNavLink>
            </CNavItem>
          </CSidebarNav>
        </CSidebar>

        {/* Main Content */}
        <CContainer fluid className="flex-grow-1 py-4">
          <Outlet />
        </CContainer>
      </div>

      <CFooter className="bg-dark text-white py-2 justify-content-center">
        <div>© 2025 BLS Polymers Admin</div>
      </CFooter>
    </div>
  );
};

export default AdminLayout;
