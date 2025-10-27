// // // // // // // // // import React, { useState } from "react";
// // // // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // // // import Cookies from "js-cookie";
// // // // // // // // // import "./login.css";

// // // // // // // // // function Login() {
// // // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // // // // // //   const [error, setError] = useState("");
// // // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // // //   const [showPopup, setShowPopup] = useState(false);
// // // // // // // // //   const navigate = useNavigate();

// // // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     setError("");
// // // // // // // // //     setLoading(true);

// // // // // // // // //     const payload = { email, password };
// // // // // // // // //     console.log("Sending login payload:", payload);

// // // // // // // // //     try {
// // // // // // // // //       const response = await fetch("http://localhost:5000/api/login", {
// // // // // // // // //         method: "POST",
// // // // // // // // //         headers: {
// // // // // // // // //           "Content-Type": "application/json",
// // // // // // // // //         },
// // // // // // // // //         body: JSON.stringify(payload),
// // // // // // // // //       });

// // // // // // // // //       const data = await response.json();
// // // // // // // // //       console.log("Login API response:", { status: response.status, data });

// // // // // // // // //       if (response.ok) {
// // // // // // // // //         // ✅ Store user data in localStorage
// // // // // // // // //         localStorage.setItem("token", data.token);
// // // // // // // // //         localStorage.setItem("role", data.role);
// // // // // // // // //         localStorage.setItem("name", data.name || "User");
// // // // // // // // //         localStorage.setItem("sessionActive", "true");

// // // // // // // // //         // ✅ Store login email in cookies
// // // // // // // // //         Cookies.set("loginEmail", email, { expires: 7, secure: true, sameSite: "Strict" });

// // // // // // // // //         console.log("Login successful:", { email, role: data.role, name: data.name });
// // // // // // // // //         setShowPopup(true);

// // // // // // // // //         setTimeout(() => {
// // // // // // // // //           setShowPopup(false);
// // // // // // // // //           console.log("Redirecting to:", data.role === "client" ? "/Dashboard" : "/Dashboard");
// // // // // // // // //           navigate("/Dashboard", { replace: true });
// // // // // // // // //         }, 2000);
// // // // // // // // //       } else {
// // // // // // // // //         setError(data.message || "Login failed. Please check your credentials.");
// // // // // // // // //         console.log("Login failed with message:", data.message);
// // // // // // // // //       }
// // // // // // // // //     } catch (err) {
// // // // // // // // //       setError("An error occurred. Please try again later.");
// // // // // // // // //       console.error("Login error:", err);
// // // // // // // // //     } finally {
// // // // // // // // //       setLoading(false);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="login-container">
// // // // // // // // //       <div className="login-card">
// // // // // // // // //         <h2>Login to HealthCop</h2>
// // // // // // // // //         {error && <p className="error-message">{error}</p>}
// // // // // // // // //         {showPopup && <div className="popup">Successfully logged in!</div>}

// // // // // // // // //         <form onSubmit={handleSubmit}>
// // // // // // // // //           <div className="form-group">
// // // // // // // // //             <label htmlFor="email">Email</label>
// // // // // // // // //             <input
// // // // // // // // //               type="email"
// // // // // // // // //               id="email"
// // // // // // // // //               value={email}
// // // // // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // // // // //               placeholder="Enter your email"
// // // // // // // // //               required
// // // // // // // // //             />
// // // // // // // // //           </div>

// // // // // // // // //           <div className="form-group">
// // // // // // // // //             <label htmlFor="password">Password</label>
// // // // // // // // //             <div className="password-wrapper">
// // // // // // // // //               <input
// // // // // // // // //                 type={showPassword ? "text" : "password"}
// // // // // // // // //                 id="password"
// // // // // // // // //                 value={password}
// // // // // // // // //                 onChange={(e) => setPassword(e.target.value)}
// // // // // // // // //                 placeholder="Enter your password"
// // // // // // // // //                 required
// // // // // // // // //               />
// // // // // // // // //               <button
// // // // // // // // //                 type="button"
// // // // // // // // //                 className="toggle-password"
// // // // // // // // //                 onClick={() => setShowPassword(!showPassword)}
// // // // // // // // //               >
// // // // // // // // //                 {showPassword ? "Hide" : "Show"}
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //           </div>

// // // // // // // // //           <button
// // // // // // // // //             type="submit"
// // // // // // // // //             className="login-submit-btn"
// // // // // // // // //             disabled={loading}
// // // // // // // // //           >
// // // // // // // // //             {loading ? "Logging in..." : "Login"}
// // // // // // // // //           </button>
// // // // // // // // //         </form>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // export default Login;


// // // // // // // // import React, { useState } from "react";
// // // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // // import Cookies from "js-cookie";
// // // // // // // // import "./login.css";

// // // // // // // // function Login() {
// // // // // // // //   const [email, setEmail] = useState("");
// // // // // // // //   const [password, setPassword] = useState("");
// // // // // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // // // // //   const [error, setError] = useState("");
// // // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // // //   const [showPopup, setShowPopup] = useState(false);
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     setError("");
// // // // // // // //     setLoading(true);

// // // // // // // //     const payload = { email, password };
// // // // // // // //     console.log("Sending login payload:", payload);

// // // // // // // //     try {
// // // // // // // //       const response = await fetch("http://localhost:5000/api/login", {
// // // // // // // //         method: "POST",
// // // // // // // //         headers: {
// // // // // // // //           "Content-Type": "application/json",
// // // // // // // //         },
// // // // // // // //         body: JSON.stringify(payload),
// // // // // // // //       });

// // // // // // // //       const data = await response.json();
// // // // // // // //       console.log("Login API response:", { status: response.status, data });

// // // // // // // //       if (response.ok) {
// // // // // // // //         // ✅ Store login email in cookies
// // // // // // // //         Cookies.set("loginEmail", email, { expires: 7, secure: true, sameSite: "Strict" });

// // // // // // // //         // ✅ Fetch user details using email
// // // // // // // //         const userResponse = await fetch(`http://localhost:5000/api/user?email=${email}`);
// // // // // // // //         const userData = await userResponse.json();

// // // // // // // //         if (userResponse.ok && userData) {
// // // // // // // //           // ✅ Store USRID and name in cookies
// // // // // // // //           Cookies.set("userId", userData.USRID, { expires: 7, secure: true, sameSite: "Strict" });
// // // // // // // //           Cookies.set("userName", userData.name, { expires: 7, secure: true, sameSite: "Strict" });

// // // // // // // //           console.log("Stored cookies:", {
// // // // // // // //             email,
// // // // // // // //             userId: userData.USRID,
// // // // // // // //             userName: userData.name,
// // // // // // // //           });
// // // // // // // //         } else {
// // // // // // // //           console.warn("User details not found for email:", email);
// // // // // // // //         }

// // // // // // // //         // ✅ Store other data in localStorage (optional)
// // // // // // // //         localStorage.setItem("token", data.token);
// // // // // // // //         localStorage.setItem("role", data.role);
// // // // // // // //         localStorage.setItem("name", userData?.name || data.name || "User");
// // // // // // // //         localStorage.setItem("sessionActive", "true");

// // // // // // // //         // ✅ Success Popup and Redirect
// // // // // // // //         setShowPopup(true);
// // // // // // // //         setTimeout(() => {
// // // // // // // //           setShowPopup(false);
// // // // // // // //           navigate("/Dashboard", { replace: true });
// // // // // // // //         }, 2000);
// // // // // // // //       } else {
// // // // // // // //         setError(data.message || "Login failed. Please check your credentials.");
// // // // // // // //       }
// // // // // // // //     } catch (err) {
// // // // // // // //       setError("An error occurred. Please try again later.");
// // // // // // // //       console.error("Login error:", err);
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className="login-container">
// // // // // // // //       <div className="login-card">
// // // // // // // //         <h2>Login to HealthCop</h2>
// // // // // // // //         {error && <p className="error-message">{error}</p>}
// // // // // // // //         {showPopup && <div className="popup">Successfully logged in!</div>}

// // // // // // // //         <form onSubmit={handleSubmit}>
// // // // // // // //           <div className="form-group">
// // // // // // // //             <label htmlFor="email">Email</label>
// // // // // // // //             <input
// // // // // // // //               type="email"
// // // // // // // //               id="email"
// // // // // // // //               value={email}
// // // // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // // // //               placeholder="Enter your email"
// // // // // // // //               required
// // // // // // // //             />
// // // // // // // //           </div>

// // // // // // // //           <div className="form-group">
// // // // // // // //             <label htmlFor="password">Password</label>
// // // // // // // //             <div className="password-wrapper">
// // // // // // // //               <input
// // // // // // // //                 type={showPassword ? "text" : "password"}
// // // // // // // //                 id="password"
// // // // // // // //                 value={password}
// // // // // // // //                 onChange={(e) => setPassword(e.target.value)}
// // // // // // // //                 placeholder="Enter your password"
// // // // // // // //                 required
// // // // // // // //               />
// // // // // // // //               <button
// // // // // // // //                 type="button"
// // // // // // // //                 className="toggle-password"
// // // // // // // //                 onClick={() => setShowPassword(!showPassword)}
// // // // // // // //               >
// // // // // // // //                 {showPassword ? "Hide" : "Show"}
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //           </div>

// // // // // // // //           <button type="submit" className="login-submit-btn" disabled={loading}>
// // // // // // // //             {loading ? "Logging in..." : "Login"}
// // // // // // // //           </button>
// // // // // // // //         </form>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default Login;

// // // // // // // import React, { useState, useEffect } from "react";
// // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // import Cookies from "js-cookie";
// // // // // // // import axios from "axios";
// // // // // // // import "./login.css";

// // // // // // // function Login() {
// // // // // // //   const [email, setEmail] = useState("");
// // // // // // //   const [password, setPassword] = useState("");
// // // // // // //   const [siteId, setSiteId] = useState("");
// // // // // // //   const [sites, setSites] = useState([]);
// // // // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // // // //   const [error, setError] = useState("");
// // // // // // //   const [loading, setLoading] = useState(false);
// // // // // // //   const [showPopup, setShowPopup] = useState(false);
// // // // // // //   const navigate = useNavigate();

// // // // // // //   // ✅ Fetch site list on component mount
// // // // // // //   useEffect(() => {
// // // // // // //     const fetchSites = async () => {
// // // // // // //       try {
// // // // // // //         const res = await axios.get("http://localhost:5000/api/sites");
// // // // // // //         setSites(res.data);
// // // // // // //       } catch (err) {
// // // // // // //         console.error("Error fetching sites:", err);
// // // // // // //         setError("Failed to load sites. Please try again later.");
// // // // // // //       }
// // // // // // //     };
// // // // // // //     fetchSites();
// // // // // // //   }, []);

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     setError("");
// // // // // // //     setLoading(true);

// // // // // // //     if (!siteId) {
// // // // // // //       setError("Please select a site before logging in.");
// // // // // // //       setLoading(false);
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     const payload = { email, password };
// // // // // // //     console.log("Sending login payload:", payload);

// // // // // // //     try {
// // // // // // //       const response = await fetch("http://localhost:5000/api/login", {
// // // // // // //         method: "POST",
// // // // // // //         headers: {
// // // // // // //           "Content-Type": "application/json",
// // // // // // //         },
// // // // // // //         body: JSON.stringify(payload),
// // // // // // //       });

// // // // // // //       const data = await response.json();
// // // // // // //       console.log("Login API response:", { status: response.status, data });

// // // // // // //       if (response.ok) {
// // // // // // //         // ✅ Store login email
// // // // // // //         Cookies.set("loginEmail", email, { expires: 7, secure: true, sameSite: "Strict" });

// // // // // // //         // ✅ Fetch user details
// // // // // // //         const userResponse = await fetch(`http://localhost:5000/api/user?email=${email}`);
// // // // // // //         const userData = await userResponse.json();

// // // // // // //         if (userResponse.ok && userData) {
// // // // // // //           Cookies.set("userId", userData.USRID, { expires: 7, secure: true, sameSite: "Strict" });
// // // // // // //           Cookies.set("userName", userData.name, { expires: 7, secure: true, sameSite: "Strict" });

// // // // // // //           console.log("Stored cookies:", {
// // // // // // //             email,
// // // // // // //             userId: userData.USRID,
// // // // // // //             userName: userData.name,
// // // // // // //           });
// // // // // // //         } else {
// // // // // // //           console.warn("User details not found for email:", email);
// // // // // // //         }

// // // // // // //         // ✅ Store selected site info in cookies
// // // // // // //         const selectedSite = sites.find((s) => s.site_id === parseInt(siteId));
// // // // // // //         if (selectedSite) {
// // // // // // //           Cookies.set("siteId", selectedSite.site_id, { expires: 7, secure: true, sameSite: "Strict" });
// // // // // // //           Cookies.set("siteName", selectedSite.site_name, { expires: 7, secure: true, sameSite: "Strict" });
// // // // // // //           console.log("Stored selected site:", selectedSite);
// // // // // // //         }

// // // // // // //         // ✅ Save session data in localStorage
// // // // // // //         localStorage.setItem("token", data.token);
// // // // // // //         localStorage.setItem("role", data.role);
// // // // // // //         localStorage.setItem("name", userData?.name || data.name || "User");
// // // // // // //         localStorage.setItem("sessionActive", "true");

// // // // // // //         // ✅ Success Popup and Redirect
// // // // // // //         setShowPopup(true);
// // // // // // //         setTimeout(() => {
// // // // // // //           setShowPopup(false);
// // // // // // //           navigate("/Dashboard", { replace: true });
// // // // // // //         }, 2000);
// // // // // // //       } else {
// // // // // // //         setError(data.message || "Login failed. Please check your credentials.");
// // // // // // //       }
// // // // // // //     } catch (err) {
// // // // // // //       setError("An error occurred. Please try again later.");
// // // // // // //       console.error("Login error:", err);
// // // // // // //     } finally {
// // // // // // //       setLoading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="login-container">
// // // // // // //       <div className="login-card">
// // // // // // //         <h2>Login to HealthCop</h2>
// // // // // // //         {error && <p className="error-message">{error}</p>}
// // // // // // //         {showPopup && <div className="popup">Successfully logged in!</div>}

// // // // // // //         <form onSubmit={handleSubmit}>
// // // // // // //           {/* Email Field */}
// // // // // // //           <div className="form-group">
// // // // // // //             <label htmlFor="email">Email</label>
// // // // // // //             <input
// // // // // // //               type="email"
// // // // // // //               id="email"
// // // // // // //               value={email}
// // // // // // //               onChange={(e) => setEmail(e.target.value)}
// // // // // // //               placeholder="Enter your email"
// // // // // // //               required
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           {/* Password Field */}
// // // // // // //           <div className="form-group">
// // // // // // //             <label htmlFor="password">Password</label>
// // // // // // //             <div className="password-wrapper">
// // // // // // //               <input
// // // // // // //                 type={showPassword ? "text" : "password"}
// // // // // // //                 id="password"
// // // // // // //                 value={password}
// // // // // // //                 onChange={(e) => setPassword(e.target.value)}
// // // // // // //                 placeholder="Enter your password"
// // // // // // //                 required
// // // // // // //               />
// // // // // // //               <button
// // // // // // //                 type="button"
// // // // // // //                 className="toggle-password"
// // // // // // //                 onClick={() => setShowPassword(!showPassword)}
// // // // // // //               >
// // // // // // //                 {showPassword ? "Hide" : "Show"}
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //           {/* ✅ Site Selection Dropdown */}
// // // // // // //           <div className="form-group">
// // // // // // //             <label htmlFor="site">Select Site</label>
// // // // // // //             <select
// // // // // // //               id="site"
// // // // // // //               value={siteId}
// // // // // // //               onChange={(e) => setSiteId(e.target.value)}
// // // // // // //               required
// // // // // // //             >
// // // // // // //               <option value="">-- Choose Site --</option>
// // // // // // //               {sites.map((site) => (
// // // // // // //                 <option key={site.site_id} value={site.site_id}>
// // // // // // //                   {site.site_name}
// // // // // // //                 </option>
// // // // // // //               ))}
// // // // // // //             </select>
// // // // // // //           </div>

// // // // // // //           {/* Submit Button */}
// // // // // // //           <button type="submit" className="login-submit-btn" disabled={loading}>
// // // // // // //             {loading ? "Logging in..." : "Login"}
// // // // // // //           </button>
// // // // // // //         </form>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default Login;

// // // // // // import React, { useState } from "react";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import Cookies from "js-cookie";
// // // // // // import axios from "axios";
// // // // // // import "./login.css";

// // // // // // function Login() {
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // // //   const [error, setError] = useState("");
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [showPopup, setShowPopup] = useState(false);
// // // // // //   const [showSiteSelection, setShowSiteSelection] = useState(false);
// // // // // //   const [sites, setSites] = useState([]);
// // // // // //   const [selectedSiteId, setSelectedSiteId] = useState("");

// // // // // //   const [userData, setUserData] = useState(null);
// // // // // //   const navigate = useNavigate();

// // // // // //   const handleLogin = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     setError("");
// // // // // //     setLoading(true);

// // // // // //     try {
// // // // // //       const response = await fetch("http://localhost:5000/api/login", {
// // // // // //         method: "POST",
// // // // // //         headers: { "Content-Type": "application/json" },
// // // // // //         body: JSON.stringify({ email, password }),
// // // // // //       });
// // // // // //       const data = await response.json();

// // // // // //       if (response.ok) {
// // // // // //         // Store login email
// // // // // //         Cookies.set("loginEmail", email, { expires: 7, secure: true, sameSite: "Strict" });

// // // // // //         // Fetch user details
// // // // // //         const userRes = await fetch(`http://localhost:5000/api/user?email=${email}`);
// // // // // //         const user = await userRes.json();
// // // // // //         setUserData(user);

// // // // // //         Cookies.set("userId", user.USRID, { expires: 7, secure: true, sameSite: "Strict" });
// // // // // //         Cookies.set("userName", user.name, { expires: 7, secure: true, sameSite: "Strict" });

// // // // // //         localStorage.setItem("token", data.token);
// // // // // //         localStorage.setItem("role", data.role);
// // // // // //         localStorage.setItem("name", user?.name || data.name || "User");
// // // // // //         localStorage.setItem("sessionActive", "true");

// // // // // //         // Show site selection only for doctor/nurse
// // // // // //         if (data.role === "doctor" || data.role === "nurse") {
// // // // // //           setShowSiteSelection(true);
// // // // // //           fetchSites();
// // // // // //         } else {
// // // // // //           setShowPopup(true);
// // // // // //           setTimeout(() => {
// // // // // //             navigate("/Dashboard", { replace: true });
// // // // // //           }, 1000);
// // // // // //         }
// // // // // //       } else {
// // // // // //         setError(data.message || "Invalid credentials");
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       console.error("Login error:", err);
// // // // // //       setError("An error occurred. Please try again later.");
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   // Fetch sites
// // // // // //   const fetchSites = async () => {
// // // // // //     try {
// // // // // //       const res = await axios.get("http://localhost:5000/api/sites");
// // // // // //       setSites(res.data);
// // // // // //     } catch (err) {
// // // // // //       console.error("Error fetching sites:", err);
// // // // // //       setError("Failed to load sites");
// // // // // //     }
// // // // // //   };

// // // // // //   // Handle site selection
// // // // // //   const handleSiteSelect = () => {
// // // // // //     const selectedSite = sites.find((s) => s.site_id === parseInt(selectedSiteId));
// // // // // //     if (!selectedSite) {
// // // // // //       setError("Please select a site");
// // // // // //       return;
// // // // // //     }

// // // // // //     Cookies.set("siteId", selectedSite.site_id, { expires: 7, secure: true, sameSite: "Strict" });
// // // // // //     Cookies.set("siteName", selectedSite.site_name, { expires: 7, secure: true, sameSite: "Strict" });

// // // // // //     setShowPopup(true);
// // // // // //     setShowSiteSelection(false);

// // // // // //     setTimeout(() => {
// // // // // //       navigate("/Dashboard", { replace: true });
// // // // // //     }, 500);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="login-container">
// // // // // //       {/* Login Form */}
// // // // // //       {!showSiteSelection && (
// // // // // //         <div className="login-card">
// // // // // //           <h2>Login to HealthCop</h2>
// // // // // //           {error && <p className="error-message">{error}</p>}
// // // // // //           {showPopup && <div className="popup">Successfully logged in!</div>}

// // // // // //           <form onSubmit={handleLogin}>
// // // // // //             <div className="form-group">
// // // // // //               <label>Email</label>
// // // // // //               <input
// // // // // //                 type="email"
// // // // // //                 value={email}
// // // // // //                 onChange={(e) => setEmail(e.target.value)}
// // // // // //                 placeholder="Enter your email"
// // // // // //                 required
// // // // // //               />
// // // // // //             </div>

// // // // // //             <div className="form-group">
// // // // // //               <label>Password</label>
// // // // // //               <div className="password-wrapper">
// // // // // //                 <input
// // // // // //                   type={showPassword ? "text" : "password"}
// // // // // //                   value={password}
// // // // // //                   onChange={(e) => setPassword(e.target.value)}
// // // // // //                   placeholder="Enter your password"
// // // // // //                   required
// // // // // //                 />
// // // // // //                 <button
// // // // // //                   type="button"
// // // // // //                   className="toggle-password"
// // // // // //                   onClick={() => setShowPassword(!showPassword)}
// // // // // //                 >
// // // // // //                   {showPassword ? "Hide" : "Show"}
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <button type="submit" disabled={loading}>
// // // // // //               {loading ? "Logging in..." : "Login"}
// // // // // //             </button>
// // // // // //           </form>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Site Selection */}
// // // // // //       {showSiteSelection && (
// // // // // //         <div className="login-card">
// // // // // //           <h2>Select Your Site</h2>
// // // // // //           {error && <p className="error-message">{error}</p>}
// // // // // //           <div className="form-group">
// // // // // //             <select
// // // // // //               value={selectedSiteId}
// // // // // //               onChange={(e) => setSelectedSiteId(e.target.value)}
// // // // // //             >
// // // // // //               <option value="">-- Choose Site --</option>
// // // // // //               {sites.map((site) => (
// // // // // //                 <option key={site.site_id} value={site.site_id}>
// // // // // //                   {site.site_name}
// // // // // //                 </option>
// // // // // //               ))}
// // // // // //             </select>
// // // // // //           </div>
// // // // // //           <button onClick={handleSiteSelect}>Confirm Site</button>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default Login;

// // // // // import React, { useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import Cookies from "js-cookie";
// // // // // import axios from "axios";
// // // // // import "./login.css";

// // // // // function Login() {
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // //   const [error, setError] = useState("");
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [showPopup, setShowPopup] = useState(false);
// // // // //   const [showSiteSelection, setShowSiteSelection] = useState(false);
// // // // //   const [sites, setSites] = useState([]);
// // // // //   const [selectedSiteId, setSelectedSiteId] = useState("");
// // // // //   const [userData, setUserData] = useState(null);
// // // // //   const [isVisible, setIsVisible] = useState(true); // State to control visibility
// // // // //   const navigate = useNavigate();

// // // // //   const handleLogin = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setError("");
// // // // //     setLoading(true);

// // // // //     try {
// // // // //       const response = await fetch("http://localhost:5000/api/login", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({ email, password }),
// // // // //       });
// // // // //       const data = await response.json();

// // // // //       if (response.ok) {
// // // // //         Cookies.set("loginEmail", email, { expires: 7, secure: true, sameSite: "Strict" });
// // // // //         const userRes = await fetch(`http://localhost:5000/api/user?email=${email}`);
// // // // //         const user = await userRes.json();
// // // // //         setUserData(user);

// // // // //         Cookies.set("userId", user.USRID, { expires: 7, secure: true, sameSite: "Strict" });
// // // // //         Cookies.set("userName", user.name, { expires: 7, secure: true, sameSite: "Strict" });

// // // // //         localStorage.setItem("token", data.token);
// // // // //         localStorage.setItem("role", data.role);
// // // // //         localStorage.setItem("name", user?.name || data.name || "User");
// // // // //         localStorage.setItem("sessionActive", "true");

// // // // //         if (data.role === "doctor" || data.role === "nurse") {
// // // // //           setShowSiteSelection(true);
// // // // //           fetchSites();
// // // // //         } else {
// // // // //           setShowPopup(true);
// // // // //           setTimeout(() => {
// // // // //             navigate("/Dashboard", { replace: true });
// // // // //           }, 1000);
// // // // //         }
// // // // //       } else {
// // // // //         setError(data.message || "Invalid credentials");
// // // // //       }
// // // // //     } catch (err) {
// // // // //       console.error("Login error:", err);
// // // // //       setError("An error occurred. Please try again later.");
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const fetchSites = async () => {
// // // // //     try {
// // // // //       const res = await axios.get("http://localhost:5000/api/sites");
// // // // //       setSites(res.data);
// // // // //     } catch (err) {
// // // // //       console.error("Error fetching sites:", err);
// // // // //       setError("Failed to load sites");
// // // // //     }
// // // // //   };

// // // // //   const handleSiteSelect = () => {
// // // // //     const selectedSite = sites.find((s) => s.site_id === parseInt(selectedSiteId));
// // // // //     if (!selectedSite) {
// // // // //       setError("Please select a site");
// // // // //       return;
// // // // //     }

// // // // //     Cookies.set("siteId", selectedSite.site_id, { expires: 7, secure: true, sameSite: "Strict" });
// // // // //     Cookies.set("siteName", selectedSite.site_name, { expires: 7, secure: true, sameSite: "Strict" });

// // // // //     setShowPopup(true);
// // // // //     setShowSiteSelection(false);

// // // // //     setTimeout(() => {
// // // // //       navigate("/Dashboard", { replace: true });
// // // // //     }, 500);
// // // // //   };

// // // // //   const handleClose = () => {
// // // // //     setIsVisible(false); // Hide the login form
// // // // //   };

// // // // //   if (!isVisible) return null; // Return null if the form is closed

// // // // //   return (
// // // // //     <div className="hc-login-container">
// // // // //       {!showSiteSelection && (
// // // // //         <div className="hc-login-card">
// // // // //           <button className="hc-close-btn" onClick={handleClose}>
// // // // //             &times;
// // // // //           </button>
// // // // //           <h2 className="hc-login-title">Login to HealthCop</h2>
// // // // //           {error && <p className="hc-error-message">{error}</p>}
// // // // //           {showPopup && <div className="hc-popup">Successfully logged in!</div>}

// // // // //           <form onSubmit={handleLogin}>
// // // // //             <div className="hc-form-group">
// // // // //               <label className="hc-form-label">Email</label>
// // // // //               <input
// // // // //                 type="email"
// // // // //                 value={email}
// // // // //                 onChange={(e) => setEmail(e.target.value)}
// // // // //                 placeholder="Enter your email"
// // // // //                 className="hc-form-input"
// // // // //                 required
// // // // //               />
// // // // //             </div>

// // // // //             <div className="hc-form-group">
// // // // //               <label className="hc-form-label">Password</label>
// // // // //               <div className="hc-password-wrapper">
// // // // //                 <input
// // // // //                   type={showPassword ? "text" : "password"}
// // // // //                   value={password}
// // // // //                   onChange={(e) => setPassword(e.target.value)}
// // // // //                   placeholder="Enter your password"
// // // // //                   className="hc-form-input"
// // // // //                   required
// // // // //                 />
// // // // //                 <button
// // // // //                   type="button"
// // // // //                   className="hc-toggle-password"
// // // // //                   onClick={() => setShowPassword(!showPassword)}
// // // // //                 >
// // // // //                   {showPassword ? "Hide" : "Show"}
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>

// // // // //             <button type="submit" className="hc-login-submit-btn" disabled={loading}>
// // // // //               {loading ? "Logging in..." : "Login"}
// // // // //             </button>
// // // // //           </form>
// // // // //         </div>
// // // // //       )}

// // // // //       {showSiteSelection && (
// // // // //         <div className="hc-login-card">
// // // // //           <button className="hc-close-btn" onClick={handleClose}>
// // // // //             &times;
// // // // //           </button>
// // // // //           <h2 className="hc-login-title">Select Your Site</h2>
// // // // //           {error && <p className="hc-error-message">{error}</p>}
// // // // //           <div className="hc-form-group">
// // // // //             <select
// // // // //               value={selectedSiteId}
// // // // //               onChange={(e) => setSelectedSiteId(e.target.value)}
// // // // //               className="hc-form-input"
// // // // //             >
// // // // //               <option value="">-- Choose Site --</option>
// // // // //               {sites.map((site) => (
// // // // //                 <option key={site.site_id} value={site.site_id}>
// // // // //                   {site.site_name}
// // // // //                 </option>
// // // // //               ))}
// // // // //             </select>
// // // // //           </div>
// // // // //           <button onClick={handleSiteSelect} className="hc-login-submit-btn">
// // // // //             Confirm Site
// // // // //           </button>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Login;

// // // // import React, { useState } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import Cookies from "js-cookie";
// // // // import axios from "axios";
// // // // import "./login.css";

// // // // function Login() {
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [showPassword, setShowPassword] = useState(false);
// // // //   const [error, setError] = useState("");
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [showPopup, setShowPopup] = useState(false);
// // // //   const [showSiteSelection, setShowSiteSelection] = useState(false);
// // // //   const [sites, setSites] = useState([]);
// // // //   const [selectedSiteId, setSelectedSiteId] = useState("");
// // // //   const [userData, setUserData] = useState(null);
// // // //   const [isVisible, setIsVisible] = useState(true);
// // // //   const navigate = useNavigate();

// // // //   const handleLogin = async (e) => {
// // // //     e.preventDefault();
// // // //     setError("");
// // // //     setLoading(true);

// // // //     try {
// // // //       const response = await fetch("https://healthcop-website-backend-1.onrender.com/api/login", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({ email, password }),
// // // //       });
// // // //       const data = await response.json();

// // // //       if (response.ok) {
// // // //         Cookies.set("loginEmail", email, { expires: 7, secure: true, sameSite: "Strict" });
// // // //         const userRes = await fetch(`https://healthcop-website-backend-1.onrender.com/api/user?email=${email}`);
// // // //         const user = await userRes.json();
// // // //         setUserData(user);

// // // //         Cookies.set("userId", user.USRID, { expires: 7, secure: true, sameSite: "Strict" });
// // // //         Cookies.set("userName", user.name, { expires: 7, secure: true, sameSite: "Strict" });

// // // //         localStorage.setItem("token", data.token);
// // // //         localStorage.setItem("role", data.role);
// // // //         localStorage.setItem("name", user?.name || data.name || "User");
// // // //         localStorage.setItem("sessionActive", "true");

// // // //         if (data.role === "doctor" || data.role === "nurse") {
// // // //           setShowSiteSelection(true);
// // // //           fetchSites();
// // // //         } else {
// // // //           setShowPopup(true);
// // // //           setTimeout(() => {
// // // //             navigate("/Dashboard", { replace: true });
// // // //           }, 1000);
// // // //         }
// // // //       } else {
// // // //         setError(data.message || "Invalid credentials");
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Login error:", err);
// // // //       setError("An error occurred. Please try again later.");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const fetchSites = async () => {
// // // //     try {
// // // //       const res = await axios.get("https://healthcop-website-backend-1.onrender.com/api/sites");
// // // //       setSites(res.data);
// // // //     } catch (err) {
// // // //       console.error("Error fetching sites:", err);
// // // //       setError("Failed to load sites");
// // // //     }
// // // //   };

// // // //   const handleSiteSelect = () => {
// // // //     const selectedSite = sites.find((s) => s.site_id === parseInt(selectedSiteId));
// // // //     if (!selectedSite) {
// // // //       setError("Please select a site");
// // // //       return;
// // // //     }

// // // //     Cookies.set("siteId", selectedSite.site_id, { expires: 7, secure: true, sameSite: "Strict" });
// // // //     Cookies.set("siteName", selectedSite.site_name, { expires: 7, secure: true, sameSite: "Strict" });

// // // //     setShowPopup(true);
// // // //     setShowSiteSelection(false);

// // // //     setTimeout(() => {
// // // //       navigate("/Dashboard", { replace: true });
// // // //     }, 500);
// // // //   };

// // // //   const handleClose = () => {
// // // //     setIsVisible(false);
// // // //   };

// // // //   if (!isVisible) return null;

// // // //   return (
// // // //     <div className="lg-login-container">
// // // //       {/* <button className="lg-close-btn" onClick={handleClose}>
// // // //         &times;
// // // //       </button> */}
// // // //       {!showSiteSelection && (
// // // //         <div className="lg-login-card">
// // // //           <h2 className="lg-login-title">Login to HealthCop</h2>
// // // //           {error && <p className="lg-error-message">{error}</p>}
// // // //           {showPopup && <div className="lg-popup">Successfully logged in!</div>}

// // // //           <form onSubmit={handleLogin}>
// // // //             <div className="lg-form-group">
// // // //               <label className="lg-form-label">Email</label>
// // // //               <input
// // // //                 type="email"
// // // //                 value={email}
// // // //                 onChange={(e) => setEmail(e.target.value)}
// // // //                 placeholder="Enter your email"
// // // //                 className="lg-form-input"
// // // //                 required
// // // //               />
// // // //             </div>

// // // //             <div className="lg-form-group">
// // // //               <label className="lg-form-label">Password</label>
// // // //               <div className="lg-password-wrapper">
// // // //                 <input
// // // //                   type={showPassword ? "text" : "password"}
// // // //                   value={password}
// // // //                   onChange={(e) => setPassword(e.target.value)}
// // // //                   placeholder="Enter your password"
// // // //                   className="lg-form-input"
// // // //                   required
// // // //                 />
// // // //                 <button
// // // //                   type="button"
// // // //                   className="lg-toggle-password"
// // // //                   onClick={() => setShowPassword(!showPassword)}
// // // //                 >
// // // //                   {showPassword ? "Hide" : "Show"}
// // // //                 </button>
// // // //               </div>
// // // //             </div>

// // // //             <button type="submit" className="lg-login-submit-btn" disabled={loading}>
// // // //               {loading ? "Logging in..." : "Login"}
// // // //             </button>
// // // //           </form>
// // // //         </div>
// // // //       )}

// // // //       {showSiteSelection && (
// // // //         <div className="lg-login-card">
// // // //           <h2 className="lg-login-title">Select Your Site</h2>
// // // //           {error && <p className="lg-error-message">{error}</p>}
// // // //           <div className="lg-form-group">
// // // //             <select
// // // //               value={selectedSiteId}
// // // //               onChange={(e) => setSelectedSiteId(e.target.value)}
// // // //               className="lg-form-input"
// // // //             >
// // // //               <option value="">-- Choose Site --</option>
// // // //               {sites.map((site) => (
// // // //                 <option key={site.site_id} value={site.site_id}>
// // // //                   {site.site_name}
// // // //                 </option>
// // // //               ))}
// // // //             </select>
// // // //           </div>
// // // //           <button onClick={handleSiteSelect} className="lg-login-submit-btn">
// // // //             Confirm Site
// // // //           </button>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Login;

// // // // import React, { useState } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import Cookies from "js-cookie";
// // // // import axios from "axios";
// // // // import "./login.css";

// // // // function Login() {
// // // //   const [email, setEmail] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [showPassword, setShowPassword] = useState(false);
// // // //   const [error, setError] = useState("");
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [showPopup, setShowPopup] = useState(false);
// // // //   const [showSiteSelection, setShowSiteSelection] = useState(false);
// // // //   const [sites, setSites] = useState([]);
// // // //   const [selectedSiteId, setSelectedSiteId] = useState("");
// // // //   const [userData, setUserData] = useState(null);
// // // //   const [isVisible, setIsVisible] = useState(true);
// // // //   const navigate = useNavigate();

// // // //   const handleLogin = async (e) => {
// // // //     e.preventDefault();
// // // //     setError("");
// // // //     setLoading(true);

// // // //     try {
// // // //       const response = await fetch("https://healthcop-website-backend-1.onrender.com/api/login", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({ email, password }),
// // // //       });
// // // //       const data = await response.json();

// // // //       if (response.ok) {
// // // //         Cookies.set("loginEmail", email, { expires: 7, secure: true, sameSite: "Strict" });
// // // //         const userRes = await fetch(`https://healthcop-website-backend-1.onrender.com/api/user?email=${email}`);
// // // //         const user = await userRes.json();
// // // //         setUserData(user);

// // // //         Cookies.set("userId", user.USRID, { expires: 7, secure: true, sameSite: "Strict" });
// // // //         Cookies.set("userName", user.name, { expires: 7, secure: true, sameSite: "Strict" });

// // // //         localStorage.setItem("token", data.token);
// // // //         localStorage.setItem("role", data.role);
// // // //         localStorage.setItem("name", user?.name || data.name || "User");
// // // //         localStorage.setItem("sessionActive", "true");

// // // //         if (data.role === "doctor" || data.role === "nurse") {
// // // //           setShowSiteSelection(true);
// // // //           fetchSites();
// // // //         } else {
// // // //           setShowPopup(true);
// // // //           setTimeout(() => {
// // // //             navigate("/Dashboard", { replace: true });
// // // //           }, 1000);
// // // //         }
// // // //       } else {
// // // //         setError(data.message || "Invalid credentials");
// // // //       }
// // // //     } catch (err) {
// // // //       console.error("Login error:", err);
// // // //       setError("An error occurred. Please try again later.");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const fetchSites = async () => {
// // // //     try {
// // // //       const res = await axios.get("https://healthcop-website-backend-1.onrender.com/api/sites");
// // // //       setSites(res.data);
// // // //     } catch (err) {
// // // //       console.error("Error fetching sites:", err);
// // // //       setError("Failed to load sites");
// // // //     }
// // // //   };

// // // //   const handleSiteSelect = () => {
// // // //     const selectedSite = sites.find((s) => s.site_id === parseInt(selectedSiteId));
// // // //     if (!selectedSite) {
// // // //       setError("Please select a site");
// // // //       return;
// // // //     }

// // // //     Cookies.set("siteId", selectedSite.site_id, { expires: 7, secure: true, sameSite: "Strict" });
// // // //     Cookies.set("siteName", selectedSite.site_name, { expires: 7, secure: true, sameSite: "Strict" });

// // // //     setShowPopup(true);
// // // //     setShowSiteSelection(false);

// // // //     setTimeout(() => {
// // // //       navigate("/Dashboard", { replace: true });
// // // //     }, 500);
// // // //   };

// // // //   const handleClose = () => {
// // // //     setIsVisible(false);
// // // //   };

// // // //   if (!isVisible) return null;

// // // //   return (
// // // //     <div className="modal-overlay">
     
// // // //         <div className="lg-login-container">
// // // //           <button className="lg-close-btn" onClick={handleClose} aria-label="Close login form">
// // // //             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // // //               <path d="M6 18L18 6M6 6l12 12" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// // // //             </svg>
// // // //           </button>
// // // //           {!showSiteSelection && (
// // // //             <div className="lg-login-card">
// // // //               <h2 className="lg-login-title">Login to HealthCop</h2>
// // // //               {error && <p className="lg-error-message">{error}</p>}
// // // //               {showPopup && <div className="lg-popup">Successfully logged in!</div>}

// // // //               <form onSubmit={handleLogin}>
// // // //                 <div className="lg-form-group">
// // // //                   <label className="lg-form-label">Email</label>
// // // //                   <input
// // // //                     type="email"
// // // //                     value={email}
// // // //                     onChange={(e) => setEmail(e.target.value)}
// // // //                     placeholder="Enter your email"
// // // //                     className="lg-form-input"
// // // //                     required
// // // //                   />
// // // //                 </div>

// // // //                 <div className="lg轴-form-group">
// // // //                   <label className="lg-form-label">Password</label>
// // // //                   <div className="lg-password-wrapper">
// // // //                     <input
// // // //                       type={showPassword ? "text" : "password"}
// // // //                       value={password}
// // // //                       onChange={(e) => setPassword(e.target.value)}
// // // //                       placeholder="Enter your password"
// // // //                       className="lg-form-input"
// // // //                       required
// // // //                     />
// // // //                     <button
// // // //                       type="button"
// // // //                       className="lg-toggle-password"
// // // //                       onClick={() => setShowPassword(!showPassword)}
// // // //                     >
// // // //                       {showPassword ? "Hide" : "Show"}
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>

// // // //                 <button type="submit" className="lg-login-submit-btn" disabled={loading}>
// // // //                   {loading ? "Logging in..." : "Login"}
// // // //                 </button>
// // // //               </form>
// // // //             </div>
// // // //           )}

// // // //           {showSiteSelection && (
// // // //             <div className="lg-login-card">
// // // //               <h2 className="lg-login-title">Select Your Site</h2>
// // // //               {error && <p className="lg-error-message">{error}</p>}
// // // //               <div className="lg-form-group">
// // // //                 <select
// // // //                   value={selectedSiteId}
// // // //                   onChange={(e) => setSelectedSiteId(e.target.value)}
// // // //                   className="lg-form-input"
// // // //                   required
// // // //                 >
// // // //                   <option value="">-- Choose Site --</option>
// // // //                   {sites.map((site) => (
// // // //                     <option key={site.site_id} value={site.site_id}>
// // // //                       {site.site_name}
// // // //                     </option>
// // // //                   ))}
// // // //                 </select>
// // // //               </div>
// // // //               <button onClick={handleSiteSelect} className="lg-login-submit-btn">
// // // //                 Confirm Site
// // // //               </button>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
   
// // // //   );
// // // // }

// // // // export default Login;

// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import Cookies from "js-cookie";
// // // import axios from "axios";
// // // import "./login.css";

// // // function Login() {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [error, setError] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const [showPopup, setShowPopup] = useState(false);
// // //   const [showSiteSelection, setShowSiteSelection] = useState(false);
// // //   const [sites, setSites] = useState([]);
// // //   const [selectedSiteId, setSelectedSiteId] = useState("");
// // //   const [userData, setUserData] = useState(null);
// // //   const [isVisible, setIsVisible] = useState(true);
// // //   const navigate = useNavigate();

// // //   const handleLogin = async (e) => {
// // //     e.preventDefault();
// // //     setError("");
// // //     setLoading(true);

// // //     try {
// // //       const response = await fetch("https://healthcop-website-backend-1.onrender.com/api/login", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ email, password }),
// // //       });
// // //       const data = await response.json();

// // //       if (response.ok) {
// // //         Cookies.set("loginEmail", email, { expires: 7, secure: true, sameSite: "Strict" });
// // //         const userRes = await fetch(`https://healthcop-website-backend-1.onrender.com/api/user?email=${email}`);
// // //         const user = await userRes.json();
// // //         setUserData(user);

// // //         Cookies.set("userId", user.USRID, { expires: 7, secure: true, sameSite: "Strict" });
// // //         Cookies.set("userName", user.name, { expires: 7, secure: true, sameSite: "Strict" });

// // //         localStorage.setItem("token", data.token);
// // //         localStorage.setItem("role", data.role);
// // //         localStorage.setItem("name", user?.name || data.name || "User");
// // //         localStorage.setItem("sessionActive", "true");

// // //         if (data.role === "doctor" || data.role === "nurse") {
// // //           setShowSiteSelection(true);
// // //           fetchSites();
// // //         } else {
// // //           setShowPopup(true);
// // //           setTimeout(() => {
// // //             navigate("/Dashboard", { replace: true });
// // //           }, 1000);
// // //         }
// // //       } else {
// // //         setError(data.message || "Invalid credentials");
// // //       }
// // //     } catch (err) {
// // //       console.error("Login error:", err);
// // //       setError("An error occurred. Please try again later.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const fetchSites = async () => {
// // //     try {
// // //       const res = await axios.get("https://healthcop-website-backend-1.onrender.com/api/sites");
// // //       setSites(res.data);
// // //     } catch (err) {
// // //       console.error("Error fetching sites:", err);
// // //       setError("Failed to load sites");
// // //     }
// // //   };

// // //   const handleSiteSelect = () => {
// // //     const selectedSite = sites.find((s) => s.site_id === parseInt(selectedSiteId));
// // //     if (!selectedSite) {
// // //       setError("Please select a site");
// // //       return;
// // //     }

// // //     Cookies.set("siteId", selectedSite.site_id, { expires: 7, secure: true, sameSite: "Strict" });
// // //     Cookies.set("siteName", selectedSite.site_name, { expires: 7, secure: true, sameSite: "Strict" });

// // //     setShowPopup(true);
// // //     setShowSiteSelection(false);

// // //     setTimeout(() => {
// // //       navigate("/Dashboard", { replace: true });
// // //     }, 500);
// // //   };

// // //   const handleClose = () => {
// // //     setIsVisible(false);
// // //   };

// // //   if (!isVisible) return null;

// // //   return (
// // //     <div className="modal-overlay">
// // //       <div className="lg-login-container">
// // //         {!showSiteSelection && (
// // //           <div className="lg-login-card">
// // //             <button className="lg-close-btn" onClick={handleClose} aria-label="Close login form">
// // //               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //                 <path d="M6 18L18 6M6 6l12 12" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// // //               </svg>
// // //             </button>
// // //             <h2 className="lg-login-title">Login to HealthCop</h2>
// // //             {error && <p className="lg-error-message">{error}</p>}
// // //             {showPopup && <div className="lg-popup">Successfully logged in!</div>}

// // //             <form onSubmit={handleLogin}>
// // //               <div className="lg-form-group">
// // //                 <label className="lg-form-label">Email</label>
// // //                 <input
// // //                   type="email"
// // //                   value={email}
// // //                   onChange={(e) => setEmail(e.target.value)}
// // //                   placeholder="Enter your email"
// // //                   className="lg-form-input"
// // //                   required
// // //                 />
// // //               </div>

// // //               <div className="lg-form-group">
// // //                 <label className="lg-form-label">Password</label>
// // //                 <div className="lg-password-wrapper">
// // //                   <input
// // //                     type={showPassword ? "text" : "password"}
// // //                     value={password}
// // //                     onChange={(e) => setPassword(e.target.value)}
// // //                     placeholder="Enter your password"
// // //                     className="lg-form-input"
// // //                     required
// // //                   />
// // //                   <button
// // //                     type="button"
// // //                     className="lg-toggle-password"
// // //                     onClick={() => setShowPassword(!showPassword)}
// // //                   >
// // //                     {showPassword ? "Hide" : "Show"}
// // //                   </button>
// // //                 </div>
// // //               </div>

// // //               <button type="submit" className="lg-login-submit-btn" disabled={loading}>
// // //                 {loading ? "Logging in..." : "Login"}
// // //               </button>
// // //             </form>
// // //           </div>
// // //         )}

// // //         {showSiteSelection && (
// // //           <div className="lg-login-card">
// // //             <button className="lg-close-btn" onClick={handleClose} aria-label="Close site selection">
// // //               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //                 <path d="M6 18L18 6M6 6l12 12" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// // //               </svg>
// // //             </button>
// // //             <h2 className="lg-login-title">Select Your Site</h2>
// // //             {error && <p className="lg-error-message">{error}</p>}
// // //             <div className="lg-form-group">
// // //               <select
// // //                 value={selectedSiteId}
// // //                 onChange={(e) => setSelectedSiteId(e.target.value)}
// // //                 className="lg-form-input"
// // //                 required
// // //               >
// // //                 <option value="">-- Choose Site --</option>
// // //                 {sites.map((site) => (
// // //                   <option key={site.site_id} value={site.site_id}>
// // //                     {site.site_name}
// // //                   </option>
// // //                 ))}
// // //               </select>
// // //             </div>
// // //             <button onClick={handleSiteSelect} className="lg-login-submit-btn">
// // //               Confirm Site
// // //             </button>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Login;

// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import Cookies from "js-cookie";
// // import axios from "axios";
// // import "./login.css";

// // function Login() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [showPopup, setShowPopup] = useState(false);
// //   const [showSiteSelection, setShowSiteSelection] = useState(false);
// //   const [sites, setSites] = useState([]);
// //   const [selectedSiteId, setSelectedSiteId] = useState("");
// //   const [userData, setUserData] = useState(null);
// //   const [isVisible, setIsVisible] = useState(true);
// //   const navigate = useNavigate();

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setLoading(true);

// //     try {
// //       const response = await fetch("https://healthcop-website-backend-1.onrender.com/api/login", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email, password }),
// //       });
// //       const data = await response.json();

// //       if (response.ok) {
// //         Cookies.set("loginEmail", email, { expires: 7, secure: true, sameSite: "Strict" });
// //         const userRes = await fetch(`https://healthcop-website-backend-1.onrender.com/api/user?email=${email}`);
// //         const user = await userRes.json();
// //         setUserData(user);

// //         Cookies.set("userId", user.USRID, { expires: 7, secure: true, sameSite: "Strict" });
// //         Cookies.set("userName", user.name, { expires: 7, secure: true, sameSite: "Strict" });

// //         localStorage.setItem("token", data.token);
// //         localStorage.setItem("role", data.role);
// //         localStorage.setItem("name", user?.name || data.name || "User");
// //         localStorage.setItem("sessionActive", "true");

// //         if (data.role === "doctor" || data.role === "nurse") {
// //           setShowSiteSelection(true);
// //           fetchSites();
// //         } else {
// //           setShowPopup(true);
// //           setTimeout(() => {
// //             navigate("/Dashboard", { replace: true });
// //           }, 1000);
// //         }
// //       } else {
// //         setError(data.message || "Invalid credentials");
// //       }
// //     } catch (err) {
// //       console.error("Login error:", err);
// //       setError("An error occurred. Please try again later.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const fetchSites = async () => {
// //     try {
// //       const res = await axios.get("https://healthcop-website-backend-1.onrender.com/api/sites");
// //       setSites(res.data);
// //     } catch (err) {
// //       console.error("Error fetching sites:", err);
// //       setError("Failed to load sites");
// //     }
// //   };

// //   const handleSiteSelect = () => {
// //     const selectedSite = sites.find((s) => s.site_id === parseInt(selectedSiteId));
// //     if (!selectedSite) {
// //       setError("Please select a site");
// //       return;
// //     }

// //     Cookies.set("siteId", selectedSite.site_id, { expires: 7, secure: true, sameSite: "Strict" });
// //     Cookies.set("siteName", selectedSite.site_name, { expires: 7, secure: true, sameSite: "Strict" });

// //     setShowPopup(true);
// //     setShowSiteSelection(false);

// //     setTimeout(() => {
// //       navigate("/Dashboard", { replace: true });
// //     }, 500);
// //   };

// //   const handleClose = () => {
// //     setIsVisible(false);
// //   };

// //   if (!isVisible) return null;

// //   return (
// //     <div className="modal-overlay">
// //       <div className="lg-login-container">
// //         {!showSiteSelection && (
// //           <div className="lg-login-card">
// //             <button className="lg-close-btn" onClick={handleClose} aria-label="Close login form">
// //               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                 <path d="M6 18L18 6M6 6l12 12" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //               </svg>
// //             </button>
// //             <h2 className="lg-login-title">Login to HealthCop</h2>
// //             {error && <p className="lg-error-message">{error}</p>}
// //             {showPopup && <div className="lg-popup">Successfully logged in!</div>}

// //             <form onSubmit={handleLogin}>
// //               <div className="lg-form-group">
// //                 <label className="lg-form-label">Email</label>
// //                 <input
// //                   type="email"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   placeholder="Enter your email"
// //                   className="lg-form-input"
// //                   required
// //                 />
// //               </div>

// //               <div className="lg-form-group">
// //                 <label className="lg-form-label">Password</label>
// //                 <div className="lg-password-wrapper">
// //                   <input
// //                     type={showPassword ? "text" : "password"}
// //                     value={password}
// //                     onChange={(e) => setPassword(e.target.value)}
// //                     placeholder="Enter your password"
// //                     className="lg-form-input"
// //                     required
// //                   />
// //                   <button
// //                     type="button"
// //                     className="lg-toggle-password"
// //                     onClick={() => setShowPassword(!showPassword)}
// //                   >
// //                     {showPassword ? "Hide" : "Show"}
// //                   </button>
// //                 </div>
// //               </div>

// //               <button type="submit" className="lg-login-submit-btn" disabled={loading}>
// //                 {loading ? "Logging in..." : "Login"}
// //               </button>
// //             </form>
// //           </div>
// //         )}

// //         {showSiteSelection && (
// //           <div className="lg-login-card">
// //             <button className="lg-close-btn" onClick={handleClose} aria-label="Close site selection">
// //               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //                 <path d="M6 18L18 6M6 6l12 12" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //               </svg>
// //             </button>
// //             <h2 className="lg-login-title">Select Your Site</h2>
// //             {error && <p className="lg-error-message">{error}</p>}
// //             <div className="lg-form-group">
// //               <select
// //                 value={selectedSiteId}
// //                 onChange={(e) => setSelectedSiteId(e.target.value)}
// //                 className="lg-form-input"
// //                 required
// //               >
// //                 <option value="">-- Choose Site --</option>
// //                 {sites.map((site) => (
// //                   <option key={site.site_id} value={site.site_id}>
// //                     {site.site_name}
// //                   </option>
// //                 ))}
// //               </select>
// //             </div>
// //             <button onClick={handleSiteSelect} className="lg-login-submit-btn">
// //               Confirm Site
// //             </button>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import axios from "axios";
// import "./login.css";

// function Login({ onClose, openSignup }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [showSiteSelection, setShowSiteSelection] = useState(false);
//   const [sites, setSites] = useState([]);
//   const [selectedSiteId, setSelectedSiteId] = useState("");
//   const [userData, setUserData] = useState(null);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await fetch("http://localhost:4000/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         Cookies.set("loginEmail", email, { expires: 7, secure: true, sameSite: "Strict" });
//         const userRes = await fetch(`http://localhost:4000/api/user?email=${email}`);
//         const user = await userRes.json();
//         setUserData(user);

//         Cookies.set("userId", user.USRID, { expires: 7, secure: true, sameSite: "Strict" });
//         Cookies.set("userName", user.name, { expires: 7, secure: true, sameSite: "Strict" });

//         localStorage.setItem("token", data.token);
//         localStorage.setItem("role", data.role);
//         localStorage.setItem("name", user?.name || data.name || "User");
//         localStorage.setItem("sessionActive", "true");

//         if (data.role === "doctor" || data.role === "nurse") {
//           setShowSiteSelection(true);
//           fetchSites();
//         } else {
//           setShowPopup(true);
//           setTimeout(() => {
//             onClose(); // Close modal after successful login
//             navigate("/Dashboard", { replace: true });
//           }, 1000);
//         }
//       } else {
//         setError(data.message || "Invalid credentials");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setError("An error occurred. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchSites = async () => {
//     try {
//       const res = await axios.get("http://localhost:4000/api/sites");
//       setSites(res.data);
//     } catch (err) {
//       console.error("Error fetching sites:", err);
//       setError("Failed to load sites");
//     }
//   };

//   const handleSiteSelect = () => {
//     const selectedSite = sites.find((s) => s.site_id === parseInt(selectedSiteId));
//     if (!selectedSite) {
//       setError("Please select a site");
//       return;
//     }

//     Cookies.set("siteId", selectedSite.site_id, { expires: 7, secure: true, sameSite: "Strict" });
//     Cookies.set("siteName", selectedSite.site_name, { expires: 7, secure: true, sameSite: "Strict" });

//     setShowPopup(true);
//     setShowSiteSelection(false);

//     setTimeout(() => {
//       onClose(); // Close modal after site selection
//       navigate("/Dashboard", { replace: true });
//     }, 500);
//   };

//   const handleSignupLinkClick = (e) => {
//     e.preventDefault();
//     openSignup();
//   };

//   return (
//     <div className="lg-login-container">
//       <div className="lg-login-card">
//         <button className="lg-close-btn" onClick={onClose} aria-label="Close login form">
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M6 18L18 6M6 6l12 12" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
//         <h2 className="lg-login-title">{showSiteSelection ? "Select Your Site" : "Login to HealthCop"}</h2>
//         {error && <p className="lg-error-message">{error}</p>}
//         {showPopup && <div className="lg-popup">Successfully logged in!</div>}

//         {!showSiteSelection ? (
//           <form onSubmit={handleLogin}>
//             <div className="lg-form-group">
//               <label className="lg-form-label">Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="lg-form-input"
//                 required
//               />
//             </div>
//             <div className="lg-form-group">
//               <label className="lg-form-label">Password</label>
//               <div className="lg-password-wrapper">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   className="lg-form-input"
//                   required
//                 />
//                 <button
//                   type="button"
//                   className="lg-toggle-password"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </div>
//             <button type="submit" className="lg-login-submit-btn" disabled={loading}>
//               {loading ? "Logging in..." : "Login"}
//             </button>
//             <p className="lg-login-link">
//               Don't have an account?{" "}
//               <a href="#signup" onClick={handleSignupLinkClick}>Sign Up</a>
//             </p>
//           </form>
//         ) : (
//           <>
//             <div className="lg-form-group">
//               <select
//                 value={selectedSiteId}
//                 onChange={(e) => setSelectedSiteId(e.target.value)}
//                 className="lg-form-input"
//                 required
//               >
//                 <option value="">-- Choose Site --</option>
//                 {sites.map((site) => (
//                   <option key={site.site_id} value={site.site_id}>
//                     {site.site_name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <button onClick={handleSiteSelect} className="lg-login-submit-btn">
//               Confirm Site
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Fixed typo from "js-cookies"
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
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        Cookies.set("loginEmail", email, { expires: 7, secure: true, sameSite: "Strict" });
        const userRes = await fetch(`https://healthcop-website-backend-1.onrender.com/api/user?email=${email}`);
        const user = await userRes.json();
        setUserData(user);

        Cookies.set("userId", user.USRID, { expires: 7, secure: true, sameSite: "Strict" });
        Cookies.set("userName", user.name, { expires: 7, secure: true, sameSite: "Strict" });

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

    Cookies.set("siteId", selectedSite.site_id, { expires: 7, secure: true, sameSite: "Strict" });
    Cookies.set("siteName", selectedSite.site_name, { expires: 7, secure: true, sameSite: "Strict" });

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
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="lg-form-input"
                required
              />
            </div>
            <div className="lg-form-group">
              <label className="lg-form-label">Password</label>
              <div className="lg-password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="lg-form-input"
                  required
                />
                <button
                  type="button"
                  className="lg-toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
            <button type="submit" className="lg-login-submit-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
            <p className="lg-login-link">
              Don't have an account?{" "}
              <a href="#signup" onClick={handleSignupLinkClick}>
                Sign Up
              </a>
            </p>
          </form>
        ) : (
          <>
            <div className="lg-form-group">
              <select
                value={selectedSiteId}
                onChange={(e) => setSelectedSiteId(e.target.value)}
                className="lg-form-input"
                required
              >
                <option value="">-- Choose Site --</option>
                {sites.map((site) => (
                  <option key={site.site_id} value={site.site_id}>
                    {site.site_name}
                  </option>
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