import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Timeline.css";

const timelineData = [
  {
    date: "10 Jan 2025",
    title: "Registration Opens",
    description: "Early bird registrations begin for all weight categories.",
    status: "completed"
  },
  {
    date: "05 Feb 2025",
    title: "Team Briefing",
    description: "Virtual orientation and rulebook clarification session.",
    status: "active"
  },
  {
    date: "15 Feb 2025",
    title: "Technical Inspection",
    description: "Safety checks and weight verification of the robots.",
    status: "upcoming"
  },
  {
    date: "20 Feb 2025",
    title: "The Main Event",
    description: "Knockout rounds and Grand Finale at the main arena.",
    status: "upcoming"
  }
];

const Timeline = () => {
  return (
    <>
      <Navbar />
      <div className="timeline-page">
        <div className="timeline-header">
          <span className="subtitle">Event Roadmap</span>
          <h1>Battle <span>Timeline</span></h1>
        </div>

        <div className="timeline-container">
          {/* Vertical Line */}
          <div className="timeline-track"></div>

          {timelineData.map((item, index) => (
            <div key={index} className={`timeline-item ${item.status}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="event-date">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Timeline;