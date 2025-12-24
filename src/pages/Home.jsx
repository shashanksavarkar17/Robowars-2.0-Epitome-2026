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
        <p>2<sup>nd</sup> edition orgnized at EPITOME'26</p>
      </section>

      <Footer />
    </>
  );
};

export default Home;
