import React, { useState } from "react";
import "./HealthCheckUp.css";

export default function HealthCheckUp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="health-container">
      {/* Header with button */}
      <div className="health-header">
        <h1 className="health-title">Health Checkup Records</h1>
        <button className="health-btn" onClick={() => setOpen(true)}>
          Add Health Checkup
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div className="health-modal-overlay">
          <div className="health-modal">
            <div className="health-modal-header">
              <h2>Health Checkup Form</h2>
              <button className="close-btn" onClick={() => setOpen(false)}>
                ✖
              </button>
            </div>

            <form className="health-form">
              {/* Certificate Details */}
              <fieldset>
                <legend>Certificate Details</legend>
                <div className="form-group">
                  <input type="text" placeholder="Certificate Serial No" />
                  <input type="date" placeholder="Date" />
                  <input type="text" placeholder="Project SP & C" />
                </div>
              </fieldset>

              {/* Personal Info */}
              <fieldset>
                <legend>Personal Information</legend>
                <div className="form-group">
                  <input type="text" placeholder="Full Name" />
                  <input type="text" placeholder="Son/Daughter of" />
                  <input type="text" placeholder="Father's Name" />
                  <input type="text" placeholder="Sex" />
                  <input type="text" placeholder="Residence" />
                  <input type="date" placeholder="Date of Birth if Available" />
                  <input type="number" placeholder="And/Or Certificate Age" />
                  <input type="text" placeholder="Age not reveal any abnormality" />
                </div>
              </fieldset>

              {/* Identification Marks */}
              <fieldset>
                <legend>Identification Marks</legend>
                <div className="form-group">
                  <input type="text" placeholder="Mark 1" />
                  <input type="text" placeholder="Mark 2" />
                </div>
              </fieldset>

              {/* Physical Examination */}
              <fieldset>
                <legend>Physical Examination</legend>
                <div className="form-group">
                  <input type="text" placeholder="Height" />
                  <input type="text" placeholder="Weight" />
                  <input type="text" placeholder="BMI" />
                  <input type="text" placeholder="Vision" />
                  <input type="text" placeholder="Blood Pressure" />
                  <input type="text" placeholder="Pulse" />
                  <input type="text" placeholder="P/O (L)/V/C/E" />
                  <input type="text" placeholder="CVS/CNS/P/A/RS" />
                  <input type="text" placeholder="Sugar Level" />
                  <input type="text" placeholder="Blood Group" />
                </div>
                <textarea placeholder="Allergies" />
                <textarea placeholder="Medical history of past 3 years" />
                <textarea placeholder="Admitted to Hospital - Yes/No" />
                <textarea placeholder="Any other health related information" />
              </fieldset>

              {/* Doctor's Remarks */}
              <fieldset>
                <legend>Doctor's Remarks</legend>
                <textarea placeholder="I hereby certify that I have personally examined Mr./Ms. [Full Name], Son/Daughter/Wife of [Father's Name], residing at [Residence], who is desirous of being employed in building and construction work and that he/she is as nearly as can be ascertained from my examination is an adult/adolescent and that he/she is fit for employment in [Reason for fit]..." />
                <div className="form-group">
                  <input type="text" placeholder="Reason for (1) Refusal certificate (2) Certificate being revoked" />
                </div>
                <textarea placeholder="He/She does not suffer from any acute/chronic skin or contagious disease like tetanus, typhoid, cholera or any other infectious disease. His/her eye is normal with/without glasses" />
                <textarea placeholder="In Dr's opinion Mr./Ms. [Full Name] is physically and mentally fit for working elsewhere at a construction site" />
              </fieldset>

              {/* Remarks Table */}
              <fieldset>
                <legend>Remarks Table</legend>
                <div className="form-group">
                  <input type="text" placeholder="Parameter: Epilepsy" />
                  <input type="text" placeholder="Remarks: Yes/No" />
                  <input type="text" placeholder="Parameter: Frequent" />
                  <input type="text" placeholder="Remarks: Yes/No" />
                  <input type="text" placeholder="Parameter: Headache" />
                  <input type="text" placeholder="Remarks: Yes/No" />
                  <input type="text" placeholder="Parameter: Height Phobia" />
                  <input type="text" placeholder="Remarks: Yes/No" />
                  <input type="text" placeholder="Parameter: Limping Gait" />
                  <input type="text" placeholder="Remarks: Yes/No" />
                  <input type="text" placeholder="Parameter: Physical Deformity" />
                  <input type="text" placeholder="Remarks: Yes/No" />
                  <input type="text" placeholder="Parameter: Flat Foot" />
                  <input type="text" placeholder="Remarks: Yes/No" />
                  <input type="text" placeholder="Parameter: Mental" />
                  <input type="text" placeholder="Remarks: Yes/No" />
                  <input type="text" placeholder="Parameter: Depression" />
                  <input type="text" placeholder="Remarks: Yes/No" />
                  <input type="text" placeholder="Parameter: Sugar Level" />
                  <input type="text" placeholder="Remarks: Yes/No" />
                </div>
              </fieldset>

              {/* Signatures */}
              <fieldset>
                <legend>Signatures</legend>
                <div className="form-group">
                  <input type="text" placeholder="Signature/Left hand thumb impression of building worker" />
                  <input type="text" placeholder="Signature & seal Medical Inspector/CMO" />
                </div>
              </fieldset>

              {/* Notes */}
              <fieldset>
                <legend>Notes</legend>
                <textarea placeholder="Note 1: Exact details of cause of physical disability should be clearly stated." />
              </fieldset>

              {/* Submit */}
              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}