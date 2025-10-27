

// // // // // import React, { useState } from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import "./navbar.css";
// // // // // import { Home, Info, Activity, Phone, LogIn, UserPlus, Star } from "lucide-react";
// // // // // import Login from "./../login/login";
// // // // // import Signup from "./../signUp/signUp";

// // // // // function Navbar() {
// // // // //   const [showLogin, setShowLogin] = useState(false);
// // // // //   const [showSignup, setShowSignup] = useState(false);

// // // // //   const closeModal = () => {
// // // // //     setShowLogin(false);
// // // // //     setShowSignup(false);
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       <nav className="navbar">
// // // // //         {/* Left Side: Logo */}
// // // // //         <div className="navbar-logo">HealthCop</div>

// // // // //         {/* Middle Menu */}
// // // // //         <ul className="navbar-links">
// // // // //           <li>
// // // // //             <a href="/#home">
// // // // //               <Home className="nav-icon" />
// // // // //               <span className="nav-text">Home</span>
// // // // //             </a>
// // // // //           </li>
// // // // //           <li>
// // // // //             <a href="/#about">
// // // // //               <Info className="nav-icon" />
// // // // //               <span className="nav-text">About</span>
// // // // //             </a>


            
// // // // //           </li>
// // // // //           <li>
// // // // //             <a href="/#services">
// // // // //               <Activity className="nav-icon" />
// // // // //               <span className="nav-text">Services</span>
// // // // //             </a>
// // // // //           </li>
// // // // //           <li>
// // // // //             <a href="/#testimonials">
// // // // //               <Star className="nav-icon" />
// // // // //               <span className="nav-text">Testimonials</span>
// // // // //             </a>
// // // // //           </li>
// // // // //           <li>
// // // // //             <a href="/#contact">
// // // // //               <Phone className="nav-icon" />
// // // // //               <span className="nav-text">Contact</span>
// // // // //             </a>
// // // // //           </li>
// // // // //         </ul>

// // // // //         {/* Right Side: Buttons */}
// // // // //         <div className="navbar-buttons">
// // // // //           <button className="btn login-btn" onClick={() => { setShowLogin(true); setShowSignup(false); }}>
// // // // //             <LogIn className="btn-icon" />
// // // // //             <span className="btn-text">Login</span>
// // // // //           </button>
// // // // //           <button className="btn signup-btn" onClick={() => { setShowSignup(true); setShowLogin(false); }}>
// // // // //             <UserPlus className="btn-icon" />
// // // // //             <span className="btn-text">Signup</span>
// // // // //           </button>
// // // // //         </div>
// // // // //       </nav>
// // // // //       {showLogin && (
// // // // //         <div className="modal-overlay" onClick={closeModal}>
// // // // //           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// // // // //             <Login />
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //       {showSignup && (
// // // // //         <div className="modal-overlay" onClick={closeModal}>
// // // // //           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// // // // //             <button className="modal-close" onClick={closeModal}>×</button>
// // // // //             <Signup />
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </>
// // // // //   );
// // // // // }

// // // // // export default Navbar;            {/* <button className="modal-close" onClick={closeModal}>×</button> */}


// // // // // import React, { useState } from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import { Home, Info, Activity, Phone, LogIn, UserPlus, Star, Menu, X } from "lucide-react";
// // // // // import Login from "./../login/login";
// // // // // import Signup from "./../signUp/signUp";
// // // // // import "./navbar.css";

// // // // // function Navbar() {
// // // // //   const [showLogin, setShowLogin] = useState(false);
// // // // //   const [showSignup, setShowSignup] = useState(false);
// // // // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // // // //   const closeModal = () => {
// // // // //     setShowLogin(false);
// // // // //     setShowSignup(false);
// // // // //   };

// // // // //   const toggleMenu = () => {
// // // // //     setIsMenuOpen(!isMenuOpen);
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       <nav className="navbar">
// // // // //         {/* Left Side: Logo */}
// // // // //         <div className="navbar-logo">
// // // // //           <Link to="/" className="navbar-logo-link">HealthCop</Link>
// // // // //         </div>

// // // // //         {/* Hamburger Menu for Mobile */}
// // // // //         <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
// // // // //           {isMenuOpen ? <X className="nav-icon" /> : <Menu className="nav-icon" />}
// // // // //         </button>

// // // // //         {/* Middle Menu */}
// // // // //         <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
// // // // //           <li>
// // // // //             <a href="/#home" onClick={() => setIsMenuOpen(false)}>
// // // // //               <Home className="nav-icon" />
// // // // //               <span className="nav-text">Home</span>
// // // // //             </a>
// // // // //           </li>
// // // // //           <li>
// // // // //             <a href="/#about" onClick={() => setIsMenuOpen(false)}>
// // // // //               <Info className="nav-icon" />
// // // // //               <span className="nav-text">About</span>
// // // // //             </a>
// // // // //           </li>
// // // // //           <li>
// // // // //             <a href="/#services" onClick={() => setIsMenuOpen(false)}>
// // // // //               <Activity className="nav-icon" />
// // // // //               <span className="nav-text">Services</span>
// // // // //             </a>
// // // // //           </li>
// // // // //           <li>
// // // // //             <a href="/#testimonials" onClick={() => setIsMenuOpen(false)}>
// // // // //               <Star className="nav-icon" />
// // // // //               <span className="nav-text">Testimonials</span>
// // // // //             </a>
// // // // //           </li>
// // // // //           <li>
// // // // //             <a href="/#contact" onClick={() => setIsMenuOpen(false)}>
// // // // //               <Phone className="nav-icon" />
// // // // //               <span className="nav-text">Contact</span>
// // // // //             </a>
// // // // //           </li>
// // // // //         </ul>

// // // // //         {/* Right Side: Buttons */}
// // // // //         <div className={`navbar-buttons ${isMenuOpen ? "active" : ""}`}>
// // // // //           <button
// // // // //             className="btn login-btn"
// // // // //             onClick={() => {
// // // // //               setShowLogin(true);
// // // // //               setShowSignup(false);
// // // // //               setIsMenuOpen(false);
// // // // //             }}
// // // // //           >
// // // // //             <LogIn className="btn-icon" />
// // // // //             <span className="btn-text">Login</span>
// // // // //           </button>
// // // // //           <button
// // // // //             className="btn signup-btn"
// // // // //             onClick={() => {
// // // // //               setShowSignup(true);
// // // // //               setShowLogin(false);
// // // // //               setIsMenuOpen(false);
// // // // //             }}
// // // // //           >
// // // // //             <UserPlus className="btn-icon" />
// // // // //             <span className="btn-text">Signup</span>
// // // // //           </button>
// // // // //         </div>
// // // // //       </nav>

// // // // //       {showLogin && (
// // // // //         // <div className="modal-overlay" onClick={closeModal}>
// // // // //           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// // // // //             <Login />
// // // // //           </div>
// // // // //         // </div>
// // // // //       )}
// // // // //       {showSignup && (
// // // // //         // <div className="modal-overlay" onClick={closeModal}>
// // // // //           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// // // // //             <Signup />
// // // // //           </div>
// // // // //         // </div>
// // // // //       )}
// // // // //     </>
// // // // //   );
// // // // // }

// // // // // export default Navbar;

// // // // import React, { useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import { Home, Info, Activity, Phone, LogIn, UserPlus, Star, Menu, X } from "lucide-react";
// // // // import Login from "./../login/login";
// // // // import Signup from "./../signUp/signUp";
// // // // import "./navbar.css";

// // // // function Navbar() {
// // // //   const [showLogin, setShowLogin] = useState(false);
// // // //   const [showSignup, setShowSignup] = useState(false);
// // // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // // //   const closeModal = () => {
// // // //     setShowLogin(false);
// // // //     setShowSignup(false);
// // // //   };

// // // //   const toggleMenu = () => {
// // // //     setIsMenuOpen(!isMenuOpen);
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <nav className="navbar">
// // // //         {/* Left Side: Logo */}
// // // //         <div className="navbar-logo">
// // // //           <Link to="/" className="navbar-logo-link">HealthCop</Link>
// // // //         </div>

// // // //         {/* Hamburger Menu for Mobile */}
// // // //         <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
// // // //           {isMenuOpen ? <X className="nav-icon" /> : <Menu className="nav-icon" />}
// // // //         </button>

// // // //         {/* Middle Menu */}
// // // //         <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
// // // //           <li>
// // // //             <a href="/#home" onClick={() => setIsMenuOpen(false)}>
// // // //               <Home className="nav-icon" />
// // // //               <span className="nav-text">Home</span>
// // // //             </a>
// // // //           </li>
// // // //           <li>
// // // //             <a href="/#about" onClick={() => setIsMenuOpen(false)}>
// // // //               <Info className="nav-icon" />
// // // //               <span className="nav-text">About</span>
// // // //             </a>
// // // //           </li>
// // // //           <li>
// // // //             <a href="/#services" onClick={() => setIsMenuOpen(false)}>
// // // //               <Activity className="nav-icon" />
// // // //               <span className="nav-text">Services</span>
// // // //             </a>
// // // //           </li>
// // // //           <li>
// // // //             <a href="/#testimonials" onClick={() => setIsMenuOpen(false)}>
// // // //               <Star className="nav-icon" />
// // // //               <span className="nav-text">Testimonials</span>
// // // //             </a>
// // // //           </li>
// // // //           <li>
// // // //             <a href="/#contact" onClick={() => setIsMenuOpen(false)}>
// // // //               <Phone className="nav-icon" />
// // // //               <span className="nav-text">Contact</span>
// // // //             </a>
// // // //           </li>
// // // //         </ul>

// // // //         {/* Right Side: Buttons */}
// // // //         <div className={`navbar-buttons ${isMenuOpen ? "active" : ""}`}>
// // // //           <button
// // // //             className="btn login-btn"
// // // //             onClick={() => {
// // // //               setShowLogin(true);
// // // //               setShowSignup(false);
// // // //               setIsMenuOpen(false);
// // // //             }}
// // // //           >
// // // //             <LogIn className="btn-icon" />
// // // //             <span className="btn-text">Login</span>
// // // //           </button>
// // // //           <button
// // // //             className="btn signup-btn"
// // // //             onClick={() => {
// // // //               setShowSignup(true);
// // // //               setShowLogin(false);
// // // //               setIsMenuOpen(false);
// // // //             }}
// // // //           >
// // // //             <UserPlus className="btn-icon" />
// // // //             <span className="btn-text">Signup</span>
// // // //           </button>
// // // //         </div>
// // // //       </nav>

// // // //       {showLogin && (
// // // //         // <div className="modal-overlay" onClick={closeModal}>
// // // //           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// // // //             <Login />
// // // //           </div>
// // // //         // </div>
// // // //       )}
// // // //       {showSignup && (
// // // //         // <div className="modal-overlay" onClick={closeModal}>
// // // //           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// // // //             <Signup />
// // // //           </div>
// // // //         // </div>
// // // //       )}
// // // //     </>
// // // //   );
// // // // }

// // // // export default Navbar;

// // // import React, { useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import { Home, Info, Activity, Phone, LogIn, UserPlus, Star, Menu, X } from "lucide-react";
// // // import Login from "./../login/login";
// // // import Signup from "./../signUp/signUp";
// // // import "./navbar.css";

// // // function Navbar() {
// // //   const [showLogin, setShowLogin] = useState(false);
// // //   const [showSignup, setShowSignup] = useState(false);
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// // //   const closeModal = () => {
// // //     setShowLogin(false);
// // //     setShowSignup(false);
// // //   };

// // //   const openLogin = () => {
// // //     setShowSignup(false);
// // //     setShowLogin(true);
// // //     setIsMenuOpen(false);
// // //   };

// // //   const toggleMenu = () => {
// // //     setIsMenuOpen(!isMenuOpen);
// // //   };

// // //   return (
// // //     <>
// // //       <nav className="navbar">
// // //         {/* Left Side: Logo */}
// // //         <div className="navbar-logo">
// // //           <Link to="/" className="navbar-logo-link">HealthCop</Link>
// // //         </div>

// // //         {/* Hamburger Menu for Mobile */}
// // //         <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
// // //           {isMenuOpen ? <X className="nav-icon" /> : <Menu className="nav-icon" />}
// // //         </button>

// // //         {/* Middle Menu */}
// // //         <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
// // //           <li>
// // //             <a href="/#home" onClick={() => setIsMenuOpen(false)}>
// // //               <Home className="nav-icon" />
// // //               <span className="nav-text">Home</span>
// // //             </a>
// // //           </li>
// // //           <li>
// // //             <a href="/#about" onClick={() => setIsMenuOpen(false)}>
// // //               <Info className="nav-icon" />
// // //               <span className="nav-text">About</span>
// // //             </a>
// // //           </li>
// // //           <li>
// // //             <a href="/#services" onClick={() => setIsMenuOpen(false)}>
// // //               <Activity className="nav-icon" />
// // //               <span className="nav-text">Services</span>
// // //             </a>
// // //           </li>
// // //           <li>
// // //             <a href="/#testimonials" onClick={() => setIsMenuOpen(false)}>
// // //               <Star className="nav-icon" />
// // //               <span className="nav-text">Testimonials</span>
// // //             </a>
// // //           </li>
// // //           <li>
// // //             <a href="/#contact" onClick={() => setIsMenuOpen(false)}>
// // //               <Phone className="nav-icon" />
// // //               <span className="nav-text">Contact</span>
// // //             </a>
// // //           </li>
// // //         </ul>

// // //         {/* Right Side: Buttons */}
// // //         <div className={`navbar-buttons ${isMenuOpen ? "active" : ""}`}>
// // //           <button
// // //             className="btn login-btn"
// // //             onClick={() => {
// // //               setShowLogin(true);
// // //               setShowSignup(false);
// // //               setIsMenuOpen(false);
// // //             }}
// // //           >
// // //             <LogIn className="btn-icon" />
// // //             <span className="btn-text">Login</span>
// // //           </button>
// // //           <button
// // //             className="btn signup-btn"
// // //             onClick={() => {
// // //               setShowSignup(true);
// // //               setShowLogin(false);
// // //               setIsMenuOpen(false);
// // //             }}
// // //           >
// // //             <UserPlus className="btn-icon" />
// // //             <span className="btn-text">Signup</span>
// // //           </button>
// // //         </div>
// // //       </nav>

// // //       {showLogin && (
// // //         <div className="modal-overlay" onClick={closeModal}>
// // //           {/* <div className="modal-content" onClick={(e) => e.stopPropagation()}> */}
// // //             <Login />
// // //           </div>
// // //         // </div>
// // //       )}
// // //       {showSignup && (
// // //         <div className="modal-overlay" onClick={closeModal}>
// // //           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// // //             <Signup onClose={closeModal} openLogin={openLogin} />
// // //           </div>
// // //         </div>
// // //       )}
// // //     </>
// // //   );
// // // }

// // // export default Navbar;

// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { Home, Info, Activity, Phone, LogIn, UserPlus, Star, Menu, X } from "lucide-react";
// // import Login from "./../login/login";
// // import Signup from "./../signUp/signUp";
// // import "./navbar.css";

// // function Navbar() {
// //   const [showLogin, setShowLogin] = useState(false);
// //   const [showSignup, setShowSignup] = useState(false);
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const closeModal = () => {
// //     setShowLogin(false);
// //     setShowSignup(false);
// //   };

// //   const openLogin = () => {
// //     setShowSignup(false); // Close Signup modal
// //     setShowLogin(true);  // Open Login modal
// //     setIsMenuOpen(false); // Close mobile menu
// //   };

// //   const toggleMenu = () => {
// //     setIsMenuOpen(!isMenuOpen);
// //   };

// //   return (
// //     <>
// //       <nav className="navbar">
// //         {/* Left Side: Logo */}
// //         <div className="navbar-logo">
// //           <Link to="/" className="navbar-logo-link">HealthCop</Link>
// //         </div>

// //         {/* Hamburger Menu for Mobile */}
// //         <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
// //           {isMenuOpen ? <X className="nav-icon" /> : <Menu className="nav-icon" />}
// //         </button>

// //         {/* Middle Menu */}
// //         <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
// //           <li>
// //             <a href="/#home" onClick={() => setIsMenuOpen(false)}>
// //               <Home className="nav-icon" />
// //               <span className="nav-text">Home</span>
// //             </a>
// //           </li>
// //           <li>
// //             <a href="/#about" onClick={() => setIsMenuOpen(false)}>
// //               <Info className="nav-icon" />
// //               <span className="nav-text">About</span>
// //             </a>
// //           </li>
// //           <li>
// //             <a href="/#services" onClick={() => setIsMenuOpen(false)}>
// //               <Activity className="nav-icon" />
// //               <span className="nav-text">Services</span>
// //             </a>
// //           </li>
// //           <li>
// //             <a href="/#testimonials" onClick={() => setIsMenuOpen(false)}>
// //               <Star className="nav-icon" />
// //               <span className="nav-text">Testimonials</span>
// //             </a>
// //           </li>
// //           <li>
// //             <a href="/#contact" onClick={() => setIsMenuOpen(false)}>
// //               <Phone className="nav-icon" />
// //               <span className="nav-text">Contact</span>
// //             </a>
// //           </li>
// //         </ul>

// //         {/* Right Side: Buttons */}
// //         <div className={`navbar-buttons ${isMenuOpen ? "active" : ""}`}>
// //           <button
// //             className="btn login-btn"
// //             onClick={() => {
// //               setShowLogin(true);
// //               setShowSignup(false);
// //               setIsMenuOpen(false);
// //             }}
// //           >
// //             <LogIn className="btn-icon" />
// //             <span className="btn-text">Login</span>
// //           </button>
// //           <button
// //             className="btn signup-btn"
// //             onClick={() => {
// //               setShowSignup(true);
// //               setShowLogin(false);
// //               setIsMenuOpen(false);
// //             }}
// //           >
// //             <UserPlus className="btn-icon" />
// //             <span className="btn-text">Signup</span>
// //           </button>
// //         </div>
// //       </nav>

// //       {showLogin && (
// //         <div className="modal-overlay" onClick={closeModal}>
// //           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// //             <Login onClose={closeModal} openSignup={() => {
// //               setShowLogin(false);
// //               setShowSignup(true);
// //             }} />
// //           </div>
// //         </div>
// //       )}
// //       {showSignup && (
// //         <div className="modal-overlay" onClick={closeModal}>
// //           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
// //             <Signup onClose={closeModal} openLogin={openLogin} />
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }

// // export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Home, Info, Activity, Phone, LogIn, UserPlus, Star, Menu, X } from "lucide-react";
// import Login from "./../login/login";
// import Signup from "./../signUp/signUp";
// import "./navbar.css";

// function Navbar() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const closeModal = () => {
//     setShowLogin(false);
//     setShowSignup(false);
//     setIsMenuOpen(false); // Ensure mobile menu closes when modals close
//   };

//   const openLogin = () => {
//     setShowSignup(false);
//     setShowLogin(true);
//     setIsMenuOpen(false);
//   };

//   const openSignup = () => {
//     setShowLogin(false);
//     setShowSignup(true);
//     setIsMenuOpen(false);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <nav className="navbar" aria-label="Main navigation">
//         {/* Left Side: Logo */}
//         <div className="navbar-logo">
//           <Link to="/" className="navbar-logo-link">HealthCop</Link>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <button
//           className="navbar-toggle"
//           onClick={toggleMenu}
//           aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
//           aria-expanded={isMenuOpen}
//         >
//           {isMenuOpen ? <X className="nav-icon" /> : <Menu className="nav-icon" />}
//         </button>

//         {/* Middle Menu */}
//         <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
//           <li>
//             <a href="/#home" onClick={() => setIsMenuOpen(false)}>
//               <Home className="nav-icon" />
//               <span className="nav-text">Home</span>
//             </a>
//           </li>
//           <li>
//             <a href="/#about" onClick={() => setIsMenuOpen(false)}>
//               <Info className="nav-icon" />
//               <span className="nav-text">About</span>
//             </a>
//           </li>
//           <li>
//             <a href="/#services" onClick={() => setIsMenuOpen(false)}>
//               <Activity className="nav-icon" />
//               <span className="nav-text">Services</span>
//             </a>
//           </li>
//           <li>
//             <a href="/#testimonials" onClick={() => setIsMenuOpen(false)}>
//               <Star className="nav-icon" />
//               <span className="nav-text">Testimonials</span>
//             </a>
//           </li>
//           <li>
//             <a href="/#contact" onClick={() => setIsMenuOpen(false)}>
//               <Phone className="nav-icon" />
//               <span className="nav-text">Contact</span>
//             </a>
//           </li>
//         </ul>

//         {/* Right Side: Buttons */}
//         <div className={`navbar-buttons ${isMenuOpen ? "active" : ""}`}>
//           <button
//             className="btn login-btn"
//             onClick={() => {
//               setShowLogin(true);
//               setShowSignup(false);
//               setIsMenuOpen(false);
//             }}
//             aria-label="Open login modal"
//           >
//             <LogIn className="btn-icon" />
//             <span className="btn-text">Login</span>
//           </button>
//           <button
//             className="btn signup-btn"
//             onClick={() => {
//               setShowSignup(true);
//               setShowLogin(false);
//               setIsMenuOpen(false);
//             }}
//             aria-label="Open signup modal"
//           >
//             <UserPlus className="btn-icon" />
//             <span className="btn-text">Signup</span>
//           </button>
//         </div>
//       </nav>

//       {showLogin && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <Login onClose={closeModal} openSignup={openSignup} />
//           </div>
//         </div>
//       )}
//       {showSignup && (
//         <div className="modal-overlay" onClick={closeModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <Signup onClose={closeModal} openLogin={openLogin} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Info, Activity, Phone, LogIn, UserPlus, Star, Menu, X } from "lucide-react";
import Login from "./../login/login";
import Signup from "./../signUp/signUp";
import "./navbar.css";
import logo from "../../assets/healthcoplogo.png"; // Adjust the path to your logo image

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeModal = () => {
    setShowLogin(false);
    setShowSignup(false);
    setIsMenuOpen(false);
  };

  const openLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
    setIsMenuOpen(false);
  };

  const openSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar" aria-label="Main navigation">
        {/* Left Side: Logo Image */}
        <div className="navbar-logo">
          <Link to="/" className="navbar-logo-link">
            <img src={logo} alt="HealthCop Logo" className="navbar-logo-image" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="nav-icon" /> : <Menu className="nav-icon" />}
        </button>

        {/* Middle Menu */}
        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="/#home" onClick={() => setIsMenuOpen(false)}>
              <Home className="nav-icon" />
              <span className="nav-text">Home</span>
            </a>
          </li>
          <li>
            <a href="/#about" onClick={() => setIsMenuOpen(false)}>
              <Info className="nav-icon" />
              <span className="nav-text">About</span>
            </a>
          </li>
          <li>
            <a href="/#services" onClick={() => setIsMenuOpen(false)}>
              <Activity className="nav-icon" />
              <span className="nav-text">Services</span>
            </a>
          </li>
          <li>
            <a href="/#testimonials" onClick={() => setIsMenuOpen(false)}>
              <Star className="nav-icon" />
              <span className="nav-text">Testimonials</span>
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={() => setIsMenuOpen(false)}>
              <Phone className="nav-icon" />
              <span className="nav-text">Contact</span>
            </a>
          </li>
        </ul>

        {/* Right Side: Buttons */}
        <div className={`navbar-buttons ${isMenuOpen ? "active" : ""}`}>
          <button
            className="btn login-btn"
            onClick={() => {
              setShowLogin(true);
              setShowSignup(false);
              setIsMenuOpen(false);
            }}
            aria-label="Open login modal"
          >
            <LogIn className="btn-icon" />
            <span className="btn-text">Login</span>
          </button>
          <button
            className="btn signup-btn"
            onClick={() => {
              setShowSignup(true);
              setShowLogin(false);
              setIsMenuOpen(false);
            }}
            aria-label="Open signup modal"
          >
            <UserPlus className="btn-icon" />
            <span className="btn-text">Signup</span>
          </button>
        </div>
      </nav>

      {showLogin && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Login onClose={closeModal} openSignup={openSignup} />
          </div>
        </div>
      )}
      {showSignup && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Signup onClose={closeModal} openLogin={openLogin} />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;