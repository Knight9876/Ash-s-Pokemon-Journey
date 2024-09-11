import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Timeline from "./components/Timeline";
import About from "./components/About";
import RegionDetails from "./components/RegionDetails"; // Import the new component
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/timeline/:regionName" element={<RegionDetails />} /> {/* New route */}
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
