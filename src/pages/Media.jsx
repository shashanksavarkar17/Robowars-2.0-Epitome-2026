import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Media.css";

const mediaData = [
  { 
    id: 1, 
    type: "Trailer", 
    title: "Official Cinematic Trailer", 
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // YouTube Embed Link
    thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" 
  },
  { 
    id: 2, 
    type: "Image", 
    title: "Grand Opening Night", 
    url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4", 
    thumb: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4" 
  },
  { 
    id: 3, 
    type: "Poster", 
    title: "Event Main Poster", 
    url: "https://images.unsplash.com/photo-1531050171669-a2444781444b", 
    thumb: "https://images.unsplash.com/photo-1531050171669-a2444781444b" 
  },
  // Add more items as needed...
];

const Media = () => {
  const [filter, setFilter] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState(null);

  const categories = ["All", "Video", "Image", "Trailer", "Teaser", "Poster"];

  const filteredMedia = filter === "All" 
    ? mediaData 
    : mediaData.filter(item => item.type === filter);

  return (
    <>
      <Navbar />
      <div className="media-container">
        <h1 className="media-title">Media Gallery</h1>

        <div className="filter-bar">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="media-grid">
          {filteredMedia.map(item => (
            <div key={item.id} className="media-card" onClick={() => setSelectedMedia(item)}>
              <div className="media-overlay">
                <div className="play-icon">
                  {item.type !== "Image" && item.type !== "Poster" ? "▶" : "+"}
                </div>
                <span>{item.type}</span>
                <h3>{item.title}</h3>
              </div>
              <img src={item.thumb} alt={item.title} className="media-content" />
            </div>
          ))}
        </div>

        {/* Maximize Modal */}
        {selectedMedia && (
          <div className="modal-overlay" onClick={() => setSelectedMedia(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedMedia(null)}>&times;</button>
              
              <div className="modal-body">
                {selectedMedia.type === "Image" || selectedMedia.type === "Poster" ? (
                  <img src={selectedMedia.url} alt="Large View" />
                ) : (
                  <div className="video-wrapper">
                    <iframe 
                      src={selectedMedia.url + "?autoplay=1"} 
                      title="Video Player"
                      frameBorder="0" 
                      allow="autoplay; encrypted-media" 
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                <div className="modal-info">
                   <h2>{selectedMedia.title}</h2>
                   <p>{selectedMedia.type}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Media;