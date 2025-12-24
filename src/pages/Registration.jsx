import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Registration.css";

const Registration = () => {
  return (
    <>
      <Navbar />

      <div className="register-wrapper">
        <div className="register-card">
          <h1>Team Registration</h1>

          <form className="register-form">
            <input type="text" placeholder="Team Name" />
            <input type="text" placeholder="Captain Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Contact Number" />

            <button type="submit">Submit Registration</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Registration;
