import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ROBO<span>WARS</span></div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rules">Rules</Link></li>
        <li><Link to="/timeline">Timeline</Link></li>
        <li><Link to="/organizers">Organizers</Link></li>
        <li><Link to="/media">Media</Link></li>
        <li>
          <Link className="register-btn" to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
