import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../assets/admin.css";
import {
  CContainer,
  CFooter,
  CSidebar,
  CSidebarNav,
  CNavGroup,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilSpeedometer } from "@coreui/icons";

// 🔥 Import Topbar
import Topbar from "../components/Topbar";

const AdminLayout = () => {
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
              <CNavLink as={NavLink} to="/admin/clients">
                Our Clients
              </CNavLink>
            </CNavItem>

            <CNavItem>
              <CNavLink as={NavLink} to="/admin/news-section">
                News & Events
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
