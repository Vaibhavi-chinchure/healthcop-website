
// // // // import React, { useState, useEffect } from "react";
// // // // import ClientManagement from "./../ClientManagement/ClientManagement";
// // // // import "./AdminManagement.css";

// // // // function AdminManagement() {
// // // //   const [activeForm, setActiveForm] = useState("doctor-nurse-data");
// // // //   const [doctorNurseDataArray, setDoctorNurseDataArray] = useState([{}]);
// // // //   const [clients, setClients] = useState([]);
// // // //   const [error, setError] = useState("");
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [showPopup, setShowPopup] = useState(false);
// // // //   const [doctorNurses, setDoctorNurses] = useState([]);
// // // //   const [selectedClientSites, setSelectedClientSites] = useState([]);
// // // //   const [showSiteDetailsPopup, setShowSiteDetailsPopup] = useState(false);
// // // //   const [showPersonalDataPopup, setShowPersonalDataPopup] = useState(false);
// // // //   const [showProfessionalDataPopup, setShowProfessionalDataPopup] = useState(false);
// // // //   const [selectedPersonalData, setSelectedPersonalData] = useState({});
// // // //   const [selectedProfessionalData, setSelectedProfessionalData] = useState({});

// // // //   useEffect(() => {
// // // //     if (activeForm === "doctor-nurse-data") {
// // // //       fetchDoctorNurses();
// // // //     } else if (activeForm === "client-data") {
// // // //       fetchClients();
// // // //     }
// // // //   }, [activeForm]);

// // // //   const fetchDoctorNurses = async () => {
// // // //     try {
// // // //       const token = localStorage.getItem("token");
// // // //       if (!token) {
// // // //         setError("Please log in to fetch Doctor/Nurse data.");
// // // //         return;
// // // //       }
// // // //       const response = await fetch("http://localhost:5000/api/doctor-nurse", {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       });
// // // //       if (!response.ok) {
// // // //         const errorText = await response.text();
// // // //         console.error("Failed to fetch doctor/nurses:", errorText);
// // // //         setError(`Failed to fetch Doctor/Nurse data: ${errorText || response.status}`);
// // // //         return;
// // // //       }
// // // //       const data = await response.json();
// // // //       console.log("Doctor/Nurse data:", data);
// // // //       setDoctorNurses(data);
// // // //     } catch (err) {
// // // //       console.error("Error fetching doctor/nurses:", err);
// // // //       setError("An error occurred while fetching Doctor/Nurse data.");
// // // //     }
// // // //   };

// // // //   const fetchClients = async () => {
// // // //     try {
// // // //       setLoading(true);
// // // //       setError("");
// // // //       const token = localStorage.getItem("token");
// // // //       if (!token) {
// // // //         setError("Please log in to fetch client data.");
// // // //         return;
// // // //       }
// // // //       const response = await fetch("http://localhost:5000/api/clients", {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       });
// // // //       if (!response.ok) {
// // // //         const errorText = await response.text();
// // // //         console.error("Failed to fetch clients:", errorText);
// // // //         setError(`Failed to fetch client data: ${errorText || response.status}`);
// // // //         return;
// // // //       }
// // // //       const data = await response.json();
// // // //       console.log("Client data:", data);
// // // //       if (!Array.isArray(data)) {
// // // //         console.error("Client data is not an array:", data);
// // // //         setError("Invalid client data format received from server.");
// // // //         return;
// // // //       }
// // // //       setClients(
// // // //   data.map((client) => ({
// // // //     client_id: client.client_id,
// // // //     client_code: client.client_code || "N/A",
// // // //     client_name: client.client_name || "Unknown Client",
// // // //     total_sites: client.total_sites || 0,
// // // //     created_at: client.created_at || new Date().toISOString(),
// // // //     sites: client.sites || [],
// // // //     officers: client.officers || [],
// // // //   }))
// // // // );

// // // //     } catch (err) {
// // // //       console.error("Error fetching clients:", err.message);
// // // //       setError("An error occurred while fetching client data: " + err.message);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const addNewPerson = () => {
// // // //     if (doctorNurseDataArray.length >= 10) {
// // // //       setError("Cannot add more than 10 persons at a time.");
// // // //       return;
// // // //     }
// // // //     setDoctorNurseDataArray((prev) => [...prev, {}]);
// // // //   };

// // // //   const removePerson = (index) => {
// // // //     if (doctorNurseDataArray.length === 1) {
// // // //       setError("At least one person is required.");
// // // //       return;
// // // //     }
// // // //     setDoctorNurseDataArray((prev) => prev.filter((_, i) => i !== index));
// // // //   };

// // // //   const handleInputChange = (index, field, value) => {
// // // //     setDoctorNurseDataArray((prev) =>
// // // //       prev.map((data, i) => (i === index ? { ...data, [field]: value } : data))
// // // //     );
// // // //   };

// // // //   const handleFileChange = (index, field, file) => {
// // // //     setDoctorNurseDataArray((prev) =>
// // // //       prev.map((data, i) => (i === index ? { ...data, [field]: file } : data))
// // // //     );
// // // //   };

// // // //   const handleCancel = () => {
// // // //     setDoctorNurseDataArray([{}]);
// // // //     setActiveForm("doctor-nurse-data");
// // // //   };

// // // //   const handleDoctorNurseSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setError("");
// // // //     setLoading(true);
// // // //     try {
// // // //       const token = localStorage.getItem("token");
// // // //       if (!token) {
// // // //         setError("Please log in to perform this action.");
// // // //         setLoading(false);
// // // //         return;
// // // //       }
// // // //       for (const [index, doctorNurseData] of doctorNurseDataArray.entries()) {
// // // //         const requiredFields = [
// // // //           "role",
// // // //           "name",
// // // //           "email",
// // // //           "mobile",
// // // //           "dob",
// // // //           "degreeName",
// // // //           "yearOfPassing",
// // // //         ];
// // // //         for (const field of requiredFields) {
// // // //           if (!doctorNurseData[field]) {
// // // //             setError(`Please fill all required fields for person ${index + 1}.`);
// // // //             setLoading(false);
// // // //             return;
// // // //           }
// // // //         }
// // // //         const formData = new FormData();
// // // //         Object.entries(doctorNurseData).forEach(([key, value]) => {
// // // //           if (value) formData.append(key, value);
// // // //         });
// // // //         for (let [key, value] of formData.entries()) {
// // // //           console.log(`FormData for person ${index + 1}: ${key}=${value}`);
// // // //         }
// // // //         const response = await fetch("http://localhost:5000/api/doctor-nurse", {
// // // //           method: "POST",
// // // //           headers: {
// // // //             Authorization: `Bearer ${token}`,
// // // //           },
// // // //           body: formData,
// // // //         });
// // // //         if (!response.ok) {
// // // //           const errorText = await response.text();
// // // //           console.error(`API Error for person ${index + 1}:`, errorText);
// // // //           setError(
// // // //             errorText || `HTTP ${response.status}: Failed to add person ${index + 1}.`
// // // //           );
// // // //           setLoading(false);
// // // //           return;
// // // //         }
// // // //         const data = await response.json();
// // // //         console.log(`Parsed data for person ${index + 1}:`, data);
// // // //       }
// // // //       setShowPopup(true);
// // // //       setTimeout(() => {
// // // //         setShowPopup(false);
// // // //         setDoctorNurseDataArray([{}]);
// // // //         fetchDoctorNurses();
// // // //         setActiveForm("doctor-nurse-data");
// // // //       }, 2000);
// // // //     } catch (err) {
// // // //       setError("An error occurred. Please try again later.");
// // // //       console.error("Error adding Doctor/Nurse:", err);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleSiteDetailsClick = (sites) => {
// // // //     setSelectedClientSites(sites || []);
// // // //     setShowSiteDetailsPopup(true);
// // // //   };

// // // //   const handlePersonalDataClick = (data) => {
// // // //     setSelectedPersonalData({
// // // //       dob: data.dob || "N/A",
// // // //       age: data.age || "N/A",
// // // //       residence: data.residence || "N/A",
// // // //       maritalStatus: data.maritalStatus || "N/A",
// // // //     });
// // // //     setShowPersonalDataPopup(true);
// // // //   };

// // // //   const handleProfessionalDataClick = (data) => {
// // // //     setSelectedProfessionalData({
// // // //       degreeName: data.degreeName || "N/A",
// // // //       yearOfPassing: data.yearOfPassing || "N/A",
// // // //       photo: data.photo || "N/A",
// // // //       signature: data.signature || "N/A",
// // // //       degreeCertificate: data.degreeCertificate || "N/A",
// // // //       aadharCard: data.aadharCard || "N/A",
// // // //       panCard: data.panCard || "N/A",
// // // //       cancelledCheque: data.cancelledCheque || "N/A",
// // // //       declaration: data.declaration || "N/A",
// // // //     });
// // // //     setShowProfessionalDataPopup(true);
// // // //   };

// // // //   const fields = [
// // // //     { name: "role", label: "Role", type: "select", options: ["", "Doctor", "Nurse"], required: true },
// // // //     { name: "name", label: "Name", type: "text", required: true },
// // // //     { name: "email", label: "Email", type: "email", required: true },
// // // //     { name: "mobile", label: "Mobile", type: "tel", required: true },
// // // //     { name: "dob", label: "DOB", type: "date", required: true },
// // // //     { name: "age", label: "Age", type: "number" },
// // // //     { name: "residence", label: "Address", type: "text" },
// // // //     {
// // // //       name: "maritalStatus",
// // // //       label: "Marital Status",
// // // //       type: "select",
// // // //       options: ["", "Single", "Married", "Divorced", "Widowed"],
// // // //     },
// // // //     { name: "degreeName", label: "Degree", type: "text", required: true },
// // // //     { name: "yearOfPassing", label: "Year Passed", type: "number", required: true },
// // // //     { name: "photo", label: "Photo", type: "file", accept: "image/*" },
// // // //     { name: "signature", label: "Signature", type: "file", accept: "image/*" },
// // // //     { name: "degreeCertificate", label: "Degree Cert.", type: "file", accept: ".pdf" },
// // // //     { name: "aadharCard", label: "Aadhar", type: "file", accept: ".pdf,image/*" },
// // // //     { name: "panCard", label: "PAN", type: "file", accept: ".pdf,image/*" },
// // // //     { name: "cancelledCheque", label: "Cheque", type: "file", accept: ".pdf,image/*" },
// // // //     { name: "declaration", label: "Declaration", type: "file", accept: ".pdf" },
// // // //   ];

// // // //   return (
// // // //     <div className="am-doctor-nurse-container">
// // // //       {error && <p className="am-error-message">{error}</p>}
// // // //       {loading && <p className="am-loading-message">Loading client data...</p>}
// // // //       {showPopup && (
// // // //         <div className="am-popup">Person(s) added successfully!</div>
// // // //       )}
// // // //       {showSiteDetailsPopup && (
// // // //         <div className="am-site-details-popup">
// // // //           <div className="am-site-details-popup-content">
// // // //             <h3>Site Details</h3>
// // // //             {selectedClientSites.length > 0 ? (
// // // //               <div className="am-sites-details">
// // // //                 {selectedClientSites.map((site, index) => (
// // // //                   <div key={site.site_id} className="am-site-item">
// // // //                     <h4>Site {index + 1}</h4>
// // // //                     <table className="am-site-details-table">
// // // //                       <tbody>
// // // //                         <tr>
// // // //                           <th>Site ID</th>
// // // //                           <td>{site.site_id}</td>
// // // //                         </tr>
// // // //                         <tr>
// // // //                           <th>Location</th>
// // // //                           <td>{site.location}</td>
// // // //                         </tr>
// // // //                         <tr>
// // // //                           <th>Deliverables</th>
// // // //                           <td>{Array.isArray(site.deliverables) ? site.deliverables.join(", ") : "N/A"}</td>
// // // //                         </tr>
// // // //                         <tr>
// // // //                           <th>Tentative Labours</th>
// // // //                           <td>{site.tentative_labours}</td>
// // // //                         </tr>
// // // //                         <tr>
// // // //                           <th>Labour Turnover</th>
// // // //                           <td>{site.labour_turnover}</td>
// // // //                         </tr>
// // // //                         <tr>
// // // //                           <th>Work Order</th>
// // // //                           <td>
// // // //                             {site.work_order ? (
// // // //                               <a
// // // //                                 href={`http://localhost:5000/uploads/${site.work_order}`}
// // // //                                 target="_blank"
// // // //                                 rel="noopener noreferrer"
// // // //                               >
// // // //                                 View PDF
// // // //                               </a>
// // // //                             ) : (
// // // //                               "N/A"
// // // //                             )}
// // // //                           </td>
// // // //                         </tr>
// // // //                       </tbody>
// // // //                     </table>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             ) : (
// // // //               <p>No sites available for this client.</p>
// // // //             )}
// // // //             <button
// // // //               className="am-action-btn am-close-popup-btn"
// // // //               onClick={() => setShowSiteDetailsPopup(false)}
// // // //             >
// // // //               Close
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //       {showPersonalDataPopup && (
// // // //         <div className="am-data-popup">
// // // //           <div className="am-data-popup-content">
// // // //             <h3>Personal Data</h3>
// // // //             <table className="am-data-details-table">
// // // //               <tbody>
// // // //                 <tr>
// // // //                   <th>DOB</th>
// // // //                   <td>{selectedPersonalData.dob}</td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <th>Age</th>
// // // //                   <td>{selectedPersonalData.age}</td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <th>Address</th>
// // // //                   <td>{selectedPersonalData.residence}</td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <th>Marital Status</th>
// // // //                   <td>{selectedPersonalData.maritalStatus}</td>
// // // //                 </tr>
// // // //               </tbody>
// // // //             </table>
// // // //             <button
// // // //               className="am-action-btn am-close-popup-btn"
// // // //               onClick={() => setShowPersonalDataPopup(false)}
// // // //             >
// // // //               Close
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //       {showProfessionalDataPopup && (
// // // //         <div className="am-data-popup">
// // // //           <div className="am-data-popup-content">
// // // //             <h3>Professional Data</h3>
// // // //             <table className="am-data-details-table">
// // // //               <tbody>
// // // //                 <tr>
// // // //                   <th>Degree</th>
// // // //                   <td>{selectedProfessionalData.degreeName}</td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <th>Year Passed</th>
// // // //                   <td>{selectedProfessionalData.yearOfPassing}</td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <th>Photo</th>
// // // //                   <td>
// // // //                     {selectedProfessionalData.photo !== "N/A" ? (
// // // //                       <a
// // // //                         href={`http://localhost:5000/uploads/${selectedProfessionalData.photo}`}
// // // //                         target="_blank"
// // // //                         rel="noopener noreferrer"
// // // //                       >
// // // //                         View Photo
// // // //                       </a>
// // // //                     ) : (
// // // //                       "N/A"
// // // //                     )}
// // // //                   </td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <th>Signature</th>
// // // //                   <td>
// // // //                     {selectedProfessionalData.signature !== "N/A" ? (
// // // //                       <a
// // // //                         href={`http://localhost:5000/uploads/${selectedProfessionalData.signature}`}
// // // //                         target="_blank"
// // // //                         rel="noopener noreferrer"
// // // //                       >
// // // //                         View Signature
// // // //                       </a>
// // // //                     ) : (
// // // //                       "N/A"
// // // //                     )}
// // // //                   </td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <th>Degree Certificate</th>
// // // //                   <td>
// // // //                     {selectedProfessionalData.degreeCertificate !== "N/A" ? (
// // // //                       <a
// // // //                         href={`http://localhost:5000/uploads/${selectedProfessionalData.degreeCertificate}`}
// // // //                         target="_blank"
// // // //                         rel="noopener noreferrer"
// // // //                       >
// // // //                         View Degree Certificate
// // // //                       </a>
// // // //                     ) : (
// // // //                       "N/A"
// // // //                     )}
// // // //                   </td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <th>Aadhar Card</th>
// // // //                   <td>
// // // //                     {selectedProfessionalData.aadharCard !== "N/A" ? (
// // // //                       <a
// // // //                         href={`http://localhost:5000/uploads/${selectedProfessionalData.aadharCard}`}
// // // //                         target="_blank"
// // // //                         rel="noopener noreferrer"
// // // //                       >
// // // //                         View Aadhar Card
// // // //                       </a>
// // // //                     ) : (
// // // //                       "N/A"
// // // //                     )}
// // // //                   </td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <th>PAN Card</th>
// // // //                   <td>
// // // //                     {selectedProfessionalData.panCard !== "N/A" ? (
// // // //                       <a
// // // //                         href={`http://localhost:5000/uploads/${selectedProfessionalData.panCard}`}
// // // //                         target="_blank"
// // // //                         rel="noopener noreferrer"
// // // //                       >
// // // //                         View PAN Card
// // // //                       </a>
// // // //                     ) : (
// // // //                       "N/A"
// // // //                     )}
// // // //                   </td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <th>Cancelled Cheque</th>
// // // //                   <td>
// // // //                     {selectedProfessionalData.cancelledCheque !== "N/A" ? (
// // // //                       <a
// // // //                         href={`http://localhost:5000/uploads/${selectedProfessionalData.cancelledCheque}`}
// // // //                         target="_blank"
// // // //                         rel="noopener noreferrer"
// // // //                       >
// // // //                         View Cancelled Cheque
// // // //                       </a>
// // // //                     ) : (
// // // //                       "N/A"
// // // //                     )}
// // // //                   </td>
// // // //                 </tr>
// // // //                 <tr>
// // // //                   <th>Declaration</th>
// // // //                   <td>
// // // //                     {selectedProfessionalData.declaration !== "N/A" ? (
// // // //                       <a
// // // //                         href={`http://localhost:5000/uploads/${selectedProfessionalData.declaration}`}
// // // //                         target="_blank"
// // // //                         rel="noopener noreferrer"
// // // //                       >
// // // //                         View Declaration
// // // //                       </a>
// // // //                     ) : (
// // // //                       "N/A"
// // // //                     )}
// // // //                   </td>
// // // //                 </tr>
// // // //               </tbody>
// // // //             </table>
// // // //             <button
// // // //               className="am-action-btn am-close-popup-btn"
// // // //               onClick={() => setShowProfessionalDataPopup(false)}
// // // //             >
// // // //               Close
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //       {activeForm === "doctor-nurse" && (
// // // //         <div>
// // // //           <button
// // // //             className="am-action-btn am-doctor-nurse-back-btn"
// // // //             onClick={() => setActiveForm("doctor-nurse-data")}
// // // //           >
// // // //             <i className="fas fa-chevron-left" style={{ marginRight: "0.5rem" }}></i>
// // // //             Back
// // // //           </button>
// // // //           <form onSubmit={handleDoctorNurseSubmit} className="am-doctor-nurse-management-form">
// // // //             <h3>Add Doctor/Nurse (Up to 10)</h3>
// // // //             {doctorNurseDataArray.map((data, index) => (
// // // //               <div key={index} className="am-doctor-nurse-form-section">
// // // //                 <h4>Person {index + 1}</h4>
// // // //                 <div className="am-doctor-nurse-form-grid">
// // // //                   {fields.map((field) => (
// // // //                     <div key={field.name} className="am-form-field">
// // // //                       <label htmlFor={`${field.name}-${index}`}>
// // // //                         {field.label}
// // // //                         {field.required && <span className="am-required-asterisk">*</span>}
// // // //                       </label>
// // // //                       {field.type === "select" ? (
// // // //                         <select
// // // //                           id={`${field.name}-${index}`}
// // // //                           name={field.name}
// // // //                           value={data[field.name] || ""}
// // // //                           onChange={(e) => handleInputChange(index, field.name, e.target.value)}
// // // //                           required={field.required}
// // // //                           className="am-form-input"
// // // //                         >
// // // //                           {field.options.map((option) => (
// // // //                             <option key={option} value={option}>
// // // //                               {option || "Select"}
// // // //                             </option>
// // // //                           ))}
// // // //                         </select>
// // // //                       ) : field.type === "file" ? (
// // // //                         <input
// // // //                           id={`${field.name}-${index}`}
// // // //                           type="file"
// // // //                           name={field.name}
// // // //                           onChange={(e) => handleFileChange(index, field.name, e.target.files[0])}
// // // //                           accept={field.accept}
// // // //                           className="am-form-input"
// // // //                         />
// // // //                       ) : (
// // // //                         <input
// // // //                           id={`${field.name}-${index}`}
// // // //                           type={field.type}
// // // //                           name={field.name}
// // // //                           value={data[field.name] || ""}
// // // //                           onChange={(e) => handleInputChange(index, field.name, e.target.value)}
// // // //                           required={field.required}
// // // //                           className="am-form-input"
// // // //                         />
// // // //                       )}
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //                 {index > 0 && (
// // // //                   <button
// // // //                     type="button"
// // // //                     className="am-action-btn am-remove-person-btn"
// // // //                     onClick={() => removePerson(index)}
// // // //                   >
// // // //                     Remove Person
// // // //                   </button>
// // // //                 )}
// // // //               </div>
// // // //             ))}
// // // //             <div className="am-doctor-nurse-button-container">
// // // //               <button
// // // //                 type="button"
// // // //                 className="am-action-btn am-add-person-btn"
// // // //                 onClick={addNewPerson}
// // // //                 disabled={doctorNurseDataArray.length >= 10}
// // // //               >
// // // //                 <i className="fas fa-plus" style={{ marginRight: "0.5rem" }}></i>
// // // //                 Add Person
// // // //               </button>
// // // //               <div className="am-form-action-buttons">
// // // //                 <button type="submit" className="am-doctor-nurse-submit-btn" disabled={loading}>
// // // //                   {loading ? "Submitting..." : "Submit All"}
// // // //                 </button>
// // // //                 <button
// // // //                   type="button"
// // // //                   className="am-doctor-nurse-cancel-btn"
// // // //                   onClick={handleCancel}
// // // //                 >
// // // //                   Cancel
// // // //                 </button>
// // // //               </div>
// // // //             </div>
// // // //           </form>
// // // //         </div>
// // // //       )}
// // // //       {activeForm === "client" && (
// // // //         <ClientManagement onBack={() => setActiveForm("doctor-nurse-data")} />
// // // //       )}
// // // //       {activeForm === "doctor-nurse-data" && (
// // // //         <div className="am-doctor-nurse-data-container">
// // // //           <div className="am-doctor-nurse-action-buttons">
// // // //             <button
// // // //               className="am-action-btn am-doctor-nurse-form-btn"
// // // //               onClick={() => setActiveForm("doctor-nurse")}
// // // //             >
// // // //               <i className="fas fa-user-plus" style={{ marginRight: "0.5rem" }}></i>
// // // //               Add Doctor/Nurse
// // // //             </button>
// // // //             <button
// // // //               className="am-action-btn am-form-btn"
// // // //               onClick={() => setActiveForm("client")}
// // // //             >
// // // //               <i className="fas fa-user-tie" style={{ marginRight: "0.5rem" }}></i>
// // // //               Add Client
// // // //             </button>
// // // //           </div>
// // // //           <div className="am-doctor-nurse-tabs-container">
// // // //             <div className="am-doctor-nurse-tabs">
// // // //               <button
// // // //                 className={`am-doctor-nurse-tab ${activeForm === "doctor-nurse-data" ? "active" : ""}`}
// // // //                 onClick={() => setActiveForm("doctor-nurse-data")}
// // // //               >
// // // //                 Doctor/Nurse Data
// // // //               </button>
// // // //               <button
// // // //                 className={`am-tab ${activeForm === "client-data" ? "active" : ""}`}
// // // //                 onClick={() => setActiveForm("client-data")}
// // // //               >
// // // //                 Client Data
// // // //               </button>
// // // //             </div>
// // // //             <div className="am-doctor-nurse-data-table">
// // // //               <h3>Doctor/Nurse Data</h3>
// // // //               <table className="am-doctor-nurse-table">
// // // //                 <thead>
// // // //                   <tr>
// // // //                     <th>ID</th>
// // // //                     <th>Role</th>
// // // //                     <th>Name</th>
// // // //                     <th>Personal Data</th>
// // // //                     <th>Professional Data</th>
// // // //                   </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                   {doctorNurses.length > 0 ? (
// // // //                     doctorNurses.map((dn) => (
// // // //                       <tr key={dn.USRID}>
// // // //                         <td>{dn.USRID}</td>
// // // //                         <td>{dn.role}</td>
// // // //                         <td>{dn.name}</td>
// // // //                         <td>
// // // //                           <button
// // // //                             className="am-action-btn am-view-details-btn"
// // // //                             onClick={() => handlePersonalDataClick(dn)}
// // // //                           >
// // // //                             <i className="fas fa-eye"></i>
// // // //                           </button>
// // // //                         </td>
// // // //                         <td>
// // // //                           <button
// // // //                             className="am-action-btn am-view-details-btn"
// // // //                             onClick={() => handleProfessionalDataClick(dn)}
// // // //                           >
// // // //                             <i className="fas fa-eye"></i>
// // // //                           </button>
// // // //                         </td>
// // // //                       </tr>
// // // //                     ))
// // // //                   ) : (
// // // //                     <tr>
// // // //                       <td colSpan="5">No Doctor/Nurse data available</td>
// // // //                     </tr>
// // // //                   )}
// // // //                 </tbody>
// // // //               </table>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //       {activeForm === "client-data" && (
// // // //         <div className="am-data-container">
// // // //           <div className="am-action-buttons">
// // // //             <button
// // // //               className="am-action-btn am-doctor-nurse-form-btn"
// // // //               onClick={() => setActiveForm("doctor-nurse")}
// // // //             >
// // // //               <i className="fas fa-user-plus" style={{ marginRight: "0.5rem" }}></i>
// // // //               Add Doctor/Nurse
// // // //             </button>
// // // //             <button
// // // //               className="am-action-btn am-form-btn"
// // // //               onClick={() => setActiveForm("client")}
// // // //             >
// // // //               <i className="fas fa-user-tie" style={{ marginRight: "0.5rem" }}></i>
// // // //               Add Client
// // // //             </button>
// // // //           </div>
// // // //           <div className="am-tabs-container">
// // // //             <div className="am-tabs">
// // // //               <button
// // // //                 className={`am-doctor-nurse-tab ${activeForm === "doctor-nurse-data" ? "active" : ""}`}
// // // //                 onClick={() => setActiveForm("doctor-nurse-data")}
// // // //               >
// // // //                 Doctor/Nurse Data
// // // //               </button>
// // // //               <button
// // // //                 className={`am-tab ${activeForm === "client-data" ? "active" : ""}`}
// // // //                 onClick={() => setActiveForm("client-data")}
// // // //               >
// // // //                 Client Data
// // // //               </button>
// // // //             </div>
// // // //             <div className="am-data-table">
// // // //               <h3>Client Data</h3>
// // // //               <table className="am-doctor-nurse-table">
// // // //                 <thead>
// // // //                   <tr>
// // // //                     <th>ID</th>
// // // //                     <th>Client Name</th>
// // // //                     <th>Total Sites</th>
// // // //                     <th>Created At</th>
// // // //                     <th>Officers</th>
// // // //                     <th>Site Details</th>
// // // //                   </tr>
// // // //                 </thead>
// // // //                 <tbody>
// // // //                   {clients.length > 0 ? (
// // // //                     clients.map((client) => (
// // // //                       <tr key={client.client_id}>
// // // //                         <td>{client.client_name}</td>
// // // //                         <td>{client.total_sites}</td>
// // // //                         <td>{new Date(client.created_at).toLocaleDateString("en-IN")}</td>
// // // //                         <td className="am-doctor-nurse-tooltip-cell">
// // // //   <span className="am-doctor-nurse-tooltip-text">
// // // //     {(client.officers || []).map((officer) => (
// // // //       <div key={officer.officer_id}>
// // // //         {officer.name || "N/A"} ({officer.position || "N/A"})
// // // //       </div>
// // // //     ))}
// // // //   </span>
// // // //   {(client.officers && client.officers.length > 0)
// // // //     ? `${client.officers[0].name || "N/A"}${client.officers.length > 1 ? "..." : ""}`
// // // //     : "N/A"}
// // // // </td>

// // // //                         <td>
// // // //                           <button
// // // //                             className="am-action-btn am-view-details-btn"
// // // //                             onClick={() => handleSiteDetailsClick(client.sites)}
// // // //                           >
// // // //                             <i className="fas fa-eye"></i>
// // // //                           </button>
// // // //                         </td>
// // // //                       </tr>
// // // //                     ))
// // // //                   ) : (
// // // //                     <tr>
// // // //                       <td colSpan="7">No Client data available</td>
// // // //                     </tr>
// // // //                   )}
// // // //                 </tbody>
// // // //               </table>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default AdminManagement;
// // // import React, { useState, useEffect } from "react";
// // // import ClientManagement from "./../ClientManagement/ClientManagement";
// // // import "./AdminManagement.css";

// // // function AdminManagement() {
// // //   const [activeForm, setActiveForm] = useState("doctor-nurse-data");
// // //   const [doctorNurseDataArray, setDoctorNurseDataArray] = useState([{}]);
// // //   const [clients, setClients] = useState([]);
// // //   const [error, setError] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const [showPopup, setShowPopup] = useState(false);
// // //   const [doctorNurses, setDoctorNurses] = useState([]);
// // //   const [selectedClientSites, setSelectedClientSites] = useState([]);
// // //   const [showSiteDetailsPopup, setShowSiteDetailsPopup] = useState(false);
// // //   const [showPersonalDataPopup, setShowPersonalDataPopup] = useState(false);
// // //   const [showProfessionalDataPopup, setShowProfessionalDataPopup] = useState(false);
// // //   const [selectedPersonalData, setSelectedPersonalData] = useState({});
// // //   const [selectedProfessionalData, setSelectedProfessionalData] = useState({});

// // //   useEffect(() => {
// // //     if (activeForm === "doctor-nurse-data") {
// // //       fetchDoctorNurses();
// // //     } else if (activeForm === "client-data") {
// // //       fetchClients();
// // //     }
// // //   }, [activeForm]);

// // //   const fetchDoctorNurses = async () => {
// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       if (!token) {
// // //         setError("Please log in to fetch Doctor/Nurse data.");
// // //         return;
// // //       }
// // //       const response = await fetch("http://localhost:5000/api/doctor-nurse", {
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //       });
// // //       if (!response.ok) {
// // //         const errorText = await response.text();
// // //         console.error("Failed to fetch doctor/nurses:", errorText);
// // //         setError(`Failed to fetch Doctor/Nurse data: ${errorText || response.status}`);
// // //         return;
// // //       }
// // //       const data = await response.json();
// // //       console.log("Doctor/Nurse data:", data);
// // //       setDoctorNurses(data);
// // //     } catch (err) {
// // //       console.error("Error fetching doctor/nurses:", err);
// // //       setError("An error occurred while fetching Doctor/Nurse data.");
// // //     }
// // //   };

// // //   const fetchClients = async () => {
// // //     try {
// // //       setLoading(true);
// // //       setError("");
// // //       const token = localStorage.getItem("token");
// // //       if (!token) {
// // //         setError("Please log in to fetch client data.");
// // //         return;
// // //       }
// // //       const response = await fetch("http://localhost:5000/api/clients", {
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //       });
// // //       if (!response.ok) {
// // //         const errorText = await response.text();
// // //         console.error("Failed to fetch clients:", errorText);
// // //         setError(`Failed to fetch client data: ${errorText || response.status}`);
// // //         return;
// // //       }
// // //       const data = await response.json();
// // //       console.log("Raw client data:", data); // Debug raw API response
// // //       if (!Array.isArray(data)) {
// // //         console.error("Client data is not an array:", data);
// // //         setError("Invalid client data format received from server.");
// // //         return;
// // //       }
// // //       const mappedClients = data.map((client) => {
// // //         console.log("Mapping client:", client); // Debug each client object
// // //         return {
// // //           client_id: client.client_id,
// // //           client_code: client.client_code || "N/A",
// // //           client_name: client.client_name || "Unknown Client",
// // //           total_sites: client.total_sites || 0,
// // //           created_at: client.created_at || new Date().toISOString(),
// // //           sites: client.sites || [],
// // //           officers: Array.isArray(client.officers) ? client.officers : [],
// // //         };
// // //       });
// // //       console.log("Mapped clients:", mappedClients); // Debug mapped clients
// // //       setClients(mappedClients);
// // //     } catch (err) {
// // //       console.error("Error fetching clients:", err.message);
// // //       setError("An error occurred while fetching client data: " + err.message);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const addNewPerson = () => {
// // //     if (doctorNurseDataArray.length >= 10) {
// // //       setError("Cannot add more than 10 persons at a time.");
// // //       return;
// // //     }
// // //     setDoctorNurseDataArray((prev) => [...prev, {}]);
// // //   };

// // //   const removePerson = (index) => {
// // //     if (doctorNurseDataArray.length === 1) {
// // //       setError("At least one person is required.");
// // //       return;
// // //     }
// // //     setDoctorNurseDataArray((prev) => prev.filter((_, i) => i !== index));
// // //   };

// // //   const handleInputChange = (index, field, value) => {
// // //     setDoctorNurseDataArray((prev) =>
// // //       prev.map((data, i) => (i === index ? { ...data, [field]: value } : data))
// // //     );
// // //   };

// // //   const handleFileChange = (index, field, file) => {
// // //     setDoctorNurseDataArray((prev) =>
// // //       prev.map((data, i) => (i === index ? { ...data, [field]: file } : data))
// // //     );
// // //   };

// // //   const handleCancel = () => {
// // //     setDoctorNurseDataArray([{}]);
// // //     setActiveForm("doctor-nurse-data");
// // //   };

// // //   const handleDoctorNurseSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError("");
// // //     setLoading(true);
// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       if (!token) {
// // //         setError("Please log in to perform this action.");
// // //         setLoading(false);
// // //         return;
// // //       }
// // //       for (const [index, doctorNurseData] of doctorNurseDataArray.entries()) {
// // //         const requiredFields = [
// // //           "role",
// // //           "name",
// // //           "email",
// // //           "mobile",
// // //           "dob",
// // //           "degreeName",
// // //           "yearOfPassing",
// // //         ];
// // //         for (const field of requiredFields) {
// // //           if (!doctorNurseData[field]) {
// // //             setError(`Please fill all required fields for person ${index + 1}.`);
// // //             setLoading(false);
// // //             return;
// // //           }
// // //         }
// // //         const formData = new FormData();
// // //         Object.entries(doctorNurseData).forEach(([key, value]) => {
// // //           if (value) formData.append(key, value);
// // //         });
// // //         for (let [key, value] of formData.entries()) {
// // //           console.log(`FormData for person ${index + 1}: ${key}=${value}`);
// // //         }
// // //         const response = await fetch("http://localhost:5000/api/doctor-nurse", {
// // //           method: "POST",
// // //           headers: {
// // //             Authorization: `Bearer ${token}`,
// // //           },
// // //           body: formData,
// // //         });
// // //         if (!response.ok) {
// // //           const errorText = await response.text();
// // //           console.error(`API Error for person ${index + 1}:`, errorText);
// // //           setError(
// // //             errorText || `HTTP ${response.status}: Failed to add person ${index + 1}.`
// // //           );
// // //           setLoading(false);
// // //           return;
// // //         }
// // //         const data = await response.json();
// // //         console.log(`Parsed data for person ${index + 1}:`, data);
// // //       }
// // //       setShowPopup(true);
// // //       setTimeout(() => {
// // //         setShowPopup(false);
// // //         setDoctorNurseDataArray([{}]);
// // //         fetchDoctorNurses();
// // //         setActiveForm("doctor-nurse-data");
// // //       }, 2000);
// // //     } catch (err) {
// // //       setError("An error occurred. Please try again later.");
// // //       console.error("Error adding Doctor/Nurse:", err);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleSiteDetailsClick = (sites) => {
// // //     setSelectedClientSites(sites || []);
// // //     setShowSiteDetailsPopup(true);
// // //   };

// // //   const handlePersonalDataClick = (data) => {
// // //     setSelectedPersonalData({
// // //       dob: data.dob || "N/A",
// // //       age: data.age || "N/A",
// // //       residence: data.residence || "N/A",
// // //       maritalStatus: data.maritalStatus || "N/A",
// // //     });
// // //     setShowPersonalDataPopup(true);
// // //   };

// // //   const handleProfessionalDataClick = (data) => {
// // //     setSelectedProfessionalData({
// // //       degreeName: data.degreeName || "N/A",
// // //       yearOfPassing: data.yearOfPassing || "N/A",
// // //       photo: data.photo || "N/A",
// // //       signature: data.signature || "N/A",
// // //       degreeCertificate: data.degreeCertificate || "N/A",
// // //       aadharCard: data.aadharCard || "N/A",
// // //       panCard: data.panCard || "N/A",
// // //       cancelledCheque: data.cancelledCheque || "N/A",
// // //       declaration: data.declaration || "N/A",
// // //     });
// // //     setShowProfessionalDataPopup(true);
// // //   };

// // //   const fields = [
// // //     { name: "role", label: "Role", type: "select", options: ["", "Doctor", "Nurse"], required: true },
// // //     { name: "name", label: "Name", type: "text", required: true },
// // //     { name: "email", label: "Email", type: "email", required: true },
// // //     { name: "mobile", label: "Mobile", type: "tel", required: true },
// // //     { name: "dob", label: "DOB", type: "date", required: true },
// // //     { name: "age", label: "Age", type: "number" },
// // //     { name: "residence", label: "Address", type: "text" },
// // //     {
// // //       name: "maritalStatus",
// // //       label: "Marital Status",
// // //       type: "select",
// // //       options: ["", "Single", "Married", "Divorced", "Widowed"],
// // //     },
// // //     { name: "degreeName", label: "Degree", type: "text", required: true },
// // //     { name: "yearOfPassing", label: "Year Passed", type: "number", required: true },
// // //     { name: "photo", label: "Photo", type: "file", accept: "image/*" },
// // //     { name: "signature", label: "Signature", type: "file", accept: "image/*" },
// // //     { name: "degreeCertificate", label: "Degree Cert.", type: "file", accept: ".pdf" },
// // //     { name: "aadharCard", label: "Aadhar", type: "file", accept: ".pdf,image/*" },
// // //     { name: "panCard", label: "PAN", type: "file", accept: ".pdf,image/*" },
// // //     { name: "cancelledCheque", label: "Cheque", type: "file", accept: ".pdf,image/*" },
// // //     { name: "declaration", label: "Declaration", type: "file", accept: ".pdf" },
// // //   ];

// // //   return (
// // //     <div className="am-doctor-nurse-container">
// // //       {error && <p className="am-error-message">{error}</p>}
// // //       {loading && <p className="am-loading-message">Loading client data...</p>}
// // //       {showPopup && (
// // //         <div className="am-popup">Person(s) added successfully!</div>
// // //       )}
// // //       {showSiteDetailsPopup && (
// // //         <div className="am-site-details-popup">
// // //           <div className="am-site-details-popup-content">
// // //             <h3>Site Details</h3>
// // //             {selectedClientSites.length > 0 ? (
// // //               <div className="am-sites-details">
// // //                 {selectedClientSites.map((site, index) => (
// // //                   <div key={site.site_id} className="am-site-item">
// // //                     <h4>Site {index + 1}</h4>
// // //                     <table className="am-site-details-table">
// // //                       <tbody>
// // //                         <tr>
// // //                           <th>Site ID</th>
// // //                           <td>{site.site_id}</td>
// // //                         </tr>
// // //                         <tr>
// // //                           <th>Location</th>
// // //                           <td>{site.location}</td>
// // //                         </tr>
// // //                         <tr>
// // //                           <th>Deliverables</th>
// // //                           <td>{Array.isArray(site.deliverables) ? site.deliverables.join(", ") : "N/A"}</td>
// // //                         </tr>
// // //                         <tr>
// // //                           <th>Tentative Labours</th>
// // //                           <td>{site.tentative_labours}</td>
// // //                         </tr>
// // //                         <tr>
// // //                           <th>Labour Turnover</th>
// // //                           <td>{site.labour_turnover}</td>
// // //                         </tr>
// // //                         <tr>
// // //                           <th>Work Order</th>
// // //                           <td>
// // //                             {site.work_order ? (
// // //                               <a
// // //                                 href={`http://localhost:5000/uploads/${site.work_order}`}
// // //                                 target="_blank"
// // //                                 rel="noopener noreferrer"
// // //                               >
// // //                                 View PDF
// // //                               </a>
// // //                             ) : (
// // //                               "N/A"
// // //                             )}
// // //                           </td>
// // //                         </tr>
// // //                       </tbody>
// // //                     </table>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             ) : (
// // //               <p>No sites available for this client.</p>
// // //             )}
// // //             <button
// // //               className="am-action-btn am-close-popup-btn"
// // //               onClick={() => setShowSiteDetailsPopup(false)}
// // //             >
// // //               Close
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}
// // //       {showPersonalDataPopup && (
// // //         <div className="am-data-popup">
// // //           <div className="am-data-popup-content">
// // //             <h3>Personal Data</h3>
// // //             <table className="am-data-details-table">
// // //               <tbody>
// // //                 <tr>
// // //                   <th>DOB</th>
// // //                   <td>{selectedPersonalData.dob}</td>
// // //                 </tr>
// // //                 <tr>
// // //                   <th>Age</th>
// // //                   <td>{selectedPersonalData.age}</td>
// // //                 </tr>
// // //                 <tr>
// // //                   <th>Address</th>
// // //                   <td>{selectedPersonalData.residence}</td>
// // //                 </tr>
// // //                 <tr>
// // //                   <th>Marital Status</th>
// // //                   <td>{selectedPersonalData.maritalStatus}</td>
// // //                 </tr>
// // //               </tbody>
// // //             </table>
// // //             <button
// // //               className="am-action-btn am-close-popup-btn"
// // //               onClick={() => setShowPersonalDataPopup(false)}
// // //             >
// // //               Close
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}
// // //       {showProfessionalDataPopup && (
// // //         <div className="am-data-popup">
// // //           <div className="am-data-popup-content">
// // //             <h3>Professional Data</h3>
// // //             <table className="am-data-details-table">
// // //               <tbody>
// // //                 <tr>
// // //                   <th>Degree</th>
// // //                   <td>{selectedProfessionalData.degreeName}</td>
// // //                 </tr>
// // //                 <tr>
// // //                   <th>Year Passed</th>
// // //                   <td>{selectedProfessionalData.yearOfPassing}</td>
// // //                 </tr>
// // //                 <tr>
// // //                   <th>Photo</th>
// // //                   <td>
// // //                     {selectedProfessionalData.photo !== "N/A" ? (
// // //                       <a
// // //                         href={`http://localhost:5000/uploads/${selectedProfessionalData.photo}`}
// // //                         target="_blank"
// // //                         rel="noopener noreferrer"
// // //                       >
// // //                         View Photo
// // //                       </a>
// // //                     ) : (
// // //                       "N/A"
// // //                     )}
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <th>Signature</th>
// // //                   <td>
// // //                     {selectedProfessionalData.signature !== "N/A" ? (
// // //                       <a
// // //                         href={`http://localhost:5000/uploads/${selectedProfessionalData.signature}`}
// // //                         target="_blank"
// // //                         rel="noopener noreferrer"
// // //                       >
// // //                         View Signature
// // //                       </a>
// // //                     ) : (
// // //                       "N/A"
// // //                     )}
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <th>Degree Certificate</th>
// // //                   <td>
// // //                     {selectedProfessionalData.degreeCertificate !== "N/A" ? (
// // //                       <a
// // //                         href={`http://localhost:5000/uploads/${selectedProfessionalData.degreeCertificate}`}
// // //                         target="_blank"
// // //                         rel="noopener noreferrer"
// // //                       >
// // //                         View Degree Certificate
// // //                       </a>
// // //                     ) : (
// // //                       "N/A"
// // //                     )}
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <th>Aadhar Card</th>
// // //                   <td>
// // //                     {selectedProfessionalData.aadharCard !== "N/A" ? (
// // //                       <a
// // //                         href={`http://localhost:5000/uploads/${selectedProfessionalData.aadharCard}`}
// // //                         target="_blank"
// // //                         rel="noopener noreferrer"
// // //                       >
// // //                         View Aadhar Card
// // //                       </a>
// // //                     ) : (
// // //                       "N/A"
// // //                     )}
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <th>PAN Card</th>
// // //                   <td>
// // //                     {selectedProfessionalData.panCard !== "N/A" ? (
// // //                       <a
// // //                         href={`http://localhost:5000/uploads/${selectedProfessionalData.panCard}`}
// // //                         target="_blank"
// // //                         rel="noopener noreferrer"
// // //                       >
// // //                         View PAN Card
// // //                       </a>
// // //                     ) : (
// // //                       "N/A"
// // //                     )}
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <th>Cancelled Cheque</th>
// // //                   <td>
// // //                     {selectedProfessionalData.cancelledCheque !== "N/A" ? (
// // //                       <a
// // //                         href={`http://localhost:5000/uploads/${selectedProfessionalData.cancelledCheque}`}
// // //                         target="_blank"
// // //                         rel="noopener noreferrer"
// // //                       >
// // //                         View Cancelled Cheque
// // //                       </a>
// // //                     ) : (
// // //                       "N/A"
// // //                     )}
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <th>Declaration</th>
// // //                   <td>
// // //                     {selectedProfessionalData.declaration !== "N/A" ? (
// // //                       <a
// // //                         href={`http://localhost:5000/uploads/${selectedProfessionalData.declaration}`}
// // //                         target="_blank"
// // //                         rel="noopener noreferrer"
// // //                       >
// // //                         View Declaration
// // //                       </a>
// // //                     ) : (
// // //                       "N/A"
// // //                     )}
// // //                   </td>
// // //                 </tr>
// // //               </tbody>
// // //             </table>
// // //             <button
// // //               className="am-action-btn am-close-popup-btn"
// // //               onClick={() => setShowProfessionalDataPopup(false)}
// // //             >
// // //               Close
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}
// // //       {activeForm === "doctor-nurse" && (
// // //         <div>
// // //           <button
// // //             className="am-action-btn am-doctor-nurse-back-btn"
// // //             onClick={() => setActiveForm("doctor-nurse-data")}
// // //           >
// // //             <i className="fas fa-chevron-left" style={{ marginRight: "0.5rem" }}></i>
// // //             Back
// // //           </button>
// // //           <form onSubmit={handleDoctorNurseSubmit} className="am-doctor-nurse-management-form">
// // //             <h3>Add Doctor/Nurse (Up to 10)</h3>
// // //             {doctorNurseDataArray.map((data, index) => (
// // //               <div key={index} className="am-doctor-nurse-form-section">
// // //                 <h4>Person {index + 1}</h4>
// // //                 <div className="am-doctor-nurse-form-grid">
// // //                   {fields.map((field) => (
// // //                     <div key={field.name} className="am-form-field">
// // //                       <label htmlFor={`${field.name}-${index}`}>
// // //                         {field.label}
// // //                         {field.required && <span className="am-required-asterisk">*</span>}
// // //                       </label>
// // //                       {field.type === "select" ? (
// // //                         <select
// // //                           id={`${field.name}-${index}`}
// // //                           name={field.name}
// // //                           value={data[field.name] || ""}
// // //                           onChange={(e) => handleInputChange(index, field.name, e.target.value)}
// // //                           required={field.required}
// // //                           className="am-form-input"
// // //                         >
// // //                           {field.options.map((option) => (
// // //                             <option key={option} value={option}>
// // //                               {option || "Select"}
// // //                             </option>
// // //                           ))}
// // //                         </select>
// // //                       ) : field.type === "file" ? (
// // //                         <input
// // //                           id={`${field.name}-${index}`}
// // //                           type="file"
// // //                           name={field.name}
// // //                           onChange={(e) => handleFileChange(index, field.name, e.target.files[0])}
// // //                           accept={field.accept}
// // //                           className="am-form-input"
// // //                         />
// // //                       ) : (
// // //                         <input
// // //                           id={`${field.name}-${index}`}
// // //                           type={field.type}
// // //                           name={field.name}
// // //                           value={data[field.name] || ""}
// // //                           onChange={(e) => handleInputChange(index, field.name, e.target.value)}
// // //                           required={field.required}
// // //                           className="am-form-input"
// // //                         />
// // //                       )}
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //                 {index > 0 && (
// // //                   <button
// // //                     type="button"
// // //                     className="am-action-btn am-remove-person-btn"
// // //                     onClick={() => removePerson(index)}
// // //                   >
// // //                     Remove Person
// // //                   </button>
// // //                 )}
// // //               </div>
// // //             ))}
// // //             <div className="am-doctor-nurse-button-container">
// // //               <button
// // //                 type="button"
// // //                 className="am-action-btn am-add-person-btn"
// // //                 onClick={addNewPerson}
// // //                 disabled={doctorNurseDataArray.length >= 10}
// // //               >
// // //                 <i className="fas fa-plus" style={{ marginRight: "0.5rem" }}></i>
// // //                 Add Person
// // //               </button>
// // //               <div className="am-form-action-buttons">
// // //                 <button type="submit" className="am-doctor-nurse-submit-btn" disabled={loading}>
// // //                   {loading ? "Submitting..." : "Submit All"}
// // //                 </button>
// // //                 <button
// // //                   type="button"
// // //                   className="am-doctor-nurse-cancel-btn"
// // //                   onClick={handleCancel}
// // //                 >
// // //                   Cancel
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       )}
// // //       {activeForm === "client" && (
// // //         <ClientManagement onBack={() => setActiveForm("doctor-nurse-data")} />
// // //       )}
// // //       {activeForm === "doctor-nurse-data" && (
// // //         <div className="am-doctor-nurse-data-container">
// // //           <div className="am-doctor-nurse-action-buttons">
// // //             <button
// // //               className="am-action-btn am-doctor-nurse-form-btn"
// // //               onClick={() => setActiveForm("doctor-nurse")}
// // //             >
// // //               <i className="fas fa-user-plus" style={{ marginRight: "0.5rem" }}></i>
// // //               Add Doctor/Nurse
// // //             </button>
// // //             <button
// // //               className="am-action-btn am-form-btn"
// // //               onClick={() => setActiveForm("client")}
// // //             >
// // //               <i className="fas fa-user-tie" style={{ marginRight: "0.5rem" }}></i>
// // //               Add Client
// // //             </button>
// // //           </div>
// // //           <div className="am-doctor-nurse-tabs-container">
// // //             <div className="am-doctor-nurse-tabs">
// // //               <button
// // //                 className={`am-doctor-nurse-tab ${activeForm === "doctor-nurse-data" ? "active" : ""}`}
// // //                 onClick={() => setActiveForm("doctor-nurse-data")}
// // //               >
// // //                 Doctor/Nurse Data
// // //               </button>
// // //               <button
// // //                 className={`am-tab ${activeForm === "client-data" ? "active" : ""}`}
// // //                 onClick={() => setActiveForm("client-data")}
// // //               >
// // //                 Client Data
// // //               </button>
// // //             </div>
// // //             <div className="am-doctor-nurse-data-table">
// // //               <h3>Doctor/Nurse Data</h3>
// // //               <table className="am-doctor-nurse-table">
// // //                 <thead>
// // //                   <tr>
// // //                     <th>ID</th>
// // //                     <th>Role</th>
// // //                     <th>Name</th>
// // //                     <th>Personal Data</th>
// // //                     <th>Professional Data</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {doctorNurses.length > 0 ? (
// // //                     doctorNurses.map((dn) => (
// // //                       <tr key={dn.USRID}>
// // //                         <td>{dn.USRID}</td>
// // //                         <td>{dn.role}</td>
// // //                         <td>{dn.name}</td>
// // //                         <td>
// // //                           <button
// // //                             className="am-action-btn am-view-details-btn"
// // //                             onClick={() => handlePersonalDataClick(dn)}
// // //                           >
// // //                             <i className="fas fa-eye"></i>
// // //                           </button>
// // //                         </td>
// // //                         <td>
// // //                           <button
// // //                             className="am-action-btn am-view-details-btn"
// // //                             onClick={() => handleProfessionalDataClick(dn)}
// // //                           >
// // //                             <i className="fas fa-eye"></i>
// // //                           </button>
// // //                         </td>
// // //                       </tr>
// // //                     ))
// // //                   ) : (
// // //                     <tr>
// // //                       <td colSpan="5">No Doctor/Nurse data available</td>
// // //                     </tr>
// // //                   )}
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //       {activeForm === "client-data" && (
// // //         <div className="am-data-container">
// // //           <div className="am-action-buttons">
// // //             <button
// // //               className="am-action-btn am-doctor-nurse-form-btn"
// // //               onClick={() => setActiveForm("doctor-nurse")}
// // //             >
// // //               <i className="fas fa-user-plus" style={{ marginRight: "0.5rem" }}></i>
// // //               Add Doctor/Nurse
// // //             </button>
// // //             <button
// // //               className="am-action-btn am-form-btn"
// // //               onClick={() => setActiveForm("client")}
// // //             >
// // //               <i className="fas fa-user-tie" style={{ marginRight: "0.5rem" }}></i>
// // //               Add Client
// // //             </button>
// // //           </div>
// // //           <div className="am-tabs-container">
// // //             <div className="am-tabs">
// // //               <button
// // //                 className={`am-doctor-nurse-tab ${activeForm === "doctor-nurse-data" ? "active" : ""}`}
// // //                 onClick={() => setActiveForm("doctor-nurse-data")}
// // //               >
// // //                 Doctor/Nurse Data
// // //               </button>
// // //               <button
// // //                 className={`am-tab ${activeForm === "client-data" ? "active" : ""}`}
// // //                 onClick={() => setActiveForm("client-data")}
// // //               >
// // //                 Client Data
// // //               </button>
// // //             </div>
// // //             <div className="am-data-table">
// // //               <h3>Client Data</h3>
// // //               <table className="am-doctor-nurse-table">
// // //                 <thead>
// // //                   <tr>
// // //                     <th>ID</th>
// // //                     <th>Client Name</th>
// // //                     <th>Total Sites</th>
// // //                     <th>Created At</th>
// // //                     <th>Officers</th>
// // //                     <th>Site Details</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {clients.length > 0 ? (
// // //                     clients.map((client) => (
// // //                       <tr key={client.client_id}>
// // //                         <td>{client.client_id}</td>
// // //                         <td>{client.client_name}</td>
// // //                         <td>{client.total_sites}</td>
// // //                         <td>{new Date(client.created_at).toLocaleDateString("en-IN")}</td>
// // //                         <td className="am-doctor-nurse-tooltip-cell">
// // //                           {client.officers && client.officers.length > 0 ? (
// // //                             <>
// // //                               <span className="am-doctor-nurse-tooltip-text">
// // //                                 {client.officers.map((officer) => (
// // //                                   <div key={officer.officer_id}>
// // //                                     {officer.name || "N/A"} ({officer.position || "N/A"})
// // //                                   </div>
// // //                                 ))}
// // //                               </span>
// // //                               {client.officers[0].name || "N/A"}
// // //                               {client.officers.length > 1 ? "..." : ""}
// // //                             </>
// // //                           ) : (
// // //                             "No Officers"
// // //                           )}
// // //                         </td>
// // //                         <td>
// // //                           <button
// // //                             className="am-action-btn am-view-details-btn"
// // //                             onClick={() => handleSiteDetailsClick(client.sites)}
// // //                           >
// // //                             <i className="fas fa-eye"></i>
// // //                           </button>
// // //                         </td>
// // //                       </tr>
// // //                     ))
// // //                   ) : (
// // //                     <tr>
// // //                       <td colSpan="6">No Client data available</td>
// // //                     </tr>
// // //                   )}
// // //                 </tbody>
// // //               </table>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default AdminManagement;


// // /////////////////-------------------working code ------------------------------.///////////////////

// // import React, { useState, useEffect } from "react";
// // import ClientManagement from "./../ClientManagement/ClientManagement";
// // import "./AdminManagement.css";

// // function AdminManagement() {
// //   const [activeForm, setActiveForm] = useState("doctor-nurse-data");
// //   const [doctorNurseDataArray, setDoctorNurseDataArray] = useState([{}]);
// //   const [clients, setClients] = useState([]);
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [showPopup, setShowPopup] = useState(false);
// //   const [doctorNurses, setDoctorNurses] = useState([]);
// //   const [selectedClientSites, setSelectedClientSites] = useState([]);
// //   const [showSiteDetailsPopup, setShowSiteDetailsPopup] = useState(false);
// //   const [showPersonalDataPopup, setShowPersonalDataPopup] = useState(false);
// //   const [showProfessionalDataPopup, setShowProfessionalDataPopup] = useState(false);
// //   const [selectedPersonalData, setSelectedPersonalData] = useState({});
// //   const [selectedProfessionalData, setSelectedProfessionalData] = useState({});
// //   const [showOfficerDetailsPopup, setShowOfficerDetailsPopup] = useState(false);
// //   const [selectedClientOfficers, setSelectedClientOfficers] = useState([]);

// //   useEffect(() => {
// //     if (activeForm === "doctor-nurse-data") {
// //       fetchDoctorNurses();
// //     } else if (activeForm === "client-data") {
// //       fetchClients();
// //     }
// //   }, [activeForm]);

// //   const fetchDoctorNurses = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         setError("Please log in to fetch Doctor/Nurse data.");
// //         return;
// //       }
// //       const response = await fetch("http://localhost:5000/api/doctor-nurse", {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });
// //       if (!response.ok) {
// //         const errorText = await response.text();
// //         console.error("Failed to fetch doctor/nurses:", errorText);
// //         setError(`Failed to fetch Doctor/Nurse data: ${errorText || response.status}`);
// //         return;
// //       }
// //       const data = await response.json();
// //       console.log("Doctor/Nurse data:", data);
// //       setDoctorNurses(data);
// //     } catch (err) {
// //       console.error("Error fetching doctor/nurses:", err);
// //       setError("An error occurred while fetching Doctor/Nurse data.");
// //     }
// //   };
// // const normalizePath = (filePath) => {
// //   if (!filePath) return "";
// //   // Convert backslashes to forward slashes
// //   let path = filePath.replace(/\\/g, "/");
// //   // Remove leading 'uploads/' if present
// //   if (path.startsWith("uploads/")) path = path.replace(/^uploads\//, "");
// //   return path;
// // };


// //   const fetchClients = async () => {
// //     try {
// //       setLoading(true);
// //       setError("");
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         setError("Please log in to fetch client data.");
// //         return;
// //       }
// //       const response = await fetch("http://localhost:5000/api/clients", {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });
// //       if (!response.ok) {
// //         const errorText = await response.text();
// //         console.error("Failed to fetch clients:", errorText);
// //         setError(`Failed to fetch client data: ${errorText || response.status}`);
// //         return;
// //       }
// //       const data = await response.json();
// //       console.log("Raw client data:", data);
// //       if (!Array.isArray(data)) {
// //         console.error("Client data is not an array:", data);
// //         setError("Invalid client data format received from server.");
// //         return;
// //       }
// //       const mappedClients = data.map((client) => {
// //         console.log("Mapping client:", client);
// //         return {
// //           client_id: client.client_id,
// //           client_code: client.client_code || "N/A",
// //           client_name: client.client_name || "Unknown Client",
// //           total_sites: client.total_sites || 0,
// //           created_at: client.created_at || new Date().toISOString(),
// //           sites: client.sites || [],
// //           officers: Array.isArray(client.officers) ? client.officers : [],
// //         };
// //       });
// //       console.log("Mapped clients:", mappedClients);
// //       setClients(mappedClients);
// //     } catch (err) {
// //       console.error("Error fetching clients:", err.message);
// //       setError("An error occurred while fetching client data: " + err.message);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const addNewPerson = () => {
// //     if (doctorNurseDataArray.length >= 10) {
// //       setError("Cannot add more than 10 persons at a time.");
// //       return;
// //     }
// //     setDoctorNurseDataArray((prev) => [...prev, {}]);
// //   };

// //   const removePerson = (index) => {
// //     if (doctorNurseDataArray.length === 1) {
// //       setError("At least one person is required.");
// //       return;
// //     }
// //     setDoctorNurseDataArray((prev) => prev.filter((_, i) => i !== index));
// //   };

// //   const handleInputChange = (index, field, value) => {
// //     setDoctorNurseDataArray((prev) =>
// //       prev.map((data, i) => (i === index ? { ...data, [field]: value } : data))
// //     );
// //   };

// //   const handleFileChange = (index, field, file) => {
// //     setDoctorNurseDataArray((prev) =>
// //       prev.map((data, i) => (i === index ? { ...data, [field]: file } : data))
// //     );
// //   };

// //   const handleCancel = () => {
// //     setDoctorNurseDataArray([{}]);
// //     setActiveForm("doctor-nurse-data");
// //   };

// //   const handleDoctorNurseSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setLoading(true);
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) {
// //         setError("Please log in to perform this action.");
// //         setLoading(false);
// //         return;
// //       }
// //       for (const [index, doctorNurseData] of doctorNurseDataArray.entries()) {
// //         const requiredFields = [
// //           "role",
// //           "name",
// //           "email",
// //           "mobile",
// //           "dob",
// //           "degreeName",
// //           "yearOfPassing",
// //         ];
// //         for (const field of requiredFields) {
// //           if (!doctorNurseData[field]) {
// //             setError(`Please fill all required fields for person ${index + 1}.`);
// //             setLoading(false);
// //             return;
// //           }
// //         }
// //         const formData = new FormData();
// //         Object.entries(doctorNurseData).forEach(([key, value]) => {
// //           if (value) formData.append(key, value);
// //         });
// //         for (let [key, value] of formData.entries()) {
// //           console.log(`FormData for person ${index + 1}: ${key}=${value}`);
// //         }
// //         const response = await fetch("http://localhost:5000/api/doctor-nurse", {
// //           method: "POST",
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //           },
// //           body: formData,
// //         });
// //         if (!response.ok) {
// //           const errorText = await response.text();
// //           console.error(`API Error for person ${index + 1}:`, errorText);
// //           setError(
// //             errorText || `HTTP ${response.status}: Failed to add person ${index + 1}.`
// //           );
// //           setLoading(false);
// //           return;
// //         }
// //         const data = await response.json();
// //         console.log(`Parsed data for person ${index + 1}:`, data);
// //       }
// //       setShowPopup(true);
// //       setTimeout(() => {
// //         setShowPopup(false);
// //         setDoctorNurseDataArray([{}]);
// //         fetchDoctorNurses();
// //         setActiveForm("doctor-nurse-data");
// //       }, 2000);
// //     } catch (err) {
// //       setError("An error occurred. Please try again later.");
// //       console.error("Error adding Doctor/Nurse:", err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

  
// // // Example usage in your Professional Data popup
// // <a
// //   href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.degreeCertificate)}`}
// //   target="_blank"
// //   rel="noopener noreferrer"
// // >
// //   View Degree Certificate
// // </a>


// //   const handleSiteDetailsClick = (sites) => {
// //     setSelectedClientSites(sites || []);
// //     setShowSiteDetailsPopup(true);
// //   };

// //   const handleOfficerDetailsClick = (officers) => {
// //     setSelectedClientOfficers(officers || []);
// //     setShowOfficerDetailsPopup(true);
// //   };

// //   const handlePersonalDataClick = (data) => {
// //     setSelectedPersonalData({
// //       dob: data.dob || "N/A",
// //       age: data.age || "N/A",
// //       residence: data.residence || "N/A",
// //       maritalStatus: data.maritalStatus || "N/A",
// //     });
// //     setShowPersonalDataPopup(true);
// //   };

// //   const handleProfessionalDataClick = (data) => {
// //     setSelectedProfessionalData({
// //       degreeName: data.degreeName || "N/A",
// //       yearOfPassing: data.yearOfPassing || "N/A",
// //       photo: data.photo || "N/A",
// //       signature: data.signature || "N/A",
// //       degreeCertificate: data.degreeCertificate || "N/A",
// //       aadharCard: data.aadharCard || "N/A",
// //       panCard: data.panCard || "N/A",
// //       cancelledCheque: data.cancelledCheque || "N/A",
// //       declaration: data.declaration || "N/A",
// //     });
// //     setShowProfessionalDataPopup(true);
// //   };

// //   const fields = [
// //     { name: "role", label: "Role", type: "select", options: ["", "Doctor", "Nurse"], required: true },
// //     { name: "name", label: "Name", type: "text", required: true },
// //     { name: "email", label: "Email", type: "email", required: true },
// //     { name: "mobile", label: "Mobile", type: "tel", required: true },
// //     { name: "dob", label: "DOB", type: "date", required: true },
// //     { name: "age", label: "Age", type: "number" },
// //     { name: "residence", label: "Address", type: "text" },
// //     {
// //       name: "maritalStatus",
// //       label: "Marital Status",
// //       type: "select",
// //       options: ["", "Single", "Married", "Divorced", "Widowed"],
// //     },
// //     { name: "degreeName", label: "Degree", type: "text", required: true },
// //     { name: "yearOfPassing", label: "Year Passed", type: "number", required: true },
// //     { name: "photo", label: "Photo", type: "file", accept: "image/*" },
// //     { name: "signature", label: "Signature", type: "file", accept: "image/*" },
// //     { name: "degreeCertificate", label: "Degree Cert.", type: "file", accept: ".pdf" },
// //     { name: "aadharCard", label: "Aadhar", type: "file", accept: ".pdf,image/*" },
// //     { name: "panCard", label: "PAN", type: "file", accept: ".pdf,image/*" },
// //     { name: "cancelledCheque", label: "Cheque", type: "file", accept: ".pdf,image/*" },
// //     { name: "declaration", label: "Declaration", type: "file", accept: ".pdf" },
// //   ];

// //   return (
// //     <div className="am-doctor-nurse-container">
// //       {error && <p className="am-error-message">{error}</p>}
// //       {loading && <p className="am-loading-message">Loading client data...</p>}
// //       {showPopup && (
// //         <div className="am-popup">Person(s) added successfully!</div>
// //       )}
// //       {showSiteDetailsPopup && (
// //         <div className="am-site-details-popup">
// //           <div className="am-site-details-popup-content">
// //             <h3>Site Details</h3>
// //             {selectedClientSites.length > 0 ? (
// //               <div className="am-sites-details">
// //                 {selectedClientSites.map((site, index) => (
// //                   <div key={site.site_id} className="am-site-item">
// //                     <h4>Site {index + 1}</h4>
// //                     <table className="am-site-details-table">
// //                       <tbody>
// //                         <tr>
// //                           <th>Site ID</th>
// //                           <td>{site.site_id}</td>
// //                         </tr>
// //                         <tr>
// //                           <th>Location</th>
// //                           <td>{site.location}</td>
// //                         </tr>
// //                         <tr>
// //                           <th>Deliverables</th>
// //                           <td>{Array.isArray(site.deliverables) ? site.deliverables.join(", ") : "N/A"}</td>
// //                         </tr>
// //                         <tr>
// //                           <th>Tentative Labours</th>
// //                           <td>{site.tentative_labours}</td>
// //                         </tr>
// //                         <tr>
// //                           <th>Labour Turnover</th>
// //                           <td>{site.labour_turnover}</td>
// //                         </tr>
// //                         <tr>
// //                           <th>Work Order</th>
// //                           <td>
// //                             {site.work_order ? (
// //                               <a
// //                                 href={`http://localhost:5000/uploads/${site.work_order}`}
// //                                 target="_blank"
// //                                 rel="noopener noreferrer"
// //                               >
// //                                 View PDF
// //                               </a>
// //                             ) : (
// //                               "N/A"
// //                             )}
// //                           </td>
// //                         </tr>
// //                       </tbody>
// //                     </table>
// //                   </div>
// //                 ))}
// //               </div>
// //             ) : (
// //               <p>No sites available for this client.</p>
// //             )}
// //             <button
// //               className="am-action-btn am-close-popup-btn"
// //               onClick={() => setShowSiteDetailsPopup(false)}
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //       {showOfficerDetailsPopup && (
// //         <div className="am-site-details-popup">
// //           <div className="am-site-details-popup-content">
// //             <h3>Officer Details</h3>
// //             {selectedClientOfficers.length > 0 ? (
// //               <div className="am-officers-details">
// //                 {selectedClientOfficers.map((officer, index) => (
// //                   <div key={officer.officer_id} className="am-officer-item">
// //                     <h4>Officer {index + 1}</h4>
// //                     <table className="am-site-details-table">
// //                       <tbody>
// //                         <tr>
// //                           <th>Officer ID</th>
// //                           <td>{officer.officer_id}</td>
// //                         </tr>
// //                         <tr>
// //                           <th>Name</th>
// //                           <td>{officer.name || "N/A"}</td>
// //                         </tr>
// //                         <tr>
// //                           <th>Position</th>
// //                           <td>{officer.position || "N/A"}</td>
// //                         </tr>
// //                         <tr>
// //                           <th>Phone</th>
// //                           <td>{officer.phone || "N/A"}</td>
// //                         </tr>
// //                         <tr>
// //                           <th>Email</th>
// //                           <td>{officer.email || "N/A"}</td>
// //                         </tr>
// //                       </tbody>
// //                     </table>
// //                   </div>
// //                 ))}
// //               </div>
// //             ) : (
// //               <p>No officers available for this client.</p>
// //             )}
// //             <button
// //               className="am-action-btn am-close-popup-btn"
// //               onClick={() => setShowOfficerDetailsPopup(false)}
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //       {showPersonalDataPopup && (
// //         <div className="am-data-popup">
// //           <div className="am-data-popup-content">
// //             <h3>Personal Data</h3>
// //             <table className="am-data-details-table">
// //               <tbody>
// //                 <tr>
// //                   <th>DOB</th>
// //                   <td>{selectedPersonalData.dob}</td>
// //                 </tr>
// //                 <tr>
// //                   <th>Age</th>
// //                   <td>{selectedPersonalData.age}</td>
// //                 </tr>
// //                 <tr>
// //                   <th>Address</th>
// //                   <td>{selectedPersonalData.residence}</td>
// //                 </tr>
// //                 <tr>
// //                   <th>Marital Status</th>
// //                   <td>{selectedPersonalData.maritalStatus}</td>
// //                 </tr>
// //               </tbody>
// //             </table>
// //             <button
// //               className="am-action-btn am-close-popup-btn"
// //               onClick={() => setShowPersonalDataPopup(false)}
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //       {showProfessionalDataPopup && (
// //   <div className="am-data-popup">
// //     <div className="am-data-popup-content">
// //       <h3>Professional Data</h3>
// //       <table className="am-data-details-table">
// //         <tbody>
// //           <tr>
// //             <th>Degree</th>
// //             <td>{selectedProfessionalData.degreeName}</td>
// //           </tr>
// //           <tr>
// //             <th>Year Passed</th>
// //             <td>{selectedProfessionalData.yearOfPassing}</td>
// //           </tr>
// //           <tr>
// //             <th>Photo</th>
// //             <td>
// //               {selectedProfessionalData.photo !== "N/A" ? (
// //                <a
// //   href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.photo)}`}
// //   target="_blank"
// //   rel="noopener noreferrer"
// // >
// //   View Photo
// // </a>



// //               ) : (
// //                 "N/A"
// //               )}
// //             </td>
// //           </tr>
// //           <tr>
// //             <th>Signature</th>
// //             <td>
// //               {selectedProfessionalData.signature !== "N/A" ? (
// //                 <a
// //                   href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.signature)}`}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   View Signature
// //                 </a>
// //               ) : (
// //                 "N/A"
// //               )}
// //             </td>
// //           </tr>
// //           <tr>
// //             <th>Degree Certificate</th>
// //             <td>
// //               {selectedProfessionalData.degreeCertificate !== "N/A" ? (
// //                 <a
// //                   href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.degreeCertificate)}`}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   View Degree Certificate
// //                 </a>
// //               ) : (
// //                 "N/A"
// //               )}
// //             </td>
// //           </tr>
// //           <tr>
// //             <th>Aadhar Card</th>
// //             <td>
// //               {selectedProfessionalData.aadharCard !== "N/A" ? (
// //                 <a
// //                   href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.aadharCard)}`}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   View Aadhar Card
// //                 </a>
// //               ) : (
// //                 "N/A"
// //               )}
// //             </td>
// //           </tr>
// //           <tr>
// //             <th>PAN Card</th>
// //             <td>
// //               {selectedProfessionalData.panCard !== "N/A" ? (
// //                 <a
// //                   href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.panCard)}`}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   View PAN Card
// //                 </a>
// //               ) : (
// //                 "N/A"
// //               )}
// //             </td>
// //           </tr>
// //           <tr>
// //             <th>Cancelled Cheque</th>
// //             <td>
// //               {selectedProfessionalData.cancelledCheque !== "N/A" ? (
// //                 <a
// //                   href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.cancelledCheque)}`}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   View Cancelled Cheque
// //                 </a>
// //               ) : (
// //                 "N/A"
// //               )}
// //             </td>
// //           </tr>
// //           <tr>
// //             <th>Declaration</th>
// //             <td>
// //               {selectedProfessionalData.declaration !== "N/A" ? (
// //                 <a
// //                   href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.declaration)}`}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   View Declaration
// //                 </a>
// //               ) : (
// //                 "N/A"
// //               )}
// //             </td>
// //           </tr>
// //         </tbody>
// //       </table>
// //       <button
// //         className="am-action-btn am-close-popup-btn"
// //         onClick={() => setShowProfessionalDataPopup(false)}
// //       >
// //         Close
// //       </button>
// //     </div>
// //   </div>
// // )}



// //       {activeForm === "doctor-nurse" && (
// //         <div>
// //           <button
// //             className="am-action-btn am-doctor-nurse-back-btn"
// //             onClick={() => setActiveForm("doctor-nurse-data")}
// //           >
// //             <i className="fas fa-chevron-left" style={{ marginRight: "0.5rem" }}></i>
// //             Back
// //           </button>
// //           <form onSubmit={handleDoctorNurseSubmit} className="am-doctor-nurse-management-form">
// //             <h3>Add Doctor/Nurse (Up to 10)</h3>
// //             {doctorNurseDataArray.map((data, index) => (
// //               <div key={index} className="am-doctor-nurse-form-section">
// //                 <h4>Person {index + 1}</h4>
// //                 <div className="am-doctor-nurse-form-grid">
// //                   {fields.map((field) => (
// //                     <div key={field.name} className="am-form-field">
// //                       <label htmlFor={`${field.name}-${index}`}>
// //                         {field.label}
// //                         {field.required && <span className="am-required-asterisk">*</span>}
// //                       </label>
// //                       {field.type === "select" ? (
// //                         <select
// //                           id={`${field.name}-${index}`}
// //                           name={field.name}
// //                           value={data[field.name] || ""}
// //                           onChange={(e) => handleInputChange(index, field.name, e.target.value)}
// //                           required={field.required}
// //                           className="am-form-input"
// //                         >
// //                           {field.options.map((option) => (
// //                             <option key={option} value={option}>
// //                               {option || "Select"}
// //                             </option>
// //                           ))}
// //                         </select>
// //                       ) : field.type === "file" ? (
// //                         <input
// //                           id={`${field.name}-${index}`}
// //                           type="file"
// //                           name={field.name}
// //                           onChange={(e) => handleFileChange(index, field.name, e.target.files[0])}
// //                           accept={field.accept}
// //                           className="am-form-input"
// //                         />
// //                       ) : (
// //                         <input
// //                           id={`${field.name}-${index}`}
// //                           type={field.type}
// //                           name={field.name}
// //                           value={data[field.name] || ""}
// //                           onChange={(e) => handleInputChange(index, field.name, e.target.value)}
// //                           required={field.required}
// //                           className="am-form-input"
// //                         />
// //                       )}
// //                     </div>
// //                   ))}
// //                 </div>
// //                 {index > 0 && (
// //                   <button
// //                     type="button"
// //                     className="am-action-btn am-remove-person-btn"
// //                     onClick={() => removePerson(index)}
// //                   >
// //                     Remove Person
// //                   </button>
// //                 )}
// //               </div>
// //             ))}
// //             <div className="am-doctor-nurse-button-container">
// //               <button
// //                 type="button"
// //                 className="am-action-btn am-add-person-btn"
// //                 onClick={addNewPerson}
// //                 disabled={doctorNurseDataArray.length >= 10}
// //               >
// //                 <i className="fas fa-plus" style={{ marginRight: "0.5rem" }}></i>
// //                 Add Person
// //               </button>
// //               <div className="am-form-action-buttons">
// //                 <button type="submit" className="am-doctor-nurse-submit-btn" disabled={loading}>
// //                   {loading ? "Submitting..." : "Submit All"}
// //                 </button>
// //                 <button
// //                   type="button"
// //                   className="am-doctor-nurse-cancel-btn"
// //                   onClick={handleCancel}
// //                 >
// //                   Cancel
// //                 </button>
// //               </div>
// //             </div>
// //           </form>
// //         </div>
// //       )}
// //       {activeForm === "client" && (
// //         <ClientManagement onBack={() => setActiveForm("doctor-nurse-data")} />
// //       )}
// //       {activeForm === "doctor-nurse-data" && (
// //         <div className="am-doctor-nurse-data-container">
// //           <div className="am-doctor-nurse-action-buttons">
// //             <button
// //               className="am-action-btn am-doctor-nurse-form-btn"
// //               onClick={() => setActiveForm("doctor-nurse")}
// //             >
// //               <i className="fas fa-user-plus" style={{ marginRight: "0.5rem" }}></i>
// //               Add Doctor/Nurse
// //             </button>
// //             <button
// //               className="am-action-btn am-form-btn"
// //               onClick={() => setActiveForm("client")}
// //             >
// //               <i className="fas fa-user-tie" style={{ marginRight: "0.5rem" }}></i>
// //               Add Client
// //             </button>
// //           </div>
// //           <div className="am-doctor-nurse-tabs-container">
// //             <div className="am-doctor-nurse-tabs">
// //               <button
// //                 className={`am-doctor-nurse-tab ${activeForm === "doctor-nurse-data" ? "active" : ""}`}
// //                 onClick={() => setActiveForm("doctor-nurse-data")}
// //               >
// //                 Doctor/Nurse Data
// //               </button>
// //               <button
// //                 className={`am-tab ${activeForm === "client-data" ? "active" : ""}`}
// //                 onClick={() => setActiveForm("client-data")}
// //               >
// //                 Client Data
// //               </button>
// //             </div>
// //             <div className="am-doctor-nurse-data-table">
// //               <h3>Doctor/Nurse Data</h3>
// //               <table className="am-doctor-nurse-table">
// //                 <thead>
// //                   <tr>
// //                     <th>ID</th>
// //                     <th>Role</th>
// //                     <th>Name</th>
// //                     <th>Personal Data</th>
// //                     <th>Professional Data</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {doctorNurses.length > 0 ? (
// //                     doctorNurses.map((dn) => (
// //                       <tr key={dn.USRID}>
// //                         <td>{dn.USRID}</td>
// //                         <td>{dn.role}</td>
// //                         <td>{dn.name}</td>
// //                         <td>
// //                           <button
// //                             className="am-action-btn am-view-details-btn"
// //                             onClick={() => handlePersonalDataClick(dn)}
// //                           >
// //                             <i className="fas fa-eye"></i>
// //                           </button>
// //                         </td>
// //                         <td>
// //                           <button
// //                             className="am-action-btn am-view-details-btn"
// //                             onClick={() => handleProfessionalDataClick(dn)}
// //                           >
// //                             <i className="fas fa-eye"></i>
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))
// //                   ) : (
// //                     <tr>
// //                       <td colSpan="5">No Doctor/Nurse data available</td>
// //                     </tr>
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //       {activeForm === "client-data" && (
// //         <div className="am-data-container">
// //           <div className="am-action-buttons">
// //             <button
// //               className="am-action-btn am-doctor-nurse-form-btn"
// //               onClick={() => setActiveForm("doctor-nurse")}
// //             >
// //               <i className="fas fa-user-plus" style={{ marginRight: "0.5rem" }}></i>
// //               Add Doctor/Nurse
// //             </button>
// //             <button
// //               className="am-action-btn am-form-btn"
// //               onClick={() => setActiveForm("client")}
// //             >
// //               <i className="fas fa-user-tie" style={{ marginRight: "0.5rem" }}></i>
// //               Add Client
// //             </button>
// //           </div>
// //           <div className="am-tabs-container">
// //             <div className="am-tabs">
// //               <button
// //                 className={`am-doctor-nurse-tab ${activeForm === "doctor-nurse-data" ? "active" : ""}`}
// //                 onClick={() => setActiveForm("doctor-nurse-data")}
// //               >
// //                 Doctor/Nurse Data
// //               </button>
// //               <button
// //                 className={`am-tab ${activeForm === "client-data" ? "active" : ""}`}
// //                 onClick={() => setActiveForm("client-data")}
// //               >
// //                 Client Data
// //               </button>
// //             </div>
// //             <div className="am-data-table">
// //               <h3>Client Data</h3>
// //               <table className="am-doctor-nurse-table">
// //                 <thead>
// //                   <tr>
// //                     <th>ID</th>
// //                     <th>Client Name</th>
// //                     <th>Total Sites</th>
// //                     <th>Created At</th>
// //                     <th>Officers</th>
// //                     <th>Site Details</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {clients.length > 0 ? (
// //                     clients.map((client) => (
// //                       <tr key={client.client_id}>
// //                         <td>{client.client_id}</td>
// //                         <td>{client.client_name}</td>
// //                         <td>{client.total_sites}</td>
// //                         <td>{new Date(client.created_at).toLocaleDateString("en-IN")}</td>
// //                         <td>
// //                           <button
// //                             className="am-action-btn am-view-details-btn"
// //                             onClick={() => handleOfficerDetailsClick(client.officers)}
// //                           >
// //                             <i className="fas fa-eye"></i>
// //                           </button>
// //                         </td>
// //                         <td>
// //                           <button
// //                             className="am-action-btn am-view-details-btn"
// //                             onClick={() => handleSiteDetailsClick(client.sites)}
// //                           >
// //                             <i className="fas fa-eye"></i>
// //                           </button>
// //                         </td>
// //                       </tr>
// //                     ))
// //                   ) : (
// //                     <tr>
// //                       <td colSpan="6">No Client data available</td>
// //                     </tr>
// //                   )}
// //                 </tbody>
// //               </table>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default AdminManagement;

// ////------------view documents working ---------------------/////

// import React, { useState, useEffect } from "react";
// import ClientManagement from "./../ClientManagement/ClientManagement";
// import "./AdminManagement.css";

// function AdminManagement() {
//   const [activeForm, setActiveForm] = useState("doctor-nurse-data");
//   const [doctorNurseDataArray, setDoctorNurseDataArray] = useState([{}]);
//   const [clients, setClients] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [doctorNurses, setDoctorNurses] = useState([]);
//   const [selectedClientSites, setSelectedClientSites] = useState([]);
//   const [showSiteDetailsPopup, setShowSiteDetailsPopup] = useState(false);
//   const [showPersonalDataPopup, setShowPersonalDataPopup] = useState(false);
//   const [showProfessionalDataPopup, setShowProfessionalDataPopup] = useState(false);
//   const [selectedPersonalData, setSelectedPersonalData] = useState({});
//   const [selectedProfessionalData, setSelectedProfessionalData] = useState({});
//   const [showOfficerDetailsPopup, setShowOfficerDetailsPopup] = useState(false);
//   const [selectedClientOfficers, setSelectedClientOfficers] = useState([]);
//   const [editMode, setEditMode] = useState(false);
//   const [editEmployee, setEditEmployee] = useState(null);
// const [editClient, setEditClient] = useState(null);
//   useEffect(() => {
//     if (activeForm === "doctor-nurse-data") {
//       fetchDoctorNurses();
//     } else if (activeForm === "client-data") {
//       fetchClients();
//     }
//   }, [activeForm]);

//   const fetchDoctorNurses = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("Please log in to fetch Doctor/Nurse data.");
//         return;
//       }
//       const response = await fetch("http://localhost:5000/api/doctor-nurse", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       if (!response.ok) {
//         const errorText = await response.text();
//         console.error("Failed to fetch doctor/nurses:", errorText);
//         setError(`Failed to fetch Doctor/Nurse data: ${errorText || response.status}`);
//         return;
//       }
//       const data = await response.json();
//       console.log("Doctor/Nurse data:", data);
//       setDoctorNurses(data);
//     } catch (err) {
//       console.error("Error fetching doctor/nurses:", err);
//       setError("An error occurred while fetching Doctor/Nurse data.");
//     }
//   };

//   const normalizePath = (filePath) => {
//     if (!filePath) return "";
//     let path = filePath.replace(/\\/g, "/");
//     if (path.startsWith("uploads/")) path = path.replace(/^uploads\//, "");
//     return path;
//   };
// const normalizeWorkOrderPath = (filePath) => {
//   if (!filePath) return "";
//   // Replace backslashes with forward slashes
//   let path = filePath.replace(/\\/g, "/");
//   // Remove leading 'uploads/' or 'uploads\' if present
//   path = path.replace(/^uploads\//, "").replace(/^uploads\\/, "");
//   return path;
// };
//  const fetchClients = async () => {
//   try {
//     setLoading(true);
//     setError("");
//     const token = localStorage.getItem("token");
//     if (!token) {
//       setError("Please log in to fetch client data.");
//       return;
//     }
//     const response = await fetch("http://localhost:5000/api/clients", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("Failed to fetch clients:", errorText);
//       setError(`Failed to fetch client data: ${errorText || response.status}`);
//       return;
//     }
//     const data = await response.json();
//     console.log("Raw client data:", data);
//     if (!Array.isArray(data)) {
//       console.error("Client data is not an array:", data);
//       setError("Invalid client data format received from server.");
//       return;
//     }
//     const mappedClients = data.map((client) => {
//       // Remove duplicate sites based on site_id
//       const uniqueSites = Array.from(
//         new Map(client.sites.map((site) => [site.site_id, site])).values()
//       );
//       // Remove duplicate officers based on officer_id
//       const uniqueOfficers = Array.from(
//         new Map(client.officers.map((officer) => [officer.officer_id, officer])).values()
//       );
//       return {
//         client_id: client.client_id,
//         client_code: client.client_code || "N/A",
//         client_name: client.client_name || "Unknown Client",
//         total_sites: client.total_sites || 0,
//         created_at: client.created_at || new Date().toISOString(),
//         sites: uniqueSites,
//         officers: uniqueOfficers,
//       };
//     });
//     console.log("Mapped clients:", mappedClients);
//     setClients(mappedClients);
//   } catch (err) {
//     console.error("Error fetching clients:", err.message);
//     setError("An error occurred while fetching client data: " + err.message);
//   } finally {
//     setLoading(false);
//   }
// };
//   const addNewPerson = () => {
//     if (doctorNurseDataArray.length >= 10) {
//       setError("Cannot add more than 10 persons at a time.");
//       return;
//     }
//     setDoctorNurseDataArray((prev) => [...prev, {}]);
//   };

//   const removePerson = (index) => {
//     if (doctorNurseDataArray.length === 1) {
//       setError("At least one person is required.");
//       return;
//     }
//     setDoctorNurseDataArray((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleInputChange = (index, field, value) => {
//     if (editMode) {
//       setEditEmployee((prev) => ({ ...prev, [field]: value }));
//     } else {
//       setDoctorNurseDataArray((prev) =>
//         prev.map((data, i) => (i === index ? { ...data, [field]: value } : data))
//       );
//     }
//   };

//   const handleFileChange = (index, field, file) => {
//     if (editMode) {
//       setEditEmployee((prev) => ({ ...prev, [field]: file }));
//     } else {
//       setDoctorNurseDataArray((prev) =>
//         prev.map((data, i) => (i === index ? { ...data, [field]: file } : data))
//       );
//     }
//   };

//   const handleCancel = () => {
//     setDoctorNurseDataArray([{}]);
//     setEditMode(false);
//     setEditEmployee(null);
//     setActiveForm("doctor-nurse-data");
//   };

//   const handleDoctorNurseSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         setError("Please log in to perform this action.");
//         setLoading(false);
//         return;
//       }
//       const dataArray = editMode ? [editEmployee] : doctorNurseDataArray;
//       for (const [index, doctorNurseData] of dataArray.entries()) {
//         const requiredFields = [
//           "role",
//           "name",
//           "email",
//           "mobile",
//           "dob",
//           "degreeName",
//           "yearOfPassing",
//         ];
//         for (const field of requiredFields) {
//           if (!doctorNurseData[field]) {
//             setError(`Please fill all required fields for person ${index + 1}.`);
//             setLoading(false);
//             return;
//           }
//         }
//         const formData = new FormData();
//         Object.entries(doctorNurseData).forEach(([key, value]) => {
//           if (value && key !== "USRID") {
//             if (typeof value === "object" && value instanceof File) {
//               formData.append(key, value);
//             } else if (value !== null && value !== undefined) {
//               formData.append(key, value);
//             }
//           }
//         });
//         for (let [key, value] of formData.entries()) {
//           console.log(`FormData for person ${index + 1}: ${key}=${value}`);
//         }
//         const url = editMode
//           ? `http://localhost:5000/api/doctor-nurse/${doctorNurseData.USRID}`
//           : "http://localhost:5000/api/doctor-nurse";
//         const method = editMode ? "PUT" : "POST";
//         const response = await fetch(url, {
//           method,
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           body: formData,
//         });
//         if (!response.ok) {
//           const errorText = await response.text();
//           console.error(`API Error for person ${index + 1}:`, errorText);
//           setError(
//             errorText || `HTTP ${response.status}: Failed to ${editMode ? "update" : "add"} person ${index + 1}.`
//           );
//           setLoading(false);
//           return;
//         }
//         const data = await response.json();
//         console.log(`Parsed data for person ${index + 1}:`, data);
//       }
//       setShowPopup(true);
//       setTimeout(() => {
//         setShowPopup(false);
//         setDoctorNurseDataArray([{}]);
//         setEditMode(false);
//         setEditEmployee(null);
//         fetchDoctorNurses();
//         setActiveForm("doctor-nurse-data");
//       }, 2000);
//     } catch (err) {
//       setError("An error occurred. Please try again later.");
//       console.error(`Error ${editMode ? "updating" : "adding"} Doctor/Nurse:`, err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEditClick = (employee) => {
//     setEditMode(true);
//     setEditEmployee({ ...employee });
//     setActiveForm("doctor-nurse");
//   };

//   const handleSiteDetailsClick = (sites) => {
//     setSelectedClientSites(sites || []);
//     setShowSiteDetailsPopup(true);
//   };

//   const handleOfficerDetailsClick = (officers) => {
//     setSelectedClientOfficers(officers || []);
//     setShowOfficerDetailsPopup(true);
//   };

//   const handlePersonalDataClick = (data) => {
//     setSelectedPersonalData({
//       dob: data.dob || "N/A",
//       age: data.age || "N/A",
//       residence: data.residence || "N/A",
//       maritalStatus: data.maritalStatus || "N/A",
//     });
//     setShowPersonalDataPopup(true);
//   };

//   const handleProfessionalDataClick = (data) => {
//     setSelectedProfessionalData({
//       degreeName: data.degreeName || "N/A",
//       yearOfPassing: data.yearOfPassing || "N/A",
//       photo: data.photo || "N/A",
//       signature: data.signature || "N/A",
//       degreeCertificate: data.degreeCertificate || "N/A",
//       aadharCard: data.aadharCard || "N/A",
//       panCard: data.panCard || "N/A",
//       cancelledCheque: data.cancelledCheque || "N/A",
//       declaration: data.declaration || "N/A",
//     });
//     setShowProfessionalDataPopup(true);
//   };

//   const fields = [
//     { name: "role", label: "Role", type: "select", options: ["", "Doctor", "Nurse"], required: true },
//     { name: "name", label: "Name", type: "text", required: true },
//     { name: "email", label: "Email", type: "email", required: true },
//     { name: "mobile", label: "Mobile", type: "tel", required: true },
//     { name: "dob", label: "DOB", type: "date", required: true },
//     { name: "age", label: "Age", type: "number" },
//     { name: "residence", label: "Address", type: "text" },
//     {
//       name: "maritalStatus",
//       label: "Marital Status",
//       type: "select",
//       options: ["", "Single", "Married", "Divorced", "Widowed"],
//     },
//     { name: "degreeName", label: "Degree", type: "text", required: true },
//     { name: "yearOfPassing", label: "Year Passed", type: "number", required: true },
//     { name: "photo", label: "Photo", type: "file", accept: "image/*" },
//     { name: "signature", label: "Signature", type: "file", accept: "image/*" },
//     { name: "degreeCertificate", label: "Degree Cert.", type: "file", accept: ".pdf" },
//     { name: "aadharCard", label: "Aadhar", type: "file", accept: ".pdf,image/*" },
//     { name: "panCard", label: "PAN", type: "file", accept: ".pdf,image/*" },
//     { name: "cancelledCheque", label: "Cheque", type: "file", accept: ".pdf,image/*" },
//     { name: "declaration", label: "Declaration", type: "file", accept: ".pdf" },
//   ];

//   return (
//     <div className="am-doctor-nurse-container">
//       {error && <p className="am-error-message">{error}</p>}
//       {loading && <p className="am-loading-message">Loading client data...</p>}
//       {showPopup && (
//         <div className="am-popup">{editMode ? "Person updated successfully!" : "Person(s) added successfully!"}</div>
//       )}
//       {showSiteDetailsPopup && (
//         <div className="am-site-details-popup">
//           <div className="am-site-details-popup-content">
//             <h3>Site Details</h3>
//             {selectedClientSites.length > 0 ? (
//               <div className="am-sites-details">
//                 {selectedClientSites.map((site, index) => (
//                   <div key={site.site_id} className="am-site-item">
//                     <h4>Site {index + 1}</h4>
//                     <table className="am-site-details-table">
//                       <tbody>
//                         <tr>
//                           <th>Site ID</th>
//                           <td>{site.site_id}</td>
//                         </tr>
//                         <tr>
//                           <th>Location</th>
//                           <td>{site.location}</td>
//                         </tr>
//                         <tr>
//                           <th>Deliverables</th>
//                           <td>{Array.isArray(site.deliverables) ? site.deliverables.join(", ") : "N/A"}</td>
//                         </tr>
//                         <tr>
//                           <th>Tentative Labours</th>
//                           <td>{site.tentative_labours}</td>
//                         </tr>
//                         <tr>
//                           <th>Labour Turnover</th>
//                           <td>{site.labour_turnover}</td>
//                         </tr>
//                         <tr>
//   <th>Work Order</th>
//   <td>
//     {site.work_order ? (
//       <a
//         href={`http://localhost:5000/uploads/${normalizeWorkOrderPath(site.work_order)}`}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         View PDF
//       </a>
//     ) : (
//       "N/A"
//     )}
//   </td>
// </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No sites available for this client.</p>
//             )}
//             <button
//               className="am-action-btn am-close-popup-btn"
//               onClick={() => setShowSiteDetailsPopup(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//       {showOfficerDetailsPopup && (
//         <div className="am-site-details-popup">
//           <div className="am-site-details-popup-content">
//             <h3>Officer Details</h3>
//             {selectedClientOfficers.length > 0 ? (
//               <div className="am-officers-details">
//                 {selectedClientOfficers.map((officer, index) => (
//                   <div key={officer.officer_id} className="am-officer-item">
//                     <h4>Officer {index + 1}</h4>
//                     <table className="am-site-details-table">
//                       <tbody>
//                         <tr>
//                           <th>Officer ID</th>
//                           <td>{officer.officer_id}</td>
//                         </tr>
//                         <tr>
//                           <th>Name</th>
//                           <td>{officer.name || "N/A"}</td>
//                         </tr>
//                         <tr>
//                           <th>Position</th>
//                           <td>{officer.position || "N/A"}</td>
//                         </tr>
//                         <tr>
//                           <th>Phone</th>
//                           <td>{officer.phone || "N/A"}</td>
//                         </tr>
//                         <tr>
//                           <th>Email</th>
//                           <td>{officer.email || "N/A"}</td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p>No officers available for this client.</p>
//             )}
//             <button
//               className="am-action-btn am-close-popup-btn"
//               onClick={() => setShowOfficerDetailsPopup(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//       {showPersonalDataPopup && (
//         <div className="am-data-popup">
//           <div className="am-data-popup-content">
//             <h3>Personal Data</h3>
//             <table className="am-data-details-table">
//               <tbody>
//                 <tr>
//                   <th>DOB</th>
//                   <td>{selectedPersonalData.dob}</td>
//                 </tr>
//                 <tr>
//                   <th>Age</th>
//                   <td>{selectedPersonalData.age}</td>
//                 </tr>
//                 <tr>
//                   <th>Address</th>
//                   <td>{selectedPersonalData.residence}</td>
//                 </tr>
//                 <tr>
//                   <th>Marital Status</th>
//                   <td>{selectedPersonalData.maritalStatus}</td>
//                 </tr>
//               </tbody>
//             </table>
//             <button
//               className="am-action-btn am-close-popup-btn"
//               onClick={() => setShowPersonalDataPopup(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//       {showProfessionalDataPopup && (
//         <div className="am-data-popup">
//           <div className="am-data-popup-content">
//             <h3>Professional Data</h3>
//             <table className="am-data-details-table">
//               <tbody>
//                 <tr>
//                   <th>Degree</th>
//                   <td>{selectedProfessionalData.degreeName}</td>
//                 </tr>
//                 <tr>
//                   <th>Year Passed</th>
//                   <td>{selectedProfessionalData.yearOfPassing}</td>
//                 </tr>
//                 <tr>
//                   <th>Photo</th>
//                   <td>
//                     {selectedProfessionalData.photo !== "N/A" ? (
//                       <a
//                         href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.photo)}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         View Photo
//                       </a>
//                     ) : (
//                       "N/A"
//                     )}
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>Signature</th>
//                   <td>
//                     {selectedProfessionalData.signature !== "N/A" ? (
//                       <a
//                         href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.signature)}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         View Signature
//                       </a>
//                     ) : (
//                       "N/A"
//                     )}
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>Degree Certificate</th>
//                   <td>
//                     {selectedProfessionalData.degreeCertificate !== "N/A" ? (
//                       <a
//                         href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.degreeCertificate)}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         View Degree Certificate
//                       </a>
//                     ) : (
//                       "N/A"
//                     )}
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>Aadhar Card</th>
//                   <td>
//                     {selectedProfessionalData.aadharCard !== "N/A" ? (
//                       <a
//                         href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.aadharCard)}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         View Aadhar Card
//                       </a>
//                     ) : (
//                       "N/A"
//                     )}
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>PAN Card</th>
//                   <td>
//                     {selectedProfessionalData.panCard !== "N/A" ? (
//                       <a
//                         href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.panCard)}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         View PAN Card
//                       </a>
//                     ) : (
//                       "N/A"
//                     )}
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>Cancelled Cheque</th>
//                   <td>
//                     {selectedProfessionalData.cancelledCheque !== "N/A" ? (
//                       <a
//                         href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.cancelledCheque)}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         View Cancelled Cheque
//                       </a>
//                     ) : (
//                       "N/A"
//                     )}
//                   </td>
//                 </tr>
//                 <tr>
//                   <th>Declaration</th>
//                   <td>
//                     {selectedProfessionalData.declaration !== "N/A" ? (
//                       <a
//                         href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.declaration)}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         View Declaration
//                       </a>
//                     ) : (
//                       "N/A"
//                     )}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//             <button
//               className="am-action-btn am-close-popup-btn"
//               onClick={() => setShowProfessionalDataPopup(false)}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//       {activeForm === "doctor-nurse" && (
//         <div>
//           <button
//             className="am-action-btn am-doctor-nurse-back-btn"
//             onClick={() => setActiveForm("doctor-nurse-data")}
//           >
//             <i className="fas fa-chevron-left" style={{ marginRight: "0.5rem" }}></i>
//             Back
//           </button>
//           <form onSubmit={handleDoctorNurseSubmit} className="am-doctor-nurse-management-form">
//             <h3>{editMode ? "Edit Doctor/Nurse" : "Add Doctor/Nurse (Up to 10)"}</h3>
//             {(editMode ? [editEmployee] : doctorNurseDataArray).map((data, index) => (
//               <div key={index} className="am-doctor-nurse-form-section">
//                 <h4>{editMode ? "Edit Person" : `Person ${index + 1}`}</h4>
//                 <div className="am-doctor-nurse-form-grid">
//                   {fields.map((field) => (
//                     <div key={field.name} className="am-form-field">
//                       <label htmlFor={`${field.name}-${index}`}>
//                         {field.label}
//                         {field.required && <span className="am-required-asterisk">*</span>}
//                       </label>
//                       {field.type === "select" ? (
//                         <select
//                           id={`${field.name}-${index}`}
//                           name={field.name}
//                           value={editMode ? editEmployee[field.name] || "" : data[field.name] || ""}
//                           onChange={(e) => handleInputChange(index, field.name, e.target.value)}
//                           required={field.required}
//                           className="am-form-input"
//                         >
//                           {field.options.map((option) => (
//                             <option key={option} value={option}>
//                               {option || "Select"}
//                             </option>
//                           ))}
//                         </select>
//                       ) : field.type === "file" ? (
//                         <div className="am-file-input-container">
//                           {editMode && data[field.name] && typeof data[field.name] === "string" && (
//                             <div className="am-existing-file">
//                               <p>Current: <a
//                                 href={`http://localhost:5000/uploads/${normalizePath(data[field.name])}`}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                               >
//                                 {normalizePath(data[field.name]).split('/').pop()}
//                               </a></p>
//                             </div>
//                           )}
//                           <input
//                             id={`${field.name}-${index}`}
//                             type="file"
//                             name={field.name}
//                             onChange={(e) => handleFileChange(index, field.name, e.target.files[0])}
//                             accept={field.accept}
//                             className="am-form-input"
//                           />
//                         </div>
//                       ) : (
//                         <input
//                           id={`${field.name}-${index}`}
//                           type={field.type}
//                           name={field.name}
//                           value={editMode ? editEmployee[field.name] || "" : data[field.name] || ""}
//                           onChange={(e) => handleInputChange(index, field.name, e.target.value)}
//                           required={field.required}
//                           className="am-form-input"
//                         />
//                       )}
//                     </div>
//                   ))}
//                 </div>
//                 {!editMode && index > 0 && (
//                   <button
//                     type="button"
//                     className="am-action-btn am-remove-person-btn"
//                     onClick={() => removePerson(index)}
//                   >
//                     Remove Person
//                   </button>
//                 )}
//               </div>
//             ))}
//             <div className="am-doctor-nurse-button-container">
//               {!editMode && (
//                 <button
//                   type="button"
//                   className="am-action-btn am-add-person-btn"
//                   onClick={addNewPerson}
//                   disabled={doctorNurseDataArray.length >= 10}
//                 >
//                   <i className="fas fa-plus" style={{ marginRight: "0.5rem" }}></i>
//                   Add Person
//                 </button>
//               )}
//               <div className="am-form-action-buttons">
//                 <button type="submit" className="am-doctor-nurse-submit-btn" disabled={loading}>
//                   {loading ? "Submitting..." : editMode ? "Update" : "Submit All"}
//                 </button>
//                 <button
//                   type="button"
//                   className="am-doctor-nurse-cancel-btn"
//                   onClick={handleCancel}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       )}
//       {activeForm === "client" && (
//         <ClientManagement onBack={() => setActiveForm("doctor-nurse-data")} />
//       )}
//       {activeForm === "doctor-nurse-data" && (
//         <div className="am-doctor-nurse-data-container">
//           <div className="am-doctor-nurse-action-buttons">
//             <button
//               className="am-action-btn am-doctor-nurse-form-btn"
//               onClick={() => setActiveForm("doctor-nurse")}
//             >
//               <i className="fas fa-user-plus" style={{ marginRight: "0.5rem" }}></i>
//               Add Doctor/Nurse
//             </button>
//             <button
//               className="am-action-btn am-form-btn"
//               onClick={() => setActiveForm("client")}
//             >
//               <i className="fas fa-user-tie" style={{ marginRight: "0.5rem" }}></i>
//               Add Client
//             </button>
//           </div>
//           <div className="am-doctor-nurse-tabs-container">
//             <div className="am-doctor-nurse-tabs">
//               <button
//                 className={`am-doctor-nurse-tab ${activeForm === "doctor-nurse-data" ? "active" : ""}`}
//                 onClick={() => setActiveForm("doctor-nurse-data")}
//               >
//                 Doctor/Nurse Data
//               </button>
//               <button
//                 className={`am-tab ${activeForm === "client-data" ? "active" : ""}`}
//                 onClick={() => setActiveForm("client-data")}
//               >
//                 Client Data
//               </button>
//             </div>
//             <div className="am-doctor-nurse-data-table">
//               <h3>Doctor/Nurse Data</h3>
//               <table className="am-doctor-nurse-table">
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Role</th>
//                     <th>Name</th>
//                     <th>Personal Data</th>
//                     <th>Professional Data</th>
//                     <th>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {doctorNurses.length > 0 ? (
//                     doctorNurses.map((dn) => (
//                       <tr key={dn.USRID}>
//                         <td>{dn.USRID}</td>
//                         <td>{dn.role}</td>
//                         <td>{dn.name}</td>
//                         <td>
//                           <button
//                             className="am-action-btn am-view-details-btn"
//                             onClick={() => handlePersonalDataClick(dn)}
//                           >
//                             <i className="fas fa-eye"></i>
//                           </button>
//                         </td>
//                         <td>
//                           <button
//                             className="am-action-btn am-view-details-btn"
//                             onClick={() => handleProfessionalDataClick(dn)}
//                           >
//                             <i className="fas fa-eye"></i>
//                           </button>
//                         </td>
//                         <td>
//                           <button
//                             className="am-action-btn am-edit-btn"
//                             onClick={() => handleEditClick(dn)}
//                           >
//                             <i className="fas fa-edit"></i>
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="6">No Doctor/Nurse data available</td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       )}
//       {activeForm === "client-data" && (
//         <div className="am-data-container">
//           <div className="am-action-buttons">
//             <button
//               className="am-action-btn am-doctor-nurse-form-btn"
//               onClick={() => setActiveForm("doctor-nurse")}
//             >
//               <i className="fas fa-user-plus" style={{ marginRight: "0.5rem" }}></i>
//               Add Doctor/Nurse
//             </button>
//             <button
//               className="am-action-btn am-form-btn"
//               onClick={() => setActiveForm("client")}
//             >
//               <i className="fas fa-user-tie" style={{ marginRight: "0.5rem" }}></i>
//               Add Client
//             </button>
//           </div>
//           <div className="am-tabs-container">
//             <div className="am-tabs">
//               <button
//                 className={`am-doctor-nurse-tab ${activeForm === "doctor-nurse-data" ? "active" : ""}`}
//                 onClick={() => setActiveForm("doctor-nurse-data")}
//               >
//                 Doctor/Nurse Data
//               </button>
//               <button
//                 className={`am-tab ${activeForm === "client-data" ? "active" : ""}`}
//                 onClick={() => setActiveForm("client-data")}
//               >
//                 Client Data
//               </button>
//             </div>
//             <div className="am-data-table">
//               <h3>Client Data</h3>
//               <table className="am-doctor-nurse-table">
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>Client Name</th>
//                     <th>Total Sites</th>
//                     <th>Created At</th>
//                     <th>Officers</th>
//                     <th>Site Details</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {clients.length > 0 ? (
//                     clients.map((client) => (
//                       <tr key={client.client_id}>
//                         <td>{client.client_id}</td>
//                         <td>{client.client_name}</td>
//                         <td>{client.total_sites}</td>
//                         <td>{new Date(client.created_at).toLocaleDateString("en-IN")}</td>
//                         <td>
//                           <button
//                             className="am-action-btn am-view-details-btn"
//                             onClick={() => handleOfficerDetailsClick(client.officers)}
//                           >
//                             <i className="fas fa-eye"></i>
//                           </button>
//                         </td>
//                         <td>
//                           <button
//                             className="am-action-btn am-view-details-btn"
//                             onClick={() => handleSiteDetailsClick(client.sites)}
//                           >
//                             <i className="fas fa-eye"></i>
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="6">No Client data available</td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminManagement;

import React, { useState, useEffect } from "react";
import ClientManagement from "./../ClientManagement/ClientManagement";
import "./AdminManagement.css";

function AdminManagement() {
  const [activeForm, setActiveForm] = useState("doctor-nurse-data");
  const [doctorNurseDataArray, setDoctorNurseDataArray] = useState([{}]);
  const [clients, setClients] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [doctorNurses, setDoctorNurses] = useState([]);
  const [selectedClientSites, setSelectedClientSites] = useState([]);
  const [showSiteDetailsPopup, setShowSiteDetailsPopup] = useState(false);
  const [showPersonalDataPopup, setShowPersonalDataPopup] = useState(false);
  const [showProfessionalDataPopup, setShowProfessionalDataPopup] = useState(false);
  const [selectedPersonalData, setSelectedPersonalData] = useState({});
  const [selectedProfessionalData, setSelectedProfessionalData] = useState({});
  const [showOfficerDetailsPopup, setShowOfficerDetailsPopup] = useState(false);
  const [selectedClientOfficers, setSelectedClientOfficers] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);
  const [editClient, setEditClient] = useState(null);

  useEffect(() => {
    if (activeForm === "doctor-nurse-data") {
      fetchDoctorNurses();
    } else if (activeForm === "client-data") {
      fetchClients();
    }
  }, [activeForm]);

  const fetchDoctorNurses = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please log in to fetch Doctor/Nurse data.");
        return;
      }
      const response = await fetch("http://localhost:5000/api/doctor-nurse", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to fetch doctor/nurses:", errorText);
        setError(`Failed to fetch Doctor/Nurse data: ${errorText || response.status}`);
        return;
      }
      const data = await response.json();
      console.log("Doctor/Nurse data:", data);
      setDoctorNurses(data);
    } catch (err) {
      console.error("Error fetching doctor/nurses:", err);
      setError("An error occurred while fetching Doctor/Nurse data.");
    }
  };

  const normalizePath = (filePath) => {
    if (!filePath) return "";
    let path = filePath.replace(/\\/g, "/");
    if (path.startsWith("uploads/")) path = path.replace(/^uploads\//, "");
    return path;
  };

  const normalizeWorkOrderPath = (filePath) => {
    if (!filePath) return "";
    let path = filePath.replace(/\\/g, "/");
    path = path.replace(/^uploads\//, "").replace(/^uploads\\/, "");
    return path;
  };

  const fetchClients = async () => {
    try {
      setLoading(true);
      setError("");
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please log in to fetch client data.");
        return;
      }
      const response = await fetch("http://localhost:5000/api/clients", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to fetch clients:", errorText);
        setError(`Failed to fetch client data: ${errorText || response.status}`);
        return;
      }
      const data = await response.json();
      console.log("Raw client data:", data);
      if (!Array.isArray(data)) {
        console.error("Client data is not an array:", data);
        setError("Invalid client data format received from server.");
        return;
      }
      const mappedClients = data.map((client) => {
        const uniqueSites = Array.from(
          new Map(client.sites.map((site) => [site.site_id, site])).values()
        );
        const uniqueOfficers = Array.from(
          new Map(client.officers.map((officer) => [officer.officer_id, officer])).values()
        );
        return {
          client_id: client.client_id,
          client_name: client.client_name || "Unknown Client",
          total_sites: client.total_sites || 0,
          created_at: client.created_at || new Date().toISOString(),
          sites: uniqueSites,
          officers: uniqueOfficers,
        };
      });
      console.log("Mapped clients:", mappedClients);
      setClients(mappedClients);
    } catch (err) {
      console.error("Error fetching clients:", err.message);
      setError("An error occurred while fetching client data: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const addNewPerson = () => {
    if (doctorNurseDataArray.length >= 10) {
      setError("Cannot add more than 10 persons at a time.");
      return;
    }
    setDoctorNurseDataArray((prev) => [...prev, {}]);
  };

  const removePerson = (index) => {
    if (doctorNurseDataArray.length === 1) {
      setError("At least one person is required.");
      return;
    }
    setDoctorNurseDataArray((prev) => prev.filter((_, i) => i !== index));
  };

  const handleInputChange = (index, field, value) => {
    if (editMode) {
      setEditEmployee((prev) => ({ ...prev, [field]: value }));
    } else {
      setDoctorNurseDataArray((prev) =>
        prev.map((data, i) => (i === index ? { ...data, [field]: value } : data))
      );
    }
  };

  const handleFileChange = (index, field, file) => {
    if (editMode) {
      setEditEmployee((prev) => ({ ...prev, [field]: file }));
    } else {
      setDoctorNurseDataArray((prev) =>
        prev.map((data, i) => (i === index ? { ...data, [field]: file } : data))
      );
    }
  };

  const handleCancel = () => {
    setDoctorNurseDataArray([{}]);
    setEditMode(false);
    setEditEmployee(null);
    setActiveForm("doctor-nurse-data");
  };

  const handleDoctorNurseSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Please log in to perform this action.");
        setLoading(false);
        return;
      }
      const dataArray = editMode ? [editEmployee] : doctorNurseDataArray;
      for (const [index, doctorNurseData] of dataArray.entries()) {
        const requiredFields = [
          "role",
          "name",
          "email",
          "mobile",
          "dob",
          "degreeName",
          "yearOfPassing",
        ];
        for (const field of requiredFields) {
          if (!doctorNurseData[field]) {
            setError(`Please fill all required fields for person ${index + 1}.`);
            setLoading(false);
            return;
          }
        }
        const formData = new FormData();
        Object.entries(doctorNurseData).forEach(([key, value]) => {
          if (value && key !== "USRID") {
            if (typeof value === "object" && value instanceof File) {
              formData.append(key, value);
            } else if (value !== null && value !== undefined) {
              formData.append(key, value);
            }
          }
        });
        for (let [key, value] of formData.entries()) {
          console.log(`FormData for person ${index + 1}: ${key}=${value}`);
        }
        const url = editMode
          ? `http://localhost:5000/api/doctor-nurse/${doctorNurseData.USRID}`
          : "http://localhost:5000/api/doctor-nurse";
        const method = editMode ? "PUT" : "POST";
        const response = await fetch(url, {
          method,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
        if (!response.ok) {
          const errorText = await response.text();
          console.error(`API Error for person ${index + 1}:`, errorText);
          setError(
            errorText || `HTTP ${response.status}: Failed to ${editMode ? "update" : "add"} person ${index + 1}.`
          );
          setLoading(false);
          return;
        }
        const data = await response.json();
        console.log(`Parsed data for person ${index + 1}:`, data);
      }
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        setDoctorNurseDataArray([{}]);
        setEditMode(false);
        setEditEmployee(null);
        fetchDoctorNurses();
        setActiveForm("doctor-nurse-data");
      }, 2000);
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error(`Error ${editMode ? "updating" : "adding"} Doctor/Nurse:`, err);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (employee) => {
    setEditMode(true);
    setEditEmployee({ ...employee });
    setActiveForm("doctor-nurse");
  };

  const handleEditClientClick = (client) => {
    setEditClient(client);
    setActiveForm("client");
  };

  const handleSiteDetailsClick = (sites) => {
    setSelectedClientSites(sites || []);
    setShowSiteDetailsPopup(true);
  };

  const handleOfficerDetailsClick = (officers) => {
    setSelectedClientOfficers(officers || []);
    setShowOfficerDetailsPopup(true);
  };

  const handlePersonalDataClick = (data) => {
    setSelectedPersonalData({
      dob: data.dob || "N/A",
      age: data.age || "N/A",
      residence: data.residence || "N/A",
      maritalStatus: data.maritalStatus || "N/A",
    });
    setShowPersonalDataPopup(true);
  };

  const handleProfessionalDataClick = (data) => {
    setSelectedProfessionalData({
      degreeName: data.degreeName || "N/A",
      yearOfPassing: data.yearOfPassing || "N/A",
      photo: data.photo || "N/A",
      signature: data.signature || "N/A",
      degreeCertificate: data.degreeCertificate || "N/A",
      aadharCard: data.aadharCard || "N/A",
      panCard: data.panCard || "N/A",
      cancelledCheque: data.cancelledCheque || "N/A",
      declaration: data.declaration || "N/A",
    });
    setShowProfessionalDataPopup(true);
  };

  const fields = [
    { name: "role", label: "Role", type: "select", options: ["", "Doctor", "Nurse"], required: true },
    { name: "name", label: "Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "mobile", label: "Mobile", type: "tel", required: true },
    { name: "dob", label: "DOB", type: "date", required: true },
    { name: "age", label: "Age", type: "number" },
    { name: "residence", label: "Address", type: "text" },
    {
      name: "maritalStatus",
      label: "Marital Status",
      type: "select",
      options: ["", "Single", "Married", "Divorced", "Widowed"],
    },
    { name: "degreeName", label: "Degree", type: "text", required: true },
    { name: "yearOfPassing", label: "Year Passed", type: "number", required: true },
    { name: "photo", label: "Photo", type: "file", accept: "image/*" },
    { name: "signature", label: "Signature", type: "file", accept: "image/*" },
    { name: "degreeCertificate", label: "Degree Cert.", type: "file", accept: ".pdf" },
    { name: "aadharCard", label: "Aadhar", type: "file", accept: ".pdf,image/*" },
    { name: "panCard", label: "PAN", type: "file", accept: ".pdf,image/*" },
    { name: "cancelledCheque", label: "Cheque", type: "file", accept: ".pdf,image/*" },
    { name: "declaration", label: "Declaration", type: "file", accept: ".pdf" },
  ];

  return (
    <div className="am-doctor-nurse-container">
      {error && <p className="am-error-message">{error}</p>}
      {loading && <p className="am-loading-message">Loading client data...</p>}
      {showPopup && (
        <div className="am-popup">{editMode ? "Person updated successfully!" : "Person(s) added successfully!"}</div>
      )}
      {showSiteDetailsPopup && (
        <div className="am-site-details-popup">
          <div className="am-site-details-popup-content">
            <h3>Site Details</h3>
            {selectedClientSites.length > 0 ? (
              <div className="am-sites-details">
                {selectedClientSites.map((site, index) => (
                  <div key={site.site_id} className="am-site-item">
                    <h4>Site {index + 1}</h4>
                    <table className="am-site-details-table">
                      <tbody>
                        <tr>
                          <th>Site ID</th>
                          <td>{site.site_id}</td>
                        </tr>
                        <tr>
                          <th>Site Name</th>
                          <td>{site.site_name}</td>
                        </tr>
                        <tr>
                          <th>Location</th>
                          <td>{site.location}</td>
                        </tr>
                        <tr>
                          <th>Deliverables</th>
                          <td>{Array.isArray(site.deliverables) ? site.deliverables.join(", ") : "N/A"}</td>
                        </tr>
                        <tr>
                          <th>Tentative Labours</th>
                          <td>{site.tentative_labours}</td>
                        </tr>
                        <tr>
                          <th>Labour Turnover</th>
                          <td>{site.labour_turnover}</td>
                        </tr>
                        <tr>
                          <th>Work Order</th>
                          <td>
                            {site.work_order ? (
                              <a
                                href={`http://localhost:5000/uploads/${normalizeWorkOrderPath(site.work_order)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View PDF
                              </a>
                            ) : (
                              "N/A"
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            ) : (
              <p>No sites available for this client.</p>
            )}
            <button
              className="am-action-btn am-close-popup-btn"
              onClick={() => setShowSiteDetailsPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showOfficerDetailsPopup && (
        <div className="am-site-details-popup">
          <div className="am-site-details-popup-content">
            <h3>Officer Details</h3>
            {selectedClientOfficers.length > 0 ? (
              <div className="am-officers-details">
                {selectedClientOfficers.map((officer, index) => (
                  <div key={officer.officer_id} className="am-officer-item">
                    <h4>Officer {index + 1}</h4>
                    <table className="am-site-details-table">
                      <tbody>
                        <tr>
                          <th>Officer ID</th>
                          <td>{officer.officer_id}</td>
                        </tr>
                        <tr>
                          <th>Name</th>
                          <td>{officer.name || "N/A"}</td>
                        </tr>
                        <tr>
                          <th>Position</th>
                          <td>{officer.position || "N/A"}</td>
                        </tr>
                        <tr>
                          <th>Phone</th>
                          <td>{officer.phone || "N/A"}</td>
                        </tr>
                        <tr>
                          <th>Email</th>
                          <td>{officer.email || "N/A"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            ) : (
              <p>No officers available for this client.</p>
            )}
            <button
              className="am-action-btn am-close-popup-btn"
              onClick={() => setShowOfficerDetailsPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showPersonalDataPopup && (
        <div className="am-data-popup">
          <div className="am-data-popup-content">
            <h3>Personal Data</h3>
            <table className="am-data-details-table">
              <tbody>
                <tr>
                  <th>DOB</th>
                  <td>{selectedPersonalData.dob}</td>
                </tr>
                <tr>
                  <th>Age</th>
                  <td>{selectedPersonalData.age}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{selectedPersonalData.residence}</td>
                </tr>
                <tr>
                  <th>Marital Status</th>
                  <td>{selectedPersonalData.maritalStatus}</td>
                </tr>
              </tbody>
            </table>
            <button
              className="am-action-btn am-close-popup-btn"
              onClick={() => setShowPersonalDataPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {showProfessionalDataPopup && (
        <div className="am-data-popup">
          <div className="am-data-popup-content">
            <h3>Professional Data</h3>
            <table className="am-data-details-table">
              <tbody>
                <tr>
                  <th>Degree</th>
                  <td>{selectedProfessionalData.degreeName}</td>
                </tr>
                <tr>
                  <th>Year Passed</th>
                  <td>{selectedProfessionalData.yearOfPassing}</td>
                </tr>
                <tr>
                  <th>Photo</th>
                  <td>
                    {selectedProfessionalData.photo !== "N/A" ? (
                      <a
                        href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.photo)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Photo
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Signature</th>
                  <td>
                    {selectedProfessionalData.signature !== "N/A" ? (
                      <a
                        href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.signature)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Signature
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Degree Certificate</th>
                  <td>
                    {selectedProfessionalData.degreeCertificate !== "N/A" ? (
                      <a
                        href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.degreeCertificate)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Degree Certificate
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Aadhar Card</th>
                  <td>
                    {selectedProfessionalData.aadharCard !== "N/A" ? (
                      <a
                        href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.aadharCard)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Aadhar Card
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
                <tr>
                  <th>PAN Card</th>
                  <td>
                    {selectedProfessionalData.panCard !== "N/A" ? (
                      <a
                        href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.panCard)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View PAN Card
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Cancelled Cheque</th>
                  <td>
                    {selectedProfessionalData.cancelledCheque !== "N/A" ? (
                      <a
                        href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.cancelledCheque)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Cancelled Cheque
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Declaration</th>
                  <td>
                    {selectedProfessionalData.declaration !== "N/A" ? (
                      <a
                        href={`http://localhost:5000/uploads/${normalizePath(selectedProfessionalData.declaration)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Declaration
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              className="am-action-btn am-close-popup-btn"
              onClick={() => setShowProfessionalDataPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {activeForm === "doctor-nurse" && (
        <div>
          <button
            className="am-action-btn am-doctor-nurse-back-btn"
            onClick={handleCancel}
          >
            <i className="fas fa-chevron-left" style={{ marginRight: "0.5rem" }}></i>
            Back
          </button>
          <form onSubmit={handleDoctorNurseSubmit} className="am-doctor-nurse-management-form">
            <h3>{editMode ? "Edit Doctor/Nurse" : "Add Doctor/Nurse (Up to 10)"}</h3>
            {(editMode ? [editEmployee] : doctorNurseDataArray).map((data, index) => (
              <div key={index} className="am-doctor-nurse-form-section">
                <h4>{editMode ? "Edit Person" : `Person ${index + 1}`}</h4>
                <div className="am-doctor-nurse-form-grid">
                  {fields.map((field) => (
                    <div key={field.name} className="am-form-field">
                      <label htmlFor={`${field.name}-${index}`}>
                        {field.label}
                        {field.required && <span className="am-required-asterisk">*</span>}
                      </label>
                      {field.type === "select" ? (
                        <select
                          id={`${field.name}-${index}`}
                          name={field.name}
                          value={editMode ? editEmployee[field.name] || "" : data[field.name] || ""}
                          onChange={(e) => handleInputChange(index, field.name, e.target.value)}
                          required={field.required}
                          className="am-form-input"
                        >
                          {field.options.map((option) => (
                            <option key={option} value={option}>
                              {option || "Select"}
                            </option>
                          ))}
                        </select>
                      ) : field.type === "file" ? (
                        <div className="am-file-input-container">
                          {editMode && data[field.name] && typeof data[field.name] === "string" && (
                            <div className="am-existing-file">
                              <p>Current: <a
                                href={`http://localhost:5000/uploads/${normalizePath(data[field.name])}`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {normalizePath(data[field.name]).split('/').pop()}
                              </a></p>
                            </div>
                          )}
                          <input
                            id={`${field.name}-${index}`}
                            type="file"
                            name={field.name}
                            onChange={(e) => handleFileChange(index, field.name, e.target.files[0])}
                            accept={field.accept}
                            className="am-form-input"
                          />
                        </div>
                      ) : (
                        <input
                          id={`${field.name}-${index}`}
                          type={field.type}
                          name={field.name}
                          value={editMode ? editEmployee[field.name] || "" : data[field.name] || ""}
                          onChange={(e) => handleInputChange(index, field.name, e.target.value)}
                          required={field.required}
                          className="am-form-input"
                        />
                      )}
                    </div>
                  ))}
                </div>
                {!editMode && index > 0 && (
                  <button
                    type="button"
                    className="am-action-btn am-remove-person-btn"
                    onClick={() => removePerson(index)}
                  >
                    Remove Person
                  </button>
                )}
              </div>
            ))}
            <div className="am-doctor-nurse-button-container">
              {!editMode && (
                <button
                  type="button"
                  className="am-action-btn am-add-person-btn"
                  onClick={addNewPerson}
                  disabled={doctorNurseDataArray.length >= 10}
                >
                  <i className="fas fa-plus" style={{ marginRight: "0.5rem" }}></i>
                  Add Person
                </button>
              )}
              <div className="am-form-action-buttons">
                <button type="submit" className="am-doctor-nurse-submit-btn" disabled={loading}>
                  {loading ? "Submitting..." : editMode ? "Update" : "Submit All"}
                </button>
                <button
                  type="button"
                  className="am-doctor-nurse-cancel-btn"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      {activeForm === "client" && (
        <ClientManagement
          onBack={() => {
            setEditClient(null);
            setActiveForm("client-data");
          }}
          editClient={editClient}
        />
      )}
      {activeForm === "doctor-nurse-data" && (
        <div className="am-doctor-nurse-data-container">
          <div className="am-doctor-nurse-action-buttons">
            <button
              className="am-action-btn am-doctor-nurse-form-btn"
              onClick={() => {
                setEditMode(false);
                setEditEmployee(null);
                setActiveForm("doctor-nurse");
              }}
            >
              <i className="fas fa-user-plus" style={{ marginRight: "0.5rem" }}></i>
              Add Doctor/Nurse
            </button>
            <button
              className="am-action-btn am-form-btn"
              onClick={() => {
                setEditClient(null);
                setActiveForm("client");
              }}
            >
              <i className="fas fa-user-tie" style={{ marginRight: "0.5rem" }}></i>
              Add Client
            </button>
          </div>
          <div className="am-doctor-nurse-tabs-container">
            <div className="am-doctor-nurse-tabs">
              <button
                className={`am-doctor-nurse-tab ${activeForm === "doctor-nurse-data" ? "active" : ""}`}
                onClick={() => setActiveForm("doctor-nurse-data")}
              >
                Doctor/Nurse Data
              </button>
              <button
                className={`am-tab ${activeForm === "client-data" ? "active" : ""}`}
                onClick={() => setActiveForm("client-data")}
              >
                Client Data
              </button>
            </div>
            <div className="am-doctor-nurse-data-table">
              <h3>Doctor/Nurse Data</h3>
              <table className="am-doctor-nurse-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Role</th>
                    <th>Name</th>
                    <th>Personal Data</th>
                    <th>Professional Data</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {doctorNurses.length > 0 ? (
                    doctorNurses.map((dn) => (
                      <tr key={dn.USRID}>
                        <td>{dn.USRID}</td>
                        <td>{dn.role}</td>
                        <td>{dn.name}</td>
                        <td>
                          <button
                            className="am-action-btn am-view-details-btn"
                            onClick={() => handlePersonalDataClick(dn)}
                          >
                            <i className="fas fa-eye"></i>
                          </button>
                        </td>
                        <td>
                          <button
                            className="am-action-btn am-view-details-btn"
                            onClick={() => handleProfessionalDataClick(dn)}
                          >
                            <i className="fas fa-eye"></i>
                          </button>
                        </td>
                        <td>
                          <button
                            className="am-action-btn am-edit-btn"
                            onClick={() => handleEditClick(dn)}
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">No Doctor/Nurse data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {activeForm === "client-data" && (
        <div className="am-data-container">
          <div className="am-action-buttons">
            <button
              className="am-action-btn am-doctor-nurse-form-btn"
              onClick={() => {
                setEditMode(false);
                setEditEmployee(null);
                setActiveForm("doctor-nurse");
              }}
            >
              <i className="fas fa-user-plus" style={{ marginRight: "0.5rem" }}></i>
              Add Doctor/Nurse
            </button>
            <button
              className="am-action-btn am-form-btn"
              onClick={() => {
                setEditClient(null);
                setActiveForm("client");
              }}
            >
              <i className="fas fa-user-tie" style={{ marginRight: "0.5rem" }}></i>
              Add Client
            </button>
          </div>
          <div className="am-tabs-container">
            <div className="am-tabs">
              <button
                className={`am-doctor-nurse-tab ${activeForm === "doctor-nurse-data" ? "active" : ""}`}
                onClick={() => setActiveForm("doctor-nurse-data")}
              >
                Doctor/Nurse Data
              </button>
              <button
                className={`am-tab ${activeForm === "client-data" ? "active" : ""}`}
                onClick={() => setActiveForm("client-data")}
              >
                Client Data
              </button>
            </div>
            <div className="am-data-table">
              <h3>Client Data</h3>
              <table className="am-doctor-nurse-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Client Name</th>
                    <th>Total Sites</th>
                    <th>Created At</th>
                    <th>Officers</th>
                    <th>Site Details</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.length > 0 ? (
                    clients.map((client) => (
                      <tr key={client.client_id}>
                        <td>{client.client_id}</td>
                        <td>{client.client_name}</td>
                        <td>{client.total_sites}</td>
                        <td>{new Date(client.created_at).toLocaleDateString("en-IN")}</td>
                        <td>
                          <button
                            className="am-action-btn am-view-details-btn"
                            onClick={() => handleOfficerDetailsClick(client.officers)}
                          >
                            <i className="fas fa-eye"></i>
                          </button>
                        </td>
                        <td>
                          <button
                            className="am-action-btn am-view-details-btn"
                            onClick={() => handleSiteDetailsClick(client.sites)}
                          >
                            <i className="fas fa-eye"></i>
                          </button>
                        </td>
                        <td>
                          <button
                            className="am-action-btn am-edit-btn"
                            onClick={() => handleEditClientClick(client)}
                          >
                            <i className="fas fa-edit"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7">No Client data available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminManagement;
