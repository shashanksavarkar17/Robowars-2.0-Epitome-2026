import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Rules.css";

const Rules = () => {
  const ruleCategories = [
    {
      title: "General Guidelines",
      rules: [
        "All team details must be accurate and verified during registration.",
        "Registration fees are non-refundable under any circumstances.",
        "Each captain must provide a valid email to receive the official briefing.",
      ],
    },
    {
      title: "Robot Specifications",
      rules: [
        "Maximum weight limit for the robot is 15kg (including batteries).",
        "External power sources are strictly prohibited; robots must be wireless.",
        "No projectiles, liquids, or fire-based weapons are allowed in the arena.",
      ],
    },
    {
      title: "Arena Gameplay",
      rules: [
        "Each round lasts for 3 minutes of active combat.",
        "A robot is considered 'out' if it remains immobile for 10 seconds.",
        "The referee's decision is final and binding for all participants.",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="rules-page">
        <div className="rules-header">
          <span className="subtitle">Tournament Protocol</span>
          <h1>Official <span>Rules</span> & Regulations</h1>
        </div>

        <div className="rules-container">
          {ruleCategories.map((category, index) => (
            <div key={index} className="rule-card">
              <div className="rule-card-header">
                <div className="rule-number">0{index + 1}</div>
                <h2>{category.title}</h2>
              </div>
              <ul className="rule-list">
                {category.rules.map((rule, i) => (
                  <li key={i}>{rule}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="rules-disclaimer">
          <p>Failure to comply with these rules will lead to immediate disqualification.</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rules;