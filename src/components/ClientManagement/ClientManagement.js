
// // // import React, { useState } from "react";
// // // import "./ClientManagement.css";

// // // function ClientManagement({ onBack }) { // Add onBack prop
// // //   const [clientData, setClientData] = useState({
// // //     clientName: "",
// // //     totalSites: "",
// // //     sites: [],
// // //     officers: [{ name: "", position: "", phone: "", email: "" }],
// // //   });

// // //   const initializeSite = () => ({
// // //     location: "",
// // //     deliverables: [],
// // //     tentativeLabours: "",
// // //     labourTurnover: "",
// // //     workOrder: null,
// // //   });

// // //   const handleClientChange = (e) => {
// // //     const { name, value } = e.target;
// // //     if (name === "totalSites") {
// // //       const numSites = parseInt(value) || 0;
// // //       setClientData((prev) => ({
// // //         ...prev,
// // //         totalSites: value,
// // //         sites: Array.from({ length: numSites }, () => initializeSite()),
// // //       }));
// // //     } else {
// // //       setClientData((prev) => ({ ...prev, [name]: value }));
// // //     }
// // //   };

// // //   const handleSiteChange = (e, siteIndex) => {
// // //     const { name, value, files } = e.target;
// // //     setClientData((prev) => {
// // //       const updatedSites = [...prev.sites];
// // //       if (name === "workOrder") {
// // //         updatedSites[siteIndex] = { ...updatedSites[siteIndex], workOrder: files[0] };
// // //       } else {
// // //         updatedSites[siteIndex] = { ...updatedSites[siteIndex], [name]: value };
// // //       }
// // //       return { ...prev, sites: updatedSites };
// // //     });
// // //   };

// // //   const handleDeliverablesChange = (e, siteIndex) => {
// // //     const { value, checked } = e.target;
// // //     setClientData((prev) => {
// // //       const updatedSites = [...prev.sites];
// // //       updatedSites[siteIndex] = {
// // //         ...updatedSites[siteIndex],
// // //         deliverables: checked
// // //           ? [...updatedSites[siteIndex].deliverables, value]
// // //           : updatedSites[siteIndex].deliverables.filter((item) => item !== value),
// // //       };
// // //       return { ...prev, sites: updatedSites };
// // //     });
// // //   };

// // //   const handleOfficerChange = (e, index) => {
// // //     const { name, value } = e.target;
// // //     const field = name.split(".")[1];
// // //     const updatedOfficers = [...clientData.officers];
// // //     updatedOfficers[index][field] = value;
// // //     setClientData((prev) => ({ ...prev, officers: updatedOfficers }));
// // //   };

// // //   const addOfficer = () => {
// // //     setClientData((prev) => ({
// // //       ...prev,
// // //       officers: [...prev.officers, { name: "", position: "", phone: "", email: "" }],
// // //     }));
// // //   };

// // //   const removeOfficer = (index) => {
// // //     setClientData((prev) => ({
// // //       ...prev,
// // //       officers: prev.officers.filter((_, i) => i !== index),
// // //     }));
// // //   };

// // //   const handleClientSubmit = async (e) => {
// // //     e.preventDefault();
// // //     const formData = new FormData();
// // //     formData.append("clientName", clientData.clientName);
// // //     formData.append("totalSites", clientData.totalSites);
// // //     formData.append("officers", JSON.stringify(clientData.officers));
// // //     clientData.sites.forEach((site, index) => {
// // //       formData.append(`site_${index}_location`, site.location || "N/A");
// // //       formData.append(`site_${index}_deliverables`, JSON.stringify(site.deliverables));
// // //       formData.append(`site_${index}_tentativeLabours`, site.tentativeLabours);
// // //       formData.append(`site_${index}_labourTurnover`, site.labourTurnover);
// // //       if (site.workOrder) {
// // //         formData.append(`site_${index}_workOrder`, site.workOrder);
// // //       }
// // //     });

// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       if (!token) {
// // //         throw new Error("Please log in to add a client.");
// // //       }

// // //       const response = await fetch("http://localhost:5000/api/clients", {
// // //         method: "POST",
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //         body: formData,
// // //       });

// // //       const data = await response.json();
// // //       if (!response.ok) {
// // //         throw new Error(data.message || "Failed to add client");
// // //       }

// // //       console.log("Client added:", data);
// // //       alert("Client added successfully!");
// // //       setClientData({
// // //         clientName: "",
// // //         totalSites: "",
// // //         sites: [],
// // //         officers: [{ name: "", position: "", phone: "", email: "" }],
// // //       });
// // //       onBack(); // Navigate back to main page after successful submission
// // //     } catch (err) {
// // //       console.error("Error adding Client:", err);
// // //       alert(`Failed to add Client: ${err.message}`);
// // //     }
// // //   };

// // //   return (
// // //     <div className="clientmanagement-container">
// // //       <button
// // //         type="button"
// // //         className="clientmanagement-back-btn"
// // //         onClick={onBack} // Use onBack prop instead of navigate
// // //       >
// // //         Back
// // //       </button>
// // //       <form onSubmit={handleClientSubmit} className="clientmanagement-management-form">
// // //         <h3>Add Client</h3>
// // //         <div className="clientmanagement-form-section">
// // //           <h4>Client Details</h4>
// // //           <div className="clientmanagement-form-grid">
// // //             <div className="clientmanagement-form-group">
// // //               <label>Client Name</label>
// // //               <input
// // //                 type="text"
// // //                 name="clientName"
// // //                 value={clientData.clientName}
// // //                 onChange={handleClientChange}
// // //                 required
// // //               />
// // //             </div>
// // //             <div className="clientmanagement-form-group">
// // //               <label>Total Number of Sites</label>
// // //               <input
// // //                 type="number"
// // //                 name="totalSites"
// // //                 value={clientData.totalSites}
// // //                 onChange={handleClientChange}
// // //                 min="0"
// // //                 required
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {clientData.sites.map((site, siteIndex) => (
// // //           <div key={siteIndex} className="clientmanagement-form-section">
// // //             <h4>Site {siteIndex + 1} Details</h4>
// // //             <div className="clientmanagement-form-grid">
// // //               <div className="clientmanagement-form-group">
// // //                 <label>Location</label>
// // //                 <input
// // //                   type="text"
// // //                   name="location"
// // //                   value={site.location}
// // //                   onChange={(e) => handleSiteChange(e, siteIndex)}
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="clientmanagement-form-group clientmanagement-checkbox-group">
// // //                 <label>Deliverables</label>
// // //                 <div className="clientmanagement-checkbox-container">
// // //                   <label>
// // //                     <input
// // //                       type="checkbox"
// // //                       value="Doctor Visits"
// // //                       checked={site.deliverables.includes("Doctor Visits")}
// // //                       onChange={(e) => handleDeliverablesChange(e, siteIndex)}
// // //                     />
// // //                     Doctor Visits
// // //                   </label>
// // //                   <label>
// // //                     <input
// // //                       type="checkbox"
// // //                       value="Nurse Visits"
// // //                       checked={site.deliverables.includes("Nurse Visits")}
// // //                       onChange={(e) => handleDeliverablesChange(e, siteIndex)}
// // //                     />
// // //                     Nurse Visits
// // //                   </label>
// // //                 </div>
// // //               </div>
// // //               <div className="clientmanagement-form-group">
// // //                 <label>Tentative Labours</label>
// // //                 <input
// // //                   type="number"
// // //                   name="tentativeLabours"
// // //                   value={site.tentativeLabours}
// // //                   onChange={(e) => handleSiteChange(e, siteIndex)}
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="clientmanagement-form-group">
// // //                 <label>Labour Turnover per Site</label>
// // //                 <input
// // //                   type="number"
// // //                   name="labourTurnover"
// // //                   value={site.labourTurnover}
// // //                   onChange={(e) => handleSiteChange(e, siteIndex)}
// // //                   required
// // //                 />
// // //               </div>
// // //               <div className="clientmanagement-form-group">
// // //                 <label>Work Order</label>
// // //                 <input
// // //                   type="file"
// // //                   name="workOrder"
// // //                   onChange={(e) => handleSiteChange(e, siteIndex)}
// // //                   accept=".pdf"
// // //                 />
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ))}

// // //         <div className="clientmanagement-form-section">
// // //           <h4>Officers Assigned</h4>
// // //           {clientData.officers.map((officer, index) => (
// // //             <div key={index} className="clientmanagement-officer-group">
// // //               <div className="clientmanagement-form-grid">
// // //                 <div className="clientmanagement-form-group">
// // //                   <label>Officer Name</label>
// // //                   <input
// // //                     type="text"
// // //                     name={`officer.name.${index}`}
// // //                     value={officer.name}
// // //                     onChange={(e) => handleOfficerChange(e, index)}
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <div className="clientmanagement-form-group">
// // //                   <label>Position</label>
// // //                   <input
// // //                     type="text"
// // //                     name={`officer.position.${index}`}
// // //                     value={officer.position}
// // //                     onChange={(e) => handleOfficerChange(e, index)}
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <div className="clientmanagement-form-group">
// // //                   <label>Phone Number</label>
// // //                   <input
// // //                     type="tel"
// // //                     name={`officer.phone.${index}`}
// // //                     value={officer.phone}
// // //                     onChange={(e) => handleOfficerChange(e, index)}
// // //                     required
// // //                   />
// // //                 </div>
// // //                 <div className="clientmanagement-form-group">
// // //                   <label>Official Email ID</label>
// // //                   <input
// // //                     type="email"
// // //                     name={`officer.email.${index}`}
// // //                     value={officer.email}
// // //                     onChange={(e) => handleOfficerChange(e, index)}
// // //                     required
// // //                   />
// // //                 </div>
// // //               </div>
// // //               {clientData.officers.length > 1 && (
// // //                 <button
// // //                   type="button"
// // //                   className="clientmanagement-remove-officer-btn"
// // //                   onClick={() => removeOfficer(index)}
// // //                 >
// // //                   Remove Officer
// // //                 </button>
// // //               )}
// // //             </div>
// // //           ))}
// // //           <button
// // //             type="button"
// // //             className="clientmanagement-add-officer-btn"
// // //             onClick={addOfficer}
// // //           >
// // //             Add Officer
// // //           </button>
// // //         </div>
// // //         <button type="submit" className="clientmanagement-submit-btn">
// // //           Submit
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default ClientManagement;

// // import React, { useState } from "react";
// // import "./ClientManagement.css";

// // function ClientManagement({ onBack }) {
// //   const [clientData, setClientData] = useState({
// //     clientName: "",
// //     totalSites: "",
// //     sites: [],
// //     officers: [{ name: "", position: "", phone: "", email: "" }],
// //   });

// //   const initializeSite = () => ({
// //     name: "", // Added site name field
// //     location: "",
// //     deliverables: [],
// //     tentativeLabours: "",
// //     labourTurnover: "",
// //     workOrder: null,
// //   });

// //   const handleClientChange = (e) => {
// //     const { name, value } = e.target;
// //     if (name === "totalSites") {
// //       const numSites = parseInt(value) || 0;
// //       setClientData((prev) => ({
// //         ...prev,
// //         totalSites: value,
// //         sites: Array.from({ length: numSites }, () => initializeSite()),
// //       }));
// //     } else {
// //       setClientData((prev) => ({ ...prev, [name]: value }));
// //     }
// //   };

// //   const handleSiteChange = (e, siteIndex) => {
// //     const { name, value, files } = e.target;
// //     setClientData((prev) => {
// //       const updatedSites = [...prev.sites];
// //       if (name === "workOrder") {
// //         updatedSites[siteIndex] = { ...updatedSites[siteIndex], workOrder: files[0] };
// //       } else {
// //         updatedSites[siteIndex] = { ...updatedSites[siteIndex], [name]: value };
// //       }
// //       return { ...prev, sites: updatedSites };
// //     });
// //   };

// //   const handleDeliverablesChange = (e, siteIndex) => {
// //     const { value, checked } = e.target;
// //     setClientData((prev) => {
// //       const updatedSites = [...prev.sites];
// //       updatedSites[siteIndex] = {
// //         ...updatedSites[siteIndex],
// //         deliverables: checked
// //           ? [...updatedSites[siteIndex].deliverables, value]
// //           : updatedSites[siteIndex].deliverables.filter((item) => item !== value),
// //       };
// //       return { ...prev, sites: updatedSites };
// //     });
// //   };

// //   const handleOfficerChange = (e, index) => {
// //     const { name, value } = e.target;
// //     const field = name.split(".")[1];
// //     const updatedOfficers = [...clientData.officers];
// //     updatedOfficers[index][field] = value;
// //     setClientData((prev) => ({ ...prev, officers: updatedOfficers }));
// //   };

// //   const addOfficer = () => {
// //     setClientData((prev) => ({
// //       ...prev,
// //       officers: [...prev.officers, { name: "", position: "", phone: "", email: "" }],
// //     }));
// //   };

// //   const removeOfficer = (index) => {
// //     setClientData((prev) => ({
// //       ...prev,
// //       officers: prev.officers.filter((_, i) => i !== index),
// //     }));
// //   };

// //   const handleClientSubmit = async (e) => {
// //   e.preventDefault();

// //   // Validate clientName and totalSites
// //   if (!clientData.clientName.trim()) {
// //     alert("Client Name is required");
// //     return;
// //   }
// //   if (!clientData.totalSites || isNaN(clientData.totalSites) || parseInt(clientData.totalSites) < 0) {
// //     alert("Total Number of Sites must be a valid non-negative number");
// //     return;
// //   }

// //   const formData = new FormData();
// //   formData.append("clientName", clientData.clientName);
// // formData.append("totalSites", clientData.totalSites);
// //   formData.append("officers", JSON.stringify(clientData.officers));
// //   clientData.sites.forEach((site, index) => {
// //     formData.append(`site_${index}_name`, site.name || "N/A");
// //     formData.append(`site_${index}_location`, site.location || "N/A");
// //     formData.append(`site_${index}_deliverables`, JSON.stringify(site.deliverables));
// //     formData.append(`site_${index}_tentativeLabours`, site.tentativeLabours);
// //     formData.append(`site_${index}_labourTurnover`, site.labourTurnover);
// //     if (site.workOrder) {
// //       formData.append(`site_${index}_workOrder`, site.workOrder);
// //     }
// //   });

// //   try {
// //     const token = localStorage.getItem("token");
// //     if (!token) {
// //       throw new Error("Please log in to add a client.");
// //     }

// //     console.log("FormData:", Object.fromEntries(formData)); // Debug
// //     const response = await fetch("http://localhost:5000/api/clients", {
// //       method: "POST",
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //       body: formData,
// //     });

// //     const data = await response.json();
// //     if (response.status === 401) {
// //       localStorage.removeItem("token");
// //       alert("Session expired. Please log in again.");
// //       window.location.href = "/login";
// //       return;
// //     }

// //     if (!response.ok) {
// //       throw new Error(data.message || "Failed to add client");
// //     }

// //     console.log("Client added:", data);
// //     alert("Client added successfully!");
// //     setClientData({
// //       clientName: "",
// //       totalSites: "",
// //       sites: [],
// //       officers: [{ name: "", position: "", phone: "", email: "" }],
// //     });
// //     onBack();
// //   } catch (err) {
// //     console.error("Error adding Client:", err);
// //     alert(`Failed to add Client: ${err.message}`);
// //   }
// // };

// //   return (
// //     <div className="clientmanagement-container">
// //       <button
// //         type="button"
// //         className="clientmanagement-back-btn"
// //         onClick={onBack}
// //       >
// //         Back
// //       </button>
// //       <form onSubmit={handleClientSubmit} className="clientmanagement-management-form">
// //         <h3>Add Client</h3>
// //         <div className="clientmanagement-form-section">
// //           <h4>Client Details</h4>
// //           <div className="clientmanagement-form-grid">
// //             <div className="clientmanagement-form-group">
// //               <label>Client Name</label>
// //               <input
// //                 type="text"
// //                 name="clientName"
// //                 value={clientData.clientName}
// //                 onChange={handleClientChange}
// //                 required
// //               />
// //             </div>
// //             <div className="clientmanagement-form-group">
// //               <label>Total Number of Sites</label>
// //               <input
// //                 type="number"
// //                 name="totalSites"
// //                 value={clientData.totalSites}
// //                 onChange={handleClientChange}
// //                 min="0"
// //                 required
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         {clientData.sites.map((site, siteIndex) => (
// //           <div key={siteIndex} className="clientmanagement-form-section">
// //             <h4>Site {siteIndex + 1} Details</h4>
// //             <div className="clientmanagement-form-grid">
// //               <div className="clientmanagement-form-group">
// //                 <label>Site Name</label>
// //                 <input
// //                   type="text"
// //                   name="name"
// //                   value={site.name}
// //                   onChange={(e) => handleSiteChange(e, siteIndex)}
// //                   required
// //                 />
// //               </div>
// //               <div className="clientmanagement-form-group">
// //                 <label>Location</label>
// //                 <input
// //                   type="text"
// //                   name="location"
// //                   value={site.location}
// //                   onChange={(e) => handleSiteChange(e, siteIndex)}
// //                   required
// //                 />
// //               </div>
// //               <div className="clientmanagement-form-group clientmanagement-checkbox-group">
// //                 <label>Deliverables</label>
// //                 <div className="clientmanagement-checkbox-container">
// //                   <label>
// //                     <input
// //                       type="checkbox"
// //                       value="Doctor Visits"
// //                       checked={site.deliverables.includes("Doctor Visits")}
// //                       onChange={(e) => handleDeliverablesChange(e, siteIndex)}
// //                     />
// //                     Doctor Visits
// //                   </label>
// //                   <label>
// //                     <input
// //                       type="checkbox"
// //                       value="Nurse Visits"
// //                       checked={site.deliverables.includes("Nurse Visits")}
// //                       onChange={(e) => handleDeliverablesChange(e, siteIndex)}
// //                     />
// //                     Nurse Visits
// //                   </label>
// //                 </div>
// //               </div>
// //               <div className="clientmanagement-form-group">
// //                 <label>Tentative Labours</label>
// //                 <input
// //                   type="number"
// //                   name="tentativeLabours"
// //                   value={site.tentativeLabours}
// //                   onChange={(e) => handleSiteChange(e, siteIndex)}
// //                   required
// //                 />
// //               </div>
// //               <div className="clientmanagement-form-group">
// //                 <label>Labour Turnover per Site</label>
// //                 <input
// //                   type="number"
// //                   name="labourTurnover"
// //                   value={site.labourTurnover}
// //                   onChange={(e) => handleSiteChange(e, siteIndex)}
// //                   required
// //                 />
// //               </div>
// //               <div className="clientmanagement-form-group">
// //                 <label>Work Order</label>
// //                 <input
// //                   type="file"
// //                   name="workOrder"
// //                   onChange={(e) => handleSiteChange(e, siteIndex)}
// //                   accept=".pdf"
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         ))}

// //         <div className="clientmanagement-form-section">
// //           <h4>Officers Assigned</h4>
// //           {clientData.officers.map((officer, index) => (
// //             <div key={index} className="clientmanagement-officer-group">
// //               <div className="clientmanagement-form-grid">
// //                 <div className="clientmanagement-form-group">
// //                   <label>Officer Name</label>
// //                   <input
// //                     type="text"
// //                     name={`officer.name.${index}`}
// //                     value={officer.name}
// //                     onChange={(e) => handleOfficerChange(e, index)}
// //                     required
// //                   />
// //                 </div>
// //                 <div className="clientmanagement-form-group">
// //                   <label>Position</label>
// //                   <input
// //                     type="text"
// //                     name={`officer.position.${index}`}
// //                     value={officer.position}
// //                     onChange={(e) => handleOfficerChange(e, index)}
// //                     required
// //                   />
// //                 </div>
// //                 <div className="clientmanagement-form-group">
// //                   <label>Phone Number</label>
// //                   <input
// //                     type="tel"
// //                     name={`officer.phone.${index}`}
// //                     value={officer.phone}
// //                     onChange={(e) => handleOfficerChange(e, index)}
// //                     required
// //                   />
// //                 </div>
// //                 <div className="clientmanagement-form-group">
// //                   <label>Official Email ID</label>
// //                   <input
// //                     type="email"
// //                     name={`officer.email.${index}`}
// //                     value={officer.email}
// //                     onChange={(e) => handleOfficerChange(e, index)}
// //                     required
// //                   />
// //                 </div>
// //               </div>
// //               {clientData.officers.length > 1 && (
// //                 <button
// //                   type="button"
// //                   className="clientmanagement-remove-officer-btn"
// //                   onClick={() => removeOfficer(index)}
// //                 >
// //                   Remove Officer
// //                 </button>
// //               )}
// //             </div>
// //           ))}
// //           <button
// //             type="button"
// //             className="clientmanagement-add-officer-btn"
// //             onClick={addOfficer}
// //           >
// //             Add Officer
// //           </button>
// //         </div>
// //         <button type="submit" className="clientmanagement-submit-btn">
// //           Submit
// //         </button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default ClientManagement;


// import React, { useState, useEffect } from "react";
// import "./ClientManagement.css";

// function ClientManagement({ onBack, editClient }) {
//   const [clientData, setClientData] = useState({
//     clientName: "",
//     totalSites: "",
//     sites: [],
//     officers: [{ name: "", position: "", phone: "", email: "" }],
//   });

//   // Initialize form with editClient data if provided
//   useEffect(() => {
//     if (editClient) {
//       setClientData({
//         clientName: editClient.client_name || "",
//         totalSites: editClient.total_sites || "",
//         sites: editClient.sites.map((site) => ({
//           name: site.site_name || "",
//           location: site.location || "",
//           deliverables: site.deliverables || [],
//           tentativeLabours: site.tentative_labours || "",
//           labourTurnover: site.labour_turnover || "",
//           workOrder: site.work_order || null, // Keep as string (path) for existing files
//         })),
//         officers: editClient.officers.map((officer) => ({
//           name: officer.name || "",
//           position: officer.position || "",
//           phone: officer.phone || "",
//           email: officer.email || "",
//         })),
//       });
//     }
//   }, [editClient]);

//   const initializeSite = () => ({
//     name: "",
//     location: "",
//     deliverables: [],
//     tentativeLabours: "",
//     labourTurnover: "",
//     workOrder: null,
//   });

//   const handleClientChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "totalSites") {
//       const numSites = parseInt(value) || 0;
//       setClientData((prev) => ({
//         ...prev,
//         totalSites: value,
//         sites: Array.from({ length: numSites }, (_, i) =>
//           prev.sites[i] || initializeSite()
//         ),
//       }));
//     } else {
//       setClientData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSiteChange = (e, siteIndex) => {
//     const { name, value, files } = e.target;
//     setClientData((prev) => {
//       const updatedSites = [...prev.sites];
//       if (name === "workOrder") {
//         updatedSites[siteIndex] = { ...updatedSites[siteIndex], workOrder: files[0] || null };
//       } else {
//         updatedSites[siteIndex] = { ...updatedSites[siteIndex], [name]: value };
//       }
//       return { ...prev, sites: updatedSites };
//     });
//   };

//   const handleDeliverablesChange = (e, siteIndex) => {
//     const { value, checked } = e.target;
//     setClientData((prev) => {
//       const updatedSites = [...prev.sites];
//       updatedSites[siteIndex] = {
//         ...updatedSites[siteIndex],
//         deliverables: checked
//           ? [...updatedSites[siteIndex].deliverables, value]
//           : updatedSites[siteIndex].deliverables.filter((item) => item !== value),
//       };
//       return { ...prev, sites: updatedSites };
//     });
//   };

//   const handleOfficerChange = (e, index) => {
//     const { name, value } = e.target;
//     const field = name.split(".")[1];
//     const updatedOfficers = [...clientData.officers];
//     updatedOfficers[index][field] = value;
//     setClientData((prev) => ({ ...prev, officers: updatedOfficers }));
//   };

//   const addOfficer = () => {
//     setClientData((prev) => ({
//       ...prev,
//       officers: [...prev.officers, { name: "", position: "", phone: "", email: "" }],
//     }));
//   };

//   const removeOfficer = (index) => {
//     setClientData((prev) => ({
//       ...prev,
//       officers: prev.officers.filter((_, i) => i !== index),
//     }));
//   };

//   const normalizeWorkOrderPath = (filePath) => {
//     if (!filePath) return "";
//     let path = filePath.replace(/\\/g, "/");
//     path = path.replace(/^uploads\//, "").replace(/^uploads\\/, "");
//     return path;
//   };

//   const handleClientSubmit = async (e) => {
//     e.preventDefault();

//     // Validate clientName and totalSites
//     if (!clientData.clientName.trim()) {
//       alert("Client Name is required");
//       return;
//     }
//     if (!clientData.totalSites || isNaN(clientData.totalSites) || parseInt(clientData.totalSites) < 0) {
//       alert("Total Number of Sites must be a valid non-negative number");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("clientName", clientData.clientName);
//     formData.append("totalSites", clientData.totalSites);
//     formData.append("officers", JSON.stringify(clientData.officers));
//     clientData.sites.forEach((site, index) => {
//       formData.append(`site_${index}_name`, site.name || "N/A");
//       formData.append(`site_${index}_location`, site.location || "N/A");
//       formData.append(`site_${index}_deliverables`, JSON.stringify(site.deliverables));
//       formData.append(`site_${index}_tentativeLabours`, site.tentativeLabours || "");
//       formData.append(`site_${index}_labourTurnover`, site.labourTurnover || "");
//       if (site.workOrder) {
//         if (typeof site.workOrder === "string") {
//           // For existing files in edit mode, append the normalized path
//           formData.append(`site_${index}_workOrderPath`, normalizeWorkOrderPath(site.workOrder));
//         } else if (site.workOrder instanceof File) {
//           // For new files, append the file object
//           formData.append(`site_${index}_workOrder`, site.workOrder);
//         }
//       }
//     });

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("Please log in to add a client.");
//       }

//       console.log("FormData:", Object.fromEntries(formData)); // Debug
//       const url = editClient
//         ? `http://localhost:5000/api/clients/${editClient.client_id}`
//         : "http://localhost:5000/api/clients";
//       const method = editClient ? "PUT" : "POST";

//       const response = await fetch(url, {
//         method,
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       });

//       const data = await response.json();
//       if (response.status === 401) {
//         localStorage.removeItem("token");
//         alert("Session expired. Please log in again.");
//         window.location.href = "/login";
//         return;
//       }

//       if (!response.ok) {
//         throw new Error(data.message || `Failed to ${editClient ? "update" : "add"} client`);
//       }

//       console.log(`Client ${editClient ? "updated" : "added"}:`, data);
//       alert(`Client ${editClient ? "updated" : "added"} successfully!`);
//       setClientData({
//         clientName: "",
//         totalSites: "",
//         sites: [],
//         officers: [{ name: "", position: "", phone: "", email: "" }],
//       });
//       onBack();
//     } catch (err) {
//       console.error(`Error ${editClient ? "updating" : "adding"} Client:`, err);
//       alert(`Failed to ${editClient ? "update" : "add"} Client: ${err.message}`);
//     }
//   };

//   return (
//     <div className="clientmanagement-container">
//       <button
//         type="button"
//         className="clientmanagement-back-btn"
//         onClick={onBack}
//       >
//         Back
//       </button>
//       <form onSubmit={handleClientSubmit} className="clientmanagement-management-form">
//         <h3>{editClient ? "Edit Client" : "Add Client"}</h3>
//         <div className="clientmanagement-form-section">
//           <h4>Client Details</h4>
//           <div className="clientmanagement-form-grid">
//             <div className="clientmanagement-form-group">
//               <label>Client Name</label>
//               <input
//                 type="text"
//                 name="clientName"
//                 value={clientData.clientName}
//                 onChange={handleClientChange}
//                 required
//               />
//             </div>
//             <div className="clientmanagement-form-group">
//               <label>Total Number of Sites</label>
//               <input
//                 type="number"
//                 name="totalSites"
//                 value={clientData.totalSites}
//                 onChange={handleClientChange}
//                 min="0"
//                 required
//               />
//             </div>
//           </div>
//         </div>

//         {clientData.sites.map((site, siteIndex) => (
//           <div key={siteIndex} className="clientmanagement-form-section">
//             <h4>Site {siteIndex + 1} Details</h4>
//             <div className="clientmanagement-form-grid">
//               <div className="clientmanagement-form-group">
//                 <label>Site Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={site.name}
//                   onChange={(e) => handleSiteChange(e, siteIndex)}
//                   required
//                 />
//               </div>
//               <div className="clientmanagement-form-group">
//                 <label>Location</label>
//                 <input
//                   type="text"
//                   name="location"
//                   value={site.location}
//                   onChange={(e) => handleSiteChange(e, siteIndex)}
//                   required
//                 />
//               </div>
//               <div className="clientmanagement-form-group clientmanagement-checkbox-group">
//                 <label>Deliverables</label>
//                 <div className="clientmanagement-checkbox-container">
//                   <label>
//                     <input
//                       type="checkbox"
//                       value="Doctor Visits"
//                       checked={site.deliverables.includes("Doctor Visits")}
//                       onChange={(e) => handleDeliverablesChange(e, siteIndex)}
//                     />
//                     Doctor Visits
//                   </label>
//                   <label>
//                     <input
//                       type="checkbox"
//                       value="Nurse Visits"
//                       checked={site.deliverables.includes("Nurse Visits")}
//                       onChange={(e) => handleDeliverablesChange(e, siteIndex)}
//                     />
//                     Nurse Visits
//                   </label>
//                 </div>
//               </div>
//               <div className="clientmanagement-form-group">
//                 <label>Tentative Labours</label>
//                 <input
//                   type="number"
//                   name="tentativeLabours"
//                   value={site.tentativeLabours}
//                   onChange={(e) => handleSiteChange(e, siteIndex)}
//                   required
//                 />
//               </div>
//               <div className="clientmanagement-form-group">
//                 <label>Labour Turnover per Site</label>
//                 <input
//                   type="number"
//                   name="labourTurnover"
//                   value={site.labourTurnover}
//                   onChange={(e) => handleSiteChange(e, siteIndex)}
//                   required
//                 />
//               </div>
//               <div className="clientmanagement-form-group">
//                 <label>Work Order</label>
//                 {site.workOrder && typeof site.workOrder === "string" && (
//                   <div className="clientmanagement-existing-file">
//                     <p>
//                       Current:{" "}
//                       <a
//                         href={`http://localhost:5000/uploads/${normalizeWorkOrderPath(site.workOrder)}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {normalizeWorkOrderPath(site.workOrder).split("/").pop()}
//                       </a>
//                     </p>
//                   </div>
//                 )}
//                 <input
//                   type="file"
//                   name="workOrder"
//                   onChange={(e) => handleSiteChange(e, siteIndex)}
//                   accept=".pdf"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}

//         <div className="clientmanagement-form-section">
//           <h4>Officers Assigned</h4>
//           {clientData.officers.map((officer, index) => (
//             <div key={index} className="clientmanagement-officer-group">
//               <div className="clientmanagement-form-grid">
//                 <div className="clientmanagement-form-group">
//                   <label>Officer Name</label>
//                   <input
//                     type="text"
//                     name={`officer.name.${index}`}
//                     value={officer.name}
//                     onChange={(e) => handleOfficerChange(e, index)}
//                     required
//                   />
//                 </div>
//                 <div className="clientmanagement-form-group">
//                   <label>Position</label>
//                   <input
//                     type="text"
//                     name={`officer.position.${index}`}
//                     value={officer.position}
//                     onChange={(e) => handleOfficerChange(e, index)}
//                     required
//                   />
//                 </div>
//                 <div className="clientmanagement-form-group">
//                   <label>Phone Number</label>
//                   <input
//                     type="tel"
//                     name={`officer.phone.${index}`}
//                     value={officer.phone}
//                     onChange={(e) => handleOfficerChange(e, index)}
//                     required
//                   />
//                 </div>
//                 <div className="clientmanagement-form-group">
//                   <label>Official Email ID</label>
//                   <input
//                     type="email"
//                     name={`officer.email.${index}`}
//                     value={officer.email}
//                     onChange={(e) => handleOfficerChange(e, index)}
//                     required
//                   />
//                 </div>
//               </div>
//               {clientData.officers.length > 1 && (
//                 <button
//                   type="button"
//                   className="clientmanagement-remove-officer-btn"
//                   onClick={() => removeOfficer(index)}
//                 >
//                   Remove Officer
//                 </button>
//               )}
//             </div>
//           ))}
//           <button
//             type="button"
//             className="clientmanagement-add-officer-btn"
//             onClick={addOfficer}
//           >
//             Add Officer
//           </button>
//         </div>
//         <button type="submit" className="clientmanagement-submit-btn">
//           {editClient ? "Update Client" : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ClientManagement;

import React, { useState, useEffect } from "react";
import "./ClientManagement.css";

function ClientManagement({ onBack, editClient }) {
  const [clientData, setClientData] = useState({
    clientName: "",
    totalSites: "",
    sites: [],
    officers: [{ name: "", position: "", phone: "", email: "" }],
  });
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (editClient) {
      setClientData({
        clientName: editClient.client_name || "",
        totalSites: editClient.total_sites || "",
        sites: editClient.sites.map((site) => ({
          name: site.site_name || "",
          location: site.location || "",
          deliverables: site.deliverables || [],
          tentativeLabours: site.tentative_labours || "",
          labourTurnover: site.labour_turnover || "",
          workOrder: site.work_order || null,
        })),
        officers: editClient.officers.map((officer) => ({
          name: officer.name || "",
          position: officer.position || "",
          phone: officer.phone || "",
          email: officer.email || "",
        })),
      });
    }
  }, [editClient]);

  const initializeSite = () => ({
    name: "",
    location: "",
    deliverables: [],
    tentativeLabours: "",
    labourTurnover: "",
    workOrder: null,
  });

  const handleClientChange = (e) => {
    const { name, value } = e.target;
    setError("");
    if (name === "totalSites") {
      const numSites = parseInt(value) || 0;
      setClientData((prev) => ({
        ...prev,
        totalSites: value,
        sites: Array.from({ length: numSites }, (_, i) =>
          prev.sites[i] || initializeSite()
        ),
      }));
    } else {
      setClientData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSiteChange = (e, siteIndex) => {
    const { name, value, files } = e.target;
    setError("");
    setClientData((prev) => {
      const updatedSites = [...prev.sites];
      if (name === "workOrder") {
        updatedSites[siteIndex] = { ...updatedSites[siteIndex], workOrder: files[0] || null };
      } else {
        updatedSites[siteIndex] = { ...updatedSites[siteIndex], [name]: value };
      }
      return { ...prev, sites: updatedSites };
    });
  };

  const handleDeliverablesChange = (e, siteIndex) => {
    const { value, checked } = e.target;
    setError("");
    setClientData((prev) => {
      const updatedSites = [...prev.sites];
      updatedSites[siteIndex] = {
        ...updatedSites[siteIndex],
        deliverables: checked
          ? [...updatedSites[siteIndex].deliverables, value]
          : updatedSites[siteIndex].deliverables.filter((item) => item !== value),
      };
      return { ...prev, sites: updatedSites };
    });
  };

  const handleOfficerChange = (e, index) => {
    const { name, value } = e.target;
    setError("");
    const field = name.split(".")[1];
    const updatedOfficers = [...clientData.officers];
    updatedOfficers[index][field] = value;
    setClientData((prev) => ({ ...prev, officers: updatedOfficers }));
  };

  const addOfficer = () => {
    setError("");
    setClientData((prev) => ({
      ...prev,
      officers: [...prev.officers, { name: "", position: "", phone: "", email: "" }],
    }));
  };

  const removeOfficer = (index) => {
    setError("");
    setClientData((prev) => ({
      ...prev,
      officers: prev.officers.filter((_, i) => i !== index),
    }));
  };

  const normalizeWorkOrderPath = (filePath) => {
    if (!filePath) return "";
    let path = filePath.replace(/\\/g, "/");
    path = path.replace(/^uploads\//, "").replace(/^uploads\\/, "");
    return path;
  };

  const handleCancel = () => {
    setClientData({
      clientName: "",
      totalSites: "",
      sites: [],
      officers: [{ name: "", position: "", phone: "", email: "" }],
    });
    setError("");
    onBack();
  };

  const handleClientSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate clientName and totalSites
    if (!clientData.clientName.trim()) {
      setError("Client Name is required");
      setLoading(false);
      return;
    }
    if (!clientData.totalSites || isNaN(clientData.totalSites) || parseInt(clientData.totalSites) < 0) {
      setError("Total Number of Sites must be a valid non-negative number");
      setLoading(false);
      return;
    }

    // Validate sites
    for (let i = 0; i < clientData.sites.length; i++) {
      const site = clientData.sites[i];
      if (!site.name.trim()) {
        setError(`Site ${i + 1}: Site Name is required`);
        setLoading(false);
        return;
      }
      if (!site.location.trim()) {
        setError(`Site ${i + 1}: Location is required`);
        setLoading(false);
        return;
      }
      if (!site.tentativeLabours || isNaN(site.tentativeLabours) || parseInt(site.tentativeLabours) < 0) {
        setError(`Site ${i + 1}: Tentative Labours must be a valid non-negative number`);
        setLoading(false);
        return;
      }
      if (!site.labourTurnover || isNaN(site.labourTurnover) || parseInt(site.labourTurnover) < 0) {
        setError(`Site ${i + 1}: Labour Turnover must be a valid non-negative number`);
        setLoading(false);
        return;
      }
    }

    // Validate officers
    for (let i = 0; i < clientData.officers.length; i++) {
      const officer = clientData.officers[i];
      if (!officer.name.trim()) {
        setError(`Officer ${i + 1}: Name is required`);
        setLoading(false);
        return;
      }
      if (!officer.position.trim()) {
        setError(`Officer ${i + 1}: Position is required`);
        setLoading(false);
        return;
      }
      if (!officer.phone.trim() || !/^\d{10}$/.test(officer.phone)) {
        setError(`Officer ${i + 1}: Phone Number must be a valid 10-digit number`);
        setLoading(false);
        return;
      }
      if (!officer.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(officer.email)) {
        setError(`Officer ${i + 1}: Valid Email is required`);
        setLoading(false);
        return;
      }
    }

    const formData = new FormData();
    formData.append("clientName", clientData.clientName);
    formData.append("totalSites", clientData.totalSites);
    formData.append("officers", JSON.stringify(clientData.officers));
    clientData.sites.forEach((site, index) => {
      formData.append(`site_${index}_name`, site.name || "N/A");
      formData.append(`site_${index}_location`, site.location || "N/A");
      formData.append(`site_${index}_deliverables`, JSON.stringify(site.deliverables));
      formData.append(`site_${index}_tentativeLabours`, site.tentativeLabours || "");
      formData.append(`site_${index}_labourTurnover`, site.labourTurnover || "");
      if (site.workOrder) {
        if (typeof site.workOrder === "string") {
          formData.append(`site_${index}_workOrderPath`, normalizeWorkOrderPath(site.workOrder));
        } else if (site.workOrder instanceof File) {
          formData.append(`site_${index}_workOrder`, site.workOrder);
        }
      }
    });

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Please log in to add a client.");
      }

      console.log("FormData entries:");
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }

      const url = editClient
        ? `http://localhost:5000/api/clients/${editClient.client_id}`
        : "http://localhost:5000/api/clients";
      const method = editClient ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      if (response.status === 401) {
        localStorage.removeItem("token");
        alert("Session expired. Please log in again.");
        window.location.href = "/login";
        return;
      }

      if (!response.ok) {
        throw new Error(data.message || `Failed to ${editClient ? "update" : "add"} client`);
      }

      console.log(`Client ${editClient ? "updated" : "added"}:`, data);
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        setClientData({
          clientName: "",
          totalSites: "",
          sites: [],
          officers: [{ name: "", position: "", phone: "", email: "" }],
        });
        onBack();
      }, 2000);
    } catch (err) {
      console.error(`Error ${editClient ? "updating" : "adding"} Client:`, err);
      setError(`Failed to ${editClient ? "update" : "add"} Client: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="clientmanagement-container">
      {error && <p className="clientmanagement-error-message">{error}</p>}
      {loading && <p className="clientmanagement-loading-message">Submitting...</p>}
      {showPopup && (
        <div className="clientmanagement-popup">
          Client {editClient ? "updated" : "added"} successfully!
        </div>
      )}
      <button
        type="button"
        className="clientmanagement-back-btn"
        onClick={handleCancel}
      >
        Back
      </button>
      <form onSubmit={handleClientSubmit} className="clientmanagement-management-form">
        <h3>{editClient ? "Edit Client" : "Add Client"}</h3>
        <div className="clientmanagement-form-section">
          <h4>Client Details</h4>
          <div className="clientmanagement-form-grid">
            <div className="clientmanagement-form-group">
              <label>Client Name <span className="clientmanagement-required-asterisk">*</span></label>
              <input
                type="text"
                name="clientName"
                value={clientData.clientName}
                onChange={handleClientChange}
                required
              />
            </div>
            <div className="clientmanagement-form-group">
              <label>Total Number of Sites <span className="clientmanagement-required-asterisk">*</span></label>
              <input
                type="number"
                name="totalSites"
                value={clientData.totalSites}
                onChange={handleClientChange}
                min="0"
                required
              />
            </div>
          </div>
        </div>

        {clientData.sites.map((site, siteIndex) => (
          <div key={siteIndex} className="clientmanagement-form-section">
            <h4>Site {siteIndex + 1} Details</h4>
            <div className="clientmanagement-form-grid">
              <div className="clientmanagement-form-group">
                <label>Site Name <span className="clientmanagement-required-asterisk">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={site.name}
                  onChange={(e) => handleSiteChange(e, siteIndex)}
                  required
                />
              </div>
              <div className="clientmanagement-form-group">
                <label>Location <span className="clientmanagement-required-asterisk">*</span></label>
                <input
                  type="text"
                  name="location"
                  value={site.location}
                  onChange={(e) => handleSiteChange(e, siteIndex)}
                  required
                />
              </div>
              <div className="clientmanagement-form-group clientmanagement-checkbox-group">
                <label>Deliverables</label>
                <div className="clientmanagement-checkbox-container">
                  <label>
                    <input
                      type="checkbox"
                      value="Doctor Visits"
                      checked={site.deliverables.includes("Doctor Visits")}
                      onChange={(e) => handleDeliverablesChange(e, siteIndex)}
                    />
                    Doctor Visits
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="Nurse Visits"
                      checked={site.deliverables.includes("Nurse Visits")}
                      onChange={(e) => handleDeliverablesChange(e, siteIndex)}
                    />
                    Nurse Visits
                  </label>
                </div>
              </div>
              <div className="clientmanagement-form-group">
                <label>Tentative Labours <span className="clientmanagement-required-asterisk">*</span></label>
                <input
                  type="number"
                  name="tentativeLabours"
                  value={site.tentativeLabours}
                  onChange={(e) => handleSiteChange(e, siteIndex)}
                  min="0"
                  required
                />
              </div>
              <div className="clientmanagement-form-group">
                <label>Labour Turnover per Site <span className="clientmanagement-required-asterisk">*</span></label>
                <input
                  type="number"
                  name="labourTurnover"
                  value={site.labourTurnover}
                  onChange={(e) => handleSiteChange(e, siteIndex)}
                  min="0"
                  required
                />
              </div>
              <div className="clientmanagement-form-group">
                <label>Work Order</label>
                {site.workOrder && typeof site.workOrder === "string" && (
                  <div className="clientmanagement-existing-file">
                    <p>
                      Current:{" "}
                      <a
                        href={`http://localhost:5000/uploads/${normalizeWorkOrderPath(site.workOrder)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {normalizeWorkOrderPath(site.workOrder).split("/").pop()}
                      </a>
                    </p>
                  </div>
                )}
                <input
                  type="file"
                  name="workOrder"
                  onChange={(e) => handleSiteChange(e, siteIndex)}
                  accept=".pdf"
                />
              </div>
            </div>
          </div>
        ))}

        <div className="clientmanagement-form-section">
          <h4>Officers Assigned</h4>
          {clientData.officers.map((officer, index) => (
            <div key={index} className="clientmanagement-officer-group">
              <div className="clientmanagement-form-grid">
                <div className="clientmanagement-form-group">
                  <label>Officer Name <span className="clientmanagement-required-asterisk">*</span></label>
                  <input
                    type="text"
                    name={`officer.name.${index}`}
                    value={officer.name}
                    onChange={(e) => handleOfficerChange(e, index)}
                    required
                  />
                </div>
                <div className="clientmanagement-form-group">
                  <label>Position <span className="clientmanagement-required-asterisk">*</span></label>
                  <input
                    type="text"
                    name={`officer.position.${index}`}
                    value={officer.position}
                    onChange={(e) => handleOfficerChange(e, index)}
                    required
                  />
                </div>
                <div className="clientmanagement-form-group">
                  <label>Phone Number <span className="clientmanagement-required-asterisk">*</span></label>
                  <input
                    type="tel"
                    name={`officer.phone.${index}`}
                    value={officer.phone}
                    onChange={(e) => handleOfficerChange(e, index)}
                    required
                  />
                </div>
                <div className="clientmanagement-form-group">
                  <label>Official Email ID <span className="clientmanagement-required-asterisk">*</span></label>
                  <input
                    type="email"
                    name={`officer.email.${index}`}
                    value={officer.email}
                    onChange={(e) => handleOfficerChange(e, index)}
                    required
                  />
                </div>
              </div>
              {clientData.officers.length > 1 && (
                <button
                  type="button"
                  className="clientmanagement-remove-officer-btn"
                  onClick={() => removeOfficer(index)}
                >
                  Remove Officer
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="clientmanagement-add-officer-btn"
            onClick={addOfficer}
          >
            Add Officer
          </button>
        </div>
        <div className="clientmanagement-form-action-buttons">
          <button type="submit" className="clientmanagement-submit-btn" disabled={loading}>
            {loading ? "Submitting..." : editClient ? "Update Client" : "Submit"}
          </button>
          <button
            type="button"
            className="clientmanagement-cancel-btn"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ClientManagement;
