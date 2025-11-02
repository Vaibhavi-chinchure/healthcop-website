
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; 
import axios from "axios";
import "./login.css";

function Login({ onClose = () => {}, openSignup = () => {} }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showSiteSelection, setShowSiteSelection] = useState(false);
  const [sites, setSites] = useState([]);
  const [selectedSiteId, setSelectedSiteId] = useState("");
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let timeout;

    if (showPopup && !showSiteSelection) {
      const isDoctorOrNurse = userData?.role === "doctor" || userData?.role === "nurse";
      timeout = setTimeout(() => {
        if (typeof onClose === "function") {
          onClose();
        }
        navigate("/Dashboard", { replace: true });
      }, isDoctorOrNurse ? 500 : 1000);
    }

    return () => clearTimeout(timeout);
  }, [showPopup, showSiteSelection, userData, onClose, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://healthcop-website-backend-1.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email, 
          password,
          siteId: selectedSiteId || Cookies.get("siteId") || null   // ✅ Send siteId to backend
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Cookies.set("loginEmail", email, { expires: 7, secure: true, sameSite: "None" });

        const userRes = await fetch(`https://healthcop-website-backend-1.onrender.com/api/user?email=${email}`);
        const user = await userRes.json();
        setUserData(user);

        Cookies.set("userId", user.USRID, { expires: 7, secure: true, sameSite: "None" });
        Cookies.set("userName", user.name, { expires: 7, secure: true, sameSite: "None"});

        if (selectedSiteId) {
          Cookies.set("siteId", selectedSiteId, { expires: 7, secure: true, sameSite: "None" });
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("name", user?.name || data.name || "User");
        localStorage.setItem("sessionActive", "true");

        if (data.role === "doctor" || data.role === "nurse") {
          setShowSiteSelection(true);
          fetchSites();
        } else {
          setShowPopup(true);
        }
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const fetchSites = async () => {
    try {
      const res = await axios.get("https://healthcop-website-backend-1.onrender.com/api/sites");
      setSites(res.data);
    } catch (err) {
      console.error("Error fetching sites:", err);
      setError("Failed to load sites");
    }
  };

  const handleSiteSelect = () => {
    const selectedSite = sites.find((s) => s.site_id === parseInt(selectedSiteId));
    if (!selectedSite) {
      setError("Please select a site");
      return;
    }

    Cookies.set("siteId", selectedSite.site_id, { expires: 7, secure: true, sameSite: "None" });
    Cookies.set("siteName", selectedSite.site_name, { expires: 7, secure: true, sameSite: "None" });

    setShowPopup(true);
    setShowSiteSelection(false);
  };

  const handleSignupLinkClick = (e) => {
    e.preventDefault();
    if (typeof openSignup === "function") {
      openSignup();
    }
  };

  return (
    <div className="lg-login-container">
      <div className="lg-login-card">
        <button className="lg-close-btn" onClick={() => typeof onClose === "function" && onClose()} aria-label="Close login form">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6l12 12" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h2 className="lg-login-title">{showSiteSelection ? "Select Your Site" : "Login to HealthCop"}</h2>
        {error && <p className="lg-error-message">{error}</p>}
        {showPopup && <div className="lg-popup">Successfully logged in!</div>}

        {!showSiteSelection ? (
          <form onSubmit={handleLogin}>
            <div className="lg-form-group">
              <label className="lg-form-label">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="lg-form-input" required />
            </div>

            <div className="lg-form-group">
              <label className="lg-form-label">Password</label>
              <div className="lg-password-wrapper">
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="lg-form-input" required />
                <button type="button" className="lg-toggle-password" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button type="submit" className="lg-login-submit-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <p className="lg-login-link">
              Don't have an account? <a href="#signup" onClick={handleSignupLinkClick}>Sign Up</a>
            </p>
          </form>
        ) : (
          <>
            <div className="lg-form-group">
              <select value={selectedSiteId} onChange={(e) => setSelectedSiteId(e.target.value)} className="lg-form-input" required>
                <option value="">-- Choose Site --</option>
                {sites.map((site) => (
                  <option key={site.site_id} value={site.site_id}>{site.site_name}</option>
                ))}
              </select>
            </div>
            <button onClick={handleSiteSelect} className="lg-login-submit-btn">
              Confirm Site
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
