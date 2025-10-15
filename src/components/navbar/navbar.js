

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { Home, Info, Activity, Phone, LogIn, UserPlus, Star } from "lucide-react";
import Login from "./../login/login";
import Signup from "./../signUp/signUp";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const closeModal = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* Left Side: Logo */}
        <div className="navbar-logo">HealthCop</div>

        {/* Middle Menu */}
        <ul className="navbar-links">
          <li>
            <a href="/#home">
              <Home className="nav-icon" />
              <span className="nav-text">Home</span>
            </a>
          </li>
          <li>
            <a href="/#about">
              <Info className="nav-icon" />
              <span className="nav-text">About</span>
            </a>


            
          </li>
          <li>
            <a href="/#services">
              <Activity className="nav-icon" />
              <span className="nav-text">Services</span>
            </a>
          </li>
          <li>
            <a href="/#testimonials">
              <Star className="nav-icon" />
              <span className="nav-text">Testimonials</span>
            </a>
          </li>
          <li>
            <a href="/#contact">
              <Phone className="nav-icon" />
              <span className="nav-text">Contact</span>
            </a>
          </li>
        </ul>

        {/* Right Side: Buttons */}
        <div className="navbar-buttons">
          <button className="btn login-btn" onClick={() => { setShowLogin(true); setShowSignup(false); }}>
            <LogIn className="btn-icon" />
            <span className="btn-text">Login</span>
          </button>
          <button className="btn signup-btn" onClick={() => { setShowSignup(true); setShowLogin(false); }}>
            <UserPlus className="btn-icon" />
            <span className="btn-text">Signup</span>
          </button>
        </div>
      </nav>
      {showLogin && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <Login />
          </div>
        </div>
      )}
      {showSignup && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <Signup />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;