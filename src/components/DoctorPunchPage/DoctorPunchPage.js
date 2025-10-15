import React, { useState } from "react";
import {
  FaFingerprint,
  FaRegClock,
  FaMapMarkerAlt,
  FaDesktop,
  FaMobileAlt,
  FaUserMd,
} from "react-icons/fa";
import "./DoctorPunchPage.css";

const DoctorPunchPage = () => {
  const [isPunchedIn, setIsPunchedIn] = useState(false);

  const handlePunch = () => {
    setIsPunchedIn(!isPunchedIn);
    // Add API call here
  };

  return (
    <div className="doctor-page">
      {/* Doctor Profile Card */}
      <div className="doctor-card">
        <div className="doctor-avatar-container">
          <FaUserMd className="doctor-avatar" />
        </div>
        <h2 className="doctor-name">Dr. John Doe</h2>
        <p className="doctor-speciality">Cardiologist</p>
      </div>

      {/* Punch Button */}
      <div className="punch-container">
        <button
          className={`punch-button ${isPunchedIn ? "punched-in" : "punched-out"}`}
          onClick={handlePunch}
        >
          <FaFingerprint size={50} />
          <span>{isPunchedIn ? "Punch Out" : "Punch In"}</span>
        </button>
      </div>

      {/* Info Section */}
      <div className="info-strip">
        <div className="info-item">
          <FaRegClock className="info-icon" />
          <span>09:45 AM</span>
          <small>Time</small>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt className="info-icon" />
          <span>City Hospital, NY</span>
          <small>Location</small>
        </div>
        <div className="info-item">
          {isPunchedIn ? (
            <FaMobileAlt className="info-icon" />
          ) : (
            <FaDesktop className="info-icon" />
          )}
          <span>{isPunchedIn ? "Mobile" : "Desktop"}</span>
          <small>Device</small>
        </div>
      </div>
    </div>
  );
};

export default DoctorPunchPage;
