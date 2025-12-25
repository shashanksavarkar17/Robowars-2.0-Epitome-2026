
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo-section">
          <img 
            src="/assets/robowars-logo.png" 
            alt="Robowars Logo" 
            className="navbar-icon" 
          />
          <div className="logo">ROBOWARS</div>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rules">Rules</Link></li>
        <li><Link to="/timeline">Timeline</Link></li>
        <li><Link to="/organizers">Organizers</Link></li>
        <li><Link to="/media">Media</Link></li>
        </ul>

        {/* Action Button */}
        <div className="nav-actions">
          <Link className="contact-btn" to="/register">Register Now!</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
