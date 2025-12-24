import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Rules.css";

const Rules = () => {

  // Optional: fade-in on scroll
  useEffect(() => {
    const items = document.querySelectorAll(".rule-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));

    return () => items.forEach((item) => observer.unobserve(item));
  }, []);

  return (
    <>
      <Navbar />
      <div className="page rules">
        <h1>Competition Rules</h1>
        <ul>
          <li className="rule-item">Robots must fit within size limits.</li>
          <li className="rule-item">No flammable materials allowed.</li>
          <li className="rule-item">All matches are knockout style.</li>
          <li className="rule-item">Teams must report 30 min before match.</li>
          <li className="rule-item">Judges decisions are final.</li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Rules;
