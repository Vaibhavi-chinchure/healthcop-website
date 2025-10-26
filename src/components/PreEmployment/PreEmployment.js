// // // // // import React, { useState, useEffect } from "react";
// // // // // import axios from "axios";
// // // // // import Cookies from "js-cookie";
// // // // // import "./PreEmployment.css";

// // // // // function PreEmployment() {
// // // // //   const [sites, setSites] = useState([]);
// // // // //   const [selectedSite, setSelectedSite] = useState(Cookies.get("siteId") || "");
// // // // //   const [records, setRecords] = useState([]);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [error, setError] = useState("");
// // // // //   const [showSiteSelection, setShowSiteSelection] = useState(!Cookies.get("siteId"));

// // // // //   const token = localStorage.getItem("token");

// // // // //   // Fetch sites if needed
// // // // //   useEffect(() => {
// // // // //     if (!showSiteSelection) return;

// // // // //     const fetchSites = async () => {
// // // // //       try {
// // // // //         const res = await axios.get("http://localhost:5000/api/sites", {
// // // // //           headers: { Authorization: `Bearer ${token}` },
// // // // //         });
// // // // //         setSites(res.data);
// // // // //       } catch (err) {
// // // // //         console.error("Error fetching sites:", err);
// // // // //         setError("Failed to load sites");
// // // // //       }
// // // // //     };

// // // // //     fetchSites();
// // // // //   }, [showSiteSelection, token]);

// // // // //   // Fetch records for selected site
// // // // //   useEffect(() => {
// // // // //     if (!selectedSite) return;

// // // // //     const fetchRecords = async () => {
// // // // //       setLoading(true);
// // // // //       setError("");
// // // // //       try {
// // // // //         const res = await axios.get(
// // // // //           `http://localhost:5000/api/pre-employment/site-records?site_id=${selectedSite}`,
// // // // //           { headers: { Authorization: `Bearer ${token}` } }
// // // // //         );
// // // // //         setRecords(res.data);
// // // // //       } catch (err) {
// // // // //         console.error("Error fetching records:", err);
// // // // //         setError(
// // // // //           err.response?.status === 403
// // // // //             ? "Forbidden: You don't have access to this site."
// // // // //             : "Failed to fetch records. Make sure your token is valid."
// // // // //         );
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchRecords();
// // // // //   }, [selectedSite, token]);

// // // // //   // Handle site selection
// // // // //   const handleSiteSelect = () => {
// // // // //     if (!selectedSite) {
// // // // //       setError("Please select a site");
// // // // //       return;
// // // // //     }
// // // // //     Cookies.set("siteId", selectedSite, { expires: 7, secure: true, sameSite: "Strict" });
// // // // //     setShowSiteSelection(false);
// // // // //   };

// // // // //   const handleEdit = (recordId) => {
// // // // //     console.log("Edit record:", recordId);
// // // // //     // Navigate to edit page or open modal
// // // // //   };

// // // // //   return (
// // // // //     <div className="preemployment-container">
// // // // //       <h2>Pre-Employment Records</h2>

// // // // //       {/* Site Selection */}
// // // // //       {showSiteSelection && (
// // // // //         <div className="site-selector-card">
// // // // //           <p>Please select your site:</p>
// // // // //           {error && <p className="error">{error}</p>}
// // // // //           <select
// // // // //             value={selectedSite}
// // // // //             onChange={(e) => setSelectedSite(e.target.value)}
// // // // //           >
// // // // //             <option value="">-- Choose Site --</option>
// // // // //             {sites.map((site) => (
// // // // //               <option key={site.site_id} value={site.site_id}>
// // // // //                 {site.site_name}
// // // // //               </option>
// // // // //             ))}
// // // // //           </select>
// // // // //           <button onClick={handleSiteSelect}>Confirm Site</button>
// // // // //         </div>
// // // // //       )}

// // // // //       {/* Records Table */}
// // // // //       {!showSiteSelection && (
// // // // //         <>
// // // // //           {loading && <p>Loading records...</p>}
// // // // //           {error && <p className="error">{error}</p>}

// // // // //           {records.length > 0 && (
// // // // //             <table className="records-table">
// // // // //               <thead>
// // // // //                 <tr>
// // // // //                   <th>Laborer ID</th>
// // // // //                   <th>Name</th>
// // // // //                   <th>Certificate</th>
// // // // //                   <th>Date</th>
// // // // //                   <th>Parentage</th>
// // // // //                   <th>DOB</th>
// // // // //                   <th>Age</th>
// // // // //                   <th>Height</th>
// // // // //                   <th>Weight</th>
// // // // //                   <th>BMI</th>
// // // // //                   <th>Status</th>
// // // // //                   <th>Active</th>
// // // // //                   <th>Actions</th>
// // // // //                 </tr>
// // // // //               </thead>
// // // // //               <tbody>
// // // // //                 {records.map((rec) => (
// // // // //                   <tr key={rec.id}>
// // // // //                     <td>{rec.laborer_id}</td>
// // // // //                     <td>{rec.name}</td>
// // // // //                     <td>{rec.certificate_serial_no}</td>
// // // // //                     <td>{rec.date}</td>
// // // // //                     <td>{rec.parentage}</td>
// // // // //                     <td>{rec.date_of_birth}</td>
// // // // //                     <td>{rec.certificate_age}</td>
// // // // //                     <td>{rec.height}</td>
// // // // //                     <td>{rec.weight}</td>
// // // // //                     <td>{rec.bmi}</td>
// // // // //                     <td>{rec.status}</td>
// // // // //                     <td>{rec.active}</td>
// // // // //                     <td>
// // // // //                       <button
// // // // //                         className="edit-btn"
// // // // //                         onClick={() => handleEdit(rec.id)}
// // // // //                       >
// // // // //                         Edit
// // // // //                       </button>
// // // // //                     </td>
// // // // //                   </tr>
// // // // //                 ))}
// // // // //               </tbody>
// // // // //             </table>
// // // // //           )}

// // // // //           {!loading && records.length === 0 && <p>No records found for this site.</p>}
// // // // //         </>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default PreEmployment;


// // // // import React, { useState, useEffect } from "react";
// // // // import axios from "axios";
// // // // import Cookies from "js-cookie";
// // // // import "./PreEmployment.css";

// // // // function PreEmployment() {
// // // //   const [sites, setSites] = useState([]);
// // // //   const [selectedSite, setSelectedSite] = useState(Cookies.get("siteId") || "");
// // // //   const [records, setRecords] = useState([]);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [error, setError] = useState("");
// // // //   const [showSiteSelection, setShowSiteSelection] = useState(!Cookies.get("siteId"));

// // // //   const token = localStorage.getItem("token");

// // // //   // Fetch sites if needed
// // // //   useEffect(() => {
// // // //     if (!showSiteSelection) return;

// // // //     const fetchSites = async () => {
// // // //       try {
// // // //         const res = await axios.get("http://localhost:5000/api/sites", {
// // // //           headers: { Authorization: `Bearer ${token}` },
// // // //         });
// // // //         setSites(res.data);
// // // //       } catch (err) {
// // // //         console.error("Error fetching sites:", err);
// // // //         setError("Failed to load sites");
// // // //       }
// // // //     };

// // // //     fetchSites();
// // // //   }, [showSiteSelection, token]);

// // // //   // Fetch records
// // // //   useEffect(() => {
// // // //     if (!selectedSite) return;

// // // //     const fetchRecords = async () => {
// // // //       setLoading(true);
// // // //       setError("");
// // // //       try {
// // // //         const res = await axios.get(
// // // //           `http://localhost:5000/api/pre-employment/site-records?site_id=${selectedSite}`,
// // // //           {
// // // //             headers: { Authorization: `Bearer ${token}` },
// // // //           }
// // // //         );
// // // //         setRecords(res.data);
// // // //       } catch (err) {
// // // //         console.error("Error fetching records:", err);
// // // //         setError(
// // // //           err.response?.status === 403
// // // //             ? "Forbidden: You don't have access to this site."
// // // //             : "Failed to fetch records. Make sure your token is valid."
// // // //         );
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchRecords();
// // // //   }, [selectedSite, token]);

// // // //   // Handle site selection
// // // //   const handleSiteSelect = () => {
// // // //     if (!selectedSite) {
// // // //       setError("Please select a site");
// // // //       return;
// // // //     }
// // // //     Cookies.set("siteId", selectedSite, { expires: 7, secure: true, sameSite: "Strict" });
// // // //     setShowSiteSelection(false);
// // // //   };

// // // //   const handleEdit = (recordId) => {
// // // //     console.log("Edit record:", recordId);
// // // //     // Navigate to edit page or open modal
// // // //   };

// // // //   return (
// // // //     <div className="preemployment-container">
// // // //       <h2>Pre-Employment Records</h2>

// // // //       {/* Site Selection */}
// // // //       {showSiteSelection && (
// // // //         <div className="site-selector-card">
// // // //           <p>Please select your site:</p>
// // // //           {error && <p className="error">{error}</p>}
// // // //           <select
// // // //             value={selectedSite}
// // // //             onChange={(e) => setSelectedSite(e.target.value)}
// // // //           >
// // // //             <option value="">-- Choose Site --</option>
// // // //             {sites.map((site) => (
// // // //               <option key={site.site_id} value={site.site_id}>
// // // //                 {site.site_name}
// // // //               </option>
// // // //             ))}
// // // //           </select>
// // // //           <button onClick={handleSiteSelect}>Confirm Site</button>
// // // //         </div>
// // // //       )}

// // // //       {/* Records Table */}
// // // //       {!showSiteSelection && (
// // // //         <>
// // // //           {loading && <p>Loading records...</p>}
// // // //           {error && <p className="error">{error}</p>}

// // // //           {records.length > 0 && (
// // // //             <div className="table-wrapper">
// // // //               <table className="records-table">
// // // //                 <thead>
// // // //                   <tr>
// // // //                     {Object.keys(records[0]).map((col) => (
// // // //                       <th key={col}>{col.replace(/_/g, " ").toUpperCase()}</th>
// // // //                     ))}
// // // //                     <th>ACTIONS</th>
// // // //                   </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                   {records.map((rec) => (
// // // //                     <tr key={rec.id}>
// // // //                       {Object.keys(rec).map((key) => (
// // // //                         <td key={key}>
// // // //                           {typeof rec[key] === "object" && rec[key] !== null
// // // //                             ? JSON.stringify(rec[key])
// // // //                             : rec[key]}
// // // //                         </td>
// // // //                       ))}
// // // //                       <td>
// // // //                         <button className="edit-btn" onClick={() => handleEdit(rec.id)}>
// // // //                           Edit
// // // //                         </button>
// // // //                       </td>
// // // //                     </tr>
// // // //                   ))}
// // // //                 </tbody>
// // // //               </table>
// // // //             </div>
// // // //           )}

// // // //           {!loading && records.length === 0 && <p>No records found for this site.</p>}
// // // //         </>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default PreEmployment;

// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import Cookies from "js-cookie";
// // // import "./PreEmployment.css";

// // // function PreEmployment() {
// // //   const [sites, setSites] = useState([]);
// // //   const [selectedSite, setSelectedSite] = useState(Cookies.get("siteId") || "");
// // //   const [records, setRecords] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState("");
// // //   const [showSiteSelection, setShowSiteSelection] = useState(!Cookies.get("siteId"));
// // //   const [viewRecord, setViewRecord] = useState(null); // For showing details

// // //   const token = localStorage.getItem("token");

// // //   // Fetch sites if needed
// // //   useEffect(() => {
// // //     if (!showSiteSelection) return;

// // //     const fetchSites = async () => {
// // //       try {
// // //         const res = await axios.get("http://localhost:5000/api/sites", {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         });
// // //         setSites(res.data);
// // //       } catch (err) {
// // //         console.error("Error fetching sites:", err);
// // //         setError("Failed to load sites");
// // //       }
// // //     };

// // //     fetchSites();
// // //   }, [showSiteSelection, token]);

// // //   // Fetch records
// // //   useEffect(() => {
// // //     if (!selectedSite) return;

// // //     const fetchRecords = async () => {
// // //       setLoading(true);
// // //       setError("");
// // //       try {
// // //         const res = await axios.get(
// // //           `http://localhost:5000/api/pre-employment/site-records?site_id=${selectedSite}`,
// // //           {
// // //             headers: { Authorization: `Bearer ${token}` },
// // //           }
// // //         );
// // //         setRecords(res.data);
// // //       } catch (err) {
// // //         console.error("Error fetching records:", err);
// // //         setError(
// // //           err.response?.status === 403
// // //             ? "Forbidden: You don't have access to this site."
// // //             : "Failed to fetch records. Make sure your token is valid."
// // //         );
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchRecords();
// // //   }, [selectedSite, token]);

// // //   // Handle site selection
// // //   const handleSiteSelect = () => {
// // //     if (!selectedSite) {
// // //       setError("Please select a site");
// // //       return;
// // //     }
// // //     Cookies.set("siteId", selectedSite, { expires: 7, secure: true, sameSite: "Strict" });
// // //     setShowSiteSelection(false);
// // //   };

// // //   const handleEdit = (recordId) => {
// // //     console.log("Edit record:", recordId);
// // //     // Navigate to edit page or open modal
// // //   };

// // //   const handleView = (record) => {
// // //     setViewRecord(record);
// // //   };

// // //   const handleCloseView = () => {
// // //     setViewRecord(null);
// // //   };

// // //   return (
// // //     <div className="preemployment-container">
// // //       <h2>Pre-Employment Records</h2>

// // //       {/* Site Selection */}
// // //       {showSiteSelection && (
// // //         <div className="site-selector-card">
// // //           <p>Please select your site:</p>
// // //           {error && <p className="error">{error}</p>}
// // //           <select
// // //             value={selectedSite}
// // //             onChange={(e) => setSelectedSite(e.target.value)}
// // //           >
// // //             <option value="">-- Choose Site --</option>
// // //             {sites.map((site) => (
// // //               <option key={site.site_id} value={site.site_id}>
// // //                 {site.site_name}
// // //               </option>
// // //             ))}
// // //           </select>
// // //           <button onClick={handleSiteSelect}>Confirm Site</button>
// // //         </div>
// // //       )}

// // //       {/* Records Table */}
// // //       {!showSiteSelection && (
// // //         <>
// // //           {loading && <p>Loading records...</p>}
// // //           {error && <p className="error">{error}</p>}

// // //           {records.length > 0 && (
// // //             <table className="records-table">
// // //               <thead>
// // //                 <tr>
// // //                   <th>Laborer ID</th>
// // //                   <th>Name</th>
// // //                   <th>Certificate</th>
// // //                   <th>Status</th>
// // //                   <th>Active</th>
// // //                   <th>Actions</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {records.map((rec) => (
// // //                   <tr key={rec.id}>
// // //                     <td>{rec.laborer_id}</td>
// // //                     <td>{rec.name}</td>
// // //                     <td>{rec.certificate_serial_no}</td>
// // //                     <td>{rec.status}</td>
// // //                     <td>{rec.active}</td>
// // //                     <td>
// // //                       <button className="edit-btn" onClick={() => handleEdit(rec.id)}>
// // //                         Edit
// // //                       </button>
// // //                       <button className="view-btn" onClick={() => handleView(rec)}>
// // //                         View
// // //                       </button>
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           )}

// // //           {!loading && records.length === 0 && <p>No records found for this site.</p>}
// // //         </>
// // //       )}

// // //       {/* Modal for viewing full record */}
// // //       {viewRecord && (
// // //         <div className="modal-overlay" onClick={handleCloseView}>
// // //           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// // //             <h3>Details for {viewRecord.name}</h3>
// // //             <button className="close-btn" onClick={handleCloseView}>
// // //               X
// // //             </button>
// // //             <div className="record-details">
// // //               {Object.keys(viewRecord).map((key) => (
// // //                 <p key={key}>
// // //                   <strong>{key.replace(/_/g, " ")}:</strong>{" "}
// // //                   {typeof viewRecord[key] === "object" && viewRecord[key] !== null
// // //                     ? JSON.stringify(viewRecord[key])
// // //                     : viewRecord[key]}
// // //                 </p>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default PreEmployment;

// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";
// // // import Cookies from "js-cookie";
// // // import "./PreEmployment.css";

// // // function PreEmployment() {
// // //   const [sites, setSites] = useState([]);
// // //   const [selectedSite, setSelectedSite] = useState(Cookies.get("siteId") || "");
// // //   const [records, setRecords] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState("");
// // //   const [showSiteSelection, setShowSiteSelection] = useState(!Cookies.get("siteId"));
// // //   const [viewRecord, setViewRecord] = useState(null);
// // //   const [editRecord, setEditRecord] = useState({});

// // //   const token = localStorage.getItem("token");

// // //   // Fetch sites if needed
// // //   useEffect(() => {
// // //     if (!showSiteSelection) return;
// // //     const fetchSites = async () => {
// // //       try {
// // //         const res = await axios.get("http://localhost:5000/api/sites", {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         });
// // //         setSites(res.data);
// // //       } catch (err) {
// // //         console.error("Error fetching sites:", err);
// // //         setError("Failed to load sites");
// // //       }
// // //     };
// // //     fetchSites();
// // //   }, [showSiteSelection, token]);

// // //   // Fetch records
// // //   useEffect(() => {
// // //     if (!selectedSite) return;

// // //     const fetchRecords = async () => {
// // //       setLoading(true);
// // //       setError("");
// // //       try {
// // //         const res = await axios.get(
// // //           `http://localhost:5000/api/pre-employment/site-records?site_id=${selectedSite}`,
// // //           { headers: { Authorization: `Bearer ${token}` } }
// // //         );
// // //         setRecords(res.data);
// // //       } catch (err) {
// // //         console.error("Error fetching records:", err);
// // //         setError(
// // //           err.response?.status === 403
// // //             ? "Forbidden: You don't have access to this site."
// // //             : "Failed to fetch records. Make sure your token is valid."
// // //         );
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };
// // //     fetchRecords();
// // //   }, [selectedSite, token]);

// // //   // Site selection
// // //   const handleSiteSelect = () => {
// // //     if (!selectedSite) {
// // //       setError("Please select a site");
// // //       return;
// // //     }
// // //     Cookies.set("siteId", selectedSite, { expires: 7, secure: true, sameSite: "Strict" });
// // //     setShowSiteSelection(false);
// // //   };

// // //   // View record
// // //   const handleView = (record) => {
// // //     setViewRecord(record);
// // //     setEditRecord(record); // Initialize edit with current data
// // //   };
// // //   const handleCloseView = () => {
// // //     setViewRecord(null);
// // //   };

// // //   // Edit inputs in modal
// // //   const handleChange = (field, value) => {
// // //     setEditRecord((prev) => ({ ...prev, [field]: value }));
// // //   };

// // //   // Update record
// // //   const handleUpdate = async () => {
// // //     try {
// // //       const res = await axios.put(
// // //         `http://localhost:5000/api/pre-employment/update/${editRecord.id}`,
// // //         editRecord,
// // //         { headers: { Authorization: `Bearer ${token}` } }
// // //       );
// // //       // Update table
// // //       setRecords((prev) =>
// // //         prev.map((r) => (r.id === editRecord.id ? editRecord : r))
// // //       );
// // //       setViewRecord(null);
// // //       alert("Record updated successfully!");
// // //     } catch (err) {
// // //       console.error("Update error:", err);
// // //       alert("Failed to update record.");
// // //     }
// // //   };

// // //   const handleEdit = (recordId) => {
// // //     console.log("Edit record:", recordId);
// // //   };

// // //   return (
// // //     <div className="preemployment-container">
// // //       <h2>Pre-Employment Records</h2>

// // //       {/* Site Selection */}
// // //       {showSiteSelection && (
// // //         <div className="site-selector-card">
// // //           <p>Please select your site:</p>
// // //           {error && <p className="error">{error}</p>}
// // //           <select
// // //             value={selectedSite}
// // //             onChange={(e) => setSelectedSite(e.target.value)}
// // //           >
// // //             <option value="">-- Choose Site --</option>
// // //             {sites.map((site) => (
// // //               <option key={site.site_id} value={site.site_id}>
// // //                 {site.site_name}
// // //               </option>
// // //             ))}
// // //           </select>
// // //           <button onClick={handleSiteSelect}>Confirm Site</button>
// // //         </div>
// // //       )}

// // //       {/* Records Table */}
// // //       {!showSiteSelection && (
// // //         <>
// // //           {loading && <p>Loading records...</p>}
// // //           {error && <p className="error">{error}</p>}

// // //           {records.length > 0 && (
// // //             <table className="records-table">
// // //               <thead>
// // //                 <tr>
// // //                   <th>Laborer ID</th>
// // //                   <th>Name</th>
// // //                   <th>Certificate</th>
// // //                   <th>Status</th>
// // //                   <th>Active</th>
// // //                   <th>Actions</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {records.map((rec) => (
// // //                   <tr key={rec.id}>
// // //                     <td>{rec.laborer_id}</td>
// // //                     <td>{rec.name}</td>
// // //                     <td>{rec.certificate_serial_no}</td>
// // //                     <td>{rec.status}</td>
// // //                     <td>{rec.active}</td>
// // //                     <td>
// // //                       <button className="edit-btn" onClick={() => handleEdit(rec.id)}>
// // //                         Edit
// // //                       </button>
// // //                       <button className="view-btn" onClick={() => handleView(rec)}>
// // //                         View
// // //                       </button>
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           )}

// // //           {!loading && records.length === 0 && <p>No records found for this site.</p>}
// // //         </>
// // //       )}

// // //       {/* Modal for viewing & updating record */}
// // //       {viewRecord && (
// // //         <div className="modal-overlay" onClick={handleCloseView}>
// // //           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// // //             <h3>Details for {viewRecord.name}</h3>
// // //             <button className="close-btn" onClick={handleCloseView}>
// // //               X
// // //             </button>
// // //             <div className="record-details">
// // //               {Object.keys(editRecord).map((key) => {
// // //                 if (key === "id") return null;
// // //                 return (
// // //                   <div key={key} className="record-field">
// // //                     <label>{key.replace(/_/g, " ")}:</label>
// // //                     {typeof editRecord[key] === "object" && editRecord[key] !== null ? (
// // //                       <textarea
// // //                         value={JSON.stringify(editRecord[key])}
// // //                         onChange={(e) => handleChange(key, JSON.parse(e.target.value))}
// // //                       />
// // //                     ) : (
// // //                       <input
// // //                         type="text"
// // //                         value={editRecord[key] || ""}
// // //                         onChange={(e) => handleChange(key, e.target.value)}
// // //                       />
// // //                     )}
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //             <button className="update-btn" onClick={handleUpdate}>
// // //               Update
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default PreEmployment;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import Cookies from "js-cookie";
// // import "./PreEmployment.css";

// // function PreEmployment() {
// //   const [sites, setSites] = useState([]);
// //   const [selectedSite, setSelectedSite] = useState(Cookies.get("siteId") || "");
// //   const [records, setRecords] = useState([]);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState("");
// //   const [showSiteSelection, setShowSiteSelection] = useState(!Cookies.get("siteId"));
// //   const [viewRecord, setViewRecord] = useState(null);
// //   const [editRecord, setEditRecord] = useState({});

// //   const token = localStorage.getItem("token");

// //   // Fetch sites if needed
// //   useEffect(() => {
// //     if (!showSiteSelection) return;
// //     const fetchSites = async () => {
// //       try {
// //         const res = await axios.get("http://localhost:5000/api/sites", {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         setSites(res.data);
// //       } catch (err) {
// //         console.error("Error fetching sites:", err);
// //         setError("Failed to load sites");
// //       }
// //     };
// //     fetchSites();
// //   }, [showSiteSelection, token]);

// //   // Fetch records
// //   useEffect(() => {
// //     if (!selectedSite) return;

// //     const fetchRecords = async () => {
// //       setLoading(true);
// //       setError("");
// //       try {
// //         const res = await axios.get(
// //           `http://localhost:5000/api/pre-employment/site-records?site_id=${selectedSite}`,
// //           { headers: { Authorization: `Bearer ${token}` } }
// //         );
// //         setRecords(res.data);
// //       } catch (err) {
// //         console.error("Error fetching records:", err);
// //         setError(
// //           err.response?.status === 403
// //             ? "Forbidden: You don't have access to this site."
// //             : "Failed to fetch records. Make sure your token is valid."
// //         );
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchRecords();
// //   }, [selectedSite, token]);

// //   // Site selection
// //   const handleSiteSelect = () => {
// //     if (!selectedSite) {
// //       setError("Please select a site");
// //       return;
// //     }
// //     Cookies.set("siteId", selectedSite, { expires: 7, secure: true, sameSite: "Strict" });
// //     setShowSiteSelection(false);
// //   };

// //   // View record
// //   const handleView = (record) => {
// //     setViewRecord(record);
// //     setEditRecord(record); // Initialize edit with current data
// //   };
// //   const handleCloseView = () => {
// //     setViewRecord(null);
// //   };

// //   // Edit inputs in modal
// //   const handleChange = (field, value) => {
// //     setEditRecord((prev) => ({ ...prev, [field]: value }));
// //   };

// //   // Format dates before sending to backend
// //   const formatDateForMySQL = (isoDate) => {
// //     if (!isoDate) return null;
// //     const d = new Date(isoDate);
// //     const year = d.getFullYear();
// //     const month = String(d.getMonth() + 1).padStart(2, "0");
// //     const day = String(d.getDate()).padStart(2, "0");
// //     return `${year}-${month}-${day}`;
// //   };

// //   // Update record
// //   const handleUpdate = async () => {
// //     try {
// //       const payload = { ...editRecord };
// //       // Format dates for MySQL
// //       if (payload.date) payload.date = formatDateForMySQL(payload.date);
// //       if (payload.date_of_birth) payload.date_of_birth = formatDateForMySQL(payload.date_of_birth);

// //       const res = await axios.put(
// //         `http://localhost:5000/api/pre-employment/update/${editRecord.id}`,
// //         payload,
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );
// //       // Update table
// //       setRecords((prev) =>
// //         prev.map((r) => (r.id === editRecord.id ? editRecord : r))
// //       );
// //       setViewRecord(null);
// //       alert("Record updated successfully!");
// //     } catch (err) {
// //       console.error("Update error:", err);
// //       alert("Failed to update record.");
// //     }
// //   };

// //   return (
// //     <div className="preemployment-container">
// //       <h2>Pre-Employment Records</h2>

// //       {/* Site Selection */}
// //       {showSiteSelection && (
// //         <div className="site-selector-card">
// //           <p>Please select your site:</p>
// //           {error && <p className="error">{error}</p>}
// //           <select
// //             value={selectedSite}
// //             onChange={(e) => setSelectedSite(e.target.value)}
// //           >
// //             <option value="">-- Choose Site --</option>
// //             {sites.map((site) => (
// //               <option key={site.site_id} value={site.site_id}>
// //                 {site.site_name}
// //               </option>
// //             ))}
// //           </select>
// //           <button onClick={handleSiteSelect}>Confirm Site</button>
// //         </div>
// //       )}

// //       {/* Records Table */}
// //       {!showSiteSelection && (
// //         <>
// //           {loading && <p>Loading records...</p>}
// //           {error && <p className="error">{error}</p>}

// //           {records.length > 0 && (
// //             <table className="records-table">
// //               <thead>
// //                 <tr>
// //                   <th>Laborer ID</th>
// //                   <th>Name</th>
// //                   <th>Certificate</th>
// //                   <th>Status</th>
// //                   <th>Active</th>
// //                   <th>Actions</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {records.map((rec) => (
// //                   <tr key={rec.id}>
// //                     <td>{rec.laborer_id}</td>
// //                     <td>{rec.name}</td>
// //                     <td>{rec.certificate_serial_no}</td>
// //                     <td>{rec.status}</td>
// //                     <td>{rec.active}</td>
// //                     <td>
// //                       <button className="edit-btn" onClick={() => handleView(rec)}>
// //                         Edit / View
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           )}

// //           {!loading && records.length === 0 && <p>No records found for this site.</p>}
// //         </>
// //       )}

// //       {/* Modal for viewing & updating record */}
// //       {viewRecord && (
// //         <div className="modal-overlay" onClick={handleCloseView}>
// //           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// //             <h3>Details for {viewRecord.name}</h3>
// //             <button className="close-btn" onClick={handleCloseView}>
// //               X
// //             </button>
// //             <div className="record-details">
// //               {Object.keys(editRecord).map((key) => {
// //                 // Exclude these fields from editing
// //                 const excludeFields = ["id", "site_id", "created_at", "active"];
// //                 if (excludeFields.includes(key)) return null;

// //                 return (
// //                   <div key={key} className="record-field">
// //                     <label>{key.replace(/_/g, " ")}:</label>
// //                     {typeof editRecord[key] === "object" && editRecord[key] !== null ? (
// //                       <textarea
// //                         value={JSON.stringify(editRecord[key])}
// //                         onChange={(e) => handleChange(key, JSON.parse(e.target.value))}
// //                       />
// //                     ) : (
// //                       <input
// //                         type="text"
// //                         value={editRecord[key] || ""}
// //                         onChange={(e) => handleChange(key, e.target.value)}
// //                       />
// //                     )}
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //             <button className="update-btn" onClick={handleUpdate}>
// //               Update
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default PreEmployment;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import "./PreEmployment.css";

// function PreEmployment() {
//   const [sites, setSites] = useState([]);
//   const [selectedSite, setSelectedSite] = useState(Cookies.get("siteId") || "");
//   const [records, setRecords] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showSiteSelection, setShowSiteSelection] = useState(!Cookies.get("siteId"));
//   const [viewRecord, setViewRecord] = useState(null);
//   const [editRecord, setEditRecord] = useState({});

//   const token = localStorage.getItem("token");

//   // Fetch sites
//   useEffect(() => {
//     if (!showSiteSelection) return;
//     const fetchSites = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/sites", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setSites(res.data);
//       } catch (err) {
//         console.error("Error fetching sites:", err);
//         setError("Failed to load sites");
//       }
//     };
//     fetchSites();
//   }, [showSiteSelection, token]);

//   // Fetch records
//   useEffect(() => {
//     if (!selectedSite) return;

//     const fetchRecords = async () => {
//       setLoading(true);
//       setError("");
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/pre-employment/site-records?site_id=${selectedSite}`,
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setRecords(res.data);
//       } catch (err) {
//         console.error("Error fetching records:", err);
//         setError(
//           err.response?.status === 403
//             ? "Forbidden: You don't have access to this site."
//             : "Failed to fetch records. Make sure your token is valid."
//         );
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRecords();
//   }, [selectedSite, token]);

//   // Site selection
//   const handleSiteSelect = () => {
//     if (!selectedSite) {
//       setError("Please select a site");
//       return;
//     }
//     Cookies.set("siteId", selectedSite, { expires: 7, secure: true, sameSite: "Strict" });
//     setShowSiteSelection(false);
//   };

//   // View/Edit record
//   const handleView = (record) => {
//     setViewRecord(record);
//     setEditRecord(record);
//   };
//   const handleCloseView = () => setViewRecord(null);

//   const handleChange = (field, value) => {
//     setEditRecord((prev) => ({ ...prev, [field]: value }));
//   };

//   // Format dates for MySQL
//   const formatDateForMySQL = (isoDate) => {
//     if (!isoDate) return null;
//     const d = new Date(isoDate);
//     const year = d.getFullYear();
//     const month = String(d.getMonth() + 1).padStart(2, "0");
//     const day = String(d.getDate()).padStart(2, "0");
//     return `${year}-${month}-${day}`;
//   };

//   // Update record
//   const handleUpdate = async () => {
//     try {
//       const payload = { ...editRecord };
//       if (payload.date) payload.date = formatDateForMySQL(payload.date);
//       if (payload.date_of_birth) payload.date_of_birth = formatDateForMySQL(payload.date_of_birth);

//       await axios.put(
//         `http://localhost:5000/api/pre-employment/update/${editRecord.id}`,
//         payload,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       setRecords((prev) =>
//         prev.map((r) => (r.id === editRecord.id ? editRecord : r))
//       );
//       setViewRecord(null);
//       alert("Record updated successfully!");
//     } catch (err) {
//       console.error("Update error:", err);
//       alert("Failed to update record.");
//     }
//   };

//   return (
//     <div className="preemployment-container">
//       <h2>Pre-Employment Records</h2>

//       {/* Site Selection */}
//       {showSiteSelection && (
//         <div className="site-selector-card">
//           <p>Please select your site:</p>
//           {error && <p className="error">{error}</p>}
//           <select
//             value={selectedSite}
//             onChange={(e) => setSelectedSite(e.target.value)}
//           >
//             <option value="">-- Choose Site --</option>
//             {sites.map((site) => (
//               <option key={site.site_id} value={site.site_id}>
//                 {site.site_name}
//               </option>
//             ))}
//           </select>
//           <button onClick={handleSiteSelect}>Confirm Site</button>
//         </div>
//       )}

//       {/* Records Table */}
//       {!showSiteSelection && (
//         <>
//           {loading && <p>Loading records...</p>}
//           {error && <p className="error">{error}</p>}

//           {records.length > 0 && (
//             <table className="records-table">
//               <thead>
//                 <tr>
//                   <th>Laborer ID</th>
//                   <th>Name</th>
//                   <th>Certificate</th>
//                   <th>Status</th>
//                   <th>Active</th>
//                   <th>Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {records.map((rec) => (
//                   <tr key={rec.id}>
//                     <td>{rec.laborer_id}</td>
//                     <td>{rec.name}</td>
//                     <td>{rec.certificate_serial_no}</td>
//                     <td>{rec.status}</td>
//                     <td>{rec.active}</td>
//                     <td>
//                       <button className="edit-btn" onClick={() => handleView(rec)}>
//                         Edit / View
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}

//           {!loading && records.length === 0 && <p>No records found for this site.</p>}
//         </>
//       )}

//       {/* Modal for viewing/updating */}
//       {viewRecord && (
//         <div className="modal-overlay-preemployement" onClick={handleCloseView}>
//           <div className="modal-content-preemployement" onClick={(e) => e.stopPropagation()}>
//             <h3>Details for {viewRecord.name}</h3>
//             <button className="close-btn" onClick={handleCloseView}>X</button>
            
//             <div className="record-grid">
//               {Object.keys(editRecord).map((key) => {
//                 const excludeFields = ["id", "site_id", "created_at", "active"];
//                 if (excludeFields.includes(key)) return null;

//                 return (
//                   <div key={key} className="record-field">
//                     <label>{key.replace(/_/g, " ")}:</label>
//                     {key === "status" ? (
//                       <select
//                         value={editRecord[key]}
//                         onChange={(e) => handleChange(key, e.target.value)}
//                       >
//                         <option value="approve">Approve</option>
//                         <option value="reject">Reject</option>
//                         <option value="pending">Pending</option>
//                       </select>
//                     ) : typeof editRecord[key] === "object" && editRecord[key] !== null ? (
//                       <textarea
//                         value={JSON.stringify(editRecord[key])}
//                         onChange={(e) => handleChange(key, JSON.parse(e.target.value))}
//                       />
//                     ) : (
//                       <input
//                         type="text"
//                         value={editRecord[key] || ""}
//                         onChange={(e) => handleChange(key, e.target.value)}
//                       />
//                     )}
//                   </div>
//                 );
//               })}
//             </div>

//             <button className="update-btn" onClick={handleUpdate}>Update</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PreEmployment;

import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./PreEmployment.css";

function PreEmployment() {
  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState(Cookies.get("siteId") || "");
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showSiteSelection, setShowSiteSelection] = useState(!Cookies.get("siteId"));
  const [viewRecord, setViewRecord] = useState(null);
  const [editRecord, setEditRecord] = useState({});
  const token = localStorage.getItem("token");

  // Fetch sites
  useEffect(() => {
    if (!showSiteSelection) return;
    const fetchSites = async () => {
      try {
        const res = await axios.get("https://healthcop-website-backend-1-vm93.onrender.com/api/sites", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSites(res.data);
      } catch (err) {
        console.error("Error fetching sites:", err);
        setError("Failed to load sites");
      }
    };
    fetchSites();
  }, [showSiteSelection, token]);

  // Fetch records
  useEffect(() => {
    if (!selectedSite) return;
    const fetchRecords = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(
          `https://healthcop-website-backend-1-vm93.onrender.com/api/pre-employment/site-records?site_id=${selectedSite}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setRecords(res.data);
      } catch (err) {
        console.error("Error fetching records:", err);
        setError(
          err.response?.status === 403
            ? "Forbidden: You don't have access to this site."
            : "Failed to fetch records. Make sure your token is valid."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchRecords();
  }, [selectedSite, token]);

  // Site selection
  const handleSiteSelect = () => {
    if (!selectedSite) {
      setError("Please select a site");
      return;
    }
    Cookies.set("siteId", selectedSite, { expires: 7, secure: true, sameSite: "Strict" });
    setShowSiteSelection(false);
  };

  // View/Edit record
  const handleView = (record) => {
    setViewRecord(record);
    setEditRecord(record);
  };

  const handleCloseView = () => setViewRecord(null);

  const handleChange = (field, value) => {
    setEditRecord((prev) => ({ ...prev, [field]: value }));
  };

  // Format dates for MySQL
  const formatDateForMySQL = (isoDate) => {
    if (!isoDate) return null;
    const d = new Date(isoDate);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Update record
  const handleUpdate = async () => {
    try {
      const payload = { ...editRecord };
      if (payload.date) payload.date = formatDateForMySQL(payload.date);
      if (payload.date_of_birth) payload.date_of_birth = formatDateForMySQL(payload.date_of_birth);
      await axios.put(
        `https://healthcop-website-backend-1-vm93.onrender.com/api/pre-employment/update/${editRecord.id}`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRecords((prev) =>
        prev.map((r) => (r.id === editRecord.id ? editRecord : r))
      );
      setViewRecord(null);
      alert("Record updated successfully!");
    } catch (err) {
      console.error("Update error:", err);
      alert("Failed to update record.");
    }
  };

  // Approve record
  const handleApprove = async (recordId) => {
    try {
      await axios.put(
        `https://healthcop-website-backend-1-vm93.onrender.com/api/pre-employment/update/${recordId}`,
        { status: "approve" },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRecords((prev) =>
        prev.map((r) =>
          r.id === recordId ? { ...r, status: "approve" } : r
        )
      );
      alert("Record approved successfully!");
    } catch (err) {
      console.error("Approve error:", err);
      alert("Failed to approve record.");
    }
  };

  return (
    <div className="preemployment-container">
      <h2>Pre-Employment Records</h2>
      {/* Site Selection */}
      {showSiteSelection && (
        <div className="site-selector-card">
          <p>Please select your site:</p>
          {error && <p className="error">{error}</p>}
          <select
            value={selectedSite}
            onChange={(e) => setSelectedSite(e.target.value)}
          >
            <option value="">-- Choose Site --</option>
            {sites.map((site) => (
              <option key={site.site_id} value={site.site_id}>
                {site.site_name}
              </option>
            ))}
          </select>
          <button onClick={handleSiteSelect}>Confirm Site</button>
        </div>
      )}
      {/* Records Table */}
      {!showSiteSelection && (
        <>
          {loading && <p>Loading records...</p>}
          {error && <p className="error">{error}</p>}
          {records.length > 0 && (
            <table className="records-table">
              <thead>
                <tr>
                  <th>Laborer ID</th>
                  <th>Name</th>
                  <th>Certificate</th>
                  <th>Status</th>
                  <th>Active</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {records.map((rec) => (
                  <tr key={rec.id}>
                    <td>{rec.laborer_id}</td>
                    <td>{rec.name}</td>
                    <td>{rec.certificate_serial_no}</td>
                    <td>{rec.status}</td>
                    <td>{rec.active}</td>
                    <td>
                      <button className="edit-btn" onClick={() => handleView(rec)}>
                        Edit / View
                      </button>
                      <button
                        className="approve-btn"
                        onClick={() => handleApprove(rec.id)}
                        disabled={rec.status === "approve"}
                      >
                        Approve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {!loading && records.length === 0 && <p>No records found for this site.</p>}
        </>
      )}
      {/* Modal for viewing/updating */}
      {viewRecord && (
        <div className="modal-overlay-preemployement" onClick={handleCloseView}>
          <div className="modal-content-preemployement" onClick={(e) => e.stopPropagation()}>
            <h3>Details for {viewRecord.name}</h3>
            <button className="close-btn" onClick={handleCloseView}>X</button>
            <div className="record-grid">
              {Object.keys(editRecord).map((key) => {
                const excludeFields = ["id", "site_id", "created_at", "active"];
                if (excludeFields.includes(key)) return null;
                return (
                  <div key={key} className="record-field">
                    <label>{key.replace(/_/g, " ")}:</label>
                    {key === "status" ? (
                      <select
                        value={editRecord[key]}
                        onChange={(e) => handleChange(key, e.target.value)}
                      >
                        <option value="approve">Approve</option>
                        <option value="reject">Reject</option>
                        <option value="pending">Pending</option>
                      </select>
                    ) : typeof editRecord[key] === "object" && editRecord[key] !== null ? (
                      <textarea
                        value={JSON.stringify(editRecord[key])}
                        onChange={(e) => handleChange(key, JSON.parse(e.target.value))}
                      />
                    ) : (
                      <input
                        type="text"
                        value={editRecord[key] || ""}
                        onChange={(e) => handleChange(key, e.target.value)}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <button className="update-btn" onClick={handleUpdate}>Update</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PreEmployment;