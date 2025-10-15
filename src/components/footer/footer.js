import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hc-footer">
      <div className="hc-footer-container">
        {/* Brand + About */}
        <div className="hc-footer-brand">
          <h2 className="hc-footer-logo">HealthCop</h2>
          <p className="hc-footer-about">
            Empowering individuals to take control of their health with 
            smart monitoring, tips, and wellness guidance.
          </p>
          <div className="hc-footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Links */}
        <div className="hc-footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="hc-footer-links">
          <h4>Resources</h4>
          <ul>
            <li><a href="#wellness">Wellness Check</a></li>
            <li><a href="#guides">Health Guides</a></li>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="hc-footer-contact">
          <h4>Contact Us</h4>
          <p>Email: support@healthcop.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Mumbai, India</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="hc-footer-bottom">
        <p>© {year} HealthCop. All rights reserved.</p>
      </div>
    </footer>
  );
}
