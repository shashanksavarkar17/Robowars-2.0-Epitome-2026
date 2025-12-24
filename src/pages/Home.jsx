import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>ROBO<span>WARS</span></h1>
        <p>India’s Ultimate Robot Combat Championship</p>
      </section>

      <section className="home-section">
        <h2>Why RoboWars?</h2>
        <p>
          Battle-tested robots. High energy arenas.
          National-level competition for engineers and innovators.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default Home;
