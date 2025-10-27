// // // import React, { useState } from "react";
// // // import "./signUp.css";

// // // function Signup() {
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [confirmPassword, setConfirmPassword] = useState("");
// // //   const [showPassword, setShowPassword] = useState(false);

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (password !== confirmPassword) {
// // //       alert("Passwords do not match!");
// // //       return;
// // //     }
// // //     console.log("Signup submitted:", { name, email, password });
// // //     // Add your signup logic here
// // //   };

// // //   return (
// // //     <div className="signup-container">
// // //       <div className="signup-card">
// // //         <h2>Sign Up for HealthCop</h2>
// // //         <form onSubmit={handleSubmit}>
// // //           <div className="form-group">
// // //             <label htmlFor="name">Full Name</label>
// // //             <input
// // //               type="text"
// // //               id="name"
// // //               value={name}
// // //               onChange={(e) => setName(e.target.value)}
// // //               placeholder="Enter your full name"
// // //               required
// // //             />
// // //           </div>
// // //           <div className="form-group">
// // //             <label htmlFor="email">Email</label>
// // //             <input
// // //               type="email"
// // //               id="email"
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //               placeholder="Enter your email"
// // //               required
// // //             />
// // //           </div>
// // //           <div className="form-group">
// // //             <label htmlFor="password">Password</label>
// // //             <div className="password-wrapper">
// // //               <input
// // //                 type={showPassword ? "text" : "password"}
// // //                 id="password"
// // //                 value={password}
// // //                 onChange={(e) => setPassword(e.target.value)}
// // //                 placeholder="Enter your password"
// // //                 required
// // //               />
// // //               <button
// // //                 type="button"
// // //                 className="toggle-password"
// // //                 onClick={() => setShowPassword(!showPassword)}
// // //               >
// // //                 {showPassword ? "Hide" : "Show"}
// // //               </button>
// // //             </div>
// // //           </div>
// // //           <div className="form-group">
// // //             <label htmlFor="confirm-password">Confirm Password</label>
// // //             <input
// // //               type={showPassword ? "text" : "password"}
// // //               id="confirm-password"
// // //               value={confirmPassword}
// // //               onChange={(e) => setConfirmPassword(e.target.value)}
// // //               placeholder="Confirm your password"
// // //               required
// // //             />
// // //           </div>
// // //           <button type="submit" className="signup-submit-btn">
// // //             Sign Up
// // //           </button>
// // //         </form>
// // //         <p className="login-link">
// // //           Already have an account? <a href="#login">Login</a>
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default Signup;
// // import React, { useState } from "react";
// // import "./signUp.css";

// // function Signup({ onClose, openLogin }) {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [error, setError] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (password !== confirmPassword) {
// //       setError("Passwords do not match!");
// //       return;
// //     }
// //     setError("");
// //     console.log("Signup submitted:", { name, email, password });
// //     // Add your signup logic here (e.g., API call)
// //   };

// //   return (
// //     <div className="sign-up-container">
// //       <div className="sign-up-card">
// //         <button className="sign-up-close-btn" onClick={onClose} aria-label="Close signup form">
// //           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// //             <path d="M6 18L18 6M6 6l12 12" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //           </svg>
// //         </button>
// //         <h2 className="sign-up-title">Sign Up for HealthCop</h2>
// //         {error && <p className="sign-up-error-message">{error}</p>}
// //         <form onSubmit={handleSubmit}>
// //           <div className="sign-up-form-group">
// //             <label className="sign-up-form-label" htmlFor="name">Full Name</label>
// //             <input
// //               type="text"
// //               id="name"
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //               placeholder="Enter your full name"
// //               className="sign-up-form-input"
// //               required
// //             />
// //           </div>
// //           <div className="sign-up-form-group">
// //             <label className="sign-up-form-label" htmlFor="email">Email</label>
// //             <input
// //               type="email"
// //               id="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               placeholder="Enter your email"
// //               className="sign-up-form-input"
// //               required
// //             />
// //           </div>
// //           <div className="sign-up-form-group">
// //             <label className="sign-up-form-label" htmlFor="password">Password</label>
// //             <div className="sign-up-password-wrapper">
// //               <input
// //                 type={showPassword ? "text" : "password"}
// //                 id="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 placeholder="Enter your password"
// //                 className="sign-up-form-input"
// //                 required
// //               />
// //               <button
// //                 type="button"
// //                 className="sign-up-toggle-password"
// //                 onClick={() => setShowPassword(!showPassword)}
// //               >
// //                 {showPassword ? "Hide" : "Show"}
// //               </button>
// //             </div>
// //           </div>
// //           <div className="sign-up-form-group">
// //             <label className="sign-up-form-label" htmlFor="confirm-password">Confirm Password</label>
// //             <input
// //               type={showPassword ? "text" : "password"}
// //               id="confirm-password"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               placeholder="Confirm your password"
// //               className="sign-up-form-input"
// //               required
// //             />
// //           </div>
// //           <button type="submit" className="sign-up-submit-btn">
// //             Sign Up
// //           </button>
// //         </form>
// //         <p className="sign-up-login-link">
// //           Already have an account?{" "}
// //           <a href="#login" onClick={openLogin}>Login</a>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Signup;

// import React, { useState } from "react";
// import "./signUp.css";

// function Signup({ onClose, openLogin }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       setError("Passwords do not match!");
//       return;
//     }
//     setError("");
//     console.log("Signup submitted:", { name, email, password });
//     // Add your signup logic here (e.g., API call)
//   };

//   const handleLoginLinkClick = (e) => {
//     e.preventDefault(); // Prevent default anchor behavior
//     openLogin(); // Open Login modal
//   };

//   return (
//     <div className="sign-up-container">
//       <div className="sign-up-card">
//         <button className="sign-up-close-btn" onClick={onClose} aria-label="Close signup form">
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M6 18L18 6M6 6l12 12" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         </button>
//         <h2 className="sign-up-title">Sign Up for HealthCop</h2>
//         {error && <p className="sign-up-error-message">{error}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="sign-up-form-group">
//             <label className="sign-up-form-label" htmlFor="name">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               placeholder="Enter your full name"
//               className="sign-up-form-input"
//               required
//             />
//           </div>
//           <div className="sign-up-form-group">
//             <label className="sign-up-form-label" htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="sign-up-form-input"
//               required
//             />
//           </div>
//           <div className="sign-up-form-group">
//             <label className="sign-up-form-label" htmlFor="password">Password</label>
//             <div className="sign-up-password-wrapper">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 className="sign-up-form-input"
//                 required
//               />
//               <button
//                 type="button"
//                 className="sign-up-toggle-password"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>
//             </div>
//           </div>
//           <div className="sign-up-form-group">
//             <label className="sign-up-form-label" htmlFor="confirm-password">Confirm Password</label>
//             <input
//               type={showPassword ? "text" : "password"}
//               id="confirm-password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm your password"
//               className="sign-up-form-input"
//               required
//             />
//           </div>
//           <button type="submit" className="sign-up-submit-btn">
//             Sign Up
//           </button>
//         </form>
//         <p className="sign-up-login-link">
//           Already have an account?{" "}
//           <a href="#login" onClick={handleLoginLinkClick}>Login</a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import "./signUp.css";

function Signup({ onClose, openLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    console.log("Signup submitted:", { name, email, password });
    // Add your signup logic here (e.g., API call)
  };

  const handleLoginLinkClick = (e) => {
    e.preventDefault();
    openLogin();
  };

  return (
    <div className="sign-up-container">
      <div className="sign-up-card">
        <button className="sign-up-close-btn" onClick={onClose} aria-label="Close signup form">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 18L18 6M6 6l12 12" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <h2 className="sign-up-title">Sign Up for HealthCop</h2>
        {error && <p className="sign-up-error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="sign-up-form-group">
            <label className="sign-up-form-label" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              className="sign-up-form-input"
              required
            />
          </div>
          <div className="sign-up-form-group">
            <label className="sign-up-form-label" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="sign-up-form-input"
              required
            />
          </div>
          <div className="sign-up-form-group">
            <label className="sign-up-form-label" htmlFor="password">Password</label>
            <div className="sign-up-password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="sign-up-form-input"
                required
              />
              <button
                type="button"
                className="sign-up-toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="sign-up-form-group">
            <label className="sign-up-form-label" htmlFor="confirm-password">Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="sign-up-form-input"
              required
            />
          </div>
          <button type="submit" className="sign-up-submit-btn">
            Sign Up
          </button>
        </form>
        <p className="sign-up-login-link">
          Already have an account?{" "}
          <a href="#login" onClick={handleLoginLinkClick}>Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;