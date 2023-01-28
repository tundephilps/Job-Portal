import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Navbar/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import JobDetails from "./components/JobDetails/JobDetails";
import JobList from "./components/JobList/JobList";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/JobList" element={<JobList />} />

          <Route path="/Profile" element={<Profile />} />

          <Route path="/Contact" element={<Contact />} />
          <Route path="/JobDetails/:id" element={<JobDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
