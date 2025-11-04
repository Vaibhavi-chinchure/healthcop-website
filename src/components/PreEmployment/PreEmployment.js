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
  const [editStatus, setEditStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const token = localStorage.getItem("token");

  // Fetch sites
  useEffect(() => {
    if (!showSiteSelection) return;
    const fetchSites = async () => {
      try {
        const res = await axios.get("https://healthcop-website-backend-1.onrender.com/api/sites", {
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
          `https://healthcop-website-backend-1.onrender.com/api/pre-employment/site-records?site_id=${selectedSite}`,
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

  // View record
  const handleView = (record) => {
    setViewRecord(record);
    setEditStatus(record.status);
  };

  // Close modal
  const handleCloseView = (e) => {
    if (e.target.classList.contains("modal-overlay-preemployment")) {
      setViewRecord(null);
      setEditStatus("");
    }
  };

  // Handle status change
  const handleStatusChange = (value) => {
    setEditStatus(value);
  };

  // Close success popup
  const handleCloseSuccess = (e) => {
    if (e.target.classList.contains("success-popup-overlay")) {
      setSuccessMessage("");
    }
  };

  // Update status
  // Update status
const handleUpdate = async () => {
  try {
    const payload = { status: editStatus };
    console.log("Updating status for record ID:", viewRecord.id, "Payload:", payload);
    const response = await axios.put(
      `https://healthcop-website-backend-1.onrender.com/api/pre-employment/update/${viewRecord.id}`,  // Added /api/ here
      payload,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setRecords((prev) =>
      prev.map((r) =>
        r.id === viewRecord.id ? { ...r, status: editStatus } : r
      )
    );
    setViewRecord(null);
    setEditStatus("");
    setSuccessMessage(response.data.message || "Status updated successfully!");
  } catch (err) {
    console.error("Update error details:", {
      message: err.message,
      status: err.response?.status,
      data: err.response?.data,
    });
    setError(err.response?.data?.message || "Failed to update status.");
  }
};

  // Approve record
  const handleApprove = async (recordId) => {
    try {
      const payload = { status: "approve" };
      console.log("Approving record ID:", recordId, "Payload:", payload);
      const response = await axios.put(
        `https://healthcop-website-backend-1.onrender.com/api/pre-employment/update/${recordId}`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRecords((prev) =>
        prev.map((r) =>
          r.id === recordId ? { ...r, status: "approve" } : r
        )
      );
      setSuccessMessage(response.data.message || "Record approved successfully!");
    } catch (err) {
      console.error("Approve error details:", {
        message: err.message,
        status: err.response?.status,
        data: err.response?.data,
        token: token ? "Present" : "Missing",
      });
      setError(err.response?.data?.message || "Failed to approve record.");
    }
  };

  // Organized field groups for modal
  const fieldGroups = {
    "Personal Information": [
      "laborer_id",
      "name",
      "parentage",
      "sex",
      "residence",
      "date_of_birth",
      "certificate_age",
      "identification_mark1",
      "identification_mark2",
    ],
    "Certificate Details": ["certificate_serial_no", "date", "reason_for"],
    "Health Metrics": [
      "height",
      "weight",
      "bmi",
      "body_temp",
      "near_vision",
      "far_vision",
      "bp",
      "pulse",
    ],
    "Medical Conditions": [
      "systemic",
      "known_case_of_epilepsy",
      "frequent_headache",
      "limping_gait",
      "physical_deformity",
      "flat_foot",
      "mental_depression",
      "height_phobia",
    ],
    "Test Results": [
      "sugar_level",
      "blood_group",
      "pallor",
      "lymphadenopathy",
      "icterus",
      "cyanosis",
      "edema",
    ],
    "Additional Info": [
      "medical_history",
      "other_health_info",
      "other_health_details",
      "final_conclusion",
    ],
    "Status": ["status"],
  };

  return (
    <div className="preemployment-container">
      <h2>Pre-Employment Records</h2>
      {/* Site Selection */}
      {showSiteSelection && (
        <div className="site-selector-card">
          <h3>Select Site</h3>
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
      {/* Records List */}
      {!showSiteSelection && (
        <>
          {loading && <p className="loading">Loading records...</p>}
          {error && <p className="error">{error}</p>}
          {records.length > 0 && (
            <div className="records-list">
              {records.map((rec) => (
                <div key={rec.id} className="record-card">
                  <div className="record-field">
                    <span className="field-label">Laborer ID:</span>
                    <span>{rec.laborer_id}</span>
                  </div>
                  <div className="record-field">
                    <span className="field-label">Name:</span>
                    <span>{rec.name}</span>
                  </div>
                  <div className="record-field">
                    <span className="field-label">Certificate:</span>
                    <span>{rec.certificate_serial_no}</span>
                  </div>
                  <div className="record-field">
                    <span className="field-label">Status:</span>
                    <span>{rec.status}</span>
                  </div>
                  <div className="record-field">
                    <span className="field-label">Active:</span>
                    <span>{rec.active}</span>
                  </div>
                  <div className="action-buttons">
                    <button className="view-btn" onClick={() => handleView(rec)}>
                      View Details
                    </button>
                    <button
                      className="approve-btn"
                      onClick={() => handleApprove(rec.id)}
                      disabled={rec.status === "approve"}
                    >
                      Approve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {!loading && records.length === 0 && (
            <p className="no-records">No records found for this site.</p>
          )}
        </>
      )}
      {/* Modal for viewing/updating status */}
      {viewRecord && (
        <div className="modal-overlay-preemployment" onClick={handleCloseView}>
          <div className="modal-content-preemployment" onClick={(e) => e.stopPropagation()}>
            <h3>Details for {viewRecord.name}</h3>
            <button className="close-btn" onClick={() => setViewRecord(null)}>
              &times;
            </button>
            <table className="record-table">
              <tbody>
                {Object.entries(fieldGroups).map(([groupName, fields]) => (
                  <React.Fragment key={groupName}>
                    <tr className="group-header-row">
                      <td colSpan="2" className="group-header">
                        <h4>{groupName}</h4>
                      </td>
                    </tr>
                    {fields.map((key) => {
                      const excludeFields = ["id", "site_id", "created_at", "active"];
                      if (excludeFields.includes(key)) return null;
                      const label = key.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase());
                      return (
                        <tr key={key} className="field-row">
                          <td className="field-label-cell">{label}:</td>
                          <td className="field-value-cell">
                            {key === "status" ? (
                              <select
                                value={editStatus}
                                onChange={(e) => handleStatusChange(e.target.value)}
                              >
                                <option value="approve">Approve</option>
                                <option value="reject">Reject</option>
                                <option value="pending">Pending</option>
                              </select>
                            ) : (
                              <span>{viewRecord[key] || "N/A"}</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            <div className="modal-actions">
              <button className="update-btn" onClick={handleUpdate}>
                Update Status
              </button>
              <button className="cancel-btn" onClick={() => setViewRecord(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Success Popup */}
      {successMessage && (
        <div className="success-popup-overlay" onClick={handleCloseSuccess}>
          <div className="success-popup" onClick={(e) => e.stopPropagation()}>
            <h3>Success</h3>
            <p>{successMessage}</p>
            <button className="success-close-btn" onClick={() => setSuccessMessage("")}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PreEmployment;