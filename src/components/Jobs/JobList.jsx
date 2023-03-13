import React from "react";
import Footer from "../Homepage/Footer";
import Navbar from "../Homepage/Navbar";
import Job from "./Job";
import JobCards from "./JobCards";
import Search from "./Search";
import Updates from "./Updates";

const JobList = (props) => {
  return (
    <>
      <Navbar />
      <div className="w-[85%] m-auto bg-white">
        <Search />
        <JobCards />
        <Updates />
      </div>
      <Footer />
    </>
  );
};

export default JobList;
