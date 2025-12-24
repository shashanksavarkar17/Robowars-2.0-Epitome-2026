import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Media.css";

const Media = () => {
  return (
    <>
      <Navbar />
      <div className="page media">
        <h1>Media Gallery</h1>

        <div className="media-grid">
          <div className="media-box">Image 1</div>
          <div className="media-box">Image 2</div>
          <div className="media-box">Video 1</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Media;
