// // // // // import React from "react";
// // // // // import Home from "./components/home/home";
// // // // // import Navbar from "./components/navbar/navbar"; // import Navbar

// // // // // function App() {
// // // // //   return (
// // // // //     <div>
// // // // //       <Navbar />
// // // // //       <Home />
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default App;
// // // // import React from "react";
// // // //    import Navbar from "./components/navbar/navbar";
// // // //    import Home from "./components/home/home";
// // // //    import Testimonials from "./components/testimonials/testimonials";
// // // //    import Services from "./components/services/service";
// // // //    import "./App.css";

// // // //    function App() {
// // // //      return (
// // // //        <div>
// // // //          <Navbar />
// // // //          <section id="home">
// // // //            <Home />
// // // //          </section>
// // // //          <section id="about" style={{ minHeight: "100vh", padding: "2rem" }}>
// // // //            <h1>About Section</h1>
// // // //            <p>Learn more about HealthCop's mission and values.</p>
// // // //          </section>
// // // //          <section id="services" style={{ minHeight: "100vh", padding: "2rem" }}>
// // // //            <h1>Services Section</h1>
// // // //            <p>Explore our healthcare services.</p>
// // // //          </section>
// // // //          <section id="testimonials">
// // // //            <Testimonials />
// // // //          </section>
// // // //          <section id="contact" style={{ minHeight: "100vh", padding: "2rem" }}>
// // // //            <h1>Contact Section</h1>
// // // //            <p>Get in touch with us!</p>
// // // //          </section>
// // // //        </div>
// // // //      );
// // // //    }

// // // //    export default App;
// // // import React from "react";
// // // import Navbar from "./components/navbar/navbar";
// // // import Home from "./components/home/home";
// // // import Testimonials from "./components/testimonials/testimonials";
// // // import Services from "./components/services/service";
// // // import "./App.css";
// // // import About from "./components/about/about";
// // // import footer from "./components/footer/footer";
// // // function App() {
// // //   return (
// // //     <div className="app">
// // //       <Navbar />
// // //       <section id="home">
// // //         <Home />
// // //       </section>
// // //       <section id="about" className="section">
// // //         <About/>
// // //       </section>
// // //       <section id="services">
// // //         <Services />
// // //       </section>
// // //       <section id="testimonials">
// // //         <Testimonials />
// // //       </section>
// // //       <section id="footer">
// // //         <footer />
// // //       </section>
// // //       <section id="contact" className="section">
// // //         <h1>Contact Us</h1>
// // //         <p>Get in touch with HealthCop Pvt. Ltd for your healthcare needs!</p>
// // //         <div className="contact-info">
// // //           <p>Email: contact@healthcop.com</p>
// // //           <p>Phone: +91 123 456 7890</p>
// // //           <p>Address: 123 Wellness Road, Mumbai, Maharashtra, India</p>
// // //         </div>
// // //         <div className="map-container">
// // //           <iframe
// // //             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.987429128239!2d72.82580431490466!3d19.06405828709395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630b243f2c3%3A0x5b0b3e4a3c7f8a9b!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1698234567890!5m2!1sen!2sin"
// // //             width="100%"
// // //             height="400"
// // //             style={{ border: 0 }}
// // //             allowFullScreen=""
// // //             loading="lazy"
// // //             referrerPolicy="no-referrer-when-downgrade"
// // //             title="HealthCop Location"
// // //           ></iframe>
// // //           <footer />
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }

// // // export default App;

// // // import React from "react";
// // // import Navbar from "./components/navbar/navbar";
// // // import Home from "./components/home/home";
// // // import Testimonials from "./components/testimonials/testimonials";
// // // import Services from "./components/services/service";
// // // import About from "./components/about/about";
// // // import Contact from "./components/contact/contact";
// // // import Footer from "./components/footer/footer";
// // // import "./App.css";

// // // function App() {
// // //   return (
// // //     <div className="app">
// // //       <Navbar />
// // //       <section id="home">
// // //         <Home />
// // //       </section>
// // //       <section id="about" className="section">
// // //         <About />
// // //       </section>
// // //       <section id="services">
// // //         <Services />
// // //       </section>
// // //       <section id="testimonials">
// // //         <Testimonials />
// // //       </section>
// // //       <section id="contact" className="section">
// // //         <Contact />
// // //       </section>
// // //       <section id="footer">
// // //         <Footer />
// // //       </section>
// // //     </div>
// // //   );
// // // }

// // // export default App;


// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import Navbar from "./components/navbar/navbar";
// // import Home from "./components/home/home";
// // import Testimonials from "./components/testimonials/testimonials";
// // import Services from "./components/services/service";
// // import About from "./components/about/about";
// // import Contact from "./components/contact/contact";
// // import Footer from "./components/footer/footer";
// // import Login from "./components/login/login";
// // import Dashboard from "./components/Dashboard/Dashboard";
// // import "./App.css";

// // function App() {
// //   const isAuthenticated = !!localStorage.getItem("token") && localStorage.getItem("sessionActive") === "true";
// //   const role = localStorage.getItem("role");

// //   return (
// //     <Router>
// //       <Routes>
// //         <Route
// //           path="/"
// //           element={
// //             isAuthenticated ? (
// //               role === "client" ? (
// //                 <Navigate to="/client-dashboard-overview" replace />
// //               ) : (
// //                 <Navigate to="/dashboard-overview" replace />
// //               )
// //             ) : (
// //               <div className="app">
// //                 <Navbar />
// //                 <section id="home">
// //                   <Home />
// //                 </section>
// //                 <section id="about" className="section">
// //                   <About />
// //                 </section>
// //                 <section id="services">
// //                   <Services />
// //                 </section>
// //                 <section id="testimonials">
// //                   <Testimonials />
// //                 </section>
// //                 <section id="contact" className="section">
// //                   <Contact />
// //                 </section>
// //                 <section id="footer">
// //                   <Footer />
// //                 </section>
// //               </div>
// //             )
// //           }
// //         />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/client-dashboard/*" element={<Dashboard />} />
// //         <Route path="/dashboard/*" element={<Dashboard />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./components/navbar/navbar";
// import Home from "./components/home/home";
// import Testimonials from "./components/testimonials/testimonials";
// import Services from "./components/services/service";
// import About from "./components/about/about";
// import Contact from "./components/contact/contact";
// import Footer from "./components/footer/footer";
// import Login from "./components/login/login";
// import Dashboard from "./components/Dashboard/Dashboard";
// import ResetPasswordPage from "./components/ResetPassword/ResetPassword";
// import "./App.css";

// function App() {
//   const isAuthenticated = !!localStorage.getItem("token") && localStorage.getItem("sessionActive") === "true";
//   const role = localStorage.getItem("role");
//   console.log("App.js: isAuthenticated =", isAuthenticated, "role =", role);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             isAuthenticated ? (
//               role === "client" ? (
//                 <Navigate to="/client-dashboard-overview" replace />
//               ) : (
//                 <Navigate to="/dashboard-overview" replace />
//               )
//             ) : (
//               <div className="app">
//                 <Navbar />
//                 <section id="home">
//                   <Home />
//                 </section>
//                 <section id="about" className="section">
//                   <About />
//                 </section>
//                 <section id="services">
//                   <Services />
//                 </section>
//                 <section id="testimonials">
//                   <Testimonials />
//                 </section>
//                 <section id="contact" className="section">
//                   <Contact />
//                 </section>
//                 <section id="footer">
//                   <Footer />
//                 </section>
//               </div>
//             )
//           }
//         />
//         <Route path="/login" element={<Login />} />
//         <Route path="/client-dashboard/*" element={<Dashboard />} />
//         <Route path="/dashboard/*" element={<Dashboard />} />
//         <Route path="/reset-password" element={<ResetPasswordPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Testimonials from "./components/testimonials/testimonials";
import Services from "./components/services/service";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Login from "./components/login/login";
import Dashboard from "./components/Dashboard/Dashboard";
import ResetPasswordPage from "./components/ResetPassword/ResetPassword";
import MedPanel from "./components/MedPanel/MedPanel";
import "./App.css";

function App() {
  const isAuthenticated = !!localStorage.getItem("token") && localStorage.getItem("sessionActive") === "true";
  const role = localStorage.getItem("role");
  console.log("App.js: isAuthenticated =", isAuthenticated, "role =", role);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              role === "client" ? (
                <Navigate to="/client-dashboard/client-dashboard-overview" replace />
              ) : role === "nurse" ? (
                <Navigate to="/nurse-dashboard/pre-employment" replace />
              ) : (
                <Navigate to="/dashboard/dashboard-overview" replace />
              )
            ) : (
              <div className="app">
                <Navbar />
                <section id="home">
                  <Home />
                </section>
                <section id="about" className="section">
                  <About />
                </section>
                <section id="services">
                  <Services />
                </section>
                <section id="testimonials">
                  <Testimonials />
                </section>
                <section id="contact" className="section">
                  <Contact />
                </section>
                <section id="footer">
                  <Footer />
                </section>
              </div>
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/client-dashboard/*" element={<Dashboard />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/nurse-dashboard/*" element={<Dashboard />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="*" element={<div>404: Page Not Found</div>} /> {/* Fallback route */}
      </Routes>
    </Router>
  );
}

export default App;