import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Get in touch with HealthCop Pvt. Ltd for your healthcare needs!</p>
      <div className="contact-info">
        <p>Email: contact@healthcop.com</p>
        <p>Phone: +91 123 456 7890</p>
        <p>Address: 123 Wellness Road, Mumbai, Maharashtra, India</p>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.987429128239!2d72.82580431490466!3d19.06405828709395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630b243f2c3%3A0x5b0b3e4a3c7f8a9b!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1698234567890!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="HealthCop Location"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;