// // // import React, { useState, useRef, useEffect } from "react";
// // // import { createPortal } from "react-dom";
// // // import "./nursePreEmployment.css";

// // // function NursePreEmployment() {
// // //   const [isPopupOpen, setIsPopupOpen] = useState(false);
// // //   const [laborers, setLaborers] = useState(Array(10).fill({}));

// // //   const handleInputChange = (index, field, value) => {
// // //     const updatedLaborers = [...laborers];
// // //     updatedLaborers[index] = { ...updatedLaborers[index], [field]: value };
// // //     setLaborers(updatedLaborers);
// // //   };

// // //   const handleFileChange = (index, field, event) => {
// // //     const file = event.target.files[0];
// // //     if (file && file.size <= 10 * 1024 * 1024) {
// // //       handleInputChange(index, field, file);
// // //     } else {
// // //       alert("File size must be less than 10 MB");
// // //     }
// // //   };

// // //   const identificationOptions = [
// // //     "Birthmark",
// // //     "Scar",
// // //     "Tattoos",
// // //     "Mole",
// // //     "Freckles",
// // //     "Dimples",
// // //     "Piercings",
// // //     "Hair Color",
// // //     "Scars from surgery",
// // //     "Gap between teeth",
// // //     "Wart",
// // //     "Keloid",
// // //     "Burn Mark",
// // //     "Cut Mark",
// // //     "Facial Asymmetry"
// // //   ];

// // //   const descriptions = {
// // //     Birthmark: "A birthmark is an identification mark on candidates skin that has been present since birth.",
// // //     "Scar": "A scar is an identification mark left on the candidate's skin following an accident or wound that has healed.",
// // //     Tattoos: "Tattoos are designs or patterns made permanent by putting ink into the skin.",
// // //     Mole: "A mole is a small, harmless, dark spot on the skin.",
// // //     Freckles: "Freckles are small, light-brown spots on the skin that form when melanin builds up.",
// // //     Dimples: "Dimples are minor dents or hollows on the face or chin.",
// // //     Piercings: "Piercings are permanent holes or openings made in the body so jewelry, like earrings or nose rings, can be worn.",
// // //     "Hair Color": "Hair colors that are unusual or stand out, whether they are dyed or happen naturally.",
// // //     "Scars from surgery": "Scars are marks left on the body after surgery.",
// // //     "Gap between teeth": "A space or gap between two teeth that can be seen.",
// // //     Wart: "A wart is a small, rough growth on the skin caused by a virus.",
// // //     Keloid: "A keloid is a raised scar that grows beyond the original wound.",
// // //     "Burn Mark": "A burn mark is a scar resulting from a burn injury.",
// // //     "Cut Mark": "A cut mark is a scar from a cutting injury.",
// // //     "Facial Asymmetry": "Facial asymmetry is a noticeable difference in the sides of the face."
// // //   };

// // //   const MultiSelectField = ({ value, options, onChange }) => {
// // //     const [isOpen, setIsOpen] = useState(false);
// // //     const [searchTerm, setSearchTerm] = useState('');
// // //     const [customInput, setCustomInput] = useState('');
// // //     const [dropdownStyle, setDropdownStyle] = useState({});
// // //     const wrapperRef = useRef(null);
// // //     const selectedDisplayRef = useRef(null);
// // //     const dropdownRef = useRef(null);

// // //     const filteredOptions = options.filter(opt => opt.toLowerCase().includes(searchTerm.toLowerCase()));

// // //     const toggleOption = (opt) => {
// // //       const newValue = value.includes(opt) ? value.filter(v => v !== opt) : [...value, opt];
// // //       onChange(newValue);
// // //     };

// // //     const handleCustomAdd = (custom) => {
// // //       if (custom) {
// // //         if (options.includes(custom)) {
// // //           toggleOption(custom);
// // //         } else if (!value.includes(custom)) {
// // //           const newValue = [...value, custom];
// // //           onChange(newValue);
// // //         }
// // //       }
// // //       setCustomInput('');
// // //     };

// // //     useEffect(() => {
// // //       const handleClickOutside = (event) => {
// // //         if (wrapperRef.current && !wrapperRef.current.contains(event.target) &&
// // //             dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// // //           setIsOpen(false);
// // //         }
// // //       };
// // //       document.addEventListener('click', handleClickOutside);
// // //       return () => document.removeEventListener('click', handleClickOutside);
// // //     }, []);

// // //     const handleToggle = () => {
// // //       setIsOpen(!isOpen);
// // //       if (!isOpen && selectedDisplayRef.current) {
// // //         const rect = selectedDisplayRef.current.getBoundingClientRect();
// // //         setDropdownStyle({
// // //           position: 'fixed',
// // //           top: `${rect.bottom}px`,
// // //           left: `${rect.left}px`,
// // //           width: `${rect.width}px`,
// // //           zIndex: 10010
// // //         });
// // //         setSearchTerm('');
// // //       }
// // //     };

// // //     const dropdownContent = (
// // //       <div ref={dropdownRef} className="dropdown-content" style={dropdownStyle}>
// // //         <input 
// // //           type="text" 
// // //           placeholder="Type to search (e.g., ta for Tattoos)..."
// // //           value={searchTerm}
// // //           onChange={(e) => setSearchTerm(e.target.value)}
// // //           className="search-input"
// // //           autoFocus
// // //           onClick={(e) => e.stopPropagation()}
// // //         />
// // //         <div className="options-scroll">
// // //           {filteredOptions.length > 0 ? (
// // //             filteredOptions.map(opt => (
// // //               <label
// // //   key={opt}
// // //   className="option-label"
// // //   title={descriptions[opt]}
// // //   onClick={(e) => e.stopPropagation()}
// // // >
// // //   <input
// // //     type="checkbox"
// // //     checked={value.includes(opt)}
// // //     onChange={() => toggleOption(opt)}
// // //   />
// // //   {opt}
// // // </label>

// // //             ))
// // //           ) : (
// // //             <div className="no-options">No options found</div>
// // //           )}
// // //         </div>
// // //         <div className="custom-input-wrapper">
// // //           <input 
// // //             type="text" 
// // //             placeholder="Add custom mark..."
// // //             value={customInput}
// // //             onChange={(e) => setCustomInput(e.target.value)}
// // //             onKeyDown={(e) => {
// // //               if (e.key === 'Enter') {
// // //                 handleCustomAdd(e.target.value.trim());
// // //               }
// // //             }}
// // //             onBlur={(e) => handleCustomAdd(e.target.value.trim())}
// // //             className="custom-input"
// // //             onClick={(e) => e.stopPropagation()}
// // //           />
// // //         </div>
// // //       </div>
// // //     );

// // //     return (
// // //       <div ref={wrapperRef} className="multiselect-wrapper">
// // //         <div ref={selectedDisplayRef} className="selected-display" onClick={handleToggle}>
// // //           {value.length > 0 ? value.join(', ') : 'Select marks...'}
// // //         </div>
// // //         {isOpen && createPortal(dropdownContent, document.body)}
// // //       </div>
// // //     );
// // //   };

// // //   const fields = [
// // //     { label: "Name of Labour", key: "name", type: "text", widthClass: "wide" },
// // //     { label: "Certificate Serial No", key: "certificateSerialNo", type: "text", widthClass: "medium" },
// // //     { label: "Date", key: "date", type: "date", widthClass: "medium" },
// // //     { label: "Son/Daughter of", key: "parentage", type: "text", widthClass: "wide" },
// // //     {
// // //       label: "Identification Mark 1",
// // //       key: "identificationMark1",
// // //       type: "multiselect",
// // //       options: identificationOptions,
// // //       widthClass: "medium"
// // //     },
// // //     {
// // //       label: "Identification Mark 2",
// // //       key: "identificationMark2",
// // //       type: "multiselect",
// // //       options: identificationOptions,
// // //       widthClass: "medium"
// // //     },
// // //     {
// // //       label: "Sex",
// // //       key: "sex",
// // //       type: "select",
// // //       options: ["", "Male", "Female", "Not Prefer to Say"],
// // //       widthClass: "narrow"
// // //     },
// // //     { label: "Residence", key: "residence", type: "text", widthClass: "wide" },
// // //     { label: "Date of Birth", key: "dateOfBirth", type: "date", widthClass: "medium" },
// // //     { label: "Certificate Age", key: "certificateAge", type: "number", widthClass: "narrow" },
// // //     {
// // //       label: "Reason for",
// // //       key: "reasonFor",
// // //       type: "select",
// // //       options: ["", "Refusal Certificate", "Certificate Being Revoked", "Not Applicable", "Unfit"],
// // //       widthClass: "medium"
// // //     },
// // //     { label: "Height", key: "height", type: "number", widthClass: "narrow" },
// // //     { label: "Weight", key: "weight", type: "number", widthClass: "narrow" },
// // //     { label: "BMI", key: "bmi", type: "number", step: "0.1", widthClass: "narrow" },
// // //     { label: "Body Temp", key: "bodyTemp", type: "number", step: "0.1", widthClass: "narrow" },
// // //     {
// // //       label: "Near Vision",
// // //       key: "nearVision",
// // //       type: "select",
// // //       options: ["", "Normal", "Abnormal", "Uses Specs"],
// // //       widthClass: "narrow"
// // //     },
// // //     {
// // //       label: "Far Vision",
// // //       key: "farVision",
// // //       type: "select",
// // //       options: ["", "Normal", "Abnormal", "Uses Specs"],
// // //       widthClass: "narrow"
// // //     },
// // //     { label: "BP", key: "bp", type: "text", widthClass: "narrow" },
// // //     { label: "Pulse", key: "pulse", type: "number", widthClass: "narrow" },
// // //     {
// // //       label: "Systemic",
// // //       key: "systemic",
// // //       type: "select",
// // //       options: ["", "Within Normal Limits", "Abnormal"],
// // //       widthClass: "medium"
// // //     },
// // //     {
// // //       label: "Epilepsy",
// // //       key: "knownCaseOfEpilepsy",
// // //       type: "select",
// // //       options: ["", "Yes", "No"],
// // //       widthClass: "narrow"
// // //     },
// // //     {
// // //       label: "Headache",
// // //       key: "frequentHeadache",
// // //       type: "select",
// // //       options: ["", "Yes", "No"],
// // //       widthClass: "narrow"
// // //     },
// // //     {
// // //       label: "Limping Gait",
// // //       key: "limpingGait",
// // //       type: "select",
// // //       options: ["", "Yes", "No"],
// // //       widthClass: "medium"
// // //     },
// // //     {
// // //       label: "Deformity",
// // //       key: "physicalDeformity",
// // //       type: "select",
// // //       options: ["", "Yes", "No"],
// // //       widthClass: "medium"
// // //     },
// // //     {
// // //       label: "Flat Foot",
// // //       key: "flatFoot",
// // //       type: "select",
// // //       options: ["", "Yes", "No"],
// // //       widthClass: "medium"
// // //     },
// // //     {
// // //       label: "Depression",
// // //       key: "mentalDepression",
// // //       type: "select",
// // //       options: ["", "Yes", "No"],
// // //       widthClass: "narrow"
// // //     },
// // //     {
// // //       label: "Height Phobia",
// // //       key: "heightPhobia",
// // //       type: "select",
// // //       options: ["", "Yes", "No", "Not Applicable"],
// // //       disabled: (laborer) => laborer.sex === "Female",
// // //       widthClass: "medium"
// // //     },
// // //     { label: "Height Phobia Image", key: "heightPhobiaImage", type: "file", accept: "image/*", widthClass: "medium" },
// // //     { label: "Deformity Image", key: "physicalDeformityImage", type: "file", accept: "image/*", widthClass: "medium" },
// // //     { label: "Sugar Level", key: "sugarLevel", type: "number", step: "0.1", widthClass: "narrow" },
// // //     {
// // //       label: "Blood Group",
// // //       key: "bloodGroup",
// // //       type: "select",
// // //       options: ["", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
// // //       widthClass: "narrow"
// // //     },
// // //     {
// // //       label: "Pallor",
// // //       key: "pallor",
// // //       type: "select",
// // //       options: ["", "Yes", "No"],
// // //       widthClass: "narrow"
// // //     },
// // //     {
// // //       label: "Lymphadenopathy",
// // //       key: "lymphadenopathy",
// // //       type: "select",
// // //       options: ["", "Yes", "No"],
// // //       widthClass: "narrow"
// // //     },
// // //     {
// // //       label: "Icterus",
// // //       key: "icterus",
// // //       type: "select",
// // //       options: ["", "Yes", "No"],
// // //       widthClass: "narrow"
// // //     },
// // //     {
// // //       label: "Cyanosis",
// // //       key: "cyanosis",
// // //       type: "select",
// // //       options: ["", "Yes", "No"],
// // //       widthClass: "narrow"
// // //     },
// // //     {
// // //       label: "Edema",
// // //       key: "edema",
// // //       type: "select",
// // //       options: ["", "Yes", "No"],
// // //       widthClass: "narrow"
// // //     },
// // //     {
// // //       label: "Medical History",
// // //       key: "medicalHistory",
// // //       type: "select",
// // //       options: ["", "Yes", "No"],
// // //       widthClass: "narrow"
// // //     },
// // //     {
// // //       label: "Other Health Info",
// // //       key: "otherHealthInfo",
// // //       type: "select",
// // //       options: ["", "Nil", "Yes"],
// // //       widthClass: "narrow"
// // //     },
// // //     { label: "Final Conclusion", key: "finalConclusion", type: "select", options: ["", "Fit", "Hold", "Unfit"], widthClass: "narrow" }
// // //   ];

// // //   return (
// // //     <div className="nurse-pre-employment-container">
// // //       <h1 className="nurse-pre-employment-title">Pre-Employment Dashboard</h1>
// // //       <button
// // //         className="open-form-button"
// // //         onClick={() => setIsPopupOpen(true)}
// // //       >
// // //         Enter Laborer Data
// // //       </button>
// // //       {isPopupOpen && (
// // //         <div className="popup-overlay">
// // //           <div className="popup-content">
// // //             <h2>Laborer Data Entry (10 Laborers)</h2>
// // //             <form>
// // //               <div className="form-table">
// // //                 <div className="table-header">
// // //                   <div className="table-cell">Laborer</div>
// // //                   {fields.map((field, index) => (
// // //                     <div key={index} className={`table-cell ${field.widthClass}`} title={field.label}>
// // //                       {field.label}
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //                 {laborers.map((laborer, index) => (
// // //                   <div key={index} className="table-row">
// // //                     <div className="table-cell">Laborer {index + 1}</div>
// // //                     {fields.map((field, fieldIndex) => (
// // //                       <div key={fieldIndex} className={`table-cell ${field.widthClass} ${field.type === 'multiselect' ? 'multiselect-cell' : ''}`}>
// // //                         {field.type === "select" ? (
// // //                           <select
// // //                             value={laborer[field.key] || ""}
// // //                             onChange={(e) => handleInputChange(index, field.key, e.target.value)}
// // //                             disabled={field.disabled && field.disabled(laborer)}
// // //                             className="select-field"
// // //                           >
// // //                             {field.options.map((option, optIndex) => (
// // //                               <option key={optIndex} value={option}>{option || "Select"}</option>
// // //                             ))}
// // //                           </select>
// // //                         ) : field.type === "multiselect" ? (
// // //                           <MultiSelectField
// // //                             value={Array.isArray(laborer[field.key]) ? laborer[field.key] : []}
// // //                             options={field.options}
// // //                             onChange={(selected) => handleInputChange(index, field.key, selected)}
// // //                           />
// // //                         ) : field.type === "file" ? (
// // //                           <input
// // //                             type="file"
// // //                             accept={field.accept}
// // //                             onChange={(e) => handleFileChange(index, field.key, e)}
// // //                             className="file-field"
// // //                           />
// // //                         ) : (
// // //                           <input
// // //                             type={field.type}
// // //                             step={field.step}
// // //                             value={laborer[field.key] || ""}
// // //                             onChange={(e) => handleInputChange(index, field.key, e.target.value)}
// // //                             className="input-field"
// // //                           />
// // //                         )}
// // //                         {field.key === "otherHealthInfo" && laborer.otherHealthInfo === "Yes" && (
// // //                           <textarea
// // //                             value={laborer.otherHealthDetails || ""}
// // //                             onChange={(e) => handleInputChange(index, "otherHealthDetails", e.target.value)}
// // //                             placeholder="Provide details"
// // //                             className="textarea-field"
// // //                           />
// // //                         )}
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //               <div className="form-actions">
// // //                 <button type="button" onClick={() => setIsPopupOpen(false)}>
// // //                   Cancel
// // //                 </button>
// // //                 <button type="submit">Submit</button>
// // //               </div>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // export default NursePreEmployment;

// // import React, { useState, useRef, useEffect } from "react";
// // import { createPortal } from "react-dom";
// // import "./nursePreEmployment.css";

// // function NursePreEmployment() {
// //   const [isPopupOpen, setIsPopupOpen] = useState(false);
// //   const [laborers, setLaborers] = useState(Array(10).fill({}));

// //   const handleInputChange = (index, field, value) => {
// //     const updatedLaborers = [...laborers];
// //     updatedLaborers[index] = { ...updatedLaborers[index], [field]: value };
// //     setLaborers(updatedLaborers);
// //   };

// //   const handleFileChange = (index, field, event) => {
// //     const file = event.target.files[0];
// //     if (file && file.size <= 10 * 1024 * 1024) {
// //       handleInputChange(index, field, file);
// //     } else {
// //       alert("File size must be less than 10 MB");
// //     }
// //   };

// //   const identificationOptions = [
// //     "Birthmark",
// //     "Scar",
// //     "Tattoos",
// //     "Mole",
// //     "Freckles",
// //     "Dimples",
// //     "Piercings",
// //     "Hair Color",
// //     "Scars from surgery",
// //     "Gap between teeth",
// //     "Wart",
// //     "Keloid",
// //     "Burn Mark",
// //     "Cut Mark",
// //     "Facial Asymmetry"
// //   ];

// //   const descriptions = {
// //     Birthmark: "A birthmark is an identification mark on candidates skin that has been present since birth.",
// //     "Scar": "A scar is an identification mark left on the candidate's skin following an accident or wound that has healed.",
// //     Tattoos: "Tattoos are designs or patterns made permanent by putting ink into the skin.",
// //     Mole: "A mole is a small, harmless, dark spot on the skin.",
// //     Freckles: "Freckles are small, light-brown spots on the skin that form when melanin builds up.",
// //     Dimples: "Dimples are minor dents or hollows on the face or chin.",
// //     Piercings: "Piercings are permanent holes or openings made in the body so jewelry, like earrings or nose rings, can be worn.",
// //     "Hair Color": "Hair colors that are unusual or stand out, whether they are dyed or happen naturally.",
// //     "Scars from surgery": "Scars are marks left on the body after surgery.",
// //     "Gap between teeth": "A space or gap between two teeth that can be seen.",
// //     Wart: "A wart is a small, rough growth on the skin caused by a virus.",
// //     Keloid: "A keloid is a raised scar that grows beyond the original wound.",
// //     "Burn Mark": "A burn mark is a scar resulting from a burn injury.",
// //     "Cut Mark": "A cut mark is a scar from a cutting injury.",
// //     "Facial Asymmetry": "Facial asymmetry is a noticeable difference in the sides of the face."
// //   };

// //   const MultiSelectField = ({ value, options, onChange }) => {
// //     const [isOpen, setIsOpen] = useState(false);
// //     const [searchTerm, setSearchTerm] = useState('');
// //     const [customInput, setCustomInput] = useState('');
// //     const [dropdownStyle, setDropdownStyle] = useState({});
// //     const wrapperRef = useRef(null);
// //     const selectedDisplayRef = useRef(null);
// //     const dropdownRef = useRef(null);

// //     const filteredOptions = options.filter(opt => opt.toLowerCase().includes(searchTerm.toLowerCase()));

// //     const toggleOption = (opt) => {
// //       const newValue = value.includes(opt) ? value.filter(v => v !== opt) : [...value, opt];
// //       onChange(newValue);
// //     };

// //     const handleCustomAdd = (custom) => {
// //       if (custom) {
// //         if (options.includes(custom)) {
// //           toggleOption(custom);
// //         } else if (!value.includes(custom)) {
// //           const newValue = [...value, custom];
// //           onChange(newValue);
// //         }
// //       }
// //       setCustomInput('');
// //     };

// //     useEffect(() => {
// //       const handleClickOutside = (event) => {
// //         if (wrapperRef.current && !wrapperRef.current.contains(event.target) &&
// //             dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// //           setIsOpen(false);
// //         }
// //       };
// //       document.addEventListener('click', handleClickOutside);
// //       return () => document.removeEventListener('click', handleClickOutside);
// //     }, []);

// //     const handleToggle = () => {
// //       setIsOpen(!isOpen);
// //       if (!isOpen && selectedDisplayRef.current) {
// //         const rect = selectedDisplayRef.current.getBoundingClientRect();
// //         setDropdownStyle({
// //           position: 'fixed',
// //           top: `${rect.bottom}px`,
// //           left: `${rect.left}px`,
// //           width: `${rect.width}px`,
// //           zIndex: 10010
// //         });
// //         setSearchTerm('');
// //       }
// //     };

// //     const dropdownContent = (
// //       <div ref={dropdownRef} className="dropdown-content" style={dropdownStyle}>
// //         <input 
// //           type="text" 
// //           placeholder="Type to search (e.g., ta for Tattoos)..."
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           className="search-input"
// //           autoFocus
// //           onClick={(e) => e.stopPropagation()}
// //         />
// //         <div className="options-scroll">
// //           {filteredOptions.length > 0 ? (
// //             filteredOptions.map(opt => (
// //               <label
// //   key={opt}
// //   className="option-label"
// //   title={descriptions[opt]}
// //   onClick={(e) => e.stopPropagation()}
// // >
// //   <input
// //     type="checkbox"
// //     checked={value.includes(opt)}
// //     onChange={() => toggleOption(opt)}
// //   />
// //   {opt}
// // </label>

// //             ))
// //           ) : (
// //             <div className="no-options">No options found</div>
// //           )}
// //         </div>
// //         <div className="custom-input-wrapper">
// //           <input 
// //             type="text" 
// //             placeholder="Add custom mark..."
// //             value={customInput}
// //             onChange={(e) => setCustomInput(e.target.value)}
// //             onKeyDown={(e) => {
// //               if (e.key === 'Enter') {
// //                 handleCustomAdd(e.target.value.trim());
// //               }
// //             }}
// //             onBlur={(e) => handleCustomAdd(e.target.value.trim())}
// //             className="custom-input"
// //             onClick={(e) => e.stopPropagation()}
// //           />
// //         </div>
// //       </div>
// //     );

// //     return (
// //       <div ref={wrapperRef} className="multiselect-wrapper">
// //         <div ref={selectedDisplayRef} className="selected-display" onClick={handleToggle}>
// //           {value.length > 0 ? value.join(', ') : 'Select marks...'}
// //         </div>
// //         {isOpen && createPortal(dropdownContent, document.body)}
// //       </div>
// //     );
// //   };

// //   const fields = [
// //     { label: "Name of Labour", key: "name", type: "text", widthClass: "wide" },
// //     { label: "Certificate Serial No", key: "certificateSerialNo", type: "text", widthClass: "medium" },
// //     { label: "Date", key: "date", type: "date", widthClass: "medium" },
// //     { label: "Son/Daughter of", key: "parentage", type: "text", widthClass: "wide" },
// //     {
// //       label: "Identification Mark 1",
// //       key: "identificationMark1",
// //       type: "multiselect",
// //       options: identificationOptions,
// //       widthClass: "medium"
// //     },
// //     {
// //       label: "Identification Mark 2",
// //       key: "identificationMark2",
// //       type: "multiselect",
// //       options: identificationOptions,
// //       widthClass: "medium"
// //     },
// //     {
// //       label: "Sex",
// //       key: "sex",
// //       type: "select",
// //       options: ["", "Male", "Female", "Not Prefer to Say"],
// //       widthClass: "narrow"
// //     },
// //     { label: "Residence", key: "residence", type: "text", widthClass: "wide" },
// //     { label: "Date of Birth", key: "dateOfBirth", type: "date", widthClass: "medium" },
// //     { label: "Certificate Age", key: "certificateAge", type: "number", widthClass: "narrow" },
// //     {
// //       label: "Reason for",
// //       key: "reasonFor",
// //       type: "select",
// //       options: ["", "Refusal Certificate", "Certificate Being Revoked", "Not Applicable", "Unfit"],
// //       widthClass: "medium"
// //     },
// //     { label: "Height", key: "height", type: "number", widthClass: "narrow" },
// //     { label: "Weight", key: "weight", type: "number", widthClass: "narrow" },
// //     { label: "BMI", key: "bmi", type: "number", step: "0.1", widthClass: "narrow" },
// //     { label: "Body Temp", key: "bodyTemp", type: "number", step: "0.1", widthClass: "narrow" },
// //     {
// //       label: "Near Vision",
// //       key: "nearVision",
// //       type: "select",
// //       options: ["", "Normal", "Abnormal", "Uses Specs"],
// //       widthClass: "narrow"
// //     },
// //     {
// //       label: "Far Vision",
// //       key: "farVision",
// //       type: "select",
// //       options: ["", "Normal", "Abnormal", "Uses Specs"],
// //       widthClass: "narrow"
// //     },
// //     { label: "BP", key: "bp", type: "text", widthClass: "narrow" },
// //     { label: "Pulse", key: "pulse", type: "number", widthClass: "narrow" },
// //     {
// //       label: "Systemic",
// //       key: "systemic",
// //       type: "select",
// //       options: ["", "Within Normal Limits", "Abnormal"],
// //       widthClass: "medium"
// //     },
// //     {
// //       label: "Epilepsy",
// //       key: "knownCaseOfEpilepsy",
// //       type: "select",
// //       options: ["", "Yes", "No"],
// //       widthClass: "narrow"
// //     },
// //     {
// //       label: "Headache",
// //       key: "frequentHeadache",
// //       type: "select",
// //       options: ["", "Yes", "No"],
// //       widthClass: "narrow"
// //     },
// //     {
// //       label: "Limping Gait",
// //       key: "limpingGait",
// //       type: "select",
// //       options: ["", "Yes", "No"],
// //       widthClass: "medium"
// //     },
// //     {
// //       label: "Deformity",
// //       key: "physicalDeformity",
// //       type: "select",
// //       options: ["", "Yes", "No"],
// //       widthClass: "medium"
// //     },
// //     {
// //       label: "Flat Foot",
// //       key: "flatFoot",
// //       type: "select",
// //       options: ["", "Yes", "No"],
// //       widthClass: "medium"
// //     },
// //     {
// //       label: "Depression",
// //       key: "mentalDepression",
// //       type: "select",
// //       options: ["", "Yes", "No"],
// //       widthClass: "narrow"
// //     },
// //     {
// //       label: "Height Phobia",
// //       key: "heightPhobia",
// //       type: "select",
// //       options: ["", "Yes", "No", "Not Applicable"],
// //       disabled: (laborer) => laborer.sex === "Female",
// //       widthClass: "medium"
// //     },
// //     { label: "Height Phobia Image", key: "heightPhobiaImage", type: "file", accept: "image/*", widthClass: "medium" },
// //     { label: "Deformity Image", key: "physicalDeformityImage", type: "file", accept: "image/*", widthClass: "medium" },
// //     { label: "Sugar Level", key: "sugarLevel", type: "number", step: "0.1", widthClass: "narrow" },
// //     {
// //       label: "Blood Group",
// //       key: "bloodGroup",
// //       type: "select",
// //       options: ["", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
// //       widthClass: "narrow"
// //     },
// //     {
// //       label: "P/O/L/I/C/E",
// //       key: "policE",
// //       type: "select",
// //       options: ["", "None", "Pallor", "Lymphadenopathy", "Icterus", "Cyanosis", "Edema"],
// //       widthClass: "medium"
// //     },
// //     {
// //       label: "Medical History",
// //       key: "medicalHistory",
// //       type: "select",
// //       options: ["", "Yes", "No"],
// //       widthClass: "narrow"
// //     },
// //     {
// //       label: "Other Health Info",
// //       key: "otherHealthInfo",
// //       type: "select",
// //       options: ["", "Nil", "Yes"],
// //       widthClass: "narrow"
// //     },
// //     { label: "Final Conclusion", key: "finalConclusion", type: "select", options: ["", "Fit", "Hold", "Unfit"], widthClass: "narrow" }
// //   ];

// //   return (
// //     <div className="nurse-pre-employment-container">
// //       <h1 className="nurse-pre-employment-title">Pre-Employment Dashboard</h1>
// //       <button
// //         className="open-form-button"
// //         onClick={() => setIsPopupOpen(true)}
// //       >
// //         Enter Laborer Data
// //       </button>
// //       {isPopupOpen && (
// //         <div className="popup-overlay">
// //           <div className="popup-content">
// //             <h2>Laborer Data Entry (10 Laborers)</h2>
// //             <form>
// //               <div className="form-table">
// //                 <div className="table-header">
// //                   <div className="table-cell">Laborer</div>
// //                   {fields.map((field, index) => (
// //                     <div key={index} className={`table-cell ${field.widthClass}`} title={field.label}>
// //                       {field.label}
// //                     </div>
// //                   ))}
// //                 </div>
// //                 {laborers.map((laborer, index) => (
// //                   <div key={index} className="table-row">
// //                     <div className="table-cell">Laborer {index + 1}</div>
// //                     {fields.map((field, fieldIndex) => (
// //                       <div key={fieldIndex} className={`table-cell ${field.widthClass} ${field.type === 'multiselect' ? 'multiselect-cell' : ''}`}>
// //                         {field.type === "select" ? (
// //                           <select
// //                             value={laborer[field.key] || ""}
// //                             onChange={(e) => handleInputChange(index, field.key, e.target.value)}
// //                             disabled={field.disabled && field.disabled(laborer)}
// //                             className="select-field"
// //                           >
// //                             {field.options.map((option, optIndex) => (
// //                               <option key={optIndex} value={option}>{option || "Select"}</option>
// //                             ))}
// //                           </select>
// //                         ) : field.type === "multiselect" ? (
// //                           <MultiSelectField
// //                             value={Array.isArray(laborer[field.key]) ? laborer[field.key] : []}
// //                             options={field.options}
// //                             onChange={(selected) => handleInputChange(index, field.key, selected)}
// //                           />
// //                         ) : field.type === "file" ? (
// //                           <input
// //                             type="file"
// //                             accept={field.accept}
// //                             onChange={(e) => handleFileChange(index, field.key, e)}
// //                             className="file-field"
// //                           />
// //                         ) : (
// //                           <input
// //                             type={field.type}
// //                             step={field.step}
// //                             value={laborer[field.key] || ""}
// //                             onChange={(e) => handleInputChange(index, field.key, e.target.value)}
// //                             className="input-field"
// //                           />
// //                         )}
// //                         {field.key === "otherHealthInfo" && laborer.otherHealthInfo === "Yes" && (
// //                           <textarea
// //                             value={laborer.otherHealthDetails || ""}
// //                             onChange={(e) => handleInputChange(index, "otherHealthDetails", e.target.value)}
// //                             placeholder="Provide details"
// //                             className="textarea-field"
// //                           />
// //                         )}
// //                       </div>
// //                     ))}
// //                   </div>
// //                 ))}
// //               </div>
// //               <div className="form-actions">
// //                 <button type="button" onClick={() => setIsPopupOpen(false)}>
// //                   Cancel
// //                 </button>
// //                 <button type="submit">Submit</button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// // export default NursePreEmployment;

// /////above code workig /=----------------


// import React, { useState, useRef, useEffect } from "react";
// import { createPortal } from "react-dom";
// import "./nursePreEmployment.css";

// function NursePreEmployment() {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [laborers, setLaborers] = useState(Array(10).fill({}));
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleInputChange = (index, field, value) => {
//     const updatedLaborers = [...laborers];
//     updatedLaborers[index] = { ...updatedLaborers[index], [field]: value };
//     setLaborers(updatedLaborers);
//   };

//   const handleFileChange = (index, field, event) => {
//     const file = event.target.files[0];
//     if (file && file.size <= 10 * 1024 * 1024) {
//       handleInputChange(index, field, file);
//     } else {
//       alert("File size must be less than 10 MB");
//     }
//   };

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   setIsSubmitting(true);

//   // ✅ Require at least one laborer with a name
//   if (laborers.every(l => !l.name || !l.name.trim())) {
//     alert("Please fill at least one laborer's name to submit.");
//     setIsSubmitting(false);
//     return;
//   }

//   try {
//     // ✅ Process laborers array
//     const processedLaborers = laborers
//       .map((laborer) => {
//         if (!laborer.name || !laborer.name.trim()) return null;
//         const proc = { ...laborer };

//         // ✅ Map P/O/L/I/C/E to Yes/No
//         const polices = ["pallor", "lymphadenopathy", "icterus", "cyanosis", "edema"];
//         polices.forEach((p) => (proc[p] = "No"));
//         if (proc.policE && proc.policE !== "" && proc.policE !== "None") {
//           const mapping = {
//             Pallor: "pallor",
//             Lymphadenopathy: "lymphadenopathy",
//             Icterus: "icterus",
//             Cyanosis: "cyanosis",
//             Edema: "edema",
//           };
//           const field = mapping[proc.policE];
//           if (field) proc[field] = "Yes";
//         }
//         delete proc.policE;

//         // ✅ Convert identification marks to JSON
//         proc.identificationMark1 = JSON.stringify(
//           Array.isArray(proc.identificationMark1) ? proc.identificationMark1 : []
//         );
//         proc.identificationMark2 = JSON.stringify(
//           Array.isArray(proc.identificationMark2) ? proc.identificationMark2 : []
//         );

//         return proc;
//       })
//       .filter((l) => l !== null);

//     // ✅ Create FormData
//     const formData = new FormData();
//     formData.append("data", JSON.stringify(processedLaborers));

//     // ✅ Append images if present
//     for (let i = 0; i < 10; i++) {
//       const heightFile = laborers[i].heightPhobiaImage;
//       if (heightFile instanceof File) {
//         formData.append("heightPhobiaImage", heightFile);
//       }

//       const deformityFile = laborers[i].physicalDeformityImage;
//       if (deformityFile instanceof File) {
//         formData.append("physicalDeformityImage", deformityFile);
//       }
//     }

//     // ✅ Submit data
//     // Updated
//     console.log("Inserting laborer values count:", values.length);

// const response = await fetch("http://localhost:5000/api/nurse-pre-employment", {
  
//   method: "POST",
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("token")}`, // if using JWT
//   },
//   body: formData,
// });


//     // ✅ Read response as text once
//     const responseText = await response.text();
//     let responseData = null;
//     try {
//       responseData = JSON.parse(responseText);
//     } catch {
//       responseData = null;
//     }

//     // ✅ Success
//     if (response.ok) {
//       const count = processedLaborers.length;
//       const ids = responseData?.laborer_ids?.join(", ") || "Generated";
//       alert(`${count} laborer(s) saved successfully!\nLaborer IDs: ${ids}`);
//       console.log("✅ Server Response:", responseData || responseText);
//       setIsPopupOpen(false);
//       setLaborers(Array(10).fill({}));
//     } 
//     // ❌ Failure
//     else {
//       const errorMsg =
//         responseData?.error ||
//         responseText ||
//         "Failed to save data. Check server logs.";
//       alert(`❌ Error while saving data:\n\n${errorMsg}`);
//       console.error("❌ Full server error:", errorMsg);
//     }
//   } catch (error) {
//     alert(`❌ Request Error: ${error.message}`);
//     console.error("❌ Unexpected Error:", error);
//   } finally {
//     setIsSubmitting(false);
//   }
// };

//   const identificationOptions = [
//     "Birthmark",
//     "Scar",
//     "Tattoos",
//     "Mole",
//     "Freckles",
//     "Dimples",
//     "Piercings",
//     "Hair Color",
//     "Scars from surgery",
//     "Gap between teeth",
//     "Wart",
//     "Keloid",
//     "Burn Mark",
//     "Cut Mark",
//     "Facial Asymmetry"
//   ];

//   const descriptions = {
//     Birthmark: "A birthmark is an identification mark on candidates skin that has been present since birth.",
//     "Scar": "A scar is an identification mark left on the candidate's skin following an accident or wound that has healed.",
//     Tattoos: "Tattoos are designs or patterns made permanent by putting ink into the skin.",
//     Mole: "A mole is a small, harmless, dark spot on the skin.",
//     Freckles: "Freckles are small, light-brown spots on the skin that form when melanin builds up.",
//     Dimples: "Dimples are minor dents or hollows on the face or chin.",
//     Piercings: "Piercings are permanent holes or openings made in the body so jewelry, like earrings or nose rings, can be worn.",
//     "Hair Color": "Hair colors that are unusual or stand out, whether they are dyed or happen naturally.",
//     "Scars from surgery": "Scars are marks left on the body after surgery.",
//     "Gap between teeth": "A space or gap between two teeth that can be seen.",
//     Wart: "A wart is a small, rough growth on the skin caused by a virus.",
//     Keloid: "A keloid is a raised scar that grows beyond the original wound.",
//     "Burn Mark": "A burn mark is a scar resulting from a burn injury.",
//     "Cut Mark": "A cut mark is a scar from a cutting injury.",
//     "Facial Asymmetry": "Facial asymmetry is a noticeable difference in the sides of the face."
//   };

//   const MultiSelectField = ({ value, options, onChange }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [customInput, setCustomInput] = useState('');
//     const [dropdownStyle, setDropdownStyle] = useState({});
//     const wrapperRef = useRef(null);
//     const selectedDisplayRef = useRef(null);
//     const dropdownRef = useRef(null);

//     const filteredOptions = options.filter(opt => opt.toLowerCase().includes(searchTerm.toLowerCase()));

//     const toggleOption = (opt) => {
//       const newValue = value.includes(opt) ? value.filter(v => v !== opt) : [...value, opt];
//       onChange(newValue);
//     };

//     const handleCustomAdd = (custom) => {
//       if (custom) {
//         if (options.includes(custom)) {
//           toggleOption(custom);
//         } else if (!value.includes(custom)) {
//           const newValue = [...value, custom];
//           onChange(newValue);
//         }
//       }
//       setCustomInput('');
//     };

//     useEffect(() => {
//       const handleClickOutside = (event) => {
//         if (wrapperRef.current && !wrapperRef.current.contains(event.target) &&
//             dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//           setIsOpen(false);
//         }
//       };
//       document.addEventListener('click', handleClickOutside);
//       return () => document.removeEventListener('click', handleClickOutside);
//     }, []);

//     const handleToggle = () => {
//       setIsOpen(!isOpen);
//       if (!isOpen && selectedDisplayRef.current) {
//         const rect = selectedDisplayRef.current.getBoundingClientRect();
//         setDropdownStyle({
//           position: 'fixed',
//           top: `${rect.bottom}px`,
//           left: `${rect.left}px`,
//           width: `${rect.width}px`,
//           zIndex: 10010
//         });
//         setSearchTerm('');
//       }
//     };

//     const dropdownContent = (
//       <div ref={dropdownRef} className="dropdown-content" style={dropdownStyle}>
//         <input 
//           type="text" 
//           placeholder="Type to search (e.g., ta for Tattoos)..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="search-input"
//           autoFocus
//           onClick={(e) => e.stopPropagation()}
//         />
//         <div className="options-scroll">
//           {filteredOptions.length > 0 ? (
//             filteredOptions.map(opt => (
//               <label
//   key={opt}
//   className="option-label"
//   title={descriptions[opt]}
//   onClick={(e) => e.stopPropagation()}
// >
//   <input
//     type="checkbox"
//     checked={value.includes(opt)}
//     onChange={() => toggleOption(opt)}
//   />
//   {opt}
// </label>

//             ))
//           ) : (
//             <div className="no-options">No options found</div>
//           )}
//         </div>
//         <div className="custom-input-wrapper">
//           <input 
//             type="text" 
//             placeholder="Add custom mark..."
//             value={customInput}
//             onChange={(e) => setCustomInput(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === 'Enter') {
//                 handleCustomAdd(e.target.value.trim());
//               }
//             }}
//             onBlur={(e) => handleCustomAdd(e.target.value.trim())}
//             className="custom-input"
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       </div>
//     );

//     return (
//       <div ref={wrapperRef} className="multiselect-wrapper">
//         <div ref={selectedDisplayRef} className="selected-display" onClick={handleToggle}>
//           {value.length > 0 ? value.join(', ') : 'Select marks...'}
//         </div>
//         {isOpen && createPortal(dropdownContent, document.body)}
//       </div>
//     );
//   };

//   const fields = [
//     { label: "Name of Labour", key: "name", type: "text", widthClass: "wide" },
//     { label: "Certificate Serial No", key: "certificateSerialNo", type: "text", widthClass: "medium" },
//     { label: "Date", key: "date", type: "date", widthClass: "medium" },
//     { label: "Son/Daughter of", key: "parentage", type: "text", widthClass: "wide" },
//     {
//       label: "Identification Mark 1",
//       key: "identificationMark1",
//       type: "multiselect",
//       options: identificationOptions,
//       widthClass: "medium"
//     },
//     {
//       label: "Identification Mark 2",
//       key: "identificationMark2",
//       type: "multiselect",
//       options: identificationOptions,
//       widthClass: "medium"
//     },
//     {
//       label: "Sex",
//       key: "sex",
//       type: "select",
//       options: ["", "Male", "Female", "Not Prefer to Say"],
//       widthClass: "narrow"
//     },
//     { label: "Residence", key: "residence", type: "text", widthClass: "wide" },
//     { label: "Date of Birth", key: "dateOfBirth", type: "date", widthClass: "medium" },
//     { label: "Certificate Age", key: "certificateAge", type: "number", widthClass: "narrow" },
//     {
//       label: "Reason for",
//       key: "reasonFor",
//       type: "select",
//       options: ["", "Refusal Certificate", "Certificate Being Revoked", "Not Applicable", "Unfit"],
//       widthClass: "medium"
//     },
//     { label: "Height", key: "height", type: "number", widthClass: "narrow" },
//     { label: "Weight", key: "weight", type: "number", widthClass: "narrow" },
//     { label: "BMI", key: "bmi", type: "number", step: "0.1", widthClass: "narrow" },
//     { label: "Body Temp", key: "bodyTemp", type: "number", step: "0.1", widthClass: "narrow" },
//     {
//       label: "Near Vision",
//       key: "nearVision",
//       type: "select",
//       options: ["", "Normal", "Abnormal", "Uses Specs"],
//       widthClass: "narrow"
//     },
//     {
//       label: "Far Vision",
//       key: "farVision",
//       type: "select",
//       options: ["", "Normal", "Abnormal", "Uses Specs"],
//       widthClass: "narrow"
//     },
//     { label: "BP", key: "bp", type: "text", widthClass: "narrow" },
//     { label: "Pulse", key: "pulse", type: "number", widthClass: "narrow" },
//     {
//       label: "Systemic",
//       key: "systemic",
//       type: "select",
//       options: ["", "Within Normal Limits", "Abnormal"],
//       widthClass: "medium"
//     },
//     {
//       label: "Epilepsy",
//       key: "knownCaseOfEpilepsy",
//       type: "select",
//       options: ["", "Yes", "No"],
//       widthClass: "narrow"
//     },
//     {
//       label: "Headache",
//       key: "frequentHeadache",
//       type: "select",
//       options: ["", "Yes", "No"],
//       widthClass: "narrow"
//     },
//     {
//       label: "Limping Gait",
//       key: "limpingGait",
//       type: "select",
//       options: ["", "Yes", "No"],
//       widthClass: "medium"
//     },
//     {
//       label: "Deformity",
//       key: "physicalDeformity",
//       type: "select",
//       options: ["", "Yes", "No"],
//       widthClass: "medium"
//     },
//     {
//       label: "Flat Foot",
//       key: "flatFoot",
//       type: "select",
//       options: ["", "Yes", "No"],
//       widthClass: "medium"
//     },
//     {
//       label: "Depression",
//       key: "mentalDepression",
//       type: "select",
//       options: ["", "Yes", "No"],
//       widthClass: "narrow"
//     },
//     {
//       label: "Height Phobia",
//       key: "heightPhobia",
//       type: "select",
//       options: ["", "Yes", "No", "Not Applicable"],
//       disabled: (laborer) => laborer.sex === "Female",
//       widthClass: "medium"
//     },
//     { label: "Height Phobia Image", key: "heightPhobiaImage", type: "file", accept: "image/*", widthClass: "medium" },
//     { label: "Deformity Image", key: "physicalDeformityImage", type: "file", accept: "image/*", widthClass: "medium" },
//     { label: "Sugar Level", key: "sugarLevel", type: "number", step: "0.1", widthClass: "narrow" },
//     {
//       label: "Blood Group",
//       key: "bloodGroup",
//       type: "select",
//       options: ["", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
//       widthClass: "narrow"
//     },
//     {
//       label: "P/O/L/I/C/E",
//       key: "policE",
//       type: "select",
//       options: ["", "None", "Pallor", "Lymphadenopathy", "Icterus", "Cyanosis", "Edema"],
//       widthClass: "medium"
//     },
//     {
//       label: "Medical History",
//       key: "medicalHistory",
//       type: "select",
//       options: ["", "Yes", "No"],
//       widthClass: "narrow"
//     },
//     {
//       label: "Other Health Info",
//       key: "otherHealthInfo",
//       type: "select",
//       options: ["", "Nil", "Yes"],
//       widthClass: "narrow"
//     },
//     { label: "Final Conclusion", key: "finalConclusion", type: "select", options: ["", "Fit", "Hold", "Unfit"], widthClass: "narrow" }
//   ];

//   return (
//     <div className="nurse-pre-employment-container">
//       <h1 className="nurse-pre-employment-title">Pre-Employment Dashboard</h1>
//       <button
//         className="open-form-button"
//         onClick={() => setIsPopupOpen(true)}
//       >
//         Enter Laborer Data
//       </button>
//       {isPopupOpen && (
//         <div className="popup-overlay">
//           <div className="popup-content">
//             <h2>Laborer Data Entry (Up to 10 Laborers)</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="form-table">
//                 <div className="table-header">
//                   <div className="table-cell">Laborer</div>
//                   {fields.map((field, index) => (
//                     <div key={index} className={`table-cell ${field.widthClass}`} title={field.label}>
//                       {field.label}
//                     </div>
//                   ))}
//                 </div>
//                 {laborers.map((laborer, index) => (
//                   <div key={index} className="table-row">
//                     <div className="table-cell">Laborer {index + 1}</div>
//                     {fields.map((field, fieldIndex) => (
//                       <div key={fieldIndex} className={`table-cell ${field.widthClass} ${field.type === 'multiselect' ? 'multiselect-cell' : ''}`}>
//                         {field.type === "select" ? (
//                           <select
//                             value={laborer[field.key] || ""}
//                             onChange={(e) => handleInputChange(index, field.key, e.target.value)}
//                             disabled={field.disabled && field.disabled(laborer)}
//                             className="select-field"
//                           >
//                             {field.options.map((option, optIndex) => (
//                               <option key={optIndex} value={option}>{option || "Select"}</option>
//                             ))}
//                           </select>
//                         ) : field.type === "multiselect" ? (
//                           <MultiSelectField
//                             value={Array.isArray(laborer[field.key]) ? laborer[field.key] : []}
//                             options={field.options}
//                             onChange={(selected) => handleInputChange(index, field.key, selected)}
//                           />
//                         ) : field.type === "file" ? (
//                           <input
//                             type="file"
//                             accept={field.accept}
//                             onChange={(e) => handleFileChange(index, field.key, e)}
//                             className="file-field"
//                           />
//                         ) : (
//                           <input
//                             type={field.type}
//                             step={field.step}
//                             value={laborer[field.key] || ""}
//                             onChange={(e) => handleInputChange(index, field.key, e.target.value)}
//                             className="input-field"
//                           />
//                         )}
//                         {field.key === "otherHealthInfo" && laborer.otherHealthInfo === "Yes" && (
//                           <textarea
//                             value={laborer.otherHealthDetails || ""}
//                             onChange={(e) => handleInputChange(index, "otherHealthDetails", e.target.value)}
//                             placeholder="Provide details"
//                             className="textarea-field"
//                           />
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 ))}
//               </div>
//               <div className="form-actions">
//                 <button type="button" onClick={() => setIsPopupOpen(false)}>
//                   Cancel
//                 </button>
//                 <button type="submit" disabled={isSubmitting}>
//                   {isSubmitting ? "Submitting..." : "Submit"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default NursePreEmployment;
import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import "./nursePreEmployment.css";

function NursePreEmployment() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [laborers, setLaborers] = useState(Array(10).fill({}));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleInputChange = (index, field, value) => {
    const updatedLaborers = [...laborers];
    updatedLaborers[index] = { ...updatedLaborers[index], [field]: value };
    setLaborers(updatedLaborers);
  };
  const handleFileChange = (index, field, event) => {
    const file = event.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      handleInputChange(index, field, file);
    } else {
      alert("File size must be less than 10 MB");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to submit data.");
      setIsSubmitting(false);
      return;
    }
    if (laborers.every(l => !l.name || !l.name.trim())) {
      alert("Please fill at least one laborer's name to submit.");
      setIsSubmitting(false);
      return;
    }
    try {
      // Process only filled laborers (filter nulls after mapping)
      const processedLaborers = laborers
        .map((laborer, index) => {
          if (!laborer.name || !laborer.name.trim()) {
            return null;
          }
          const proc = { ...laborer };
          // Process P/O/L/I/C/E into separate fields
          const polices = ["pallor", "lymphadenopathy", "icterus", "cyanosis", "edema"];
          polices.forEach((p) => (proc[p] = "No"));
          if (proc.policE && proc.policE !== "" && proc.policE !== "None") {
            const mapping = {
              Pallor: "pallor",
              Lymphadenopathy: "lymphadenopathy",
              Icterus: "icterus",
              Cyanosis: "cyanosis",
              Edema: "edema",
            };
            const field = mapping[proc.policE];
            if (field) proc[field] = "Yes";
          }
          delete proc.policE;
          // Stringify identification marks
          proc.identificationMark1 = JSON.stringify(Array.isArray(proc.identificationMark1) ? proc.identificationMark1 : []);
          proc.identificationMark2 = JSON.stringify(Array.isArray(proc.identificationMark2) ? proc.identificationMark2 : []);
          return proc;
        })
        .filter(l => l !== null); // Remove unfilled
      const formData = new FormData();
      formData.append("data", JSON.stringify(processedLaborers));
      // Append files only for laborers with files (in original index order; backend matches via count)
      laborers.forEach((laborer, i) => {
        const heightFile = laborer.heightPhobiaImage;
        if (heightFile instanceof File) {
          formData.append("heightPhobiaImage", heightFile);
        }
        const deformityFile = laborer.physicalDeformityImage;
        if (deformityFile instanceof File) {
          formData.append("physicalDeformityImage", deformityFile);
        }
      });
      const response = await fetch("http://localhost:5000/api/nurse-pre-employment", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (response.ok) {
        // Success: Read JSON once
        const result = await response.json();
        alert(`${processedLaborers.length} laborer(s) saved successfully! Laborer IDs: ${result.laborer_ids?.join(", ") || "Generated"}`);
        setIsPopupOpen(false);
        setLaborers(Array(10).fill({}));
      } else {
        // Error: Clone for potential dual read (JSON then text)
        const clonedResponse = response.clone();
        let errorText = "Failed to save data";
        try {
          const error = await clonedResponse.json();
          errorText = error.error || errorText;
        } catch (parseErr) {
          // Fallback to text on original (unread) response
          errorText = await response.text();
          errorText = errorText.substring(0, 200); // Truncate HTML
        }
        alert(`Error: ${errorText}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  const identificationOptions = [
    "Birthmark",
    "Scar",
    "Tattoos",
    "Mole",
    "Freckles",
    "Dimples",
    "Piercings",
    "Hair Color",
    "Scars from surgery",
    "Gap between teeth",
    "Wart",
    "Keloid",
    "Burn Mark",
    "Cut Mark",
    "Facial Asymmetry"
  ];
  const descriptions = {
    Birthmark: "A birthmark is an identification mark on candidates skin that has been present since birth.",
    "Scar": "A scar is an identification mark left on the candidate's skin following an accident or wound that has healed.",
    Tattoos: "Tattoos are designs or patterns made permanent by putting ink into the skin.",
    Mole: "A mole is a small, harmless, dark spot on the skin.",
    Freckles: "Freckles are small, light-brown spots on the skin that form when melanin builds up.",
    Dimples: "Dimples are minor dents or hollows on the face or chin.",
    Piercings: "Piercings are permanent holes or openings made in the body so jewelry, like earrings or nose rings, can be worn.",
    "Hair Color": "Hair colors that are unusual or stand out, whether they are dyed or happen naturally.",
    "Scars from surgery": "Scars are marks left on the body after surgery.",
    "Gap between teeth": "A space or gap between two teeth that can be seen.",
    Wart: "A wart is a small, rough growth on the skin caused by a virus.",
    Keloid: "A keloid is a raised scar that grows beyond the original wound.",
    "Burn Mark": "A burn mark is a scar resulting from a burn injury.",
    "Cut Mark": "A cut mark is a scar from a cutting injury.",
    "Facial Asymmetry": "Facial asymmetry is a noticeable difference in the sides of the face."
  };
  const MultiSelectField = ({ value, options, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [customInput, setCustomInput] = useState('');
    const [dropdownStyle, setDropdownStyle] = useState({});
    const wrapperRef = useRef(null);
    const selectedDisplayRef = useRef(null);
    const dropdownRef = useRef(null);
    const filteredOptions = options.filter(opt => opt.toLowerCase().includes(searchTerm.toLowerCase()));
    const toggleOption = (opt) => {
      const newValue = value.includes(opt) ? value.filter(v => v !== opt) : [...value, opt];
      onChange(newValue);
    };
    const handleCustomAdd = (custom) => {
      if (custom) {
        if (options.includes(custom)) {
          toggleOption(custom);
        } else if (!value.includes(custom)) {
          const newValue = [...value, custom];
          onChange(newValue);
        }
      }
      setCustomInput('');
    };
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target) &&
            dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }, []);
    const handleToggle = () => {
      setIsOpen(!isOpen);
      if (!isOpen && selectedDisplayRef.current) {
        const rect = selectedDisplayRef.current.getBoundingClientRect();
        setDropdownStyle({
          position: 'fixed',
          top: `${rect.bottom}px`,
          left: `${rect.left}px`,
          width: `${rect.width}px`,
          zIndex: 10010
        });
        setSearchTerm('');
      }
    };
    const dropdownContent = (
      <div ref={dropdownRef} className="dropdown-content" style={dropdownStyle}>
        <input
          type="text"
          placeholder="Type to search (e.g., ta for Tattoos)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          autoFocus
          onClick={(e) => e.stopPropagation()}
        />
        <div className="options-scroll">
          {filteredOptions.length > 0 ? (
            filteredOptions.map(opt => (
              <label
                key={opt}
                className="option-label"
                title={descriptions[opt]}
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="checkbox"
                  checked={value.includes(opt)}
                  onChange={() => toggleOption(opt)}
                />
                {opt}
              </label>
            ))
          ) : (
            <div className="no-options">No options found</div>
          )}
        </div>
        <div className="custom-input-wrapper">
          <input
            type="text"
            placeholder="Add custom mark..."
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleCustomAdd(e.target.value.trim());
              }
            }}
            onBlur={(e) => handleCustomAdd(e.target.value.trim())}
            className="custom-input"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </div>
    );
    return (
      <div ref={wrapperRef} className="multiselect-wrapper">
        <div ref={selectedDisplayRef} className="selected-display" onClick={handleToggle}>
          {value.length > 0 ? value.join(', ') : 'Select marks...'}
        </div>
        {isOpen && createPortal(dropdownContent, document.body)}
      </div>
    );
  };
  const fields = [
    { label: "Name of Labour", key: "name", type: "text", widthClass: "wide" },
    { label: "Certificate Serial No", key: "certificateSerialNo", type: "text", widthClass: "medium" },
    { label: "Date", key: "date", type: "date", widthClass: "medium" },
    { label: "Son/Daughter of", key: "parentage", type: "text", widthClass: "wide" },
    {
      label: "Identification Mark 1",
      key: "identificationMark1",
      type: "multiselect",
      options: identificationOptions,
      widthClass: "medium"
    },
    {
      label: "Identification Mark 2",
      key: "identificationMark2",
      type: "multiselect",
      options: identificationOptions,
      widthClass: "medium"
    },
    {
      label: "Sex",
      key: "sex",
      type: "select",
      options: ["", "Male", "Female", "Not Prefer to Say"],
      widthClass: "narrow"
    },
    { label: "Residence", key: "residence", type: "text", widthClass: "wide" },
    { label: "Date of Birth", key: "dateOfBirth", type: "date", widthClass: "medium" },
    { label: "Certificate Age", key: "certificateAge", type: "number", widthClass: "narrow" },
    {
      label: "Reason for",
      key: "reasonFor",
      type: "select",
      options: ["", "Refusal Certificate", "Certificate Being Revoked", "Not Applicable", "Unfit"],
      widthClass: "medium"
    },
    { label: "Height", key: "height", type: "number", widthClass: "narrow" },
    { label: "Weight", key: "weight", type: "number", widthClass: "narrow" },
    { label: "BMI", key: "bmi", type: "number", step: "0.1", widthClass: "narrow" },
    { label: "Body Temp", key: "bodyTemp", type: "number", step: "0.1", widthClass: "narrow" },
    {
      label: "Near Vision",
      key: "nearVision",
      type: "select",
      options: ["", "Normal", "Abnormal", "Uses Specs"],
      widthClass: "narrow"
    },
    {
      label: "Far Vision",
      key: "farVision",
      type: "select",
      options: ["", "Normal", "Abnormal", "Uses Specs"],
      widthClass: "narrow"
    },
    { label: "BP", key: "bp", type: "text", widthClass: "narrow" },
    { label: "Pulse", key: "pulse", type: "number", widthClass: "narrow" },
    {
      label: "Systemic",
      key: "systemic",
      type: "select",
      options: ["", "Within Normal Limits", "Abnormal"],
      widthClass: "medium"
    },
    {
      label: "Epilepsy",
      key: "knownCaseOfEpilepsy",
      type: "select",
      options: ["", "Yes", "No"],
      widthClass: "narrow"
    },
    {
      label: "Headache",
      key: "frequentHeadache",
      type: "select",
      options: ["", "Yes", "No"],
      widthClass: "narrow"
    },
    {
      label: "Limping Gait",
      key: "limpingGait",
      type: "select",
      options: ["", "Yes", "No"],
      widthClass: "medium"
    },
    {
      label: "Deformity",
      key: "physicalDeformity",
      type: "select",
      options: ["", "Yes", "No"],
      widthClass: "medium"
    },
    {
      label: "Flat Foot",
      key: "flatFoot",
      type: "select",
      options: ["", "Yes", "No"],
      widthClass: "medium"
    },
    {
      label: "Depression",
      key: "mentalDepression",
      type: "select",
      options: ["", "Yes", "No"],
      widthClass: "narrow"
    },
    {
      label: "Height Phobia",
      key: "heightPhobia",
      type: "select",
      options: ["", "Yes", "No", "Not Applicable"],
      disabled: (laborer) => laborer.sex === "Female",
      widthClass: "medium"
    },
    { label: "Height Phobia Image", key: "heightPhobiaImage", type: "file", accept: "image/*", widthClass: "medium" },
    { label: "Deformity Image", key: "physicalDeformityImage", type: "file", accept: "image/*", widthClass: "medium" },
    { label: "Sugar Level", key: "sugarLevel", type: "number", step: "0.1", widthClass: "narrow" },
    {
      label: "Blood Group",
      key: "bloodGroup",
      type: "select",
      options: ["", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      widthClass: "narrow"
    },
    {
      label: "P/O/L/I/C/E",
      key: "policE",
      type: "select",
      options: ["", "None", "Pallor", "Lymphadenopathy", "Icterus", "Cyanosis", "Edema"],
      widthClass: "medium"
    },
    {
      label: "Medical History",
      key: "medicalHistory",
      type: "select",
      options: ["", "Yes", "No"],
      widthClass: "narrow"
    },
    {
      label: "Other Health Info",
      key: "otherHealthInfo",
      type: "select",
      options: ["", "Nil", "Yes"],
      widthClass: "narrow"
    },
    { label: "Final Conclusion", key: "finalConclusion", type: "select", options: ["", "Fit", "Hold", "Unfit"], widthClass: "narrow" }
  ];
  return (
    <div className="nurse-pre-employment-container">
      <h1 className="nurse-pre-employment-title">Pre-Employment Dashboard</h1>
      <button
        className="open-form-button"
        onClick={() => setIsPopupOpen(true)}
      >
        Enter Laborer Data
      </button>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Laborer Data Entry (Up to 10 Laborers)</h2>
            <form onSubmit={handleSubmit}> {/* ✅ No (values); use state inside */}
              <div className="form-table">
                <div className="table-header">
                  <div className="table-cell">Laborer</div>
                  {fields.map((field, index) => (
                    <div key={index} className={`table-cell ${field.widthClass}`} title={field.label}>
                      {field.label}
                    </div>
                  ))}
                </div>
                {laborers.map((laborer, index) => (
                  <div key={index} className="table-row">
                    <div className="table-cell">Laborer {index + 1}</div>
                    {fields.map((field, fieldIndex) => (
                      <div key={fieldIndex} className={`table-cell ${field.widthClass} ${field.type === 'multiselect' ? 'multiselect-cell' : ''}`}>
                        {field.type === "select" ? (
                          <select
                            value={laborer[field.key] || ""}
                            onChange={(e) => handleInputChange(index, field.key, e.target.value)}
                            disabled={field.disabled && field.disabled(laborer)}
                            className="select-field"
                          >
                            {field.options.map((option, optIndex) => (
                              <option key={optIndex} value={option}>{option || "Select"}</option>
                            ))}
                          </select>
                        ) : field.type === "multiselect" ? (
                          <MultiSelectField
                            value={Array.isArray(laborer[field.key]) ? laborer[field.key] : []}
                            options={field.options}
                            onChange={(selected) => handleInputChange(index, field.key, selected)}
                          />
                        ) : field.type === "file" ? (
                          <input
                            type="file"
                            accept={field.accept}
                            onChange={(e) => handleFileChange(index, field.key, e)}
                            className="file-field"
                          />
                        ) : (
                          <input
                            type={field.type}
                            step={field.step}
                            value={laborer[field.key] || ""}
                            onChange={(e) => handleInputChange(index, field.key, e.target.value)}
                            className="input-field"
                          />
                        )}
                        {field.key === "otherHealthInfo" && laborer.otherHealthInfo === "Yes" && (
                          <textarea
                            value={laborer.otherHealthDetails || ""}
                            onChange={(e) => handleInputChange(index, "otherHealthDetails", e.target.value)}
                            placeholder="Provide details"
                            className="textarea-field"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="form-actions">
                <button type="button" onClick={() => setIsPopupOpen(false)}>
                  Cancel
                </button>
                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default NursePreEmployment;