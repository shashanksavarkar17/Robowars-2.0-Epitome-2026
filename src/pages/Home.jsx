import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-wrapper">
        {/* Cinematic Hero Section */}
        <section className="hero">
          <div className="hero-overlay"></div>
          {/* Add a background video link or a high-res battle image */}
          <div className="hero-content">
            <span className="hero-subtitle">The Ultimate Metal Mayhem</span>
            <h1 className="hero-title">UNLEASH THE <span>BEAST</span></h1>
            <p className="hero-description">
              India's fiercest combat robotics tournament is back. 
              Witness the clash of titanium and electricity.
            </p>
            <div className="hero-btns">
              <Link to="/register" className="cta-primary">Enter the Arena</Link>
              <Link to="/media" className="cta-secondary">Watch Trailer</Link>
            </div>
          </div>
        </section>

        {/* Dynamic News Ticker */}
        <div className="news-ticker">
          <div className="ticker-wrap">
            <div className="ticker-item">Registration is LIVE!</div>
            <div className="ticker-item">Prize Pool: ₹1,00,000</div>
            <div className="ticker-item">Event Date: 20 Feb 2025</div>
            <div className="ticker-item">New Weight Category Added</div>
          </div>
        </div>

        {/* Feature Highlights */}
        <section className="highlights">
          <div className="highlight-card">
            <h2>50+</h2>
            <p>War Robots</p>
          </div>
          <div className="highlight-card">
            <h2>₹1L+</h2>
            <p>Prize Pool</p>
          </div>
          <div className="highlight-card">
            <h2>10K+</h2>
            <p>Spectators</p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;