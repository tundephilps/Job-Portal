import React from "react";
import "./components/Pages/Styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Pages/Homepage";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Projects from "./components/Pages/Projects";
import Popup from "./components/Popups/Popup";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 200,
    });
  });

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/Popup/:id" element={<Popup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
