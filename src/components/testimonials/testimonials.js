
// // import React, { useRef } from "react";
// // import "./testimonials.css";
// // import { ChevronLeft, ChevronRight } from "lucide-react";

// // const testimonials = [
// //   {
// //     id: 1,
// //     name: "Client Name",
// //     quote: "Tempor erat elit rubum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
// //     role: "Profession",
// //     image: "/images/test1.jpg",
// //   },
// //   {
// //     id: 2,
// //     name: "Client Name",
// //     quote: "Tempor erat elit rubum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
// //     role: "Profession",
// //     image: "/images/test2.jpg",
// //   },
// //   {
// //     id: 3,
// //     name: "Client Name",
// //     quote: "Tempor erat elit rubum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
// //     role: "Profession",
// //     image: "/images/test3.jpg",
// //   },
// //   {
// //     id: 4,
// //     name: "Client Name",
// //     quote: "Tempor erat elit rubum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
// //     role: "Profession",
// //     image: "/images/test4.jpg",
// //   },
// //   {
// //     id: 5,
// //     name: "Client Name",
// //     quote: "Tempor erat elit rubum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
// //     role: "Profession",
// //     image: "/images/test5.jpg",
// //   },
// // ];

// // function Testimonials() {
// //   const scrollRef = useRef(null);

// //   const scrollLeft = () => {
// //     if (scrollRef.current) {
// //       const cardWidth = scrollRef.current.querySelector(".testimonial-card").offsetWidth + 20; // Include gap
// //       scrollRef.current.scrollBy({ left: -cardWidth * 3, behavior: "smooth" });
// //     }
// //   };

// //   const scrollRight = () => {
// //     if (scrollRef.current) {
// //       const cardWidth = scrollRef.current.querySelector(".testimonial-card").offsetWidth + 20; // Include gap
// //       scrollRef.current.scrollBy({ left: cardWidth * 3, behavior: "smooth" });
// //     }
// //   };

// //   return (
// //     <section id="testimonials" className="testimonials-section">
// //       <h2 className="testimonials-title">What Clients Say!</h2>
// //       <div className="testimonials-container">
// //         <button className="arrow-button left" onClick={scrollLeft}>
// //           <ChevronLeft className="arrow-icon" />
// //         </button>
// //         <div className="testimonials-wrapper" ref={scrollRef}>
// //           {testimonials.map((testimonial, index) => (
// //             <div
// //               key={testimonial.id}
// //               className={`testimonial-card ${index < 3 ? "large-card" : ""}`}
// //             >
// //               <div className="testimonial-quote-container">
// //                 <p className="testimonial-quote">“{testimonial.quote}”</p>
// //                 <div className="testimonial-image-container">
// //                   <img
// //                     src={testimonial.image}
// //                     alt={`${testimonial.name}'s avatar`}
// //                     className="testimonial-image"
// //                   />
// //                 </div>
// //               </div>
// //               <h3 className="testimonial-name">{testimonial.name}</h3>
// //               <p className="testimonial-role">{testimonial.role}</p>
// //             </div>
// //           ))}
// //         </div>
// //         <button className="arrow-button right" onClick={scrollRight}>
// //           <ChevronRight className="arrow-icon" />
// //         </button>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Testimonials;

// import React, { useRef, useEffect, useState } from "react";
// import "./testimonials.css";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Client Name",
//     quote: "Tempor erat elit rubum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
//     role: "Profession",
//     image: "/images/test1.jpg",
//   },
//   {
//     id: 2,
//     name: "Client Name",
//     quote: "Tempor erat elit rubum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
//     role: "Profession",
//     image: "/images/test2.jpg",
//   },
//   {
//     id: 3,
//     name: "Client Name",
//     quote: "Tempor erat elit rubum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
//     role: "Profession",
//     image: "/images/test3.jpg",
//   },
//   {
//     id: 4,
//     name: "Client Name",
//     quote: "Tempor erat elit rubum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
//     role: "Profession",
//     image: "/images/test4.jpg",
//   },
//   {
//     id: 5,
//     name: "Client Name",
//     quote: "Tempor erat elit rubum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
//     role: "Profession",
//     image: "/images/test5.jpg",
//   },
// ];

// function Testimonials() {
//   const scrollRef = useRef(null);
//   const [highlightedIndex, setHighlightedIndex] = useState(2); // Start with middle card (index 2 for 5 cards)

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       const cardWidth = scrollRef.current.querySelector(".testimonial-card").offsetWidth + 20; // Include gap
//       scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       const cardWidth = scrollRef.current.querySelector(".testimonial-card").offsetWidth + 20; // Include gap
//       scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     const wrapper = scrollRef.current;
//     if (!wrapper) return;

//     const updateHighlightedCard = () => {
//       const cards = wrapper.querySelectorAll(".testimonial-card");
//       const wrapperRect = wrapper.getBoundingClientRect();
//       const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;

//       let closestIndex = 0;
//       let minDistance = Infinity;

//       cards.forEach((card, index) => {
//         const cardRect = card.getBoundingClientRect();
//         const cardCenter = cardRect.left + cardRect.width / 2;
//         const distance = Math.abs(wrapperCenter - cardCenter);

//         if (distance < minDistance) {
//           minDistance = distance;
//           closestIndex = index;
//         }
//       });

//       setHighlightedIndex(closestIndex);
//     };

//     wrapper.addEventListener("scroll", updateHighlightedCard);
//     updateHighlightedCard(); // Initial call

//     return () => wrapper.removeEventListener("scroll", updateHighlightedCard);
//   }, []);

//   return (
//     <section id="testimonials" className="testimonials-section">
//       <h2 className="testimonials-title">What Clients Say!</h2>
//       <div className="testimonials-container">
//         <button className="arrow-button left" onClick={scrollLeft}>
//           <ChevronLeft className="arrow-icon" />
//         </button>
//         <div className="testimonials-wrapper" ref={scrollRef}>
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={testimonial.id}
//               className={`testimonial-card ${index === highlightedIndex ? "highlighted-card" : ""}`}
//             >
//               <div className="testimonial-quote-container">
//                 <p className="testimonial-quote">“{testimonial.quote}”</p>
//                 <div className="testimonial-image-container">
//                   <img
//                     src={testimonial.image}
//                     alt={`${testimonial.name}'s avatar`}
//                     className="testimonial-image"
//                   />
//                 </div>
//               </div>
//               <h3 className="testimonial-name">{testimonial.name}</h3>
//               <p className="testimonial-role">{testimonial.role}</p>
//             </div>
//           ))}
//         </div>
//         <button className="arrow-button right" onClick={scrollRight}>
//           <ChevronRight className="arrow-icon" />
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;

import React, { useRef, useEffect, useState } from "react";
import "./testimonials.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Client Name",
    quote: "Tempor erat elit rubum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    role: "Profession",
    image: "/images/test1.jpg",
  },
  {
    id: 2,
    name: "Client Name",
    quote: "Tempor erat elit rubum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    role: "Profession",
    image: "/images/test2.jpg",
  },
  {
    id: 3,
    name: "Client Name",
    quote: "Tempor erat elit rubum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    role: "Profession",
    image: "/images/test3.jpg",
  },
  {
    id: 4,
    name: "Client Name",
    quote: "Tempor erat elit rubum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    role: "Profession",
    image: "/images/test4.jpg",
  },
  {
    id: 5,
    name: "Client Name",
    quote: "Tempor erat elit rubum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
    role: "Profession",
    image: "/images/test5.jpg",
  },
];

function Testimonials() {
  const scrollRef = useRef(null);
  const [highlightedIndex, setHighlightedIndex] = useState(2); // Start with middle card

  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector(".testimonial-card").offsetWidth + 20; // Include gap
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector(".testimonial-card").offsetWidth + 20; // Include gap
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const wrapper = scrollRef.current;
    if (!wrapper) return;

    const updateHighlightedCard = () => {
      const cards = wrapper.querySelectorAll(".testimonial-card");
      const wrapperRect = wrapper.getBoundingClientRect();
      const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(wrapperCenter - cardCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setHighlightedIndex(closestIndex);
    };

    wrapper.addEventListener("scroll", updateHighlightedCard);
    updateHighlightedCard(); // Initial call

    return () => wrapper.removeEventListener("scroll", updateHighlightedCard);
  }, []);

  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="testimonials-title">What Clients Say!</h2>
      <div className="testimonials-container">
        <button className="arrow-button left" onClick={scrollLeft} aria-label="Scroll left">
          <ChevronLeft className="arrow-icon" />
        </button>
        <div className="testimonials-wrapper" ref={scrollRef}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${index === highlightedIndex ? "highlighted-card" : ""}`}
            >
              <div className="testimonial-quote-container">
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-image-container">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s avatar`}
                    className="testimonial-image"
                  />
                </div>
              </div>
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
        </div>
        <button className="arrow-button right" onClick={scrollRight} aria-label="Scroll right">
          <ChevronRight className="arrow-icon" />
        </button>
      </div>
    </section>
  );
}

export default Testimonials;