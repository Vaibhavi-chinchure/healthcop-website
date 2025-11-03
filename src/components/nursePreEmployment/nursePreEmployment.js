import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import jsPDF from 'jspdf';
import { icons } from './logobase64';
import Cookies from 'js-cookie'; // <-- Make sure this is installed: npm install js-cookie
import "./nursePreEmployment.css";

function NursePreEmployment() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [numRows, setNumRows] = useState(1);
  const [laborers, setLaborers] = useState(Array(1).fill({ policE: "None" })); // Default policE
  const [errors, setErrors] = useState(Array(1).fill({}));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [approvedLaborers, setApprovedLaborers] = useState([]);
  const [pendingLaborers, setPendingLaborers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('approved');
  const [selectedLaborer, setSelectedLaborer] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const camelToSnake = (key) => key.replace(/([A-Z])/g, '_$1').toLowerCase();
  const camelToSnakeObj = (obj) => {
    const snakeObj = {};
    Object.keys(obj).forEach(key => {
      const snakeKey = camelToSnake(key);
      snakeObj[snakeKey] = obj[key];
    });
    return snakeObj;
  };
  const snakeToCamel = (key) => key.replace(/(_[a-z])/g, g => g[1].toUpperCase());
  const snakeToCamelObj = (obj) => {
    const camelObj = {};
    Object.keys(obj).forEach(key => {
      const camelKey = snakeToCamel(key);
      camelObj[camelKey] = obj[key];
    });
    return camelObj;
  };

  const handleNumRowsChange = (newNum) => {
    const num = Math.max(1, Math.min(10, parseInt(newNum) || 1));
    setNumRows(num);
    if (num > laborers.length) {
      const additional = Array(num - laborers.length).fill({ policE: "None" });
      setLaborers([...laborers, ...additional]);
      const additionalErrors = Array(num - laborers.length).fill({});
      setErrors([...errors, ...additionalErrors]);
    } else if (num < laborers.length) {
      setLaborers(laborers.slice(0, num));
      setErrors(errors.slice(0, num));
    }
  };

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

  const handleEdit = (laborer) => {
    const camel = snakeToCamelObj(laborer);
    camel.identificationMark1 = Array.isArray(camel.identificationMark1) ? camel.identificationMark1 : (typeof camel.identificationMark1 === 'string' ? JSON.parse(camel.identificationMark1) : []);
    camel.identificationMark2 = Array.isArray(camel.identificationMark2) ? camel.identificationMark2 : (typeof camel.identificationMark2 === 'string' ? JSON.parse(camel.identificationMark2) : []);

    const polices = ["pallor", "lymphadenopathy", "icterus", "cyanosis", "edema"];
    let policE = "None";
    const reverseMap = { pallor: "Pallor", lymphadenopathy: "Lymphadenopathy", icterus: "Icterus", cyanosis: "Cyanosis", edema: "Edema" };
    for (let p of polices) {
      if (camel[p] === "Yes") {
        policE = reverseMap[p];
        break;
      }
    }
    camel.policE = policE;

    setLaborers([camel]);
    setNumRows(1);
    setErrors([{}]);
    setIsPopupOpen(true);
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

    const requiredFieldKeys = fields.filter(f => f.required).map(f => f.key);
    let newErrors = laborers.map(() => ({}));
    let hasErrors = false;

    laborers.forEach((laborer, index) => {
      requiredFieldKeys.forEach(key => {
        const value = laborer[key];
        let isEmpty;
        if (key === 'identificationMark1' || key === 'identificationMark2') {
          isEmpty = !Array.isArray(value) || value.length === 0;
        } else {
          isEmpty = !value || (typeof value === 'string' ? value.trim() === '' : false);
        }
        if (isEmpty) {
          newErrors[index][key] = 'Required';
          hasErrors = true;
        }
      });
    });

    setErrors(newErrors);
    if (hasErrors) {
      alert("Please fill all required fields marked in red.");
      setIsSubmitting(false);
      return;
    }

    if (laborers.every(l => !l.name || !l.name.trim())) {
      alert("Please fill at least one laborer's name to submit.");
      setIsSubmitting(false);
      return;
    }

    const siteId = Cookies.get('siteId');
    if (!siteId) {
      alert("No site selected. Please select a site before submitting.");
      setIsSubmitting(false);
      return;
    }

    try {
      const processedLaborers = laborers
        .map((laborer, index) => {
          if (!laborer.name || !laborer.name.trim()) {
            return null;
          }
          const proc = camelToSnakeObj(laborer);

          // ADD SITE ID TO EVERY LABORER
          proc.site_id = siteId;

          // POLICE LOGIC: Always reset all to "No"
          const polices = ["pallor", "lymphadenopathy", "icterus", "cyanosis", "edema"];
          polices.forEach((p) => {
            proc[p] = "No";
          });

          if (proc.polic_e && proc.polic_e !== "" && proc.polic_e !== "None") {
            const mapping = {
              Pallor: "pallor",
              Lymphadenopathy: "lymphadenopathy",
              Icterus: "icterus",
              Cyanosis: "cyanosis",
              Edema: "edema",
            };
            const field = mapping[proc.polic_e];
            if (field) {
              proc[field] = "Yes";
            }
          }
          delete proc.polic_e;

          proc.identification_mark1 = JSON.stringify(Array.isArray(proc.identification_mark1) ? proc.identification_mark1 : []);
          proc.identification_mark2 = JSON.stringify(Array.isArray(proc.identification_mark2) ? proc.identification_mark2 : []);
          return proc;
        })
        .filter(l => l !== null);

      console.log("Final payload (first laborer):", processedLaborers[0]); // DEBUG

      const formData = new FormData();
      formData.append("data", JSON.stringify(processedLaborers));

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

      const response = await fetch("https://healthcop-website-backend-1.onrender.com/api/nurse-pre-employment", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
        credentials: 'include'
      });

      if (response.ok) {
        const result = await response.json();
        alert(`${processedLaborers.length} laborer(s) saved successfully! Laborer IDs: ${result.laborer_ids?.join(", ") || "Generated"}`);
        setIsPopupOpen(false);
        setLaborers(Array(1).fill({ policE: "None" }));
        setNumRows(1);
        setErrors(Array(1).fill({}));
        fetchLaborers();
      } else {
        const clonedResponse = response.clone();
        let errorText = "Failed to save data";
        try {
          const error = await clonedResponse.json();
          errorText = error.error || errorText;
        } catch (parseErr) {
          errorText = await response.text();
          errorText = errorText.substring(0, 200);
        }
        alert(`Error: ${errorText}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fetchLaborers = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://healthcop-website-backend-1.onrender.com/api/nurse-pre-employment", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        const approved = data.filter(l => l.status === 'approve');
        const pending = data.filter(l => l.status === 'pending');
        setApprovedLaborers(approved);
        setPendingLaborers(pending);
      }
    } catch (error) {
      console.error("Error fetching laborers:", error);
    }
  };

  useEffect(() => {
    fetchLaborers();
  }, []);

  const openDetailsModal = (laborer) => {
    setSelectedLaborer(laborer);
    setIsDetailsOpen(true);
  };

  const closeDetailsModal = () => {
    setIsDetailsOpen(false);
    setSelectedLaborer(null);
  };

  const calculateAge = (dobString) => {
    if (!dobString) return 0;
    const birthDate = new Date(dobString);
    const today = new Date();
    if (birthDate > today) return 0;
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const downloadPDF = async (laborerData) => {
    // ... (your full PDF code remains unchanged) ...
    // [Same as before — no changes needed here]
    // Just keeping it short for brevity
  };

  const identificationOptions = [
    "Birthmark", "Scar", "Tattoos", "Mole", "Freckles", "Dimples", "Piercings",
    "Hair Color", "Scars from surgery", "Gap between teeth", "Wart", "Keloid",
    "Burn Mark", "Cut Mark", "Facial Asymmetry"
  ];

  const descriptions = {
    // ... (unchanged) ...
  };

  const MultiSelectField = ({ value, options, onChange, error }) => {
    // ... (unchanged) ...
  };

  const fields = [
    { label: "Name of Labour", key: "name", type: "text", widthClass: "wide", required: true },
    { label: "Certificate Serial No", key: "certificateSerialNo", type: "text", widthClass: "medium", required: true },
    { label: "Date", key: "date", type: "date", widthClass: "medium", required: true },
    { label: "Son/Daughter of", key: "parentage", type: "text", widthClass: "wide", required: true },
    { label: "Identification Mark 1", key: "identificationMark1", type: "multiselect", options: identificationOptions, widthClass: "medium" },
    { label: "Identification Mark 2", key: "identificationMark2", type: "multiselect", options: identificationOptions, widthClass: "medium" },
    { label: "Sex", key: "sex", type: "select", options: ["", "Male", "Female", "Not Prefer to Say"], widthClass: "narrow", required: true },
    { label: "Residence", key: "residence", type: "text", widthClass: "wide", required: true },
    { label: "Date of Birth", key: "dateOfBirth", type: "date", widthClass: "medium" },
    { label: "Certificate Age", key: "certificateAge", type: "number", widthClass: "narrow" },
    { label: "Reason for", key: "reasonFor", type: "select", options: ["", "Refusal Certificate", "Certificate Being Revoked", "Not Applicable", "Unfit"], widthClass: "medium" },
    { label: "Height", key: "height", type: "number", widthClass: "narrow" },
    { label: "Weight", key: "weight", type: "number", widthClass: "narrow" },
    { label: "BMI", key: "bmi", type: "number", step: "0.1", widthClass: "narrow" },
    { label: "Body Temp", key: "bodyTemp", type: "number", step: "0.1", widthClass: "narrow" },
    { label: "Near Vision", key: "nearVision", type: "select", options: ["", "Normal", "Abnormal", "Uses Specs"], widthClass: "narrow" },
    { label: "Far Vision", key: "farVision", type: "select", options: ["", "Normal", "Abnormal", "Uses Specs"], widthClass: "narrow" },
    { label: "BP", key: "bp", type: "text", widthClass: "narrow" },
    { label: "Pulse", key: "pulse", type: "number", widthClass: "narrow" },
    { label: "Systemic", key: "systemic", type: "select", options: ["", "Within Normal Limits", "Abnormal"], widthClass: "medium" },
    { label: "Epilepsy", key: "knownCaseOfEpilepsy", type: "select", options: ["", "Yes", "No"], widthClass: "narrow" },
    { label: "Headache", key: "frequentHeadache", type: "select", options: ["", "Yes", "No"], widthClass: "narrow" },
    { label: "Limping Gait", key: "limpingGait", type: "select", options: ["", "Yes", "No"], widthClass: "medium" },
    { label: "Deformity", key: "physicalDeformity", type: "select", options: ["", "Yes", "No"], widthClass: "medium" },
    { label: "Flat Foot", key: "flatFoot", type: "select", options: ["", "Yes", "No"], widthClass: "medium" },
    { label: "Depression", key: "mentalDepression", type: "select", options: ["", "Yes", "No"], widthClass: "narrow" },
    { label: "Height Phobia", key: "heightPhobia", type: "select", options: ["", "Yes", "No", "Not Applicable"], disabled: (laborer) => laborer.sex === "Female", widthClass: "medium" },
    { label: "Height Phobia Image", key: "heightPhobiaImage", type: "file", accept: "image/*", widthClass: "medium" },
    { label: "Deformity Image", key: "physicalDeformityImage", type: "file", accept: "image/*", widthClass: "medium" },
    { label: "Sugar Level", key: "sugarLevel", type: "number", step: "0.1", widthClass: "narrow" },
    { label: "Blood Group", key: "bloodGroup", type: "select", options: ["", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], widthClass: "narrow" },
    { label: "P/O/L/I/C/E", key: "policE", type: "select", options: ["", "None", "Pallor", "Lymphadenopathy", "Icterus", "Cyanosis", "Edema"], widthClass: "medium" },
    { label: "Medical History", key: "medicalHistory", type: "select", options: ["", "Yes", "No"], widthClass: "narrow" },
    { label: "Other Health Info", key: "otherHealthInfo", type: "select", options: ["", "Nil", "Yes"], widthClass: "narrow" },
    { label: "Final Conclusion", key: "finalConclusion", type: "select", options: ["", "Fit", "Hold", "Unfit"], widthClass: "narrow" }
  ];

  const filteredApprovedLaborers = approvedLaborers.filter(laborer =>
    laborer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(laborer.laborer_id).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="npe-container">
      <div className="npe-header">
        <h1 className="npe-title">Pre-Employment Dashboard</h1>
        <button
          className="npe-open-form-button"
          onClick={() => {
            const siteId = Cookies.get('siteId');
            if (!siteId) {
              alert("Please select a site first.");
              return;
            }
            setLaborers(Array(1).fill({ policE: "None" }));
            setIsPopupOpen(true);
          }}
        >
          Enter Laborer Data
        </button>
      </div>

      <div style={{ padding: '10px', background: '#f0f0f0', margin: '10px 0', borderRadius: '5px', fontSize: '14px' }}>
        <strong>Current Site:</strong> {Cookies.get('siteName') || 'Not Selected'} (ID: {Cookies.get('siteId') || 'N/A'})
      </div>

      {/* ... rest of your JSX (tabs, tables, modals) remains unchanged ... */}
      {/* Paste the rest of your original return JSX here */}
      {/* For brevity, only key parts shown */}
    </div>
  );
}

export default NursePreEmployment;
