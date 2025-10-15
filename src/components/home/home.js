// // // import React from "react";
// // // import "./home.css"; // import CSS for this component

// // // const Home = () => {
// // //   const pingAPI = async () => {
// // //     try {
// // //       const res = await fetch("/api/health");
// // //       if (!res.ok) throw new Error("Request failed");
// // //       const data = await res.json();
// // //       alert(`API status: ${data.status.toUpperCase()} • ${new Date(data.time).toLocaleString()}`);
// // //     } catch (err) {
// // //       alert("API unreachable ❌");
// // //     }
// // //   };

// // //   return (
// // //     <div className="home">
// // //       <header className="home-header">
// // //         <h1>Welcome 👋</h1>
// // //         <p>This is your Home component.</p>
// // //       </header>

// // //       <main>
// // //         <section className="home-card">
// // //           <h2>Home</h2>
// // //           <p>This is your first page (Home page).</p>
// // //           <button onClick={pingAPI}>Ping API</button>
// // //         </section>
// // //       </main>

// // //       <footer className="home-footer">
// // //         <small>© {new Date().getFullYear()} Your Project</small>
// // //       </footer>
// // //     </div>
// // //   );
// // // };

// // // export default Home;

// // import React from "react";
// // import "./home.css";

// // const Home = () => {
// //   const backgroundImage = process.env.PUBLIC_URL + "/images/homebg1.jpg";

// //   return (
// //     <div
// //       className="home"
// //       style={{
// //         backgroundImage: `url(${backgroundImage})`,
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //         backgroundRepeat: "no-repeat",
// //         minHeight: "100vh",
// //         display: "flex",
// //         flexDirection: "column",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         textAlign: "center",
// //         color: "#fff",
// //       }}
// //     >
// //       <header className="home-header">
// //         <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "1rem", textShadow: "2px 2px 6px rgba(0,0,0,0.6)" }}>
// //           HealthCop Pvt. Ltd
// //         </h1>
// //         <p style={{ fontSize: "1.5rem", fontWeight: "300", textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}>
// //           Refinding Social Healthcare
// //         </p>
// //       </header>

// //       <footer className="home-footer" style={{ position: "absolute", bottom: "20px", color: "#e5e7eb" }}>
// //         <small>© {new Date().getFullYear()} HealthCop Pvt. Ltd</small>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Home;

// import React, { useState, useEffect } from "react";
// import "./home.css";

// const Home = () => {
//   const images = [
//     process.env.PUBLIC_URL + "/images/homebg1.jpg",
//     process.env.PUBLIC_URL + "/images/homebg2.jpg",
//     process.env.PUBLIC_URL + "/images/homebg1.jpg",
//     process.env.PUBLIC_URL + "/images/homebg2.jpg",
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 10000); // Change image every 10 seconds

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, [images.length]);

//   return (
//     <div className="home">
//       <div
//         className="background-slideshow"
//         style={{
//           backgroundImage: `url(${images[currentImageIndex]})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: -1,
//           opacity: 1,
//           transition: "opacity 1s ease-in-out",
//         }}
//       ></div>
//       <header className="home-header">
//         <h1
//           style={{
//             fontSize: "3rem",
//             fontWeight: "bold",
//             marginBottom: "1rem",
//             textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
//           }}
//         >
//           HealthCop Pvt. Ltd
//         </h1>
//         <p
//           style={{
//             fontSize: "1.5rem",
//             fontWeight: "300",
//             textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
//           }}
//         >
//           Refinding Social Healthcare
//         </p>
//       </header>
//       <footer
//         className="home-footer"
//         style={{ position: "absolute", bottom: "20px", color: "#e5e7eb" }}
//       >
//         <small>© {new Date().getFullYear()} HealthCop Pvt. Ltd</small>
//       </footer>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const images = [
    process.env.PUBLIC_URL + "/images/homebg5.jpg",
    process.env.PUBLIC_URL + "/images/homebg2.jpg",
    process.env.PUBLIC_URL + "/images/homebg3.jpg",
    process.env.PUBLIC_URL + "/images/homebg4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      },); // Match transition duration in CSS
    }, 7000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="home">
      <div
        className={`background-slideshow current ${isTransitioning ? "fade-out" : ""}`}
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div
        className={`background-slideshow next ${isTransitioning ? "fade-in" : ""}`}
        style={{
          backgroundImage: `url(${images[nextImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <header className="home-header">
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
          }}
        >
          HealthCop Pvt. Ltd
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "300",
            textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
          }}
        >
          Refinding Social Healthcare
        </p>
      </header>
      <footer
        className="home-footer"
        style={{ position: "absolute", bottom: "20px", color: "#e5e7eb" }}
      >
        <small>© {new Date().getFullYear()} HealthCop Pvt. Ltd</small>
      </footer>
    </div>
  );
};

export default Home;