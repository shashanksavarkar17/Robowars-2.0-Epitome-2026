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
        <h1 className="tf-26">EPITOME'26</h1>

        <div className="org-grid">
          <div className="org-card">Event Head: 
            <div className="org-name">John Doe</div>
          </div>
          <div className="org-card">Event Head: 
            <div className="org-name">John Doe</div>
            </div>
          <div className="org-card">Event Coordinator: 
            <div className="org-name">John Doe</div>
            </div>
          <div className="org-card">Event Coordinator: 
            <div className="org-name">John Doe</div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Organizers;
