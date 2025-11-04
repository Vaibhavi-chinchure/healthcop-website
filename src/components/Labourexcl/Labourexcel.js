

// import React, { useState, useEffect } from "react";
// import * as XLSX from 'xlsx';
// import "./Labourecxl.css";

// function ApprovedLaborersExcel() {
//   const [approvedLaborers, setApprovedLaborers] = useState([]);
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');
//   const [isDownloading, setIsDownloading] = useState(false);
//   const [error, setError] = useState('');
//   const [showPopup, setShowPopup] = useState(false); // New state for popup visibility

//   const fetchApprovedLaborers = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("https://healthcop-website-backend-1.onrender.com/api/nurse-pre-employment", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         credentials: 'include'
//       });
//       if (response.ok) {
//         const data = await response.json();
//         const approved = data.filter(l => l.status === 'approve');
//         setApprovedLaborers(approved);
//         setError('');
//       } else {
//         setError('Failed to fetch laborers. Please try again.');
//         setShowPopup(true); // Show popup on error
//       }
//     } catch (error) {
//       setError('Error fetching laborers: ' + error.message);
//       setShowPopup(true); // Show popup on error
//     }
//   };

//   useEffect(() => {
//     fetchApprovedLaborers();
//   }, []);

//   // Auto-hide popup after 3 seconds
//   useEffect(() => {
//     if (error && showPopup) {
//       const timer = setTimeout(() => {
//         setShowPopup(false);
//       }, 3000); // Popup disappears after 3 seconds
//       return () => clearTimeout(timer); // Cleanup timer on component unmount
//     }
//   }, [error, showPopup]);

//   const handleDownload = () => {
//     if (!fromDate || !toDate) {
//       setError("Please select both from and to dates.");
//       setShowPopup(true); // Show popup on error
//       return;
//     }

//     const from = new Date(fromDate);
//     const to = new Date(toDate);
//     to.setHours(23, 59, 59, 999); // Include entire "to" date

//     if (from > to) {
//       setError("From date cannot be after to date.");
//       setShowPopup(true); // Show popup on error
//       return;
//     }

//     setIsDownloading(true);
//     setError('');

//     const filteredLaborers = approvedLaborers.filter(laborer => {
//       const laborerDate = new Date(laborer.created_at);
//       return !isNaN(laborerDate) && laborerDate >= from && laborerDate <= to;
//     });

//     if (filteredLaborers.length === 0) {
//       setError("No approved laborers found in the selected date range.");
//       setShowPopup(true); // Show popup on error
//       setIsDownloading(false);
//       return;
//     }

//     try {
//       const excelData = filteredLaborers.map(laborer => ({
//         "Laborer ID": laborer.laborer_id,
//         "Name": laborer.name,
//         "Parentage": laborer.parentage,
//         "Sex": laborer.sex,
//         "Residence": laborer.residence,
//         "Date of Birth": laborer.date_of_birth ? new Date(laborer.date_of_birth).toLocaleDateString() : '',
//         "Certificate Age": laborer.certificate_age,
//         "Date": laborer.date ? new Date(laborer.date).toLocaleDateString() : '',
//         "Certificate Serial No": laborer.certificate_serial_no,
//         "Identification Mark 1": Array.isArray(laborer.identification_mark1) ? laborer.identification_mark1.join(', ') : laborer.identification_mark1,
//         "Identification Mark 2": Array.isArray(laborer.identification_mark2) ? laborer.identification_mark2.join(', ') : laborer.identification_mark2,
//         "Height": laborer.height,
//         "Weight": laborer.weight,
//         "BMI": laborer.bmi,
//         "Near Vision": laborer.near_vision,
//         "Far Vision": laborer.far_vision,
//         "BP": laborer.bp,
//         "Pulse": laborer.pulse,
//         "Systemic": laborer.systemic,
//         "Known Case of Epilepsy": laborer.known_case_of_epilepsy,
//         "Frequent Headache": laborer.frequent_headache,
//         "Limping Gait": laborer.limping_gait,
//         "Physical Deformity": laborer.physical_deformity,
//         "Flat Foot": laborer.flat_foot,
//         "Mental Depression": laborer.mental_depression,
//         "Height Phobia": laborer.height_phobia,
//         "Sugar Level": laborer.sugar_level,
//         "Blood Group": laborer.blood_group,
//         "Pallor": laborer.pallor,
//         "Lymphadenopathy": laborer.lymphadenopathy,
//         "Icterus": laborer.icterus,
//         "Cyanosis": laborer.cyanosis,
//         "Edema": laborer.edema,
//         "Medical History": laborer.medical_history,
//         "Other Health Info": laborer.other_health_info,
//         "Reason For": laborer.reason_for,
//         "Final Conclusion": laborer.final_conclusion,
//         "Created At": laborer.created_at ? new Date(laborer.created_at).toLocaleString() : ''
//       }));

//       const ws = XLSX.utils.json_to_sheet(excelData);
//       const wb = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(wb, ws, "Approved Laborers");

//       const fileName = `approved_laborers_${fromDate}_to_${toDate}.xlsx`;
//       XLSX.writeFile(wb, fileName);
//     } catch (error) {
//       setError('Error generating Excel file: ' + error.message);
//       setShowPopup(true); // Show popup on error
//     } finally {
//       setIsDownloading(false);
//     }
//   };

//   return (
//     <div className="ale-container">
//       <h1 className="ale-title">Download Approved Laborers Data</h1>
//       {showPopup && error && (
//         <div className="ale-error-popup">
//           <span>{error}</span>
//           <button className="ale-popup-close" onClick={() => setShowPopup(false)}>
//             ×
//           </button>
//         </div>
//       )}
//       <div className="ale-form">
//         <div className="ale-date-group">
//           <label htmlFor="fromDate">From Date:</label>
//           <input
//             type="date"
//             id="fromDate"
//             value={fromDate}
//             onChange={(e) => setFromDate(e.target.value)}
//             className="ale-date-input"
//           />
//         </div>
//         <div className="ale-date-group">
//           <label htmlFor="toDate">To Date:</label>
//           <input
//             type="date"
//             id="toDate"
//             value={toDate}
//             onChange={(e) => setToDate(e.target.value)}
//             className="ale-date-input"
//           />
//         </div>
//         <button
//           onClick={handleDownload}
//           disabled={isDownloading}
//           className="ale-download-button"
//         >
//           {isDownloading ? (
//             <span className="ale-loading">
//               Downloading... <span className="ale-spinner"></span>
//             </span>
//           ) : (
//             "Download Excel"
//           )}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ApprovedLaborersExcel;
import React, { useState, useEffect } from "react";
import * as XLSX from 'xlsx';
import "./Labourecxl.css";

function ApprovedLaborersExcel() {
  const [approvedLaborers, setApprovedLaborers] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false); // New state for popup visibility

  const fetchApprovedLaborers = async () => {
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
        setApprovedLaborers(approved);
        setError('');
      } else {
        setError('Failed to fetch laborers. Please try again.');
        setShowPopup(true); // Show popup on error
      }
    } catch (error) {
      setError('Error fetching laborers: ' + error.message);
      setShowPopup(true); // Show popup on error
    }
  };

  useEffect(() => {
    fetchApprovedLaborers();
  }, []);

  // Auto-hide popup after 3 seconds
  useEffect(() => {
    if (error && showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000); // Popup disappears after 3 seconds
      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [error, showPopup]);

  const handleDownload = () => {
    if (!fromDate || !toDate) {
      setError("Please select both from and to dates.");
      setShowPopup(true); // Show popup on error
      return;
    }

    const from = new Date(fromDate);
    const to = new Date(toDate);
    to.setHours(23, 59, 59, 999); // Include entire "to" date

    if (from > to) {
      setError("From date cannot be after to date.");
      setShowPopup(true); // Show popup on error
      return;
    }

    setIsDownloading(true);
    setError('');

    const filteredLaborers = approvedLaborers.filter(laborer => {
      const laborerDate = new Date(laborer.created_at);
      return !isNaN(laborerDate) && laborerDate >= from && laborerDate <= to;
    });

    if (filteredLaborers.length === 0) {
      setError("No approved laborers found in the selected date range.");
      setShowPopup(true); // Show popup on error
      setIsDownloading(false);
      return;
    }

    try {
      const excelData = filteredLaborers.map(laborer => ({
        "Laborer ID": laborer.laborer_id,
        "Name": laborer.name,
        "Parentage": laborer.parentage,
        "Sex": laborer.sex,
        "Residence": laborer.residence,
        "Date of Birth": laborer.date_of_birth ? new Date(laborer.date_of_birth).toLocaleDateString() : '',
        "Certificate Age": laborer.certificate_age,
        "Date": laborer.date ? new Date(laborer.date).toLocaleDateString() : '',
        "Certificate Serial No": laborer.certificate_serial_no,
        "Identification Mark 1": Array.isArray(laborer.identification_mark1) ? laborer.identification_mark1.join(', ') : laborer.identification_mark1,
        "Identification Mark 2": Array.isArray(laborer.identification_mark2) ? laborer.identification_mark2.join(', ') : laborer.identification_mark2,
        "Height": laborer.height,
        "Weight": laborer.weight,
        "BMI": laborer.bmi,
        "Near Vision": laborer.near_vision,
        "Far Vision": laborer.far_vision,
        "BP": laborer.bp,
        "Pulse": laborer.pulse,
        "Systemic": laborer.systemic,
        "Known Case of Epilepsy": laborer.known_case_of_epilepsy,
        "Frequent Headache": laborer.frequent_headache,
        "Limping Gait": laborer.limping_gait,
        "Physical Deformity": laborer.physical_deformity,
        "Flat Foot": laborer.flat_foot,
        "Mental Depression": laborer.mental_depression,
        "Height Phobia": laborer.height_phobia,
        "Sugar Level": laborer.sugar_level,
        "Blood Group": laborer.blood_group,
        "Pallor": laborer.pallor,
        "Lymphadenopathy": laborer.lymphadenopathy,
        "Icterus": laborer.icterus,
        "Cyanosis": laborer.cyanosis,
        "Edema": laborer.edema,
        "Medical History": laborer.medical_history,
        "Other Health Info": laborer.other_health_info,
        "Reason For": laborer.reason_for,
        "Final Conclusion": laborer.final_conclusion,
        "Created At": laborer.created_at ? new Date(laborer.created_at).toLocaleString() : ''
      }));

      const ws = XLSX.utils.json_to_sheet(excelData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Approved Laborers");

      const fileName = `approved_laborers_${fromDate}_to_${toDate}.xlsx`;
      XLSX.writeFile(wb, fileName);
    } catch (error) {
      setError('Error generating Excel file: ' + error.message);
      setShowPopup(true); // Show popup on error
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="ale-container">
      <div className="ale-card">
        <h1 className="ale-title">Download Approved Laborers Data</h1>
        <p className="ale-subtitle">Export filtered approved laborers to Excel format for reporting and analysis.</p>
        {showPopup && error && (
          <div className="ale-error-popup">
            <span>{error}</span>
            <button className="ale-popup-close" onClick={() => setShowPopup(false)}>
              ×
            </button>
          </div>
        )}
        <div className="ale-form">
          <div className="ale-date-group">
            <label htmlFor="fromDate">From Date</label>
            <input
              type="date"
              id="fromDate"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="ale-date-input"
            />
          </div>
          <div className="ale-date-group">
            <label htmlFor="toDate">To Date</label>
            <input
              type="date"
              id="toDate"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="ale-date-input"
            />
          </div>
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="ale-download-button"
          >
            {isDownloading ? (
              <span className="ale-loading">
                <span className="ale-spinner"></span>
                Downloading...
              </span>
            ) : (
              <>
                <svg className="ale-download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Excel
              </>
            )}
          </button>
        </div>
        <div className="ale-footer">
          <p>Total Approved Laborers Loaded: <span className="ale-count">{approvedLaborers.length}</span></p>
        </div>
      </div>
    </div>
  );
}

export default ApprovedLaborersExcel;