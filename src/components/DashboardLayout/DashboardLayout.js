

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { 
  Power, 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  HelpCircle, 
  Users, 
  BarChart,
  UserPlus,
  FileSpreadsheet,
  Menu // New icon for hamburger menu
} from "lucide-react";
import "./DashboardLayout.css";

function DashboardLayout({ children }) {
  const navigate = useNavigate();
  const name = localStorage.getItem("name") || "User";
  const role = localStorage.getItem("role") || "Guest";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar toggle

  console.log("DashboardLayout: Rendering with role =", role);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("name");
    localStorage.removeItem("sessionActive");
    navigate("/", { replace: true });
  };

  // Toggle sidebar in mobile view
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when a link is clicked
  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  // Sidebar link sets per role
  const nurseLinks = [
    // { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
    { path: "/dashboard/add-labourdata", label: "Add Labour Data", icon: <UserPlus className="sidebar-icon" /> },
    { path: "/dashboard/all-labour-data", label: "All Labour Data", icon: <FileSpreadsheet className="sidebar-icon" /> },
  ];

  const doctorLinks = [
    // { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
    { path: "/dashboard/pre-employment", label: "Pre-Employment", icon: <FileText className="sidebar-icon" /> },
    { path: "/dashboard/add-labourdata", label: "Add Labour Data", icon: <UserPlus className="sidebar-icon" /> },
    { path: "/dashboard/all-labour-data", label: "All Labour Data", icon: <FileSpreadsheet className="sidebar-icon" /> },
  ];

  const clientLinks = [
    { path: "/client-dashboard/client-dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
    { path: "/client-dashboard/client-dashboard-records", label: "Health Records", icon: <FileText className="sidebar-icon" /> },
    { path: "/client-dashboard/client-dashboard-appointments", label: "Appointments", icon: <Calendar className="sidebar-icon" /> },
    { path: "/client-dashboard/client-dashboard-support", label: "Support", icon: <HelpCircle className="sidebar-icon" /> },
  ];

  const adminLinks = [
    
    { path: "/dashboard/dashboard-add-users", label: "Add Users", icon: <UserPlus className="sidebar-icon" /> },
  ];

  // Choose link set by role
  const links = 
    role === "client" ? clientLinks :
    role === "nurse" ? nurseLinks :
    role === "doctor" ? doctorLinks :
    adminLinks;

  return (
    <div className="dashboard-container">
      {/* Top bar */}
      <div className="topbar">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <Menu className="sidebar-toggle-icon" />
        </button>
        <div className="profile-section">
          <span className="profile-name">{name}</span>
          <span className="profile-role">({role})</span>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          <Power className="logout-icon" />
          Logout
        </button>
      </div>

      {/* Layout main body */}
      <div className="dashboard-main">
        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
          <ul className="sidebar-links">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="dashboard-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;