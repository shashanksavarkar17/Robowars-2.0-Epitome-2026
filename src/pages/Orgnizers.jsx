import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Orgnizers.css";

const Organizers = () => {
  return (
    <>
      <Navbar />
      <div className="page organizers">
        <h1>Organizing Team</h1>

        <div className="org-grid">
          <div className="org-card">Event Director</div>
          <div className="org-card">Technical Head</div>
          <div className="org-card">Arena Manager</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Organizers;
