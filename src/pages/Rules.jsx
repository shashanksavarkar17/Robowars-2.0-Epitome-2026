import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Rules.css";

const Rules = () => {
  return (
    <>
      <Navbar />
      <div className="page rules">
        <h1>Competition Rules</h1>
        <ul>
          <li>Robot weight must not exceed 60kg</li>
          <li>No explosive or liquid weapons</li>
          <li>Match duration: 3 minutes</li>
          <li>Judges decision is final</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Rules;
