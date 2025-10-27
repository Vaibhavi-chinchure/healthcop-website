// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import "./Dashboard.css";

// // // // // // function Dashboard() {
// // // // // //   const [role, setRole] = useState("");
// // // // // //   const navigate = useNavigate();

// // // // // //   useEffect(() => {
// // // // // //     // Check if user is authenticated
// // // // // //     const token = localStorage.getItem("token");
// // // // // //     const userRole = localStorage.getItem("role");
// // // // // //     if (!token || !userRole) {
// // // // // //       // Redirect to login if no token or role
// // // // // //       navigate("/login");
// // // // // //     } else {
// // // // // //       setRole(userRole);
// // // // // //     }
// // // // // //   }, [navigate]);

// // // // // //   const handleLogout = () => {
// // // // // //     // Clear localStorage and redirect to login
// // // // // //     localStorage.removeItem("token");
// // // // // //     localStorage.removeItem("role");
// // // // // //     navigate("/login");
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="dashboard-container">
// // // // // //       <div className="dashboard-card">
// // // // // //         <h2>Welcome to the HealthCop Dashboard</h2>
// // // // // //         <p className="role-text">You are logged in as: <strong>{role || "Guest"}</strong></p>
// // // // // //         <div className="dashboard-content">
// // // // // //           <h3>Dashboard Overview</h3>
// // // // // //           <p>This is your {role} dashboard. Here you can view your account details and manage your activities.</p>
// // // // // //           {role === "client" && (
// // // // // //             <div className="client-section">
// // // // // //               <h4>Client Features</h4>
// // // // // //               <ul>
// // // // // //                 <li>View your health records</li>
// // // // // //                 <li>Schedule appointments</li>
// // // // // //                 <li>Access support</li>
// // // // // //               </ul>
// // // // // //             </div>
// // // // // //           )}
// // // // // //           <button className="logout-btn" onClick={handleLogout}>
// // // // // //             Logout
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default Dashboard;


// // // // // import React, { useEffect } from "react";
// // // // // import { useNavigate, Routes, Route } from "react-router-dom";
// // // // // import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
// // // // // import ClientDashboardOverview from "../../components/DashboardLayout/DashboardLayout";
// // // // // import ClientDashboardRecords from "../../components/ClientDashboardOverview/ClientDashboardOverview";
// // // // // import DashboardOverview from "../../components/DashboardOverview/DashboardOverview";

// // // // // function Dashboard() {
// // // // //   const navigate = useNavigate();
// // // // //   const role = localStorage.getItem("role");

// // // // //   useEffect(() => {
// // // // //     const token = localStorage.getItem("token");
// // // // //     if (!token || !role) {
// // // // //       navigate("/login", { replace: true });
// // // // //     } else {
// // // // //       if (role === "client" && window.location.pathname === "/client-dashboard") {
// // // // //         navigate("/client-dashboard-overview", { replace: true });
// // // // //       } else if (role !== "client" && window.location.pathname === "/dashboard") {
// // // // //         navigate("/dashboard-overview", { replace: true });
// // // // //       }
// // // // //     }
// // // // //   }, [navigate, role]);

// // // // //   return (
// // // // //     <DashboardLayout>
// // // // //       <Routes>
// // // // //         <Route path="/client-dashboard-overview" element={<ClientDashboardOverview />} />
// // // // //         <Route path="/client-dashboard-records" element={<ClientDashboardRecords />} />
// // // // //         <Route path="/client-dashboard-appointments" element={<div>Appointments Page (Placeholder)</div>} />
// // // // //         <Route path="/client-dashboard-support" element={<div>Support Page (Placeholder)</div>} />
// // // // //         <Route path="/dashboard-overview" element={<DashboardOverview />} />
// // // // //         <Route path="/dashboard-users" element={<div>Manage Users Page (Placeholder)</div>} />
// // // // //         <Route path="/dashboard-reports" element={<div>Reports Page (Placeholder)</div>} />
// // // // //       </Routes>
// // // // //     </DashboardLayout>
// // // // //   );
// // // // // }

// // // // // export default Dashboard;

// // // // import React, { useEffect } from "react";
// // // // import { useNavigate, Routes, Route } from "react-router-dom";
// // // // import DashboardLayout from "./../DashboardLayout/DashboardLayout";
// // // // import ClientDashboardOverview from "./../ClientDashboardOverview/ClientDashboardOverview";
// // // // import ClientDashboardRecords from "./../ClientDashboardRecords/ClientDashboardRecords.";
// // // // import DashboardOverview from "./../DashboardOverview/DashboardOverview";

// // // // function Dashboard() {
// // // //   const navigate = useNavigate();
// // // //   const role = localStorage.getItem("role");

// // // //   useEffect(() => {
// // // //     const token = localStorage.getItem("token");
// // // //     if (!token || !role) {
// // // //       navigate("/login", { replace: true });
// // // //     } else {
// // // //       if (role === "client" && window.location.pathname === "/client-dashboard") {
// // // //         navigate("/client-dashboard-overview", { replace: true });
// // // //       } else if (role !== "client" && window.location.pathname === "/dashboard") {
// // // //         navigate("/dashboard-overview", { replace: true });
// // // //       }
// // // //     }
// // // //   }, [navigate, role]);

// // // //   return (
// // // //     <DashboardLayout>
// // // //       <Routes>
// // // //         <Route path="/client-dashboard-overview" element={<ClientDashboardOverview />} />
// // // //         <Route path="/client-dashboard-records" element={<ClientDashboardRecords />} />
// // // //         <Route path="/client-dashboard-appointments" element={<div>Appointments Page (Placeholder)</div>} />
// // // //         <Route path="/client-dashboard-support" element={<div>Support Page (Placeholder)</div>} />
// // // //         <Route path="/dashboard-overview" element={<DashboardOverview />} />
// // // //         <Route path="/dashboard-users" element={<div>Manage Users Page (Placeholder)</div>} />
// // // //         <Route path="/dashboard-reports" element={<div>Reports Page (Placeholder)</div>} />
// // // //       </Routes>
// // // //     </DashboardLayout>
// // // //   );
// // // // }

// // // // export default Dashboard;

// // // import React, { useEffect } from "react";
// // // import { useNavigate, Routes, Route } from "react-router-dom";
// // // import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
// // // import ClientDashboardOverview from "../../components/ClientDashboardOverview/ClientDashboardOverview";
// // // import ClientDashboardRecords from "../../components/ClientDashboardRecords/ClientDashboardRecords";
// // // import DashboardOverview from "../../components/DashboardOverview/DashboardOverview";

// // // function Dashboard() {
// // //   const navigate = useNavigate();
// // //   const role = localStorage.getItem("role");

// // //   useEffect(() => {
// // //     const token = localStorage.getItem("token");
// // //     if (!token || !role) {
// // //       navigate("/login", { replace: true });
// // //     } else {
// // //       if (role === "client" && window.location.pathname === "/client-dashboard") {
// // //         navigate("/client-dashboard-overview", { replace: true });
// // //       } else if (role !== "client" && window.location.pathname === "/dashboard") {
// // //         navigate("/dashboard-overview", { replace: true });
// // //       }
// // //     }
// // //   }, [navigate, role]);

// // //   return (
// // //     <DashboardLayout>
// // //       <Routes>
// // //         <Route path="/client-dashboard-overview" element={<ClientDashboardOverview />} />
// // //         <Route path="/client-dashboard-records" element={<ClientDashboardRecords />} />
// // //         <Route path="/client-dashboard-appointments" element={<div>Appointments Page (Placeholder)</div>} />
// // //         <Route path="/client-dashboard-support" element={<div>Support Page (Placeholder)</div>} />
// // //         <Route path="/dashboard-overview" element={<DashboardOverview />} />
// // //         <Route path="/dashboard-users" element={<div>Manage Users Page (Placeholder)</div>} />
// // //         <Route path="/dashboard-reports" element={<div>Reports Page (Placeholder)</div>} />
// // //       </Routes>
// // //     </DashboardLayout>
// // //   );
// // // }

// // // export default Dashboard;


// // import React, { useEffect } from "react";
// // import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
// // import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
// // import ClientDashboardOverview from "../../components/ClientDashboardOverview/ClientDashboardOverview";
// // import ClientDashboardRecords from "../../components/ClientDashboardRecords/ClientDashboardRecords";
// // import DashboardOverview from "../../components/DashboardOverview/DashboardOverview";
// // import AdminManagement from "../../components/AdminManagement/AdminManagement";
// // import NursePreEmployment from "../../components/nursePreEmployment/nursePreEmployment";

// // function Dashboard() {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const role = localStorage.getItem("role");
// //   console.log("Dashboard.js: Current path =", location.pathname, "role =", role);

// //   useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     if (!token || !role) {
// //       navigate("/login", { replace: true });
// //     } else {
// //       if (role === "client" && location.pathname === "/client-dashboard") {
// //         navigate("/client-dashboard-overview", { replace: true });
// //       } else if (role !== "client" && location.pathname === "/dashboard") {
// //         navigate("/dashboard-overview", { replace: true });
// //       }
// //     }
// //   }, [navigate, role, location.pathname]);

// //   return (
// //     <DashboardLayout>
// //       <Routes>
// //   {/* client dashboard */}
// //   <Route path="client-dashboard-overview" element={<ClientDashboardOverview />} />
// //   <Route path="client-dashboard-records" element={<ClientDashboardRecords />} />
// //   <Route path="client-dashboard-appointments" element={<div>Appointments Page (Placeholder)</div>} />
// //   <Route path="client-dashboard-support" element={<div>Support Page (Placeholder)</div>} />

// //   {/* admin dashboard */}
// //   <Route path="dashboard-overview" element={<DashboardOverview />} />
// //   <Route path="dashboard-users" element={<div>Manage Users Page (Placeholder)</div>} />
// //   <Route path="dashboard-reports" element={<div>Reports Page (Placeholder)</div>} />
// //   <Route path="dashboard-add-users" element={<AdminManagement />} />


// // {/* nurse dashboard */}
// // <Route path="pre-employment" element={<NursePreEmployment />} />

// // </Routes>

// //     </DashboardLayout>
// //   );
// // }

// // export default Dashboard;

// // import React, { useEffect } from "react";
// // import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
// // import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
// // import ClientDashboardOverview from "../../components/ClientDashboardOverview/ClientDashboardOverview";
// // import ClientDashboardRecords from "../../components/ClientDashboardRecords/ClientDashboardRecords";
// // import DashboardOverview from "../../components/DashboardOverview/DashboardOverview";
// // import AdminManagement from "../../components/AdminManagement/AdminManagement";
// // import NursePreEmployment from "../../components/nursePreEmployment/nursePreEmployment";

// // function Dashboard() {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const role = localStorage.getItem("role");
// //   const token = localStorage.getItem("token");

// //   useEffect(() => {
// //     // Redirect to login if no token or role
// //     if (!token || !role) {
// //       navigate("/login", { replace: true });
// //       return;
// //     }

// //     // Redirect to role-specific default route if at base path
// //     if (location.pathname === "/dashboard" || location.pathname === "/Dashboard") {
// //       if (role === "client") {
// //         navigate("/client-dashboard/client-dashboard-overview", { replace: true });
// //       } else if (role === "admin") {
// //         navigate("/dashboard/dashboard-add-users", { replace: true });
// //       } else if (role === "nurse" || role === "doctor") {
// //         navigate("/dashboard/pre-employment", { replace: true });
// //       }
// //     }
// //   }, [navigate, role, token, location.pathname]);

// //   return (
// //     <DashboardLayout>
// //       <Routes>
// //         {/* Client Dashboard */}
// //         <Route path="client-dashboard/client-dashboard-overview" element={<ClientDashboardOverview />} />
// //         <Route path="client-dashboard/client-dashboard-records" element={<ClientDashboardRecords />} />
// //         <Route path="client-dashboard/client-dashboard-appointments" element={<div>Appointments Page (Placeholder)</div>} />
// //         <Route path="client-dashboard/client-dashboard-support" element={<div>Support Page (Placeholder)</div>} />

// //         {/* Admin Dashboard */}
// //         <Route path="dashboard-overview" element={<DashboardOverview />} />
// //         <Route path="dashboard-users" element={<div>Manage Users Page (Placeholder)</div>} />
// //         <Route path="dashboard-reports" element={<div>Reports Page (Placeholder)</div>} />
// //         <Route path="dashboard-add-users" element={<AdminManagement />} />

// //         {/* Nurse / Doctor Dashboard */}
// //         <Route path="pre-employment" element={<NursePreEmployment />} />
// //       </Routes>
// //     </DashboardLayout>
// //   );
// // }

// // export default Dashboard;

// // import React, { useEffect } from "react";
// // import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
// // import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
// // import ClientDashboardOverview from "../../components/ClientDashboardOverview/ClientDashboardOverview";
// // import ClientDashboardRecords from "../../components/ClientDashboardRecords/ClientDashboardRecords";
// // import DashboardOverview from "../../components/DashboardOverview/DashboardOverview";
// // import AdminManagement from "../../components/AdminManagement/AdminManagement";
// // import PreEmployment from "../../components/PreEmployment/PreEmployment";
// // import MedPanel from "../../components/MedPanel/MedPanel";
// // function Dashboard() {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const role = localStorage.getItem("role");
// //   const token = localStorage.getItem("token");

// //   useEffect(() => {
// //     // Redirect to login if no token or role
// //     if (!token || !role) {
// //       navigate("/login", { replace: true });
// //       return;
// //     }

// //     // Redirect to role-specific default route if at base path
// //     if (location.pathname === "/dashboard" || location.pathname === "/Dashboard") {
// //       if (role === "client") {
// //         navigate("/client-dashboard/client-dashboard-overview", { replace: true });
// //       } else if (role === "admin") {
// //         navigate("/dashboard/dashboard-add-users", { replace: true });
// //       } else if (role === "nurse" || role === "doctor") {
// //         navigate("/dashboard/pre-employment", { replace: true });
// //       }
// //     }
// //   }, [navigate, role, token, location.pathname]);

// //   return (
// //     <DashboardLayout>
// //       <Routes>
// //         {/* Client Dashboard */}
// //         <Route path="client-dashboard/client-dashboard-overview" element={<ClientDashboardOverview />} />
// //         <Route path="client-dashboard/client-dashboard-records" element={<ClientDashboardRecords />} />
// //         <Route path="client-dashboard/client-dashboard-appointments" element={<div>Appointments Page (Placeholder)</div>} />
// //         <Route path="client-dashboard/client-dashboard-support" element={<div>Support Page (Placeholder)</div>} />

// //         {/* Admin Dashboard */}
// //         <Route path="dashboard-overview" element={<DashboardOverview />} />
// //         <Route path="dashboard-users" element={<div>Manage Users Page (Placeholder)</div>} />
// //         <Route path="dashboard-reports" element={<div>Reports Page (Placeholder)</div>} />
// //         <Route path="dashboard-add-users" element={<AdminManagement />} />

// //         {/* Nurse / Doctor Dashboard */}
// //         <Route path="pre-employment" element={<PreEmployment />} />
// //                 <Route path="medpanel" element={<MedPanel />} />

// //       </Routes>
// //     </DashboardLayout>
// //   );
// // }

// // export default Dashboard;

// import React, { useEffect } from "react";
// import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
// import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
// import ClientDashboardOverview from "../../components/ClientDashboardOverview/ClientDashboardOverview";
// import ClientDashboardRecords from "../../components/ClientDashboardRecords/ClientDashboardRecords";
// import DashboardOverview from "../../components/DashboardOverview/DashboardOverview";
// import AdminManagement from "../../components/AdminManagement/AdminManagement";
// import PreEmployment from "../../components/PreEmployment/PreEmployment";
// import MedPanel from "../../components/MedPanel/MedPanel";
// import NursePreEmployement from "../../components/nursePreEmployment/nursePreEmployment";

// function Dashboard() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const role = localStorage.getItem("role");
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     // Redirect to login if no token or role
//     if (!token || !role) {
//       navigate("/login", { replace: true });
//       return;
//     }

//     // Redirect to role-specific default route if at base path
//     if (location.pathname === "/dashboard" || location.pathname === "/Dashboard") {
//       if (role === "client") {
//         navigate("/client-dashboard/client-dashboard-overview", { replace: true });
//       } else if (role === "admin") {
//         navigate("/dashboard/dashboard-add-users", { replace: true });
//       } else if (role === "nurse" || role === "doctor") {
//         navigate("/dashboard/pre-employment", { replace: true });
//       }
//     }
//   }, [navigate, role, token, location.pathname]);

//   return (
//     <DashboardLayout>
//       <Routes>
//         {/* Client Dashboard */}
//         <Route path="client-dashboard/client-dashboard-overview" element={<ClientDashboardOverview />} />
//         <Route path="client-dashboard/client-dashboard-records" element={<ClientDashboardRecords />} />
//         <Route path="client-dashboard/client-dashboard-appointments" element={<div>Appointments Page (Placeholder)</div>} />
//         <Route path="client-dashboard/client-dashboard-support" element={<div>Support Page (Placeholder)</div>} />

//         {/* Admin Dashboard */}
//         <Route path="dashboard-overview" element={<DashboardOverview />} />
//         <Route path="dashboard-users" element={<div>Manage Users Page (Placeholder)</div>} />
//         <Route path="dashboard-reports" element={<div>Reports Page (Placeholder)</div>} />
//         <Route path="dashboard-add-users" element={<AdminManagement />} />

//         {/* Nurse / Doctor Dashboard */}
//         <Route path="pre-employment" element={<PreEmployment />} />
//         <Route path="medpanel" element={<MedPanel />} />
//         <Route path="add-labourdata" element={<NursePreEmployement />} />
//       </Routes>
//     </DashboardLayout>
//   );
// }

// export default Dashboard;


import React, { useEffect } from "react";
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout";
import ClientDashboardOverview from "../../components/ClientDashboardOverview/ClientDashboardOverview";
import ClientDashboardRecords from "../../components/ClientDashboardRecords/ClientDashboardRecords";
import DashboardOverview from "../../components/DashboardOverview/DashboardOverview";
import AdminManagement from "../../components/AdminManagement/AdminManagement";
import PreEmployment from "../../components/PreEmployment/PreEmployment";
import MedPanel from "../../components/MedPanel/MedPanel";
import NursePreEmployement from "../../components/nursePreEmployment/nursePreEmployment";
import ApprovedLaborersExcel from "../../components/Labourexcl/Labourexcel"; // Import the new component

function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Redirect to login if no token or role
    if (!token || !role) {
      navigate("/login", { replace: true });
      return;
    }

    // Redirect to role-specific default route if at base path
    if (location.pathname === "/dashboard" || location.pathname === "/Dashboard") {
      if (role === "client") {
        navigate("/client-dashboard/client-dashboard-overview", { replace: true });
      } else if (role === "admin") {
        navigate("/dashboard/dashboard-add-users", { replace: true });
      } else if (role === "nurse" || role === "doctor") {
        navigate("/dashboard/add-labourdata", { replace: true });
      }
    }
  }, [navigate, role, token, location.pathname]);

  return (
    <DashboardLayout>
      <Routes>
        {/* Client Dashboard */}
        <Route path="client-dashboard/client-dashboard-overview" element={<ClientDashboardOverview />} />
        <Route path="client-dashboard/client-dashboard-records" element={<ClientDashboardRecords />} />
        <Route path="client-dashboard/client-dashboard-appointments" element={<div>Appointments Page (Placeholder)</div>} />
        <Route path="client-dashboard/client-dashboard-support" element={<div>Support Page (Placeholder)</div>} />

        {/* Admin Dashboard */}
        <Route path="dashboard-overview" element={<DashboardOverview />} />
        <Route path="dashboard-users" element={<div>Manage Users Page (Placeholder)</div>} />
        <Route path="dashboard-reports" element={<div>Reports Page (Placeholder)</div>} />
        <Route path="dashboard-add-users" element={<AdminManagement />} />

        {/* Nurse / Doctor Dashboard */}
        <Route path="pre-employment" element={<PreEmployment />} />
        <Route path="medpanel" element={<MedPanel />} />
        <Route path="add-labourdata" element={<NursePreEmployement />} />
        <Route path="all-labour-data" element={<ApprovedLaborersExcel />} /> {/* New route */}
      </Routes>
    </DashboardLayout>
  );
}

export default Dashboard;