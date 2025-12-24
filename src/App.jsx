import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Rules from "./pages/Rules";
import Timeline from "./pages/Timeline";
import Orgnizers from "./pages/Orgnizers";
import Media from "./pages/Media";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/organizers" element={<Orgnizers />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
