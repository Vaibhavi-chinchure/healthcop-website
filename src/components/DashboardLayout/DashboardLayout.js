// // // // // // // import React from "react";
// // // // // // // import { NavLink, useNavigate } from "react-router-dom";
// // // // // // // import { Power, LayoutDashboard, FileText, Calendar, HelpCircle, Users, BarChart } from "lucide-react";
// // // // // // // import "./DashboardLayout.css";

// // // // // // // function DashboardLayout({ children }) {
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const name = localStorage.getItem("name") || "User";
// // // // // // //   const role = localStorage.getItem("role") || "Guest";

// // // // // // //   const handleLogout = () => {
// // // // // // //     localStorage.removeItem("token");
// // // // // // //     localStorage.removeItem("role");
// // // // // // //     localStorage.removeItem("name");
// // // // // // //     localStorage.removeItem("sessionActive"); // Clear session flag
// // // // // // //     navigate("/login", { replace: true });
// // // // // // //   };

// // // // // // //   const clientLinks = [
// // // // // // //     { path: "/client-dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // // // // //     { path: "/client-dashboard-records", label: "Health Records", icon: <FileText className="sidebar-icon" /> },
// // // // // // //     { path: "/client-dashboard-appointments", label: "Appointments", icon: <Calendar className="sidebar-icon" /> },
// // // // // // //     { path: "/client-dashboard-support", label: "Support", icon: <HelpCircle className="sidebar-icon" /> },
// // // // // // //   ];

// // // // // // //   const adminLinks = [
// // // // // // //     { path: "/dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // // // // //     { path: "/dashboard-users", label: "Manage Users", icon: <Users className="sidebar-icon" /> },
// // // // // // //     { path: "/dashboard-reports", label: "Reports", icon: <BarChart className="sidebar-icon" /> },
// // // // // // //   ];

// // // // // // //   const links = role === "client" ? clientLinks : adminLinks;

// // // // // // //   return (
// // // // // // //     <div className="dashboard-container">
// // // // // // //       <div className="topbar">
// // // // // // //         <div className="profile-section">
// // // // // // //           <span className="profile-name">{name}</span>
// // // // // // //           <span className="profile-role">({role})</span>
// // // // // // //         </div>
// // // // // // //         <button className="logout-btn" onClick={handleLogout}>
// // // // // // //           <Power className="logout-icon" />
// // // // // // //           Logout
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //       <div className="dashboard-main">
// // // // // // //         <div className="sidebar">
// // // // // // //           <div className="sidebar-header">HealthCop Dashboard</div>
// // // // // // //           <ul className="sidebar-links">
// // // // // // //             {links.map((link) => (
// // // // // // //               <li key={link.path}>
// // // // // // //                 <NavLink to={link.path} className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}>
// // // // // // //                   {link.icon}
// // // // // // //                   <span>{link.label}</span>
// // // // // // //                 </NavLink>
// // // // // // //               </li>
// // // // // // //             ))}
// // // // // // //           </ul>
// // // // // // //         </div>
// // // // // // //         <div className="dashboard-content">{children}</div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default DashboardLayout;

// // // // // // import React from "react";
// // // // // // import { NavLink, useNavigate } from "react-router-dom";
// // // // // // import { Power, LayoutDashboard, FileText, Calendar, HelpCircle, Users, BarChart } from "lucide-react";
// // // // // // import "./DashboardLayout.css";
// // // // // // import { UserPlus } from "lucide-react"; // choose any icon

// // // // // // function DashboardLayout({ children }) {
// // // // // //   const navigate = useNavigate();
// // // // // //   const name = localStorage.getItem("name") || "User";
// // // // // //   const role = localStorage.getItem("role") || "Guest";
// // // // // //   console.log("DashboardLayout: Rendering with role =", role, "children =", children);

// // // // // //   const handleLogout = () => {
// // // // // //   localStorage.removeItem("token");
// // // // // //   localStorage.removeItem("role");
// // // // // //   localStorage.removeItem("name");
// // // // // //   localStorage.removeItem("sessionActive");
// // // // // //   navigate("/", { replace: true });  // 👈 redirect to home page
// // // // // // };
// // // // // // const nurseLinks = [
// // // // // //   { 
// // // // // //     path: "/nurse-dashboard/pre-employment", 
// // // // // //     label: "Pre-Employment", 
// // // // // //     icon: <FileText className="sidebar-icon" /> 
// // // // // //   },
// // // // // // ];


// // // // // //   const clientLinks = [
// // // // // //   { path: "/client-dashboard/client-dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // // // //   { path: "/client-dashboard/client-dashboard-records", label: "Health Records", icon: <FileText className="sidebar-icon" /> },
// // // // // //   { path: "/client-dashboard/client-dashboard-appointments", label: "Appointments", icon: <Calendar className="sidebar-icon" /> },
// // // // // //   { path: "/client-dashboard/client-dashboard-support", label: "Support", icon: <HelpCircle className="sidebar-icon" /> },
// // // // // // ];

// // // // // // const adminLinks = [
// // // // // //   { path: "/dashboard/dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // // // //   { path: "/dashboard/dashboard-users", label: "Manage Users", icon: <Users className="sidebar-icon" /> },
// // // // // //   { path: "/dashboard/dashboard-reports", label: "Reports", icon: <BarChart className="sidebar-icon" /> },
// // // // // //   { path: "/dashboard/dashboard-add-users", label: "Add Users", icon: <UserPlus className="sidebar-icon" /> },  // new
// // // // // // ];



// // // // // //   // const links = role === "client" ? clientLinks : adminLinks;
// // // // // // const links = role === "client" 
// // // // // //   ? clientLinks 
// // // // // //   : role === "nurse" 
// // // // // //     ? nurseLinks 
// // // // // //     : adminLinks;

// // // // // //   return (
// // // // // //     <div className="dashboard-container">
// // // // // //       <div className="topbar">
// // // // // //         <div className="profile-section">
// // // // // //           <span className="profile-name">{name}</span>
// // // // // //           <span className="profile-role">({role})</span>
// // // // // //         </div>
// // // // // //         <button className="logout-btn" onClick={handleLogout}>
// // // // // //           <Power className="logout-icon" />
// // // // // //           Logout
// // // // // //         </button>
// // // // // //       </div>
// // // // // //       <div className="dashboard-content">
// // // // // //   {children}
// // // // // // </div>
// // // // // //       <div className="dashboard-main">
// // // // // //         <div className="sidebar">
// // // // // //           <ul className="sidebar-links">
// // // // // //             {links.map((link) => (
// // // // // //               <li key={link.path}>
// // // // // //                 <NavLink to={link.path} className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}>
// // // // // //                   {link.icon}
// // // // // //                   <span>{link.label}</span>
// // // // // //                 </NavLink>
// // // // // //               </li>
// // // // // //             ))}
// // // // // //           </ul>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default DashboardLayout;


// // // // // // import React from "react";
// // // // // // import { NavLink, useNavigate } from "react-router-dom";
// // // // // // import { 
// // // // // //   Power, 
// // // // // //   LayoutDashboard, 
// // // // // //   FileText, 
// // // // // //   Calendar, 
// // // // // //   HelpCircle, 
// // // // // //   Users, 
// // // // // //   BarChart,
// // // // // //   UserPlus 
// // // // // // } from "lucide-react";
// // // // // // import "./DashboardLayout.css";

// // // // // // function DashboardLayout({ children }) {
// // // // // //   const navigate = useNavigate();
// // // // // //   const name = localStorage.getItem("name") || "User";
// // // // // //   const role = localStorage.getItem("role") || "Guest";
// // // // // //   console.log("DashboardLayout: Rendering with role =", role);

// // // // // //   const handleLogout = () => {
// // // // // //     localStorage.removeItem("token");
// // // // // //     localStorage.removeItem("role");
// // // // // //     localStorage.removeItem("name");
// // // // // //     localStorage.removeItem("sessionActive");
// // // // // //     navigate("/", { replace: true }); // 👈 redirect to home page
// // // // // //   };

// // // // // //   /** 🔹 Sidebar link sets per role */
// // // // // //   const nurseLinks = [
// // // // // //     { 
// // // // // //       path: "/dashboard/pre-employment", 
// // // // // //       label: "Pre-Employment", 
// // // // // //       icon: <FileText className="sidebar-icon" /> 
// // // // // //     },
// // // // // //   ];

// // // // // //   const doctorLinks = [
// // // // // //     { 
// // // // // //       path: "/dashboard/pre-employment", 
// // // // // //       label: "Pre-Employment", 
// // // // // //       icon: <FileText className="sidebar-icon" /> 
// // // // // //     },
// // // // // //   ];

// // // // // //   const clientLinks = [
// // // // // //     { path: "/client-dashboard/client-dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // // // //     { path: "/client-dashboard/client-dashboard-records", label: "Health Records", icon: <FileText className="sidebar-icon" /> },
// // // // // //     { path: "/client-dashboard/client-dashboard-appointments", label: "Appointments", icon: <Calendar className="sidebar-icon" /> },
// // // // // //     { path: "/client-dashboard/client-dashboard-support", label: "Support", icon: <HelpCircle className="sidebar-icon" /> },
// // // // // //   ];

// // // // // //   const adminLinks = [
// // // // // //     { path: "/dashboard/dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // // // //     { path: "/dashboard/dashboard-users", label: "Manage Users", icon: <Users className="sidebar-icon" /> },
// // // // // //     { path: "/dashboard/dashboard-reports", label: "Reports", icon: <BarChart className="sidebar-icon" /> },
// // // // // //     { path: "/dashboard/dashboard-add-users", label: "Add Users", icon: <UserPlus className="sidebar-icon" /> },
// // // // // //   ];

// // // // // //   /** 🔹 Choose link set by role */
// // // // // //   const links = 
// // // // // //     role === "client" ? clientLinks :
// // // // // //     role === "nurse" ? nurseLinks :
// // // // // //     role === "doctor" ? doctorLinks :
// // // // // //     adminLinks;

// // // // // //   return (
// // // // // //     <div className="dashboard-container">
// // // // // //       {/* 🔹 Top bar */}
// // // // // //       <div className="topbar">
// // // // // //         <div className="profile-section">
// // // // // //           <span className="profile-name">{name}</span>
// // // // // //           <span className="profile-role">({role})</span>
// // // // // //         </div>
// // // // // //         <button className="logout-btn" onClick={handleLogout}>
// // // // // //           <Power className="logout-icon" />
// // // // // //           Logout
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* 🔹 Layout main body */}
// // // // // //       <div className="dashboard-main">
// // // // // //         {/* Sidebar */}
// // // // // //         <div className="sidebar">
// // // // // //           <ul className="sidebar-links">
// // // // // //             {links.map((link) => (
// // // // // //               <li key={link.path}>
// // // // // //                 <NavLink 
// // // // // //                   to={link.path} 
// // // // // //                   className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
// // // // // //                 >
// // // // // //                   {link.icon}
// // // // // //                   <span>{link.label}</span>
// // // // // //                 </NavLink>
// // // // // //               </li>
// // // // // //             ))}
// // // // // //           </ul>
// // // // // //         </div>

// // // // // //         {/* Main Content */}
// // // // // //         <div className="dashboard-content">
// // // // // //           {children}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default DashboardLayout;

// // // // // import React from "react";
// // // // // import { NavLink, useNavigate } from "react-router-dom";
// // // // // import { 
// // // // //   Power, 
// // // // //   LayoutDashboard, 
// // // // //   FileText, 
// // // // //   Calendar, 
// // // // //   HelpCircle, 
// // // // //   Users, 
// // // // //   BarChart,
// // // // //   UserPlus 
// // // // // } from "lucide-react";
// // // // // import "./DashboardLayout.css";

// // // // // function DashboardLayout({ children }) {
// // // // //   const navigate = useNavigate();
// // // // //   const name = localStorage.getItem("name") || "User";
// // // // //   const role = localStorage.getItem("role") || "Guest";
// // // // //   console.log("DashboardLayout: Rendering with role =", role);

// // // // //   const handleLogout = () => {
// // // // //     localStorage.removeItem("token");
// // // // //     localStorage.removeItem("role");
// // // // //     localStorage.removeItem("name");
// // // // //     localStorage.removeItem("sessionActive");
// // // // //     navigate("/", { replace: true }); // 👈 redirect to home page
// // // // //   };

// // // // //   /** 🔹 Sidebar link sets per role */
// // // // //   const nurseLinks = [
// // // // //     { 
// // // // //       path: "/dashboard/pre-employment", 
// // // // //       label: "Pre-Employment", 
// // // // //       icon: <FileText className="sidebar-icon" /> 
// // // // //     },
// // // // //   ];

// // // // //   const doctorLinks = [
// // // // //     { 
// // // // //       path: "/dashboard/pre-employment", 
// // // // //       label: "Pre-Employment", 
// // // // //       icon: <FileText className="sidebar-icon" /> 
// // // // //     },
// // // // //     { 
// // // // //       path: "/dashboard/review-labourdata",  // New route
// // // // //       label: "Review Labour Data",
// // // // //       icon: <FileText className="sidebar-icon" /> 
// // // // //     }
// // // // //   ];

// // // // //   const clientLinks = [
// // // // //     { path: "/client-dashboard/client-dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // // //     { path: "/client-dashboard/client-dashboard-records", label: "Health Records", icon: <FileText className="sidebar-icon" /> },
// // // // //     { path: "/client-dashboard/client-dashboard-appointments", label: "Appointments", icon: <Calendar className="sidebar-icon" /> },
// // // // //     { path: "/client-dashboard/client-dashboard-support", label: "Support", icon: <HelpCircle className="sidebar-icon" /> },
// // // // //   ];

// // // // //   const adminLinks = [
// // // // //     { path: "/dashboard/dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // // //     { path: "/dashboard/dashboard-users", label: "Manage Users", icon: <Users className="sidebar-icon" /> },
// // // // //     { path: "/dashboard/dashboard-reports", label: "Reports", icon: <BarChart className="sidebar-icon" /> },
// // // // //     { path: "/dashboard/dashboard-add-users", label: "Add Users", icon: <UserPlus className="sidebar-icon" /> },
// // // // //   ];

// // // // //   /** 🔹 Choose link set by role */
// // // // //   const links = 
// // // // //     role === "client" ? clientLinks :
// // // // //     role === "nurse" ? nurseLinks :
// // // // //     role === "doctor" ? doctorLinks :
// // // // //     adminLinks;

// // // // //   return (
// // // // //     <div className="dashboard-container">
// // // // //       {/* 🔹 Top bar */}
// // // // //       <div className="topbar">
// // // // //         <div className="profile-section">
// // // // //           <span className="profile-name">{name}</span>
// // // // //           <span className="profile-role">({role})</span>
// // // // //         </div>
// // // // //         <button className="logout-btn" onClick={handleLogout}>
// // // // //           <Power className="logout-icon" />
// // // // //           Logout
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* 🔹 Layout main body */}
// // // // //       <div className="dashboard-main">
// // // // //         {/* Sidebar */}
// // // // //         <div className="sidebar">
// // // // //           <ul className="sidebar-links">
// // // // //             {links.map((link) => (
// // // // //               <li key={link.path}>
// // // // //                 <NavLink 
// // // // //                   to={link.path} 
// // // // //                   className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
// // // // //                 >
// // // // //                   {link.icon}
// // // // //                   <span>{link.label}</span>
// // // // //                 </NavLink>
// // // // //               </li>
// // // // //             ))}
// // // // //           </ul>
// // // // //         </div>

// // // // //         {/* Main Content */}
// // // // //         <div className="dashboard-content">
// // // // //           {children}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default DashboardLayout;

// // // // // import React from "react";
// // // // // import { NavLink, useNavigate } from "react-router-dom";
// // // // // import { 
// // // // //   Power, 
// // // // //   LayoutDashboard, 
// // // // //   FileText, 
// // // // //   Calendar, 
// // // // //   HelpCircle, 
// // // // //   Users, 
// // // // //   BarChart,
// // // // //   UserPlus 
// // // // // } from "lucide-react";
// // // // // import "./DashboardLayout.css";

// // // // // function DashboardLayout({ children }) {
// // // // //   const navigate = useNavigate();
// // // // //   const name = localStorage.getItem("name") || "User";
// // // // //   const role = localStorage.getItem("role") || "Guest";
// // // // //   console.log("DashboardLayout: Rendering with role =", role);

// // // // //   const handleLogout = () => {
// // // // //     localStorage.removeItem("token");
// // // // //     localStorage.removeItem("role");
// // // // //     localStorage.removeItem("name");
// // // // //     localStorage.removeItem("sessionActive");
// // // // //     navigate("/", { replace: true });
// // // // //   };

// // // // //   /** 🔹 Sidebar link sets per role */
// // // // //   const nurseLinks = [
// // // // //     { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // // //     { path: "/dashboard/pre-employment", label: "Pre-Employment", icon: <FileText className="sidebar-icon" /> },
// // // // //   ];

// // // // //   const doctorLinks = [
// // // // //     { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // // //     { path: "/dashboard/pre-employment", label: "Pre-Employment", icon: <FileText className="sidebar-icon" /> },
// // // // //     { path: "/dashboard/review-labourdata", label: "Review Labour Data", icon: <FileText className="sidebar-icon" /> }
// // // // //   ];

// // // // //   const clientLinks = [
// // // // //     { path: "/client-dashboard/client-dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // // //     { path: "/client-dashboard/client-dashboard-records", label: "Health Records", icon: <FileText className="sidebar-icon" /> },
// // // // //     { path: "/client-dashboard/client-dashboard-appointments", label: "Appointments", icon: <Calendar className="sidebar-icon" /> },
// // // // //     { path: "/client-dashboard/client-dashboard-support", label: "Support", icon: <HelpCircle className="sidebar-icon" /> },
// // // // //   ];

// // // // //   const adminLinks = [
// // // // //     { path: "/dashboard/dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // // //     { path: "/dashboard/dashboard-users", label: "Manage Users", icon: <Users className="sidebar-icon" /> },
// // // // //     { path: "/dashboard/dashboard-reports", label: "Reports", icon: <BarChart className="sidebar-icon" /> },
// // // // //     { path: "/dashboard/dashboard-add-users", label: "Add Users", icon: <UserPlus className="sidebar-icon" /> },
// // // // //   ];

// // // // //   /** 🔹 Choose link set by role */
// // // // //   const links = 
// // // // //     role === "client" ? clientLinks :
// // // // //     role === "nurse" ? nurseLinks :
// // // // //     role === "doctor" ? doctorLinks :
// // // // //     adminLinks;

// // // // //   return (
// // // // //     <div className="dashboard-container">
// // // // //       {/* 🔹 Top bar */}
// // // // //       <div className="topbar">
// // // // //         <div className="profile-section">
// // // // //           <span className="profile-name">{name}</span>
// // // // //           <span className="profile-role">({role})</span>
// // // // //         </div>
// // // // //         <button className="logout-btn" onClick={handleLogout}>
// // // // //           <Power className="logout-icon" />
// // // // //           Logout
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* 🔹 Layout main body */}
// // // // //       <div className="dashboard-main">
// // // // //         {/* Sidebar */}
// // // // //         <div className="sidebar">
// // // // //           <ul className="sidebar-links">
// // // // //             {links.map((link) => (
// // // // //               <li key={link.path}>
// // // // //                 <NavLink 
// // // // //                   to={link.path} 
// // // // //                   className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
// // // // //                 >
// // // // //                   {link.icon}
// // // // //                   <span>{link.label}</span>
// // // // //                 </NavLink>
// // // // //               </li>
// // // // //             ))}
// // // // //           </ul>
// // // // //         </div>

// // // // //         {/* Main Content */}
// // // // //         <div className="dashboard-content">
// // // // //           {children}
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default DashboardLayout;

// // // // import React from "react";
// // // // import { NavLink, useNavigate } from "react-router-dom";
// // // // import { 
// // // //   Power, 
// // // //   LayoutDashboard, 
// // // //   FileText, 
// // // //   Calendar, 
// // // //   HelpCircle, 
// // // //   Users, 
// // // //   BarChart,
// // // //   UserPlus 
// // // // } from "lucide-react";
// // // // import "./DashboardLayout.css";

// // // // function DashboardLayout({ children }) {
// // // //   const navigate = useNavigate();
// // // //   const name = localStorage.getItem("name") || "User";
// // // //   const role = localStorage.getItem("role") || "Guest";
// // // //   console.log("DashboardLayout: Rendering with role =", role);

// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem("token");
// // // //     localStorage.removeItem("role");
// // // //     localStorage.removeItem("name");
// // // //     localStorage.removeItem("sessionActive");
// // // //     navigate("/", { replace: true });
// // // //   };

// // // //   /** 🔹 Sidebar link sets per role */
// // // //   const nurseLinks = [
// // // //     { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // //     { path: "/dashboard/pre-employment", label: "Pre-Employment", icon: <FileText className="sidebar-icon" /> },
// // // //     { path: "/dashboard/add-labourdata", label: "Add Labour Data", icon: <UserPlus className="sidebar-icon" /> },
// // // //   ];

// // // //   const doctorLinks = [
// // // //     { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // //     { path: "/dashboard/pre-employment", label: "Pre-Employment", icon: <FileText className="sidebar-icon" /> },
// // // //     { path: "/dashboard/review-labourdata", label: "Review Labour Data", icon: <FileText className="sidebar-icon" /> }
// // // //   ];

// // // //   const clientLinks = [
// // // //     { path: "/client-dashboard/client-dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // //     { path: "/client-dashboard/client-dashboard-records", label: "Health Records", icon: <FileText className="sidebar-icon" /> },
// // // //     { path: "/client-dashboard/client-dashboard-appointments", label: "Appointments", icon: <Calendar className="sidebar-icon" /> },
// // // //     { path: "/client-dashboard/client-dashboard-support", label: "Support", icon: <HelpCircle className="sidebar-icon" /> },
// // // //   ];

// // // //   const adminLinks = [
// // // //     { path: "/dashboard/dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // //     { path: "/dashboard/dashboard-users", label: "Manage Users", icon: <Users className="sidebar-icon" /> },
// // // //     { path: "/dashboard/dashboard-reports", label: "Reports", icon: <BarChart className="sidebar-icon" /> },
// // // //     { path: "/dashboard/dashboard-add-users", label: "Add Users", icon: <UserPlus className="sidebar-icon" /> },
// // // //   ];

// // // //   /** 🔹 Choose link set by role */
// // // //   const links = 
// // // //     role === "client" ? clientLinks :
// // // //     role === "nurse" ? nurseLinks :
// // // //     role === "doctor" ? doctorLinks :
// // // //     adminLinks;

// // // //   return (
// // // //     <div className="dashboard-container">
// // // //       {/* 🔹 Top bar */}
// // // //       <div className="topbar">
// // // //         <div className="profile-section">
// // // //           <span className="profile-name">{name}</span>
// // // //           <span className="profile-role">({role})</span>
// // // //         </div>
// // // //         <button className="logout-btn" onClick={handleLogout}>
// // // //           <Power className="logout-icon" />
// // // //           Logout
// // // //         </button>
// // // //       </div>

// // // //       {/* 🔹 Layout main body */}
// // // //       <div className="dashboard-main">
// // // //         {/* Sidebar */}
// // // //         <div className="sidebar">
// // // //           <ul className="sidebar-links">
// // // //             {links.map((link) => (
// // // //               <li key={link.path}>
// // // //                 <NavLink 
// // // //                   to={link.path} 
// // // //                   className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
// // // //                 >
// // // //                   {link.icon}
// // // //                   <span>{link.label}</span>
// // // //                 </NavLink>
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>

// // // //         {/* Main Content */}
// // // //         <div className="dashboard-content">
// // // //           {children}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default DashboardLayout;

// // // // import React from "react";
// // // // import { NavLink, useNavigate } from "react-router-dom";
// // // // import { 
// // // //   Power, 
// // // //   LayoutDashboard, 
// // // //   FileText, 
// // // //   Calendar, 
// // // //   HelpCircle, 
// // // //   Users, 
// // // //   BarChart,
// // // //   UserPlus 
// // // // } from "lucide-react";
// // // // import "./DashboardLayout.css";

// // // // function DashboardLayout({ children }) {
// // // //   const navigate = useNavigate();
// // // //   const name = localStorage.getItem("name") || "User";
// // // //   const role = localStorage.getItem("role") || "Guest";
// // // //   console.log("DashboardLayout: Rendering with role =", role);

// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem("token");
// // // //     localStorage.removeItem("role");
// // // //     localStorage.removeItem("name");
// // // //     localStorage.removeItem("sessionActive");
// // // //     navigate("/", { replace: true });
// // // //   };

// // // //   /** 🔹 Sidebar link sets per role */
// // // //   const nurseLinks = [
// // // //     { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // //     { path: "/dashboard/add-labourdata", label: "Add Labour Data", icon: <UserPlus className="sidebar-icon" /> },
// // // //   ];

// // // //   const doctorLinks = [
// // // //     { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // //     { path: "/dashboard/pre-employment", label: "Pre-Employment", icon: <FileText className="sidebar-icon" /> },
// // // //     { path: "/dashboard/review-labourdata", label: "Review Labour Data", icon: <FileText className="sidebar-icon" /> }
// // // //   ];

// // // //   const clientLinks = [
// // // //     { path: "/client-dashboard/client-dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // //     { path: "/client-dashboard/client-dashboard-records", label: "Health Records", icon: <FileText className="sidebar-icon" /> },
// // // //     { path: "/client-dashboard/client-dashboard-appointments", label: "Appointments", icon: <Calendar className="sidebar-icon" /> },
// // // //     { path: "/client-dashboard/client-dashboard-support", label: "Support", icon: <HelpCircle className="sidebar-icon" /> },
// // // //   ];

// // // //   const adminLinks = [
// // // //     { path: "/dashboard/dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // // //     { path: "/dashboard/dashboard-users", label: "Manage Users", icon: <Users className="sidebar-icon" /> },
// // // //     { path: "/dashboard/dashboard-reports", label: "Reports", icon: <BarChart className="sidebar-icon" /> },
// // // //     { path: "/dashboard/dashboard-add-users", label: "Add Users", icon: <UserPlus className="sidebar-icon" /> },
// // // //   ];

// // // //   /** 🔹 Choose link set by role */
// // // //   const links = 
// // // //     role === "client" ? clientLinks :
// // // //     role === "nurse" ? nurseLinks :
// // // //     role === "doctor" ? doctorLinks :
// // // //     adminLinks;

// // // //   return (
// // // //     <div className="dashboard-container">
// // // //       {/* 🔹 Top bar */}
// // // //       <div className="topbar">
// // // //         <div className="profile-section">
// // // //           <span className="profile-name">{name}</span>
// // // //           <span className="profile-role">({role})</span>
// // // //         </div>
// // // //         <button className="logout-btn" onClick={handleLogout}>
// // // //           <Power className="logout-icon" />
// // // //           Logout
// // // //         </button>
// // // //       </div>

// // // //       {/* 🔹 Layout main body */}
// // // //       <div className="dashboard-main">
// // // //         {/* Sidebar */}
// // // //         <div className="sidebar">
// // // //           <ul className="sidebar-links">
// // // //             {links.map((link) => (
// // // //               <li key={link.path}>
// // // //                 <NavLink 
// // // //                   to={link.path} 
// // // //                   className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
// // // //                 >
// // // //                   {link.icon}
// // // //                   <span>{link.label}</span>
// // // //                 </NavLink>
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>

// // // //         {/* Main Content */}
// // // //         <div className="dashboard-content">
// // // //           {children}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default DashboardLayout;


// // // import React from "react";
// // // import { NavLink, useNavigate } from "react-router-dom";
// // // import { 
// // //   Power, 
// // //   LayoutDashboard, 
// // //   FileText, 
// // //   Calendar, 
// // //   HelpCircle, 
// // //   Users, 
// // //   BarChart,
// // //   UserPlus 
// // // } from "lucide-react";
// // // import "./DashboardLayout.css";

// // // function DashboardLayout({ children }) {
// // //   const navigate = useNavigate();
// // //   const name = localStorage.getItem("name") || "User";
// // //   const role = localStorage.getItem("role") || "Guest";
// // //   console.log("DashboardLayout: Rendering with role =", role);

// // //   const handleLogout = () => {
// // //     localStorage.removeItem("token");
// // //     localStorage.removeItem("role");
// // //     localStorage.removeItem("name");
// // //     localStorage.removeItem("sessionActive");
// // //     navigate("/", { replace: true });
// // //   };

// // //   /** 🔹 Sidebar link sets per role */
// // //   const nurseLinks = [
// // //     { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
// // //     { path: "/dashboard/add-labourdata", label: "Add Labour Data", icon: <UserPlus className="sidebar-icon" /> },
// // //   ];

// // //   const doctorLinks = [
// // //     { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
// // //     { path: "/dashboard/pre-employment", label: "Pre-Employment", icon: <FileText className="sidebar-icon" /> },
// // //     // { path: "/dashboard/review-labourdata", label: "Review Labour Data", icon: <FileText className="sidebar-icon" /> },
// // //     { path: "/dashboard/add-labourdata", label: "Add Labour Data", icon: <UserPlus className="sidebar-icon" /> },
// // //   ];

// // //   const clientLinks = [
// // //     { path: "/client-dashboard/client-dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // //     { path: "/client-dashboard/client-dashboard-records", label: "Health Records", icon: <FileText className="sidebar-icon" /> },
// // //     { path: "/client-dashboard/client-dashboard-appointments", label: "Appointments", icon: <Calendar className="sidebar-icon" /> },
// // //     { path: "/client-dashboard/client-dashboard-support", label: "Support", icon: <HelpCircle className="sidebar-icon" /> },
// // //   ];

// // //   const adminLinks = [
// // //     { path: "/dashboard/dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // //     { path: "/dashboard/dashboard-users", label: "Manage Users", icon: <Users className="sidebar-icon" /> },
// // //     { path: "/dashboard/dashboard-reports", label: "Reports", icon: <BarChart className="sidebar-icon" /> },
// // //     { path: "/dashboard/dashboard-add-users", label: "Add Users", icon: <UserPlus className="sidebar-icon" /> },
// // //   ];

// // //   /** 🔹 Choose link set by role */
// // //   const links = 
// // //     role === "client" ? clientLinks :
// // //     role === "nurse" ? nurseLinks :
// // //     role === "doctor" ? doctorLinks :
// // //     adminLinks;

// // //   return (
// // //     <div className="dashboard-container">
// // //       {/* 🔹 Top bar */}
// // //       <div className="topbar">
// // //         <div className="profile-section">
// // //           <span className="profile-name">{name}</span>
// // //           <span className="profile-role">({role})</span>
// // //         </div>
// // //         <button className="logout-btn" onClick={handleLogout}>
// // //           <Power className="logout-icon" />
// // //           Logout
// // //         </button>
// // //       </div>

// // //       {/* 🔹 Layout main body */}
// // //       <div className="dashboard-main">
// // //         {/* Sidebar */}
// // //         <div className="sidebar">
// // //           <ul className="sidebar-links">
// // //             {links.map((link) => (
// // //               <li key={link.path}>
// // //                 <NavLink 
// // //                   to={link.path} 
// // //                   className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
// // //                 >
// // //                   {link.icon}
// // //                   <span>{link.label}</span>
// // //                 </NavLink>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </div>

// // //         {/* Main Content */}
// // //         <div className="dashboard-content">
// // //           {children}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default DashboardLayout;


// // // import React, { useState } from "react";
// // // import { NavLink, useNavigate } from "react-router-dom";
// // // import { 
// // //   Power, 
// // //   LayoutDashboard, 
// // //   FileText, 
// // //   Calendar, 
// // //   HelpCircle, 
// // //   Users, 
// // //   BarChart, 
// // //   UserPlus, 
// // //   Menu, 
// // //   X 
// // // } from "lucide-react";
// // // import "./DashboardLayout.css";

// // // function DashboardLayout({ children }) {
// // //   const navigate = useNavigate();
// // //   const name = localStorage.getItem("name") || "User";
// // //   const role = localStorage.getItem("role") || "Guest";
// // //   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// // //   console.log("DashboardLayout: Rendering with role =", role);

// // //   const handleLogout = () => {
// // //     localStorage.removeItem("token");
// // //     localStorage.removeItem("role");
// // //     localStorage.removeItem("name");
// // //     localStorage.removeItem("sessionActive");
// // //     navigate("/", { replace: true });
// // //   };

// // //   const toggleSidebar = () => {
// // //     setIsSidebarOpen(!isSidebarOpen);
// // //   };

// // //   // Sidebar link sets per role
// // //   const nurseLinks = [
// // //     { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
// // //     { path: "/dashboard/add-labourdata", label: "Add Labour Data", icon: <UserPlus className="sidebar-icon" /> },
// // //   ];

// // //   const doctorLinks = [
// // //     { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
// // //     { path: "/dashboard/pre-employment", label: "Pre-Employment", icon: <FileText className="sidebar-icon" /> },
// // //     { path: "/dashboard/add-labourdata", label: "Add Labour Data", icon: <UserPlus className="sidebar-icon" /> },
// // //   ];

// // //   const clientLinks = [
// // //     { path: "/client-dashboard/client-dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // //     { path: "/client-dashboard/client-dashboard-records", label: "Health Records", icon: <FileText className="sidebar-icon" /> },
// // //     { path: "/client-dashboard/client-dashboard-appointments", label: "Appointments", icon: <Calendar className="sidebar-icon" /> },
// // //     { path: "/client-dashboard/client-dashboard-support", label: "Support", icon: <HelpCircle className="sidebar-icon" /> },
// // //   ];

// // //   const adminLinks = [
// // //     { path: "/dashboard/dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// // //     { path: "/dashboard/dashboard-users", label: "Manage Users", icon: <Users className="sidebar-icon" /> },
// // //     { path: "/dashboard/dashboard-reports", label: "Reports", icon: <BarChart className="sidebar-icon" /> },
// // //     { path: "/dashboard/dashboard-add-users", label: "Add Users", icon: <UserPlus className="sidebar-icon" /> },
// // //   ];

// // //   // Choose link set by role
// // //   const links = 
// // //     role === "client" ? clientLinks :
// // //     role === "nurse" ? nurseLinks :
// // //     role === "doctor" ? doctorLinks :
// // //     adminLinks;

// // //   return (
// // //     <div className="dashboard-container">
// // //       {/* Topbar */}
// // //       <div className="topbar">
// // //         <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
// // //           {isSidebarOpen ? <X className="sidebar-toggle-icon" /> : <Menu className="sidebar-toggle-icon" />}
// // //         </button>
// // //         <div className="profile-section">
// // //           <span className="profile-name">{name}</span>
// // //           <span className="profile-role">({role})</span>
// // //         </div>
// // //         <button className="logout-btn" onClick={handleLogout}>
// // //           <Power className="logout-icon" />
// // //           Logout
// // //         </button>
// // //       </div>

// // //       {/* Layout main body */}
// // //       <div className="dashboard-main">
// // //         {/* Sidebar */}
// // //         <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
// // //           <ul className="sidebar-links">
// // //             {links.map((link) => (
// // //               <li key={link.path}>
// // //                 <NavLink 
// // //                   to={link.path} 
// // //                   className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
// // //                   onClick={() => setIsSidebarOpen(false)}
// // //                 >
// // //                   {link.icon}
// // //                   <span>{link.label}</span>
// // //                 </NavLink>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </div>

// // //         {/* Main Content */}
// // //         <div className="dashboard-content">
// // //           {children}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default DashboardLayout;

// // import React from "react";
// // import { NavLink, useNavigate } from "react-router-dom";
// // import { 
// //   Power, 
// //   LayoutDashboard, 
// //   FileText, 
// //   Calendar, 
// //   HelpCircle, 
// //   Users, 
// //   BarChart,
// //   UserPlus,
// //   FileSpreadsheet // New icon for All Labour Data
// // } from "lucide-react";
// // import "./DashboardLayout.css";

// // function DashboardLayout({ children }) {
// //   const navigate = useNavigate();
// //   const name = localStorage.getItem("name") || "User";
// //   const role = localStorage.getItem("role") || "Guest";
// //   console.log("DashboardLayout: Rendering with role =", role);

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("role");
// //     localStorage.removeItem("name");
// //     localStorage.removeItem("sessionActive");
// //     navigate("/", { replace: true });
// //   };

// //   /** 🔹 Sidebar link sets per role */
// //   const nurseLinks = [
// //     { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
// //     { path: "/dashboard/add-labourdata", label: "Add Labour Data", icon: <UserPlus className="sidebar-icon" /> },
// //     { path: "/dashboard/all-labour-data", label: "All Labour Data", icon: <FileSpreadsheet className="sidebar-icon" /> }, // New menu item
// //   ];

// //   const doctorLinks = [
// //     { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
// //     { path: "/dashboard/pre-employment", label: "Pre-Employment", icon: <FileText className="sidebar-icon" /> },
// //     { path: "/dashboard/add-labourdata", label: "Add Labour Data", icon: <UserPlus className="sidebar-icon" /> },
// //     { path: "/dashboard/all-labour-data", label: "All Labour Data", icon: <FileSpreadsheet className="sidebar-icon" /> }, // New menu item
// //   ];

// //   const clientLinks = [
// //     { path: "/client-dashboard/client-dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// //     { path: "/client-dashboard/client-dashboard-records", label: "Health Records", icon: <FileText className="sidebar-icon" /> },
// //     { path: "/client-dashboard/client-dashboard-appointments", label: "Appointments", icon: <Calendar className="sidebar-icon" /> },
// //     { path: "/client-dashboard/client-dashboard-support", label: "Support", icon: <HelpCircle className="sidebar-icon" /> },
// //   ];

// //   const adminLinks = [
// //     { path: "/dashboard/dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
// //     { path: "/dashboard/dashboard-users", label: "Manage Users", icon: <Users className="sidebar-icon" /> },
// //     { path: "/dashboard/dashboard-reports", label: "Reports", icon: <BarChart className="sidebar-icon" /> },
// //     { path: "/dashboard/dashboard-add-users", label: "Add Users", icon: <UserPlus className="sidebar-icon" /> },
// //   ];

// //   /** 🔹 Choose link set by role */
// //   const links = 
// //     role === "client" ? clientLinks :
// //     role === "nurse" ? nurseLinks :
// //     role === "doctor" ? doctorLinks :
// //     adminLinks;

// //   return (
// //     <div className="dashboard-container">
// //       {/* 🔹 Top bar */}
// //       <div className="topbar">
// //         <div className="profile-section">
// //           <span className="profile-name">{name}</span>
// //           <span className="profile-role">({role})</span>
// //         </div>
// //         <button className="logout-btn" onClick={handleLogout}>
// //           <Power className="logout-icon" />
// //           Logout
// //         </button>
// //       </div>

// //       {/* 🔹 Layout main body */}
// //       <div className="dashboard-main">
// //         {/* Sidebar */}
// //         <div className="sidebar">
// //           <ul className="sidebar-links">
// //             {links.map((link) => (
// //               <li key={link.path}>
// //                 <NavLink 
// //                   to={link.path} 
// //                   className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
// //                 >
// //                   {link.icon}
// //                   <span>{link.label}</span>
// //                 </NavLink>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Main Content */}
// //         <div className="dashboard-content">
// //           {children}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default DashboardLayout;

// import React from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { 
//   Power, 
//   LayoutDashboard, 
//   FileText, 
//   Calendar, 
//   HelpCircle, 
//   Users, 
//   BarChart,
//   UserPlus,
//   FileSpreadsheet // New icon for All Labour Data
// } from "lucide-react";
// import "./DashboardLayout.css";

// function DashboardLayout({ children }) {
//   const navigate = useNavigate();
//   const name = localStorage.getItem("name") || "User";
//   const role = localStorage.getItem("role") || "Guest";
//   console.log("DashboardLayout: Rendering with role =", role);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     localStorage.removeItem("name");
//     localStorage.removeItem("sessionActive");
//     navigate("/", { replace: true });
//   };

//   /** 🔹 Sidebar link sets per role */
//   const nurseLinks = [
//     { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
//     { path: "/dashboard/add-labourdata", label: "Add Labour Data", icon: <UserPlus className="sidebar-icon" /> },
//     { path: "/dashboard/all-labour-data", label: "All Labour Data", icon: <FileSpreadsheet className="sidebar-icon" /> }, // New menu item
//   ];

//   const doctorLinks = [
//     { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
//     { path: "/dashboard/pre-employment", label: "Pre-Employment", icon: <FileText className="sidebar-icon" /> },
//     { path: "/dashboard/add-labourdata", label: "Add Labour Data", icon: <UserPlus className="sidebar-icon" /> },
//     { path: "/dashboard/all-labour-data", label: "All Labour Data", icon: <FileSpreadsheet className="sidebar-icon" /> }, // New menu item
//   ];

//   const clientLinks = [
//     { path: "/client-dashboard/client-dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
//     { path: "/client-dashboard/client-dashboard-records", label: "Health Records", icon: <FileText className="sidebar-icon" /> },
//     { path: "/client-dashboard/client-dashboard-appointments", label: "Appointments", icon: <Calendar className="sidebar-icon" /> },
//     { path: "/client-dashboard/client-dashboard-support", label: "Support", icon: <HelpCircle className="sidebar-icon" /> },
//   ];

//   const adminLinks = [
//     { path: "/dashboard/dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
//     { path: "/dashboard/dashboard-users", label: "Manage Users", icon: <Users className="sidebar-icon" /> },
//     { path: "/dashboard/dashboard-reports", label: "Reports", icon: <BarChart className="sidebar-icon" /> },
//     { path: "/dashboard/dashboard-add-users", label: "Add Users", icon: <UserPlus className="sidebar-icon" /> },
//   ];

//   /** 🔹 Choose link set by role */
//   const links = 
//     role === "client" ? clientLinks :
//     role === "nurse" ? nurseLinks :
//     role === "doctor" ? doctorLinks :
//     adminLinks;

//   return (
//     <div className="dashboard-container">
//       {/* 🔹 Top bar */}
//       <div className="topbar">
//         <div className="profile-section">
//           <span className="profile-name">{name}</span>
//           <span className="profile-role">({role})</span>
//         </div>
//         <button className="logout-btn" onClick={handleLogout}>
//           <Power className="logout-icon" />
//           Logout
//         </button>
//       </div>

//       {/* 🔹 Layout main body */}
//       <div className="dashboard-main">
//         {/* Sidebar */}
//         <div className="sidebar">
//           <ul className="sidebar-links">
//             {links.map((link) => (
//               <li key={link.path}>
//                 <NavLink 
//                   to={link.path} 
//                   className={({ isActive }) => `sidebar-link ${isActive ? "active" : ""}`}
//                 >
//                   {link.icon}
//                   <span>{link.label}</span>
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="dashboard-content">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardLayout;

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
    { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
    { path: "/dashboard/add-labourdata", label: "Add Labour Data", icon: <UserPlus className="sidebar-icon" /> },
    { path: "/dashboard/all-labour-data", label: "All Labour Data", icon: <FileSpreadsheet className="sidebar-icon" /> },
  ];

  const doctorLinks = [
    { path: "/dashboard/medpanel", label: "MedPanel", icon: <LayoutDashboard className="sidebar-icon" /> },
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
    { path: "/dashboard/dashboard-overview", label: "Overview", icon: <LayoutDashboard className="sidebar-icon" /> },
    { path: "/dashboard/dashboard-users", label: "Manage Users", icon: <Users className="sidebar-icon" /> },
    { path: "/dashboard/dashboard-reports", label: "Reports", icon: <BarChart className="sidebar-icon" /> },
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