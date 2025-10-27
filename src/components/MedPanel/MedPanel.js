// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./MedPanel.css";

// export default function MedPanel() {
//   const [sessions, setSessions] = useState([]); // Array for all sessions
//   const [locationError, setLocationError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [successMessage, setSuccessMessage] = useState(""); // For success popup

//   const userId = 5; // Replace with actual userId
//   const siteId = 2;
//   const siteName = "Mumbai Office";
//   const deviceName = navigator.userAgent || "Web Browser";

//   const api = axios.create({
//     baseURL: "http://localhost:4000",
//     timeout: 10000,
//   });

//   // Max lengths based on MySQL table
//   const MAX_LOCATION_LENGTH = 200;
//   const MAX_DEVICE_LENGTH = 100;

//   useEffect(() => {
//     fetchSessions();
//   }, []);

//   // Fetch all sessions for the user
//   const fetchSessions = async () => {
//     try {
//       const res = await api.get(`/attendance/user/${userId}`);
//       console.log("Fetch sessions response:", res.data);
//       if (res.data.success && res.data.data) {
//         setSessions(res.data.data);
//         setSuccessMessage(res.data.data.length > 0 ? "Sessions loaded successfully." : "No sessions found.");
//       } else {
//         setSessions([]);
//         setSuccessMessage(res.data.message || "No sessions found.");
//       }
//     } catch (err) {
//       console.error("Error fetching sessions", err.response?.data || err.message || err);
//       setLocationError("Failed to fetch sessions. Check console.");
//       setSessions([]);
//     }
//   };

//   // Get exact location using Geolocation API + reverse geocoding
//   const getCurrentLocation = () =>
//     new Promise((resolve, reject) => {
//       if (!navigator.geolocation) {
//         reject("Geolocation not supported");
//         return;
//       }

//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;
//           try {
//             const res = await axios.get(
//               `https://nominatim.openstreetmap.org/reverse`,
//               {
//                 params: { lat: latitude, lon: longitude, format: "json", zoom: 18 },
//                 headers: {
//                   'User-Agent': 'MedPanelApp/1.0 (your-email@example.com)', // Replace with your email
//                 },
//                 timeout: 10000,
//               }
//             );
//             console.log("Raw address from Nominatim:", res.data);
//             let address = res.data.display_name || `${latitude}, ${longitude} (Coords Fallback)`;
//             resolve(address.substring(0, MAX_LOCATION_LENGTH));
//           } catch (err) {
//             console.error("Reverse geocode failed", err);
//             resolve(`${latitude}, ${longitude} (Geocode Failed)`);
//           }
//         },
//         (error) => {
//           console.error("Geolocation error", error);
//           reject(error.message || "Unable to retrieve location");
//         },
//         { enableHighAccuracy: true, timeout: 20000, maximumAge: 5000 }
//       );
//     });

//   const handleLogin = async () => {
//     setLoading(true);
//     setLocationError("");
//     setSuccessMessage("");

//     try {
//       const loginLocation = await getCurrentLocation();
//       console.log("Attempting login with location:", loginLocation);
//       const safeDeviceName = deviceName.substring(0, MAX_DEVICE_LENGTH);

//       const res = await api.post("/attendance/login", {
//         user_id: userId,
//         site_id: siteId,
//         site_name: siteName,
//         login_location: loginLocation,
//         device_name: safeDeviceName,
//       });

//       console.log("Login API response:", res.data);
//       if (res.data.success) {
//         setSuccessMessage(res.data.message || "Login successful!");
//         await fetchSessions(); // Refresh sessions
//       } else {
//         setLocationError(res.data.message || "Login failed on server.");
//       }
//     } catch (err) {
//       console.error("Login failed details:", err.response?.data || err.message || err);
//       let errorMsg = "Login failed. Make sure location is allowed in the browser.";
//       if (err.message.includes('geolocation') || err.message.includes('nominatim')) {
//         errorMsg = `Location error: ${err.message}`;
//       } else if (err.response?.data?.message) {
//         errorMsg = `API error: ${err.response.data.message}`;
//       } else {
//         errorMsg = `Login failed: ${err.message || "Unknown error."}`;
//       }
//       setLocationError(errorMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = async (sessionId) => {
//     setLoading(true);
//     setLocationError("");
//     setSuccessMessage("");

//     try {
//       const logoutLocation = await getCurrentLocation();
//       console.log("Attempting logout for session:", sessionId, "with location:", logoutLocation);
//       const safeDeviceName = deviceName.substring(0, MAX_DEVICE_LENGTH);

//       const res = await api.put(`/attendance/logout/${sessionId}`, {
//         logout_location: logoutLocation,
//         device_name: safeDeviceName,
//       });

//       console.log("Logout API response:", res.data);
//       if (res.data.success) {
//         setSuccessMessage(res.data.message || "Logout successful!");
//         await fetchSessions(); // Refresh sessions
//       } else {
//         setLocationError(res.data.message || "Logout failed on server.");
//       }
//     } catch (err) {
//       console.error("Logout failed details:", err.response?.data || err.message || err);
//       let errorMsg = "Logout failed. Make sure location is allowed in the browser.";
//       if (err.message.includes('geolocation') || err.message.includes('nominatim')) {
//         errorMsg = `Location error: ${err.message}`;
//       } else if (err.response?.data?.message) {
//         errorMsg = `API error: ${err.response.data.message}`;
//       } else {
//         errorMsg = `Logout failed: ${err.message || "Unknown error."}`;
//       }
//       setLocationError(errorMsg);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Close success popup
//   const handleCloseSuccess = () => {
//     setSuccessMessage("");
//   };

//   // Debug: Log sessions changes
//   useEffect(() => {
//     console.log("Current sessions state:", sessions);
//   }, [sessions]);

//   return (
//     <div className="medpanel-container">
//       <h2>Login / Logout Panel</h2>

//       {locationError && <div className="error">{locationError}</div>}
//       {successMessage && (
//         <div className="success-popup-overlay" onClick={handleCloseSuccess}>
//           <div className="success-popup" onClick={(e) => e.stopPropagation()}>
//             <h3>Success</h3>
//             <p>{successMessage}</p>
//             <button className="success-close-btn" onClick={handleCloseSuccess}>
//               OK
//             </button>
//           </div>
//         </div>
//       )}

//       <div className="punch-controls">
//         <button
//           onClick={handleLogin}
//           disabled={loading}
//         >
//           {loading ? "Processing..." : "Login"}
//         </button>
//       </div>

//       <div className="sessions-table-container">
//         <h3>Sessions</h3>
//         {sessions.length > 0 ? (
//           <table className="sessions-table">
//             <thead>
//               <tr>
//                 <th>Login Time</th>
//                 <th>Logout Time</th>
//                 <th>Status</th>
//                 <th>Login Location</th>
//                 <th>Logout Location</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {sessions.map((session) => (
//                 <tr key={session.id}>
//                   <td>{new Date(session.login_time).toLocaleString()}</td>
//                   <td>{session.logout_time ? new Date(session.logout_time).toLocaleString() : "-"}</td>
//                   <td>{session.status}</td>
//                   <td>{session.login_location || "-"}</td>
//                   <td>{session.logout_location || "-"}</td>
//                   <td>
//                     {session.status === "logged_in" && (
//                       <button
//                         className="logout-btn"
//                         onClick={() => handleLogout(session.id)}
//                         disabled={loading}
//                       >
//                         Logout
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No sessions found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MedPanel.css";

export default function MedPanel() {
  const [sessions, setSessions] = useState([]);
  const [locationError, setLocationError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const userId = 5; // Replace with actual userId
  const siteId = 2;
  const siteName = "Mumbai Office";
  const deviceName = navigator.userAgent || "Web Browser";

  const api = axios.create({
    baseURL: "http://localhost:4000",
    timeout: 10000,
  });

  const MAX_LOCATION_LENGTH = 200;
  const MAX_DEVICE_LENGTH = 100;

  useEffect(() => {
    fetchSessions();
  }, []);

  // Fetch and filter sessions for the current day
  const fetchSessions = async () => {
    try {
      const res = await api.get(`/attendance/user/${userId}`);
      console.log("Fetch sessions response:", res.data);
      if (res.data.success && res.data.data) {
        // Get current date in IST (UTC+5:30)
        const now = new Date();
        // Adjust for IST by adding 5 hours 30 minutes (5.5 * 60 * 60 * 1000 ms)
        const istOffset = 5.5 * 60 * 60 * 1000;
        const istNow = new Date(now.getTime() + istOffset);
        const todayStart = new Date(istNow.getFullYear(), istNow.getMonth(), istNow.getDate());
        const todayEnd = new Date(todayStart.getTime() + 24 * 60 * 60 * 1000 - 1); // End of day

        // Filter sessions for today
        const todaySessions = res.data.data.filter((session) => {
          const loginTime = new Date(session.login_time);
          return loginTime >= todayStart && loginTime <= todayEnd;
        });

        setSessions(todaySessions);
        setSuccessMessage(todaySessions.length > 0 ? "Today's sessions loaded successfully." : "No sessions found for today.");
      } else {
        setSessions([]);
        setSuccessMessage(res.data.message || "No sessions found.");
      }
    } catch (err) {
      console.error("Error fetching sessions", err.response?.data || err.message || err);
      setLocationError("Failed to fetch sessions. Check console.");
      setSessions([]);
    }
  };

  // Get exact location using Geolocation API + reverse geocoding
  const getCurrentLocation = () =>
    new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject("Geolocation not supported");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const res = await axios.get(
              `https://nominatim.openstreetmap.org/reverse`,
              {
                params: { lat: latitude, lon: longitude, format: "json", zoom: 18 },
                headers: {
                  'User-Agent': 'MedPanelApp/1.0 (your-email@example.com)', // Replace with your email
                },
                timeout: 10000,
              }
            );
            console.log("Raw address from Nominatim:", res.data);
            let address = res.data.display_name || `${latitude}, ${longitude} (Coords Fallback)`;
            resolve(address.substring(0, MAX_LOCATION_LENGTH));
          } catch (err) {
            console.error("Reverse geocode failed", err);
            resolve(`${latitude}, ${longitude} (Geocode Failed)`);
          }
        },
        (error) => {
          console.error("Geolocation error", error);
          reject(error.message || "Unable to retrieve location");
        },
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 5000 }
      );
    });

  const handleLogin = async () => {
    setLoading(true);
    setLocationError("");
    setSuccessMessage("");

    try {
      const loginLocation = await getCurrentLocation();
      console.log("Attempting login with location:", loginLocation);
      const safeDeviceName = deviceName.substring(0, MAX_DEVICE_LENGTH);

      const res = await api.post("/attendance/login", {
        user_id: userId,
        site_id: siteId,
        site_name: siteName,
        login_location: loginLocation,
        device_name: safeDeviceName,
      });

      console.log("Login API response:", res.data);
      if (res.data.success) {
        setSuccessMessage(res.data.message || "Login successful!");
        await fetchSessions();
      } else {
        setLocationError(res.data.message || "Login failed on server.");
      }
    } catch (err) {
      console.error("Login failed details:", err.response?.data || err.message || err);
      let errorMsg = "Login failed. Make sure location is allowed in the browser.";
      if (err.message.includes('geolocation') || err.message.includes('nominatim')) {
        errorMsg = `Location error: ${err.message}`;
      } else if (err.response?.data?.message) {
        errorMsg = `API error: ${err.response.data.message}`;
      } else {
        errorMsg = `Login failed: ${err.message || "Unknown error."}`;
      }
      setLocationError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async (sessionId) => {
    setLoading(true);
    setLocationError("");
    setSuccessMessage("");

    try {
      const logoutLocation = await getCurrentLocation();
      console.log("Attempting logout for session:", sessionId, "with location:", logoutLocation);
      const safeDeviceName = deviceName.substring(0, MAX_DEVICE_LENGTH);

      const res = await api.put(`/attendance/logout/${sessionId}`, {
        logout_location: logoutLocation,
        device_name: safeDeviceName,
      });

      console.log("Logout API response:", res.data);
      if (res.data.success) {
        setSuccessMessage(res.data.message || "Logout successful!");
        await fetchSessions();
      } else {
        setLocationError(res.data.message || "Logout failed on server.");
      }
    } catch (err) {
      console.error("Logout failed details:", err.response?.data || err.message || err);
      let errorMsg = "Logout failed. Make sure location is allowed in the browser.";
      if (err.message.includes('geolocation') || err.message.includes('nominatim')) {
        errorMsg = `Location error: ${err.message}`;
      } else if (err.response?.data?.message) {
        errorMsg = `API error: ${err.response.data.message}`;
      } else {
        errorMsg = `Logout failed: ${err.message || "Unknown error."}`;
      }
      setLocationError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSuccess = () => {
    setSuccessMessage("");
  };

  useEffect(() => {
    console.log("Current sessions state:", sessions);
  }, [sessions]);

  return (
    <div className="medpanel-container">
      <h2>Login / Logout Panel</h2>

      {locationError && <div className="error">{locationError}</div>}
      {successMessage && (
        <div className="success-popup-overlay" onClick={handleCloseSuccess}>
          <div className="success-popup" onClick={(e) => e.stopPropagation()}>
            <h3>Success</h3>
            <p>{successMessage}</p>
            <button className="success-close-btn" onClick={handleCloseSuccess}>
              OK
            </button>
          </div>
        </div>
      )}

      <div className="punch-controls">
        <button onClick={handleLogin} disabled={loading}>
          {loading ? "Processing..." : "Login"}
        </button>
      </div>

      <div className="sessions-table-container">
        <h3>Today's Sessions</h3>
        {sessions.length > 0 ? (
          <table className="sessions-table">
            <thead>
              <tr>
                <th>Login Time</th>
                <th>Logout Time</th>
                <th>Status</th>
                <th>Login Location</th>
                <th>Logout Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session) => (
                <tr key={session.id}>
                  <td>{new Date(session.login_time).toLocaleString()}</td>
                  <td>{session.logout_time ? new Date(session.logout_time).toLocaleString() : "-"}</td>
                  <td>{session.status}</td>
                  <td>{session.login_location || "-"}</td>
                  <td>{session.logout_location || "-"}</td>
                  <td>
                    {session.status === "logged_in" && (
                      <button
                        className="logout-btn"
                        onClick={() => handleLogout(session.id)}
                        disabled={loading}
                      >
                        Logout
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No sessions found for today.</p>
        )}
      </div>
    </div>
  );
}