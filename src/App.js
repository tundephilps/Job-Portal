import React from "react";
import "./App.scss";
import Homepage from "./components/Homepage/Homepage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import JobList from "./components/Jobs/JobList";
import JobDetails from "./components/Jobs/JobDetails";
import Terms from "./components/TermsCondition/Terms";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Profile" element={<Profile />} />

          <Route path="/JobList" element={<JobList />} />

          <Route path="/Terms&Condition" element={<Terms />} />
          <Route path="/JobDetails/:id" element={<JobDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
