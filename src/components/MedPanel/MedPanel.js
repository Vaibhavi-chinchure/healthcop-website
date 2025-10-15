// // // // // import React, { useMemo } from "react";
// // // // // import { Bar } from "react-chartjs-2";
// // // // // import {
// // // // //   Chart as ChartJS,
// // // // //   CategoryScale,
// // // // //   LinearScale,
// // // // //   BarElement,
// // // // //   Title,
// // // // //   Tooltip,
// // // // //   Legend,
// // // // // } from "chart.js";
// // // // // import "./MedPanel.css";

// // // // // ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // // // // export default function MedPanel() {
// // // // //   // Generate dummy records for 30 days
// // // // //   const records = useMemo(() => {
// // // // //     const today = new Date();
// // // // //     const arr = [];
// // // // //     for (let i = 29; i >= 0; i--) {
// // // // //       const d = new Date(today);
// // // // //       d.setDate(today.getDate() - i);
// // // // //       const checkin = new Date(d);
// // // // //       checkin.setHours(9, Math.floor(Math.random() * 20), 0); // random check-in 9:00-9:20
// // // // //       const checkout = new Date(d);
// // // // //       checkout.setHours(17, Math.floor(Math.random() * 20), 0); // random checkout 17:00-17:20
// // // // //       arr.push({
// // // // //         id: i,
// // // // //         date: d.toISOString().slice(0, 10),
// // // // //         checkin: checkin.toISOString(),
// // // // //         checkout: checkout.toISOString(),
// // // // //         lat: 19.076,
// // // // //         lng: 72.8777,
// // // // //       });
// // // // //     }
// // // // //     return arr;
// // // // //   }, []);

// // // // //   // Chart data
// // // // //   const chartData = useMemo(() => {
// // // // //     return {
// // // // //       labels: records.map(r => r.date.slice(5)), // show MM-DD
// // // // //       datasets: [
// // // // //         {
// // // // //           label: "Work Hours",
// // // // //           data: records.map(r => {
// // // // //             const start = new Date(r.checkin);
// // // // //             const end = new Date(r.checkout);
// // // // //             return ((end - start) / 1000 / 3600).toFixed(2);
// // // // //           }),
// // // // //           backgroundColor: "#22c55e",
// // // // //         },
// // // // //       ],
// // // // //     };
// // // // //   }, [records]);

// // // // //   const chartOptions = {
// // // // //     responsive: true,
// // // // //     plugins: { legend: { display: false }, title: { display: true, text: "Work Hours (Last 30 Days)" } },
// // // // //     scales: { y: { beginAtZero: true, max: 10 } },
// // // // //   };

// // // // //   return (
// // // // //     <div className="medpanel-container">
// // // // //       <h2>Check-In / Check-Out - Last 30 Days</h2>

// // // // //       {/* Chart */}
// // // // //       <div className="chart-panel">
// // // // //         <Bar data={chartData} options={chartOptions} />
// // // // //       </div>

// // // // //       {/* Table */}
// // // // //       <div className="table-panel">
// // // // //         <table className="attendance-table">
// // // // //           <thead>
// // // // //             <tr>
// // // // //               <th>Date</th>
// // // // //               <th>Check-In</th>
// // // // //               <th>Check-Out</th>
// // // // //               <th>Status</th>
// // // // //               <th>Location</th>
// // // // //             </tr>
// // // // //           </thead>
// // // // //           <tbody>
// // // // //             {records.map(r => (
// // // // //               <tr key={r.id}>
// // // // //                 <td>{new Date(r.date).toLocaleDateString()}</td>
// // // // //                 <td>{new Date(r.checkin).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</td>
// // // // //                 <td>{new Date(r.checkout).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</td>
// // // // //                 <td>
// // // // //                   <span className="badge done">Completed</span>
// // // // //                 </td>
// // // // //                 <td>{`Lat: ${r.lat.toFixed(3)}, Lng: ${r.lng.toFixed(3)}`}</td>
// // // // //               </tr>
// // // // //             ))}
// // // // //           </tbody>
// // // // //         </table>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // import React, { useState, useMemo } from "react";
// // // // import { Bar } from "react-chartjs-2";
// // // // import {
// // // //   Chart as ChartJS,
// // // //   CategoryScale,
// // // //   LinearScale,
// // // //   BarElement,
// // // //   Title,
// // // //   Tooltip,
// // // //   Legend,
// // // // } from "chart.js";
// // // // import "./MedPanel.css";

// // // // ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // // // export default function MedPanel() {
// // // //   // Generate dummy records for last 30 days
// // // //   const [records, setRecords] = useState(() => {
// // // //     const today = new Date();
// // // //     const arr = [];
// // // //     for (let i = 29; i >= 0; i--) {
// // // //       const d = new Date(today);
// // // //       d.setDate(today.getDate() - i);
// // // //       const checkin = new Date(d);
// // // //       checkin.setHours(9, Math.floor(Math.random() * 20), 0); // random 9:00-9:20
// // // //       const checkout = new Date(d);
// // // //       checkout.setHours(17, Math.floor(Math.random() * 20), 0); // random 17:00-17:20
// // // //       arr.push({
// // // //         id: i,
// // // //         date: d.toISOString().slice(0, 10),
// // // //         checkin: checkin.toISOString(),
// // // //         checkout: checkout.toISOString(),
// // // //         lat: 19.076,
// // // //         lng: 72.8777,
// // // //       });
// // // //     }
// // // //     return arr;
// // // //   });

// // // //   const activeSession = useMemo(() => {
// // // //     return records.find(r => r.checkin && !r.checkout) ?? null;
// // // //   }, [records]);

// // // //   const handleCheckIn = () => {
// // // //     if (activeSession) return alert("Already checked in!");
// // // //     const now = new Date();
// // // //     setRecords([
// // // //       ...records,
// // // //       { id: records.length + 1, date: now.toISOString().slice(0,10), checkin: now.toISOString(), checkout: null, lat: 19.076, lng: 72.8777 },
// // // //     ]);
// // // //   };

// // // //   const handleCheckOut = () => {
// // // //     if (!activeSession) return alert("No active session to check out!");
// // // //     const now = new Date();
// // // //     setRecords(records.map(r => r.id === activeSession.id ? { ...r, checkout: now.toISOString() } : r));
// // // //   };

// // // //   // Chart data for 30 days
// // // //   const chartData = useMemo(() => ({
// // // //     labels: records.map(r => r.date.slice(5)), // MM-DD
// // // //     datasets: [{
// // // //       label: "Work Hours",
// // // //       data: records.map(r => {
// // // //         if (!r.checkin || !r.checkout) return 0;
// // // //         const start = new Date(r.checkin);
// // // //         const end = new Date(r.checkout);
// // // //         return ((end - start) / 1000 / 3600).toFixed(2);
// // // //       }),
// // // //       backgroundColor: "#22c55e",
// // // //     }]
// // // //   }), [records]);

// // // //   const chartOptions = {
// // // //     responsive: true,
// // // //     plugins: {
// // // //       legend: { display: false },
// // // //       title: { display: true, text: "Work Hours - Last 30 Days" }
// // // //     },
// // // //     scales: {
// // // //       y: { beginAtZero: true, max: 10 },
// // // //       x: { ticks: { autoSkip: false } } // show all 30 days
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="medpanel-container">
// // // //       <h2>Check-In / Check-Out</h2>

// // // //       {/* Buttons */}
// // // //       <div style={{ marginBottom: 12, textAlign: "center" }}>
// // // //         <button onClick={handleCheckIn} disabled={!!activeSession} style={{ marginRight: 8, padding: '8px 16px' }}>Check In</button>
// // // //         <button onClick={handleCheckOut} disabled={!activeSession} style={{ padding: '8px 16px' }}>Check Out</button>
// // // //       </div>

// // // //       {/* Table */}
// // // //       <div className="table-panel">
// // // //         <table className="attendance-table">
// // // //           <thead>
// // // //             <tr>
// // // //               <th>Date</th>
// // // //               <th>Check-In</th>
// // // //               <th>Check-Out</th>
// // // //               <th>Status</th>
// // // //               <th>Location</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {records.map(r => (
// // // //               <tr key={r.id} className={r === activeSession ? "active-row" : ""}>
// // // //                 <td>{new Date(r.date).toLocaleDateString()}</td>
// // // //                 <td>{r.checkin ? new Date(r.checkin).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "-"}</td>
// // // //                 <td>{r.checkout ? new Date(r.checkout).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "-"}</td>
// // // //                 <td>
// // // //                   <span className={`badge ${r.checkin && r.checkout ? "done" : "active"}`}>
// // // //                     {r.checkin && r.checkout ? "Completed" : "Active"}
// // // //                   </span>
// // // //                 </td>
// // // //                 <td>{`Lat: ${r.lat.toFixed(3)}, Lng: ${r.lng.toFixed(3)}`}</td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       </div>

// // // //       {/* Chart below table */}
// // // //       <div className="chart-panel" style={{ marginTop: 20 }}>
// // // //         <Bar data={chartData} options={chartOptions} />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // import React, { useState, useMemo } from "react";
// // // // import "./MedPanel.css";

// // // // export default function MedPanel() {
// // // //   const [records, setRecords] = useState([]);
// // // //   const activeSession = useMemo(() => {
// // // //     return records.find((r) => r.checkin && !r.checkout) ?? null;
// // // //   }, [records]);

// // // //   const handleCheckIn = () => {
// // // //     if (activeSession) return alert("Already logged in!");
// // // //     const now = new Date();
// // // //     setRecords([
// // // //       ...records,
// // // //       {
// // // //         id: records.length + 1,
// // // //         date: now.toISOString().slice(0, 10),
// // // //         checkin: now.toISOString(),
// // // //         checkout: null,
// // // //         lat: 19.076,
// // // //         lng: 72.8777,
// // // //       },
// // // //     ]);
// // // //   };

// // // //   const handleCheckOut = () => {
// // // //     if (!activeSession) return alert("Not logged in!");
// // // //     const now = new Date();
// // // //     setRecords(
// // // //       records.map((r) =>
// // // //         r.id === activeSession.id ? { ...r, checkout: now.toISOString() } : r
// // // //       )
// // // //     );
// // // //   };

// // // //   return (
// // // //     <div className="medpanel-container">
// // // //       <h2>Login / Logout Panel</h2>

// // // //       {/* Buttons */}
// // // //       <div className="punch-controls">
// // // //         <button onClick={handleCheckIn} disabled={!!activeSession}>
// // // //           {activeSession ? "Logged In" : "Login"}
// // // //         </button>
// // // //         <button onClick={handleCheckOut} disabled={!activeSession}>
// // // //           Logout
// // // //         </button>
// // // //       </div>

// // // //       {/* Status Info */}
// // // //       <div className="info-panel">
// // // //         <div>
// // // //           <strong>Login Time:</strong>{" "}
// // // //           {activeSession
// // // //             ? new Date(activeSession.checkin).toLocaleTimeString([], {
// // // //                 hour: "2-digit",
// // // //                 minute: "2-digit",
// // // //               })
// // // //             : "-"}
// // // //         </div>
// // // //         <div>
// // // //           <strong>Logout Time:</strong>{" "}
// // // //           {activeSession && activeSession.checkout
// // // //             ? new Date(activeSession.checkout).toLocaleTimeString([], {
// // // //                 hour: "2-digit",
// // // //                 minute: "2-digit",
// // // //               })
// // // //             : "-"}
// // // //         </div>
// // // //         <div>
// // // //           <strong>Location:</strong>{" "}
// // // //           {activeSession
// // // //             ? `Lat: ${activeSession.lat.toFixed(3)}, Lng: ${activeSession.lng.toFixed(3)}`
// // // //             : "-"}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // // }
// // // // import React, { useState, useEffect, useMemo } from "react";
// // // // import axios from "axios";
// // // // import "./MedPanel.css";

// // // // export default function MedPanel() {
// // // //   const [records, setRecords] = useState([]);
  
// // // //   // Replace these with actual values or fetch from cookie/session
// // // //   const userId = 5;
// // // //   const siteId = 2;
// // // //   const siteName = "Mumbai Office";
// // // //   const deviceName = navigator.userAgent || "Web Browser";

// // // //   // Axios instance pointing to backend port
// // // //   const api = axios.create({
// // // //     baseURL: "http://localhost:5000",
// // // //   });

// // // //   // Active session (logged in, not logged out)
// // // //   const activeSession = useMemo(() => {
// // // //     return records.find((r) => r.login_time && !r.logout_time) ?? null;
// // // //   }, [records]);

// // // //   useEffect(() => {
// // // //     fetchActiveSession();
// // // //   }, []);

// // // //   // Fetch active session from backend
// // // //   const fetchActiveSession = async () => {
// // // //     try {
// // // //       const res = await api.get(`/attendance/active/${userId}`);
// // // //       if (res.data.success && res.data.data) {
// // // //         setRecords([res.data.data]); // Only active session
// // // //       } else {
// // // //         setRecords([]); // no active session
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Error fetching active session", err);
// // // //     }
// // // //   };

// // // //   // Login button handler
// // // //   const handleLogin = async () => {
// // // //     if (activeSession) return alert("Already logged in!");

// // // //     try {
// // // //       const loginLocation = siteName; // could be a dropdown
// // // //       const res = await api.post("/attendance/login", {
// // // //         user_id: userId,
// // // //         site_id: siteId,
// // // //         site_name: siteName,
// // // //         login_location: loginLocation,
// // // //         device_name: deviceName,
// // // //       });

// // // //       if (res.data.success) {
// // // //         fetchActiveSession();
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Login API failed", err);
// // // //     }
// // // //   };

// // // //   // Logout button handler
// // // //   const handleLogout = async () => {
// // // //     if (!activeSession) return alert("Not logged in!");

// // // //     try {
// // // //       const logoutLocation = siteName; // could be a dropdown
// // // //       const res = await api.put(`/attendance/logout/${activeSession.id}`, {
// // // //         logout_location: logoutLocation,
// // // //         device_name: deviceName,
// // // //       });

// // // //       if (res.data.success) {
// // // //         fetchActiveSession();
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Logout API failed", err);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="medpanel-container">
// // // //       <h2>Login / Logout Panel</h2>

// // // //       {/* Buttons */}
// // // //       <div className="punch-controls">
// // // //         <button onClick={handleLogin} disabled={!!activeSession}>
// // // //           {activeSession ? "Logged In" : "Login"}
// // // //         </button>
// // // //         <button onClick={handleLogout} disabled={!activeSession}>
// // // //           Logout
// // // //         </button>
// // // //       </div>

// // // //       {/* Status Info */}
// // // //       <div className="info-panel">
// // // //         <div>
// // // //           <strong>Login Time:</strong>{" "}
// // // //           {activeSession
// // // //             ? new Date(activeSession.login_time).toLocaleTimeString([], {
// // // //                 hour: "2-digit",
// // // //                 minute: "2-digit",
// // // //               })
// // // //             : "-"}
// // // //         </div>
// // // //         <div>
// // // //           <strong>Logout Time:</strong>{" "}
// // // //           {activeSession?.logout_time
// // // //             ? new Date(activeSession.logout_time).toLocaleTimeString([], {
// // // //                 hour: "2-digit",
// // // //                 minute: "2-digit",
// // // //               })
// // // //             : "-"}
// // // //         </div>
// // // //         <div>
// // // //           <strong>Site / Location:</strong>{" "}
// // // //           {activeSession?.site_name || "-"}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import React, { useState, useEffect, useMemo } from "react";
// // // import axios from "axios";
// // // import "./MedPanel.css";

// // // export default function MedPanel() {
// // //   const [records, setRecords] = useState([]);
// // //   const [loading, setLoading] = useState(false);

// // //   // Replace with actual values or fetch from cookie/session
// // //   const userId = 5;
// // //   const deviceName = navigator.userAgent || "Web Browser";

// // //   // Axios instance pointing to backend port
// // //   const api = axios.create({
// // //     baseURL: "http://localhost:5000", // your backend URL
// // //   });

// // //   // Active session (logged in, not logged out)
// // //   const activeSession = useMemo(() => {
// // //     return records.find((r) => r.login_time && !r.logout_time) ?? null;
// // //   }, [records]);

// // //   useEffect(() => {
// // //     fetchActiveSession();
// // //   }, []);

// // //   // 1️⃣ Get browser coordinates
// // //   const getCoordinates = () =>
// // //     new Promise((resolve, reject) => {
// // //       if (!navigator.geolocation)
// // //         return reject("Geolocation not supported by your browser");

// // //       navigator.geolocation.getCurrentPosition(
// // //         (pos) => {
// // //           const { latitude, longitude } = pos.coords;
// // //           resolve({ lat: latitude, lng: longitude });
// // //         },
// // //         (err) => {
// // //           console.error("Geolocation error:", err.message);
// // //           reject(err.message);
// // //         },
// // //         { enableHighAccuracy: true }
// // //       );
// // //     });

// // //   // 2️⃣ Reverse geocode to get exact address
// // //   const getAddressFromCoordinates = async (coords) => {
// // //     try {
// // //       const res = await axios.get(
// // //         `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.lat}&lon=${coords.lng}`
// // //       );
// // //       if (res.data && res.data.display_name) return res.data.display_name;
// // //       return "Unknown Location";
// // //     } catch (err) {
// // //       console.error("OSM Reverse geocoding error:", err);
// // //       return "Unknown Location";
// // //     }
// // //   };

// // //   // Fetch active session from backend
// // //   const fetchActiveSession = async () => {
// // //     try {
// // //       const res = await api.get(`/attendance/active/${userId}`);
// // //       if (res.data.success && res.data.data) {
// // //         setRecords([res.data.data]); // Only active session
// // //       } else {
// // //         setRecords([]); // no active session
// // //       }
// // //     } catch (err) {
// // //       console.error("Error fetching active session", err);
// // //     }
// // //   };

// // //   // Login button handler
// // //   const handleLogin = async () => {
// // //     if (activeSession) return alert("Already logged in!");
// // //     setLoading(true);

// // //     try {
// // //       const coords = await getCoordinates();
// // //       const loginLocation = await getAddressFromCoordinates(coords);

// // //       const res = await api.post("/attendance/login", {
// // //         user_id: userId,
// // //         login_location: loginLocation,
// // //         device_name: deviceName,
// // //       });

// // //       if (res.data.success) fetchActiveSession();
// // //     } catch (err) {
// // //       console.error("Login API failed", err);
// // //       alert("Login failed. Make sure location is allowed in browser.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Logout button handler
// // //   const handleLogout = async () => {
// // //     if (!activeSession) return alert("Not logged in!");
// // //     setLoading(true);

// // //     try {
// // //       const coords = await getCoordinates();
// // //       const logoutLocation = await getAddressFromCoordinates(coords);

// // //       const res = await api.put(`/attendance/logout/${activeSession.id}`, {
// // //         logout_location: logoutLocation,
// // //         device_name: deviceName,
// // //       });

// // //       if (res.data.success) fetchActiveSession();
// // //     } catch (err) {
// // //       console.error("Logout API failed", err);
// // //       alert("Logout failed. Make sure location is allowed in browser.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="medpanel-container">
// // //       <h2>Login / Logout Panel</h2>

// // //       {/* Buttons */}
// // //       <div className="punch-controls">
// // //         <button onClick={handleLogin} disabled={!!activeSession || loading}>
// // //           {activeSession ? "Logged In" : loading ? "Logging In..." : "Login"}
// // //         </button>
// // //         <button onClick={handleLogout} disabled={!activeSession || loading}>
// // //           {loading ? "Processing..." : "Logout"}
// // //         </button>
// // //       </div>

// // //       {/* Status Info */}
// // //       <div className="info-panel">
// // //         <div>
// // //           <strong>Login Time:</strong>{" "}
// // //           {activeSession
// // //             ? new Date(activeSession.login_time).toLocaleTimeString([], {
// // //                 hour: "2-digit",
// // //                 minute: "2-digit",
// // //               })
// // //             : "-"}
// // //         </div>
// // //         <div>
// // //           <strong>Logout Time:</strong>{" "}
// // //           {activeSession?.logout_time
// // //             ? new Date(activeSession.logout_time).toLocaleTimeString([], {
// // //                 hour: "2-digit",
// // //                 minute: "2-digit",
// // //               })
// // //             : "-"}
// // //         </div>
// // //         <div>
// // //           <strong>Login Location:</strong>{" "}
// // //           {activeSession?.login_location || "-"}
// // //         </div>
// // //         <div>
// // //           <strong>Logout Location:</strong>{" "}
// // //           {activeSession?.logout_location || "-"}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useState, useEffect, useMemo } from "react";
// // import axios from "axios";
// // import "./MedPanel.css";

// // export default function MedPanel() {
// //   const [records, setRecords] = useState([]);
// //   const [locationError, setLocationError] = useState(null);

// //   const userId = 5; // replace with actual userId
// //   const siteId = 2; // replace with actual siteId
// //   const siteName = "Mumbai Office"; // optional, if backend requires
// //   const deviceName = navigator.userAgent || "Web Browser";

// //   const api = axios.create({ baseURL: "http://localhost:5000" });

// //   const activeSession = useMemo(
// //     () => records.find((r) => r.login_time && !r.logout_time) ?? null,
// //     [records]
// //   );

// //   useEffect(() => {
// //     fetchActiveSession();
// //   }, []);

// //   const fetchActiveSession = async () => {
// //     try {
// //       const res = await api.get(`/attendance/active/${userId}`);
// //       if (res.data.success && res.data.data) {
// //         setRecords([res.data.data]);
// //       } else {
// //         setRecords([]);
// //       }
// //     } catch (err) {
// //       console.error("Error fetching active session", err);
// //     }
// //   };

// //   // Get exact location using Geolocation API + reverse geocoding
// //   const getCurrentLocation = () =>
// //     new Promise((resolve, reject) => {
// //       if (!navigator.geolocation) {
// //         reject("Geolocation not supported");
// //         return;
// //       }
// //       navigator.geolocation.getCurrentPosition(
// //         async (position) => {
// //           const { latitude, longitude } = position.coords;

// //           // Use OpenStreetMap Nominatim API to get exact address
// //           try {
// //             const res = await axios.get(
// //               `https://nominatim.openstreetmap.org/reverse`,
// //               {
// //                 params: {
// //                   lat: latitude,
// //                   lon: longitude,
// //                   format: "json",
// //                 },
// //               }
// //             );
// //             const address = res.data.display_name;
// //             resolve(address);
// //           } catch {
// //             resolve("Unknown Location");
// //           }
// //         },
// //         (error) => reject(error.message)
// //       );
// //     });

// //   const handleLogin = async () => {
// //     if (activeSession) return alert("Already logged in!");

// //     try {
// //       const loginLocation = await getCurrentLocation();
// //       setLocationError(null);

// //       const res = await api.post("/attendance/login", {
// //         user_id: userId,
// //         site_id: siteId,
// //         site_name: siteName,
// //         login_location: loginLocation,
// //         device_name: deviceName,
// //       });

// //       if (res.data.success) fetchActiveSession();
// //     } catch (err) {
// //       console.error("Login failed", err);
// //       setLocationError("Login failed. Make sure location is allowed in browser.");
// //     }
// //   };

// //   const handleLogout = async () => {
// //     if (!activeSession) return alert("Not logged in!");

// //     try {
// //       const logoutLocation = await getCurrentLocation();

// //       const res = await api.put(`/attendance/logout/${activeSession.id}`, {
// //         logout_location: logoutLocation,
// //         device_name: deviceName,
// //       });

// //       if (res.data.success) fetchActiveSession();
// //     } catch (err) {
// //       console.error("Logout failed", err);
// //       setLocationError(
// //         "Logout failed. Make sure location is allowed in browser."
// //       );
// //     }
// //   };

// //   return (
// //     <div className="medpanel-container">
// //       <h2>Login / Logout Panel</h2>

// //       {locationError && <div className="error">{locationError}</div>}

// //       <div className="punch-controls">
// //         <button onClick={handleLogin} disabled={!!activeSession}>
// //           {activeSession ? "Logged In" : "Login"}
// //         </button>
// //         <button onClick={handleLogout} disabled={!activeSession}>
// //           Logout
// //         </button>
// //       </div>

// //       <div className="info-panel">
// //         <div>
// //           <strong>Login Time:</strong>{" "}
// //           {activeSession
// //             ? new Date(activeSession.login_time).toLocaleTimeString([], {
// //                 hour: "2-digit",
// //                 minute: "2-digit",
// //               })
// //             : "-"}
// //         </div>
// //         <div>
// //           <strong>Logout Time:</strong>{" "}
// //           {activeSession?.logout_time
// //             ? new Date(activeSession.logout_time).toLocaleTimeString([], {
// //                 hour: "2-digit",
// //                 minute: "2-digit",
// //               })
// //             : "-"}
// //         </div>
// //         <div>
// //           <strong>Login Location:</strong>{" "}
// //           {activeSession?.login_location || "-"}
// //         </div>
// //         <div>
// //           <strong>Logout Location:</strong>{" "}
// //           {activeSession?.logout_location || "-"}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import "./MedPanel.css";

// // export default function MedPanel() {
// //   const [session, setSession] = useState(null); // single session
// //   const [locationError, setLocationError] = useState(null);

// //   const userId = 5; // replace with actual userId
// //   const siteId = 2;
// //   const siteName = "Mumbai Office";
// //   const deviceName = navigator.userAgent || "Web Browser";

// //   const api = axios.create({ baseURL: "http://localhost:5000" });

// //   useEffect(() => {
// //     fetchLastSession();
// //   }, []);

// //   // Fetch last session (active or last completed)
// //   const fetchLastSession = async () => {
// //     try {
// //       const res = await api.get(`/attendance/last/${userId}`);
// //       if (res.data.success && res.data.data) {
// //         setSession(res.data.data);
// //       } else {
// //         setSession(null);
// //       }
// //     } catch (err) {
// //       console.error("Error fetching session", err);
// //     }
// //   };

// //   // Get exact location using Geolocation API + reverse geocoding
// // const getCurrentLocation = () =>
// //   new Promise((resolve, reject) => {
// //     if (!navigator.geolocation) {
// //       reject("Geolocation not supported");
// //       return;
// //     }

// //     navigator.geolocation.getCurrentPosition(
// //       async (position) => {
// //         const { latitude, longitude } = position.coords;
// //         console.log("Coordinates:", latitude, longitude); // DEBUG
// //         try {
// //           const res = await axios.get(
// //             `https://nominatim.openstreetmap.org/reverse`,
// //             {
// //               params: { lat: latitude, lon: longitude, format: "json" },
// //             }
// //           );
// //           console.log("Reverse geocode result:", res.data);
// //           const address = res.data.display_name;
// //           resolve(address);
// //         } catch (err) {
// //           console.error("Reverse geocode failed", err);
// //           resolve("Unknown Location");
// //         }
// //       },
// //       (error) => {
// //         console.error("Geolocation error", error);
// //         reject(error.message);
// //       }
// //     );
// //   });


// //   const handleLogin = async () => {
// //     if (session?.logout_time === null) return alert("Already logged in!");

// //     try {
// //       const loginLocation = await getCurrentLocation();
// //       setLocationError(null);

// //       const res = await api.post("/attendance/login", {
// //         user_id: userId,
// //         site_id: siteId,
// //         site_name: siteName,
// //         login_location: loginLocation,
// //         device_name: deviceName,
// //       });

// //       if (res.data.success) fetchLastSession();
// //     } catch (err) {
// //       console.error("Login failed", err);
// //       setLocationError(
// //         "Login failed. Make sure location is allowed in browser."
// //       );
// //     }
// //   };

// //   const handleLogout = async () => {
// //     if (!session || session.logout_time !== null) return alert("Not logged in!");

// //     try {
// //       const logoutLocation = await getCurrentLocation();

// //       const res = await api.put(`/attendance/logout/${session.id}`, {
// //         logout_location: logoutLocation,
// //         device_name: deviceName,
// //       });

// //       if (res.data.success) fetchLastSession();
// //     } catch (err) {
// //       console.error("Logout failed", err);
// //       setLocationError(
// //         "Logout failed. Make sure location is allowed in browser."
// //       );
// //     }
// //   };

// //   return (
// //     <div className="medpanel-container">
// //       <h2>Login / Logout Panel</h2>

// //       {locationError && <div className="error">{locationError}</div>}

// //       <div className="punch-controls">
// //         <button onClick={handleLogin} disabled={session?.logout_time === null}>
// //           {session?.logout_time === null ? "Logged In" : "Login"}
// //         </button>
// //         <button onClick={handleLogout} disabled={!session || session.logout_time !== null}>
// //           Logout
// //         </button>
// //       </div>

// //       <div className="info-panel">
// //         <div>
// //           <strong>Login Time:</strong>{" "}
// //           {session
// //             ? new Date(session.login_time).toLocaleTimeString([], {
// //                 hour: "2-digit",
// //                 minute: "2-digit",
// //               })
// //             : "-"}
// //         </div>
// //         <div>
// //           <strong>Logout Time:</strong>{" "}
// //           {session?.logout_time
// //             ? new Date(session.logout_time).toLocaleTimeString([], {
// //                 hour: "2-digit",
// //                 minute: "2-digit",
// //               })
// //             : "-"}
// //         </div>
// //         <div>
// //           <strong>Login Location:</strong> {session?.login_location || "-"}
// //         </div>
// //         <div>
// //           <strong>Logout Location:</strong> {session?.logout_location || "-"}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./MedPanel.css";

// export default function MedPanel() {
//   const [session, setSession] = useState(null); // single session
//   const [locationError, setLocationError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const userId = 5; // replace with actual userId
//   const siteId = 2;
//   const siteName = "Mumbai Office";
//   const deviceName = navigator.userAgent || "Web Browser";

//   const api = axios.create({ baseURL: "http://localhost:5000" });

//   useEffect(() => {
//     fetchLastSession();
//   }, []);

//   // Fetch last session (active or last completed)
//   const fetchLastSession = async () => {
//     try {
//       const res = await api.get(`/attendance/last/${userId}`);
//       if (res.data.success && res.data.data) {
//         setSession(res.data.data);
//       } else {
//         setSession(null);
//       }
//     } catch (err) {
//       console.error("Error fetching session", err);
//     }
//   };

//   // Get exact location using Geolocation API + reverse geocoding
//  const getCurrentLocation = () =>
//   new Promise((resolve, reject) => {
//     if (!navigator.geolocation) {
//       reject("Geolocation not supported");
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;
//         try {
//           const res = await axios.get(
//             "https://nominatim.openstreetmap.org/reverse",
//             {
//               params: { lat: latitude, lon: longitude, format: "json" },
//             }
//           );
//           const address = res.data.display_name;
//           resolve(address || `Lat: ${latitude}, Lng: ${longitude}`);
//         } catch (err) {
//           console.warn("Reverse geocode failed, using coordinates", err);
//           resolve(`Lat: ${latitude}, Lng: ${longitude}`);
//         }
//       },
//       (error) => {
//         console.error("Geolocation error", error);
//         if (error.code === 1) {
//           reject("Location permission denied");
//         } else {
//           resolve("Unknown Location");
//         }
//       },
//       { enableHighAccuracy: true, timeout: 15000 }
//     );
//   });


//   const handleLogin = async () => {
//     if (session?.logout_time === null) return alert("Already logged in!");
//     setLoading(true);

//     try {
//       const loginLocation = await getCurrentLocation();
//       setLocationError(null);

//       const res = await api.post("/attendance/login", {
//         user_id: userId,
//         site_id: siteId,
//         site_name: siteName,
//         login_location: loginLocation,
//         device_name: deviceName,
//       });

//       if (res.data.success) fetchLastSession();
//     } catch (err) {
//       console.error("Login failed", err);
//       setLocationError(
//         "Login failed. Make sure location is allowed in the browser."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = async () => {
//     if (!session || session.logout_time !== null)
//       return alert("Not logged in!");
//     setLoading(true);

//     try {
//       const logoutLocation = await getCurrentLocation();

//       const res = await api.put(`/attendance/logout/${session.id}`, {
//         logout_location: logoutLocation,
//         device_name: deviceName,
//       });

//       if (res.data.success) fetchLastSession();
//     } catch (err) {
//       console.error("Logout failed", err);
//       setLocationError(
//         "Logout failed. Make sure location is allowed in the browser."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="medpanel-container">
//       <h2>Login / Logout Panel</h2>

//       {locationError && <div className="error">{locationError}</div>}

//       <div className="punch-controls">
//         <button
//           onClick={handleLogin}
//           disabled={session?.logout_time === null || loading}
//         >
//           {session?.logout_time === null ? "Logged In" : "Login"}
//         </button>
//         <button
//           onClick={handleLogout}
//           disabled={!session || session.logout_time !== null || loading}
//         >
//           Logout
//         </button>
//       </div>

//       <div className="info-panel">
//         <div>
//           <strong>Login Time:</strong>{" "}
//           {session
//             ? new Date(session.login_time).toLocaleTimeString([], {
//                 hour: "2-digit",
//                 minute: "2-digit",
//               })
//             : "-"}
//         </div>
//         <div>
//           <strong>Logout Time:</strong>{" "}
//           {session?.logout_time
//             ? new Date(session.logout_time).toLocaleTimeString([], {
//                 hour: "2-digit",
//                 minute: "2-digit",
//               })
//             : "-"}
//         </div>
//         <div>
//           <strong>Login Location:</strong> {session?.login_location || "-"}
//         </div>
//         <div>
//           <strong>Logout Location:</strong> {session?.logout_location || "-"}
//         </div>
//       </div>
//     </div>
//   );
// }

// MedPanel.js


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./MedPanel.css";

// export default function MedPanel() {
//   const [session, setSession] = useState(null); // single session
//   const [locationError, setLocationError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const userId = 5; // replace with actual userId
//   const siteId = 2;
//   const siteName = "Mumbai Office";
//   const deviceName = navigator.userAgent || "Web Browser";

//   const api = axios.create({ baseURL: "http://localhost:5000" });

//   // Max lengths based on MySQL table
//   const MAX_LOCATION_LENGTH = 200;
//   const MAX_DEVICE_LENGTH = 100;

//   useEffect(() => {
//     fetchLastSession();
//   }, []);

//   // Fetch last session (active or last completed)
//   const fetchLastSession = async () => {
//     try {
//       const res = await api.get(`/attendance/last/${userId}`);
//       if (res.data.success && res.data.data) {
//         setSession(res.data.data);
//       } else {
//         setSession(null);
//       }
//     } catch (err) {
//       console.error("Error fetching session", err);
//     }
//   };

//   // Get exact location using Geolocation API + reverse geocoding
//   const getCurrentLocation = () =>
//     new Promise((resolve, reject) => {
//       if (!navigator.geolocation) {
//         reject("Geolocation not supported");
//         return;
//       }

//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;
//           try {
//             const res = await axios.get(
//               `https://nominatim.openstreetmap.org/reverse`,
//               {
//                 params: { lat: latitude, lon: longitude, format: "json", zoom: 18 },
//               }
//             );
//             const address = res.data.display_name || "Unknown Location";
//             // Truncate to prevent DB errors
//             resolve(address.substring(0, MAX_LOCATION_LENGTH));
//           } catch (err) {
//             console.error("Reverse geocode failed", err);
//             resolve("Unknown Location");
//           }
//         },
//         (error) => {
//           console.error("Geolocation error", error);
//           reject(error.message || "Unable to retrieve location");
//         },
//         { enableHighAccuracy: true, timeout: 20000, maximumAge: 5000 }
//       );
//     });

//   const handleLogin = async () => {
//     if (session?.logout_time === null) return alert("Already logged in!");
//     setLoading(true);
//     setLocationError(null);

//     try {
//       const loginLocation = await getCurrentLocation();
//       const safeDeviceName = deviceName.substring(0, MAX_DEVICE_LENGTH);

//       const res = await api.post("/attendance/login", {
//         user_id: userId,
//         site_id: siteId,
//         site_name: siteName,
//         login_location: loginLocation,
//         device_name: safeDeviceName,
//       });

//       if (res.data.success) fetchLastSession();
//     } catch (err) {
//       console.error("Login failed", err);
//       setLocationError(
//         "Login failed. Make sure location is allowed in the browser."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = async () => {
//     if (!session || session.logout_time !== null) return alert("Not logged in!");
//     setLoading(true);
//     setLocationError(null);

//     try {
//       const logoutLocation = await getCurrentLocation();
//       const safeDeviceName = deviceName.substring(0, MAX_DEVICE_LENGTH);

//       const res = await api.put(`/attendance/logout/${session.id}`, {
//         logout_location: logoutLocation,
//         device_name: safeDeviceName,
//       });

//       if (res.data.success) fetchLastSession();
//     } catch (err) {
//       console.error("Logout failed", err);
//       setLocationError(
//         "Logout failed. Make sure location is allowed in the browser."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="medpanel-container">
//       <h2>Login / Logout Panel</h2>

//       {locationError && <div className="error">{locationError}</div>}

//       <div className="punch-controls">
//         <button
//           onClick={handleLogin}
//           disabled={session?.logout_time === null || loading}
//         >
//           {loading && session?.logout_time === null ? "Processing..." :
//            session?.logout_time === null ? "Logged In" : "Login"}
//         </button>
//         <button
//           onClick={handleLogout}
//           disabled={!session || session.logout_time !== null || loading}
//         >
//           {loading && session?.logout_time !== null ? "Processing..." : "Logout"}
//         </button>
//       </div>

//       <div className="info-panel">
//         <div>
//           <strong>Login Time:</strong>{" "}
//           {session
//             ? new Date(session.login_time).toLocaleString()
//             : "-"}
//         </div>
//         <div>
//           <strong>Logout Time:</strong>{" "}
//           {session?.logout_time
//             ? new Date(session.logout_time).toLocaleString()
//             : "-"}
//         </div>
//         <div>
//           <strong>Login Location:</strong> {session?.login_location || "-"}
//         </div>
//         <div>
//           <strong>Logout Location:</strong> {session?.logout_location || "-"}
//         </div>
//         <div>
//           <strong>Device:</strong> {session?.device_name || "-"}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MedPanel.css";

export default function MedPanel() {
  const [session, setSession] = useState(null); // single session
  const [locationError, setLocationError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState(""); // For success/info messages

  const userId = 5; // replace with actual userId
  const siteId = 2;
  const siteName = "Mumbai Office";
  const deviceName = navigator.userAgent || "Web Browser";

  const api = axios.create({ 
    baseURL: "http://localhost:5000",
    timeout: 10000, // Added timeout to prevent hanging
  });

  // Max lengths based on MySQL table
  const MAX_LOCATION_LENGTH = 200;
  const MAX_DEVICE_LENGTH = 100;

  useEffect(() => {
    fetchLastSession();
  }, []);

  // Fetch last session (active or last completed)
  const fetchLastSession = async () => {
    try {
      const res = await api.get(`/attendance/last/${userId}`);
      console.log("Fetch session response:", res.data); // Enhanced debug log
      if (res.data.success && res.data.data) {
        setSession(res.data.data);
        setApiMessage("Session data refreshed."); // Optional user feedback
      } else {
        setSession(null);
        setApiMessage(res.data.message || "No active session found.");
      }
    } catch (err) {
      console.error("Error fetching session", err.response?.data || err.message || err);
      setApiMessage("Failed to fetch session. Check console.");
      setSession(null); // Ensure session is null on error
    }
  };

  // Get exact location using Geolocation API + reverse geocoding
  const getCurrentLocation = () =>
    new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("Geolocation not supported");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await axios.get(
              `https://nominatim.openstreetmap.org/reverse`,
              {
                params: { lat: latitude, lon: longitude, format: "json", zoom: 18 },
                headers: {
                  'User-Agent': 'MedPanelApp/1.0 (your-email@example.com)', // Required by OSM policy; replace with your actual email/app info
                },
                timeout: 10000, // Timeout for reverse geocoding
              }
            );
            console.log("Raw address from Nominatim:", res.data); // Debug log
            let address = res.data.display_name || `${latitude}, ${longitude} (Coords Fallback)`;
            // Truncate to prevent DB errors
            resolve(address.substring(0, MAX_LOCATION_LENGTH));
          } catch (err) {
            console.error("Reverse geocode failed", err);
            // Fallback to coordinates if geocoding fails
            resolve(`${latitude}, ${longitude} (Geocode Failed)`);
          }
        },
        (error) => {
          console.error("Geolocation error", error);
          reject(error.message || "Unable to retrieve location");
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 5000 }
      );
    });

  const handleLogin = async () => {
    // Always fetch fresh session first to ensure state is up-to-date
    setLoading(true);
    setLocationError(null);
    setApiMessage("Checking current session...");
    await fetchLastSession(); // Refresh before action

    if (session && session.logout_time === null) {
      setLoading(false);
      setLocationError("User already logged in."); // Show as error/message
      return;
    }

    try {
      // For testing without geo: const loginLocation = "Hardcoded Test Location";
      const loginLocation = await getCurrentLocation();
      console.log("Attempting login with location:", loginLocation); // Debug log
      const safeDeviceName = deviceName.substring(0, MAX_DEVICE_LENGTH);

      const res = await api.post("/attendance/login", {
        user_id: userId,
        site_id: siteId,
        site_name: siteName,
        login_location: loginLocation,
        device_name: safeDeviceName,
      });

      console.log("Login API full response:", res); // Enhanced: Log full res
      console.log("Login API data:", res.data); // Debug log

      if (res.data.success) {
        setApiMessage(res.data.message || "Login successful! Fetching updated session...");
        await fetchLastSession(); // Re-fetch to update UI immediately
      } else {
        setLocationError(res.data.message || "Login failed on server.");
      }
    } catch (err) {
      console.error("Login failed details:", err.response?.data || err.message || err);
      let errorMsg = "Login failed. Make sure location is allowed in the browser.";
      if (err.message.includes('geolocation') || err.message.includes('nominatim')) {
        errorMsg = `Location error: ${err.message}`;
      } else if (err.response?.data?.message) {
        errorMsg = `API error: ${err.response.data.message}`;
      } else {
        errorMsg = `Login failed: ${err.message || "Unknown error. Check console for details."}`;
      }
      setLocationError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    // Always fetch fresh session first to ensure state is up-to-date
    setLoading(true);
    setLocationError(null);
    setApiMessage("Checking current session...");
    await fetchLastSession(); // Refresh before action

    if (!session || session.logout_time !== null) {
      setLoading(false);
      setLocationError("Not logged in."); // Show as error/message
      return;
    }

    try {
      // For testing without geo: const logoutLocation = "Hardcoded Test Location";
      const logoutLocation = await getCurrentLocation();
      console.log("Attempting logout with location:", logoutLocation); // Debug log
      const safeDeviceName = deviceName.substring(0, MAX_DEVICE_LENGTH);

      const res = await api.put(`/attendance/logout/${session.id}`, {
        logout_location: logoutLocation,
        device_name: safeDeviceName,
      });

      console.log("Logout API full response:", res); // Enhanced: Log full res
      console.log("Logout API data:", res.data); // Debug log

      if (res.data.success) {
        setApiMessage(res.data.message || "Logout successful! Fetching updated session...");
        await fetchLastSession(); // Re-fetch to update UI immediately
      } else {
        setLocationError(res.data.message || "Logout failed on server.");
      }
    } catch (err) {
      console.error("Logout failed details:", err.response?.data || err.message || err);
      let errorMsg = "Logout failed. Make sure location is allowed in the browser.";
      if (err.message.includes('geolocation') || err.message.includes('nominatim')) {
        errorMsg = `Location error: ${err.message}`;
      } else if (err.response?.data?.message) {
        errorMsg = `API error: ${err.response.data.message}`;
      } else {
        errorMsg = `Logout failed: ${err.message || "Unknown error. Check console for details."}`;
      }
      setLocationError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  // Debug: Log session changes
  useEffect(() => {
    console.log("Current session state:", session);
  }, [session]);

  return (
    <div className="medpanel-container">
      <h2>Login / Logout Panel</h2>

      {locationError && <div className="error">{locationError}</div>}
      {apiMessage && <div className="info">{apiMessage}</div>} {/* Show API messages */}

      <div className="punch-controls">
        <button
          onClick={handleLogin}
          disabled={loading || (session && session.logout_time === null)} // Disable if already logged in or loading
        >
          {loading && (!session || session.logout_time !== null) ? "Processing..." :
           (session && session.logout_time === null) ? "Logged In" : "Login"}
        </button>
        <button
          onClick={handleLogout}
          disabled={loading || !session || session.logout_time !== null} // Enable only if actively logged in
        >
          {loading && session && session.logout_time === null ? "Processing..." : "Logout"}
        </button>
      </div>

      <div className="info-panel">
        <div>
          <strong>Status:</strong>{" "}
          {session && session.logout_time === null ? "Logged In" : "Logged Out"}
        </div>
        <div>
          <strong>Login Time:</strong>{" "}
          {session
            ? new Date(session.login_time).toLocaleString()
            : "-"}
        </div>
        <div>
          <strong>Logout Time:</strong>{" "}
          {session?.logout_time
            ? new Date(session.logout_time).toLocaleString()
            : "-"}
        </div>
        <div>
          <strong>Login Location:</strong> {session?.login_location || "-"}
        </div>
        <div>
          <strong>Logout Location:</strong> {session?.logout_location || "-"}
        </div>
        <div>
          <strong>Device:</strong> {session?.device_name || "-"}
        </div>
      </div>
    </div>
  );
}