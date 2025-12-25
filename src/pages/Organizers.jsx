import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Organizers.css";

const organizers = [
  { id: 1, name: "Name 1", role: "Lead Organizer", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Name 2", role: "Technical Head", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Name 3", role: "Event Manager", image: "https://via.placeholder.com/150" },
];

const Organizers = () => {
  return (
    <>
      <Navbar />
      <div className="organizers-wrapper">
        <h1 className="organizers-title">Meet Our <span>Team</span></h1>
        
        <div className="organizers-grid">
          {organizers.map((person) => (
            <div key={person.id} className="organizer-card">
              <div className="image-container">
                <img src={person.image} alt={person.name} />
              </div>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
              <div className="social-pill">Contact</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Organizers;