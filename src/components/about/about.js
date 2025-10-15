// // import React from "react";
// // import "./about.css";
// // import { FaUserMd, FaBuilding, FaHeartbeat, FaHandsHelping } from "react-icons/fa";

// // const About = () => {
// //   return (
// //     <div className="about-wrapper">
// //       {/* Header Section */}
// //       <div className="about-header">
// //         <h1 className="about-main-title">
// //           Comprehensive & <span>Tech-Backed</span> Holistic Wellness at Work
// //         </h1>
// //         <p className="about-tagline">Redefining Social Healthcare</p>
// //       </div>

// //       {/* Content Section */}
// //       <div className="about-content">
// //         <div className="about-left">
// //           <h2 className="about-subtitle">Who We Are</h2>
// //           <p className="about-description">
// //             At <strong>Health Cop Pvt. Ltd.</strong>, we are committed to 
// //             revolutionizing organizational health & wellness by combining technology, 
// //             expertise, and compassion.
// //           </p>

// //           <div className="about-cards">
// //             <div className="about-card">
// //               <FaUserMd className="about-icon" />
// //               <h3>Expert Founders</h3>
// //               <p>Founded by a team of IITians and Doctors</p>
// //             </div>

// //             <div className="about-card">
// //               <FaBuilding className="about-icon" />
// //               <h3>Pioneers in Wellness</h3>
// //               <p>India’s pioneering platform for holistic workplace wellness</p>
// //             </div>

// //             <div className="about-card">
// //               <FaHeartbeat className="about-icon" />
// //               <h3>Industry-Specific Solutions</h3>
// //               <p>Tailored health & wellness solutions for organizations</p>
// //             </div>

// //             <div className="about-card">
// //               <FaHandsHelping className="about-icon" />
// //               <h3>One-Stop Solution</h3>
// //               <p>Complete care for all corporate wellness needs</p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Right Side Image */}
// //         <div className="about-right">
// //           <img 
// //             src="/images/about-illustration.png" 
// //             alt="Holistic Wellness" 
// //             className="about-image"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default About;

// import React from "react";
// import "./about.css";

// const About = () => {
//   return (
//     <main className="about">
//       {/* HERO */}
//       <section className="about__hero" role="banner" aria-label="About Health Cop">
//         <div className="container">
//           <div className="hero__eyebrow">About Us</div>
//           <h1 className="hero__title">
//             Comprehensive & Tech-Backed <span>Holistic Wellness</span> at Work
//           </h1>
//           <p className="hero__subtitle">Redefining Social Healthcare</p>
//         </div>
//       </section>

//       {/* CORE SECTION */}
//       <section className="about__core">
//         <div className="container grid">
//           <div className="core__text">
//             <h2 className="section__title">Who We Are</h2>
//             <p className="lead">
//               <strong>Health Cop Pvt. Ltd.</strong> builds a trusted ecosystem that blends
//               technology with clinical expertise to elevate workplace health and wellness.
//               We partner with organizations to design clear, measurable programs that
//               are easy to adopt and sustain.
//             </p>

//             <ul className="bullet">
//               <li>Founded by a team of IITians and Doctors</li>
//               <li>India’s pioneering platform for organizational holistic wellness</li>
//               <li>Industry-specific health & wellness solution providers</li>
//               <li>One-stop solution for all corporate health and wellness needs</li>
//             </ul>
//           </div>

//          <figure className="core__media">
//   <img
//     src="./images/health.png"   // from public/images/
//     alt="Holistic wellness concept with nature and technology"
//     className="media__image"
//   />
// </figure>

//         </div>
//       </section>

//       {/* PRINCIPLES (short, professional, no gimmicks) */}
//       <section className="about__principles">
//         <div className="container principles grid-3">
//           <div className="principle">
//             <h3>Clinical Rigor</h3>
//             <p>Evidence-based protocols, clear outcomes, and data you can act on.</p>
//           </div>
//           <div className="principle">
//             <h3>Technology First</h3>
//             <p>Secure, scalable platforms that make wellness programs frictionless.</p>
//           </div>
//           <div className="principle">
//             <h3>People-Centric</h3>
//             <p>Designed around employee needs, culture fit, and accessibility.</p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default About;

import React from "react";
import "./about.css";

const About = () => {
  return (
    <main className="about">
      {/* HERO */}
      <section className="about__hero" role="banner" aria-label="About Health Cop">
        <div className="container">
          <div className="hero__eyebrow">About Us</div>
          <h1 className="hero__title">
            Comprehensive & Tech-Backed <span>Holistic Wellness</span> at Work
          </h1>
          <p className="hero__subtitle">Redefining Social Healthcare</p>
        </div>
      </section>

      {/* CORE SECTION */}
      <section className="about__core">
        <div className="container grid">
          <div className="core__text">
            <h2 className="section__title">Who We Are</h2>
            <p className="lead">
              <strong>Health Cop Pvt. Ltd.</strong> builds a trusted ecosystem that blends
              technology with clinical expertise to elevate workplace health and wellness.
              We partner with organizations to design clear, measurable programs that
              are easy to adopt and sustain.
            </p>

            <ul className="bullet">
              <li>Founded by a team of IITians and Doctors</li>
              <li>India’s pioneering platform for organizational holistic wellness</li>
              <li>Industry-specific health & wellness solution providers</li>
              <li>One-stop solution for all corporate health and wellness needs</li>
            </ul>
          </div>

          <figure className="core__media">
            <div className="collage">
              <img
                src="/images/homebg4.jpg"
                alt="Holistic wellness concept with nature"
                className="media__image collage__image--large"
              />
              <img
                src="/images/about2.jpg"
                alt="Technology in wellness"
                className="media__image collage__image--medium"
              />
              <img
                src="./images/homebg8.jpg"
                alt="Employee wellness program"
                className="media__image collage__image--small"
              />
              <img
                src="./images/homebg7.jpg"
                alt="Health and technology integration"
                className="media__image collage__image--medium"
              />
            </div>
          </figure>
        </div>
      </section>

     
    </main>
  );
};

export default About;