import React, { useState } from "react";
import "./service.css";
import { FaStethoscope, FaHeartbeat, FaMicroscope, FaAmbulance, FaSyringe, FaBrain, FaXRay, FaTooth } from "react-icons/fa";

const services = [
  {
    title: "General Consultation",
    description: "Comprehensive health checkups and expert medical advice tailored to your needs.",
    icon: <FaStethoscope />,
  },
  {
    title: "Cardiology",
    description: "Advanced heart care services including diagnostics, treatment, and rehabilitation.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Laboratory Tests",
    description: "Accurate lab testing with fast results to support timely diagnosis.",
    icon: <FaMicroscope />,
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency response with fully equipped ambulances and critical care support.",
    icon: <FaAmbulance />,
  },
  {
    title: "Vaccinations",
    description: "Protective immunizations and preventive healthcare for all age groups.",
    icon: <FaSyringe />,
  },
  {
    title: "Neurology",
    description: "Specialized treatments for brain and nervous system disorders.",
    icon: <FaBrain />,
  },
  {
    title: "Radiology",
    description: "Modern X-ray, MRI, and CT scan facilities for accurate diagnostics.",
    icon: <FaXRay />,
  },
  {
    title: "Dental Care",
    description: "Complete oral healthcare, from preventive checkups to advanced dental treatments.",
    icon: <FaTooth />,
  },
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="services-section">
      <h2 className="services-title">Our Health Services</h2>
      <p className="services-subtitle">
        Delivering trusted, patient-focused care with advanced medical expertise.
      </p>

      <div className="services-grid">
        {visibleServices.map((service, index) => (
          <div className="service-card fade-in" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>

      <button 
        className="more-btn" 
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "View Less" : "View More Services"}
      </button>
    </section>
  );
};

export default Services;