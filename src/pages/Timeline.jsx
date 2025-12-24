import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Timeline.css";

const Timeline = () => {
  return (
    <>
      <Navbar />
      <div className="page timeline">
        <h1>Event Timeline</h1>

        <div className="timeline-item">Day 1 – Registration & Inspection</div>
        <div className="timeline-item">Day 2 – Qualifier Matches</div>
        <div className="timeline-item">Day 3 – Semi Finals & Finals</div>
      </div>
      <Footer />
    </>
  );
};

export default Timeline;
